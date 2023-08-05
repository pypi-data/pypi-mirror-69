"""
Main interface for iot service type definitions.

Usage::

    from mypy_boto3.iot.type_defs import AbortCriteriaTypeDef

    data: AbortCriteriaTypeDef = {...}
"""
from datetime import datetime
import sys
from typing import Dict, IO, List, Union

if sys.version_info >= (3, 8):
    from typing import Literal
else:
    from typing_extensions import Literal
if sys.version_info >= (3, 8):
    from typing import TypedDict
else:
    from typing_extensions import TypedDict


__all__ = (
    "AbortCriteriaTypeDef",
    "AbortConfigTypeDef",
    "AlertTargetTypeDef",
    "AssociateTargetsWithJobResponseTypeDef",
    "AttributePayloadTypeDef",
    "AuditCheckConfigurationTypeDef",
    "AuditMitigationActionsTaskTargetTypeDef",
    "AuditNotificationTargetTypeDef",
    "AuthInfoTypeDef",
    "AuthorizerConfigTypeDef",
    "AwsJobExecutionsRolloutConfigTypeDef",
    "AwsJobPresignedUrlConfigTypeDef",
    "MetricValueTypeDef",
    "StatisticalThresholdTypeDef",
    "BehaviorCriteriaTypeDef",
    "MetricDimensionTypeDef",
    "BehaviorTypeDef",
    "BillingGroupPropertiesTypeDef",
    "CancelJobResponseTypeDef",
    "ConfigurationTypeDef",
    "CreateAuthorizerResponseTypeDef",
    "CreateBillingGroupResponseTypeDef",
    "CreateCertificateFromCsrResponseTypeDef",
    "CreateDimensionResponseTypeDef",
    "CreateDomainConfigurationResponseTypeDef",
    "CreateDynamicThingGroupResponseTypeDef",
    "CreateJobResponseTypeDef",
    "KeyPairTypeDef",
    "CreateKeysAndCertificateResponseTypeDef",
    "CreateMitigationActionResponseTypeDef",
    "CreateOTAUpdateResponseTypeDef",
    "CreatePolicyResponseTypeDef",
    "CreatePolicyVersionResponseTypeDef",
    "CreateProvisioningClaimResponseTypeDef",
    "CreateProvisioningTemplateResponseTypeDef",
    "CreateProvisioningTemplateVersionResponseTypeDef",
    "CreateRoleAliasResponseTypeDef",
    "CreateScheduledAuditResponseTypeDef",
    "CreateSecurityProfileResponseTypeDef",
    "CreateStreamResponseTypeDef",
    "CreateThingGroupResponseTypeDef",
    "CreateThingResponseTypeDef",
    "CreateThingTypeResponseTypeDef",
    "HttpUrlDestinationPropertiesTypeDef",
    "TopicRuleDestinationTypeDef",
    "CreateTopicRuleDestinationResponseTypeDef",
    "DescribeAccountAuditConfigurationResponseTypeDef",
    "PolicyVersionIdentifierTypeDef",
    "ResourceIdentifierTypeDef",
    "NonCompliantResourceTypeDef",
    "RelatedResourceTypeDef",
    "AuditFindingTypeDef",
    "DescribeAuditFindingResponseTypeDef",
    "AddThingsToThingGroupParamsTypeDef",
    "EnableIoTLoggingParamsTypeDef",
    "PublishFindingToSnsParamsTypeDef",
    "ReplaceDefaultPolicyVersionParamsTypeDef",
    "UpdateCACertificateParamsTypeDef",
    "UpdateDeviceCertificateParamsTypeDef",
    "MitigationActionParamsTypeDef",
    "MitigationActionTypeDef",
    "TaskStatisticsForAuditCheckTypeDef",
    "DescribeAuditMitigationActionsTaskResponseTypeDef",
    "AuditCheckDetailsTypeDef",
    "TaskStatisticsTypeDef",
    "DescribeAuditTaskResponseTypeDef",
    "AuthorizerDescriptionTypeDef",
    "DescribeAuthorizerResponseTypeDef",
    "BillingGroupMetadataTypeDef",
    "DescribeBillingGroupResponseTypeDef",
    "CertificateValidityTypeDef",
    "CACertificateDescriptionTypeDef",
    "RegistrationConfigTypeDef",
    "DescribeCACertificateResponseTypeDef",
    "TransferDataTypeDef",
    "CertificateDescriptionTypeDef",
    "DescribeCertificateResponseTypeDef",
    "DescribeDefaultAuthorizerResponseTypeDef",
    "DescribeDimensionResponseTypeDef",
    "ServerCertificateSummaryTypeDef",
    "DescribeDomainConfigurationResponseTypeDef",
    "DescribeEndpointResponseTypeDef",
    "DescribeEventConfigurationsResponseTypeDef",
    "DescribeIndexResponseTypeDef",
    "JobExecutionStatusDetailsTypeDef",
    "JobExecutionTypeDef",
    "DescribeJobExecutionResponseTypeDef",
    "RateIncreaseCriteriaTypeDef",
    "ExponentialRolloutRateTypeDef",
    "JobExecutionsRolloutConfigTypeDef",
    "JobProcessDetailsTypeDef",
    "PresignedUrlConfigTypeDef",
    "TimeoutConfigTypeDef",
    "JobTypeDef",
    "DescribeJobResponseTypeDef",
    "DescribeMitigationActionResponseTypeDef",
    "ProvisioningHookTypeDef",
    "DescribeProvisioningTemplateResponseTypeDef",
    "DescribeProvisioningTemplateVersionResponseTypeDef",
    "RoleAliasDescriptionTypeDef",
    "DescribeRoleAliasResponseTypeDef",
    "DescribeScheduledAuditResponseTypeDef",
    "MetricToRetainTypeDef",
    "DescribeSecurityProfileResponseTypeDef",
    "S3LocationTypeDef",
    "StreamFileTypeDef",
    "StreamInfoTypeDef",
    "DescribeStreamResponseTypeDef",
    "GroupNameAndArnTypeDef",
    "ThingGroupMetadataTypeDef",
    "ThingGroupPropertiesTypeDef",
    "DescribeThingGroupResponseTypeDef",
    "DescribeThingRegistrationTaskResponseTypeDef",
    "DescribeThingResponseTypeDef",
    "ThingTypeMetadataTypeDef",
    "ThingTypePropertiesTypeDef",
    "DescribeThingTypeResponseTypeDef",
    "GetCardinalityResponseTypeDef",
    "EffectivePolicyTypeDef",
    "GetEffectivePoliciesResponseTypeDef",
    "FieldTypeDef",
    "ThingGroupIndexingConfigurationTypeDef",
    "ThingIndexingConfigurationTypeDef",
    "GetIndexingConfigurationResponseTypeDef",
    "GetJobDocumentResponseTypeDef",
    "GetLoggingOptionsResponseTypeDef",
    "ErrorInfoTypeDef",
    "CodeSigningCertificateChainTypeDef",
    "CodeSigningSignatureTypeDef",
    "CustomCodeSigningTypeDef",
    "S3DestinationTypeDef",
    "DestinationTypeDef",
    "SigningProfileParameterTypeDef",
    "StartSigningJobParameterTypeDef",
    "CodeSigningTypeDef",
    "StreamTypeDef",
    "FileLocationTypeDef",
    "OTAUpdateFileTypeDef",
    "OTAUpdateInfoTypeDef",
    "GetOTAUpdateResponseTypeDef",
    "PercentPairTypeDef",
    "GetPercentilesResponseTypeDef",
    "GetPolicyResponseTypeDef",
    "GetPolicyVersionResponseTypeDef",
    "GetRegistrationCodeResponseTypeDef",
    "StatisticsTypeDef",
    "GetStatisticsResponseTypeDef",
    "GetTopicRuleDestinationResponseTypeDef",
    "CloudwatchAlarmActionTypeDef",
    "CloudwatchLogsActionTypeDef",
    "CloudwatchMetricActionTypeDef",
    "DynamoDBActionTypeDef",
    "PutItemInputTypeDef",
    "DynamoDBv2ActionTypeDef",
    "ElasticsearchActionTypeDef",
    "FirehoseActionTypeDef",
    "HttpActionHeaderTypeDef",
    "SigV4AuthorizationTypeDef",
    "HttpAuthorizationTypeDef",
    "HttpActionTypeDef",
    "IotAnalyticsActionTypeDef",
    "IotEventsActionTypeDef",
    "AssetPropertyTimestampTypeDef",
    "AssetPropertyVariantTypeDef",
    "AssetPropertyValueTypeDef",
    "PutAssetPropertyValueEntryTypeDef",
    "IotSiteWiseActionTypeDef",
    "KinesisActionTypeDef",
    "LambdaActionTypeDef",
    "RepublishActionTypeDef",
    "S3ActionTypeDef",
    "SalesforceActionTypeDef",
    "SnsActionTypeDef",
    "SqsActionTypeDef",
    "StepFunctionsActionTypeDef",
    "ActionTypeDef",
    "TopicRuleTypeDef",
    "GetTopicRuleResponseTypeDef",
    "GetV2LoggingOptionsResponseTypeDef",
    "HttpContextTypeDef",
    "ActiveViolationTypeDef",
    "ListActiveViolationsResponseTypeDef",
    "PolicyTypeDef",
    "ListAttachedPoliciesResponseTypeDef",
    "ListAuditFindingsResponseTypeDef",
    "AuditMitigationActionExecutionMetadataTypeDef",
    "ListAuditMitigationActionsExecutionsResponseTypeDef",
    "AuditMitigationActionsTaskMetadataTypeDef",
    "ListAuditMitigationActionsTasksResponseTypeDef",
    "AuditTaskMetadataTypeDef",
    "ListAuditTasksResponseTypeDef",
    "AuthorizerSummaryTypeDef",
    "ListAuthorizersResponseTypeDef",
    "ListBillingGroupsResponseTypeDef",
    "CACertificateTypeDef",
    "ListCACertificatesResponseTypeDef",
    "CertificateTypeDef",
    "ListCertificatesByCAResponseTypeDef",
    "ListCertificatesResponseTypeDef",
    "ListDimensionsResponseTypeDef",
    "DomainConfigurationSummaryTypeDef",
    "ListDomainConfigurationsResponseTypeDef",
    "ListIndicesResponseTypeDef",
    "JobExecutionSummaryTypeDef",
    "JobExecutionSummaryForJobTypeDef",
    "ListJobExecutionsForJobResponseTypeDef",
    "JobExecutionSummaryForThingTypeDef",
    "ListJobExecutionsForThingResponseTypeDef",
    "JobSummaryTypeDef",
    "ListJobsResponseTypeDef",
    "MitigationActionIdentifierTypeDef",
    "ListMitigationActionsResponseTypeDef",
    "OTAUpdateSummaryTypeDef",
    "ListOTAUpdatesResponseTypeDef",
    "OutgoingCertificateTypeDef",
    "ListOutgoingCertificatesResponseTypeDef",
    "ListPoliciesResponseTypeDef",
    "ListPolicyPrincipalsResponseTypeDef",
    "PolicyVersionTypeDef",
    "ListPolicyVersionsResponseTypeDef",
    "ListPrincipalPoliciesResponseTypeDef",
    "ListPrincipalThingsResponseTypeDef",
    "ProvisioningTemplateVersionSummaryTypeDef",
    "ListProvisioningTemplateVersionsResponseTypeDef",
    "ProvisioningTemplateSummaryTypeDef",
    "ListProvisioningTemplatesResponseTypeDef",
    "ListRoleAliasesResponseTypeDef",
    "ScheduledAuditMetadataTypeDef",
    "ListScheduledAuditsResponseTypeDef",
    "SecurityProfileIdentifierTypeDef",
    "SecurityProfileTargetTypeDef",
    "SecurityProfileTargetMappingTypeDef",
    "ListSecurityProfilesForTargetResponseTypeDef",
    "ListSecurityProfilesResponseTypeDef",
    "StreamSummaryTypeDef",
    "ListStreamsResponseTypeDef",
    "TagTypeDef",
    "ListTagsForResourceResponseTypeDef",
    "ListTargetsForPolicyResponseTypeDef",
    "ListTargetsForSecurityProfileResponseTypeDef",
    "ListThingGroupsForThingResponseTypeDef",
    "ListThingGroupsResponseTypeDef",
    "ListThingPrincipalsResponseTypeDef",
    "ListThingRegistrationTaskReportsResponseTypeDef",
    "ListThingRegistrationTasksResponseTypeDef",
    "ThingTypeDefinitionTypeDef",
    "ListThingTypesResponseTypeDef",
    "ListThingsInBillingGroupResponseTypeDef",
    "ListThingsInThingGroupResponseTypeDef",
    "ThingAttributeTypeDef",
    "ListThingsResponseTypeDef",
    "HttpUrlDestinationSummaryTypeDef",
    "TopicRuleDestinationSummaryTypeDef",
    "ListTopicRuleDestinationsResponseTypeDef",
    "TopicRuleListItemTypeDef",
    "ListTopicRulesResponseTypeDef",
    "LogTargetTypeDef",
    "LogTargetConfigurationTypeDef",
    "ListV2LoggingLevelsResponseTypeDef",
    "ViolationEventTypeDef",
    "ListViolationEventsResponseTypeDef",
    "LoggingOptionsPayloadTypeDef",
    "MqttContextTypeDef",
    "PaginatorConfigTypeDef",
    "RegisterCACertificateResponseTypeDef",
    "RegisterCertificateResponseTypeDef",
    "RegisterCertificateWithoutCAResponseTypeDef",
    "RegisterThingResponseTypeDef",
    "ThingConnectivityTypeDef",
    "ThingDocumentTypeDef",
    "ThingGroupDocumentTypeDef",
    "SearchIndexResponseTypeDef",
    "SetDefaultAuthorizerResponseTypeDef",
    "StartAuditMitigationActionsTaskResponseTypeDef",
    "StartOnDemandAuditTaskResponseTypeDef",
    "StartThingRegistrationTaskResponseTypeDef",
    "AllowedTypeDef",
    "ExplicitDenyTypeDef",
    "ImplicitDenyTypeDef",
    "DeniedTypeDef",
    "AuthResultTypeDef",
    "TestAuthorizationResponseTypeDef",
    "TestInvokeAuthorizerResponseTypeDef",
    "TlsContextTypeDef",
    "HttpUrlDestinationConfigurationTypeDef",
    "TopicRuleDestinationConfigurationTypeDef",
    "TopicRulePayloadTypeDef",
    "TransferCertificateResponseTypeDef",
    "UpdateAuthorizerResponseTypeDef",
    "UpdateBillingGroupResponseTypeDef",
    "UpdateDimensionResponseTypeDef",
    "UpdateDomainConfigurationResponseTypeDef",
    "UpdateDynamicThingGroupResponseTypeDef",
    "UpdateMitigationActionResponseTypeDef",
    "UpdateRoleAliasResponseTypeDef",
    "UpdateScheduledAuditResponseTypeDef",
    "UpdateSecurityProfileResponseTypeDef",
    "UpdateStreamResponseTypeDef",
    "UpdateThingGroupResponseTypeDef",
    "ValidationErrorTypeDef",
    "ValidateSecurityProfileBehaviorsResponseTypeDef",
)

