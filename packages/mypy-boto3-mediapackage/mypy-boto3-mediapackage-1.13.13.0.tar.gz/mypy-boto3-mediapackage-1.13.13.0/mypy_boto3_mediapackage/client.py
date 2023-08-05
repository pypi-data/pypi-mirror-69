"""
Main interface for mediapackage service client

Usage::

    import boto3
    from mypy_boto3.mediapackage import MediaPackageClient

    session = boto3.Session()

    client: MediaPackageClient = boto3.client("mediapackage")
    session_client: MediaPackageClient = session.client("mediapackage")
"""
# pylint: disable=arguments-differ,redefined-outer-name,redefined-builtin
import sys
from typing import Any, Dict, List, TYPE_CHECKING, Type, overload
from botocore.exceptions import ClientError as Boto3ClientError
from mypy_boto3_mediapackage.paginator import (
    ListChannelsPaginator,
    ListHarvestJobsPaginator,
    ListOriginEndpointsPaginator,
)
from mypy_boto3_mediapackage.type_defs import (
    AuthorizationTypeDef,
    CmafPackageCreateOrUpdateParametersTypeDef,
    CreateChannelResponseTypeDef,
    CreateHarvestJobResponseTypeDef,
    CreateOriginEndpointResponseTypeDef,
    DashPackageTypeDef,
    DescribeChannelResponseTypeDef,
    DescribeHarvestJobResponseTypeDef,
    DescribeOriginEndpointResponseTypeDef,
    HlsPackageTypeDef,
    ListChannelsResponseTypeDef,
    ListHarvestJobsResponseTypeDef,
    ListOriginEndpointsResponseTypeDef,
    ListTagsForResourceResponseTypeDef,
    MssPackageTypeDef,
    RotateChannelCredentialsResponseTypeDef,
    RotateIngestEndpointCredentialsResponseTypeDef,
    S3DestinationTypeDef,
    UpdateChannelResponseTypeDef,
    UpdateOriginEndpointResponseTypeDef,
)

if sys.version_info >= (3, 8):
    from typing import Literal
else:
    from typing_extensions import Literal


__all__ = ("MediaPackageClient",)


class Exceptions:
    ClientError: Type[Boto3ClientError]
    ForbiddenException: Type[Boto3ClientError]
    InternalServerErrorException: Type[Boto3ClientError]
    NotFoundException: Type[Boto3ClientError]
    ServiceUnavailableException: Type[Boto3ClientError]
    TooManyRequestsException: Type[Boto3ClientError]
    UnprocessableEntityException: Type[Boto3ClientError]


