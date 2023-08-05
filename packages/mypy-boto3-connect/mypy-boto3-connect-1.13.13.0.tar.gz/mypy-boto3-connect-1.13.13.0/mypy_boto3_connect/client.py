"""
Main interface for connect service client

Usage::

    import boto3
    from mypy_boto3.connect import ConnectClient

    session = boto3.Session()

    client: ConnectClient = boto3.client("connect")
    session_client: ConnectClient = session.client("connect")
"""
# pylint: disable=arguments-differ,redefined-outer-name,redefined-builtin
from datetime import datetime
import sys
from typing import Any, Dict, List, TYPE_CHECKING, Type, overload
from botocore.exceptions import ClientError as Boto3ClientError
from mypy_boto3_connect.paginator import (
    GetMetricDataPaginator,
    ListContactFlowsPaginator,
    ListHoursOfOperationsPaginator,
    ListPhoneNumbersPaginator,
    ListQueuesPaginator,
    ListRoutingProfilesPaginator,
    ListSecurityProfilesPaginator,
    ListUserHierarchyGroupsPaginator,
    ListUsersPaginator,
)
from mypy_boto3_connect.type_defs import (
    ChatMessageTypeDef,
    CreateUserResponseTypeDef,
    CurrentMetricTypeDef,
    DescribeUserHierarchyGroupResponseTypeDef,
    DescribeUserHierarchyStructureResponseTypeDef,
    DescribeUserResponseTypeDef,
    FiltersTypeDef,
    GetContactAttributesResponseTypeDef,
    GetCurrentMetricDataResponseTypeDef,
    GetFederationTokenResponseTypeDef,
    GetMetricDataResponseTypeDef,
    HistoricalMetricTypeDef,
    ListContactFlowsResponseTypeDef,
    ListHoursOfOperationsResponseTypeDef,
    ListPhoneNumbersResponseTypeDef,
    ListQueuesResponseTypeDef,
    ListRoutingProfilesResponseTypeDef,
    ListSecurityProfilesResponseTypeDef,
    ListTagsForResourceResponseTypeDef,
    ListUserHierarchyGroupsResponseTypeDef,
    ListUsersResponseTypeDef,
    ParticipantDetailsTypeDef,
    StartChatContactResponseTypeDef,
    StartOutboundVoiceContactResponseTypeDef,
    UserIdentityInfoTypeDef,
    UserPhoneConfigTypeDef,
)

if sys.version_info >= (3, 8):
    from typing import Literal
else:
    from typing_extensions import Literal


__all__ = ("ConnectClient",)


class Exceptions:
    ClientError: Type[Boto3ClientError]
    ContactNotFoundException: Type[Boto3ClientError]
    DestinationNotAllowedException: Type[Boto3ClientError]
    DuplicateResourceException: Type[Boto3ClientError]
    InternalServiceException: Type[Boto3ClientError]
    InvalidParameterException: Type[Boto3ClientError]
    InvalidRequestException: Type[Boto3ClientError]
    LimitExceededException: Type[Boto3ClientError]
    OutboundContactNotPermittedException: Type[Boto3ClientError]
    ResourceNotFoundException: Type[Boto3ClientError]
    ThrottlingException: Type[Boto3ClientError]
    UserNotFoundException: Type[Boto3ClientError]