AbortCriteriaTypeDef = TypedDict(
    "AbortCriteriaTypeDef",
    {
        "failureType": Literal["FAILED", "REJECTED", "TIMED_OUT", "ALL"],
        "action": Literal["CANCEL"],
        "thresholdPercentage": float,
        "minNumberOfExecutedThings": int,
    },
)

AbortConfigTypeDef = TypedDict("AbortConfigTypeDef", {"criteriaList": List[AbortCriteriaTypeDef]})

AlertTargetTypeDef = TypedDict("AlertTargetTypeDef", {"alertTargetArn": str, "roleArn": str})

AssociateTargetsWithJobResponseTypeDef = TypedDict(
    "AssociateTargetsWithJobResponseTypeDef",
    {"jobArn": str, "jobId": str, "description": str},
    total=False,
)

AttributePayloadTypeDef = TypedDict(
    "AttributePayloadTypeDef", {"attributes": Dict[str, str], "merge": bool}, total=False
)

AuditCheckConfigurationTypeDef = TypedDict(
    "AuditCheckConfigurationTypeDef", {"enabled": bool}, total=False
)

AuditMitigationActionsTaskTargetTypeDef = TypedDict(
    "AuditMitigationActionsTaskTargetTypeDef",
    {
        "auditTaskId": str,
        "findingIds": List[str],
        "auditCheckToReasonCodeFilter": Dict[str, List[str]],
    },
    total=False,
)

AuditNotificationTargetTypeDef = TypedDict(
    "AuditNotificationTargetTypeDef",
    {"targetArn": str, "roleArn": str, "enabled": bool},
    total=False,
)

_RequiredAuthInfoTypeDef = TypedDict("_RequiredAuthInfoTypeDef", {"resources": List[str]})
_OptionalAuthInfoTypeDef = TypedDict(
    "_OptionalAuthInfoTypeDef",
    {"actionType": Literal["PUBLISH", "SUBSCRIBE", "RECEIVE", "CONNECT"]},
    total=False,
)


class AuthInfoTypeDef(_RequiredAuthInfoTypeDef, _OptionalAuthInfoTypeDef):
    pass


AuthorizerConfigTypeDef = TypedDict(
    "AuthorizerConfigTypeDef",
    {"defaultAuthorizerName": str, "allowAuthorizerOverride": bool},
    total=False,
)

AwsJobExecutionsRolloutConfigTypeDef = TypedDict(
    "AwsJobExecutionsRolloutConfigTypeDef", {"maximumPerMinute": int}, total=False
)

AwsJobPresignedUrlConfigTypeDef = TypedDict(
    "AwsJobPresignedUrlConfigTypeDef", {"expiresInSec": int}, total=False
)

MetricValueTypeDef = TypedDict(
    "MetricValueTypeDef", {"count": int, "cidrs": List[str], "ports": List[int]}, total=False
)

StatisticalThresholdTypeDef = TypedDict(
    "StatisticalThresholdTypeDef", {"statistic": str}, total=False
)

BehaviorCriteriaTypeDef = TypedDict(
    "BehaviorCriteriaTypeDef",
    {
        "comparisonOperator": Literal[
            "less-than",
            "less-than-equals",
            "greater-than",
            "greater-than-equals",
            "in-cidr-set",
            "not-in-cidr-set",
            "in-port-set",
            "not-in-port-set",
        ],
        "value": MetricValueTypeDef,
        "durationSeconds": int,
        "consecutiveDatapointsToAlarm": int,
        "consecutiveDatapointsToClear": int,
        "statisticalThreshold": StatisticalThresholdTypeDef,
    },
    total=False,
)

_RequiredMetricDimensionTypeDef = TypedDict(
    "_RequiredMetricDimensionTypeDef", {"dimensionName": str}
)
_OptionalMetricDimensionTypeDef = TypedDict(
    "_OptionalMetricDimensionTypeDef", {"operator": Literal["IN", "NOT_IN"]}, total=False
)


class MetricDimensionTypeDef(_RequiredMetricDimensionTypeDef, _OptionalMetricDimensionTypeDef):
    pass


_RequiredBehaviorTypeDef = TypedDict("_RequiredBehaviorTypeDef", {"name": str})
_OptionalBehaviorTypeDef = TypedDict(
    "_OptionalBehaviorTypeDef",
    {"metric": str, "metricDimension": MetricDimensionTypeDef, "criteria": BehaviorCriteriaTypeDef},
    total=False,
)


class BehaviorTypeDef(_RequiredBehaviorTypeDef, _OptionalBehaviorTypeDef):
    pass


BillingGroupPropertiesTypeDef = TypedDict(
    "BillingGroupPropertiesTypeDef", {"billingGroupDescription": str}, total=False
)

CancelJobResponseTypeDef = TypedDict(
    "CancelJobResponseTypeDef", {"jobArn": str, "jobId": str, "description": str}, total=False
)

ConfigurationTypeDef = TypedDict("ConfigurationTypeDef", {"Enabled": bool}, total=False)

CreateAuthorizerResponseTypeDef = TypedDict(
    "CreateAuthorizerResponseTypeDef", {"authorizerName": str, "authorizerArn": str}, total=False
)

CreateBillingGroupResponseTypeDef = TypedDict(
    "CreateBillingGroupResponseTypeDef",
    {"billingGroupName": str, "billingGroupArn": str, "billingGroupId": str},
    total=False,
)

CreateCertificateFromCsrResponseTypeDef = TypedDict(
    "CreateCertificateFromCsrResponseTypeDef",
    {"certificateArn": str, "certificateId": str, "certificatePem": str},
    total=False,
)

CreateDimensionResponseTypeDef = TypedDict(
    "CreateDimensionResponseTypeDef", {"name": str, "arn": str}, total=False
)

CreateDomainConfigurationResponseTypeDef = TypedDict(
    "CreateDomainConfigurationResponseTypeDef",
    {"domainConfigurationName": str, "domainConfigurationArn": str},
    total=False,
)

CreateDynamicThingGroupResponseTypeDef = TypedDict(
    "CreateDynamicThingGroupResponseTypeDef",
    {
        "thingGroupName": str,
        "thingGroupArn": str,
        "thingGroupId": str,
        "indexName": str,
        "queryString": str,
        "queryVersion": str,
    },
    total=False,
)

CreateJobResponseTypeDef = TypedDict(
    "CreateJobResponseTypeDef", {"jobArn": str, "jobId": str, "description": str}, total=False
)

KeyPairTypeDef = TypedDict("KeyPairTypeDef", {"PublicKey": str, "PrivateKey": str}, total=False)

CreateKeysAndCertificateResponseTypeDef = TypedDict(
    "CreateKeysAndCertificateResponseTypeDef",
    {"certificateArn": str, "certificateId": str, "certificatePem": str, "keyPair": KeyPairTypeDef},
    total=False,
)

CreateMitigationActionResponseTypeDef = TypedDict(
    "CreateMitigationActionResponseTypeDef", {"actionArn": str, "actionId": str}, total=False
)

CreateOTAUpdateResponseTypeDef = TypedDict(
    "CreateOTAUpdateResponseTypeDef",
    {
        "otaUpdateId": str,
        "awsIotJobId": str,
        "otaUpdateArn": str,
        "awsIotJobArn": str,
        "otaUpdateStatus": Literal[
            "CREATE_PENDING", "CREATE_IN_PROGRESS", "CREATE_COMPLETE", "CREATE_FAILED"
        ],
    },
    total=False,
)

CreatePolicyResponseTypeDef = TypedDict(
    "CreatePolicyResponseTypeDef",
    {"policyName": str, "policyArn": str, "policyDocument": str, "policyVersionId": str},
    total=False,
)

CreatePolicyVersionResponseTypeDef = TypedDict(
    "CreatePolicyVersionResponseTypeDef",
    {"policyArn": str, "policyDocument": str, "policyVersionId": str, "isDefaultVersion": bool},
    total=False,
)

CreateProvisioningClaimResponseTypeDef = TypedDict(
    "CreateProvisioningClaimResponseTypeDef",
    {
        "certificateId": str,
        "certificatePem": str,
        "keyPair": KeyPairTypeDef,
        "expiration": datetime,
    },
    total=False,
)

CreateProvisioningTemplateResponseTypeDef = TypedDict(
    "CreateProvisioningTemplateResponseTypeDef",
    {"templateArn": str, "templateName": str, "defaultVersionId": int},
    total=False,
)

CreateProvisioningTemplateVersionResponseTypeDef = TypedDict(
    "CreateProvisioningTemplateVersionResponseTypeDef",
    {"templateArn": str, "templateName": str, "versionId": int, "isDefaultVersion": bool},
    total=False,
)

CreateRoleAliasResponseTypeDef = TypedDict(
    "CreateRoleAliasResponseTypeDef", {"roleAlias": str, "roleAliasArn": str}, total=False
)

CreateScheduledAuditResponseTypeDef = TypedDict(
    "CreateScheduledAuditResponseTypeDef", {"scheduledAuditArn": str}, total=False
)

CreateSecurityProfileResponseTypeDef = TypedDict(
    "CreateSecurityProfileResponseTypeDef",
    {"securityProfileName": str, "securityProfileArn": str},
    total=False,
)

CreateStreamResponseTypeDef = TypedDict(
    "CreateStreamResponseTypeDef",
    {"streamId": str, "streamArn": str, "description": str, "streamVersion": int},
    total=False,
)

CreateThingGroupResponseTypeDef = TypedDict(
    "CreateThingGroupResponseTypeDef",
    {"thingGroupName": str, "thingGroupArn": str, "thingGroupId": str},
    total=False,
)

CreateThingResponseTypeDef = TypedDict(
    "CreateThingResponseTypeDef", {"thingName": str, "thingArn": str, "thingId": str}, total=False
)

CreateThingTypeResponseTypeDef = TypedDict(
    "CreateThingTypeResponseTypeDef",
    {"thingTypeName": str, "thingTypeArn": str, "thingTypeId": str},
    total=False,
)

