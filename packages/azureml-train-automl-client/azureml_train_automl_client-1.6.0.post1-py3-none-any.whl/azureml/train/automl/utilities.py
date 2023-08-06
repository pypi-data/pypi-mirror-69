# ---------------------------------------------------------
# Copyright (c) Microsoft Corporation. All rights reserved.
# ---------------------------------------------------------
"""Utility methods used in automated ML in Azure Machine Learning."""
from typing import cast, List, Union, Optional
import json
import logging
import requests

from azureml._common._error_response.utils import code_in_error_response, is_error_code
from azureml._common._error_response._error_response_constants import ErrorCodes, ErrorHierarchy
from azureml.automl.core.shared import utilities as common_utilities, logging_utilities
from azureml.automl.core.shared.exceptions import ErrorTypes, ServiceException, UserException
from azureml.automl.core.shared.reference_codes import ReferenceCodes
from azureml.exceptions import ServiceException as AzureMLServiceException
from msrest.exceptions import HttpOperationError

from . import _constants_azureml
from .exceptions import (FeatureUnavailableException,
                         MissingValueException,
                         MalformedValueException,
                         InvalidValueException)
from .constants import ComputeTargets

logger = logging.getLogger(__name__)


def friendly_http_exception(exception: Union[AzureMLServiceException, HttpOperationError], api_name: str) -> None:
    """
    Friendly exceptions wrapping HTTP exceptions.

    This function passes through the JSON-formatted error responses.

    :param exception: An exception raised from a network call.
    :param api_name: The name of the API call that caused the exception.
    :raises: :class:`azureml.exceptions.AzureMLException`

    """
    # TODO: After JOS and SDK error handling is established and JOS returns the error codes that are mapped
    #  to error hierarchy, use _raise_exception() only to raise correct AutoMLException and remove this function.
    try:
        status_code = exception.error.response.status_code

        # Raise bug with msrest team that response.status_code is always 500
        if status_code == 500:
            try:
                message = exception.message
                substr = 'Received '
                substr_idx = message.find(substr) + len(substr)
                status_code = int(message[substr_idx:substr_idx + 3])
            except Exception:
                pass
    except Exception:
        raise exception.with_traceback(exception.__traceback__)

    if status_code in _constants_azureml.HTTP_ERROR_MAP:
        http_error = _constants_azureml.HTTP_ERROR_MAP[status_code]
    else:
        http_error = _constants_azureml.HTTP_ERROR_MAP['default']

    if api_name in http_error:
        exception_message = "{0} error raised. {1}".format(http_error['Name'], http_error[api_name])
        pii_free_exception_message = exception_message
    elif status_code == 400:
        # 400 bad request could be basically anything. Just pass the original exception message through
        exception_message = "{0} error raised. {1}".format(http_error['Name'], exception.message)
        pii_free_exception_message = "{0} error raised.".format(http_error['Name'])
    else:
        exception_message = "{0} error raised. {1}".format(http_error['Name'], http_error['default'])
        pii_free_exception_message = exception_message

    if http_error['type'] == ErrorTypes.User:
        raise UserException.from_exception(
            exception,
            msg=exception_message,
            reference_code=ReferenceCodes._FRIENDLY_HTTP_EXCEPTION_USER_EXCEPTION,
            target=http_error['type']
        ).with_generic_msg(pii_free_exception_message)

    raise ServiceException.from_exception(
        exception,
        msg=exception_message,
        reference_code=ReferenceCodes._FRIENDLY_HTTP_EXCEPTION_SERVICE_EXCEPTION,
        target=http_error['type']
    ).with_generic_msg(pii_free_exception_message)


def _raise_exception(e: AzureMLServiceException) -> None:
    if is_error_code(e, ErrorHierarchy.FEATUREUNAVAILABLE_ERROR) is True:
        raise FeatureUnavailableException(_get_error_message(e)) from None
    if is_error_code(e, ErrorHierarchy.INVALID_ERROR) is True:
        raise InvalidValueException(_get_error_message(e)) from None
    if is_error_code(e, ErrorHierarchy.MALFORMED_ERROR) is True:
        raise MalformedValueException(_get_error_message(e)) from None
    if is_error_code(e, ErrorHierarchy.BLANKOREMPTY_ERROR) is True:
        raise MissingValueException(_get_error_message(e)) from None


def _get_error_message(e: AzureMLServiceException) -> str:
    error_message = None
    try:
        error_message = json.loads(e.response.content)['error']['message']
    except Exception:
        error_message = e.response.content
        pass
    return cast(str, error_message)


def get_primary_metrics(task):
    """
    Get the primary metrics supported for a given task.

    :param task: The string "classification" or "regression".
    :return: A list of the primary metrics supported for the task.
    """
    return common_utilities.get_primary_metrics(task)


def _get_package_version():
    """
    Get the package version string.

    :return: The version string.
    """
    from . import __version__
    return __version__


def _is_gpu() -> bool:
    is_gpu = False
    try:
        import torch
        is_gpu = torch.cuda.is_available()
    except ImportError:
        pass
    return is_gpu


