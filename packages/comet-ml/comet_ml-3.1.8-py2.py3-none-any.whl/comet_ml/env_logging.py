# -*- coding: utf-8 -*-
# *******************************************************
#   ____                     _               _
#  / ___|___  _ __ ___   ___| |_   _ __ ___ | |
# | |   / _ \| '_ ` _ \ / _ \ __| | '_ ` _ \| |
# | |__| (_) | | | | | |  __/ |_ _| | | | | | |
#  \____\___/|_| |_| |_|\___|\__(_)_| |_| |_|_|
#
#  Sign up for free at http://www.comet.ml
#  Copyright (C) 2015-2020 Comet ML INC
#  This file can not be copied and/or distributed without the express
#  permission of Comet ML Inc.
# *******************************************************

"""
Author: Boris Feld

This module contains the functions dedicated to logging the environment
information

"""

import inspect
import io
import logging
import os
import platform
import socket
import sys

import netifaces
import requests
from six.moves.urllib.parse import urlparse

from ._typing import Any, Callable, Dict, List, Optional, TypedDict, cast
from .connection import get_backend_address
from .messages import SystemDetailsMessage
from .utils import get_user

LOGGER = logging.getLogger(__name__)


def get_pid():
    return os.getpid()


def get_hostname():
    return socket.gethostname()


def get_os():
    return platform.platform(aliased=True)


def get_os_type():
    return platform.system()


def get_python_version_verbose():
    return sys.version


def get_python_version():
    return platform.python_version()


def get_network_interfaces_ips():
    try:
        ips = []
        for interface in netifaces.interfaces():
            for link in netifaces.ifaddresses(interface).get(netifaces.AF_INET, []):
                ips.append(link["addr"])
        return ips

    except Exception:
        LOGGER.warning("Failed to log all interfaces ips", exc_info=True)
        return None


def get_ip():
    try:
        s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
        server_address = get_backend_address()
        parsed = urlparse(server_address)
        host = parsed.hostname
        port = parsed.port
        if port is None:
            port = {"http": 80, "https": 443}.get(parsed.scheme, 0)
        s.connect((host, port))
        addr = s.getsockname()[0]
        s.close()
        return addr

    except socket.error:
        LOGGER.warning("Failed to log ip", exc_info=True)
        return None


def get_command():
    return sys.argv


def get_env_variables(blacklist, os_environ):
    # type: (List[str], Dict[str, str]) -> Dict[str, str]

    lowercase_blacklist = [pattern.lower() for pattern in blacklist]

    def filter_env_variable(env_variable_name):
        # type: (str) -> bool
        """ Filter environment variable names containing at least one of the blacklist pattern
        """
        lowercase_env_variable_name = env_variable_name.lower()
        for pattern in lowercase_blacklist:
            if pattern in lowercase_env_variable_name:
                return False

        return True

    return {key: value for key, value in os_environ.items() if filter_env_variable(key)}


def get_env_details():
    return {
        "pid": get_pid(),
        "hostname": get_hostname(),
        "os": get_os(),
        "os_type": get_os_type(),
        "python_version_verbose": get_python_version_verbose(),
        "python_version": get_python_version(),
        "user": get_user(),
        "network_interfaces_ips": get_network_interfaces_ips(),
        "ip": get_ip(),
        "command": get_command(),
        "python_exe": sys.executable,
    }


def get_env_details_message(env_blacklist, include_env=False):
    # type: (List[str], bool) -> SystemDetailsMessage
    if include_env:
        env = get_env_variables(env_blacklist, os.environ)
    else:
        env = None

    os_type, _, os_release, _, machine, processor = platform.uname()

    return SystemDetailsMessage(
        command=get_command(),
        env=env,
        hostname=get_hostname(),
        ip=get_ip(),
        machine=machine,
        network_interfaces_ips=get_network_interfaces_ips(),
        os_release=os_release,
        os_type=os_type,
        os=get_os(),
        pid=get_pid(),
        processor=processor,
        python_exe=sys.executable,
        python_version_verbose=get_python_version_verbose(),
        python_version=get_python_version(),
        user=get_user(),
    )


def get_caller_source_code():
    """ Returns the source code from the first caller that isn't Comet
    """
    for frame in inspect.stack(context=1):
        module = inspect.getmodule(frame[0])
        if module is not None:
            module_name = module.__name__
            if not (
                module_name.startswith("comet_ml") or module_name.startswith("mlflow")
            ):
                filename = module.__file__.rstrip("cd")
                with open(filename) as f:
                    return f.read()
        else:
            return None  # perhaps in ipython interactive


def get_jupyter_source_code():
    """
    Get the Jupyter source code from the history. Assumes that this
    method is run in a jupyter environment.

    Returns the command-history as a string that lead to this point.
    """

    def in_format(n):
        return "_i%s" % n

    import IPython

    ipy = IPython.get_ipython()
    source = io.StringIO()
    n = 1
    while in_format(n) in ipy.ns_table["user_local"]:
        source.write("# %%%% In [%s]:\n" % n)
        source.write(ipy.ns_table["user_local"][in_format(n)])
        source.write("\n\n")
        n += 1
    return source.getvalue()


def postprocess_gcp_cloud_metadata(cloud_metadata):
    # type: (Dict[str, Any]) -> Dict[str, Any]

    # Attributes contains custom metadata and also contains Kubernetes config,
    # startup script and secrets, filter it out
    if "attributes" in cloud_metadata:
        del cloud_metadata["attributes"]

    return cloud_metadata


CLOUD_METADATA_MAPPING = {
    "AWS": {
        "url": "http://169.254.169.254/latest/dynamic/instance-identity/document",
        "headers": {},
    },
    "Azure": {
        "url": "http://169.254.169.254/metadata/instance?api-version=2019-08-15",
        "headers": {"Metadata": "true"},
    },
    "GCP": {
        "url": "http://169.254.169.254/computeMetadata/v1/instance/?recursive=true&alt=json",
        "headers": {"Metadata-Flavor": "Google"},
        "postprocess_function": postprocess_gcp_cloud_metadata,
    },
}

ProviderMapping = TypedDict(
    "ProviderMapping",
    {
        "url": str,
        "headers": Dict[str, str],
        "postprocess_function": Optional[Callable[[Dict[str, Any]], Dict[str, Any]]],
    },
)
CloudDetails = TypedDict("CloudDetails", {"provider": str, "metadata": Dict[str, Any]})


def get_env_cloud_details(timeout=1):
    # type: (int) -> Optional[CloudDetails]
    for provider in CLOUD_METADATA_MAPPING.keys():
        try:
            params = cast(ProviderMapping, CLOUD_METADATA_MAPPING[provider])
            response = requests.get(
                params["url"], headers=params["headers"], timeout=timeout
            )
            response.raise_for_status()
            response_data = response.json()

            postprocess_function = params.get("postprocess_function")
            if postprocess_function is not None:
                response_data = postprocess_function(response_data)

            return {"provider": provider, "metadata": response_data}
        except Exception as e:
            LOGGER.debug(
                "Not running on %s, couldn't retrieving metadata: %r", provider, e
            )

    return None