HttpUrlDestinationPropertiesTypeDef = TypedDict(
    "HttpUrlDestinationPropertiesTypeDef", {"confirmationUrl": str}, total=False
)

TopicRuleDestinationTypeDef = TypedDict(
    "TopicRuleDestinationTypeDef",
    {
        "arn": str,
        "status": Literal["ENABLED", "IN_PROGRESS", "DISABLED", "ERROR"],
        "statusReason": str,
        "httpUrlProperties": HttpUrlDestinationPropertiesTypeDef,
    },
    total=False,
)

CreateTopicRuleDestinationResponseTypeDef = TypedDict(
    "CreateTopicRuleDestinationResponseTypeDef",
    {"topicRuleDestination": TopicRuleDestinationTypeDef},
    total=False,
)

DescribeAccountAuditConfigurationResponseTypeDef = TypedDict(
    "DescribeAccountAuditConfigurationResponseTypeDef",
    {
        "roleArn": str,
        "auditNotificationTargetConfigurations": Dict[
            Literal["SNS"], AuditNotificationTargetTypeDef
        ],
        "auditCheckConfigurations": Dict[str, AuditCheckConfigurationTypeDef],
    },
    total=False,
)

PolicyVersionIdentifierTypeDef = TypedDict(
    "PolicyVersionIdentifierTypeDef", {"policyName": str, "policyVersionId": str}, total=False
)

ResourceIdentifierTypeDef = TypedDict(
    "ResourceIdentifierTypeDef",
    {
        "deviceCertificateId": str,
        "caCertificateId": str,
        "cognitoIdentityPoolId": str,
        "clientId": str,
        "policyVersionIdentifier": PolicyVersionIdentifierTypeDef,
        "account": str,
        "iamRoleArn": str,
        "roleAliasArn": str,
    },
    total=False,
)

NonCompliantResourceTypeDef = TypedDict(
    "NonCompliantResourceTypeDef",
    {
        "resourceType": Literal[
            "DEVICE_CERTIFICATE",
            "CA_CERTIFICATE",
            "IOT_POLICY",
            "COGNITO_IDENTITY_POOL",
            "CLIENT_ID",
            "ACCOUNT_SETTINGS",
            "ROLE_ALIAS",
            "IAM_ROLE",
        ],
        "resourceIdentifier": ResourceIdentifierTypeDef,
        "additionalInfo": Dict[str, str],
    },
    total=False,
)

RelatedResourceTypeDef = TypedDict(
    "RelatedResourceTypeDef",
    {
        "resourceType": Literal[
            "DEVICE_CERTIFICATE",
            "CA_CERTIFICATE",
            "IOT_POLICY",
            "COGNITO_IDENTITY_POOL",
            "CLIENT_ID",
            "ACCOUNT_SETTINGS",
            "ROLE_ALIAS",
            "IAM_ROLE",
        ],
        "resourceIdentifier": ResourceIdentifierTypeDef,
        "additionalInfo": Dict[str, str],
    },
    total=False,
)

AuditFindingTypeDef = TypedDict(
    "AuditFindingTypeDef",
    {
        "findingId": str,
        "taskId": str,
        "checkName": str,
        "taskStartTime": datetime,
        "findingTime": datetime,
        "severity": Literal["CRITICAL", "HIGH", "MEDIUM", "LOW"],
        "nonCompliantResource": NonCompliantResourceTypeDef,
        "relatedResources": List[RelatedResourceTypeDef],
        "reasonForNonCompliance": str,
        "reasonForNonComplianceCode": str,
    },
    total=False,
)

DescribeAuditFindingResponseTypeDef = TypedDict(
    "DescribeAuditFindingResponseTypeDef", {"finding": AuditFindingTypeDef}, total=False
)

_RequiredAddThingsToThingGroupParamsTypeDef = TypedDict(
    "_RequiredAddThingsToThingGroupParamsTypeDef", {"thingGroupNames": List[str]}
)
_OptionalAddThingsToThingGroupParamsTypeDef = TypedDict(
    "_OptionalAddThingsToThingGroupParamsTypeDef", {"overrideDynamicGroups": bool}, total=False
)


class AddThingsToThingGroupParamsTypeDef(
    _RequiredAddThingsToThingGroupParamsTypeDef, _OptionalAddThingsToThingGroupParamsTypeDef
):
    pass


EnableIoTLoggingParamsTypeDef = TypedDict(
    "EnableIoTLoggingParamsTypeDef",
    {"roleArnForLogging": str, "logLevel": Literal["DEBUG", "INFO", "ERROR", "WARN", "DISABLED"]},
)

PublishFindingToSnsParamsTypeDef = TypedDict("PublishFindingToSnsParamsTypeDef", {"topicArn": str})

ReplaceDefaultPolicyVersionParamsTypeDef = TypedDict(
    "ReplaceDefaultPolicyVersionParamsTypeDef", {"templateName": Literal["BLANK_POLICY"]}
)

UpdateCACertificateParamsTypeDef = TypedDict(
    "UpdateCACertificateParamsTypeDef", {"action": Literal["DEACTIVATE"]}
)

UpdateDeviceCertificateParamsTypeDef = TypedDict(
    "UpdateDeviceCertificateParamsTypeDef", {"action": Literal["DEACTIVATE"]}
)

MitigationActionParamsTypeDef = TypedDict(
    "MitigationActionParamsTypeDef",
    {
        "updateDeviceCertificateParams": UpdateDeviceCertificateParamsTypeDef,
        "updateCACertificateParams": UpdateCACertificateParamsTypeDef,
        "addThingsToThingGroupParams": AddThingsToThingGroupParamsTypeDef,
        "replaceDefaultPolicyVersionParams": ReplaceDefaultPolicyVersionParamsTypeDef,
        "enableIoTLoggingParams": EnableIoTLoggingParamsTypeDef,
        "publishFindingToSnsParams": PublishFindingToSnsParamsTypeDef,
    },
    total=False,
)

MitigationActionTypeDef = TypedDict(
    "MitigationActionTypeDef",
    {"name": str, "id": str, "roleArn": str, "actionParams": MitigationActionParamsTypeDef},
    total=False,
)

TaskStatisticsForAuditCheckTypeDef = TypedDict(
    "TaskStatisticsForAuditCheckTypeDef",
    {
        "totalFindingsCount": int,
        "failedFindingsCount": int,
        "succeededFindingsCount": int,
        "skippedFindingsCount": int,
        "canceledFindingsCount": int,
    },
    total=False,
)

DescribeAuditMitigationActionsTaskResponseTypeDef = TypedDict(
    "DescribeAuditMitigationActionsTaskResponseTypeDef",
    {
        "taskStatus": Literal["IN_PROGRESS", "COMPLETED", "FAILED", "CANCELED"],
        "startTime": datetime,
        "endTime": datetime,
        "taskStatistics": Dict[str, TaskStatisticsForAuditCheckTypeDef],
        "target": AuditMitigationActionsTaskTargetTypeDef,
        "auditCheckToActionsMapping": Dict[str, List[str]],
        "actionsDefinition": List[MitigationActionTypeDef],
    },
    total=False,
)

AuditCheckDetailsTypeDef = TypedDict(
    "AuditCheckDetailsTypeDef",
    {
        "checkRunStatus": Literal[
            "IN_PROGRESS",
            "WAITING_FOR_DATA_COLLECTION",
            "CANCELED",
            "COMPLETED_COMPLIANT",
            "COMPLETED_NON_COMPLIANT",
            "FAILED",
        ],
        "checkCompliant": bool,
        "totalResourcesCount": int,
        "nonCompliantResourcesCount": int,
        "errorCode": str,
        "message": str,
    },
    total=False,
)

TaskStatisticsTypeDef = TypedDict(
    "TaskStatisticsTypeDef",
    {
        "totalChecks": int,
        "inProgressChecks": int,
        "waitingForDataCollectionChecks": int,
        "compliantChecks": int,
        "nonCompliantChecks": int,
        "failedChecks": int,
        "canceledChecks": int,
    },
    total=False,
)

DescribeAuditTaskResponseTypeDef = TypedDict(
    "DescribeAuditTaskResponseTypeDef",
    {
        "taskStatus": Literal["IN_PROGRESS", "COMPLETED", "FAILED", "CANCELED"],
        "taskType": Literal["ON_DEMAND_AUDIT_TASK", "SCHEDULED_AUDIT_TASK"],
        "taskStartTime": datetime,
        "taskStatistics": TaskStatisticsTypeDef,
        "scheduledAuditName": str,
        "auditDetails": Dict[str, AuditCheckDetailsTypeDef],
    },
    total=False,
)

AuthorizerDescriptionTypeDef = TypedDict(
    "AuthorizerDescriptionTypeDef",
    {
        "authorizerName": str,
        "authorizerArn": str,
        "authorizerFunctionArn": str,
        "tokenKeyName": str,
        "tokenSigningPublicKeys": Dict[str, str],
        "status": Literal["ACTIVE", "INACTIVE"],
        "creationDate": datetime,
        "lastModifiedDate": datetime,
        "signingDisabled": bool,
    },
    total=False,
)

DescribeAuthorizerResponseTypeDef = TypedDict(
    "DescribeAuthorizerResponseTypeDef",
    {"authorizerDescription": AuthorizerDescriptionTypeDef},
    total=False,
)

BillingGroupMetadataTypeDef = TypedDict(
    "BillingGroupMetadataTypeDef", {"creationDate": datetime}, total=False
)

DescribeBillingGroupResponseTypeDef = TypedDict(
    "DescribeBillingGroupResponseTypeDef",
    {
        "billingGroupName": str,
        "billingGroupId": str,
        "billingGroupArn": str,
        "version": int,
        "billingGroupProperties": BillingGroupPropertiesTypeDef,
        "billingGroupMetadata": BillingGroupMetadataTypeDef,
    },
    total=False,
)

CertificateValidityTypeDef = TypedDict(
    "CertificateValidityTypeDef", {"notBefore": datetime, "notAfter": datetime}, total=False
)

CACertificateDescriptionTypeDef = TypedDict(
    "CACertificateDescriptionTypeDef",
    {
        "certificateArn": str,
        "certificateId": str,
        "status": Literal["ACTIVE", "INACTIVE"],
        "certificatePem": str,
        "ownedBy": str,
        "creationDate": datetime,
        "autoRegistrationStatus": Literal["ENABLE", "DISABLE"],
        "lastModifiedDate": datetime,
        "customerVersion": int,
        "generationId": str,
        "validity": CertificateValidityTypeDef,
    },
    total=False,
)

RegistrationConfigTypeDef = TypedDict(
    "RegistrationConfigTypeDef", {"templateBody": str, "roleArn": str}, total=False
)

DescribeCACertificateResponseTypeDef = TypedDict(
    "DescribeCACertificateResponseTypeDef",
    {
        "certificateDescription": CACertificateDescriptionTypeDef,
        "registrationConfig": RegistrationConfigTypeDef,
    },
    total=False,
)

TransferDataTypeDef = TypedDict(
    "TransferDataTypeDef",
    {
        "transferMessage": str,
        "rejectReason": str,
        "transferDate": datetime,
        "acceptDate": datetime,
        "rejectDate": datetime,
    },
    total=False,
)

CertificateDescriptionTypeDef = TypedDict(
    "CertificateDescriptionTypeDef",
    {
        "certificateArn": str,
        "certificateId": str,
        "caCertificateId": str,
        "status": Literal[
            "ACTIVE",
            "INACTIVE",
            "REVOKED",
            "PENDING_TRANSFER",
            "REGISTER_INACTIVE",
            "PENDING_ACTIVATION",
        ],
        "certificatePem": str,
        "ownedBy": str,
        "previousOwnedBy": str,
        "creationDate": datetime,
        "lastModifiedDate": datetime,
        "customerVersion": int,
        "transferData": TransferDataTypeDef,
        "generationId": str,
        "validity": CertificateValidityTypeDef,
        "certificateMode": Literal["DEFAULT", "SNI_ONLY"],
    },
    total=False,
)

DescribeCertificateResponseTypeDef = TypedDict(
    "DescribeCertificateResponseTypeDef",
    {"certificateDescription": CertificateDescriptionTypeDef},
    total=False,
)

DescribeDefaultAuthorizerResponseTypeDef = TypedDict(
    "DescribeDefaultAuthorizerResponseTypeDef",
    {"authorizerDescription": AuthorizerDescriptionTypeDef},
    total=False,
)

DescribeDimensionResponseTypeDef = TypedDict(
    "DescribeDimensionResponseTypeDef",
    {
        "name": str,
        "arn": str,
        "type": Literal["TOPIC_FILTER"],
        "stringValues": List[str],
        "creationDate": datetime,
        "lastModifiedDate": datetime,
    },
    total=False,
)