class MediaPackageClient:
    """
    [MediaPackage.Client documentation](https://boto3.amazonaws.com/v1/documentation/api/1.13.13/reference/services/mediapackage.html#MediaPackage.Client)
    """

    exceptions: Exceptions

    def can_paginate(self, operation_name: str) -> bool:
        """
        [Client.can_paginate documentation](https://boto3.amazonaws.com/v1/documentation/api/1.13.13/reference/services/mediapackage.html#MediaPackage.Client.can_paginate)
        """

    def create_channel(
        self, Id: str, Description: str = None, Tags: Dict[str, str] = None
    ) -> CreateChannelResponseTypeDef:
        """
        [Client.create_channel documentation](https://boto3.amazonaws.com/v1/documentation/api/1.13.13/reference/services/mediapackage.html#MediaPackage.Client.create_channel)
        """

    def create_harvest_job(
        self,
        EndTime: str,
        Id: str,
        OriginEndpointId: str,
        S3Destination: S3DestinationTypeDef,
        StartTime: str,
    ) -> CreateHarvestJobResponseTypeDef:
        """
        [Client.create_harvest_job documentation](https://boto3.amazonaws.com/v1/documentation/api/1.13.13/reference/services/mediapackage.html#MediaPackage.Client.create_harvest_job)
        """

    def create_origin_endpoint(
        self,
        ChannelId: str,
        Id: str,
        Authorization: AuthorizationTypeDef = None,
        CmafPackage: CmafPackageCreateOrUpdateParametersTypeDef = None,
        DashPackage: DashPackageTypeDef = None,
        Description: str = None,
        HlsPackage: HlsPackageTypeDef = None,
        ManifestName: str = None,
        MssPackage: MssPackageTypeDef = None,
        Origination: Literal["ALLOW", "DENY"] = None,
        StartoverWindowSeconds: int = None,
        Tags: Dict[str, str] = None,
        TimeDelaySeconds: int = None,
        Whitelist: List[str] = None,
    ) -> CreateOriginEndpointResponseTypeDef:
        """
        [Client.create_origin_endpoint documentation](https://boto3.amazonaws.com/v1/documentation/api/1.13.13/reference/services/mediapackage.html#MediaPackage.Client.create_origin_endpoint)
        """

    def delete_channel(self, Id: str) -> Dict[str, Any]:
        """
        [Client.delete_channel documentation](https://boto3.amazonaws.com/v1/documentation/api/1.13.13/reference/services/mediapackage.html#MediaPackage.Client.delete_channel)
        """

    def delete_origin_endpoint(self, Id: str) -> Dict[str, Any]:
        """
        [Client.delete_origin_endpoint documentation](https://boto3.amazonaws.com/v1/documentation/api/1.13.13/reference/services/mediapackage.html#MediaPackage.Client.delete_origin_endpoint)
        """

    def describe_channel(self, Id: str) -> DescribeChannelResponseTypeDef:
        """
        [Client.describe_channel documentation](https://boto3.amazonaws.com/v1/documentation/api/1.13.13/reference/services/mediapackage.html#MediaPackage.Client.describe_channel)
        """

    def describe_harvest_job(self, Id: str) -> DescribeHarvestJobResponseTypeDef:
        """
        [Client.describe_harvest_job documentation](https://boto3.amazonaws.com/v1/documentation/api/1.13.13/reference/services/mediapackage.html#MediaPackage.Client.describe_harvest_job)
        """

    def describe_origin_endpoint(self, Id: str) -> DescribeOriginEndpointResponseTypeDef:
        """
        [Client.describe_origin_endpoint documentation](https://boto3.amazonaws.com/v1/documentation/api/1.13.13/reference/services/mediapackage.html#MediaPackage.Client.describe_origin_endpoint)
        """

    def generate_presigned_url(
        self,
        ClientMethod: str,
        Params: Dict[str, Any] = None,
        ExpiresIn: int = 3600,
        HttpMethod: str = None,
    ) -> str:
        """
        [Client.generate_presigned_url documentation](https://boto3.amazonaws.com/v1/documentation/api/1.13.13/reference/services/mediapackage.html#MediaPackage.Client.generate_presigned_url)
        """

    def list_channels(
        self, MaxResults: int = None, NextToken: str = None
    ) -> ListChannelsResponseTypeDef:
        """
        [Client.list_channels documentation](https://boto3.amazonaws.com/v1/documentation/api/1.13.13/reference/services/mediapackage.html#MediaPackage.Client.list_channels)
        """

    def list_harvest_jobs(
        self,
        IncludeChannelId: str = None,
        IncludeStatus: str = None,
        MaxResults: int = None,
        NextToken: str = None,
    ) -> ListHarvestJobsResponseTypeDef:
        """
        [Client.list_harvest_jobs documentation](https://boto3.amazonaws.com/v1/documentation/api/1.13.13/reference/services/mediapackage.html#MediaPackage.Client.list_harvest_jobs)
        """

    def list_origin_endpoints(
        self, ChannelId: str = None, MaxResults: int = None, NextToken: str = None
    ) -> ListOriginEndpointsResponseTypeDef:
        """
        [Client.list_origin_endpoints documentation](https://boto3.amazonaws.com/v1/documentation/api/1.13.13/reference/services/mediapackage.html#MediaPackage.Client.list_origin_endpoints)
        """

    def list_tags_for_resource(self, ResourceArn: str) -> ListTagsForResourceResponseTypeDef:
        """
        [Client.list_tags_for_resource documentation](https://boto3.amazonaws.com/v1/documentation/api/1.13.13/reference/services/mediapackage.html#MediaPackage.Client.list_tags_for_resource)
        """

    def rotate_channel_credentials(self, Id: str) -> RotateChannelCredentialsResponseTypeDef:
        """
        [Client.rotate_channel_credentials documentation](https://boto3.amazonaws.com/v1/documentation/api/1.13.13/reference/services/mediapackage.html#MediaPackage.Client.rotate_channel_credentials)
        """

    def rotate_ingest_endpoint_credentials(
        self, Id: str, IngestEndpointId: str
    ) -> RotateIngestEndpointCredentialsResponseTypeDef:
        """
        [Client.rotate_ingest_endpoint_credentials documentation](https://boto3.amazonaws.com/v1/documentation/api/1.13.13/reference/services/mediapackage.html#MediaPackage.Client.rotate_ingest_endpoint_credentials)
        """

    def tag_resource(self, ResourceArn: str, Tags: Dict[str, str]) -> None:
        """
        [Client.tag_resource documentation](https://boto3.amazonaws.com/v1/documentation/api/1.13.13/reference/services/mediapackage.html#MediaPackage.Client.tag_resource)
        """

    def untag_resource(self, ResourceArn: str, TagKeys: List[str]) -> None:
        """
        [Client.untag_resource documentation](https://boto3.amazonaws.com/v1/documentation/api/1.13.13/reference/services/mediapackage.html#MediaPackage.Client.untag_resource)
        """

    def update_channel(self, Id: str, Description: str = None) -> UpdateChannelResponseTypeDef:
        """
        [Client.update_channel documentation](https://boto3.amazonaws.com/v1/documentation/api/1.13.13/reference/services/mediapackage.html#MediaPackage.Client.update_channel)
        """

    def update_origin_endpoint(
        self,
        Id: str,
        Authorization: AuthorizationTypeDef = None,
        CmafPackage: CmafPackageCreateOrUpdateParametersTypeDef = None,
        DashPackage: DashPackageTypeDef = None,
        Description: str = None,
        HlsPackage: HlsPackageTypeDef = None,
        ManifestName: str = None,
        MssPackage: MssPackageTypeDef = None,
        Origination: Literal["ALLOW", "DENY"] = None,
        StartoverWindowSeconds: int = None,
        TimeDelaySeconds: int = None,
        Whitelist: List[str] = None,
    ) -> UpdateOriginEndpointResponseTypeDef:
        """
        [Client.update_origin_endpoint documentation](https://boto3.amazonaws.com/v1/documentation/api/1.13.13/reference/services/mediapackage.html#MediaPackage.Client.update_origin_endpoint)
        """

    @overload
    def get_paginator(self, operation_name: Literal["list_channels"]) -> ListChannelsPaginator:
        """
        [Paginator.ListChannels documentation](https://boto3.amazonaws.com/v1/documentation/api/1.13.13/reference/services/mediapackage.html#MediaPackage.Paginator.ListChannels)
        """

    @overload
    def get_paginator(
        self, operation_name: Literal["list_harvest_jobs"]
    ) -> ListHarvestJobsPaginator:
        """
        [Paginator.ListHarvestJobs documentation](https://boto3.amazonaws.com/v1/documentation/api/1.13.13/reference/services/mediapackage.html#MediaPackage.Paginator.ListHarvestJobs)
        """

    @overload
    def get_paginator(
        self, operation_name: Literal["list_origin_endpoints"]
    ) -> ListOriginEndpointsPaginator:
        """
        [Paginator.ListOriginEndpoints documentation](https://boto3.amazonaws.com/v1/documentation/api/1.13.13/reference/services/mediapackage.html#MediaPackage.Paginator.ListOriginEndpoints)
        """