class ConnectClient:
    """
    [Connect.Client documentation](https://boto3.amazonaws.com/v1/documentation/api/1.13.13/reference/services/connect.html#Connect.Client)
    """

    exceptions: Exceptions

    def can_paginate(self, operation_name: str) -> bool:
        """
        [Client.can_paginate documentation](https://boto3.amazonaws.com/v1/documentation/api/1.13.13/reference/services/connect.html#Connect.Client.can_paginate)
        """

    def create_user(
        self,
        Username: str,
        PhoneConfig: UserPhoneConfigTypeDef,
        SecurityProfileIds: List[str],
        RoutingProfileId: str,
        InstanceId: str,
        Password: str = None,
        IdentityInfo: UserIdentityInfoTypeDef = None,
        DirectoryUserId: str = None,
        HierarchyGroupId: str = None,
        Tags: Dict[str, str] = None,
    ) -> CreateUserResponseTypeDef:
        """
        [Client.create_user documentation](https://boto3.amazonaws.com/v1/documentation/api/1.13.13/reference/services/connect.html#Connect.Client.create_user)
        """

    def delete_user(self, InstanceId: str, UserId: str) -> None:
        """
        [Client.delete_user documentation](https://boto3.amazonaws.com/v1/documentation/api/1.13.13/reference/services/connect.html#Connect.Client.delete_user)
        """

    def describe_user(self, UserId: str, InstanceId: str) -> DescribeUserResponseTypeDef:
        """
        [Client.describe_user documentation](https://boto3.amazonaws.com/v1/documentation/api/1.13.13/reference/services/connect.html#Connect.Client.describe_user)
        """

    def describe_user_hierarchy_group(
        self, HierarchyGroupId: str, InstanceId: str
    ) -> DescribeUserHierarchyGroupResponseTypeDef:
        """
        [Client.describe_user_hierarchy_group documentation](https://boto3.amazonaws.com/v1/documentation/api/1.13.13/reference/services/connect.html#Connect.Client.describe_user_hierarchy_group)
        """

    def describe_user_hierarchy_structure(
        self, InstanceId: str
    ) -> DescribeUserHierarchyStructureResponseTypeDef:
        """
        [Client.describe_user_hierarchy_structure documentation](https://boto3.amazonaws.com/v1/documentation/api/1.13.13/reference/services/connect.html#Connect.Client.describe_user_hierarchy_structure)
        """

    def generate_presigned_url(
        self,
        ClientMethod: str,
        Params: Dict[str, Any] = None,
        ExpiresIn: int = 3600,
        HttpMethod: str = None,
    ) -> str:
        """
        [Client.generate_presigned_url documentation](https://boto3.amazonaws.com/v1/documentation/api/1.13.13/reference/services/connect.html#Connect.Client.generate_presigned_url)
        """

    def get_contact_attributes(
        self, InstanceId: str, InitialContactId: str
    ) -> GetContactAttributesResponseTypeDef:
        """
        [Client.get_contact_attributes documentation](https://boto3.amazonaws.com/v1/documentation/api/1.13.13/reference/services/connect.html#Connect.Client.get_contact_attributes)
        """

    def get_current_metric_data(
        self,
        InstanceId: str,
        Filters: FiltersTypeDef,
        CurrentMetrics: List[CurrentMetricTypeDef],
        Groupings: List[Literal["QUEUE", "CHANNEL"]] = None,
        NextToken: str = None,
        MaxResults: int = None,
    ) -> GetCurrentMetricDataResponseTypeDef:
        """
        [Client.get_current_metric_data documentation](https://boto3.amazonaws.com/v1/documentation/api/1.13.13/reference/services/connect.html#Connect.Client.get_current_metric_data)
        """

    def get_federation_token(self, InstanceId: str) -> GetFederationTokenResponseTypeDef:
        """
        [Client.get_federation_token documentation](https://boto3.amazonaws.com/v1/documentation/api/1.13.13/reference/services/connect.html#Connect.Client.get_federation_token)
        """

    def get_metric_data(
        self,
        InstanceId: str,
        StartTime: datetime,
        EndTime: datetime,
        Filters: FiltersTypeDef,
        HistoricalMetrics: List[HistoricalMetricTypeDef],
        Groupings: List[Literal["QUEUE", "CHANNEL"]] = None,
        NextToken: str = None,
        MaxResults: int = None,
    ) -> GetMetricDataResponseTypeDef:
        """
        [Client.get_metric_data documentation](https://boto3.amazonaws.com/v1/documentation/api/1.13.13/reference/services/connect.html#Connect.Client.get_metric_data)
        """

    def list_contact_flows(
        self,
        InstanceId: str,
        ContactFlowTypes: List[
            Literal[
                "CONTACT_FLOW",
                "CUSTOMER_QUEUE",
                "CUSTOMER_HOLD",
                "CUSTOMER_WHISPER",
                "AGENT_HOLD",
                "AGENT_WHISPER",
                "OUTBOUND_WHISPER",
                "AGENT_TRANSFER",
                "QUEUE_TRANSFER",
            ]
        ] = None,
        NextToken: str = None,
        MaxResults: int = None,
    ) -> ListContactFlowsResponseTypeDef:
        """
        [Client.list_contact_flows documentation](https://boto3.amazonaws.com/v1/documentation/api/1.13.13/reference/services/connect.html#Connect.Client.list_contact_flows)
        """

    def list_hours_of_operations(
        self, InstanceId: str, NextToken: str = None, MaxResults: int = None
    ) -> ListHoursOfOperationsResponseTypeDef:
        """
        [Client.list_hours_of_operations documentation](https://boto3.amazonaws.com/v1/documentation/api/1.13.13/reference/services/connect.html#Connect.Client.list_hours_of_operations)
        """

    def list_phone_numbers(
        self,
        InstanceId: str,
        PhoneNumberTypes: List[Literal["TOLL_FREE", "DID"]] = None,
        PhoneNumberCountryCodes: List[
            Literal[
                "AF",
                "AL",
                "DZ",
                "AS",
                "AD",
                "AO",
                "AI",
                "AQ",
                "AG",
                "AR",
                "AM",
                "AW",
                "AU",
                "AT",
                "AZ",
                "BS",
                "BH",
                "BD",
                "BB",
                "BY",
                "BE",
                "BZ",
                "BJ",
                "BM",
                "BT",
                "BO",
                "BA",
                "BW",
                "BR",
                "IO",
                "VG",
                "BN",
                "BG",
                "BF",
                "BI",
                "KH",
                "CM",
                "CA",
                "CV",
                "KY",
                "CF",
                "TD",
                "CL",
                "CN",
                "CX",
                "CC",
                "CO",
                "KM",
                "CK",
                "CR",
                "HR",
                "CU",
                "CW",
                "CY",
                "CZ",
                "CD",
                "DK",
                "DJ",
                "DM",
                "DO",
                "TL",
                "EC",
                "EG",
                "SV",
                "GQ",
                "ER",
                "EE",
                "ET",
                "FK",
                "FO",
                "FJ",
                "FI",
                "FR",
                "PF",
                "GA",
                "GM",
                "GE",
                "DE",
                "GH",
                "GI",
                "GR",
                "GL",
                "GD",
                "GU",
                "GT",
                "GG",
                "GN",
                "GW",
                "GY",
                "HT",
                "HN",
                "HK",
                "HU",
                "IS",
                "IN",
                "ID",
                "IR",
                "IQ",
                "IE",
                "IM",
                "IL",
                "IT",
                "CI",
                "JM",
                "JP",
                "JE",
                "JO",
                "KZ",
                "KE",
                "KI",
                "KW",
                "KG",
                "LA",
                "LV",
                "LB",
                "LS",
                "LR",
                "LY",
                "LI",
                "LT",
                "LU",
                "MO",
                "MK",
                "MG",
                "MW",
                "MY",
                "MV",
                "ML",
                "MT",
                "MH",
                "MR",
                "MU",
                "YT",
                "MX",
                "FM",
                "MD",
                "MC",
                "MN",
                "ME",
                "MS",
                "MA",
                "MZ",
                "MM",
                "NA",
                "NR",
                "NP",
                "NL",
                "AN",
                "NC",
                "NZ",
                "NI",
                "NE",
                "NG",
                "NU",
                "KP",
                "MP",
                "NO",
                "OM",
                "PK",
                "PW",
                "PA",
                "PG",
                "PY",
                "PE",
                "PH",
                "PN",
                "PL",
                "PT",
                "PR",
                "QA",
                "CG",
                "RE",
                "RO",
                "RU",
                "RW",
                "BL",
                "SH",
                "KN",
                "LC",
                "MF",
                "PM",
                "VC",
                "WS",
                "SM",
                "ST",
                "SA",
                "SN",
                "RS",
                "SC",
                "SL",
                "SG",
                "SX",
                "SK",
                "SI",
                "SB",
                "SO",
                "ZA",
                "KR",
                "ES",
                "LK",
                "SD",
                "SR",
                "SJ",
                "SZ",
                "SE",
                "CH",
                "SY",
                "TW",
                "TJ",
                "TZ",
                "TH",
                "TG",
                "TK",
                "TO",
                "TT",
                "TN",
                "TR",
                "TM",
                "TC",
                "TV",
                "VI",
                "UG",
                "UA",
                "AE",
                "GB",
                "US",
                "UY",
                "UZ",
                "VU",
                "VA",
                "VE",
                "VN",
                "WF",
                "EH",
                "YE",
                "ZM",
                "ZW",
            ]
        ] = None,
        NextToken: str = None,
        MaxResults: int = None,
    ) -> ListPhoneNumbersResponseTypeDef:
        """
        [Client.list_phone_numbers documentation](https://boto3.amazonaws.com/v1/documentation/api/1.13.13/reference/services/connect.html#Connect.Client.list_phone_numbers)
        """

    def list_queues(
        self,
        InstanceId: str,
        QueueTypes: List[Literal["STANDARD", "AGENT"]] = None,
        NextToken: str = None,
        MaxResults: int = None,
    ) -> ListQueuesResponseTypeDef:
        """
        [Client.list_queues documentation](https://boto3.amazonaws.com/v1/documentation/api/1.13.13/reference/services/connect.html#Connect.Client.list_queues)
        """

    def list_routing_profiles(
        self, InstanceId: str, NextToken: str = None, MaxResults: int = None
    ) -> ListRoutingProfilesResponseTypeDef:
        """
        [Client.list_routing_profiles documentation](https://boto3.amazonaws.com/v1/documentation/api/1.13.13/reference/services/connect.html#Connect.Client.list_routing_profiles)
        """

    def list_security_profiles(
        self, InstanceId: str, NextToken: str = None, MaxResults: int = None
    ) -> ListSecurityProfilesResponseTypeDef:
        """
        [Client.list_security_profiles documentation](https://boto3.amazonaws.com/v1/documentation/api/1.13.13/reference/services/connect.html#Connect.Client.list_security_profiles)
        """

    def list_tags_for_resource(self, resourceArn: str) -> ListTagsForResourceResponseTypeDef:
        """
        [Client.list_tags_for_resource documentation](https://boto3.amazonaws.com/v1/documentation/api/1.13.13/reference/services/connect.html#Connect.Client.list_tags_for_resource)
        """

    def list_user_hierarchy_groups(
        self, InstanceId: str, NextToken: str = None, MaxResults: int = None
    ) -> ListUserHierarchyGroupsResponseTypeDef:
        """
        [Client.list_user_hierarchy_groups documentation](https://boto3.amazonaws.com/v1/documentation/api/1.13.13/reference/services/connect.html#Connect.Client.list_user_hierarchy_groups)
        """

    def list_users(
        self, InstanceId: str, NextToken: str = None, MaxResults: int = None
    ) -> ListUsersResponseTypeDef:
        """
        [Client.list_users documentation](https://boto3.amazonaws.com/v1/documentation/api/1.13.13/reference/services/connect.html#Connect.Client.list_users)
        """

    def start_chat_contact(
        self,
        InstanceId: str,
        ContactFlowId: str,
        ParticipantDetails: ParticipantDetailsTypeDef,
        Attributes: Dict[str, str] = None,
        InitialMessage: ChatMessageTypeDef = None,
        ClientToken: str = None,
    ) -> StartChatContactResponseTypeDef:
        """
        [Client.start_chat_contact documentation](https://boto3.amazonaws.com/v1/documentation/api/1.13.13/reference/services/connect.html#Connect.Client.start_chat_contact)
        """

    def start_outbound_voice_contact(
        self,
        DestinationPhoneNumber: str,
        ContactFlowId: str,
        InstanceId: str,
        ClientToken: str = None,
        SourcePhoneNumber: str = None,
        QueueId: str = None,
        Attributes: Dict[str, str] = None,
    ) -> StartOutboundVoiceContactResponseTypeDef:
        """
        [Client.start_outbound_voice_contact documentation](https://boto3.amazonaws.com/v1/documentation/api/1.13.13/reference/services/connect.html#Connect.Client.start_outbound_voice_contact)
        """

    def stop_contact(self, ContactId: str, InstanceId: str) -> Dict[str, Any]:
        """
        [Client.stop_contact documentation](https://boto3.amazonaws.com/v1/documentation/api/1.13.13/reference/services/connect.html#Connect.Client.stop_contact)
        """

    def tag_resource(self, resourceArn: str, tags: Dict[str, str]) -> None:
        """
        [Client.tag_resource documentation](https://boto3.amazonaws.com/v1/documentation/api/1.13.13/reference/services/connect.html#Connect.Client.tag_resource)
        """

    def untag_resource(self, resourceArn: str, tagKeys: List[str]) -> None:
        """
        [Client.untag_resource documentation](https://boto3.amazonaws.com/v1/documentation/api/1.13.13/reference/services/connect.html#Connect.Client.untag_resource)
        """

    def update_contact_attributes(
        self, InitialContactId: str, InstanceId: str, Attributes: Dict[str, str]
    ) -> Dict[str, Any]:
        """
        [Client.update_contact_attributes documentation](https://boto3.amazonaws.com/v1/documentation/api/1.13.13/reference/services/connect.html#Connect.Client.update_contact_attributes)
        """

    def update_user_hierarchy(
        self, UserId: str, InstanceId: str, HierarchyGroupId: str = None
    ) -> None:
        """
        [Client.update_user_hierarchy documentation](https://boto3.amazonaws.com/v1/documentation/api/1.13.13/reference/services/connect.html#Connect.Client.update_user_hierarchy)
        """

    def update_user_identity_info(
        self, IdentityInfo: UserIdentityInfoTypeDef, UserId: str, InstanceId: str
    ) -> None:
        """
        [Client.update_user_identity_info documentation](https://boto3.amazonaws.com/v1/documentation/api/1.13.13/reference/services/connect.html#Connect.Client.update_user_identity_info)
        """

    def update_user_phone_config(
        self, PhoneConfig: UserPhoneConfigTypeDef, UserId: str, InstanceId: str
    ) -> None:
        """
        [Client.update_user_phone_config documentation](https://boto3.amazonaws.com/v1/documentation/api/1.13.13/reference/services/connect.html#Connect.Client.update_user_phone_config)
        """

    def update_user_routing_profile(
        self, RoutingProfileId: str, UserId: str, InstanceId: str
    ) -> None:
        """
        [Client.update_user_routing_profile documentation](https://boto3.amazonaws.com/v1/documentation/api/1.13.13/reference/services/connect.html#Connect.Client.update_user_routing_profile)
        """

    def update_user_security_profiles(
        self, SecurityProfileIds: List[str], UserId: str, InstanceId: str
    ) -> None:
        """
        [Client.update_user_security_profiles documentation](https://boto3.amazonaws.com/v1/documentation/api/1.13.13/reference/services/connect.html#Connect.Client.update_user_security_profiles)
        """

    @overload
    def get_paginator(self, operation_name: Literal["get_metric_data"]) -> GetMetricDataPaginator:
        """
        [Paginator.GetMetricData documentation](https://boto3.amazonaws.com/v1/documentation/api/1.13.13/reference/services/connect.html#Connect.Paginator.GetMetricData)
        """

    @overload
    def get_paginator(
        self, operation_name: Literal["list_contact_flows"]
    ) -> ListContactFlowsPaginator:
        """
        [Paginator.ListContactFlows documentation](https://boto3.amazonaws.com/v1/documentation/api/1.13.13/reference/services/connect.html#Connect.Paginator.ListContactFlows)
        """

    @overload
    def get_paginator(
        self, operation_name: Literal["list_hours_of_operations"]
    ) -> ListHoursOfOperationsPaginator:
        """
        [Paginator.ListHoursOfOperations documentation](https://boto3.amazonaws.com/v1/documentation/api/1.13.13/reference/services/connect.html#Connect.Paginator.ListHoursOfOperations)
        """

    @overload
    def get_paginator(
        self, operation_name: Literal["list_phone_numbers"]
    ) -> ListPhoneNumbersPaginator:
        """
        [Paginator.ListPhoneNumbers documentation](https://boto3.amazonaws.com/v1/documentation/api/1.13.13/reference/services/connect.html#Connect.Paginator.ListPhoneNumbers)
        """

    @overload
    def get_paginator(self, operation_name: Literal["list_queues"]) -> ListQueuesPaginator:
        """
        [Paginator.ListQueues documentation](https://boto3.amazonaws.com/v1/documentation/api/1.13.13/reference/services/connect.html#Connect.Paginator.ListQueues)
        """

    @overload
    def get_paginator(
        self, operation_name: Literal["list_routing_profiles"]
    ) -> ListRoutingProfilesPaginator:
        """
        [Paginator.ListRoutingProfiles documentation](https://boto3.amazonaws.com/v1/documentation/api/1.13.13/reference/services/connect.html#Connect.Paginator.ListRoutingProfiles)
        """

    @overload
    def get_paginator(
        self, operation_name: Literal["list_security_profiles"]
    ) -> ListSecurityProfilesPaginator:
        """
        [Paginator.ListSecurityProfiles documentation](https://boto3.amazonaws.com/v1/documentation/api/1.13.13/reference/services/connect.html#Connect.Paginator.ListSecurityProfiles)
        """

    @overload
    def get_paginator(
        self, operation_name: Literal["list_user_hierarchy_groups"]
    ) -> ListUserHierarchyGroupsPaginator:
        """
        [Paginator.ListUserHierarchyGroups documentation](https://boto3.amazonaws.com/v1/documentation/api/1.13.13/reference/services/connect.html#Connect.Paginator.ListUserHierarchyGroups)
        """

    @overload
    def get_paginator(self, operation_name: Literal["list_users"]) -> ListUsersPaginator:
        """
        [Paginator.ListUsers documentation](https://boto3.amazonaws.com/v1/documentation/api/1.13.13/reference/services/connect.html#Connect.Paginator.ListUsers)
        """