ServerCertificateSummaryTypeDef = TypedDict(
    "ServerCertificateSummaryTypeDef",
    {
        "serverCertificateArn": str,
        "serverCertificateStatus": Literal["INVALID", "VALID"],
        "serverCertificateStatusDetail": str,
    },
    total=False,
)

DescribeDomainConfigurationResponseTypeDef = TypedDict(
    "DescribeDomainConfigurationResponseTypeDef",
    {
        "domainConfigurationName": str,
        "domainConfigurationArn": str,
        "domainName": str,
        "serverCertificates": List[ServerCertificateSummaryTypeDef],
        "authorizerConfig": AuthorizerConfigTypeDef,
        "domainConfigurationStatus": Literal["ENABLED", "DISABLED"],
        "serviceType": Literal["DATA", "CREDENTIAL_PROVIDER", "JOBS"],
        "domainType": Literal["ENDPOINT", "AWS_MANAGED", "CUSTOMER_MANAGED"],
    },
    total=False,
)

DescribeEndpointResponseTypeDef = TypedDict(
    "DescribeEndpointResponseTypeDef", {"endpointAddress": str}, total=False
)

DescribeEventConfigurationsResponseTypeDef = TypedDict(
    "DescribeEventConfigurationsResponseTypeDef",
    {
        "eventConfigurations": Dict[
            Literal[
                "THING",
                "THING_GROUP",
                "THING_TYPE",
                "THING_GROUP_MEMBERSHIP",
                "THING_GROUP_HIERARCHY",
                "THING_TYPE_ASSOCIATION",
                "JOB",
                "JOB_EXECUTION",
                "POLICY",
                "CERTIFICATE",
                "CA_CERTIFICATE",
            ],
            ConfigurationTypeDef,
        ],
        "creationDate": datetime,
        "lastModifiedDate": datetime,
    },
    total=False,
)

DescribeIndexResponseTypeDef = TypedDict(
    "DescribeIndexResponseTypeDef",
    {"indexName": str, "indexStatus": Literal["ACTIVE", "BUILDING", "REBUILDING"], "schema": str},
    total=False,
)

JobExecutionStatusDetailsTypeDef = TypedDict(
    "JobExecutionStatusDetailsTypeDef", {"detailsMap": Dict[str, str]}, total=False
)

JobExecutionTypeDef = TypedDict(
    "JobExecutionTypeDef",
    {
        "jobId": str,
        "status": Literal[
            "QUEUED",
            "IN_PROGRESS",
            "SUCCEEDED",
            "FAILED",
            "TIMED_OUT",
            "REJECTED",
            "REMOVED",
            "CANCELED",
        ],
        "forceCanceled": bool,
        "statusDetails": JobExecutionStatusDetailsTypeDef,
        "thingArn": str,
        "queuedAt": datetime,
        "startedAt": datetime,
        "lastUpdatedAt": datetime,
        "executionNumber": int,
        "versionNumber": int,
        "approximateSecondsBeforeTimedOut": int,
    },
    total=False,
)

DescribeJobExecutionResponseTypeDef = TypedDict(
    "DescribeJobExecutionResponseTypeDef", {"execution": JobExecutionTypeDef}, total=False
)

RateIncreaseCriteriaTypeDef = TypedDict(
    "RateIncreaseCriteriaTypeDef",
    {"numberOfNotifiedThings": int, "numberOfSucceededThings": int},
    total=False,
)

ExponentialRolloutRateTypeDef = TypedDict(
    "ExponentialRolloutRateTypeDef",
    {
        "baseRatePerMinute": int,
        "incrementFactor": float,
        "rateIncreaseCriteria": RateIncreaseCriteriaTypeDef,
    },
)

JobExecutionsRolloutConfigTypeDef = TypedDict(
    "JobExecutionsRolloutConfigTypeDef",
    {"maximumPerMinute": int, "exponentialRate": ExponentialRolloutRateTypeDef},
    total=False,
)

JobProcessDetailsTypeDef = TypedDict(
    "JobProcessDetailsTypeDef",
    {
        "processingTargets": List[str],
        "numberOfCanceledThings": int,
        "numberOfSucceededThings": int,
        "numberOfFailedThings": int,
        "numberOfRejectedThings": int,
        "numberOfQueuedThings": int,
        "numberOfInProgressThings": int,
        "numberOfRemovedThings": int,
        "numberOfTimedOutThings": int,
    },
    total=False,
)

PresignedUrlConfigTypeDef = TypedDict(
    "PresignedUrlConfigTypeDef", {"roleArn": str, "expiresInSec": int}, total=False
)

TimeoutConfigTypeDef = TypedDict(
    "TimeoutConfigTypeDef", {"inProgressTimeoutInMinutes": int}, total=False
)

JobTypeDef = TypedDict(
    "JobTypeDef",
    {
        "jobArn": str,
        "jobId": str,
        "targetSelection": Literal["CONTINUOUS", "SNAPSHOT"],
        "status": Literal["IN_PROGRESS", "CANCELED", "COMPLETED", "DELETION_IN_PROGRESS"],
        "forceCanceled": bool,
        "reasonCode": str,
        "comment": str,
        "targets": List[str],
        "description": str,
        "presignedUrlConfig": PresignedUrlConfigTypeDef,
        "jobExecutionsRolloutConfig": JobExecutionsRolloutConfigTypeDef,
        "abortConfig": AbortConfigTypeDef,
        "createdAt": datetime,
        "lastUpdatedAt": datetime,
        "completedAt": datetime,
        "jobProcessDetails": JobProcessDetailsTypeDef,
        "timeoutConfig": TimeoutConfigTypeDef,
    },
    total=False,
)

DescribeJobResponseTypeDef = TypedDict(
    "DescribeJobResponseTypeDef", {"documentSource": str, "job": JobTypeDef}, total=False
)

DescribeMitigationActionResponseTypeDef = TypedDict(
    "DescribeMitigationActionResponseTypeDef",
    {
        "actionName": str,
        "actionType": Literal[
            "UPDATE_DEVICE_CERTIFICATE",
            "UPDATE_CA_CERTIFICATE",
            "ADD_THINGS_TO_THING_GROUP",
            "REPLACE_DEFAULT_POLICY_VERSION",
            "ENABLE_IOT_LOGGING",
            "PUBLISH_FINDING_TO_SNS",
        ],
        "actionArn": str,
        "actionId": str,
        "roleArn": str,
        "actionParams": MitigationActionParamsTypeDef,
        "creationDate": datetime,
        "lastModifiedDate": datetime,
    },
    total=False,
)

_RequiredProvisioningHookTypeDef = TypedDict("_RequiredProvisioningHookTypeDef", {"targetArn": str})
_OptionalProvisioningHookTypeDef = TypedDict(
    "_OptionalProvisioningHookTypeDef", {"payloadVersion": str}, total=False
)


class ProvisioningHookTypeDef(_RequiredProvisioningHookTypeDef, _OptionalProvisioningHookTypeDef):
    pass


DescribeProvisioningTemplateResponseTypeDef = TypedDict(
    "DescribeProvisioningTemplateResponseTypeDef",
    {
        "templateArn": str,
        "templateName": str,
        "description": str,
        "creationDate": datetime,
        "lastModifiedDate": datetime,
        "defaultVersionId": int,
        "templateBody": str,
        "enabled": bool,
        "provisioningRoleArn": str,
        "preProvisioningHook": ProvisioningHookTypeDef,
    },
    total=False,
)

DescribeProvisioningTemplateVersionResponseTypeDef = TypedDict(
    "DescribeProvisioningTemplateVersionResponseTypeDef",
    {"versionId": int, "creationDate": datetime, "templateBody": str, "isDefaultVersion": bool},
    total=False,
)

RoleAliasDescriptionTypeDef = TypedDict(
    "RoleAliasDescriptionTypeDef",
    {
        "roleAlias": str,
        "roleAliasArn": str,
        "roleArn": str,
        "owner": str,
        "credentialDurationSeconds": int,
        "creationDate": datetime,
        "lastModifiedDate": datetime,
    },
    total=False,
)

DescribeRoleAliasResponseTypeDef = TypedDict(
    "DescribeRoleAliasResponseTypeDef",
    {"roleAliasDescription": RoleAliasDescriptionTypeDef},
    total=False,
)

DescribeScheduledAuditResponseTypeDef = TypedDict(
    "DescribeScheduledAuditResponseTypeDef",
    {
        "frequency": Literal["DAILY", "WEEKLY", "BIWEEKLY", "MONTHLY"],
        "dayOfMonth": str,
        "dayOfWeek": Literal["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"],
        "targetCheckNames": List[str],
        "scheduledAuditName": str,
        "scheduledAuditArn": str,
    },
    total=False,
)

_RequiredMetricToRetainTypeDef = TypedDict("_RequiredMetricToRetainTypeDef", {"metric": str})
_OptionalMetricToRetainTypeDef = TypedDict(
    "_OptionalMetricToRetainTypeDef", {"metricDimension": MetricDimensionTypeDef}, total=False
)


class MetricToRetainTypeDef(_RequiredMetricToRetainTypeDef, _OptionalMetricToRetainTypeDef):
    pass


DescribeSecurityProfileResponseTypeDef = TypedDict(
    "DescribeSecurityProfileResponseTypeDef",
    {
        "securityProfileName": str,
        "securityProfileArn": str,
        "securityProfileDescription": str,
        "behaviors": List[BehaviorTypeDef],
        "alertTargets": Dict[Literal["SNS"], AlertTargetTypeDef],
        "additionalMetricsToRetain": List[str],
        "additionalMetricsToRetainV2": List[MetricToRetainTypeDef],
        "version": int,
        "creationDate": datetime,
        "lastModifiedDate": datetime,
    },
    total=False,
)

S3LocationTypeDef = TypedDict(
    "S3LocationTypeDef", {"bucket": str, "key": str, "version": str}, total=False
)

StreamFileTypeDef = TypedDict(
    "StreamFileTypeDef", {"fileId": int, "s3Location": S3LocationTypeDef}, total=False
)

StreamInfoTypeDef = TypedDict(
    "StreamInfoTypeDef",
    {
        "streamId": str,
        "streamArn": str,
        "streamVersion": int,
        "description": str,
        "files": List[StreamFileTypeDef],
        "createdAt": datetime,
        "lastUpdatedAt": datetime,
        "roleArn": str,
    },
    total=False,
)

DescribeStreamResponseTypeDef = TypedDict(
    "DescribeStreamResponseTypeDef", {"streamInfo": StreamInfoTypeDef}, total=False
)

GroupNameAndArnTypeDef = TypedDict(
    "GroupNameAndArnTypeDef", {"groupName": str, "groupArn": str}, total=False
)

ThingGroupMetadataTypeDef = TypedDict(
    "ThingGroupMetadataTypeDef",
    {
        "parentGroupName": str,
        "rootToParentThingGroups": List[GroupNameAndArnTypeDef],
        "creationDate": datetime,
    },
    total=False,
)

ThingGroupPropertiesTypeDef = TypedDict(
    "ThingGroupPropertiesTypeDef",
    {"thingGroupDescription": str, "attributePayload": AttributePayloadTypeDef},
    total=False,
)

DescribeThingGroupResponseTypeDef = TypedDict(
    "DescribeThingGroupResponseTypeDef",
    {
        "thingGroupName": str,
        "thingGroupId": str,
        "thingGroupArn": str,
        "version": int,
        "thingGroupProperties": ThingGroupPropertiesTypeDef,
        "thingGroupMetadata": ThingGroupMetadataTypeDef,
        "indexName": str,
        "queryString": str,
        "queryVersion": str,
        "status": Literal["ACTIVE", "BUILDING", "REBUILDING"],
    },
    total=False,
)

DescribeThingRegistrationTaskResponseTypeDef = TypedDict(
    "DescribeThingRegistrationTaskResponseTypeDef",
    {
        "taskId": str,
        "creationDate": datetime,
        "lastModifiedDate": datetime,
        "templateBody": str,
        "inputFileBucket": str,
        "inputFileKey": str,
        "roleArn": str,
        "status": Literal["InProgress", "Completed", "Failed", "Cancelled", "Cancelling"],
        "message": str,
        "successCount": int,
        "failureCount": int,
        "percentageProgress": int,
    },
    total=False,
)

DescribeThingResponseTypeDef = TypedDict(
    "DescribeThingResponseTypeDef",
    {
        "defaultClientId": str,
        "thingName": str,
        "thingId": str,
        "thingArn": str,
        "thingTypeName": str,
        "attributes": Dict[str, str],
        "version": int,
        "billingGroupName": str,
    },
    total=False,
)