def _is_azurevm() -> bool:
    """
    Use the Azure Instance Metadata Service to find out if this code is running on Azure VM.

    :return: bool
    """
    is_azure_vm = False
    headers = {'Metadata': 'true'}
    url = "http://169.254.169.254/metadata/instance?api-version=2017-04-02"
    timeout = 5

    try:
        response = requests.get(url, headers=headers, timeout=timeout)
        if response.status_code == requests.codes.ok:
            is_azure_vm = True

    except requests.exceptions.ConnectionError as ce:
        # Do nothing, by default return false
        pass

    except Exception as e:
        # log the error
        logger.info('failed in metadata instance call')
    return is_azure_vm


class _InternalComputeTypes:
    """Class to represent all Compute types."""

    _AZURE_NOTEBOOK_VM_IDENTIFICATION_FILE_PATH = "/mnt/azmnt/.nbvm"
    _AZURE_SERVICE_ENV_VAR_KEY = "AZURE_SERVICE"
    _AZURE_BATCHAI_CLUSTER_TYPE_ENV_VAR_KEY = "AZ_BATCHAI_VM_OFFER"

    AML_COMPUTE = "AmlCompute"
    ARCADIA = "Microsoft.ProjectArcadia"
    AIBUILDER = "Microsoft.AIBuilder"
    AZUREML_COMPUTE = "azureml"
    COMPUTE_INSTANCE = "ComputeInstance"
    DSI = "aml-workstation"
    COSMOS = "Microsoft.SparkOnCosmos"
    DATABRICKS = "Microsoft.AzureDataBricks"
    HDINSIGHTS = "Microsoft.HDI"
    LOCAL = "local"
    NOTEBOOK_VM = "Microsoft.AzureNotebookVM"
    REMOTE = "remote"

    _AZURE_SERVICE_TO_COMPUTE_TYPE = {
        ARCADIA: ARCADIA,
        COSMOS: COSMOS,
        DATABRICKS: DATABRICKS,
        HDINSIGHTS: HDINSIGHTS,
        AIBUILDER: AIBUILDER
    }

    """
    Defining only needed cluster types
    """
    _AZURE_BATCHAI_TO_CLUSTER_TYPE = {
        AZUREML_COMPUTE: AML_COMPUTE,
        DSI: COMPUTE_INSTANCE
    }

    @classmethod
    def get(cls) -> List[str]:
        return [
            _InternalComputeTypes.ARCADIA,
            _InternalComputeTypes.AIBUILDER,
            _InternalComputeTypes.AML_COMPUTE,
            _InternalComputeTypes.COMPUTE_INSTANCE,
            _InternalComputeTypes.COSMOS,
            _InternalComputeTypes.DATABRICKS,
            _InternalComputeTypes.HDINSIGHTS,
            _InternalComputeTypes.LOCAL,
            _InternalComputeTypes.NOTEBOOK_VM,
            _InternalComputeTypes.REMOTE,
        ]

    @classmethod
    def identify_compute_type(cls, compute_target: str,
                              azure_service: Optional[str] = None) -> Optional[str]:
        """
        Identify compute target and return appropriate key from _Compute_Type.

        For notebook VMs we need to check existence of a specific file.
        For Project Arcadia, HD Insights, Spark on Cosmos, Azure data bricks, AIBuilder, we need to use
        AZURE_SERVICE environment variable which is set to specific values.
        For AMLCompute and ContainerInstance, check AZ_BATCHAI_CLUSTER_TYPE environment variable.
        These values are stored in _InternalComputeTypes.
        """
        import os
        if os.path.isfile(_InternalComputeTypes._AZURE_NOTEBOOK_VM_IDENTIFICATION_FILE_PATH):
            return _InternalComputeTypes.NOTEBOOK_VM

        cluster_type = os.environ.get(_InternalComputeTypes._AZURE_BATCHAI_CLUSTER_TYPE_ENV_VAR_KEY)
        if ((cluster_type is not None) and (cluster_type in _InternalComputeTypes._AZURE_BATCHAI_TO_CLUSTER_TYPE)):
            return _InternalComputeTypes._AZURE_BATCHAI_TO_CLUSTER_TYPE.get(cluster_type)

        azure_service = azure_service or os.environ.get(_InternalComputeTypes._AZURE_SERVICE_ENV_VAR_KEY)
        if azure_service is not None:
            return _InternalComputeTypes._AZURE_SERVICE_TO_COMPUTE_TYPE.get(azure_service, None)

        if _is_azurevm():
            return _InternalComputeTypes.REMOTE

        compute_type = None
        if compute_target == ComputeTargets.LOCAL:
            compute_type = _InternalComputeTypes.LOCAL
        elif compute_target == ComputeTargets.AMLCOMPUTE:
            compute_type = _InternalComputeTypes.AML_COMPUTE
        else:
            compute_type = _InternalComputeTypes.REMOTE

        return compute_type
