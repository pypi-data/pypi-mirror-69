"""
Main interface for migrationhub-config service client

Usage::

    import boto3
    from mypy_boto3.migrationhub_config import MigrationHubConfigClient

    session = boto3.Session()

    client: MigrationHubConfigClient = boto3.client("migrationhub-config")
    session_client: MigrationHubConfigClient = session.client("migrationhub-config")
"""
# pylint: disable=arguments-differ,redefined-outer-name,redefined-builtin
from typing import Any, Dict, TYPE_CHECKING, Type
from botocore.exceptions import ClientError as Boto3ClientError
from mypy_boto3_migrationhub_config.type_defs import (
    CreateHomeRegionControlResultTypeDef,
    DescribeHomeRegionControlsResultTypeDef,
    GetHomeRegionResultTypeDef,
    TargetTypeDef,
)


__all__ = ("MigrationHubConfigClient",)


class Exceptions:
    AccessDeniedException: Type[Boto3ClientError]
    ClientError: Type[Boto3ClientError]
    DryRunOperation: Type[Boto3ClientError]
    InternalServerError: Type[Boto3ClientError]
    InvalidInputException: Type[Boto3ClientError]
    ServiceUnavailableException: Type[Boto3ClientError]
    ThrottlingException: Type[Boto3ClientError]


class MigrationHubConfigClient:
    """
    [MigrationHubConfig.Client documentation](https://boto3.amazonaws.com/v1/documentation/api/1.13.13/reference/services/migrationhub-config.html#MigrationHubConfig.Client)
    """

    exceptions: Exceptions

    def can_paginate(self, operation_name: str) -> bool:
        """
        [Client.can_paginate documentation](https://boto3.amazonaws.com/v1/documentation/api/1.13.13/reference/services/migrationhub-config.html#MigrationHubConfig.Client.can_paginate)
        """

    def create_home_region_control(
        self, HomeRegion: str, Target: TargetTypeDef, DryRun: bool = None
    ) -> CreateHomeRegionControlResultTypeDef:
        """
        [Client.create_home_region_control documentation](https://boto3.amazonaws.com/v1/documentation/api/1.13.13/reference/services/migrationhub-config.html#MigrationHubConfig.Client.create_home_region_control)
        """

    def describe_home_region_controls(
        self,
        ControlId: str = None,
        HomeRegion: str = None,
        Target: TargetTypeDef = None,
        MaxResults: int = None,
        NextToken: str = None,
    ) -> DescribeHomeRegionControlsResultTypeDef:
        """
        [Client.describe_home_region_controls documentation](https://boto3.amazonaws.com/v1/documentation/api/1.13.13/reference/services/migrationhub-config.html#MigrationHubConfig.Client.describe_home_region_controls)
        """

    def generate_presigned_url(
        self,
        ClientMethod: str,
        Params: Dict[str, Any] = None,
        ExpiresIn: int = 3600,
        HttpMethod: str = None,
    ) -> str:
        """
        [Client.generate_presigned_url documentation](https://boto3.amazonaws.com/v1/documentation/api/1.13.13/reference/services/migrationhub-config.html#MigrationHubConfig.Client.generate_presigned_url)
        """

    def get_home_region(self) -> GetHomeRegionResultTypeDef:
        """
        [Client.get_home_region documentation](https://boto3.amazonaws.com/v1/documentation/api/1.13.13/reference/services/migrationhub-config.html#MigrationHubConfig.Client.get_home_region)
        """