ThingTypeMetadataTypeDef = TypedDict(
    "ThingTypeMetadataTypeDef",
    {"deprecated": bool, "deprecationDate": datetime, "creationDate": datetime},
    total=False,
)

ThingTypePropertiesTypeDef = TypedDict(
    "ThingTypePropertiesTypeDef",
    {"thingTypeDescription": str, "searchableAttributes": List[str]},
    total=False,
)

DescribeThingTypeResponseTypeDef = TypedDict(
    "DescribeThingTypeResponseTypeDef",
    {
        "thingTypeName": str,
        "thingTypeId": str,
        "thingTypeArn": str,
        "thingTypeProperties": ThingTypePropertiesTypeDef,
        "thingTypeMetadata": ThingTypeMetadataTypeDef,
    },
    total=False,
)

GetCardinalityResponseTypeDef = TypedDict(
    "GetCardinalityResponseTypeDef", {"cardinality": int}, total=False
)

EffectivePolicyTypeDef = TypedDict(
    "EffectivePolicyTypeDef",
    {"policyName": str, "policyArn": str, "policyDocument": str},
    total=False,
)

GetEffectivePoliciesResponseTypeDef = TypedDict(
    "GetEffectivePoliciesResponseTypeDef",
    {"effectivePolicies": List[EffectivePolicyTypeDef]},
    total=False,
)

FieldTypeDef = TypedDict(
    "FieldTypeDef", {"name": str, "type": Literal["Number", "String", "Boolean"]}, total=False
)

_RequiredThingGroupIndexingConfigurationTypeDef = TypedDict(
    "_RequiredThingGroupIndexingConfigurationTypeDef",
    {"thingGroupIndexingMode": Literal["OFF", "ON"]},
)
_OptionalThingGroupIndexingConfigurationTypeDef = TypedDict(
    "_OptionalThingGroupIndexingConfigurationTypeDef",
    {"managedFields": List[FieldTypeDef], "customFields": List[FieldTypeDef]},
    total=False,
)


class ThingGroupIndexingConfigurationTypeDef(
    _RequiredThingGroupIndexingConfigurationTypeDef, _OptionalThingGroupIndexingConfigurationTypeDef
):
    pass


_RequiredThingIndexingConfigurationTypeDef = TypedDict(
    "_RequiredThingIndexingConfigurationTypeDef",
    {"thingIndexingMode": Literal["OFF", "REGISTRY", "REGISTRY_AND_SHADOW"]},
)
_OptionalThingIndexingConfigurationTypeDef = TypedDict(
    "_OptionalThingIndexingConfigurationTypeDef",
    {
        "thingConnectivityIndexingMode": Literal["OFF", "STATUS"],
        "managedFields": List[FieldTypeDef],
        "customFields": List[FieldTypeDef],
    },
    total=False,
)


class ThingIndexingConfigurationTypeDef(
    _RequiredThingIndexingConfigurationTypeDef, _OptionalThingIndexingConfigurationTypeDef
):
    pass


GetIndexingConfigurationResponseTypeDef = TypedDict(
    "GetIndexingConfigurationResponseTypeDef",
    {
        "thingIndexingConfiguration": ThingIndexingConfigurationTypeDef,
        "thingGroupIndexingConfiguration": ThingGroupIndexingConfigurationTypeDef,
    },
    total=False,
)

GetJobDocumentResponseTypeDef = TypedDict(
    "GetJobDocumentResponseTypeDef", {"document": str}, total=False
)

GetLoggingOptionsResponseTypeDef = TypedDict(
    "GetLoggingOptionsResponseTypeDef",
    {"roleArn": str, "logLevel": Literal["DEBUG", "INFO", "ERROR", "WARN", "DISABLED"]},
    total=False,
)

ErrorInfoTypeDef = TypedDict("ErrorInfoTypeDef", {"code": str, "message": str}, total=False)

CodeSigningCertificateChainTypeDef = TypedDict(
    "CodeSigningCertificateChainTypeDef",
    {"certificateName": str, "inlineDocument": str},
    total=False,
)

CodeSigningSignatureTypeDef = TypedDict(
    "CodeSigningSignatureTypeDef", {"inlineDocument": Union[bytes, IO]}, total=False
)

CustomCodeSigningTypeDef = TypedDict(
    "CustomCodeSigningTypeDef",
    {
        "signature": CodeSigningSignatureTypeDef,
        "certificateChain": CodeSigningCertificateChainTypeDef,
        "hashAlgorithm": str,
        "signatureAlgorithm": str,
    },
    total=False,
)

S3DestinationTypeDef = TypedDict(
    "S3DestinationTypeDef", {"bucket": str, "prefix": str}, total=False
)

DestinationTypeDef = TypedDict(
    "DestinationTypeDef", {"s3Destination": S3DestinationTypeDef}, total=False
)

SigningProfileParameterTypeDef = TypedDict(
    "SigningProfileParameterTypeDef",
    {"certificateArn": str, "platform": str, "certificatePathOnDevice": str},
    total=False,
)

StartSigningJobParameterTypeDef = TypedDict(
    "StartSigningJobParameterTypeDef",
    {
        "signingProfileParameter": SigningProfileParameterTypeDef,
        "signingProfileName": str,
        "destination": DestinationTypeDef,
    },
    total=False,
)

CodeSigningTypeDef = TypedDict(
    "CodeSigningTypeDef",
    {
        "awsSignerJobId": str,
        "startSigningJobParameter": StartSigningJobParameterTypeDef,
        "customCodeSigning": CustomCodeSigningTypeDef,
    },
    total=False,
)

StreamTypeDef = TypedDict("StreamTypeDef", {"streamId": str, "fileId": int}, total=False)

FileLocationTypeDef = TypedDict(
    "FileLocationTypeDef", {"stream": StreamTypeDef, "s3Location": S3LocationTypeDef}, total=False
)

OTAUpdateFileTypeDef = TypedDict(
    "OTAUpdateFileTypeDef",
    {
        "fileName": str,
        "fileVersion": str,
        "fileLocation": FileLocationTypeDef,
        "codeSigning": CodeSigningTypeDef,
        "attributes": Dict[str, str],
    },
    total=False,
)

OTAUpdateInfoTypeDef = TypedDict(
    "OTAUpdateInfoTypeDef",
    {
        "otaUpdateId": str,
        "otaUpdateArn": str,
        "creationDate": datetime,
        "lastModifiedDate": datetime,
        "description": str,
        "targets": List[str],
        "protocols": List[Literal["MQTT", "HTTP"]],
        "awsJobExecutionsRolloutConfig": AwsJobExecutionsRolloutConfigTypeDef,
        "awsJobPresignedUrlConfig": AwsJobPresignedUrlConfigTypeDef,
        "targetSelection": Literal["CONTINUOUS", "SNAPSHOT"],
        "otaUpdateFiles": List[OTAUpdateFileTypeDef],
        "otaUpdateStatus": Literal[
            "CREATE_PENDING", "CREATE_IN_PROGRESS", "CREATE_COMPLETE", "CREATE_FAILED"
        ],
        "awsIotJobId": str,
        "awsIotJobArn": str,
        "errorInfo": ErrorInfoTypeDef,
        "additionalParameters": Dict[str, str],
    },
    total=False,
)

GetOTAUpdateResponseTypeDef = TypedDict(
    "GetOTAUpdateResponseTypeDef", {"otaUpdateInfo": OTAUpdateInfoTypeDef}, total=False
)

PercentPairTypeDef = TypedDict(
    "PercentPairTypeDef", {"percent": float, "value": float}, total=False
)

GetPercentilesResponseTypeDef = TypedDict(
    "GetPercentilesResponseTypeDef", {"percentiles": List[PercentPairTypeDef]}, total=False
)

GetPolicyResponseTypeDef = TypedDict(
    "GetPolicyResponseTypeDef",
    {
        "policyName": str,
        "policyArn": str,
        "policyDocument": str,
        "defaultVersionId": str,
        "creationDate": datetime,
        "lastModifiedDate": datetime,
        "generationId": str,
    },
    total=False,
)

GetPolicyVersionResponseTypeDef = TypedDict(
    "GetPolicyVersionResponseTypeDef",
    {
        "policyArn": str,
        "policyName": str,
        "policyDocument": str,
        "policyVersionId": str,
        "isDefaultVersion": bool,
        "creationDate": datetime,
        "lastModifiedDate": datetime,
        "generationId": str,
    },
    total=False,
)

GetRegistrationCodeResponseTypeDef = TypedDict(
    "GetRegistrationCodeResponseTypeDef", {"registrationCode": str}, total=False
)

StatisticsTypeDef = TypedDict(
    "StatisticsTypeDef",
    {
        "count": int,
        "average": float,
        "sum": float,
        "minimum": float,
        "maximum": float,
        "sumOfSquares": float,
        "variance": float,
        "stdDeviation": float,
    },
    total=False,
)

GetStatisticsResponseTypeDef = TypedDict(
    "GetStatisticsResponseTypeDef", {"statistics": StatisticsTypeDef}, total=False
)

GetTopicRuleDestinationResponseTypeDef = TypedDict(
    "GetTopicRuleDestinationResponseTypeDef",
    {"topicRuleDestination": TopicRuleDestinationTypeDef},
    total=False,
)

CloudwatchAlarmActionTypeDef = TypedDict(
    "CloudwatchAlarmActionTypeDef",
    {"roleArn": str, "alarmName": str, "stateReason": str, "stateValue": str},
)

CloudwatchLogsActionTypeDef = TypedDict(
    "CloudwatchLogsActionTypeDef", {"roleArn": str, "logGroupName": str}
)

_RequiredCloudwatchMetricActionTypeDef = TypedDict(
    "_RequiredCloudwatchMetricActionTypeDef",
    {
        "roleArn": str,
        "metricNamespace": str,
        "metricName": str,
        "metricValue": str,
        "metricUnit": str,
    },
)
_OptionalCloudwatchMetricActionTypeDef = TypedDict(
    "_OptionalCloudwatchMetricActionTypeDef", {"metricTimestamp": str}, total=False
)


class CloudwatchMetricActionTypeDef(
    _RequiredCloudwatchMetricActionTypeDef, _OptionalCloudwatchMetricActionTypeDef
):
    pass


_RequiredDynamoDBActionTypeDef = TypedDict(
    "_RequiredDynamoDBActionTypeDef",
    {"tableName": str, "roleArn": str, "hashKeyField": str, "hashKeyValue": str},
)
_OptionalDynamoDBActionTypeDef = TypedDict(
    "_OptionalDynamoDBActionTypeDef",
    {
        "operation": str,
        "hashKeyType": Literal["STRING", "NUMBER"],
        "rangeKeyField": str,
        "rangeKeyValue": str,
        "rangeKeyType": Literal["STRING", "NUMBER"],
        "payloadField": str,
    },
    total=False,
)


class DynamoDBActionTypeDef(_RequiredDynamoDBActionTypeDef, _OptionalDynamoDBActionTypeDef):
    pass


PutItemInputTypeDef = TypedDict("PutItemInputTypeDef", {"tableName": str})

DynamoDBv2ActionTypeDef = TypedDict(
    "DynamoDBv2ActionTypeDef", {"roleArn": str, "putItem": PutItemInputTypeDef}
)

ElasticsearchActionTypeDef = TypedDict(
    "ElasticsearchActionTypeDef",
    {"roleArn": str, "endpoint": str, "index": str, "type": str, "id": str},
)

_RequiredFirehoseActionTypeDef = TypedDict(
    "_RequiredFirehoseActionTypeDef", {"roleArn": str, "deliveryStreamName": str}
)
_OptionalFirehoseActionTypeDef = TypedDict(
    "_OptionalFirehoseActionTypeDef", {"separator": str}, total=False
)


class FirehoseActionTypeDef(_RequiredFirehoseActionTypeDef, _OptionalFirehoseActionTypeDef):
    pass


HttpActionHeaderTypeDef = TypedDict("HttpActionHeaderTypeDef", {"key": str, "value": str})

SigV4AuthorizationTypeDef = TypedDict(
    "SigV4AuthorizationTypeDef", {"signingRegion": str, "serviceName": str, "roleArn": str}
)

HttpAuthorizationTypeDef = TypedDict(
    "HttpAuthorizationTypeDef", {"sigv4": SigV4AuthorizationTypeDef}, total=False
)

_RequiredHttpActionTypeDef = TypedDict("_RequiredHttpActionTypeDef", {"url": str})
_OptionalHttpActionTypeDef = TypedDict(
    "_OptionalHttpActionTypeDef",
    {
        "confirmationUrl": str,
        "headers": List[HttpActionHeaderTypeDef],
        "auth": HttpAuthorizationTypeDef,
    },
    total=False,
)


class HttpActionTypeDef(_RequiredHttpActionTypeDef, _OptionalHttpActionTypeDef):
    pass


IotAnalyticsActionTypeDef = TypedDict(
    "IotAnalyticsActionTypeDef",
    {"channelArn": str, "channelName": str, "roleArn": str},
    total=False,
)

_RequiredIotEventsActionTypeDef = TypedDict(
    "_RequiredIotEventsActionTypeDef", {"inputName": str, "roleArn": str}
)
_OptionalIotEventsActionTypeDef = TypedDict(
    "_OptionalIotEventsActionTypeDef", {"messageId": str}, total=False
)


class IotEventsActionTypeDef(_RequiredIotEventsActionTypeDef, _OptionalIotEventsActionTypeDef):
    pass


_RequiredAssetPropertyTimestampTypeDef = TypedDict(
    "_RequiredAssetPropertyTimestampTypeDef", {"timeInSeconds": str}
)
_OptionalAssetPropertyTimestampTypeDef = TypedDict(
    "_OptionalAssetPropertyTimestampTypeDef", {"offsetInNanos": str}, total=False
)


class AssetPropertyTimestampTypeDef(
    _RequiredAssetPropertyTimestampTypeDef, _OptionalAssetPropertyTimestampTypeDef
):
    pass


AssetPropertyVariantTypeDef = TypedDict(
    "AssetPropertyVariantTypeDef",
    {"stringValue": str, "integerValue": str, "doubleValue": str, "booleanValue": str},
    total=False,
)

_RequiredAssetPropertyValueTypeDef = TypedDict(
    "_RequiredAssetPropertyValueTypeDef",
    {"value": AssetPropertyVariantTypeDef, "timestamp": AssetPropertyTimestampTypeDef},
)
_OptionalAssetPropertyValueTypeDef = TypedDict(
    "_OptionalAssetPropertyValueTypeDef", {"quality": str}, total=False
)


class AssetPropertyValueTypeDef(
    _RequiredAssetPropertyValueTypeDef, _OptionalAssetPropertyValueTypeDef
):
    pass


_RequiredPutAssetPropertyValueEntryTypeDef = TypedDict(
    "_RequiredPutAssetPropertyValueEntryTypeDef",
    {"propertyValues": List[AssetPropertyValueTypeDef]},
)
_OptionalPutAssetPropertyValueEntryTypeDef = TypedDict(
    "_OptionalPutAssetPropertyValueEntryTypeDef",
    {"entryId": str, "assetId": str, "propertyId": str, "propertyAlias": str},
    total=False,
)


class PutAssetPropertyValueEntryTypeDef(
    _RequiredPutAssetPropertyValueEntryTypeDef, _OptionalPutAssetPropertyValueEntryTypeDef
):
    pass


IotSiteWiseActionTypeDef = TypedDict(
    "IotSiteWiseActionTypeDef",
    {"putAssetPropertyValueEntries": List[PutAssetPropertyValueEntryTypeDef], "roleArn": str},
)

_RequiredKinesisActionTypeDef = TypedDict(
    "_RequiredKinesisActionTypeDef", {"roleArn": str, "streamName": str}
)
_OptionalKinesisActionTypeDef = TypedDict(
    "_OptionalKinesisActionTypeDef", {"partitionKey": str}, total=False
)


class KinesisActionTypeDef(_RequiredKinesisActionTypeDef, _OptionalKinesisActionTypeDef):
    pass


LambdaActionTypeDef = TypedDict("LambdaActionTypeDef", {"functionArn": str})

_RequiredRepublishActionTypeDef = TypedDict(
    "_RequiredRepublishActionTypeDef", {"roleArn": str, "topic": str}
)
_OptionalRepublishActionTypeDef = TypedDict(
    "_OptionalRepublishActionTypeDef", {"qos": int}, total=False
)


class RepublishActionTypeDef(_RequiredRepublishActionTypeDef, _OptionalRepublishActionTypeDef):
    pass


_RequiredS3ActionTypeDef = TypedDict(
    "_RequiredS3ActionTypeDef", {"roleArn": str, "bucketName": str, "key": str}
)
_OptionalS3ActionTypeDef = TypedDict(
    "_OptionalS3ActionTypeDef",
    {
        "cannedAcl": Literal[
            "private",
            "public-read",
            "public-read-write",
            "aws-exec-read",
            "authenticated-read",
            "bucket-owner-read",
            "bucket-owner-full-control",
            "log-delivery-write",
        ]
    },
    total=False,
)


class S3ActionTypeDef(_RequiredS3ActionTypeDef, _OptionalS3ActionTypeDef):
    pass


SalesforceActionTypeDef = TypedDict("SalesforceActionTypeDef", {"token": str, "url": str})

_RequiredSnsActionTypeDef = TypedDict(
    "_RequiredSnsActionTypeDef", {"targetArn": str, "roleArn": str}
)
_OptionalSnsActionTypeDef = TypedDict(
    "_OptionalSnsActionTypeDef", {"messageFormat": Literal["RAW", "JSON"]}, total=False
)


class SnsActionTypeDef(_RequiredSnsActionTypeDef, _OptionalSnsActionTypeDef):
    pass


_RequiredSqsActionTypeDef = TypedDict(
    "_RequiredSqsActionTypeDef", {"roleArn": str, "queueUrl": str}
)
_OptionalSqsActionTypeDef = TypedDict("_OptionalSqsActionTypeDef", {"useBase64": bool}, total=False)


class SqsActionTypeDef(_RequiredSqsActionTypeDef, _OptionalSqsActionTypeDef):
    pass


_RequiredStepFunctionsActionTypeDef = TypedDict(
    "_RequiredStepFunctionsActionTypeDef", {"stateMachineName": str, "roleArn": str}
)
_OptionalStepFunctionsActionTypeDef = TypedDict(
    "_OptionalStepFunctionsActionTypeDef", {"executionNamePrefix": str}, total=False
)


class StepFunctionsActionTypeDef(
    _RequiredStepFunctionsActionTypeDef, _OptionalStepFunctionsActionTypeDef
):
    pass


ActionTypeDef = TypedDict(
    "ActionTypeDef",
    {
        "dynamoDB": DynamoDBActionTypeDef,
        "dynamoDBv2": DynamoDBv2ActionTypeDef,
        "lambda": LambdaActionTypeDef,
        "sns": SnsActionTypeDef,
        "sqs": SqsActionTypeDef,
        "kinesis": KinesisActionTypeDef,
        "republish": RepublishActionTypeDef,
        "s3": S3ActionTypeDef,
        "firehose": FirehoseActionTypeDef,
        "cloudwatchMetric": CloudwatchMetricActionTypeDef,
        "cloudwatchAlarm": CloudwatchAlarmActionTypeDef,
        "cloudwatchLogs": CloudwatchLogsActionTypeDef,
        "elasticsearch": ElasticsearchActionTypeDef,
        "salesforce": SalesforceActionTypeDef,
        "iotAnalytics": IotAnalyticsActionTypeDef,
        "iotEvents": IotEventsActionTypeDef,
        "iotSiteWise": IotSiteWiseActionTypeDef,
        "stepFunctions": StepFunctionsActionTypeDef,
        "http": HttpActionTypeDef,
    },
    total=False,
)

TopicRuleTypeDef = TypedDict(
    "TopicRuleTypeDef",
    {
        "ruleName": str,
        "sql": str,
        "description": str,
        "createdAt": datetime,
        "actions": List[ActionTypeDef],
        "ruleDisabled": bool,
        "awsIotSqlVersion": str,
        "errorAction": ActionTypeDef,
    },
    total=False,
)

GetTopicRuleResponseTypeDef = TypedDict(
    "GetTopicRuleResponseTypeDef", {"ruleArn": str, "rule": TopicRuleTypeDef}, total=False
)

GetV2LoggingOptionsResponseTypeDef = TypedDict(
    "GetV2LoggingOptionsResponseTypeDef",
    {
        "roleArn": str,
        "defaultLogLevel": Literal["DEBUG", "INFO", "ERROR", "WARN", "DISABLED"],
        "disableAllLogs": bool,
    },
    total=False,
)

HttpContextTypeDef = TypedDict(
    "HttpContextTypeDef", {"headers": Dict[str, str], "queryString": str}, total=False
)

ActiveViolationTypeDef = TypedDict(
    "ActiveViolationTypeDef",
    {
        "violationId": str,
        "thingName": str,
        "securityProfileName": str,
        "behavior": BehaviorTypeDef,
        "lastViolationValue": MetricValueTypeDef,
        "lastViolationTime": datetime,
        "violationStartTime": datetime,
    },
    total=False,
)

ListActiveViolationsResponseTypeDef = TypedDict(
    "ListActiveViolationsResponseTypeDef",
    {"activeViolations": List[ActiveViolationTypeDef], "nextToken": str},
    total=False,
)

PolicyTypeDef = TypedDict("PolicyTypeDef", {"policyName": str, "policyArn": str}, total=False)

ListAttachedPoliciesResponseTypeDef = TypedDict(
    "ListAttachedPoliciesResponseTypeDef",
    {"policies": List[PolicyTypeDef], "nextMarker": str},
    total=False,
)

ListAuditFindingsResponseTypeDef = TypedDict(
    "ListAuditFindingsResponseTypeDef",
    {"findings": List[AuditFindingTypeDef], "nextToken": str},
    total=False,
)

AuditMitigationActionExecutionMetadataTypeDef = TypedDict(
    "AuditMitigationActionExecutionMetadataTypeDef",
    {
        "taskId": str,
        "findingId": str,
        "actionName": str,
        "actionId": str,
        "status": Literal["IN_PROGRESS", "COMPLETED", "FAILED", "CANCELED", "SKIPPED", "PENDING"],
        "startTime": datetime,
        "endTime": datetime,
        "errorCode": str,
        "message": str,
    },
    total=False,
)

ListAuditMitigationActionsExecutionsResponseTypeDef = TypedDict(
    "ListAuditMitigationActionsExecutionsResponseTypeDef",
    {"actionsExecutions": List[AuditMitigationActionExecutionMetadataTypeDef], "nextToken": str},
    total=False,
)

AuditMitigationActionsTaskMetadataTypeDef = TypedDict(
    "AuditMitigationActionsTaskMetadataTypeDef",
    {
        "taskId": str,
        "startTime": datetime,
        "taskStatus": Literal["IN_PROGRESS", "COMPLETED", "FAILED", "CANCELED"],
    },
    total=False,
)

ListAuditMitigationActionsTasksResponseTypeDef = TypedDict(
    "ListAuditMitigationActionsTasksResponseTypeDef",
    {"tasks": List[AuditMitigationActionsTaskMetadataTypeDef], "nextToken": str},
    total=False,
)

AuditTaskMetadataTypeDef = TypedDict(
    "AuditTaskMetadataTypeDef",
    {
        "taskId": str,
        "taskStatus": Literal["IN_PROGRESS", "COMPLETED", "FAILED", "CANCELED"],
        "taskType": Literal["ON_DEMAND_AUDIT_TASK", "SCHEDULED_AUDIT_TASK"],
    },
    total=False,
)

ListAuditTasksResponseTypeDef = TypedDict(
    "ListAuditTasksResponseTypeDef",
    {"tasks": List[AuditTaskMetadataTypeDef], "nextToken": str},
    total=False,
)

AuthorizerSummaryTypeDef = TypedDict(
    "AuthorizerSummaryTypeDef", {"authorizerName": str, "authorizerArn": str}, total=False
)

ListAuthorizersResponseTypeDef = TypedDict(
    "ListAuthorizersResponseTypeDef",
    {"authorizers": List[AuthorizerSummaryTypeDef], "nextMarker": str},
    total=False,
)

ListBillingGroupsResponseTypeDef = TypedDict(
    "ListBillingGroupsResponseTypeDef",
    {"billingGroups": List[GroupNameAndArnTypeDef], "nextToken": str},
    total=False,
)

CACertificateTypeDef = TypedDict(
    "CACertificateTypeDef",
    {
        "certificateArn": str,
        "certificateId": str,
        "status": Literal["ACTIVE", "INACTIVE"],
        "creationDate": datetime,
    },
    total=False,
)

ListCACertificatesResponseTypeDef = TypedDict(
    "ListCACertificatesResponseTypeDef",
    {"certificates": List[CACertificateTypeDef], "nextMarker": str},
    total=False,
)

CertificateTypeDef = TypedDict(
    "CertificateTypeDef",
    {
        "certificateArn": str,
        "certificateId": str,
        "status": Literal[
            "ACTIVE",
            "INACTIVE",
            "REVOKED",
            "PENDING_TRANSFER",
            "REGISTER_INACTIVE",
            "PENDING_ACTIVATION",
        ],
        "certificateMode": Literal["DEFAULT", "SNI_ONLY"],
        "creationDate": datetime,
    },
    total=False,
)

ListCertificatesByCAResponseTypeDef = TypedDict(
    "ListCertificatesByCAResponseTypeDef",
    {"certificates": List[CertificateTypeDef], "nextMarker": str},
    total=False,
)

ListCertificatesResponseTypeDef = TypedDict(
    "ListCertificatesResponseTypeDef",
    {"certificates": List[CertificateTypeDef], "nextMarker": str},
    total=False,
)

ListDimensionsResponseTypeDef = TypedDict(
    "ListDimensionsResponseTypeDef", {"dimensionNames": List[str], "nextToken": str}, total=False
)

DomainConfigurationSummaryTypeDef = TypedDict(
    "DomainConfigurationSummaryTypeDef",
    {
        "domainConfigurationName": str,
        "domainConfigurationArn": str,
        "serviceType": Literal["DATA", "CREDENTIAL_PROVIDER", "JOBS"],
    },
    total=False,
)

ListDomainConfigurationsResponseTypeDef = TypedDict(
    "ListDomainConfigurationsResponseTypeDef",
    {"domainConfigurations": List[DomainConfigurationSummaryTypeDef], "nextMarker": str},
    total=False,
)

ListIndicesResponseTypeDef = TypedDict(
    "ListIndicesResponseTypeDef", {"indexNames": List[str], "nextToken": str}, total=False
)

JobExecutionSummaryTypeDef = TypedDict(
    "JobExecutionSummaryTypeDef",
    {
        "status": Literal[
            "QUEUED",
            "IN_PROGRESS",
            "SUCCEEDED",
            "FAILED",
            "TIMED_OUT",
            "REJECTED",
            "REMOVED",
            "CANCELED",
        ],
        "queuedAt": datetime,
        "startedAt": datetime,
        "lastUpdatedAt": datetime,
        "executionNumber": int,
    },
    total=False,
)

JobExecutionSummaryForJobTypeDef = TypedDict(
    "JobExecutionSummaryForJobTypeDef",
    {"thingArn": str, "jobExecutionSummary": JobExecutionSummaryTypeDef},
    total=False,
)

ListJobExecutionsForJobResponseTypeDef = TypedDict(
    "ListJobExecutionsForJobResponseTypeDef",
    {"executionSummaries": List[JobExecutionSummaryForJobTypeDef], "nextToken": str},
    total=False,
)

JobExecutionSummaryForThingTypeDef = TypedDict(
    "JobExecutionSummaryForThingTypeDef",
    {"jobId": str, "jobExecutionSummary": JobExecutionSummaryTypeDef},
    total=False,
)

ListJobExecutionsForThingResponseTypeDef = TypedDict(
    "ListJobExecutionsForThingResponseTypeDef",
    {"executionSummaries": List[JobExecutionSummaryForThingTypeDef], "nextToken": str},
    total=False,
)

JobSummaryTypeDef = TypedDict(
    "JobSummaryTypeDef",
    {
        "jobArn": str,
        "jobId": str,
        "thingGroupId": str,
        "targetSelection": Literal["CONTINUOUS", "SNAPSHOT"],
        "status": Literal["IN_PROGRESS", "CANCELED", "COMPLETED", "DELETION_IN_PROGRESS"],
        "createdAt": datetime,
        "lastUpdatedAt": datetime,
        "completedAt": datetime,
    },
    total=False,
)

ListJobsResponseTypeDef = TypedDict(
    "ListJobsResponseTypeDef", {"jobs": List[JobSummaryTypeDef], "nextToken": str}, total=False
)

MitigationActionIdentifierTypeDef = TypedDict(
    "MitigationActionIdentifierTypeDef",
    {"actionName": str, "actionArn": str, "creationDate": datetime},
    total=False,
)

ListMitigationActionsResponseTypeDef = TypedDict(
    "ListMitigationActionsResponseTypeDef",
    {"actionIdentifiers": List[MitigationActionIdentifierTypeDef], "nextToken": str},
    total=False,
)

OTAUpdateSummaryTypeDef = TypedDict(
    "OTAUpdateSummaryTypeDef",
    {"otaUpdateId": str, "otaUpdateArn": str, "creationDate": datetime},
    total=False,
)

ListOTAUpdatesResponseTypeDef = TypedDict(
    "ListOTAUpdatesResponseTypeDef",
    {"otaUpdates": List[OTAUpdateSummaryTypeDef], "nextToken": str},
    total=False,
)

OutgoingCertificateTypeDef = TypedDict(
    "OutgoingCertificateTypeDef",
    {
        "certificateArn": str,
        "certificateId": str,
        "transferredTo": str,
        "transferDate": datetime,
        "transferMessage": str,
        "creationDate": datetime,
    },
    total=False,
)

ListOutgoingCertificatesResponseTypeDef = TypedDict(
    "ListOutgoingCertificatesResponseTypeDef",
    {"outgoingCertificates": List[OutgoingCertificateTypeDef], "nextMarker": str},
    total=False,
)

ListPoliciesResponseTypeDef = TypedDict(
    "ListPoliciesResponseTypeDef", {"policies": List[PolicyTypeDef], "nextMarker": str}, total=False
)

ListPolicyPrincipalsResponseTypeDef = TypedDict(
    "ListPolicyPrincipalsResponseTypeDef", {"principals": List[str], "nextMarker": str}, total=False
)

PolicyVersionTypeDef = TypedDict(
    "PolicyVersionTypeDef",
    {"versionId": str, "isDefaultVersion": bool, "createDate": datetime},
    total=False,
)

ListPolicyVersionsResponseTypeDef = TypedDict(
    "ListPolicyVersionsResponseTypeDef", {"policyVersions": List[PolicyVersionTypeDef]}, total=False
)

ListPrincipalPoliciesResponseTypeDef = TypedDict(
    "ListPrincipalPoliciesResponseTypeDef",
    {"policies": List[PolicyTypeDef], "nextMarker": str},
    total=False,
)

ListPrincipalThingsResponseTypeDef = TypedDict(
    "ListPrincipalThingsResponseTypeDef", {"things": List[str], "nextToken": str}, total=False
)

ProvisioningTemplateVersionSummaryTypeDef = TypedDict(
    "ProvisioningTemplateVersionSummaryTypeDef",
    {"versionId": int, "creationDate": datetime, "isDefaultVersion": bool},
    total=False,
)

ListProvisioningTemplateVersionsResponseTypeDef = TypedDict(
    "ListProvisioningTemplateVersionsResponseTypeDef",
    {"versions": List[ProvisioningTemplateVersionSummaryTypeDef], "nextToken": str},
    total=False,
)

ProvisioningTemplateSummaryTypeDef = TypedDict(
    "ProvisioningTemplateSummaryTypeDef",
    {
        "templateArn": str,
        "templateName": str,
        "description": str,
        "creationDate": datetime,
        "lastModifiedDate": datetime,
        "enabled": bool,
    },
    total=False,
)

ListProvisioningTemplatesResponseTypeDef = TypedDict(
    "ListProvisioningTemplatesResponseTypeDef",
    {"templates": List[ProvisioningTemplateSummaryTypeDef], "nextToken": str},
    total=False,
)

ListRoleAliasesResponseTypeDef = TypedDict(
    "ListRoleAliasesResponseTypeDef", {"roleAliases": List[str], "nextMarker": str}, total=False
)

ScheduledAuditMetadataTypeDef = TypedDict(
    "ScheduledAuditMetadataTypeDef",
    {
        "scheduledAuditName": str,
        "scheduledAuditArn": str,
        "frequency": Literal["DAILY", "WEEKLY", "BIWEEKLY", "MONTHLY"],
        "dayOfMonth": str,
        "dayOfWeek": Literal["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"],
    },
    total=False,
)

ListScheduledAuditsResponseTypeDef = TypedDict(
    "ListScheduledAuditsResponseTypeDef",
    {"scheduledAudits": List[ScheduledAuditMetadataTypeDef], "nextToken": str},
    total=False,
)

SecurityProfileIdentifierTypeDef = TypedDict(
    "SecurityProfileIdentifierTypeDef", {"name": str, "arn": str}
)

SecurityProfileTargetTypeDef = TypedDict("SecurityProfileTargetTypeDef", {"arn": str})

SecurityProfileTargetMappingTypeDef = TypedDict(
    "SecurityProfileTargetMappingTypeDef",
    {
        "securityProfileIdentifier": SecurityProfileIdentifierTypeDef,
        "target": SecurityProfileTargetTypeDef,
    },
    total=False,
)

ListSecurityProfilesForTargetResponseTypeDef = TypedDict(
    "ListSecurityProfilesForTargetResponseTypeDef",
    {"securityProfileTargetMappings": List[SecurityProfileTargetMappingTypeDef], "nextToken": str},
    total=False,
)

ListSecurityProfilesResponseTypeDef = TypedDict(
    "ListSecurityProfilesResponseTypeDef",
    {"securityProfileIdentifiers": List[SecurityProfileIdentifierTypeDef], "nextToken": str},
    total=False,
)

StreamSummaryTypeDef = TypedDict(
    "StreamSummaryTypeDef",
    {"streamId": str, "streamArn": str, "streamVersion": int, "description": str},
    total=False,
)

ListStreamsResponseTypeDef = TypedDict(
    "ListStreamsResponseTypeDef",
    {"streams": List[StreamSummaryTypeDef], "nextToken": str},
    total=False,
)

_RequiredTagTypeDef = TypedDict("_RequiredTagTypeDef", {"Key": str})
_OptionalTagTypeDef = TypedDict("_OptionalTagTypeDef", {"Value": str}, total=False)


class TagTypeDef(_RequiredTagTypeDef, _OptionalTagTypeDef):
    pass


ListTagsForResourceResponseTypeDef = TypedDict(
    "ListTagsForResourceResponseTypeDef", {"tags": List[TagTypeDef], "nextToken": str}, total=False
)

ListTargetsForPolicyResponseTypeDef = TypedDict(
    "ListTargetsForPolicyResponseTypeDef", {"targets": List[str], "nextMarker": str}, total=False
)

ListTargetsForSecurityProfileResponseTypeDef = TypedDict(
    "ListTargetsForSecurityProfileResponseTypeDef",
    {"securityProfileTargets": List[SecurityProfileTargetTypeDef], "nextToken": str},
    total=False,
)

ListThingGroupsForThingResponseTypeDef = TypedDict(
    "ListThingGroupsForThingResponseTypeDef",
    {"thingGroups": List[GroupNameAndArnTypeDef], "nextToken": str},
    total=False,
)

ListThingGroupsResponseTypeDef = TypedDict(
    "ListThingGroupsResponseTypeDef",
    {"thingGroups": List[GroupNameAndArnTypeDef], "nextToken": str},
    total=False,
)

ListThingPrincipalsResponseTypeDef = TypedDict(
    "ListThingPrincipalsResponseTypeDef", {"principals": List[str]}, total=False
)

ListThingRegistrationTaskReportsResponseTypeDef = TypedDict(
    "ListThingRegistrationTaskReportsResponseTypeDef",
    {"resourceLinks": List[str], "reportType": Literal["ERRORS", "RESULTS"], "nextToken": str},
    total=False,
)

ListThingRegistrationTasksResponseTypeDef = TypedDict(
    "ListThingRegistrationTasksResponseTypeDef",
    {"taskIds": List[str], "nextToken": str},
    total=False,
)

ThingTypeDefinitionTypeDef = TypedDict(
    "ThingTypeDefinitionTypeDef",
    {
        "thingTypeName": str,
        "thingTypeArn": str,
        "thingTypeProperties": ThingTypePropertiesTypeDef,
        "thingTypeMetadata": ThingTypeMetadataTypeDef,
    },
    total=False,
)

ListThingTypesResponseTypeDef = TypedDict(
    "ListThingTypesResponseTypeDef",
    {"thingTypes": List[ThingTypeDefinitionTypeDef], "nextToken": str},
    total=False,
)

ListThingsInBillingGroupResponseTypeDef = TypedDict(
    "ListThingsInBillingGroupResponseTypeDef", {"things": List[str], "nextToken": str}, total=False
)

ListThingsInThingGroupResponseTypeDef = TypedDict(
    "ListThingsInThingGroupResponseTypeDef", {"things": List[str], "nextToken": str}, total=False
)

ThingAttributeTypeDef = TypedDict(
    "ThingAttributeTypeDef",
    {
        "thingName": str,
        "thingTypeName": str,
        "thingArn": str,
        "attributes": Dict[str, str],
        "version": int,
    },
    total=False,
)

ListThingsResponseTypeDef = TypedDict(
    "ListThingsResponseTypeDef",
    {"things": List[ThingAttributeTypeDef], "nextToken": str},
    total=False,
)

HttpUrlDestinationSummaryTypeDef = TypedDict(
    "HttpUrlDestinationSummaryTypeDef", {"confirmationUrl": str}, total=False
)

TopicRuleDestinationSummaryTypeDef = TypedDict(
    "TopicRuleDestinationSummaryTypeDef",
    {
        "arn": str,
        "status": Literal["ENABLED", "IN_PROGRESS", "DISABLED", "ERROR"],
        "statusReason": str,
        "httpUrlSummary": HttpUrlDestinationSummaryTypeDef,
    },
    total=False,
)

ListTopicRuleDestinationsResponseTypeDef = TypedDict(
    "ListTopicRuleDestinationsResponseTypeDef",
    {"destinationSummaries": List[TopicRuleDestinationSummaryTypeDef], "nextToken": str},
    total=False,
)

TopicRuleListItemTypeDef = TypedDict(
    "TopicRuleListItemTypeDef",
    {
        "ruleArn": str,
        "ruleName": str,
        "topicPattern": str,
        "createdAt": datetime,
        "ruleDisabled": bool,
    },
    total=False,
)

ListTopicRulesResponseTypeDef = TypedDict(
    "ListTopicRulesResponseTypeDef",
    {"rules": List[TopicRuleListItemTypeDef], "nextToken": str},
    total=False,
)

_RequiredLogTargetTypeDef = TypedDict(
    "_RequiredLogTargetTypeDef", {"targetType": Literal["DEFAULT", "THING_GROUP"]}
)
_OptionalLogTargetTypeDef = TypedDict("_OptionalLogTargetTypeDef", {"targetName": str}, total=False)


class LogTargetTypeDef(_RequiredLogTargetTypeDef, _OptionalLogTargetTypeDef):
    pass


LogTargetConfigurationTypeDef = TypedDict(
    "LogTargetConfigurationTypeDef",
    {
        "logTarget": LogTargetTypeDef,
        "logLevel": Literal["DEBUG", "INFO", "ERROR", "WARN", "DISABLED"],
    },
    total=False,
)

ListV2LoggingLevelsResponseTypeDef = TypedDict(
    "ListV2LoggingLevelsResponseTypeDef",
    {"logTargetConfigurations": List[LogTargetConfigurationTypeDef], "nextToken": str},
    total=False,
)

ViolationEventTypeDef = TypedDict(
    "ViolationEventTypeDef",
    {
        "violationId": str,
        "thingName": str,
        "securityProfileName": str,
        "behavior": BehaviorTypeDef,
        "metricValue": MetricValueTypeDef,
        "violationEventType": Literal["in-alarm", "alarm-cleared", "alarm-invalidated"],
        "violationEventTime": datetime,
    },
    total=False,
)

ListViolationEventsResponseTypeDef = TypedDict(
    "ListViolationEventsResponseTypeDef",
    {"violationEvents": List[ViolationEventTypeDef], "nextToken": str},
    total=False,
)

_RequiredLoggingOptionsPayloadTypeDef = TypedDict(
    "_RequiredLoggingOptionsPayloadTypeDef", {"roleArn": str}
)
_OptionalLoggingOptionsPayloadTypeDef = TypedDict(
    "_OptionalLoggingOptionsPayloadTypeDef",
    {"logLevel": Literal["DEBUG", "INFO", "ERROR", "WARN", "DISABLED"]},
    total=False,
)


class LoggingOptionsPayloadTypeDef(
    _RequiredLoggingOptionsPayloadTypeDef, _OptionalLoggingOptionsPayloadTypeDef
):
    pass


MqttContextTypeDef = TypedDict(
    "MqttContextTypeDef",
    {"username": str, "password": Union[bytes, IO], "clientId": str},
    total=False,
)

PaginatorConfigTypeDef = TypedDict(
    "PaginatorConfigTypeDef", {"MaxItems": int, "PageSize": int, "StartingToken": str}, total=False
)

RegisterCACertificateResponseTypeDef = TypedDict(
    "RegisterCACertificateResponseTypeDef",
    {"certificateArn": str, "certificateId": str},
    total=False,
)

RegisterCertificateResponseTypeDef = TypedDict(
    "RegisterCertificateResponseTypeDef", {"certificateArn": str, "certificateId": str}, total=False
)

RegisterCertificateWithoutCAResponseTypeDef = TypedDict(
    "RegisterCertificateWithoutCAResponseTypeDef",
    {"certificateArn": str, "certificateId": str},
    total=False,
)

RegisterThingResponseTypeDef = TypedDict(
    "RegisterThingResponseTypeDef",
    {"certificatePem": str, "resourceArns": Dict[str, str]},
    total=False,
)

ThingConnectivityTypeDef = TypedDict(
    "ThingConnectivityTypeDef", {"connected": bool, "timestamp": int}, total=False
)

ThingDocumentTypeDef = TypedDict(
    "ThingDocumentTypeDef",
    {
        "thingName": str,
        "thingId": str,
        "thingTypeName": str,
        "thingGroupNames": List[str],
        "attributes": Dict[str, str],
        "shadow": str,
        "connectivity": ThingConnectivityTypeDef,
    },
    total=False,
)

ThingGroupDocumentTypeDef = TypedDict(
    "ThingGroupDocumentTypeDef",
    {
        "thingGroupName": str,
        "thingGroupId": str,
        "thingGroupDescription": str,
        "attributes": Dict[str, str],
        "parentGroupNames": List[str],
    },
    total=False,
)

SearchIndexResponseTypeDef = TypedDict(
    "SearchIndexResponseTypeDef",
    {
        "nextToken": str,
        "things": List[ThingDocumentTypeDef],
        "thingGroups": List[ThingGroupDocumentTypeDef],
    },
    total=False,
)

SetDefaultAuthorizerResponseTypeDef = TypedDict(
    "SetDefaultAuthorizerResponseTypeDef",
    {"authorizerName": str, "authorizerArn": str},
    total=False,
)

StartAuditMitigationActionsTaskResponseTypeDef = TypedDict(
    "StartAuditMitigationActionsTaskResponseTypeDef", {"taskId": str}, total=False
)

StartOnDemandAuditTaskResponseTypeDef = TypedDict(
    "StartOnDemandAuditTaskResponseTypeDef", {"taskId": str}, total=False
)

StartThingRegistrationTaskResponseTypeDef = TypedDict(
    "StartThingRegistrationTaskResponseTypeDef", {"taskId": str}, total=False
)

AllowedTypeDef = TypedDict("AllowedTypeDef", {"policies": List[PolicyTypeDef]}, total=False)

ExplicitDenyTypeDef = TypedDict(
    "ExplicitDenyTypeDef", {"policies": List[PolicyTypeDef]}, total=False
)

ImplicitDenyTypeDef = TypedDict(
    "ImplicitDenyTypeDef", {"policies": List[PolicyTypeDef]}, total=False
)

DeniedTypeDef = TypedDict(
    "DeniedTypeDef",
    {"implicitDeny": ImplicitDenyTypeDef, "explicitDeny": ExplicitDenyTypeDef},
    total=False,
)

AuthResultTypeDef = TypedDict(
    "AuthResultTypeDef",
    {
        "authInfo": AuthInfoTypeDef,
        "allowed": AllowedTypeDef,
        "denied": DeniedTypeDef,
        "authDecision": Literal["ALLOWED", "EXPLICIT_DENY", "IMPLICIT_DENY"],
        "missingContextValues": List[str],
    },
    total=False,
)

TestAuthorizationResponseTypeDef = TypedDict(
    "TestAuthorizationResponseTypeDef", {"authResults": List[AuthResultTypeDef]}, total=False
)

TestInvokeAuthorizerResponseTypeDef = TypedDict(
    "TestInvokeAuthorizerResponseTypeDef",
    {
        "isAuthenticated": bool,
        "principalId": str,
        "policyDocuments": List[str],
        "refreshAfterInSeconds": int,
        "disconnectAfterInSeconds": int,
    },
    total=False,
)

TlsContextTypeDef = TypedDict("TlsContextTypeDef", {"serverName": str}, total=False)

HttpUrlDestinationConfigurationTypeDef = TypedDict(
    "HttpUrlDestinationConfigurationTypeDef", {"confirmationUrl": str}
)

TopicRuleDestinationConfigurationTypeDef = TypedDict(
    "TopicRuleDestinationConfigurationTypeDef",
    {"httpUrlConfiguration": HttpUrlDestinationConfigurationTypeDef},
    total=False,
)

_RequiredTopicRulePayloadTypeDef = TypedDict(
    "_RequiredTopicRulePayloadTypeDef", {"sql": str, "actions": List[ActionTypeDef]}
)
_OptionalTopicRulePayloadTypeDef = TypedDict(
    "_OptionalTopicRulePayloadTypeDef",
    {
        "description": str,
        "ruleDisabled": bool,
        "awsIotSqlVersion": str,
        "errorAction": ActionTypeDef,
    },
    total=False,
)


class TopicRulePayloadTypeDef(_RequiredTopicRulePayloadTypeDef, _OptionalTopicRulePayloadTypeDef):
    pass


TransferCertificateResponseTypeDef = TypedDict(
    "TransferCertificateResponseTypeDef", {"transferredCertificateArn": str}, total=False
)

UpdateAuthorizerResponseTypeDef = TypedDict(
    "UpdateAuthorizerResponseTypeDef", {"authorizerName": str, "authorizerArn": str}, total=False
)

UpdateBillingGroupResponseTypeDef = TypedDict(
    "UpdateBillingGroupResponseTypeDef", {"version": int}, total=False
)

UpdateDimensionResponseTypeDef = TypedDict(
    "UpdateDimensionResponseTypeDef",
    {
        "name": str,
        "arn": str,
        "type": Literal["TOPIC_FILTER"],
        "stringValues": List[str],
        "creationDate": datetime,
        "lastModifiedDate": datetime,
    },
    total=False,
)

UpdateDomainConfigurationResponseTypeDef = TypedDict(
    "UpdateDomainConfigurationResponseTypeDef",
    {"domainConfigurationName": str, "domainConfigurationArn": str},
    total=False,
)

UpdateDynamicThingGroupResponseTypeDef = TypedDict(
    "UpdateDynamicThingGroupResponseTypeDef", {"version": int}, total=False
)

UpdateMitigationActionResponseTypeDef = TypedDict(
    "UpdateMitigationActionResponseTypeDef", {"actionArn": str, "actionId": str}, total=False
)

UpdateRoleAliasResponseTypeDef = TypedDict(
    "UpdateRoleAliasResponseTypeDef", {"roleAlias": str, "roleAliasArn": str}, total=False
)

UpdateScheduledAuditResponseTypeDef = TypedDict(
    "UpdateScheduledAuditResponseTypeDef", {"scheduledAuditArn": str}, total=False
)

UpdateSecurityProfileResponseTypeDef = TypedDict(
    "UpdateSecurityProfileResponseTypeDef",
    {
        "securityProfileName": str,
        "securityProfileArn": str,
        "securityProfileDescription": str,
        "behaviors": List[BehaviorTypeDef],
        "alertTargets": Dict[Literal["SNS"], AlertTargetTypeDef],
        "additionalMetricsToRetain": List[str],
        "additionalMetricsToRetainV2": List[MetricToRetainTypeDef],
        "version": int,
        "creationDate": datetime,
        "lastModifiedDate": datetime,
    },
    total=False,
)

UpdateStreamResponseTypeDef = TypedDict(
    "UpdateStreamResponseTypeDef",
    {"streamId": str, "streamArn": str, "description": str, "streamVersion": int},
    total=False,
)

UpdateThingGroupResponseTypeDef = TypedDict(
    "UpdateThingGroupResponseTypeDef", {"version": int}, total=False
)

ValidationErrorTypeDef = TypedDict("ValidationErrorTypeDef", {"errorMessage": str}, total=False)

ValidateSecurityProfileBehaviorsResponseTypeDef = TypedDict(
    "ValidateSecurityProfileBehaviorsResponseTypeDef",
    {"valid": bool, "validationErrors": List[ValidationErrorTypeDef]},
    total=False,
)
