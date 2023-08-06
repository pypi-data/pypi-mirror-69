'''

The MIT License (MIT)

Copyright (c) 2016 WavyCloud

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

'''

def add_tags(ARN=None, TagList=None):
    """
    Attaches tags to an existing Elasticsearch domain. Tags are a set of case-sensitive key value pairs. An Elasticsearch domain may have up to 10 tags. See Tagging Amazon Elasticsearch Service Domains for more information.
    See also: AWS API Documentation
    
    Exceptions
    
    :example: response = client.add_tags(
        ARN='string',
        TagList=[
            {
                'Key': 'string',
                'Value': 'string'
            },
        ]
    )
    
    
    :type ARN: string
    :param ARN: [REQUIRED]\nSpecify the ARN for which you want to add the tags.\n

    :type TagList: list
    :param TagList: [REQUIRED]\nList of Tag that need to be added for the Elasticsearch domain.\n\n(dict) --Specifies a key value pair for a resource tag.\n\nKey (string) -- [REQUIRED]Specifies the TagKey , the name of the tag. Tag keys must be unique for the Elasticsearch domain to which they are attached.\n\nValue (string) -- [REQUIRED]Specifies the TagValue , the value assigned to the corresponding tag key. Tag values can be null and do not have to be unique in a tag set. For example, you can have a key value pair in a tag set of project : Trinity and cost-center : Trinity\n\n\n\n\n

    :returns: 
    ElasticsearchService.Client.exceptions.BaseException
    ElasticsearchService.Client.exceptions.LimitExceededException
    ElasticsearchService.Client.exceptions.ValidationException
    ElasticsearchService.Client.exceptions.InternalException
    
    """
    pass

def associate_package(PackageID=None, DomainName=None):
    """
    Associates a package with an Amazon ES domain.
    See also: AWS API Documentation
    
    Exceptions
    
    :example: response = client.associate_package(
        PackageID='string',
        DomainName='string'
    )
    
    
    :type PackageID: string
    :param PackageID: [REQUIRED]\nInternal ID of the package that you want to associate with a domain. Use DescribePackages to find this value.\n

    :type DomainName: string
    :param DomainName: [REQUIRED]\nName of the domain that you want to associate the package with.\n

    :rtype: dict

ReturnsResponse Syntax
{
    'DomainPackageDetails': {
        'PackageID': 'string',
        'PackageName': 'string',
        'PackageType': 'TXT-DICTIONARY',
        'LastUpdated': datetime(2015, 1, 1),
        'DomainName': 'string',
        'DomainPackageStatus': 'ASSOCIATING'|'ASSOCIATION_FAILED'|'ACTIVE'|'DISSOCIATING'|'DISSOCIATION_FAILED',
        'ReferencePath': 'string',
        'ErrorDetails': {
            'ErrorType': 'string',
            'ErrorMessage': 'string'
        }
    }
}


Response Structure

(dict) --
Container for response returned by ``  AssociatePackage `` operation.

DomainPackageDetails (dict) --
DomainPackageDetails

PackageID (string) --
Internal ID of the package.

PackageName (string) --
User specified name of the package.

PackageType (string) --
Currently supports only TXT-DICTIONARY.

LastUpdated (datetime) --
Timestamp of the most-recent update to the association status.

DomainName (string) --
Name of the domain you\'ve associated a package with.

DomainPackageStatus (string) --
State of the association. Values are ASSOCIATING/ASSOCIATION_FAILED/ACTIVE/DISSOCIATING/DISSOCIATION_FAILED.

ReferencePath (string) --
The relative path on Amazon ES nodes, which can be used as synonym_path when the package is synonym file.

ErrorDetails (dict) --
Additional information if the package is in an error state. Null otherwise.

ErrorType (string) --
ErrorMessage (string) --










Exceptions

ElasticsearchService.Client.exceptions.BaseException
ElasticsearchService.Client.exceptions.InternalException
ElasticsearchService.Client.exceptions.ResourceNotFoundException
ElasticsearchService.Client.exceptions.AccessDeniedException
ElasticsearchService.Client.exceptions.ValidationException
ElasticsearchService.Client.exceptions.ConflictException


    :return: {
        'DomainPackageDetails': {
            'PackageID': 'string',
            'PackageName': 'string',
            'PackageType': 'TXT-DICTIONARY',
            'LastUpdated': datetime(2015, 1, 1),
            'DomainName': 'string',
            'DomainPackageStatus': 'ASSOCIATING'|'ASSOCIATION_FAILED'|'ACTIVE'|'DISSOCIATING'|'DISSOCIATION_FAILED',
            'ReferencePath': 'string',
            'ErrorDetails': {
                'ErrorType': 'string',
                'ErrorMessage': 'string'
            }
        }
    }
    
    
    :returns: 
    ErrorType (string) --
    ErrorMessage (string) --
    
    """
    pass

def can_paginate(operation_name=None):
    """
    Check if an operation can be paginated.
    
    :type operation_name: string
    :param operation_name: The operation name. This is the same name\nas the method name on the client. For example, if the\nmethod name is create_foo, and you\'d normally invoke the\noperation as client.create_foo(**kwargs), if the\ncreate_foo operation can be paginated, you can use the\ncall client.get_paginator('create_foo').

    """
    pass

def cancel_elasticsearch_service_software_update(DomainName=None):
    """
    Cancels a scheduled service software update for an Amazon ES domain. You can only perform this operation before the AutomatedUpdateDate and when the UpdateStatus is in the PENDING_UPDATE state.
    See also: AWS API Documentation
    
    Exceptions
    
    :example: response = client.cancel_elasticsearch_service_software_update(
        DomainName='string'
    )
    
    
    :type DomainName: string
    :param DomainName: [REQUIRED]\nThe name of the domain that you want to stop the latest service software update on.\n

    :rtype: dict
ReturnsResponse Syntax{
    'ServiceSoftwareOptions': {
        'CurrentVersion': 'string',
        'NewVersion': 'string',
        'UpdateAvailable': True|False,
        'Cancellable': True|False,
        'UpdateStatus': 'PENDING_UPDATE'|'IN_PROGRESS'|'COMPLETED'|'NOT_ELIGIBLE'|'ELIGIBLE',
        'Description': 'string',
        'AutomatedUpdateDate': datetime(2015, 1, 1),
        'OptionalDeployment': True|False
    }
}


Response Structure

(dict) --The result of a CancelElasticsearchServiceSoftwareUpdate operation. Contains the status of the update.

ServiceSoftwareOptions (dict) --The current status of the Elasticsearch service software update.

CurrentVersion (string) --The current service software version that is present on the domain.

NewVersion (string) --The new service software version if one is available.

UpdateAvailable (boolean) --True if you are able to update you service software version. False if you are not able to update your service software version.

Cancellable (boolean) --True if you are able to cancel your service software version update. False if you are not able to cancel your service software version.

UpdateStatus (string) --The status of your service software update. This field can take the following values: ELIGIBLE , PENDING_UPDATE , IN_PROGRESS , COMPLETED , and NOT_ELIGIBLE .

Description (string) --The description of the UpdateStatus .

AutomatedUpdateDate (datetime) --Timestamp, in Epoch time, until which you can manually request a service software update. After this date, we automatically update your service software.

OptionalDeployment (boolean) --True if a service software is never automatically updated. False if a service software is automatically updated after AutomatedUpdateDate .








Exceptions

ElasticsearchService.Client.exceptions.BaseException
ElasticsearchService.Client.exceptions.InternalException
ElasticsearchService.Client.exceptions.ResourceNotFoundException
ElasticsearchService.Client.exceptions.ValidationException


    :return: {
        'ServiceSoftwareOptions': {
            'CurrentVersion': 'string',
            'NewVersion': 'string',
            'UpdateAvailable': True|False,
            'Cancellable': True|False,
            'UpdateStatus': 'PENDING_UPDATE'|'IN_PROGRESS'|'COMPLETED'|'NOT_ELIGIBLE'|'ELIGIBLE',
            'Description': 'string',
            'AutomatedUpdateDate': datetime(2015, 1, 1),
            'OptionalDeployment': True|False
        }
    }
    
    
    """
    pass

def create_elasticsearch_domain(DomainName=None, ElasticsearchVersion=None, ElasticsearchClusterConfig=None, EBSOptions=None, AccessPolicies=None, SnapshotOptions=None, VPCOptions=None, CognitoOptions=None, EncryptionAtRestOptions=None, NodeToNodeEncryptionOptions=None, AdvancedOptions=None, LogPublishingOptions=None, DomainEndpointOptions=None, AdvancedSecurityOptions=None):
    """
    Creates a new Elasticsearch domain. For more information, see Creating Elasticsearch Domains in the Amazon Elasticsearch Service Developer Guide .
    See also: AWS API Documentation
    
    Exceptions
    
    :example: response = client.create_elasticsearch_domain(
        DomainName='string',
        ElasticsearchVersion='string',
        ElasticsearchClusterConfig={
            'InstanceType': 'm3.medium.elasticsearch'|'m3.large.elasticsearch'|'m3.xlarge.elasticsearch'|'m3.2xlarge.elasticsearch'|'m4.large.elasticsearch'|'m4.xlarge.elasticsearch'|'m4.2xlarge.elasticsearch'|'m4.4xlarge.elasticsearch'|'m4.10xlarge.elasticsearch'|'m5.large.elasticsearch'|'m5.xlarge.elasticsearch'|'m5.2xlarge.elasticsearch'|'m5.4xlarge.elasticsearch'|'m5.12xlarge.elasticsearch'|'r5.large.elasticsearch'|'r5.xlarge.elasticsearch'|'r5.2xlarge.elasticsearch'|'r5.4xlarge.elasticsearch'|'r5.12xlarge.elasticsearch'|'c5.large.elasticsearch'|'c5.xlarge.elasticsearch'|'c5.2xlarge.elasticsearch'|'c5.4xlarge.elasticsearch'|'c5.9xlarge.elasticsearch'|'c5.18xlarge.elasticsearch'|'ultrawarm1.medium.elasticsearch'|'ultrawarm1.large.elasticsearch'|'t2.micro.elasticsearch'|'t2.small.elasticsearch'|'t2.medium.elasticsearch'|'r3.large.elasticsearch'|'r3.xlarge.elasticsearch'|'r3.2xlarge.elasticsearch'|'r3.4xlarge.elasticsearch'|'r3.8xlarge.elasticsearch'|'i2.xlarge.elasticsearch'|'i2.2xlarge.elasticsearch'|'d2.xlarge.elasticsearch'|'d2.2xlarge.elasticsearch'|'d2.4xlarge.elasticsearch'|'d2.8xlarge.elasticsearch'|'c4.large.elasticsearch'|'c4.xlarge.elasticsearch'|'c4.2xlarge.elasticsearch'|'c4.4xlarge.elasticsearch'|'c4.8xlarge.elasticsearch'|'r4.large.elasticsearch'|'r4.xlarge.elasticsearch'|'r4.2xlarge.elasticsearch'|'r4.4xlarge.elasticsearch'|'r4.8xlarge.elasticsearch'|'r4.16xlarge.elasticsearch'|'i3.large.elasticsearch'|'i3.xlarge.elasticsearch'|'i3.2xlarge.elasticsearch'|'i3.4xlarge.elasticsearch'|'i3.8xlarge.elasticsearch'|'i3.16xlarge.elasticsearch',
            'InstanceCount': 123,
            'DedicatedMasterEnabled': True|False,
            'ZoneAwarenessEnabled': True|False,
            'ZoneAwarenessConfig': {
                'AvailabilityZoneCount': 123
            },
            'DedicatedMasterType': 'm3.medium.elasticsearch'|'m3.large.elasticsearch'|'m3.xlarge.elasticsearch'|'m3.2xlarge.elasticsearch'|'m4.large.elasticsearch'|'m4.xlarge.elasticsearch'|'m4.2xlarge.elasticsearch'|'m4.4xlarge.elasticsearch'|'m4.10xlarge.elasticsearch'|'m5.large.elasticsearch'|'m5.xlarge.elasticsearch'|'m5.2xlarge.elasticsearch'|'m5.4xlarge.elasticsearch'|'m5.12xlarge.elasticsearch'|'r5.large.elasticsearch'|'r5.xlarge.elasticsearch'|'r5.2xlarge.elasticsearch'|'r5.4xlarge.elasticsearch'|'r5.12xlarge.elasticsearch'|'c5.large.elasticsearch'|'c5.xlarge.elasticsearch'|'c5.2xlarge.elasticsearch'|'c5.4xlarge.elasticsearch'|'c5.9xlarge.elasticsearch'|'c5.18xlarge.elasticsearch'|'ultrawarm1.medium.elasticsearch'|'ultrawarm1.large.elasticsearch'|'t2.micro.elasticsearch'|'t2.small.elasticsearch'|'t2.medium.elasticsearch'|'r3.large.elasticsearch'|'r3.xlarge.elasticsearch'|'r3.2xlarge.elasticsearch'|'r3.4xlarge.elasticsearch'|'r3.8xlarge.elasticsearch'|'i2.xlarge.elasticsearch'|'i2.2xlarge.elasticsearch'|'d2.xlarge.elasticsearch'|'d2.2xlarge.elasticsearch'|'d2.4xlarge.elasticsearch'|'d2.8xlarge.elasticsearch'|'c4.large.elasticsearch'|'c4.xlarge.elasticsearch'|'c4.2xlarge.elasticsearch'|'c4.4xlarge.elasticsearch'|'c4.8xlarge.elasticsearch'|'r4.large.elasticsearch'|'r4.xlarge.elasticsearch'|'r4.2xlarge.elasticsearch'|'r4.4xlarge.elasticsearch'|'r4.8xlarge.elasticsearch'|'r4.16xlarge.elasticsearch'|'i3.large.elasticsearch'|'i3.xlarge.elasticsearch'|'i3.2xlarge.elasticsearch'|'i3.4xlarge.elasticsearch'|'i3.8xlarge.elasticsearch'|'i3.16xlarge.elasticsearch',
            'DedicatedMasterCount': 123,
            'WarmEnabled': True|False,
            'WarmType': 'ultrawarm1.medium.elasticsearch'|'ultrawarm1.large.elasticsearch',
            'WarmCount': 123
        },
        EBSOptions={
            'EBSEnabled': True|False,
            'VolumeType': 'standard'|'gp2'|'io1',
            'VolumeSize': 123,
            'Iops': 123
        },
        AccessPolicies='string',
        SnapshotOptions={
            'AutomatedSnapshotStartHour': 123
        },
        VPCOptions={
            'SubnetIds': [
                'string',
            ],
            'SecurityGroupIds': [
                'string',
            ]
        },
        CognitoOptions={
            'Enabled': True|False,
            'UserPoolId': 'string',
            'IdentityPoolId': 'string',
            'RoleArn': 'string'
        },
        EncryptionAtRestOptions={
            'Enabled': True|False,
            'KmsKeyId': 'string'
        },
        NodeToNodeEncryptionOptions={
            'Enabled': True|False
        },
        AdvancedOptions={
            'string': 'string'
        },
        LogPublishingOptions={
            'string': {
                'CloudWatchLogsLogGroupArn': 'string',
                'Enabled': True|False
            }
        },
        DomainEndpointOptions={
            'EnforceHTTPS': True|False,
            'TLSSecurityPolicy': 'Policy-Min-TLS-1-0-2019-07'|'Policy-Min-TLS-1-2-2019-07'
        },
        AdvancedSecurityOptions={
            'Enabled': True|False,
            'InternalUserDatabaseEnabled': True|False,
            'MasterUserOptions': {
                'MasterUserARN': 'string',
                'MasterUserName': 'string',
                'MasterUserPassword': 'string'
            }
        }
    )
    
    
    :type DomainName: string
    :param DomainName: [REQUIRED]\nThe name of the Elasticsearch domain that you are creating. Domain names are unique across the domains owned by an account within an AWS region. Domain names must start with a lowercase letter and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).\n

    :type ElasticsearchVersion: string
    :param ElasticsearchVersion: String of format X.Y to specify version for the Elasticsearch domain eg. '1.5' or '2.3'. For more information, see Creating Elasticsearch Domains in the Amazon Elasticsearch Service Developer Guide .

    :type ElasticsearchClusterConfig: dict
    :param ElasticsearchClusterConfig: Configuration options for an Elasticsearch domain. Specifies the instance type and number of instances in the domain cluster.\n\nInstanceType (string) --The instance type for an Elasticsearch cluster. UltraWarm instance types are not supported for data instances.\n\nInstanceCount (integer) --The number of instances in the specified domain cluster.\n\nDedicatedMasterEnabled (boolean) --A boolean value to indicate whether a dedicated master node is enabled. See About Dedicated Master Nodes for more information.\n\nZoneAwarenessEnabled (boolean) --A boolean value to indicate whether zone awareness is enabled. See About Zone Awareness for more information.\n\nZoneAwarenessConfig (dict) --Specifies the zone awareness configuration for a domain when zone awareness is enabled.\n\nAvailabilityZoneCount (integer) --An integer value to indicate the number of availability zones for a domain when zone awareness is enabled. This should be equal to number of subnets if VPC endpoints is enabled\n\n\n\nDedicatedMasterType (string) --The instance type for a dedicated master node.\n\nDedicatedMasterCount (integer) --Total number of dedicated master nodes, active and on standby, for the cluster.\n\nWarmEnabled (boolean) --True to enable warm storage.\n\nWarmType (string) --The instance type for the Elasticsearch cluster\'s warm nodes.\n\nWarmCount (integer) --The number of warm nodes in the cluster.\n\n\n

    :type EBSOptions: dict
    :param EBSOptions: Options to enable, disable and specify the type and size of EBS storage volumes.\n\nEBSEnabled (boolean) --Specifies whether EBS-based storage is enabled.\n\nVolumeType (string) --Specifies the volume type for EBS-based storage.\n\nVolumeSize (integer) --Integer to specify the size of an EBS volume.\n\nIops (integer) --Specifies the IOPD for a Provisioned IOPS EBS volume (SSD).\n\n\n

    :type AccessPolicies: string
    :param AccessPolicies: IAM access policy as a JSON-formatted string.

    :type SnapshotOptions: dict
    :param SnapshotOptions: Option to set time, in UTC format, of the daily automated snapshot. Default value is 0 hours.\n\nAutomatedSnapshotStartHour (integer) --Specifies the time, in UTC format, when the service takes a daily automated snapshot of the specified Elasticsearch domain. Default value is 0 hours.\n\n\n

    :type VPCOptions: dict
    :param VPCOptions: Options to specify the subnets and security groups for VPC endpoint. For more information, see Creating a VPC in VPC Endpoints for Amazon Elasticsearch Service Domains\n\nSubnetIds (list) --Specifies the subnets for VPC endpoint.\n\n(string) --\n\n\nSecurityGroupIds (list) --Specifies the security groups for VPC endpoint.\n\n(string) --\n\n\n\n

    :type CognitoOptions: dict
    :param CognitoOptions: Options to specify the Cognito user and identity pools for Kibana authentication. For more information, see Amazon Cognito Authentication for Kibana .\n\nEnabled (boolean) --Specifies the option to enable Cognito for Kibana authentication.\n\nUserPoolId (string) --Specifies the Cognito user pool ID for Kibana authentication.\n\nIdentityPoolId (string) --Specifies the Cognito identity pool ID for Kibana authentication.\n\nRoleArn (string) --Specifies the role ARN that provides Elasticsearch permissions for accessing Cognito resources.\n\n\n

    :type EncryptionAtRestOptions: dict
    :param EncryptionAtRestOptions: Specifies the Encryption At Rest Options.\n\nEnabled (boolean) --Specifies the option to enable Encryption At Rest.\n\nKmsKeyId (string) --Specifies the KMS Key ID for Encryption At Rest options.\n\n\n

    :type NodeToNodeEncryptionOptions: dict
    :param NodeToNodeEncryptionOptions: Specifies the NodeToNodeEncryptionOptions.\n\nEnabled (boolean) --Specify true to enable node-to-node encryption.\n\n\n

    :type AdvancedOptions: dict
    :param AdvancedOptions: Option to allow references to indices in an HTTP request body. Must be false when configuring access to individual sub-resources. By default, the value is true . See Configuration Advanced Options for more information.\n\n(string) --\n(string) --\n\n\n\n

    :type LogPublishingOptions: dict
    :param LogPublishingOptions: Map of LogType and LogPublishingOption , each containing options to publish a given type of Elasticsearch log.\n\n(string) --Type of Log File, it can be one of the following:\n\nINDEX_SLOW_LOGS: Index slow logs contain insert requests that took more time than configured index query log threshold to execute.\nSEARCH_SLOW_LOGS: Search slow logs contain search queries that took more time than configured search query log threshold to execute.\nES_APPLICATION_LOGS: Elasticsearch application logs contain information about errors and warnings raised during the operation of the service and can be useful for troubleshooting.\n\n\n(dict) --Log Publishing option that is set for given domain. Attributes and their details:\n\nCloudWatchLogsLogGroupArn: ARN of the Cloudwatch log group to which log needs to be published.\nEnabled: Whether the log publishing for given log type is enabled or not\n\n\nCloudWatchLogsLogGroupArn (string) --ARN of the Cloudwatch log group to which log needs to be published.\n\nEnabled (boolean) --Specifies whether given log publishing option is enabled or not.\n\n\n\n\n\n\n

    :type DomainEndpointOptions: dict
    :param DomainEndpointOptions: Options to specify configuration that will be applied to the domain endpoint.\n\nEnforceHTTPS (boolean) --Specify if only HTTPS endpoint should be enabled for the Elasticsearch domain.\n\nTLSSecurityPolicy (string) --Specify the TLS security policy that needs to be applied to the HTTPS endpoint of Elasticsearch domain. It can be one of the following values:\n\nPolicy-Min-TLS-1-0-2019-07: TLS security policy which supports TLSv1.0 and higher.\nPolicy-Min-TLS-1-2-2019-07: TLS security policy which supports only TLSv1.2\n\n\n\n

    :type AdvancedSecurityOptions: dict
    :param AdvancedSecurityOptions: Specifies advanced security options.\n\nEnabled (boolean) --True if advanced security is enabled.\n\nInternalUserDatabaseEnabled (boolean) --True if the internal user database is enabled.\n\nMasterUserOptions (dict) --Credentials for the master user: username and password, ARN, or both.\n\nMasterUserARN (string) --ARN for the master user (if IAM is enabled).\n\nMasterUserName (string) --The master user\'s username, which is stored in the Amazon Elasticsearch Service domain\'s internal database.\n\nMasterUserPassword (string) --The master user\'s password, which is stored in the Amazon Elasticsearch Service domain\'s internal database.\n\n\n\n\n

    :rtype: dict

ReturnsResponse Syntax
{
    'DomainStatus': {
        'DomainId': 'string',
        'DomainName': 'string',
        'ARN': 'string',
        'Created': True|False,
        'Deleted': True|False,
        'Endpoint': 'string',
        'Endpoints': {
            'string': 'string'
        },
        'Processing': True|False,
        'UpgradeProcessing': True|False,
        'ElasticsearchVersion': 'string',
        'ElasticsearchClusterConfig': {
            'InstanceType': 'm3.medium.elasticsearch'|'m3.large.elasticsearch'|'m3.xlarge.elasticsearch'|'m3.2xlarge.elasticsearch'|'m4.large.elasticsearch'|'m4.xlarge.elasticsearch'|'m4.2xlarge.elasticsearch'|'m4.4xlarge.elasticsearch'|'m4.10xlarge.elasticsearch'|'m5.large.elasticsearch'|'m5.xlarge.elasticsearch'|'m5.2xlarge.elasticsearch'|'m5.4xlarge.elasticsearch'|'m5.12xlarge.elasticsearch'|'r5.large.elasticsearch'|'r5.xlarge.elasticsearch'|'r5.2xlarge.elasticsearch'|'r5.4xlarge.elasticsearch'|'r5.12xlarge.elasticsearch'|'c5.large.elasticsearch'|'c5.xlarge.elasticsearch'|'c5.2xlarge.elasticsearch'|'c5.4xlarge.elasticsearch'|'c5.9xlarge.elasticsearch'|'c5.18xlarge.elasticsearch'|'ultrawarm1.medium.elasticsearch'|'ultrawarm1.large.elasticsearch'|'t2.micro.elasticsearch'|'t2.small.elasticsearch'|'t2.medium.elasticsearch'|'r3.large.elasticsearch'|'r3.xlarge.elasticsearch'|'r3.2xlarge.elasticsearch'|'r3.4xlarge.elasticsearch'|'r3.8xlarge.elasticsearch'|'i2.xlarge.elasticsearch'|'i2.2xlarge.elasticsearch'|'d2.xlarge.elasticsearch'|'d2.2xlarge.elasticsearch'|'d2.4xlarge.elasticsearch'|'d2.8xlarge.elasticsearch'|'c4.large.elasticsearch'|'c4.xlarge.elasticsearch'|'c4.2xlarge.elasticsearch'|'c4.4xlarge.elasticsearch'|'c4.8xlarge.elasticsearch'|'r4.large.elasticsearch'|'r4.xlarge.elasticsearch'|'r4.2xlarge.elasticsearch'|'r4.4xlarge.elasticsearch'|'r4.8xlarge.elasticsearch'|'r4.16xlarge.elasticsearch'|'i3.large.elasticsearch'|'i3.xlarge.elasticsearch'|'i3.2xlarge.elasticsearch'|'i3.4xlarge.elasticsearch'|'i3.8xlarge.elasticsearch'|'i3.16xlarge.elasticsearch',
            'InstanceCount': 123,
            'DedicatedMasterEnabled': True|False,
            'ZoneAwarenessEnabled': True|False,
            'ZoneAwarenessConfig': {
                'AvailabilityZoneCount': 123
            },
            'DedicatedMasterType': 'm3.medium.elasticsearch'|'m3.large.elasticsearch'|'m3.xlarge.elasticsearch'|'m3.2xlarge.elasticsearch'|'m4.large.elasticsearch'|'m4.xlarge.elasticsearch'|'m4.2xlarge.elasticsearch'|'m4.4xlarge.elasticsearch'|'m4.10xlarge.elasticsearch'|'m5.large.elasticsearch'|'m5.xlarge.elasticsearch'|'m5.2xlarge.elasticsearch'|'m5.4xlarge.elasticsearch'|'m5.12xlarge.elasticsearch'|'r5.large.elasticsearch'|'r5.xlarge.elasticsearch'|'r5.2xlarge.elasticsearch'|'r5.4xlarge.elasticsearch'|'r5.12xlarge.elasticsearch'|'c5.large.elasticsearch'|'c5.xlarge.elasticsearch'|'c5.2xlarge.elasticsearch'|'c5.4xlarge.elasticsearch'|'c5.9xlarge.elasticsearch'|'c5.18xlarge.elasticsearch'|'ultrawarm1.medium.elasticsearch'|'ultrawarm1.large.elasticsearch'|'t2.micro.elasticsearch'|'t2.small.elasticsearch'|'t2.medium.elasticsearch'|'r3.large.elasticsearch'|'r3.xlarge.elasticsearch'|'r3.2xlarge.elasticsearch'|'r3.4xlarge.elasticsearch'|'r3.8xlarge.elasticsearch'|'i2.xlarge.elasticsearch'|'i2.2xlarge.elasticsearch'|'d2.xlarge.elasticsearch'|'d2.2xlarge.elasticsearch'|'d2.4xlarge.elasticsearch'|'d2.8xlarge.elasticsearch'|'c4.large.elasticsearch'|'c4.xlarge.elasticsearch'|'c4.2xlarge.elasticsearch'|'c4.4xlarge.elasticsearch'|'c4.8xlarge.elasticsearch'|'r4.large.elasticsearch'|'r4.xlarge.elasticsearch'|'r4.2xlarge.elasticsearch'|'r4.4xlarge.elasticsearch'|'r4.8xlarge.elasticsearch'|'r4.16xlarge.elasticsearch'|'i3.large.elasticsearch'|'i3.xlarge.elasticsearch'|'i3.2xlarge.elasticsearch'|'i3.4xlarge.elasticsearch'|'i3.8xlarge.elasticsearch'|'i3.16xlarge.elasticsearch',
            'DedicatedMasterCount': 123,
            'WarmEnabled': True|False,
            'WarmType': 'ultrawarm1.medium.elasticsearch'|'ultrawarm1.large.elasticsearch',
            'WarmCount': 123
        },
        'EBSOptions': {
            'EBSEnabled': True|False,
            'VolumeType': 'standard'|'gp2'|'io1',
            'VolumeSize': 123,
            'Iops': 123
        },
        'AccessPolicies': 'string',
        'SnapshotOptions': {
            'AutomatedSnapshotStartHour': 123
        },
        'VPCOptions': {
            'VPCId': 'string',
            'SubnetIds': [
                'string',
            ],
            'AvailabilityZones': [
                'string',
            ],
            'SecurityGroupIds': [
                'string',
            ]
        },
        'CognitoOptions': {
            'Enabled': True|False,
            'UserPoolId': 'string',
            'IdentityPoolId': 'string',
            'RoleArn': 'string'
        },
        'EncryptionAtRestOptions': {
            'Enabled': True|False,
            'KmsKeyId': 'string'
        },
        'NodeToNodeEncryptionOptions': {
            'Enabled': True|False
        },
        'AdvancedOptions': {
            'string': 'string'
        },
        'LogPublishingOptions': {
            'string': {
                'CloudWatchLogsLogGroupArn': 'string',
                'Enabled': True|False
            }
        },
        'ServiceSoftwareOptions': {
            'CurrentVersion': 'string',
            'NewVersion': 'string',
            'UpdateAvailable': True|False,
            'Cancellable': True|False,
            'UpdateStatus': 'PENDING_UPDATE'|'IN_PROGRESS'|'COMPLETED'|'NOT_ELIGIBLE'|'ELIGIBLE',
            'Description': 'string',
            'AutomatedUpdateDate': datetime(2015, 1, 1),
            'OptionalDeployment': True|False
        },
        'DomainEndpointOptions': {
            'EnforceHTTPS': True|False,
            'TLSSecurityPolicy': 'Policy-Min-TLS-1-0-2019-07'|'Policy-Min-TLS-1-2-2019-07'
        },
        'AdvancedSecurityOptions': {
            'Enabled': True|False,
            'InternalUserDatabaseEnabled': True|False
        }
    }
}


Response Structure

(dict) --
The result of a CreateElasticsearchDomain operation. Contains the status of the newly created Elasticsearch domain.

DomainStatus (dict) --
The status of the newly created Elasticsearch domain.

DomainId (string) --
The unique identifier for the specified Elasticsearch domain.

DomainName (string) --
The name of an Elasticsearch domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).

ARN (string) --
The Amazon resource name (ARN) of an Elasticsearch domain. See Identifiers for IAM Entities in Using AWS Identity and Access Management for more information.

Created (boolean) --
The domain creation status. True if the creation of an Elasticsearch domain is complete. False if domain creation is still in progress.

Deleted (boolean) --
The domain deletion status. True if a delete request has been received for the domain but resource cleanup is still in progress. False if the domain has not been deleted. Once domain deletion is complete, the status of the domain is no longer returned.

Endpoint (string) --
The Elasticsearch domain endpoint that you use to submit index and search requests.

Endpoints (dict) --
Map containing the Elasticsearch domain endpoints used to submit index and search requests. Example key, value : \'vpc\',\'vpc-endpoint-h2dsd34efgyghrtguk5gt6j2foh4.us-east-1.es.amazonaws.com\' .

(string) --

(string) --
The endpoint to which service requests are submitted. For example, search-imdb-movies-oopcnjfn6ugofer3zx5iadxxca.eu-west-1.es.amazonaws.com or doc-imdb-movies-oopcnjfn6ugofer3zx5iadxxca.eu-west-1.es.amazonaws.com .





Processing (boolean) --
The status of the Elasticsearch domain configuration. True if Amazon Elasticsearch Service is processing configuration changes. False if the configuration is active.

UpgradeProcessing (boolean) --
The status of an Elasticsearch domain version upgrade. True if Amazon Elasticsearch Service is undergoing a version upgrade. False if the configuration is active.

ElasticsearchVersion (string) --

ElasticsearchClusterConfig (dict) --
The type and number of instances in the domain cluster.

InstanceType (string) --
The instance type for an Elasticsearch cluster. UltraWarm instance types are not supported for data instances.

InstanceCount (integer) --
The number of instances in the specified domain cluster.

DedicatedMasterEnabled (boolean) --
A boolean value to indicate whether a dedicated master node is enabled. See About Dedicated Master Nodes for more information.

ZoneAwarenessEnabled (boolean) --
A boolean value to indicate whether zone awareness is enabled. See About Zone Awareness for more information.

ZoneAwarenessConfig (dict) --
Specifies the zone awareness configuration for a domain when zone awareness is enabled.

AvailabilityZoneCount (integer) --
An integer value to indicate the number of availability zones for a domain when zone awareness is enabled. This should be equal to number of subnets if VPC endpoints is enabled



DedicatedMasterType (string) --
The instance type for a dedicated master node.

DedicatedMasterCount (integer) --
Total number of dedicated master nodes, active and on standby, for the cluster.

WarmEnabled (boolean) --
True to enable warm storage.

WarmType (string) --
The instance type for the Elasticsearch cluster\'s warm nodes.

WarmCount (integer) --
The number of warm nodes in the cluster.



EBSOptions (dict) --
The EBSOptions for the specified domain. See Configuring EBS-based Storage for more information.

EBSEnabled (boolean) --
Specifies whether EBS-based storage is enabled.

VolumeType (string) --
Specifies the volume type for EBS-based storage.

VolumeSize (integer) --
Integer to specify the size of an EBS volume.

Iops (integer) --
Specifies the IOPD for a Provisioned IOPS EBS volume (SSD).



AccessPolicies (string) --
IAM access policy as a JSON-formatted string.

SnapshotOptions (dict) --
Specifies the status of the SnapshotOptions

AutomatedSnapshotStartHour (integer) --
Specifies the time, in UTC format, when the service takes a daily automated snapshot of the specified Elasticsearch domain. Default value is 0 hours.



VPCOptions (dict) --
The VPCOptions for the specified domain. For more information, see VPC Endpoints for Amazon Elasticsearch Service Domains .

VPCId (string) --
The VPC Id for the Elasticsearch domain. Exists only if the domain was created with VPCOptions.

SubnetIds (list) --
Specifies the subnets for VPC endpoint.

(string) --


AvailabilityZones (list) --
The availability zones for the Elasticsearch domain. Exists only if the domain was created with VPCOptions.

(string) --


SecurityGroupIds (list) --
Specifies the security groups for VPC endpoint.

(string) --




CognitoOptions (dict) --
The CognitoOptions for the specified domain. For more information, see Amazon Cognito Authentication for Kibana .

Enabled (boolean) --
Specifies the option to enable Cognito for Kibana authentication.

UserPoolId (string) --
Specifies the Cognito user pool ID for Kibana authentication.

IdentityPoolId (string) --
Specifies the Cognito identity pool ID for Kibana authentication.

RoleArn (string) --
Specifies the role ARN that provides Elasticsearch permissions for accessing Cognito resources.



EncryptionAtRestOptions (dict) --
Specifies the status of the EncryptionAtRestOptions .

Enabled (boolean) --
Specifies the option to enable Encryption At Rest.

KmsKeyId (string) --
Specifies the KMS Key ID for Encryption At Rest options.



NodeToNodeEncryptionOptions (dict) --
Specifies the status of the NodeToNodeEncryptionOptions .

Enabled (boolean) --
Specify true to enable node-to-node encryption.



AdvancedOptions (dict) --
Specifies the status of the AdvancedOptions

(string) --
(string) --




LogPublishingOptions (dict) --
Log publishing options for the given domain.

(string) --
Type of Log File, it can be one of the following:

INDEX_SLOW_LOGS: Index slow logs contain insert requests that took more time than configured index query log threshold to execute.
SEARCH_SLOW_LOGS: Search slow logs contain search queries that took more time than configured search query log threshold to execute.
ES_APPLICATION_LOGS: Elasticsearch application logs contain information about errors and warnings raised during the operation of the service and can be useful for troubleshooting.


(dict) --
Log Publishing option that is set for given domain. Attributes and their details:

CloudWatchLogsLogGroupArn: ARN of the Cloudwatch log group to which log needs to be published.
Enabled: Whether the log publishing for given log type is enabled or not


CloudWatchLogsLogGroupArn (string) --
ARN of the Cloudwatch log group to which log needs to be published.

Enabled (boolean) --
Specifies whether given log publishing option is enabled or not.







ServiceSoftwareOptions (dict) --
The current status of the Elasticsearch domain\'s service software.

CurrentVersion (string) --
The current service software version that is present on the domain.

NewVersion (string) --
The new service software version if one is available.

UpdateAvailable (boolean) --
True if you are able to update you service software version. False if you are not able to update your service software version.

Cancellable (boolean) --
True if you are able to cancel your service software version update. False if you are not able to cancel your service software version.

UpdateStatus (string) --
The status of your service software update. This field can take the following values: ELIGIBLE , PENDING_UPDATE , IN_PROGRESS , COMPLETED , and NOT_ELIGIBLE .

Description (string) --
The description of the UpdateStatus .

AutomatedUpdateDate (datetime) --
Timestamp, in Epoch time, until which you can manually request a service software update. After this date, we automatically update your service software.

OptionalDeployment (boolean) --
True if a service software is never automatically updated. False if a service software is automatically updated after AutomatedUpdateDate .



DomainEndpointOptions (dict) --
The current status of the Elasticsearch domain\'s endpoint options.

EnforceHTTPS (boolean) --
Specify if only HTTPS endpoint should be enabled for the Elasticsearch domain.

TLSSecurityPolicy (string) --
Specify the TLS security policy that needs to be applied to the HTTPS endpoint of Elasticsearch domain. It can be one of the following values:

Policy-Min-TLS-1-0-2019-07: TLS security policy which supports TLSv1.0 and higher.
Policy-Min-TLS-1-2-2019-07: TLS security policy which supports only TLSv1.2




AdvancedSecurityOptions (dict) --
The current status of the Elasticsearch domain\'s advanced security options.

Enabled (boolean) --
True if advanced security is enabled.

InternalUserDatabaseEnabled (boolean) --
True if the internal user database is enabled.











Exceptions

ElasticsearchService.Client.exceptions.BaseException
ElasticsearchService.Client.exceptions.DisabledOperationException
ElasticsearchService.Client.exceptions.InternalException
ElasticsearchService.Client.exceptions.InvalidTypeException
ElasticsearchService.Client.exceptions.LimitExceededException
ElasticsearchService.Client.exceptions.ResourceAlreadyExistsException
ElasticsearchService.Client.exceptions.ValidationException


    :return: {
        'DomainStatus': {
            'DomainId': 'string',
            'DomainName': 'string',
            'ARN': 'string',
            'Created': True|False,
            'Deleted': True|False,
            'Endpoint': 'string',
            'Endpoints': {
                'string': 'string'
            },
            'Processing': True|False,
            'UpgradeProcessing': True|False,
            'ElasticsearchVersion': 'string',
            'ElasticsearchClusterConfig': {
                'InstanceType': 'm3.medium.elasticsearch'|'m3.large.elasticsearch'|'m3.xlarge.elasticsearch'|'m3.2xlarge.elasticsearch'|'m4.large.elasticsearch'|'m4.xlarge.elasticsearch'|'m4.2xlarge.elasticsearch'|'m4.4xlarge.elasticsearch'|'m4.10xlarge.elasticsearch'|'m5.large.elasticsearch'|'m5.xlarge.elasticsearch'|'m5.2xlarge.elasticsearch'|'m5.4xlarge.elasticsearch'|'m5.12xlarge.elasticsearch'|'r5.large.elasticsearch'|'r5.xlarge.elasticsearch'|'r5.2xlarge.elasticsearch'|'r5.4xlarge.elasticsearch'|'r5.12xlarge.elasticsearch'|'c5.large.elasticsearch'|'c5.xlarge.elasticsearch'|'c5.2xlarge.elasticsearch'|'c5.4xlarge.elasticsearch'|'c5.9xlarge.elasticsearch'|'c5.18xlarge.elasticsearch'|'ultrawarm1.medium.elasticsearch'|'ultrawarm1.large.elasticsearch'|'t2.micro.elasticsearch'|'t2.small.elasticsearch'|'t2.medium.elasticsearch'|'r3.large.elasticsearch'|'r3.xlarge.elasticsearch'|'r3.2xlarge.elasticsearch'|'r3.4xlarge.elasticsearch'|'r3.8xlarge.elasticsearch'|'i2.xlarge.elasticsearch'|'i2.2xlarge.elasticsearch'|'d2.xlarge.elasticsearch'|'d2.2xlarge.elasticsearch'|'d2.4xlarge.elasticsearch'|'d2.8xlarge.elasticsearch'|'c4.large.elasticsearch'|'c4.xlarge.elasticsearch'|'c4.2xlarge.elasticsearch'|'c4.4xlarge.elasticsearch'|'c4.8xlarge.elasticsearch'|'r4.large.elasticsearch'|'r4.xlarge.elasticsearch'|'r4.2xlarge.elasticsearch'|'r4.4xlarge.elasticsearch'|'r4.8xlarge.elasticsearch'|'r4.16xlarge.elasticsearch'|'i3.large.elasticsearch'|'i3.xlarge.elasticsearch'|'i3.2xlarge.elasticsearch'|'i3.4xlarge.elasticsearch'|'i3.8xlarge.elasticsearch'|'i3.16xlarge.elasticsearch',
                'InstanceCount': 123,
                'DedicatedMasterEnabled': True|False,
                'ZoneAwarenessEnabled': True|False,
                'ZoneAwarenessConfig': {
                    'AvailabilityZoneCount': 123
                },
                'DedicatedMasterType': 'm3.medium.elasticsearch'|'m3.large.elasticsearch'|'m3.xlarge.elasticsearch'|'m3.2xlarge.elasticsearch'|'m4.large.elasticsearch'|'m4.xlarge.elasticsearch'|'m4.2xlarge.elasticsearch'|'m4.4xlarge.elasticsearch'|'m4.10xlarge.elasticsearch'|'m5.large.elasticsearch'|'m5.xlarge.elasticsearch'|'m5.2xlarge.elasticsearch'|'m5.4xlarge.elasticsearch'|'m5.12xlarge.elasticsearch'|'r5.large.elasticsearch'|'r5.xlarge.elasticsearch'|'r5.2xlarge.elasticsearch'|'r5.4xlarge.elasticsearch'|'r5.12xlarge.elasticsearch'|'c5.large.elasticsearch'|'c5.xlarge.elasticsearch'|'c5.2xlarge.elasticsearch'|'c5.4xlarge.elasticsearch'|'c5.9xlarge.elasticsearch'|'c5.18xlarge.elasticsearch'|'ultrawarm1.medium.elasticsearch'|'ultrawarm1.large.elasticsearch'|'t2.micro.elasticsearch'|'t2.small.elasticsearch'|'t2.medium.elasticsearch'|'r3.large.elasticsearch'|'r3.xlarge.elasticsearch'|'r3.2xlarge.elasticsearch'|'r3.4xlarge.elasticsearch'|'r3.8xlarge.elasticsearch'|'i2.xlarge.elasticsearch'|'i2.2xlarge.elasticsearch'|'d2.xlarge.elasticsearch'|'d2.2xlarge.elasticsearch'|'d2.4xlarge.elasticsearch'|'d2.8xlarge.elasticsearch'|'c4.large.elasticsearch'|'c4.xlarge.elasticsearch'|'c4.2xlarge.elasticsearch'|'c4.4xlarge.elasticsearch'|'c4.8xlarge.elasticsearch'|'r4.large.elasticsearch'|'r4.xlarge.elasticsearch'|'r4.2xlarge.elasticsearch'|'r4.4xlarge.elasticsearch'|'r4.8xlarge.elasticsearch'|'r4.16xlarge.elasticsearch'|'i3.large.elasticsearch'|'i3.xlarge.elasticsearch'|'i3.2xlarge.elasticsearch'|'i3.4xlarge.elasticsearch'|'i3.8xlarge.elasticsearch'|'i3.16xlarge.elasticsearch',
                'DedicatedMasterCount': 123,
                'WarmEnabled': True|False,
                'WarmType': 'ultrawarm1.medium.elasticsearch'|'ultrawarm1.large.elasticsearch',
                'WarmCount': 123
            },
            'EBSOptions': {
                'EBSEnabled': True|False,
                'VolumeType': 'standard'|'gp2'|'io1',
                'VolumeSize': 123,
                'Iops': 123
            },
            'AccessPolicies': 'string',
            'SnapshotOptions': {
                'AutomatedSnapshotStartHour': 123
            },
            'VPCOptions': {
                'VPCId': 'string',
                'SubnetIds': [
                    'string',
                ],
                'AvailabilityZones': [
                    'string',
                ],
                'SecurityGroupIds': [
                    'string',
                ]
            },
            'CognitoOptions': {
                'Enabled': True|False,
                'UserPoolId': 'string',
                'IdentityPoolId': 'string',
                'RoleArn': 'string'
            },
            'EncryptionAtRestOptions': {
                'Enabled': True|False,
                'KmsKeyId': 'string'
            },
            'NodeToNodeEncryptionOptions': {
                'Enabled': True|False
            },
            'AdvancedOptions': {
                'string': 'string'
            },
            'LogPublishingOptions': {
                'string': {
                    'CloudWatchLogsLogGroupArn': 'string',
                    'Enabled': True|False
                }
            },
            'ServiceSoftwareOptions': {
                'CurrentVersion': 'string',
                'NewVersion': 'string',
                'UpdateAvailable': True|False,
                'Cancellable': True|False,
                'UpdateStatus': 'PENDING_UPDATE'|'IN_PROGRESS'|'COMPLETED'|'NOT_ELIGIBLE'|'ELIGIBLE',
                'Description': 'string',
                'AutomatedUpdateDate': datetime(2015, 1, 1),
                'OptionalDeployment': True|False
            },
            'DomainEndpointOptions': {
                'EnforceHTTPS': True|False,
                'TLSSecurityPolicy': 'Policy-Min-TLS-1-0-2019-07'|'Policy-Min-TLS-1-2-2019-07'
            },
            'AdvancedSecurityOptions': {
                'Enabled': True|False,
                'InternalUserDatabaseEnabled': True|False
            }
        }
    }
    
    
    :returns: 
    (string) --
    
    """
    pass

def create_package(PackageName=None, PackageType=None, PackageDescription=None, PackageSource=None):
    """
    Create a package for use with Amazon ES domains.
    See also: AWS API Documentation
    
    Exceptions
    
    :example: response = client.create_package(
        PackageName='string',
        PackageType='TXT-DICTIONARY',
        PackageDescription='string',
        PackageSource={
            'S3BucketName': 'string',
            'S3Key': 'string'
        }
    )
    
    
    :type PackageName: string
    :param PackageName: [REQUIRED]\nUnique identifier for the package.\n

    :type PackageType: string
    :param PackageType: [REQUIRED]\nType of package. Currently supports only TXT-DICTIONARY.\n

    :type PackageDescription: string
    :param PackageDescription: Description of the package.

    :type PackageSource: dict
    :param PackageSource: [REQUIRED]\nThe customer S3 location PackageSource for importing the package.\n\nS3BucketName (string) --Name of the bucket containing the package.\n\nS3Key (string) --Key (file name) of the package.\n\n\n

    :rtype: dict

ReturnsResponse Syntax
{
    'PackageDetails': {
        'PackageID': 'string',
        'PackageName': 'string',
        'PackageType': 'TXT-DICTIONARY',
        'PackageDescription': 'string',
        'PackageStatus': 'COPYING'|'COPY_FAILED'|'VALIDATING'|'VALIDATION_FAILED'|'AVAILABLE'|'DELETING'|'DELETED'|'DELETE_FAILED',
        'CreatedAt': datetime(2015, 1, 1),
        'ErrorDetails': {
            'ErrorType': 'string',
            'ErrorMessage': 'string'
        }
    }
}


Response Structure

(dict) --
Container for response returned by ``  CreatePackage `` operation.

PackageDetails (dict) --
Information about the package PackageDetails .

PackageID (string) --
Internal ID of the package.

PackageName (string) --
User specified name of the package.

PackageType (string) --
Currently supports only TXT-DICTIONARY.

PackageDescription (string) --
User-specified description of the package.

PackageStatus (string) --
Current state of the package. Values are COPYING/COPY_FAILED/AVAILABLE/DELETING/DELETE_FAILED

CreatedAt (datetime) --
Timestamp which tells creation date of the package.

ErrorDetails (dict) --
Additional information if the package is in an error state. Null otherwise.

ErrorType (string) --
ErrorMessage (string) --










Exceptions

ElasticsearchService.Client.exceptions.BaseException
ElasticsearchService.Client.exceptions.InternalException
ElasticsearchService.Client.exceptions.LimitExceededException
ElasticsearchService.Client.exceptions.InvalidTypeException
ElasticsearchService.Client.exceptions.ResourceAlreadyExistsException
ElasticsearchService.Client.exceptions.AccessDeniedException
ElasticsearchService.Client.exceptions.ValidationException


    :return: {
        'PackageDetails': {
            'PackageID': 'string',
            'PackageName': 'string',
            'PackageType': 'TXT-DICTIONARY',
            'PackageDescription': 'string',
            'PackageStatus': 'COPYING'|'COPY_FAILED'|'VALIDATING'|'VALIDATION_FAILED'|'AVAILABLE'|'DELETING'|'DELETED'|'DELETE_FAILED',
            'CreatedAt': datetime(2015, 1, 1),
            'ErrorDetails': {
                'ErrorType': 'string',
                'ErrorMessage': 'string'
            }
        }
    }
    
    
    :returns: 
    ErrorType (string) --
    ErrorMessage (string) --
    
    """
    pass

def delete_elasticsearch_domain(DomainName=None):
    """
    Permanently deletes the specified Elasticsearch domain and all of its data. Once a domain is deleted, it cannot be recovered.
    See also: AWS API Documentation
    
    Exceptions
    
    :example: response = client.delete_elasticsearch_domain(
        DomainName='string'
    )
    
    
    :type DomainName: string
    :param DomainName: [REQUIRED]\nThe name of the Elasticsearch domain that you want to permanently delete.\n

    :rtype: dict
ReturnsResponse Syntax{
    'DomainStatus': {
        'DomainId': 'string',
        'DomainName': 'string',
        'ARN': 'string',
        'Created': True|False,
        'Deleted': True|False,
        'Endpoint': 'string',
        'Endpoints': {
            'string': 'string'
        },
        'Processing': True|False,
        'UpgradeProcessing': True|False,
        'ElasticsearchVersion': 'string',
        'ElasticsearchClusterConfig': {
            'InstanceType': 'm3.medium.elasticsearch'|'m3.large.elasticsearch'|'m3.xlarge.elasticsearch'|'m3.2xlarge.elasticsearch'|'m4.large.elasticsearch'|'m4.xlarge.elasticsearch'|'m4.2xlarge.elasticsearch'|'m4.4xlarge.elasticsearch'|'m4.10xlarge.elasticsearch'|'m5.large.elasticsearch'|'m5.xlarge.elasticsearch'|'m5.2xlarge.elasticsearch'|'m5.4xlarge.elasticsearch'|'m5.12xlarge.elasticsearch'|'r5.large.elasticsearch'|'r5.xlarge.elasticsearch'|'r5.2xlarge.elasticsearch'|'r5.4xlarge.elasticsearch'|'r5.12xlarge.elasticsearch'|'c5.large.elasticsearch'|'c5.xlarge.elasticsearch'|'c5.2xlarge.elasticsearch'|'c5.4xlarge.elasticsearch'|'c5.9xlarge.elasticsearch'|'c5.18xlarge.elasticsearch'|'ultrawarm1.medium.elasticsearch'|'ultrawarm1.large.elasticsearch'|'t2.micro.elasticsearch'|'t2.small.elasticsearch'|'t2.medium.elasticsearch'|'r3.large.elasticsearch'|'r3.xlarge.elasticsearch'|'r3.2xlarge.elasticsearch'|'r3.4xlarge.elasticsearch'|'r3.8xlarge.elasticsearch'|'i2.xlarge.elasticsearch'|'i2.2xlarge.elasticsearch'|'d2.xlarge.elasticsearch'|'d2.2xlarge.elasticsearch'|'d2.4xlarge.elasticsearch'|'d2.8xlarge.elasticsearch'|'c4.large.elasticsearch'|'c4.xlarge.elasticsearch'|'c4.2xlarge.elasticsearch'|'c4.4xlarge.elasticsearch'|'c4.8xlarge.elasticsearch'|'r4.large.elasticsearch'|'r4.xlarge.elasticsearch'|'r4.2xlarge.elasticsearch'|'r4.4xlarge.elasticsearch'|'r4.8xlarge.elasticsearch'|'r4.16xlarge.elasticsearch'|'i3.large.elasticsearch'|'i3.xlarge.elasticsearch'|'i3.2xlarge.elasticsearch'|'i3.4xlarge.elasticsearch'|'i3.8xlarge.elasticsearch'|'i3.16xlarge.elasticsearch',
            'InstanceCount': 123,
            'DedicatedMasterEnabled': True|False,
            'ZoneAwarenessEnabled': True|False,
            'ZoneAwarenessConfig': {
                'AvailabilityZoneCount': 123
            },
            'DedicatedMasterType': 'm3.medium.elasticsearch'|'m3.large.elasticsearch'|'m3.xlarge.elasticsearch'|'m3.2xlarge.elasticsearch'|'m4.large.elasticsearch'|'m4.xlarge.elasticsearch'|'m4.2xlarge.elasticsearch'|'m4.4xlarge.elasticsearch'|'m4.10xlarge.elasticsearch'|'m5.large.elasticsearch'|'m5.xlarge.elasticsearch'|'m5.2xlarge.elasticsearch'|'m5.4xlarge.elasticsearch'|'m5.12xlarge.elasticsearch'|'r5.large.elasticsearch'|'r5.xlarge.elasticsearch'|'r5.2xlarge.elasticsearch'|'r5.4xlarge.elasticsearch'|'r5.12xlarge.elasticsearch'|'c5.large.elasticsearch'|'c5.xlarge.elasticsearch'|'c5.2xlarge.elasticsearch'|'c5.4xlarge.elasticsearch'|'c5.9xlarge.elasticsearch'|'c5.18xlarge.elasticsearch'|'ultrawarm1.medium.elasticsearch'|'ultrawarm1.large.elasticsearch'|'t2.micro.elasticsearch'|'t2.small.elasticsearch'|'t2.medium.elasticsearch'|'r3.large.elasticsearch'|'r3.xlarge.elasticsearch'|'r3.2xlarge.elasticsearch'|'r3.4xlarge.elasticsearch'|'r3.8xlarge.elasticsearch'|'i2.xlarge.elasticsearch'|'i2.2xlarge.elasticsearch'|'d2.xlarge.elasticsearch'|'d2.2xlarge.elasticsearch'|'d2.4xlarge.elasticsearch'|'d2.8xlarge.elasticsearch'|'c4.large.elasticsearch'|'c4.xlarge.elasticsearch'|'c4.2xlarge.elasticsearch'|'c4.4xlarge.elasticsearch'|'c4.8xlarge.elasticsearch'|'r4.large.elasticsearch'|'r4.xlarge.elasticsearch'|'r4.2xlarge.elasticsearch'|'r4.4xlarge.elasticsearch'|'r4.8xlarge.elasticsearch'|'r4.16xlarge.elasticsearch'|'i3.large.elasticsearch'|'i3.xlarge.elasticsearch'|'i3.2xlarge.elasticsearch'|'i3.4xlarge.elasticsearch'|'i3.8xlarge.elasticsearch'|'i3.16xlarge.elasticsearch',
            'DedicatedMasterCount': 123,
            'WarmEnabled': True|False,
            'WarmType': 'ultrawarm1.medium.elasticsearch'|'ultrawarm1.large.elasticsearch',
            'WarmCount': 123
        },
        'EBSOptions': {
            'EBSEnabled': True|False,
            'VolumeType': 'standard'|'gp2'|'io1',
            'VolumeSize': 123,
            'Iops': 123
        },
        'AccessPolicies': 'string',
        'SnapshotOptions': {
            'AutomatedSnapshotStartHour': 123
        },
        'VPCOptions': {
            'VPCId': 'string',
            'SubnetIds': [
                'string',
            ],
            'AvailabilityZones': [
                'string',
            ],
            'SecurityGroupIds': [
                'string',
            ]
        },
        'CognitoOptions': {
            'Enabled': True|False,
            'UserPoolId': 'string',
            'IdentityPoolId': 'string',
            'RoleArn': 'string'
        },
        'EncryptionAtRestOptions': {
            'Enabled': True|False,
            'KmsKeyId': 'string'
        },
        'NodeToNodeEncryptionOptions': {
            'Enabled': True|False
        },
        'AdvancedOptions': {
            'string': 'string'
        },
        'LogPublishingOptions': {
            'string': {
                'CloudWatchLogsLogGroupArn': 'string',
                'Enabled': True|False
            }
        },
        'ServiceSoftwareOptions': {
            'CurrentVersion': 'string',
            'NewVersion': 'string',
            'UpdateAvailable': True|False,
            'Cancellable': True|False,
            'UpdateStatus': 'PENDING_UPDATE'|'IN_PROGRESS'|'COMPLETED'|'NOT_ELIGIBLE'|'ELIGIBLE',
            'Description': 'string',
            'AutomatedUpdateDate': datetime(2015, 1, 1),
            'OptionalDeployment': True|False
        },
        'DomainEndpointOptions': {
            'EnforceHTTPS': True|False,
            'TLSSecurityPolicy': 'Policy-Min-TLS-1-0-2019-07'|'Policy-Min-TLS-1-2-2019-07'
        },
        'AdvancedSecurityOptions': {
            'Enabled': True|False,
            'InternalUserDatabaseEnabled': True|False
        }
    }
}


Response Structure

(dict) --The result of a DeleteElasticsearchDomain request. Contains the status of the pending deletion, or no status if the domain and all of its resources have been deleted.

DomainStatus (dict) --The status of the Elasticsearch domain being deleted.

DomainId (string) --The unique identifier for the specified Elasticsearch domain.

DomainName (string) --The name of an Elasticsearch domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).

ARN (string) --The Amazon resource name (ARN) of an Elasticsearch domain. See Identifiers for IAM Entities in Using AWS Identity and Access Management for more information.

Created (boolean) --The domain creation status. True if the creation of an Elasticsearch domain is complete. False if domain creation is still in progress.

Deleted (boolean) --The domain deletion status. True if a delete request has been received for the domain but resource cleanup is still in progress. False if the domain has not been deleted. Once domain deletion is complete, the status of the domain is no longer returned.

Endpoint (string) --The Elasticsearch domain endpoint that you use to submit index and search requests.

Endpoints (dict) --Map containing the Elasticsearch domain endpoints used to submit index and search requests. Example key, value : \'vpc\',\'vpc-endpoint-h2dsd34efgyghrtguk5gt6j2foh4.us-east-1.es.amazonaws.com\' .

(string) --
(string) --The endpoint to which service requests are submitted. For example, search-imdb-movies-oopcnjfn6ugofer3zx5iadxxca.eu-west-1.es.amazonaws.com or doc-imdb-movies-oopcnjfn6ugofer3zx5iadxxca.eu-west-1.es.amazonaws.com .





Processing (boolean) --The status of the Elasticsearch domain configuration. True if Amazon Elasticsearch Service is processing configuration changes. False if the configuration is active.

UpgradeProcessing (boolean) --The status of an Elasticsearch domain version upgrade. True if Amazon Elasticsearch Service is undergoing a version upgrade. False if the configuration is active.

ElasticsearchVersion (string) --
ElasticsearchClusterConfig (dict) --The type and number of instances in the domain cluster.

InstanceType (string) --The instance type for an Elasticsearch cluster. UltraWarm instance types are not supported for data instances.

InstanceCount (integer) --The number of instances in the specified domain cluster.

DedicatedMasterEnabled (boolean) --A boolean value to indicate whether a dedicated master node is enabled. See About Dedicated Master Nodes for more information.

ZoneAwarenessEnabled (boolean) --A boolean value to indicate whether zone awareness is enabled. See About Zone Awareness for more information.

ZoneAwarenessConfig (dict) --Specifies the zone awareness configuration for a domain when zone awareness is enabled.

AvailabilityZoneCount (integer) --An integer value to indicate the number of availability zones for a domain when zone awareness is enabled. This should be equal to number of subnets if VPC endpoints is enabled



DedicatedMasterType (string) --The instance type for a dedicated master node.

DedicatedMasterCount (integer) --Total number of dedicated master nodes, active and on standby, for the cluster.

WarmEnabled (boolean) --True to enable warm storage.

WarmType (string) --The instance type for the Elasticsearch cluster\'s warm nodes.

WarmCount (integer) --The number of warm nodes in the cluster.



EBSOptions (dict) --The EBSOptions for the specified domain. See Configuring EBS-based Storage for more information.

EBSEnabled (boolean) --Specifies whether EBS-based storage is enabled.

VolumeType (string) --Specifies the volume type for EBS-based storage.

VolumeSize (integer) --Integer to specify the size of an EBS volume.

Iops (integer) --Specifies the IOPD for a Provisioned IOPS EBS volume (SSD).



AccessPolicies (string) --IAM access policy as a JSON-formatted string.

SnapshotOptions (dict) --Specifies the status of the SnapshotOptions

AutomatedSnapshotStartHour (integer) --Specifies the time, in UTC format, when the service takes a daily automated snapshot of the specified Elasticsearch domain. Default value is 0 hours.



VPCOptions (dict) --The VPCOptions for the specified domain. For more information, see VPC Endpoints for Amazon Elasticsearch Service Domains .

VPCId (string) --The VPC Id for the Elasticsearch domain. Exists only if the domain was created with VPCOptions.

SubnetIds (list) --Specifies the subnets for VPC endpoint.

(string) --


AvailabilityZones (list) --The availability zones for the Elasticsearch domain. Exists only if the domain was created with VPCOptions.

(string) --


SecurityGroupIds (list) --Specifies the security groups for VPC endpoint.

(string) --




CognitoOptions (dict) --The CognitoOptions for the specified domain. For more information, see Amazon Cognito Authentication for Kibana .

Enabled (boolean) --Specifies the option to enable Cognito for Kibana authentication.

UserPoolId (string) --Specifies the Cognito user pool ID for Kibana authentication.

IdentityPoolId (string) --Specifies the Cognito identity pool ID for Kibana authentication.

RoleArn (string) --Specifies the role ARN that provides Elasticsearch permissions for accessing Cognito resources.



EncryptionAtRestOptions (dict) --Specifies the status of the EncryptionAtRestOptions .

Enabled (boolean) --Specifies the option to enable Encryption At Rest.

KmsKeyId (string) --Specifies the KMS Key ID for Encryption At Rest options.



NodeToNodeEncryptionOptions (dict) --Specifies the status of the NodeToNodeEncryptionOptions .

Enabled (boolean) --Specify true to enable node-to-node encryption.



AdvancedOptions (dict) --Specifies the status of the AdvancedOptions

(string) --
(string) --




LogPublishingOptions (dict) --Log publishing options for the given domain.

(string) --Type of Log File, it can be one of the following:

INDEX_SLOW_LOGS: Index slow logs contain insert requests that took more time than configured index query log threshold to execute.
SEARCH_SLOW_LOGS: Search slow logs contain search queries that took more time than configured search query log threshold to execute.
ES_APPLICATION_LOGS: Elasticsearch application logs contain information about errors and warnings raised during the operation of the service and can be useful for troubleshooting.


(dict) --Log Publishing option that is set for given domain. Attributes and their details:

CloudWatchLogsLogGroupArn: ARN of the Cloudwatch log group to which log needs to be published.
Enabled: Whether the log publishing for given log type is enabled or not


CloudWatchLogsLogGroupArn (string) --ARN of the Cloudwatch log group to which log needs to be published.

Enabled (boolean) --Specifies whether given log publishing option is enabled or not.







ServiceSoftwareOptions (dict) --The current status of the Elasticsearch domain\'s service software.

CurrentVersion (string) --The current service software version that is present on the domain.

NewVersion (string) --The new service software version if one is available.

UpdateAvailable (boolean) --True if you are able to update you service software version. False if you are not able to update your service software version.

Cancellable (boolean) --True if you are able to cancel your service software version update. False if you are not able to cancel your service software version.

UpdateStatus (string) --The status of your service software update. This field can take the following values: ELIGIBLE , PENDING_UPDATE , IN_PROGRESS , COMPLETED , and NOT_ELIGIBLE .

Description (string) --The description of the UpdateStatus .

AutomatedUpdateDate (datetime) --Timestamp, in Epoch time, until which you can manually request a service software update. After this date, we automatically update your service software.

OptionalDeployment (boolean) --True if a service software is never automatically updated. False if a service software is automatically updated after AutomatedUpdateDate .



DomainEndpointOptions (dict) --The current status of the Elasticsearch domain\'s endpoint options.

EnforceHTTPS (boolean) --Specify if only HTTPS endpoint should be enabled for the Elasticsearch domain.

TLSSecurityPolicy (string) --Specify the TLS security policy that needs to be applied to the HTTPS endpoint of Elasticsearch domain. It can be one of the following values:

Policy-Min-TLS-1-0-2019-07: TLS security policy which supports TLSv1.0 and higher.
Policy-Min-TLS-1-2-2019-07: TLS security policy which supports only TLSv1.2




AdvancedSecurityOptions (dict) --The current status of the Elasticsearch domain\'s advanced security options.

Enabled (boolean) --True if advanced security is enabled.

InternalUserDatabaseEnabled (boolean) --True if the internal user database is enabled.










Exceptions

ElasticsearchService.Client.exceptions.BaseException
ElasticsearchService.Client.exceptions.InternalException
ElasticsearchService.Client.exceptions.ResourceNotFoundException
ElasticsearchService.Client.exceptions.ValidationException


    :return: {
        'DomainStatus': {
            'DomainId': 'string',
            'DomainName': 'string',
            'ARN': 'string',
            'Created': True|False,
            'Deleted': True|False,
            'Endpoint': 'string',
            'Endpoints': {
                'string': 'string'
            },
            'Processing': True|False,
            'UpgradeProcessing': True|False,
            'ElasticsearchVersion': 'string',
            'ElasticsearchClusterConfig': {
                'InstanceType': 'm3.medium.elasticsearch'|'m3.large.elasticsearch'|'m3.xlarge.elasticsearch'|'m3.2xlarge.elasticsearch'|'m4.large.elasticsearch'|'m4.xlarge.elasticsearch'|'m4.2xlarge.elasticsearch'|'m4.4xlarge.elasticsearch'|'m4.10xlarge.elasticsearch'|'m5.large.elasticsearch'|'m5.xlarge.elasticsearch'|'m5.2xlarge.elasticsearch'|'m5.4xlarge.elasticsearch'|'m5.12xlarge.elasticsearch'|'r5.large.elasticsearch'|'r5.xlarge.elasticsearch'|'r5.2xlarge.elasticsearch'|'r5.4xlarge.elasticsearch'|'r5.12xlarge.elasticsearch'|'c5.large.elasticsearch'|'c5.xlarge.elasticsearch'|'c5.2xlarge.elasticsearch'|'c5.4xlarge.elasticsearch'|'c5.9xlarge.elasticsearch'|'c5.18xlarge.elasticsearch'|'ultrawarm1.medium.elasticsearch'|'ultrawarm1.large.elasticsearch'|'t2.micro.elasticsearch'|'t2.small.elasticsearch'|'t2.medium.elasticsearch'|'r3.large.elasticsearch'|'r3.xlarge.elasticsearch'|'r3.2xlarge.elasticsearch'|'r3.4xlarge.elasticsearch'|'r3.8xlarge.elasticsearch'|'i2.xlarge.elasticsearch'|'i2.2xlarge.elasticsearch'|'d2.xlarge.elasticsearch'|'d2.2xlarge.elasticsearch'|'d2.4xlarge.elasticsearch'|'d2.8xlarge.elasticsearch'|'c4.large.elasticsearch'|'c4.xlarge.elasticsearch'|'c4.2xlarge.elasticsearch'|'c4.4xlarge.elasticsearch'|'c4.8xlarge.elasticsearch'|'r4.large.elasticsearch'|'r4.xlarge.elasticsearch'|'r4.2xlarge.elasticsearch'|'r4.4xlarge.elasticsearch'|'r4.8xlarge.elasticsearch'|'r4.16xlarge.elasticsearch'|'i3.large.elasticsearch'|'i3.xlarge.elasticsearch'|'i3.2xlarge.elasticsearch'|'i3.4xlarge.elasticsearch'|'i3.8xlarge.elasticsearch'|'i3.16xlarge.elasticsearch',
                'InstanceCount': 123,
                'DedicatedMasterEnabled': True|False,
                'ZoneAwarenessEnabled': True|False,
                'ZoneAwarenessConfig': {
                    'AvailabilityZoneCount': 123
                },
                'DedicatedMasterType': 'm3.medium.elasticsearch'|'m3.large.elasticsearch'|'m3.xlarge.elasticsearch'|'m3.2xlarge.elasticsearch'|'m4.large.elasticsearch'|'m4.xlarge.elasticsearch'|'m4.2xlarge.elasticsearch'|'m4.4xlarge.elasticsearch'|'m4.10xlarge.elasticsearch'|'m5.large.elasticsearch'|'m5.xlarge.elasticsearch'|'m5.2xlarge.elasticsearch'|'m5.4xlarge.elasticsearch'|'m5.12xlarge.elasticsearch'|'r5.large.elasticsearch'|'r5.xlarge.elasticsearch'|'r5.2xlarge.elasticsearch'|'r5.4xlarge.elasticsearch'|'r5.12xlarge.elasticsearch'|'c5.large.elasticsearch'|'c5.xlarge.elasticsearch'|'c5.2xlarge.elasticsearch'|'c5.4xlarge.elasticsearch'|'c5.9xlarge.elasticsearch'|'c5.18xlarge.elasticsearch'|'ultrawarm1.medium.elasticsearch'|'ultrawarm1.large.elasticsearch'|'t2.micro.elasticsearch'|'t2.small.elasticsearch'|'t2.medium.elasticsearch'|'r3.large.elasticsearch'|'r3.xlarge.elasticsearch'|'r3.2xlarge.elasticsearch'|'r3.4xlarge.elasticsearch'|'r3.8xlarge.elasticsearch'|'i2.xlarge.elasticsearch'|'i2.2xlarge.elasticsearch'|'d2.xlarge.elasticsearch'|'d2.2xlarge.elasticsearch'|'d2.4xlarge.elasticsearch'|'d2.8xlarge.elasticsearch'|'c4.large.elasticsearch'|'c4.xlarge.elasticsearch'|'c4.2xlarge.elasticsearch'|'c4.4xlarge.elasticsearch'|'c4.8xlarge.elasticsearch'|'r4.large.elasticsearch'|'r4.xlarge.elasticsearch'|'r4.2xlarge.elasticsearch'|'r4.4xlarge.elasticsearch'|'r4.8xlarge.elasticsearch'|'r4.16xlarge.elasticsearch'|'i3.large.elasticsearch'|'i3.xlarge.elasticsearch'|'i3.2xlarge.elasticsearch'|'i3.4xlarge.elasticsearch'|'i3.8xlarge.elasticsearch'|'i3.16xlarge.elasticsearch',
                'DedicatedMasterCount': 123,
                'WarmEnabled': True|False,
                'WarmType': 'ultrawarm1.medium.elasticsearch'|'ultrawarm1.large.elasticsearch',
                'WarmCount': 123
            },
            'EBSOptions': {
                'EBSEnabled': True|False,
                'VolumeType': 'standard'|'gp2'|'io1',
                'VolumeSize': 123,
                'Iops': 123
            },
            'AccessPolicies': 'string',
            'SnapshotOptions': {
                'AutomatedSnapshotStartHour': 123
            },
            'VPCOptions': {
                'VPCId': 'string',
                'SubnetIds': [
                    'string',
                ],
                'AvailabilityZones': [
                    'string',
                ],
                'SecurityGroupIds': [
                    'string',
                ]
            },
            'CognitoOptions': {
                'Enabled': True|False,
                'UserPoolId': 'string',
                'IdentityPoolId': 'string',
                'RoleArn': 'string'
            },
            'EncryptionAtRestOptions': {
                'Enabled': True|False,
                'KmsKeyId': 'string'
            },
            'NodeToNodeEncryptionOptions': {
                'Enabled': True|False
            },
            'AdvancedOptions': {
                'string': 'string'
            },
            'LogPublishingOptions': {
                'string': {
                    'CloudWatchLogsLogGroupArn': 'string',
                    'Enabled': True|False
                }
            },
            'ServiceSoftwareOptions': {
                'CurrentVersion': 'string',
                'NewVersion': 'string',
                'UpdateAvailable': True|False,
                'Cancellable': True|False,
                'UpdateStatus': 'PENDING_UPDATE'|'IN_PROGRESS'|'COMPLETED'|'NOT_ELIGIBLE'|'ELIGIBLE',
                'Description': 'string',
                'AutomatedUpdateDate': datetime(2015, 1, 1),
                'OptionalDeployment': True|False
            },
            'DomainEndpointOptions': {
                'EnforceHTTPS': True|False,
                'TLSSecurityPolicy': 'Policy-Min-TLS-1-0-2019-07'|'Policy-Min-TLS-1-2-2019-07'
            },
            'AdvancedSecurityOptions': {
                'Enabled': True|False,
                'InternalUserDatabaseEnabled': True|False
            }
        }
    }
    
    
    :returns: 
    (string) --
    
    """
    pass

def delete_elasticsearch_service_role():
    """
    Deletes the service-linked role that Elasticsearch Service uses to manage and maintain VPC domains. Role deletion will fail if any existing VPC domains use the role. You must delete any such Elasticsearch domains before deleting the role. See Deleting Elasticsearch Service Role in VPC Endpoints for Amazon Elasticsearch Service Domains .
    See also: AWS API Documentation
    
    Exceptions
    
    :example: response = client.delete_elasticsearch_service_role()
    
    
    """
    pass

def delete_package(PackageID=None):
    """
    Delete the package.
    See also: AWS API Documentation
    
    Exceptions
    
    :example: response = client.delete_package(
        PackageID='string'
    )
    
    
    :type PackageID: string
    :param PackageID: [REQUIRED]\nInternal ID of the package that you want to delete. Use DescribePackages to find this value.\n

    :rtype: dict
ReturnsResponse Syntax{
    'PackageDetails': {
        'PackageID': 'string',
        'PackageName': 'string',
        'PackageType': 'TXT-DICTIONARY',
        'PackageDescription': 'string',
        'PackageStatus': 'COPYING'|'COPY_FAILED'|'VALIDATING'|'VALIDATION_FAILED'|'AVAILABLE'|'DELETING'|'DELETED'|'DELETE_FAILED',
        'CreatedAt': datetime(2015, 1, 1),
        'ErrorDetails': {
            'ErrorType': 'string',
            'ErrorMessage': 'string'
        }
    }
}


Response Structure

(dict) --Container for response parameters to ``  DeletePackage `` operation.

PackageDetails (dict) --PackageDetails

PackageID (string) --Internal ID of the package.

PackageName (string) --User specified name of the package.

PackageType (string) --Currently supports only TXT-DICTIONARY.

PackageDescription (string) --User-specified description of the package.

PackageStatus (string) --Current state of the package. Values are COPYING/COPY_FAILED/AVAILABLE/DELETING/DELETE_FAILED

CreatedAt (datetime) --Timestamp which tells creation date of the package.

ErrorDetails (dict) --Additional information if the package is in an error state. Null otherwise.

ErrorType (string) --
ErrorMessage (string) --









Exceptions

ElasticsearchService.Client.exceptions.BaseException
ElasticsearchService.Client.exceptions.InternalException
ElasticsearchService.Client.exceptions.ResourceNotFoundException
ElasticsearchService.Client.exceptions.AccessDeniedException
ElasticsearchService.Client.exceptions.ValidationException
ElasticsearchService.Client.exceptions.ConflictException


    :return: {
        'PackageDetails': {
            'PackageID': 'string',
            'PackageName': 'string',
            'PackageType': 'TXT-DICTIONARY',
            'PackageDescription': 'string',
            'PackageStatus': 'COPYING'|'COPY_FAILED'|'VALIDATING'|'VALIDATION_FAILED'|'AVAILABLE'|'DELETING'|'DELETED'|'DELETE_FAILED',
            'CreatedAt': datetime(2015, 1, 1),
            'ErrorDetails': {
                'ErrorType': 'string',
                'ErrorMessage': 'string'
            }
        }
    }
    
    
    :returns: 
    ElasticsearchService.Client.exceptions.BaseException
    ElasticsearchService.Client.exceptions.InternalException
    ElasticsearchService.Client.exceptions.ResourceNotFoundException
    ElasticsearchService.Client.exceptions.AccessDeniedException
    ElasticsearchService.Client.exceptions.ValidationException
    ElasticsearchService.Client.exceptions.ConflictException
    
    """
    pass

def describe_elasticsearch_domain(DomainName=None):
    """
    Returns domain configuration information about the specified Elasticsearch domain, including the domain ID, domain endpoint, and domain ARN.
    See also: AWS API Documentation
    
    Exceptions
    
    :example: response = client.describe_elasticsearch_domain(
        DomainName='string'
    )
    
    
    :type DomainName: string
    :param DomainName: [REQUIRED]\nThe name of the Elasticsearch domain for which you want information.\n

    :rtype: dict
ReturnsResponse Syntax{
    'DomainStatus': {
        'DomainId': 'string',
        'DomainName': 'string',
        'ARN': 'string',
        'Created': True|False,
        'Deleted': True|False,
        'Endpoint': 'string',
        'Endpoints': {
            'string': 'string'
        },
        'Processing': True|False,
        'UpgradeProcessing': True|False,
        'ElasticsearchVersion': 'string',
        'ElasticsearchClusterConfig': {
            'InstanceType': 'm3.medium.elasticsearch'|'m3.large.elasticsearch'|'m3.xlarge.elasticsearch'|'m3.2xlarge.elasticsearch'|'m4.large.elasticsearch'|'m4.xlarge.elasticsearch'|'m4.2xlarge.elasticsearch'|'m4.4xlarge.elasticsearch'|'m4.10xlarge.elasticsearch'|'m5.large.elasticsearch'|'m5.xlarge.elasticsearch'|'m5.2xlarge.elasticsearch'|'m5.4xlarge.elasticsearch'|'m5.12xlarge.elasticsearch'|'r5.large.elasticsearch'|'r5.xlarge.elasticsearch'|'r5.2xlarge.elasticsearch'|'r5.4xlarge.elasticsearch'|'r5.12xlarge.elasticsearch'|'c5.large.elasticsearch'|'c5.xlarge.elasticsearch'|'c5.2xlarge.elasticsearch'|'c5.4xlarge.elasticsearch'|'c5.9xlarge.elasticsearch'|'c5.18xlarge.elasticsearch'|'ultrawarm1.medium.elasticsearch'|'ultrawarm1.large.elasticsearch'|'t2.micro.elasticsearch'|'t2.small.elasticsearch'|'t2.medium.elasticsearch'|'r3.large.elasticsearch'|'r3.xlarge.elasticsearch'|'r3.2xlarge.elasticsearch'|'r3.4xlarge.elasticsearch'|'r3.8xlarge.elasticsearch'|'i2.xlarge.elasticsearch'|'i2.2xlarge.elasticsearch'|'d2.xlarge.elasticsearch'|'d2.2xlarge.elasticsearch'|'d2.4xlarge.elasticsearch'|'d2.8xlarge.elasticsearch'|'c4.large.elasticsearch'|'c4.xlarge.elasticsearch'|'c4.2xlarge.elasticsearch'|'c4.4xlarge.elasticsearch'|'c4.8xlarge.elasticsearch'|'r4.large.elasticsearch'|'r4.xlarge.elasticsearch'|'r4.2xlarge.elasticsearch'|'r4.4xlarge.elasticsearch'|'r4.8xlarge.elasticsearch'|'r4.16xlarge.elasticsearch'|'i3.large.elasticsearch'|'i3.xlarge.elasticsearch'|'i3.2xlarge.elasticsearch'|'i3.4xlarge.elasticsearch'|'i3.8xlarge.elasticsearch'|'i3.16xlarge.elasticsearch',
            'InstanceCount': 123,
            'DedicatedMasterEnabled': True|False,
            'ZoneAwarenessEnabled': True|False,
            'ZoneAwarenessConfig': {
                'AvailabilityZoneCount': 123
            },
            'DedicatedMasterType': 'm3.medium.elasticsearch'|'m3.large.elasticsearch'|'m3.xlarge.elasticsearch'|'m3.2xlarge.elasticsearch'|'m4.large.elasticsearch'|'m4.xlarge.elasticsearch'|'m4.2xlarge.elasticsearch'|'m4.4xlarge.elasticsearch'|'m4.10xlarge.elasticsearch'|'m5.large.elasticsearch'|'m5.xlarge.elasticsearch'|'m5.2xlarge.elasticsearch'|'m5.4xlarge.elasticsearch'|'m5.12xlarge.elasticsearch'|'r5.large.elasticsearch'|'r5.xlarge.elasticsearch'|'r5.2xlarge.elasticsearch'|'r5.4xlarge.elasticsearch'|'r5.12xlarge.elasticsearch'|'c5.large.elasticsearch'|'c5.xlarge.elasticsearch'|'c5.2xlarge.elasticsearch'|'c5.4xlarge.elasticsearch'|'c5.9xlarge.elasticsearch'|'c5.18xlarge.elasticsearch'|'ultrawarm1.medium.elasticsearch'|'ultrawarm1.large.elasticsearch'|'t2.micro.elasticsearch'|'t2.small.elasticsearch'|'t2.medium.elasticsearch'|'r3.large.elasticsearch'|'r3.xlarge.elasticsearch'|'r3.2xlarge.elasticsearch'|'r3.4xlarge.elasticsearch'|'r3.8xlarge.elasticsearch'|'i2.xlarge.elasticsearch'|'i2.2xlarge.elasticsearch'|'d2.xlarge.elasticsearch'|'d2.2xlarge.elasticsearch'|'d2.4xlarge.elasticsearch'|'d2.8xlarge.elasticsearch'|'c4.large.elasticsearch'|'c4.xlarge.elasticsearch'|'c4.2xlarge.elasticsearch'|'c4.4xlarge.elasticsearch'|'c4.8xlarge.elasticsearch'|'r4.large.elasticsearch'|'r4.xlarge.elasticsearch'|'r4.2xlarge.elasticsearch'|'r4.4xlarge.elasticsearch'|'r4.8xlarge.elasticsearch'|'r4.16xlarge.elasticsearch'|'i3.large.elasticsearch'|'i3.xlarge.elasticsearch'|'i3.2xlarge.elasticsearch'|'i3.4xlarge.elasticsearch'|'i3.8xlarge.elasticsearch'|'i3.16xlarge.elasticsearch',
            'DedicatedMasterCount': 123,
            'WarmEnabled': True|False,
            'WarmType': 'ultrawarm1.medium.elasticsearch'|'ultrawarm1.large.elasticsearch',
            'WarmCount': 123
        },
        'EBSOptions': {
            'EBSEnabled': True|False,
            'VolumeType': 'standard'|'gp2'|'io1',
            'VolumeSize': 123,
            'Iops': 123
        },
        'AccessPolicies': 'string',
        'SnapshotOptions': {
            'AutomatedSnapshotStartHour': 123
        },
        'VPCOptions': {
            'VPCId': 'string',
            'SubnetIds': [
                'string',
            ],
            'AvailabilityZones': [
                'string',
            ],
            'SecurityGroupIds': [
                'string',
            ]
        },
        'CognitoOptions': {
            'Enabled': True|False,
            'UserPoolId': 'string',
            'IdentityPoolId': 'string',
            'RoleArn': 'string'
        },
        'EncryptionAtRestOptions': {
            'Enabled': True|False,
            'KmsKeyId': 'string'
        },
        'NodeToNodeEncryptionOptions': {
            'Enabled': True|False
        },
        'AdvancedOptions': {
            'string': 'string'
        },
        'LogPublishingOptions': {
            'string': {
                'CloudWatchLogsLogGroupArn': 'string',
                'Enabled': True|False
            }
        },
        'ServiceSoftwareOptions': {
            'CurrentVersion': 'string',
            'NewVersion': 'string',
            'UpdateAvailable': True|False,
            'Cancellable': True|False,
            'UpdateStatus': 'PENDING_UPDATE'|'IN_PROGRESS'|'COMPLETED'|'NOT_ELIGIBLE'|'ELIGIBLE',
            'Description': 'string',
            'AutomatedUpdateDate': datetime(2015, 1, 1),
            'OptionalDeployment': True|False
        },
        'DomainEndpointOptions': {
            'EnforceHTTPS': True|False,
            'TLSSecurityPolicy': 'Policy-Min-TLS-1-0-2019-07'|'Policy-Min-TLS-1-2-2019-07'
        },
        'AdvancedSecurityOptions': {
            'Enabled': True|False,
            'InternalUserDatabaseEnabled': True|False
        }
    }
}


Response Structure

(dict) --The result of a DescribeElasticsearchDomain request. Contains the status of the domain specified in the request.

DomainStatus (dict) --The current status of the Elasticsearch domain.

DomainId (string) --The unique identifier for the specified Elasticsearch domain.

DomainName (string) --The name of an Elasticsearch domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).

ARN (string) --The Amazon resource name (ARN) of an Elasticsearch domain. See Identifiers for IAM Entities in Using AWS Identity and Access Management for more information.

Created (boolean) --The domain creation status. True if the creation of an Elasticsearch domain is complete. False if domain creation is still in progress.

Deleted (boolean) --The domain deletion status. True if a delete request has been received for the domain but resource cleanup is still in progress. False if the domain has not been deleted. Once domain deletion is complete, the status of the domain is no longer returned.

Endpoint (string) --The Elasticsearch domain endpoint that you use to submit index and search requests.

Endpoints (dict) --Map containing the Elasticsearch domain endpoints used to submit index and search requests. Example key, value : \'vpc\',\'vpc-endpoint-h2dsd34efgyghrtguk5gt6j2foh4.us-east-1.es.amazonaws.com\' .

(string) --
(string) --The endpoint to which service requests are submitted. For example, search-imdb-movies-oopcnjfn6ugofer3zx5iadxxca.eu-west-1.es.amazonaws.com or doc-imdb-movies-oopcnjfn6ugofer3zx5iadxxca.eu-west-1.es.amazonaws.com .





Processing (boolean) --The status of the Elasticsearch domain configuration. True if Amazon Elasticsearch Service is processing configuration changes. False if the configuration is active.

UpgradeProcessing (boolean) --The status of an Elasticsearch domain version upgrade. True if Amazon Elasticsearch Service is undergoing a version upgrade. False if the configuration is active.

ElasticsearchVersion (string) --
ElasticsearchClusterConfig (dict) --The type and number of instances in the domain cluster.

InstanceType (string) --The instance type for an Elasticsearch cluster. UltraWarm instance types are not supported for data instances.

InstanceCount (integer) --The number of instances in the specified domain cluster.

DedicatedMasterEnabled (boolean) --A boolean value to indicate whether a dedicated master node is enabled. See About Dedicated Master Nodes for more information.

ZoneAwarenessEnabled (boolean) --A boolean value to indicate whether zone awareness is enabled. See About Zone Awareness for more information.

ZoneAwarenessConfig (dict) --Specifies the zone awareness configuration for a domain when zone awareness is enabled.

AvailabilityZoneCount (integer) --An integer value to indicate the number of availability zones for a domain when zone awareness is enabled. This should be equal to number of subnets if VPC endpoints is enabled



DedicatedMasterType (string) --The instance type for a dedicated master node.

DedicatedMasterCount (integer) --Total number of dedicated master nodes, active and on standby, for the cluster.

WarmEnabled (boolean) --True to enable warm storage.

WarmType (string) --The instance type for the Elasticsearch cluster\'s warm nodes.

WarmCount (integer) --The number of warm nodes in the cluster.



EBSOptions (dict) --The EBSOptions for the specified domain. See Configuring EBS-based Storage for more information.

EBSEnabled (boolean) --Specifies whether EBS-based storage is enabled.

VolumeType (string) --Specifies the volume type for EBS-based storage.

VolumeSize (integer) --Integer to specify the size of an EBS volume.

Iops (integer) --Specifies the IOPD for a Provisioned IOPS EBS volume (SSD).



AccessPolicies (string) --IAM access policy as a JSON-formatted string.

SnapshotOptions (dict) --Specifies the status of the SnapshotOptions

AutomatedSnapshotStartHour (integer) --Specifies the time, in UTC format, when the service takes a daily automated snapshot of the specified Elasticsearch domain. Default value is 0 hours.



VPCOptions (dict) --The VPCOptions for the specified domain. For more information, see VPC Endpoints for Amazon Elasticsearch Service Domains .

VPCId (string) --The VPC Id for the Elasticsearch domain. Exists only if the domain was created with VPCOptions.

SubnetIds (list) --Specifies the subnets for VPC endpoint.

(string) --


AvailabilityZones (list) --The availability zones for the Elasticsearch domain. Exists only if the domain was created with VPCOptions.

(string) --


SecurityGroupIds (list) --Specifies the security groups for VPC endpoint.

(string) --




CognitoOptions (dict) --The CognitoOptions for the specified domain. For more information, see Amazon Cognito Authentication for Kibana .

Enabled (boolean) --Specifies the option to enable Cognito for Kibana authentication.

UserPoolId (string) --Specifies the Cognito user pool ID for Kibana authentication.

IdentityPoolId (string) --Specifies the Cognito identity pool ID for Kibana authentication.

RoleArn (string) --Specifies the role ARN that provides Elasticsearch permissions for accessing Cognito resources.



EncryptionAtRestOptions (dict) --Specifies the status of the EncryptionAtRestOptions .

Enabled (boolean) --Specifies the option to enable Encryption At Rest.

KmsKeyId (string) --Specifies the KMS Key ID for Encryption At Rest options.



NodeToNodeEncryptionOptions (dict) --Specifies the status of the NodeToNodeEncryptionOptions .

Enabled (boolean) --Specify true to enable node-to-node encryption.



AdvancedOptions (dict) --Specifies the status of the AdvancedOptions

(string) --
(string) --




LogPublishingOptions (dict) --Log publishing options for the given domain.

(string) --Type of Log File, it can be one of the following:

INDEX_SLOW_LOGS: Index slow logs contain insert requests that took more time than configured index query log threshold to execute.
SEARCH_SLOW_LOGS: Search slow logs contain search queries that took more time than configured search query log threshold to execute.
ES_APPLICATION_LOGS: Elasticsearch application logs contain information about errors and warnings raised during the operation of the service and can be useful for troubleshooting.


(dict) --Log Publishing option that is set for given domain. Attributes and their details:

CloudWatchLogsLogGroupArn: ARN of the Cloudwatch log group to which log needs to be published.
Enabled: Whether the log publishing for given log type is enabled or not


CloudWatchLogsLogGroupArn (string) --ARN of the Cloudwatch log group to which log needs to be published.

Enabled (boolean) --Specifies whether given log publishing option is enabled or not.







ServiceSoftwareOptions (dict) --The current status of the Elasticsearch domain\'s service software.

CurrentVersion (string) --The current service software version that is present on the domain.

NewVersion (string) --The new service software version if one is available.

UpdateAvailable (boolean) --True if you are able to update you service software version. False if you are not able to update your service software version.

Cancellable (boolean) --True if you are able to cancel your service software version update. False if you are not able to cancel your service software version.

UpdateStatus (string) --The status of your service software update. This field can take the following values: ELIGIBLE , PENDING_UPDATE , IN_PROGRESS , COMPLETED , and NOT_ELIGIBLE .

Description (string) --The description of the UpdateStatus .

AutomatedUpdateDate (datetime) --Timestamp, in Epoch time, until which you can manually request a service software update. After this date, we automatically update your service software.

OptionalDeployment (boolean) --True if a service software is never automatically updated. False if a service software is automatically updated after AutomatedUpdateDate .



DomainEndpointOptions (dict) --The current status of the Elasticsearch domain\'s endpoint options.

EnforceHTTPS (boolean) --Specify if only HTTPS endpoint should be enabled for the Elasticsearch domain.

TLSSecurityPolicy (string) --Specify the TLS security policy that needs to be applied to the HTTPS endpoint of Elasticsearch domain. It can be one of the following values:

Policy-Min-TLS-1-0-2019-07: TLS security policy which supports TLSv1.0 and higher.
Policy-Min-TLS-1-2-2019-07: TLS security policy which supports only TLSv1.2




AdvancedSecurityOptions (dict) --The current status of the Elasticsearch domain\'s advanced security options.

Enabled (boolean) --True if advanced security is enabled.

InternalUserDatabaseEnabled (boolean) --True if the internal user database is enabled.










Exceptions

ElasticsearchService.Client.exceptions.BaseException
ElasticsearchService.Client.exceptions.InternalException
ElasticsearchService.Client.exceptions.ResourceNotFoundException
ElasticsearchService.Client.exceptions.ValidationException


    :return: {
        'DomainStatus': {
            'DomainId': 'string',
            'DomainName': 'string',
            'ARN': 'string',
            'Created': True|False,
            'Deleted': True|False,
            'Endpoint': 'string',
            'Endpoints': {
                'string': 'string'
            },
            'Processing': True|False,
            'UpgradeProcessing': True|False,
            'ElasticsearchVersion': 'string',
            'ElasticsearchClusterConfig': {
                'InstanceType': 'm3.medium.elasticsearch'|'m3.large.elasticsearch'|'m3.xlarge.elasticsearch'|'m3.2xlarge.elasticsearch'|'m4.large.elasticsearch'|'m4.xlarge.elasticsearch'|'m4.2xlarge.elasticsearch'|'m4.4xlarge.elasticsearch'|'m4.10xlarge.elasticsearch'|'m5.large.elasticsearch'|'m5.xlarge.elasticsearch'|'m5.2xlarge.elasticsearch'|'m5.4xlarge.elasticsearch'|'m5.12xlarge.elasticsearch'|'r5.large.elasticsearch'|'r5.xlarge.elasticsearch'|'r5.2xlarge.elasticsearch'|'r5.4xlarge.elasticsearch'|'r5.12xlarge.elasticsearch'|'c5.large.elasticsearch'|'c5.xlarge.elasticsearch'|'c5.2xlarge.elasticsearch'|'c5.4xlarge.elasticsearch'|'c5.9xlarge.elasticsearch'|'c5.18xlarge.elasticsearch'|'ultrawarm1.medium.elasticsearch'|'ultrawarm1.large.elasticsearch'|'t2.micro.elasticsearch'|'t2.small.elasticsearch'|'t2.medium.elasticsearch'|'r3.large.elasticsearch'|'r3.xlarge.elasticsearch'|'r3.2xlarge.elasticsearch'|'r3.4xlarge.elasticsearch'|'r3.8xlarge.elasticsearch'|'i2.xlarge.elasticsearch'|'i2.2xlarge.elasticsearch'|'d2.xlarge.elasticsearch'|'d2.2xlarge.elasticsearch'|'d2.4xlarge.elasticsearch'|'d2.8xlarge.elasticsearch'|'c4.large.elasticsearch'|'c4.xlarge.elasticsearch'|'c4.2xlarge.elasticsearch'|'c4.4xlarge.elasticsearch'|'c4.8xlarge.elasticsearch'|'r4.large.elasticsearch'|'r4.xlarge.elasticsearch'|'r4.2xlarge.elasticsearch'|'r4.4xlarge.elasticsearch'|'r4.8xlarge.elasticsearch'|'r4.16xlarge.elasticsearch'|'i3.large.elasticsearch'|'i3.xlarge.elasticsearch'|'i3.2xlarge.elasticsearch'|'i3.4xlarge.elasticsearch'|'i3.8xlarge.elasticsearch'|'i3.16xlarge.elasticsearch',
                'InstanceCount': 123,
                'DedicatedMasterEnabled': True|False,
                'ZoneAwarenessEnabled': True|False,
                'ZoneAwarenessConfig': {
                    'AvailabilityZoneCount': 123
                },
                'DedicatedMasterType': 'm3.medium.elasticsearch'|'m3.large.elasticsearch'|'m3.xlarge.elasticsearch'|'m3.2xlarge.elasticsearch'|'m4.large.elasticsearch'|'m4.xlarge.elasticsearch'|'m4.2xlarge.elasticsearch'|'m4.4xlarge.elasticsearch'|'m4.10xlarge.elasticsearch'|'m5.large.elasticsearch'|'m5.xlarge.elasticsearch'|'m5.2xlarge.elasticsearch'|'m5.4xlarge.elasticsearch'|'m5.12xlarge.elasticsearch'|'r5.large.elasticsearch'|'r5.xlarge.elasticsearch'|'r5.2xlarge.elasticsearch'|'r5.4xlarge.elasticsearch'|'r5.12xlarge.elasticsearch'|'c5.large.elasticsearch'|'c5.xlarge.elasticsearch'|'c5.2xlarge.elasticsearch'|'c5.4xlarge.elasticsearch'|'c5.9xlarge.elasticsearch'|'c5.18xlarge.elasticsearch'|'ultrawarm1.medium.elasticsearch'|'ultrawarm1.large.elasticsearch'|'t2.micro.elasticsearch'|'t2.small.elasticsearch'|'t2.medium.elasticsearch'|'r3.large.elasticsearch'|'r3.xlarge.elasticsearch'|'r3.2xlarge.elasticsearch'|'r3.4xlarge.elasticsearch'|'r3.8xlarge.elasticsearch'|'i2.xlarge.elasticsearch'|'i2.2xlarge.elasticsearch'|'d2.xlarge.elasticsearch'|'d2.2xlarge.elasticsearch'|'d2.4xlarge.elasticsearch'|'d2.8xlarge.elasticsearch'|'c4.large.elasticsearch'|'c4.xlarge.elasticsearch'|'c4.2xlarge.elasticsearch'|'c4.4xlarge.elasticsearch'|'c4.8xlarge.elasticsearch'|'r4.large.elasticsearch'|'r4.xlarge.elasticsearch'|'r4.2xlarge.elasticsearch'|'r4.4xlarge.elasticsearch'|'r4.8xlarge.elasticsearch'|'r4.16xlarge.elasticsearch'|'i3.large.elasticsearch'|'i3.xlarge.elasticsearch'|'i3.2xlarge.elasticsearch'|'i3.4xlarge.elasticsearch'|'i3.8xlarge.elasticsearch'|'i3.16xlarge.elasticsearch',
                'DedicatedMasterCount': 123,
                'WarmEnabled': True|False,
                'WarmType': 'ultrawarm1.medium.elasticsearch'|'ultrawarm1.large.elasticsearch',
                'WarmCount': 123
            },
            'EBSOptions': {
                'EBSEnabled': True|False,
                'VolumeType': 'standard'|'gp2'|'io1',
                'VolumeSize': 123,
                'Iops': 123
            },
            'AccessPolicies': 'string',
            'SnapshotOptions': {
                'AutomatedSnapshotStartHour': 123
            },
            'VPCOptions': {
                'VPCId': 'string',
                'SubnetIds': [
                    'string',
                ],
                'AvailabilityZones': [
                    'string',
                ],
                'SecurityGroupIds': [
                    'string',
                ]
            },
            'CognitoOptions': {
                'Enabled': True|False,
                'UserPoolId': 'string',
                'IdentityPoolId': 'string',
                'RoleArn': 'string'
            },
            'EncryptionAtRestOptions': {
                'Enabled': True|False,
                'KmsKeyId': 'string'
            },
            'NodeToNodeEncryptionOptions': {
                'Enabled': True|False
            },
            'AdvancedOptions': {
                'string': 'string'
            },
            'LogPublishingOptions': {
                'string': {
                    'CloudWatchLogsLogGroupArn': 'string',
                    'Enabled': True|False
                }
            },
            'ServiceSoftwareOptions': {
                'CurrentVersion': 'string',
                'NewVersion': 'string',
                'UpdateAvailable': True|False,
                'Cancellable': True|False,
                'UpdateStatus': 'PENDING_UPDATE'|'IN_PROGRESS'|'COMPLETED'|'NOT_ELIGIBLE'|'ELIGIBLE',
                'Description': 'string',
                'AutomatedUpdateDate': datetime(2015, 1, 1),
                'OptionalDeployment': True|False
            },
            'DomainEndpointOptions': {
                'EnforceHTTPS': True|False,
                'TLSSecurityPolicy': 'Policy-Min-TLS-1-0-2019-07'|'Policy-Min-TLS-1-2-2019-07'
            },
            'AdvancedSecurityOptions': {
                'Enabled': True|False,
                'InternalUserDatabaseEnabled': True|False
            }
        }
    }
    
    
    :returns: 
    (string) --
    
    """
    pass

def describe_elasticsearch_domain_config(DomainName=None):
    """
    Provides cluster configuration information about the specified Elasticsearch domain, such as the state, creation date, update version, and update date for cluster options.
    See also: AWS API Documentation
    
    Exceptions
    
    :example: response = client.describe_elasticsearch_domain_config(
        DomainName='string'
    )
    
    
    :type DomainName: string
    :param DomainName: [REQUIRED]\nThe Elasticsearch domain that you want to get information about.\n

    :rtype: dict
ReturnsResponse Syntax{
    'DomainConfig': {
        'ElasticsearchVersion': {
            'Options': 'string',
            'Status': {
                'CreationDate': datetime(2015, 1, 1),
                'UpdateDate': datetime(2015, 1, 1),
                'UpdateVersion': 123,
                'State': 'RequiresIndexDocuments'|'Processing'|'Active',
                'PendingDeletion': True|False
            }
        },
        'ElasticsearchClusterConfig': {
            'Options': {
                'InstanceType': 'm3.medium.elasticsearch'|'m3.large.elasticsearch'|'m3.xlarge.elasticsearch'|'m3.2xlarge.elasticsearch'|'m4.large.elasticsearch'|'m4.xlarge.elasticsearch'|'m4.2xlarge.elasticsearch'|'m4.4xlarge.elasticsearch'|'m4.10xlarge.elasticsearch'|'m5.large.elasticsearch'|'m5.xlarge.elasticsearch'|'m5.2xlarge.elasticsearch'|'m5.4xlarge.elasticsearch'|'m5.12xlarge.elasticsearch'|'r5.large.elasticsearch'|'r5.xlarge.elasticsearch'|'r5.2xlarge.elasticsearch'|'r5.4xlarge.elasticsearch'|'r5.12xlarge.elasticsearch'|'c5.large.elasticsearch'|'c5.xlarge.elasticsearch'|'c5.2xlarge.elasticsearch'|'c5.4xlarge.elasticsearch'|'c5.9xlarge.elasticsearch'|'c5.18xlarge.elasticsearch'|'ultrawarm1.medium.elasticsearch'|'ultrawarm1.large.elasticsearch'|'t2.micro.elasticsearch'|'t2.small.elasticsearch'|'t2.medium.elasticsearch'|'r3.large.elasticsearch'|'r3.xlarge.elasticsearch'|'r3.2xlarge.elasticsearch'|'r3.4xlarge.elasticsearch'|'r3.8xlarge.elasticsearch'|'i2.xlarge.elasticsearch'|'i2.2xlarge.elasticsearch'|'d2.xlarge.elasticsearch'|'d2.2xlarge.elasticsearch'|'d2.4xlarge.elasticsearch'|'d2.8xlarge.elasticsearch'|'c4.large.elasticsearch'|'c4.xlarge.elasticsearch'|'c4.2xlarge.elasticsearch'|'c4.4xlarge.elasticsearch'|'c4.8xlarge.elasticsearch'|'r4.large.elasticsearch'|'r4.xlarge.elasticsearch'|'r4.2xlarge.elasticsearch'|'r4.4xlarge.elasticsearch'|'r4.8xlarge.elasticsearch'|'r4.16xlarge.elasticsearch'|'i3.large.elasticsearch'|'i3.xlarge.elasticsearch'|'i3.2xlarge.elasticsearch'|'i3.4xlarge.elasticsearch'|'i3.8xlarge.elasticsearch'|'i3.16xlarge.elasticsearch',
                'InstanceCount': 123,
                'DedicatedMasterEnabled': True|False,
                'ZoneAwarenessEnabled': True|False,
                'ZoneAwarenessConfig': {
                    'AvailabilityZoneCount': 123
                },
                'DedicatedMasterType': 'm3.medium.elasticsearch'|'m3.large.elasticsearch'|'m3.xlarge.elasticsearch'|'m3.2xlarge.elasticsearch'|'m4.large.elasticsearch'|'m4.xlarge.elasticsearch'|'m4.2xlarge.elasticsearch'|'m4.4xlarge.elasticsearch'|'m4.10xlarge.elasticsearch'|'m5.large.elasticsearch'|'m5.xlarge.elasticsearch'|'m5.2xlarge.elasticsearch'|'m5.4xlarge.elasticsearch'|'m5.12xlarge.elasticsearch'|'r5.large.elasticsearch'|'r5.xlarge.elasticsearch'|'r5.2xlarge.elasticsearch'|'r5.4xlarge.elasticsearch'|'r5.12xlarge.elasticsearch'|'c5.large.elasticsearch'|'c5.xlarge.elasticsearch'|'c5.2xlarge.elasticsearch'|'c5.4xlarge.elasticsearch'|'c5.9xlarge.elasticsearch'|'c5.18xlarge.elasticsearch'|'ultrawarm1.medium.elasticsearch'|'ultrawarm1.large.elasticsearch'|'t2.micro.elasticsearch'|'t2.small.elasticsearch'|'t2.medium.elasticsearch'|'r3.large.elasticsearch'|'r3.xlarge.elasticsearch'|'r3.2xlarge.elasticsearch'|'r3.4xlarge.elasticsearch'|'r3.8xlarge.elasticsearch'|'i2.xlarge.elasticsearch'|'i2.2xlarge.elasticsearch'|'d2.xlarge.elasticsearch'|'d2.2xlarge.elasticsearch'|'d2.4xlarge.elasticsearch'|'d2.8xlarge.elasticsearch'|'c4.large.elasticsearch'|'c4.xlarge.elasticsearch'|'c4.2xlarge.elasticsearch'|'c4.4xlarge.elasticsearch'|'c4.8xlarge.elasticsearch'|'r4.large.elasticsearch'|'r4.xlarge.elasticsearch'|'r4.2xlarge.elasticsearch'|'r4.4xlarge.elasticsearch'|'r4.8xlarge.elasticsearch'|'r4.16xlarge.elasticsearch'|'i3.large.elasticsearch'|'i3.xlarge.elasticsearch'|'i3.2xlarge.elasticsearch'|'i3.4xlarge.elasticsearch'|'i3.8xlarge.elasticsearch'|'i3.16xlarge.elasticsearch',
                'DedicatedMasterCount': 123,
                'WarmEnabled': True|False,
                'WarmType': 'ultrawarm1.medium.elasticsearch'|'ultrawarm1.large.elasticsearch',
                'WarmCount': 123
            },
            'Status': {
                'CreationDate': datetime(2015, 1, 1),
                'UpdateDate': datetime(2015, 1, 1),
                'UpdateVersion': 123,
                'State': 'RequiresIndexDocuments'|'Processing'|'Active',
                'PendingDeletion': True|False
            }
        },
        'EBSOptions': {
            'Options': {
                'EBSEnabled': True|False,
                'VolumeType': 'standard'|'gp2'|'io1',
                'VolumeSize': 123,
                'Iops': 123
            },
            'Status': {
                'CreationDate': datetime(2015, 1, 1),
                'UpdateDate': datetime(2015, 1, 1),
                'UpdateVersion': 123,
                'State': 'RequiresIndexDocuments'|'Processing'|'Active',
                'PendingDeletion': True|False
            }
        },
        'AccessPolicies': {
            'Options': 'string',
            'Status': {
                'CreationDate': datetime(2015, 1, 1),
                'UpdateDate': datetime(2015, 1, 1),
                'UpdateVersion': 123,
                'State': 'RequiresIndexDocuments'|'Processing'|'Active',
                'PendingDeletion': True|False
            }
        },
        'SnapshotOptions': {
            'Options': {
                'AutomatedSnapshotStartHour': 123
            },
            'Status': {
                'CreationDate': datetime(2015, 1, 1),
                'UpdateDate': datetime(2015, 1, 1),
                'UpdateVersion': 123,
                'State': 'RequiresIndexDocuments'|'Processing'|'Active',
                'PendingDeletion': True|False
            }
        },
        'VPCOptions': {
            'Options': {
                'VPCId': 'string',
                'SubnetIds': [
                    'string',
                ],
                'AvailabilityZones': [
                    'string',
                ],
                'SecurityGroupIds': [
                    'string',
                ]
            },
            'Status': {
                'CreationDate': datetime(2015, 1, 1),
                'UpdateDate': datetime(2015, 1, 1),
                'UpdateVersion': 123,
                'State': 'RequiresIndexDocuments'|'Processing'|'Active',
                'PendingDeletion': True|False
            }
        },
        'CognitoOptions': {
            'Options': {
                'Enabled': True|False,
                'UserPoolId': 'string',
                'IdentityPoolId': 'string',
                'RoleArn': 'string'
            },
            'Status': {
                'CreationDate': datetime(2015, 1, 1),
                'UpdateDate': datetime(2015, 1, 1),
                'UpdateVersion': 123,
                'State': 'RequiresIndexDocuments'|'Processing'|'Active',
                'PendingDeletion': True|False
            }
        },
        'EncryptionAtRestOptions': {
            'Options': {
                'Enabled': True|False,
                'KmsKeyId': 'string'
            },
            'Status': {
                'CreationDate': datetime(2015, 1, 1),
                'UpdateDate': datetime(2015, 1, 1),
                'UpdateVersion': 123,
                'State': 'RequiresIndexDocuments'|'Processing'|'Active',
                'PendingDeletion': True|False
            }
        },
        'NodeToNodeEncryptionOptions': {
            'Options': {
                'Enabled': True|False
            },
            'Status': {
                'CreationDate': datetime(2015, 1, 1),
                'UpdateDate': datetime(2015, 1, 1),
                'UpdateVersion': 123,
                'State': 'RequiresIndexDocuments'|'Processing'|'Active',
                'PendingDeletion': True|False
            }
        },
        'AdvancedOptions': {
            'Options': {
                'string': 'string'
            },
            'Status': {
                'CreationDate': datetime(2015, 1, 1),
                'UpdateDate': datetime(2015, 1, 1),
                'UpdateVersion': 123,
                'State': 'RequiresIndexDocuments'|'Processing'|'Active',
                'PendingDeletion': True|False
            }
        },
        'LogPublishingOptions': {
            'Options': {
                'string': {
                    'CloudWatchLogsLogGroupArn': 'string',
                    'Enabled': True|False
                }
            },
            'Status': {
                'CreationDate': datetime(2015, 1, 1),
                'UpdateDate': datetime(2015, 1, 1),
                'UpdateVersion': 123,
                'State': 'RequiresIndexDocuments'|'Processing'|'Active',
                'PendingDeletion': True|False
            }
        },
        'DomainEndpointOptions': {
            'Options': {
                'EnforceHTTPS': True|False,
                'TLSSecurityPolicy': 'Policy-Min-TLS-1-0-2019-07'|'Policy-Min-TLS-1-2-2019-07'
            },
            'Status': {
                'CreationDate': datetime(2015, 1, 1),
                'UpdateDate': datetime(2015, 1, 1),
                'UpdateVersion': 123,
                'State': 'RequiresIndexDocuments'|'Processing'|'Active',
                'PendingDeletion': True|False
            }
        },
        'AdvancedSecurityOptions': {
            'Options': {
                'Enabled': True|False,
                'InternalUserDatabaseEnabled': True|False
            },
            'Status': {
                'CreationDate': datetime(2015, 1, 1),
                'UpdateDate': datetime(2015, 1, 1),
                'UpdateVersion': 123,
                'State': 'RequiresIndexDocuments'|'Processing'|'Active',
                'PendingDeletion': True|False
            }
        }
    }
}


Response Structure

(dict) --The result of a DescribeElasticsearchDomainConfig request. Contains the configuration information of the requested domain.

DomainConfig (dict) --The configuration information of the domain requested in the DescribeElasticsearchDomainConfig request.

ElasticsearchVersion (dict) --String of format X.Y to specify version for the Elasticsearch domain.

Options (string) --Specifies the Elasticsearch version for the specified Elasticsearch domain.

Status (dict) --Specifies the status of the Elasticsearch version options for the specified Elasticsearch domain.

CreationDate (datetime) --Timestamp which tells the creation date for the entity.

UpdateDate (datetime) --Timestamp which tells the last updated time for the entity.

UpdateVersion (integer) --Specifies the latest version for the entity.

State (string) --Provides the OptionState for the Elasticsearch domain.

PendingDeletion (boolean) --Indicates whether the Elasticsearch domain is being deleted.





ElasticsearchClusterConfig (dict) --Specifies the ElasticsearchClusterConfig for the Elasticsearch domain.

Options (dict) --Specifies the cluster configuration for the specified Elasticsearch domain.

InstanceType (string) --The instance type for an Elasticsearch cluster. UltraWarm instance types are not supported for data instances.

InstanceCount (integer) --The number of instances in the specified domain cluster.

DedicatedMasterEnabled (boolean) --A boolean value to indicate whether a dedicated master node is enabled. See About Dedicated Master Nodes for more information.

ZoneAwarenessEnabled (boolean) --A boolean value to indicate whether zone awareness is enabled. See About Zone Awareness for more information.

ZoneAwarenessConfig (dict) --Specifies the zone awareness configuration for a domain when zone awareness is enabled.

AvailabilityZoneCount (integer) --An integer value to indicate the number of availability zones for a domain when zone awareness is enabled. This should be equal to number of subnets if VPC endpoints is enabled



DedicatedMasterType (string) --The instance type for a dedicated master node.

DedicatedMasterCount (integer) --Total number of dedicated master nodes, active and on standby, for the cluster.

WarmEnabled (boolean) --True to enable warm storage.

WarmType (string) --The instance type for the Elasticsearch cluster\'s warm nodes.

WarmCount (integer) --The number of warm nodes in the cluster.



Status (dict) --Specifies the status of the configuration for the specified Elasticsearch domain.

CreationDate (datetime) --Timestamp which tells the creation date for the entity.

UpdateDate (datetime) --Timestamp which tells the last updated time for the entity.

UpdateVersion (integer) --Specifies the latest version for the entity.

State (string) --Provides the OptionState for the Elasticsearch domain.

PendingDeletion (boolean) --Indicates whether the Elasticsearch domain is being deleted.





EBSOptions (dict) --Specifies the EBSOptions for the Elasticsearch domain.

Options (dict) --Specifies the EBS options for the specified Elasticsearch domain.

EBSEnabled (boolean) --Specifies whether EBS-based storage is enabled.

VolumeType (string) --Specifies the volume type for EBS-based storage.

VolumeSize (integer) --Integer to specify the size of an EBS volume.

Iops (integer) --Specifies the IOPD for a Provisioned IOPS EBS volume (SSD).



Status (dict) --Specifies the status of the EBS options for the specified Elasticsearch domain.

CreationDate (datetime) --Timestamp which tells the creation date for the entity.

UpdateDate (datetime) --Timestamp which tells the last updated time for the entity.

UpdateVersion (integer) --Specifies the latest version for the entity.

State (string) --Provides the OptionState for the Elasticsearch domain.

PendingDeletion (boolean) --Indicates whether the Elasticsearch domain is being deleted.





AccessPolicies (dict) --IAM access policy as a JSON-formatted string.

Options (string) --The access policy configured for the Elasticsearch domain. Access policies may be resource-based, IP-based, or IAM-based. See Configuring Access Policies for more information.

Status (dict) --The status of the access policy for the Elasticsearch domain. See OptionStatus for the status information that\'s included.

CreationDate (datetime) --Timestamp which tells the creation date for the entity.

UpdateDate (datetime) --Timestamp which tells the last updated time for the entity.

UpdateVersion (integer) --Specifies the latest version for the entity.

State (string) --Provides the OptionState for the Elasticsearch domain.

PendingDeletion (boolean) --Indicates whether the Elasticsearch domain is being deleted.





SnapshotOptions (dict) --Specifies the SnapshotOptions for the Elasticsearch domain.

Options (dict) --Specifies the daily snapshot options specified for the Elasticsearch domain.

AutomatedSnapshotStartHour (integer) --Specifies the time, in UTC format, when the service takes a daily automated snapshot of the specified Elasticsearch domain. Default value is 0 hours.



Status (dict) --Specifies the status of a daily automated snapshot.

CreationDate (datetime) --Timestamp which tells the creation date for the entity.

UpdateDate (datetime) --Timestamp which tells the last updated time for the entity.

UpdateVersion (integer) --Specifies the latest version for the entity.

State (string) --Provides the OptionState for the Elasticsearch domain.

PendingDeletion (boolean) --Indicates whether the Elasticsearch domain is being deleted.





VPCOptions (dict) --The VPCOptions for the specified domain. For more information, see VPC Endpoints for Amazon Elasticsearch Service Domains .

Options (dict) --Specifies the VPC options for the specified Elasticsearch domain.

VPCId (string) --The VPC Id for the Elasticsearch domain. Exists only if the domain was created with VPCOptions.

SubnetIds (list) --Specifies the subnets for VPC endpoint.

(string) --


AvailabilityZones (list) --The availability zones for the Elasticsearch domain. Exists only if the domain was created with VPCOptions.

(string) --


SecurityGroupIds (list) --Specifies the security groups for VPC endpoint.

(string) --




Status (dict) --Specifies the status of the VPC options for the specified Elasticsearch domain.

CreationDate (datetime) --Timestamp which tells the creation date for the entity.

UpdateDate (datetime) --Timestamp which tells the last updated time for the entity.

UpdateVersion (integer) --Specifies the latest version for the entity.

State (string) --Provides the OptionState for the Elasticsearch domain.

PendingDeletion (boolean) --Indicates whether the Elasticsearch domain is being deleted.





CognitoOptions (dict) --The CognitoOptions for the specified domain. For more information, see Amazon Cognito Authentication for Kibana .

Options (dict) --Specifies the Cognito options for the specified Elasticsearch domain.

Enabled (boolean) --Specifies the option to enable Cognito for Kibana authentication.

UserPoolId (string) --Specifies the Cognito user pool ID for Kibana authentication.

IdentityPoolId (string) --Specifies the Cognito identity pool ID for Kibana authentication.

RoleArn (string) --Specifies the role ARN that provides Elasticsearch permissions for accessing Cognito resources.



Status (dict) --Specifies the status of the Cognito options for the specified Elasticsearch domain.

CreationDate (datetime) --Timestamp which tells the creation date for the entity.

UpdateDate (datetime) --Timestamp which tells the last updated time for the entity.

UpdateVersion (integer) --Specifies the latest version for the entity.

State (string) --Provides the OptionState for the Elasticsearch domain.

PendingDeletion (boolean) --Indicates whether the Elasticsearch domain is being deleted.





EncryptionAtRestOptions (dict) --Specifies the EncryptionAtRestOptions for the Elasticsearch domain.

Options (dict) --Specifies the Encryption At Rest options for the specified Elasticsearch domain.

Enabled (boolean) --Specifies the option to enable Encryption At Rest.

KmsKeyId (string) --Specifies the KMS Key ID for Encryption At Rest options.



Status (dict) --Specifies the status of the Encryption At Rest options for the specified Elasticsearch domain.

CreationDate (datetime) --Timestamp which tells the creation date for the entity.

UpdateDate (datetime) --Timestamp which tells the last updated time for the entity.

UpdateVersion (integer) --Specifies the latest version for the entity.

State (string) --Provides the OptionState for the Elasticsearch domain.

PendingDeletion (boolean) --Indicates whether the Elasticsearch domain is being deleted.





NodeToNodeEncryptionOptions (dict) --Specifies the NodeToNodeEncryptionOptions for the Elasticsearch domain.

Options (dict) --Specifies the node-to-node encryption options for the specified Elasticsearch domain.

Enabled (boolean) --Specify true to enable node-to-node encryption.



Status (dict) --Specifies the status of the node-to-node encryption options for the specified Elasticsearch domain.

CreationDate (datetime) --Timestamp which tells the creation date for the entity.

UpdateDate (datetime) --Timestamp which tells the last updated time for the entity.

UpdateVersion (integer) --Specifies the latest version for the entity.

State (string) --Provides the OptionState for the Elasticsearch domain.

PendingDeletion (boolean) --Indicates whether the Elasticsearch domain is being deleted.





AdvancedOptions (dict) --Specifies the AdvancedOptions for the domain. See Configuring Advanced Options for more information.

Options (dict) --Specifies the status of advanced options for the specified Elasticsearch domain.

(string) --
(string) --




Status (dict) --Specifies the status of OptionStatus for advanced options for the specified Elasticsearch domain.

CreationDate (datetime) --Timestamp which tells the creation date for the entity.

UpdateDate (datetime) --Timestamp which tells the last updated time for the entity.

UpdateVersion (integer) --Specifies the latest version for the entity.

State (string) --Provides the OptionState for the Elasticsearch domain.

PendingDeletion (boolean) --Indicates whether the Elasticsearch domain is being deleted.





LogPublishingOptions (dict) --Log publishing options for the given domain.

Options (dict) --The log publishing options configured for the Elasticsearch domain.

(string) --Type of Log File, it can be one of the following:

INDEX_SLOW_LOGS: Index slow logs contain insert requests that took more time than configured index query log threshold to execute.
SEARCH_SLOW_LOGS: Search slow logs contain search queries that took more time than configured search query log threshold to execute.
ES_APPLICATION_LOGS: Elasticsearch application logs contain information about errors and warnings raised during the operation of the service and can be useful for troubleshooting.


(dict) --Log Publishing option that is set for given domain. Attributes and their details:

CloudWatchLogsLogGroupArn: ARN of the Cloudwatch log group to which log needs to be published.
Enabled: Whether the log publishing for given log type is enabled or not


CloudWatchLogsLogGroupArn (string) --ARN of the Cloudwatch log group to which log needs to be published.

Enabled (boolean) --Specifies whether given log publishing option is enabled or not.







Status (dict) --The status of the log publishing options for the Elasticsearch domain. See OptionStatus for the status information that\'s included.

CreationDate (datetime) --Timestamp which tells the creation date for the entity.

UpdateDate (datetime) --Timestamp which tells the last updated time for the entity.

UpdateVersion (integer) --Specifies the latest version for the entity.

State (string) --Provides the OptionState for the Elasticsearch domain.

PendingDeletion (boolean) --Indicates whether the Elasticsearch domain is being deleted.





DomainEndpointOptions (dict) --Specifies the DomainEndpointOptions for the Elasticsearch domain.

Options (dict) --Options to configure endpoint for the Elasticsearch domain.

EnforceHTTPS (boolean) --Specify if only HTTPS endpoint should be enabled for the Elasticsearch domain.

TLSSecurityPolicy (string) --Specify the TLS security policy that needs to be applied to the HTTPS endpoint of Elasticsearch domain. It can be one of the following values:

Policy-Min-TLS-1-0-2019-07: TLS security policy which supports TLSv1.0 and higher.
Policy-Min-TLS-1-2-2019-07: TLS security policy which supports only TLSv1.2




Status (dict) --The status of the endpoint options for the Elasticsearch domain. See OptionStatus for the status information that\'s included.

CreationDate (datetime) --Timestamp which tells the creation date for the entity.

UpdateDate (datetime) --Timestamp which tells the last updated time for the entity.

UpdateVersion (integer) --Specifies the latest version for the entity.

State (string) --Provides the OptionState for the Elasticsearch domain.

PendingDeletion (boolean) --Indicates whether the Elasticsearch domain is being deleted.





AdvancedSecurityOptions (dict) --Specifies AdvancedSecurityOptions for the domain.

Options (dict) --Specifies advanced security options for the specified Elasticsearch domain.

Enabled (boolean) --True if advanced security is enabled.

InternalUserDatabaseEnabled (boolean) --True if the internal user database is enabled.



Status (dict) --Status of the advanced security options for the specified Elasticsearch domain.

CreationDate (datetime) --Timestamp which tells the creation date for the entity.

UpdateDate (datetime) --Timestamp which tells the last updated time for the entity.

UpdateVersion (integer) --Specifies the latest version for the entity.

State (string) --Provides the OptionState for the Elasticsearch domain.

PendingDeletion (boolean) --Indicates whether the Elasticsearch domain is being deleted.












Exceptions

ElasticsearchService.Client.exceptions.BaseException
ElasticsearchService.Client.exceptions.InternalException
ElasticsearchService.Client.exceptions.ResourceNotFoundException
ElasticsearchService.Client.exceptions.ValidationException


    :return: {
        'DomainConfig': {
            'ElasticsearchVersion': {
                'Options': 'string',
                'Status': {
                    'CreationDate': datetime(2015, 1, 1),
                    'UpdateDate': datetime(2015, 1, 1),
                    'UpdateVersion': 123,
                    'State': 'RequiresIndexDocuments'|'Processing'|'Active',
                    'PendingDeletion': True|False
                }
            },
            'ElasticsearchClusterConfig': {
                'Options': {
                    'InstanceType': 'm3.medium.elasticsearch'|'m3.large.elasticsearch'|'m3.xlarge.elasticsearch'|'m3.2xlarge.elasticsearch'|'m4.large.elasticsearch'|'m4.xlarge.elasticsearch'|'m4.2xlarge.elasticsearch'|'m4.4xlarge.elasticsearch'|'m4.10xlarge.elasticsearch'|'m5.large.elasticsearch'|'m5.xlarge.elasticsearch'|'m5.2xlarge.elasticsearch'|'m5.4xlarge.elasticsearch'|'m5.12xlarge.elasticsearch'|'r5.large.elasticsearch'|'r5.xlarge.elasticsearch'|'r5.2xlarge.elasticsearch'|'r5.4xlarge.elasticsearch'|'r5.12xlarge.elasticsearch'|'c5.large.elasticsearch'|'c5.xlarge.elasticsearch'|'c5.2xlarge.elasticsearch'|'c5.4xlarge.elasticsearch'|'c5.9xlarge.elasticsearch'|'c5.18xlarge.elasticsearch'|'ultrawarm1.medium.elasticsearch'|'ultrawarm1.large.elasticsearch'|'t2.micro.elasticsearch'|'t2.small.elasticsearch'|'t2.medium.elasticsearch'|'r3.large.elasticsearch'|'r3.xlarge.elasticsearch'|'r3.2xlarge.elasticsearch'|'r3.4xlarge.elasticsearch'|'r3.8xlarge.elasticsearch'|'i2.xlarge.elasticsearch'|'i2.2xlarge.elasticsearch'|'d2.xlarge.elasticsearch'|'d2.2xlarge.elasticsearch'|'d2.4xlarge.elasticsearch'|'d2.8xlarge.elasticsearch'|'c4.large.elasticsearch'|'c4.xlarge.elasticsearch'|'c4.2xlarge.elasticsearch'|'c4.4xlarge.elasticsearch'|'c4.8xlarge.elasticsearch'|'r4.large.elasticsearch'|'r4.xlarge.elasticsearch'|'r4.2xlarge.elasticsearch'|'r4.4xlarge.elasticsearch'|'r4.8xlarge.elasticsearch'|'r4.16xlarge.elasticsearch'|'i3.large.elasticsearch'|'i3.xlarge.elasticsearch'|'i3.2xlarge.elasticsearch'|'i3.4xlarge.elasticsearch'|'i3.8xlarge.elasticsearch'|'i3.16xlarge.elasticsearch',
                    'InstanceCount': 123,
                    'DedicatedMasterEnabled': True|False,
                    'ZoneAwarenessEnabled': True|False,
                    'ZoneAwarenessConfig': {
                        'AvailabilityZoneCount': 123
                    },
                    'DedicatedMasterType': 'm3.medium.elasticsearch'|'m3.large.elasticsearch'|'m3.xlarge.elasticsearch'|'m3.2xlarge.elasticsearch'|'m4.large.elasticsearch'|'m4.xlarge.elasticsearch'|'m4.2xlarge.elasticsearch'|'m4.4xlarge.elasticsearch'|'m4.10xlarge.elasticsearch'|'m5.large.elasticsearch'|'m5.xlarge.elasticsearch'|'m5.2xlarge.elasticsearch'|'m5.4xlarge.elasticsearch'|'m5.12xlarge.elasticsearch'|'r5.large.elasticsearch'|'r5.xlarge.elasticsearch'|'r5.2xlarge.elasticsearch'|'r5.4xlarge.elasticsearch'|'r5.12xlarge.elasticsearch'|'c5.large.elasticsearch'|'c5.xlarge.elasticsearch'|'c5.2xlarge.elasticsearch'|'c5.4xlarge.elasticsearch'|'c5.9xlarge.elasticsearch'|'c5.18xlarge.elasticsearch'|'ultrawarm1.medium.elasticsearch'|'ultrawarm1.large.elasticsearch'|'t2.micro.elasticsearch'|'t2.small.elasticsearch'|'t2.medium.elasticsearch'|'r3.large.elasticsearch'|'r3.xlarge.elasticsearch'|'r3.2xlarge.elasticsearch'|'r3.4xlarge.elasticsearch'|'r3.8xlarge.elasticsearch'|'i2.xlarge.elasticsearch'|'i2.2xlarge.elasticsearch'|'d2.xlarge.elasticsearch'|'d2.2xlarge.elasticsearch'|'d2.4xlarge.elasticsearch'|'d2.8xlarge.elasticsearch'|'c4.large.elasticsearch'|'c4.xlarge.elasticsearch'|'c4.2xlarge.elasticsearch'|'c4.4xlarge.elasticsearch'|'c4.8xlarge.elasticsearch'|'r4.large.elasticsearch'|'r4.xlarge.elasticsearch'|'r4.2xlarge.elasticsearch'|'r4.4xlarge.elasticsearch'|'r4.8xlarge.elasticsearch'|'r4.16xlarge.elasticsearch'|'i3.large.elasticsearch'|'i3.xlarge.elasticsearch'|'i3.2xlarge.elasticsearch'|'i3.4xlarge.elasticsearch'|'i3.8xlarge.elasticsearch'|'i3.16xlarge.elasticsearch',
                    'DedicatedMasterCount': 123,
                    'WarmEnabled': True|False,
                    'WarmType': 'ultrawarm1.medium.elasticsearch'|'ultrawarm1.large.elasticsearch',
                    'WarmCount': 123
                },
                'Status': {
                    'CreationDate': datetime(2015, 1, 1),
                    'UpdateDate': datetime(2015, 1, 1),
                    'UpdateVersion': 123,
                    'State': 'RequiresIndexDocuments'|'Processing'|'Active',
                    'PendingDeletion': True|False
                }
            },
            'EBSOptions': {
                'Options': {
                    'EBSEnabled': True|False,
                    'VolumeType': 'standard'|'gp2'|'io1',
                    'VolumeSize': 123,
                    'Iops': 123
                },
                'Status': {
                    'CreationDate': datetime(2015, 1, 1),
                    'UpdateDate': datetime(2015, 1, 1),
                    'UpdateVersion': 123,
                    'State': 'RequiresIndexDocuments'|'Processing'|'Active',
                    'PendingDeletion': True|False
                }
            },
            'AccessPolicies': {
                'Options': 'string',
                'Status': {
                    'CreationDate': datetime(2015, 1, 1),
                    'UpdateDate': datetime(2015, 1, 1),
                    'UpdateVersion': 123,
                    'State': 'RequiresIndexDocuments'|'Processing'|'Active',
                    'PendingDeletion': True|False
                }
            },
            'SnapshotOptions': {
                'Options': {
                    'AutomatedSnapshotStartHour': 123
                },
                'Status': {
                    'CreationDate': datetime(2015, 1, 1),
                    'UpdateDate': datetime(2015, 1, 1),
                    'UpdateVersion': 123,
                    'State': 'RequiresIndexDocuments'|'Processing'|'Active',
                    'PendingDeletion': True|False
                }
            },
            'VPCOptions': {
                'Options': {
                    'VPCId': 'string',
                    'SubnetIds': [
                        'string',
                    ],
                    'AvailabilityZones': [
                        'string',
                    ],
                    'SecurityGroupIds': [
                        'string',
                    ]
                },
                'Status': {
                    'CreationDate': datetime(2015, 1, 1),
                    'UpdateDate': datetime(2015, 1, 1),
                    'UpdateVersion': 123,
                    'State': 'RequiresIndexDocuments'|'Processing'|'Active',
                    'PendingDeletion': True|False
                }
            },
            'CognitoOptions': {
                'Options': {
                    'Enabled': True|False,
                    'UserPoolId': 'string',
                    'IdentityPoolId': 'string',
                    'RoleArn': 'string'
                },
                'Status': {
                    'CreationDate': datetime(2015, 1, 1),
                    'UpdateDate': datetime(2015, 1, 1),
                    'UpdateVersion': 123,
                    'State': 'RequiresIndexDocuments'|'Processing'|'Active',
                    'PendingDeletion': True|False
                }
            },
            'EncryptionAtRestOptions': {
                'Options': {
                    'Enabled': True|False,
                    'KmsKeyId': 'string'
                },
                'Status': {
                    'CreationDate': datetime(2015, 1, 1),
                    'UpdateDate': datetime(2015, 1, 1),
                    'UpdateVersion': 123,
                    'State': 'RequiresIndexDocuments'|'Processing'|'Active',
                    'PendingDeletion': True|False
                }
            },
            'NodeToNodeEncryptionOptions': {
                'Options': {
                    'Enabled': True|False
                },
                'Status': {
                    'CreationDate': datetime(2015, 1, 1),
                    'UpdateDate': datetime(2015, 1, 1),
                    'UpdateVersion': 123,
                    'State': 'RequiresIndexDocuments'|'Processing'|'Active',
                    'PendingDeletion': True|False
                }
            },
            'AdvancedOptions': {
                'Options': {
                    'string': 'string'
                },
                'Status': {
                    'CreationDate': datetime(2015, 1, 1),
                    'UpdateDate': datetime(2015, 1, 1),
                    'UpdateVersion': 123,
                    'State': 'RequiresIndexDocuments'|'Processing'|'Active',
                    'PendingDeletion': True|False
                }
            },
            'LogPublishingOptions': {
                'Options': {
                    'string': {
                        'CloudWatchLogsLogGroupArn': 'string',
                        'Enabled': True|False
                    }
                },
                'Status': {
                    'CreationDate': datetime(2015, 1, 1),
                    'UpdateDate': datetime(2015, 1, 1),
                    'UpdateVersion': 123,
                    'State': 'RequiresIndexDocuments'|'Processing'|'Active',
                    'PendingDeletion': True|False
                }
            },
            'DomainEndpointOptions': {
                'Options': {
                    'EnforceHTTPS': True|False,
                    'TLSSecurityPolicy': 'Policy-Min-TLS-1-0-2019-07'|'Policy-Min-TLS-1-2-2019-07'
                },
                'Status': {
                    'CreationDate': datetime(2015, 1, 1),
                    'UpdateDate': datetime(2015, 1, 1),
                    'UpdateVersion': 123,
                    'State': 'RequiresIndexDocuments'|'Processing'|'Active',
                    'PendingDeletion': True|False
                }
            },
            'AdvancedSecurityOptions': {
                'Options': {
                    'Enabled': True|False,
                    'InternalUserDatabaseEnabled': True|False
                },
                'Status': {
                    'CreationDate': datetime(2015, 1, 1),
                    'UpdateDate': datetime(2015, 1, 1),
                    'UpdateVersion': 123,
                    'State': 'RequiresIndexDocuments'|'Processing'|'Active',
                    'PendingDeletion': True|False
                }
            }
        }
    }
    
    
    :returns: 
    (string) --
    
    """
    pass

def describe_elasticsearch_domains(DomainNames=None):
    """
    Returns domain configuration information about the specified Elasticsearch domains, including the domain ID, domain endpoint, and domain ARN.
    See also: AWS API Documentation
    
    Exceptions
    
    :example: response = client.describe_elasticsearch_domains(
        DomainNames=[
            'string',
        ]
    )
    
    
    :type DomainNames: list
    :param DomainNames: [REQUIRED]\nThe Elasticsearch domains for which you want information.\n\n(string) --The name of an Elasticsearch domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).\n\n\n

    :rtype: dict
ReturnsResponse Syntax{
    'DomainStatusList': [
        {
            'DomainId': 'string',
            'DomainName': 'string',
            'ARN': 'string',
            'Created': True|False,
            'Deleted': True|False,
            'Endpoint': 'string',
            'Endpoints': {
                'string': 'string'
            },
            'Processing': True|False,
            'UpgradeProcessing': True|False,
            'ElasticsearchVersion': 'string',
            'ElasticsearchClusterConfig': {
                'InstanceType': 'm3.medium.elasticsearch'|'m3.large.elasticsearch'|'m3.xlarge.elasticsearch'|'m3.2xlarge.elasticsearch'|'m4.large.elasticsearch'|'m4.xlarge.elasticsearch'|'m4.2xlarge.elasticsearch'|'m4.4xlarge.elasticsearch'|'m4.10xlarge.elasticsearch'|'m5.large.elasticsearch'|'m5.xlarge.elasticsearch'|'m5.2xlarge.elasticsearch'|'m5.4xlarge.elasticsearch'|'m5.12xlarge.elasticsearch'|'r5.large.elasticsearch'|'r5.xlarge.elasticsearch'|'r5.2xlarge.elasticsearch'|'r5.4xlarge.elasticsearch'|'r5.12xlarge.elasticsearch'|'c5.large.elasticsearch'|'c5.xlarge.elasticsearch'|'c5.2xlarge.elasticsearch'|'c5.4xlarge.elasticsearch'|'c5.9xlarge.elasticsearch'|'c5.18xlarge.elasticsearch'|'ultrawarm1.medium.elasticsearch'|'ultrawarm1.large.elasticsearch'|'t2.micro.elasticsearch'|'t2.small.elasticsearch'|'t2.medium.elasticsearch'|'r3.large.elasticsearch'|'r3.xlarge.elasticsearch'|'r3.2xlarge.elasticsearch'|'r3.4xlarge.elasticsearch'|'r3.8xlarge.elasticsearch'|'i2.xlarge.elasticsearch'|'i2.2xlarge.elasticsearch'|'d2.xlarge.elasticsearch'|'d2.2xlarge.elasticsearch'|'d2.4xlarge.elasticsearch'|'d2.8xlarge.elasticsearch'|'c4.large.elasticsearch'|'c4.xlarge.elasticsearch'|'c4.2xlarge.elasticsearch'|'c4.4xlarge.elasticsearch'|'c4.8xlarge.elasticsearch'|'r4.large.elasticsearch'|'r4.xlarge.elasticsearch'|'r4.2xlarge.elasticsearch'|'r4.4xlarge.elasticsearch'|'r4.8xlarge.elasticsearch'|'r4.16xlarge.elasticsearch'|'i3.large.elasticsearch'|'i3.xlarge.elasticsearch'|'i3.2xlarge.elasticsearch'|'i3.4xlarge.elasticsearch'|'i3.8xlarge.elasticsearch'|'i3.16xlarge.elasticsearch',
                'InstanceCount': 123,
                'DedicatedMasterEnabled': True|False,
                'ZoneAwarenessEnabled': True|False,
                'ZoneAwarenessConfig': {
                    'AvailabilityZoneCount': 123
                },
                'DedicatedMasterType': 'm3.medium.elasticsearch'|'m3.large.elasticsearch'|'m3.xlarge.elasticsearch'|'m3.2xlarge.elasticsearch'|'m4.large.elasticsearch'|'m4.xlarge.elasticsearch'|'m4.2xlarge.elasticsearch'|'m4.4xlarge.elasticsearch'|'m4.10xlarge.elasticsearch'|'m5.large.elasticsearch'|'m5.xlarge.elasticsearch'|'m5.2xlarge.elasticsearch'|'m5.4xlarge.elasticsearch'|'m5.12xlarge.elasticsearch'|'r5.large.elasticsearch'|'r5.xlarge.elasticsearch'|'r5.2xlarge.elasticsearch'|'r5.4xlarge.elasticsearch'|'r5.12xlarge.elasticsearch'|'c5.large.elasticsearch'|'c5.xlarge.elasticsearch'|'c5.2xlarge.elasticsearch'|'c5.4xlarge.elasticsearch'|'c5.9xlarge.elasticsearch'|'c5.18xlarge.elasticsearch'|'ultrawarm1.medium.elasticsearch'|'ultrawarm1.large.elasticsearch'|'t2.micro.elasticsearch'|'t2.small.elasticsearch'|'t2.medium.elasticsearch'|'r3.large.elasticsearch'|'r3.xlarge.elasticsearch'|'r3.2xlarge.elasticsearch'|'r3.4xlarge.elasticsearch'|'r3.8xlarge.elasticsearch'|'i2.xlarge.elasticsearch'|'i2.2xlarge.elasticsearch'|'d2.xlarge.elasticsearch'|'d2.2xlarge.elasticsearch'|'d2.4xlarge.elasticsearch'|'d2.8xlarge.elasticsearch'|'c4.large.elasticsearch'|'c4.xlarge.elasticsearch'|'c4.2xlarge.elasticsearch'|'c4.4xlarge.elasticsearch'|'c4.8xlarge.elasticsearch'|'r4.large.elasticsearch'|'r4.xlarge.elasticsearch'|'r4.2xlarge.elasticsearch'|'r4.4xlarge.elasticsearch'|'r4.8xlarge.elasticsearch'|'r4.16xlarge.elasticsearch'|'i3.large.elasticsearch'|'i3.xlarge.elasticsearch'|'i3.2xlarge.elasticsearch'|'i3.4xlarge.elasticsearch'|'i3.8xlarge.elasticsearch'|'i3.16xlarge.elasticsearch',
                'DedicatedMasterCount': 123,
                'WarmEnabled': True|False,
                'WarmType': 'ultrawarm1.medium.elasticsearch'|'ultrawarm1.large.elasticsearch',
                'WarmCount': 123
            },
            'EBSOptions': {
                'EBSEnabled': True|False,
                'VolumeType': 'standard'|'gp2'|'io1',
                'VolumeSize': 123,
                'Iops': 123
            },
            'AccessPolicies': 'string',
            'SnapshotOptions': {
                'AutomatedSnapshotStartHour': 123
            },
            'VPCOptions': {
                'VPCId': 'string',
                'SubnetIds': [
                    'string',
                ],
                'AvailabilityZones': [
                    'string',
                ],
                'SecurityGroupIds': [
                    'string',
                ]
            },
            'CognitoOptions': {
                'Enabled': True|False,
                'UserPoolId': 'string',
                'IdentityPoolId': 'string',
                'RoleArn': 'string'
            },
            'EncryptionAtRestOptions': {
                'Enabled': True|False,
                'KmsKeyId': 'string'
            },
            'NodeToNodeEncryptionOptions': {
                'Enabled': True|False
            },
            'AdvancedOptions': {
                'string': 'string'
            },
            'LogPublishingOptions': {
                'string': {
                    'CloudWatchLogsLogGroupArn': 'string',
                    'Enabled': True|False
                }
            },
            'ServiceSoftwareOptions': {
                'CurrentVersion': 'string',
                'NewVersion': 'string',
                'UpdateAvailable': True|False,
                'Cancellable': True|False,
                'UpdateStatus': 'PENDING_UPDATE'|'IN_PROGRESS'|'COMPLETED'|'NOT_ELIGIBLE'|'ELIGIBLE',
                'Description': 'string',
                'AutomatedUpdateDate': datetime(2015, 1, 1),
                'OptionalDeployment': True|False
            },
            'DomainEndpointOptions': {
                'EnforceHTTPS': True|False,
                'TLSSecurityPolicy': 'Policy-Min-TLS-1-0-2019-07'|'Policy-Min-TLS-1-2-2019-07'
            },
            'AdvancedSecurityOptions': {
                'Enabled': True|False,
                'InternalUserDatabaseEnabled': True|False
            }
        },
    ]
}


Response Structure

(dict) --The result of a DescribeElasticsearchDomains request. Contains the status of the specified domains or all domains owned by the account.

DomainStatusList (list) --The status of the domains requested in the DescribeElasticsearchDomains request.

(dict) --The current status of an Elasticsearch domain.

DomainId (string) --The unique identifier for the specified Elasticsearch domain.

DomainName (string) --The name of an Elasticsearch domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).

ARN (string) --The Amazon resource name (ARN) of an Elasticsearch domain. See Identifiers for IAM Entities in Using AWS Identity and Access Management for more information.

Created (boolean) --The domain creation status. True if the creation of an Elasticsearch domain is complete. False if domain creation is still in progress.

Deleted (boolean) --The domain deletion status. True if a delete request has been received for the domain but resource cleanup is still in progress. False if the domain has not been deleted. Once domain deletion is complete, the status of the domain is no longer returned.

Endpoint (string) --The Elasticsearch domain endpoint that you use to submit index and search requests.

Endpoints (dict) --Map containing the Elasticsearch domain endpoints used to submit index and search requests. Example key, value : \'vpc\',\'vpc-endpoint-h2dsd34efgyghrtguk5gt6j2foh4.us-east-1.es.amazonaws.com\' .

(string) --
(string) --The endpoint to which service requests are submitted. For example, search-imdb-movies-oopcnjfn6ugofer3zx5iadxxca.eu-west-1.es.amazonaws.com or doc-imdb-movies-oopcnjfn6ugofer3zx5iadxxca.eu-west-1.es.amazonaws.com .





Processing (boolean) --The status of the Elasticsearch domain configuration. True if Amazon Elasticsearch Service is processing configuration changes. False if the configuration is active.

UpgradeProcessing (boolean) --The status of an Elasticsearch domain version upgrade. True if Amazon Elasticsearch Service is undergoing a version upgrade. False if the configuration is active.

ElasticsearchVersion (string) --
ElasticsearchClusterConfig (dict) --The type and number of instances in the domain cluster.

InstanceType (string) --The instance type for an Elasticsearch cluster. UltraWarm instance types are not supported for data instances.

InstanceCount (integer) --The number of instances in the specified domain cluster.

DedicatedMasterEnabled (boolean) --A boolean value to indicate whether a dedicated master node is enabled. See About Dedicated Master Nodes for more information.

ZoneAwarenessEnabled (boolean) --A boolean value to indicate whether zone awareness is enabled. See About Zone Awareness for more information.

ZoneAwarenessConfig (dict) --Specifies the zone awareness configuration for a domain when zone awareness is enabled.

AvailabilityZoneCount (integer) --An integer value to indicate the number of availability zones for a domain when zone awareness is enabled. This should be equal to number of subnets if VPC endpoints is enabled



DedicatedMasterType (string) --The instance type for a dedicated master node.

DedicatedMasterCount (integer) --Total number of dedicated master nodes, active and on standby, for the cluster.

WarmEnabled (boolean) --True to enable warm storage.

WarmType (string) --The instance type for the Elasticsearch cluster\'s warm nodes.

WarmCount (integer) --The number of warm nodes in the cluster.



EBSOptions (dict) --The EBSOptions for the specified domain. See Configuring EBS-based Storage for more information.

EBSEnabled (boolean) --Specifies whether EBS-based storage is enabled.

VolumeType (string) --Specifies the volume type for EBS-based storage.

VolumeSize (integer) --Integer to specify the size of an EBS volume.

Iops (integer) --Specifies the IOPD for a Provisioned IOPS EBS volume (SSD).



AccessPolicies (string) --IAM access policy as a JSON-formatted string.

SnapshotOptions (dict) --Specifies the status of the SnapshotOptions

AutomatedSnapshotStartHour (integer) --Specifies the time, in UTC format, when the service takes a daily automated snapshot of the specified Elasticsearch domain. Default value is 0 hours.



VPCOptions (dict) --The VPCOptions for the specified domain. For more information, see VPC Endpoints for Amazon Elasticsearch Service Domains .

VPCId (string) --The VPC Id for the Elasticsearch domain. Exists only if the domain was created with VPCOptions.

SubnetIds (list) --Specifies the subnets for VPC endpoint.

(string) --


AvailabilityZones (list) --The availability zones for the Elasticsearch domain. Exists only if the domain was created with VPCOptions.

(string) --


SecurityGroupIds (list) --Specifies the security groups for VPC endpoint.

(string) --




CognitoOptions (dict) --The CognitoOptions for the specified domain. For more information, see Amazon Cognito Authentication for Kibana .

Enabled (boolean) --Specifies the option to enable Cognito for Kibana authentication.

UserPoolId (string) --Specifies the Cognito user pool ID for Kibana authentication.

IdentityPoolId (string) --Specifies the Cognito identity pool ID for Kibana authentication.

RoleArn (string) --Specifies the role ARN that provides Elasticsearch permissions for accessing Cognito resources.



EncryptionAtRestOptions (dict) --Specifies the status of the EncryptionAtRestOptions .

Enabled (boolean) --Specifies the option to enable Encryption At Rest.

KmsKeyId (string) --Specifies the KMS Key ID for Encryption At Rest options.



NodeToNodeEncryptionOptions (dict) --Specifies the status of the NodeToNodeEncryptionOptions .

Enabled (boolean) --Specify true to enable node-to-node encryption.



AdvancedOptions (dict) --Specifies the status of the AdvancedOptions

(string) --
(string) --




LogPublishingOptions (dict) --Log publishing options for the given domain.

(string) --Type of Log File, it can be one of the following:

INDEX_SLOW_LOGS: Index slow logs contain insert requests that took more time than configured index query log threshold to execute.
SEARCH_SLOW_LOGS: Search slow logs contain search queries that took more time than configured search query log threshold to execute.
ES_APPLICATION_LOGS: Elasticsearch application logs contain information about errors and warnings raised during the operation of the service and can be useful for troubleshooting.


(dict) --Log Publishing option that is set for given domain. Attributes and their details:

CloudWatchLogsLogGroupArn: ARN of the Cloudwatch log group to which log needs to be published.
Enabled: Whether the log publishing for given log type is enabled or not


CloudWatchLogsLogGroupArn (string) --ARN of the Cloudwatch log group to which log needs to be published.

Enabled (boolean) --Specifies whether given log publishing option is enabled or not.







ServiceSoftwareOptions (dict) --The current status of the Elasticsearch domain\'s service software.

CurrentVersion (string) --The current service software version that is present on the domain.

NewVersion (string) --The new service software version if one is available.

UpdateAvailable (boolean) --True if you are able to update you service software version. False if you are not able to update your service software version.

Cancellable (boolean) --True if you are able to cancel your service software version update. False if you are not able to cancel your service software version.

UpdateStatus (string) --The status of your service software update. This field can take the following values: ELIGIBLE , PENDING_UPDATE , IN_PROGRESS , COMPLETED , and NOT_ELIGIBLE .

Description (string) --The description of the UpdateStatus .

AutomatedUpdateDate (datetime) --Timestamp, in Epoch time, until which you can manually request a service software update. After this date, we automatically update your service software.

OptionalDeployment (boolean) --True if a service software is never automatically updated. False if a service software is automatically updated after AutomatedUpdateDate .



DomainEndpointOptions (dict) --The current status of the Elasticsearch domain\'s endpoint options.

EnforceHTTPS (boolean) --Specify if only HTTPS endpoint should be enabled for the Elasticsearch domain.

TLSSecurityPolicy (string) --Specify the TLS security policy that needs to be applied to the HTTPS endpoint of Elasticsearch domain. It can be one of the following values:

Policy-Min-TLS-1-0-2019-07: TLS security policy which supports TLSv1.0 and higher.
Policy-Min-TLS-1-2-2019-07: TLS security policy which supports only TLSv1.2




AdvancedSecurityOptions (dict) --The current status of the Elasticsearch domain\'s advanced security options.

Enabled (boolean) --True if advanced security is enabled.

InternalUserDatabaseEnabled (boolean) --True if the internal user database is enabled.












Exceptions

ElasticsearchService.Client.exceptions.BaseException
ElasticsearchService.Client.exceptions.InternalException
ElasticsearchService.Client.exceptions.ValidationException


    :return: {
        'DomainStatusList': [
            {
                'DomainId': 'string',
                'DomainName': 'string',
                'ARN': 'string',
                'Created': True|False,
                'Deleted': True|False,
                'Endpoint': 'string',
                'Endpoints': {
                    'string': 'string'
                },
                'Processing': True|False,
                'UpgradeProcessing': True|False,
                'ElasticsearchVersion': 'string',
                'ElasticsearchClusterConfig': {
                    'InstanceType': 'm3.medium.elasticsearch'|'m3.large.elasticsearch'|'m3.xlarge.elasticsearch'|'m3.2xlarge.elasticsearch'|'m4.large.elasticsearch'|'m4.xlarge.elasticsearch'|'m4.2xlarge.elasticsearch'|'m4.4xlarge.elasticsearch'|'m4.10xlarge.elasticsearch'|'m5.large.elasticsearch'|'m5.xlarge.elasticsearch'|'m5.2xlarge.elasticsearch'|'m5.4xlarge.elasticsearch'|'m5.12xlarge.elasticsearch'|'r5.large.elasticsearch'|'r5.xlarge.elasticsearch'|'r5.2xlarge.elasticsearch'|'r5.4xlarge.elasticsearch'|'r5.12xlarge.elasticsearch'|'c5.large.elasticsearch'|'c5.xlarge.elasticsearch'|'c5.2xlarge.elasticsearch'|'c5.4xlarge.elasticsearch'|'c5.9xlarge.elasticsearch'|'c5.18xlarge.elasticsearch'|'ultrawarm1.medium.elasticsearch'|'ultrawarm1.large.elasticsearch'|'t2.micro.elasticsearch'|'t2.small.elasticsearch'|'t2.medium.elasticsearch'|'r3.large.elasticsearch'|'r3.xlarge.elasticsearch'|'r3.2xlarge.elasticsearch'|'r3.4xlarge.elasticsearch'|'r3.8xlarge.elasticsearch'|'i2.xlarge.elasticsearch'|'i2.2xlarge.elasticsearch'|'d2.xlarge.elasticsearch'|'d2.2xlarge.elasticsearch'|'d2.4xlarge.elasticsearch'|'d2.8xlarge.elasticsearch'|'c4.large.elasticsearch'|'c4.xlarge.elasticsearch'|'c4.2xlarge.elasticsearch'|'c4.4xlarge.elasticsearch'|'c4.8xlarge.elasticsearch'|'r4.large.elasticsearch'|'r4.xlarge.elasticsearch'|'r4.2xlarge.elasticsearch'|'r4.4xlarge.elasticsearch'|'r4.8xlarge.elasticsearch'|'r4.16xlarge.elasticsearch'|'i3.large.elasticsearch'|'i3.xlarge.elasticsearch'|'i3.2xlarge.elasticsearch'|'i3.4xlarge.elasticsearch'|'i3.8xlarge.elasticsearch'|'i3.16xlarge.elasticsearch',
                    'InstanceCount': 123,
                    'DedicatedMasterEnabled': True|False,
                    'ZoneAwarenessEnabled': True|False,
                    'ZoneAwarenessConfig': {
                        'AvailabilityZoneCount': 123
                    },
                    'DedicatedMasterType': 'm3.medium.elasticsearch'|'m3.large.elasticsearch'|'m3.xlarge.elasticsearch'|'m3.2xlarge.elasticsearch'|'m4.large.elasticsearch'|'m4.xlarge.elasticsearch'|'m4.2xlarge.elasticsearch'|'m4.4xlarge.elasticsearch'|'m4.10xlarge.elasticsearch'|'m5.large.elasticsearch'|'m5.xlarge.elasticsearch'|'m5.2xlarge.elasticsearch'|'m5.4xlarge.elasticsearch'|'m5.12xlarge.elasticsearch'|'r5.large.elasticsearch'|'r5.xlarge.elasticsearch'|'r5.2xlarge.elasticsearch'|'r5.4xlarge.elasticsearch'|'r5.12xlarge.elasticsearch'|'c5.large.elasticsearch'|'c5.xlarge.elasticsearch'|'c5.2xlarge.elasticsearch'|'c5.4xlarge.elasticsearch'|'c5.9xlarge.elasticsearch'|'c5.18xlarge.elasticsearch'|'ultrawarm1.medium.elasticsearch'|'ultrawarm1.large.elasticsearch'|'t2.micro.elasticsearch'|'t2.small.elasticsearch'|'t2.medium.elasticsearch'|'r3.large.elasticsearch'|'r3.xlarge.elasticsearch'|'r3.2xlarge.elasticsearch'|'r3.4xlarge.elasticsearch'|'r3.8xlarge.elasticsearch'|'i2.xlarge.elasticsearch'|'i2.2xlarge.elasticsearch'|'d2.xlarge.elasticsearch'|'d2.2xlarge.elasticsearch'|'d2.4xlarge.elasticsearch'|'d2.8xlarge.elasticsearch'|'c4.large.elasticsearch'|'c4.xlarge.elasticsearch'|'c4.2xlarge.elasticsearch'|'c4.4xlarge.elasticsearch'|'c4.8xlarge.elasticsearch'|'r4.large.elasticsearch'|'r4.xlarge.elasticsearch'|'r4.2xlarge.elasticsearch'|'r4.4xlarge.elasticsearch'|'r4.8xlarge.elasticsearch'|'r4.16xlarge.elasticsearch'|'i3.large.elasticsearch'|'i3.xlarge.elasticsearch'|'i3.2xlarge.elasticsearch'|'i3.4xlarge.elasticsearch'|'i3.8xlarge.elasticsearch'|'i3.16xlarge.elasticsearch',
                    'DedicatedMasterCount': 123,
                    'WarmEnabled': True|False,
                    'WarmType': 'ultrawarm1.medium.elasticsearch'|'ultrawarm1.large.elasticsearch',
                    'WarmCount': 123
                },
                'EBSOptions': {
                    'EBSEnabled': True|False,
                    'VolumeType': 'standard'|'gp2'|'io1',
                    'VolumeSize': 123,
                    'Iops': 123
                },
                'AccessPolicies': 'string',
                'SnapshotOptions': {
                    'AutomatedSnapshotStartHour': 123
                },
                'VPCOptions': {
                    'VPCId': 'string',
                    'SubnetIds': [
                        'string',
                    ],
                    'AvailabilityZones': [
                        'string',
                    ],
                    'SecurityGroupIds': [
                        'string',
                    ]
                },
                'CognitoOptions': {
                    'Enabled': True|False,
                    'UserPoolId': 'string',
                    'IdentityPoolId': 'string',
                    'RoleArn': 'string'
                },
                'EncryptionAtRestOptions': {
                    'Enabled': True|False,
                    'KmsKeyId': 'string'
                },
                'NodeToNodeEncryptionOptions': {
                    'Enabled': True|False
                },
                'AdvancedOptions': {
                    'string': 'string'
                },
                'LogPublishingOptions': {
                    'string': {
                        'CloudWatchLogsLogGroupArn': 'string',
                        'Enabled': True|False
                    }
                },
                'ServiceSoftwareOptions': {
                    'CurrentVersion': 'string',
                    'NewVersion': 'string',
                    'UpdateAvailable': True|False,
                    'Cancellable': True|False,
                    'UpdateStatus': 'PENDING_UPDATE'|'IN_PROGRESS'|'COMPLETED'|'NOT_ELIGIBLE'|'ELIGIBLE',
                    'Description': 'string',
                    'AutomatedUpdateDate': datetime(2015, 1, 1),
                    'OptionalDeployment': True|False
                },
                'DomainEndpointOptions': {
                    'EnforceHTTPS': True|False,
                    'TLSSecurityPolicy': 'Policy-Min-TLS-1-0-2019-07'|'Policy-Min-TLS-1-2-2019-07'
                },
                'AdvancedSecurityOptions': {
                    'Enabled': True|False,
                    'InternalUserDatabaseEnabled': True|False
                }
            },
        ]
    }
    
    
    :returns: 
    (string) --
    
    """
    pass

def describe_elasticsearch_instance_type_limits(DomainName=None, InstanceType=None, ElasticsearchVersion=None):
    """
    Describe Elasticsearch Limits for a given InstanceType and ElasticsearchVersion. When modifying existing Domain, specify the ``  DomainName `` to know what Limits are supported for modifying.
    See also: AWS API Documentation
    
    Exceptions
    
    :example: response = client.describe_elasticsearch_instance_type_limits(
        DomainName='string',
        InstanceType='m3.medium.elasticsearch'|'m3.large.elasticsearch'|'m3.xlarge.elasticsearch'|'m3.2xlarge.elasticsearch'|'m4.large.elasticsearch'|'m4.xlarge.elasticsearch'|'m4.2xlarge.elasticsearch'|'m4.4xlarge.elasticsearch'|'m4.10xlarge.elasticsearch'|'m5.large.elasticsearch'|'m5.xlarge.elasticsearch'|'m5.2xlarge.elasticsearch'|'m5.4xlarge.elasticsearch'|'m5.12xlarge.elasticsearch'|'r5.large.elasticsearch'|'r5.xlarge.elasticsearch'|'r5.2xlarge.elasticsearch'|'r5.4xlarge.elasticsearch'|'r5.12xlarge.elasticsearch'|'c5.large.elasticsearch'|'c5.xlarge.elasticsearch'|'c5.2xlarge.elasticsearch'|'c5.4xlarge.elasticsearch'|'c5.9xlarge.elasticsearch'|'c5.18xlarge.elasticsearch'|'ultrawarm1.medium.elasticsearch'|'ultrawarm1.large.elasticsearch'|'t2.micro.elasticsearch'|'t2.small.elasticsearch'|'t2.medium.elasticsearch'|'r3.large.elasticsearch'|'r3.xlarge.elasticsearch'|'r3.2xlarge.elasticsearch'|'r3.4xlarge.elasticsearch'|'r3.8xlarge.elasticsearch'|'i2.xlarge.elasticsearch'|'i2.2xlarge.elasticsearch'|'d2.xlarge.elasticsearch'|'d2.2xlarge.elasticsearch'|'d2.4xlarge.elasticsearch'|'d2.8xlarge.elasticsearch'|'c4.large.elasticsearch'|'c4.xlarge.elasticsearch'|'c4.2xlarge.elasticsearch'|'c4.4xlarge.elasticsearch'|'c4.8xlarge.elasticsearch'|'r4.large.elasticsearch'|'r4.xlarge.elasticsearch'|'r4.2xlarge.elasticsearch'|'r4.4xlarge.elasticsearch'|'r4.8xlarge.elasticsearch'|'r4.16xlarge.elasticsearch'|'i3.large.elasticsearch'|'i3.xlarge.elasticsearch'|'i3.2xlarge.elasticsearch'|'i3.4xlarge.elasticsearch'|'i3.8xlarge.elasticsearch'|'i3.16xlarge.elasticsearch',
        ElasticsearchVersion='string'
    )
    
    
    :type DomainName: string
    :param DomainName: DomainName represents the name of the Domain that we are trying to modify. This should be present only if we are querying for Elasticsearch `` Limits `` for existing domain.

    :type InstanceType: string
    :param InstanceType: [REQUIRED]\nThe instance type for an Elasticsearch cluster for which Elasticsearch `` Limits `` are needed.\n

    :type ElasticsearchVersion: string
    :param ElasticsearchVersion: [REQUIRED]\nVersion of Elasticsearch for which `` Limits `` are needed.\n

    :rtype: dict

ReturnsResponse Syntax
{
    'LimitsByRole': {
        'string': {
            'StorageTypes': [
                {
                    'StorageTypeName': 'string',
                    'StorageSubTypeName': 'string',
                    'StorageTypeLimits': [
                        {
                            'LimitName': 'string',
                            'LimitValues': [
                                'string',
                            ]
                        },
                    ]
                },
            ],
            'InstanceLimits': {
                'InstanceCountLimits': {
                    'MinimumInstanceCount': 123,
                    'MaximumInstanceCount': 123
                }
            },
            'AdditionalLimits': [
                {
                    'LimitName': 'string',
                    'LimitValues': [
                        'string',
                    ]
                },
            ]
        }
    }
}


Response Structure

(dict) --
Container for the parameters received from ``  DescribeElasticsearchInstanceTypeLimits `` operation.

LimitsByRole (dict) --
Map of Role of the Instance and Limits that are applicable. Role performed by given Instance in Elasticsearch can be one of the following:

data: If the given InstanceType is used as data node
master: If the given InstanceType is used as master node
ultra_warm: If the given InstanceType is used as warm node


(string) --

(dict) --
Limits for given InstanceType and for each of it\'s role. Limits contains following ``  StorageTypes, ``  ``  InstanceLimits `` and ``  AdditionalLimits ``

StorageTypes (list) --
StorageType represents the list of storage related types and attributes that are available for given InstanceType.

(dict) --
StorageTypes represents the list of storage related types and their attributes that are available for given InstanceType.

StorageTypeName (string) --
Type of the storage. List of available storage options:

instance

Inbuilt storage available for the given Instance
* ebs
Elastic block storage that would be attached to the given Instance

StorageSubTypeName (string) --
SubType of the given storage type. List of available sub-storage options: For "instance" storageType we wont have any storageSubType, in case of "ebs" storageType we will have following valid storageSubTypes

standard
gp2
io1

Refer `` VolumeType`` for more information regarding above EBS storage options.

StorageTypeLimits (list) --
List of limits that are applicable for given storage type.

(dict) --
Limits that are applicable for given storage type.

LimitName (string) --
Name of storage limits that are applicable for given storage type. If ``  StorageType `` is ebs, following storage options are applicable

MinimumVolumeSize

Minimum amount of volume size that is applicable for given storage type.It can be empty if it is not applicable.
* MaximumVolumeSize
Maximum amount of volume size that is applicable for given storage type.It can be empty if it is not applicable.
* MaximumIops
Maximum amount of Iops that is applicable for given storage type.It can be empty if it is not applicable.
* MinimumIops
Minimum amount of Iops that is applicable for given storage type.It can be empty if it is not applicable.

LimitValues (list) --
Values for the ``  StorageTypeLimit$LimitName `` .

(string) --










InstanceLimits (dict) --
InstanceLimits represents the list of instance related attributes that are available for given InstanceType.

InstanceCountLimits (dict) --
InstanceCountLimits represents the limits on number of instances that be created in Amazon Elasticsearch for given InstanceType.

MinimumInstanceCount (integer) --
Minimum number of Instances that can be instantiated for given InstanceType.

MaximumInstanceCount (integer) --
Maximum number of Instances that can be instantiated for given InstanceType.





AdditionalLimits (list) --
List of additional limits that are specific to a given InstanceType and for each of it\'s ``  InstanceRole `` .

(dict) --
List of limits that are specific to a given InstanceType and for each of it\'s ``  InstanceRole `` .

LimitName (string) --
Name of Additional Limit is specific to a given InstanceType and for each of it\'s ``  InstanceRole `` etc. Attributes and their details:

MaximumNumberOfDataNodesSupported

This attribute will be present in Master node only to specify how much data nodes upto which given ``  ESPartitionInstanceType `` can support as master node.
* MaximumNumberOfDataNodesWithoutMasterNode
This attribute will be present in Data node only to specify how much data nodes of given ``  ESPartitionInstanceType `` upto which you don\'t need any master nodes to govern them.

LimitValues (list) --
Value for given ``  AdditionalLimit$LimitName `` .

(string) --


















Exceptions

ElasticsearchService.Client.exceptions.BaseException
ElasticsearchService.Client.exceptions.InternalException
ElasticsearchService.Client.exceptions.InvalidTypeException
ElasticsearchService.Client.exceptions.LimitExceededException
ElasticsearchService.Client.exceptions.ResourceNotFoundException
ElasticsearchService.Client.exceptions.ValidationException


    :return: {
        'LimitsByRole': {
            'string': {
                'StorageTypes': [
                    {
                        'StorageTypeName': 'string',
                        'StorageSubTypeName': 'string',
                        'StorageTypeLimits': [
                            {
                                'LimitName': 'string',
                                'LimitValues': [
                                    'string',
                                ]
                            },
                        ]
                    },
                ],
                'InstanceLimits': {
                    'InstanceCountLimits': {
                        'MinimumInstanceCount': 123,
                        'MaximumInstanceCount': 123
                    }
                },
                'AdditionalLimits': [
                    {
                        'LimitName': 'string',
                        'LimitValues': [
                            'string',
                        ]
                    },
                ]
            }
        }
    }
    
    
    :returns: 
    data: If the given InstanceType is used as data node
    master: If the given InstanceType is used as master node
    ultra_warm: If the given InstanceType is used as warm node
    
    """
    pass

def describe_packages(Filters=None, MaxResults=None, NextToken=None):
    """
    Describes all packages available to Amazon ES. Includes options for filtering, limiting the number of results, and pagination.
    See also: AWS API Documentation
    
    Exceptions
    
    :example: response = client.describe_packages(
        Filters=[
            {
                'Name': 'PackageID'|'PackageName'|'PackageStatus',
                'Value': [
                    'string',
                ]
            },
        ],
        MaxResults=123,
        NextToken='string'
    )
    
    
    :type Filters: list
    :param Filters: Only returns packages that match the DescribePackagesFilterList values.\n\n(dict) --Filter to apply in DescribePackage response.\n\nName (string) --Any field from PackageDetails .\n\nValue (list) --A list of values for the specified field.\n\n(string) --\n\n\n\n\n\n

    :type MaxResults: integer
    :param MaxResults: Limits results to a maximum number of packages.

    :type NextToken: string
    :param NextToken: Used for pagination. Only necessary if a previous API call includes a non-null NextToken value. If provided, returns results for the next page.

    :rtype: dict

ReturnsResponse Syntax
{
    'PackageDetailsList': [
        {
            'PackageID': 'string',
            'PackageName': 'string',
            'PackageType': 'TXT-DICTIONARY',
            'PackageDescription': 'string',
            'PackageStatus': 'COPYING'|'COPY_FAILED'|'VALIDATING'|'VALIDATION_FAILED'|'AVAILABLE'|'DELETING'|'DELETED'|'DELETE_FAILED',
            'CreatedAt': datetime(2015, 1, 1),
            'ErrorDetails': {
                'ErrorType': 'string',
                'ErrorMessage': 'string'
            }
        },
    ],
    'NextToken': 'string'
}


Response Structure

(dict) --
Container for response returned by ``  DescribePackages `` operation.

PackageDetailsList (list) --
List of PackageDetails objects.

(dict) --
Basic information about a package.

PackageID (string) --
Internal ID of the package.

PackageName (string) --
User specified name of the package.

PackageType (string) --
Currently supports only TXT-DICTIONARY.

PackageDescription (string) --
User-specified description of the package.

PackageStatus (string) --
Current state of the package. Values are COPYING/COPY_FAILED/AVAILABLE/DELETING/DELETE_FAILED

CreatedAt (datetime) --
Timestamp which tells creation date of the package.

ErrorDetails (dict) --
Additional information if the package is in an error state. Null otherwise.

ErrorType (string) --
ErrorMessage (string) --






NextToken (string) --







Exceptions

ElasticsearchService.Client.exceptions.BaseException
ElasticsearchService.Client.exceptions.InternalException
ElasticsearchService.Client.exceptions.ResourceNotFoundException
ElasticsearchService.Client.exceptions.AccessDeniedException
ElasticsearchService.Client.exceptions.ValidationException


    :return: {
        'PackageDetailsList': [
            {
                'PackageID': 'string',
                'PackageName': 'string',
                'PackageType': 'TXT-DICTIONARY',
                'PackageDescription': 'string',
                'PackageStatus': 'COPYING'|'COPY_FAILED'|'VALIDATING'|'VALIDATION_FAILED'|'AVAILABLE'|'DELETING'|'DELETED'|'DELETE_FAILED',
                'CreatedAt': datetime(2015, 1, 1),
                'ErrorDetails': {
                    'ErrorType': 'string',
                    'ErrorMessage': 'string'
                }
            },
        ],
        'NextToken': 'string'
    }
    
    
    :returns: 
    ErrorType (string) --
    ErrorMessage (string) --
    
    """
    pass

def describe_reserved_elasticsearch_instance_offerings(ReservedElasticsearchInstanceOfferingId=None, MaxResults=None, NextToken=None):
    """
    Lists available reserved Elasticsearch instance offerings.
    See also: AWS API Documentation
    
    Exceptions
    
    :example: response = client.describe_reserved_elasticsearch_instance_offerings(
        ReservedElasticsearchInstanceOfferingId='string',
        MaxResults=123,
        NextToken='string'
    )
    
    
    :type ReservedElasticsearchInstanceOfferingId: string
    :param ReservedElasticsearchInstanceOfferingId: The offering identifier filter value. Use this parameter to show only the available offering that matches the specified reservation identifier.

    :type MaxResults: integer
    :param MaxResults: Set this value to limit the number of results returned. If not specified, defaults to 100.

    :type NextToken: string
    :param NextToken: NextToken should be sent in case if earlier API call produced result containing NextToken. It is used for pagination.

    :rtype: dict

ReturnsResponse Syntax
{
    'NextToken': 'string',
    'ReservedElasticsearchInstanceOfferings': [
        {
            'ReservedElasticsearchInstanceOfferingId': 'string',
            'ElasticsearchInstanceType': 'm3.medium.elasticsearch'|'m3.large.elasticsearch'|'m3.xlarge.elasticsearch'|'m3.2xlarge.elasticsearch'|'m4.large.elasticsearch'|'m4.xlarge.elasticsearch'|'m4.2xlarge.elasticsearch'|'m4.4xlarge.elasticsearch'|'m4.10xlarge.elasticsearch'|'m5.large.elasticsearch'|'m5.xlarge.elasticsearch'|'m5.2xlarge.elasticsearch'|'m5.4xlarge.elasticsearch'|'m5.12xlarge.elasticsearch'|'r5.large.elasticsearch'|'r5.xlarge.elasticsearch'|'r5.2xlarge.elasticsearch'|'r5.4xlarge.elasticsearch'|'r5.12xlarge.elasticsearch'|'c5.large.elasticsearch'|'c5.xlarge.elasticsearch'|'c5.2xlarge.elasticsearch'|'c5.4xlarge.elasticsearch'|'c5.9xlarge.elasticsearch'|'c5.18xlarge.elasticsearch'|'ultrawarm1.medium.elasticsearch'|'ultrawarm1.large.elasticsearch'|'t2.micro.elasticsearch'|'t2.small.elasticsearch'|'t2.medium.elasticsearch'|'r3.large.elasticsearch'|'r3.xlarge.elasticsearch'|'r3.2xlarge.elasticsearch'|'r3.4xlarge.elasticsearch'|'r3.8xlarge.elasticsearch'|'i2.xlarge.elasticsearch'|'i2.2xlarge.elasticsearch'|'d2.xlarge.elasticsearch'|'d2.2xlarge.elasticsearch'|'d2.4xlarge.elasticsearch'|'d2.8xlarge.elasticsearch'|'c4.large.elasticsearch'|'c4.xlarge.elasticsearch'|'c4.2xlarge.elasticsearch'|'c4.4xlarge.elasticsearch'|'c4.8xlarge.elasticsearch'|'r4.large.elasticsearch'|'r4.xlarge.elasticsearch'|'r4.2xlarge.elasticsearch'|'r4.4xlarge.elasticsearch'|'r4.8xlarge.elasticsearch'|'r4.16xlarge.elasticsearch'|'i3.large.elasticsearch'|'i3.xlarge.elasticsearch'|'i3.2xlarge.elasticsearch'|'i3.4xlarge.elasticsearch'|'i3.8xlarge.elasticsearch'|'i3.16xlarge.elasticsearch',
            'Duration': 123,
            'FixedPrice': 123.0,
            'UsagePrice': 123.0,
            'CurrencyCode': 'string',
            'PaymentOption': 'ALL_UPFRONT'|'PARTIAL_UPFRONT'|'NO_UPFRONT',
            'RecurringCharges': [
                {
                    'RecurringChargeAmount': 123.0,
                    'RecurringChargeFrequency': 'string'
                },
            ]
        },
    ]
}


Response Structure

(dict) --
Container for results from DescribeReservedElasticsearchInstanceOfferings

NextToken (string) --
Provides an identifier to allow retrieval of paginated results.

ReservedElasticsearchInstanceOfferings (list) --
List of reserved Elasticsearch instance offerings

(dict) --
Details of a reserved Elasticsearch instance offering.

ReservedElasticsearchInstanceOfferingId (string) --
The Elasticsearch reserved instance offering identifier.

ElasticsearchInstanceType (string) --
The Elasticsearch instance type offered by the reserved instance offering.

Duration (integer) --
The duration, in seconds, for which the offering will reserve the Elasticsearch instance.

FixedPrice (float) --
The upfront fixed charge you will pay to purchase the specific reserved Elasticsearch instance offering.

UsagePrice (float) --
The rate you are charged for each hour the domain that is using the offering is running.

CurrencyCode (string) --
The currency code for the reserved Elasticsearch instance offering.

PaymentOption (string) --
Payment option for the reserved Elasticsearch instance offering

RecurringCharges (list) --
The charge to your account regardless of whether you are creating any domains using the instance offering.

(dict) --
Contains the specific price and frequency of a recurring charges for a reserved Elasticsearch instance, or for a reserved Elasticsearch instance offering.

RecurringChargeAmount (float) --
The monetary amount of the recurring charge.

RecurringChargeFrequency (string) --
The frequency of the recurring charge.















Exceptions

ElasticsearchService.Client.exceptions.ResourceNotFoundException
ElasticsearchService.Client.exceptions.ValidationException
ElasticsearchService.Client.exceptions.DisabledOperationException
ElasticsearchService.Client.exceptions.InternalException


    :return: {
        'NextToken': 'string',
        'ReservedElasticsearchInstanceOfferings': [
            {
                'ReservedElasticsearchInstanceOfferingId': 'string',
                'ElasticsearchInstanceType': 'm3.medium.elasticsearch'|'m3.large.elasticsearch'|'m3.xlarge.elasticsearch'|'m3.2xlarge.elasticsearch'|'m4.large.elasticsearch'|'m4.xlarge.elasticsearch'|'m4.2xlarge.elasticsearch'|'m4.4xlarge.elasticsearch'|'m4.10xlarge.elasticsearch'|'m5.large.elasticsearch'|'m5.xlarge.elasticsearch'|'m5.2xlarge.elasticsearch'|'m5.4xlarge.elasticsearch'|'m5.12xlarge.elasticsearch'|'r5.large.elasticsearch'|'r5.xlarge.elasticsearch'|'r5.2xlarge.elasticsearch'|'r5.4xlarge.elasticsearch'|'r5.12xlarge.elasticsearch'|'c5.large.elasticsearch'|'c5.xlarge.elasticsearch'|'c5.2xlarge.elasticsearch'|'c5.4xlarge.elasticsearch'|'c5.9xlarge.elasticsearch'|'c5.18xlarge.elasticsearch'|'ultrawarm1.medium.elasticsearch'|'ultrawarm1.large.elasticsearch'|'t2.micro.elasticsearch'|'t2.small.elasticsearch'|'t2.medium.elasticsearch'|'r3.large.elasticsearch'|'r3.xlarge.elasticsearch'|'r3.2xlarge.elasticsearch'|'r3.4xlarge.elasticsearch'|'r3.8xlarge.elasticsearch'|'i2.xlarge.elasticsearch'|'i2.2xlarge.elasticsearch'|'d2.xlarge.elasticsearch'|'d2.2xlarge.elasticsearch'|'d2.4xlarge.elasticsearch'|'d2.8xlarge.elasticsearch'|'c4.large.elasticsearch'|'c4.xlarge.elasticsearch'|'c4.2xlarge.elasticsearch'|'c4.4xlarge.elasticsearch'|'c4.8xlarge.elasticsearch'|'r4.large.elasticsearch'|'r4.xlarge.elasticsearch'|'r4.2xlarge.elasticsearch'|'r4.4xlarge.elasticsearch'|'r4.8xlarge.elasticsearch'|'r4.16xlarge.elasticsearch'|'i3.large.elasticsearch'|'i3.xlarge.elasticsearch'|'i3.2xlarge.elasticsearch'|'i3.4xlarge.elasticsearch'|'i3.8xlarge.elasticsearch'|'i3.16xlarge.elasticsearch',
                'Duration': 123,
                'FixedPrice': 123.0,
                'UsagePrice': 123.0,
                'CurrencyCode': 'string',
                'PaymentOption': 'ALL_UPFRONT'|'PARTIAL_UPFRONT'|'NO_UPFRONT',
                'RecurringCharges': [
                    {
                        'RecurringChargeAmount': 123.0,
                        'RecurringChargeFrequency': 'string'
                    },
                ]
            },
        ]
    }
    
    
    :returns: 
    ElasticsearchService.Client.exceptions.ResourceNotFoundException
    ElasticsearchService.Client.exceptions.ValidationException
    ElasticsearchService.Client.exceptions.DisabledOperationException
    ElasticsearchService.Client.exceptions.InternalException
    
    """
    pass

def describe_reserved_elasticsearch_instances(ReservedElasticsearchInstanceId=None, MaxResults=None, NextToken=None):
    """
    Returns information about reserved Elasticsearch instances for this account.
    See also: AWS API Documentation
    
    Exceptions
    
    :example: response = client.describe_reserved_elasticsearch_instances(
        ReservedElasticsearchInstanceId='string',
        MaxResults=123,
        NextToken='string'
    )
    
    
    :type ReservedElasticsearchInstanceId: string
    :param ReservedElasticsearchInstanceId: The reserved instance identifier filter value. Use this parameter to show only the reservation that matches the specified reserved Elasticsearch instance ID.

    :type MaxResults: integer
    :param MaxResults: Set this value to limit the number of results returned. If not specified, defaults to 100.

    :type NextToken: string
    :param NextToken: NextToken should be sent in case if earlier API call produced result containing NextToken. It is used for pagination.

    :rtype: dict

ReturnsResponse Syntax
{
    'NextToken': 'string',
    'ReservedElasticsearchInstances': [
        {
            'ReservationName': 'string',
            'ReservedElasticsearchInstanceId': 'string',
            'ReservedElasticsearchInstanceOfferingId': 'string',
            'ElasticsearchInstanceType': 'm3.medium.elasticsearch'|'m3.large.elasticsearch'|'m3.xlarge.elasticsearch'|'m3.2xlarge.elasticsearch'|'m4.large.elasticsearch'|'m4.xlarge.elasticsearch'|'m4.2xlarge.elasticsearch'|'m4.4xlarge.elasticsearch'|'m4.10xlarge.elasticsearch'|'m5.large.elasticsearch'|'m5.xlarge.elasticsearch'|'m5.2xlarge.elasticsearch'|'m5.4xlarge.elasticsearch'|'m5.12xlarge.elasticsearch'|'r5.large.elasticsearch'|'r5.xlarge.elasticsearch'|'r5.2xlarge.elasticsearch'|'r5.4xlarge.elasticsearch'|'r5.12xlarge.elasticsearch'|'c5.large.elasticsearch'|'c5.xlarge.elasticsearch'|'c5.2xlarge.elasticsearch'|'c5.4xlarge.elasticsearch'|'c5.9xlarge.elasticsearch'|'c5.18xlarge.elasticsearch'|'ultrawarm1.medium.elasticsearch'|'ultrawarm1.large.elasticsearch'|'t2.micro.elasticsearch'|'t2.small.elasticsearch'|'t2.medium.elasticsearch'|'r3.large.elasticsearch'|'r3.xlarge.elasticsearch'|'r3.2xlarge.elasticsearch'|'r3.4xlarge.elasticsearch'|'r3.8xlarge.elasticsearch'|'i2.xlarge.elasticsearch'|'i2.2xlarge.elasticsearch'|'d2.xlarge.elasticsearch'|'d2.2xlarge.elasticsearch'|'d2.4xlarge.elasticsearch'|'d2.8xlarge.elasticsearch'|'c4.large.elasticsearch'|'c4.xlarge.elasticsearch'|'c4.2xlarge.elasticsearch'|'c4.4xlarge.elasticsearch'|'c4.8xlarge.elasticsearch'|'r4.large.elasticsearch'|'r4.xlarge.elasticsearch'|'r4.2xlarge.elasticsearch'|'r4.4xlarge.elasticsearch'|'r4.8xlarge.elasticsearch'|'r4.16xlarge.elasticsearch'|'i3.large.elasticsearch'|'i3.xlarge.elasticsearch'|'i3.2xlarge.elasticsearch'|'i3.4xlarge.elasticsearch'|'i3.8xlarge.elasticsearch'|'i3.16xlarge.elasticsearch',
            'StartTime': datetime(2015, 1, 1),
            'Duration': 123,
            'FixedPrice': 123.0,
            'UsagePrice': 123.0,
            'CurrencyCode': 'string',
            'ElasticsearchInstanceCount': 123,
            'State': 'string',
            'PaymentOption': 'ALL_UPFRONT'|'PARTIAL_UPFRONT'|'NO_UPFRONT',
            'RecurringCharges': [
                {
                    'RecurringChargeAmount': 123.0,
                    'RecurringChargeFrequency': 'string'
                },
            ]
        },
    ]
}


Response Structure

(dict) --
Container for results from DescribeReservedElasticsearchInstances

NextToken (string) --
Provides an identifier to allow retrieval of paginated results.

ReservedElasticsearchInstances (list) --
List of reserved Elasticsearch instances.

(dict) --
Details of a reserved Elasticsearch instance.

ReservationName (string) --
The customer-specified identifier to track this reservation.

ReservedElasticsearchInstanceId (string) --
The unique identifier for the reservation.

ReservedElasticsearchInstanceOfferingId (string) --
The offering identifier.

ElasticsearchInstanceType (string) --
The Elasticsearch instance type offered by the reserved instance offering.

StartTime (datetime) --
The time the reservation started.

Duration (integer) --
The duration, in seconds, for which the Elasticsearch instance is reserved.

FixedPrice (float) --
The upfront fixed charge you will paid to purchase the specific reserved Elasticsearch instance offering.

UsagePrice (float) --
The rate you are charged for each hour for the domain that is using this reserved instance.

CurrencyCode (string) --
The currency code for the reserved Elasticsearch instance offering.

ElasticsearchInstanceCount (integer) --
The number of Elasticsearch instances that have been reserved.

State (string) --
The state of the reserved Elasticsearch instance.

PaymentOption (string) --
The payment option as defined in the reserved Elasticsearch instance offering.

RecurringCharges (list) --
The charge to your account regardless of whether you are creating any domains using the instance offering.

(dict) --
Contains the specific price and frequency of a recurring charges for a reserved Elasticsearch instance, or for a reserved Elasticsearch instance offering.

RecurringChargeAmount (float) --
The monetary amount of the recurring charge.

RecurringChargeFrequency (string) --
The frequency of the recurring charge.















Exceptions

ElasticsearchService.Client.exceptions.ResourceNotFoundException
ElasticsearchService.Client.exceptions.InternalException
ElasticsearchService.Client.exceptions.ValidationException
ElasticsearchService.Client.exceptions.DisabledOperationException


    :return: {
        'NextToken': 'string',
        'ReservedElasticsearchInstances': [
            {
                'ReservationName': 'string',
                'ReservedElasticsearchInstanceId': 'string',
                'ReservedElasticsearchInstanceOfferingId': 'string',
                'ElasticsearchInstanceType': 'm3.medium.elasticsearch'|'m3.large.elasticsearch'|'m3.xlarge.elasticsearch'|'m3.2xlarge.elasticsearch'|'m4.large.elasticsearch'|'m4.xlarge.elasticsearch'|'m4.2xlarge.elasticsearch'|'m4.4xlarge.elasticsearch'|'m4.10xlarge.elasticsearch'|'m5.large.elasticsearch'|'m5.xlarge.elasticsearch'|'m5.2xlarge.elasticsearch'|'m5.4xlarge.elasticsearch'|'m5.12xlarge.elasticsearch'|'r5.large.elasticsearch'|'r5.xlarge.elasticsearch'|'r5.2xlarge.elasticsearch'|'r5.4xlarge.elasticsearch'|'r5.12xlarge.elasticsearch'|'c5.large.elasticsearch'|'c5.xlarge.elasticsearch'|'c5.2xlarge.elasticsearch'|'c5.4xlarge.elasticsearch'|'c5.9xlarge.elasticsearch'|'c5.18xlarge.elasticsearch'|'ultrawarm1.medium.elasticsearch'|'ultrawarm1.large.elasticsearch'|'t2.micro.elasticsearch'|'t2.small.elasticsearch'|'t2.medium.elasticsearch'|'r3.large.elasticsearch'|'r3.xlarge.elasticsearch'|'r3.2xlarge.elasticsearch'|'r3.4xlarge.elasticsearch'|'r3.8xlarge.elasticsearch'|'i2.xlarge.elasticsearch'|'i2.2xlarge.elasticsearch'|'d2.xlarge.elasticsearch'|'d2.2xlarge.elasticsearch'|'d2.4xlarge.elasticsearch'|'d2.8xlarge.elasticsearch'|'c4.large.elasticsearch'|'c4.xlarge.elasticsearch'|'c4.2xlarge.elasticsearch'|'c4.4xlarge.elasticsearch'|'c4.8xlarge.elasticsearch'|'r4.large.elasticsearch'|'r4.xlarge.elasticsearch'|'r4.2xlarge.elasticsearch'|'r4.4xlarge.elasticsearch'|'r4.8xlarge.elasticsearch'|'r4.16xlarge.elasticsearch'|'i3.large.elasticsearch'|'i3.xlarge.elasticsearch'|'i3.2xlarge.elasticsearch'|'i3.4xlarge.elasticsearch'|'i3.8xlarge.elasticsearch'|'i3.16xlarge.elasticsearch',
                'StartTime': datetime(2015, 1, 1),
                'Duration': 123,
                'FixedPrice': 123.0,
                'UsagePrice': 123.0,
                'CurrencyCode': 'string',
                'ElasticsearchInstanceCount': 123,
                'State': 'string',
                'PaymentOption': 'ALL_UPFRONT'|'PARTIAL_UPFRONT'|'NO_UPFRONT',
                'RecurringCharges': [
                    {
                        'RecurringChargeAmount': 123.0,
                        'RecurringChargeFrequency': 'string'
                    },
                ]
            },
        ]
    }
    
    
    :returns: 
    ElasticsearchService.Client.exceptions.ResourceNotFoundException
    ElasticsearchService.Client.exceptions.InternalException
    ElasticsearchService.Client.exceptions.ValidationException
    ElasticsearchService.Client.exceptions.DisabledOperationException
    
    """
    pass

def dissociate_package(PackageID=None, DomainName=None):
    """
    Dissociates a package from the Amazon ES domain.
    See also: AWS API Documentation
    
    Exceptions
    
    :example: response = client.dissociate_package(
        PackageID='string',
        DomainName='string'
    )
    
    
    :type PackageID: string
    :param PackageID: [REQUIRED]\nInternal ID of the package that you want to associate with a domain. Use DescribePackages to find this value.\n

    :type DomainName: string
    :param DomainName: [REQUIRED]\nName of the domain that you want to associate the package with.\n

    :rtype: dict

ReturnsResponse Syntax
{
    'DomainPackageDetails': {
        'PackageID': 'string',
        'PackageName': 'string',
        'PackageType': 'TXT-DICTIONARY',
        'LastUpdated': datetime(2015, 1, 1),
        'DomainName': 'string',
        'DomainPackageStatus': 'ASSOCIATING'|'ASSOCIATION_FAILED'|'ACTIVE'|'DISSOCIATING'|'DISSOCIATION_FAILED',
        'ReferencePath': 'string',
        'ErrorDetails': {
            'ErrorType': 'string',
            'ErrorMessage': 'string'
        }
    }
}


Response Structure

(dict) --
Container for response returned by ``  DissociatePackage `` operation.

DomainPackageDetails (dict) --
DomainPackageDetails

PackageID (string) --
Internal ID of the package.

PackageName (string) --
User specified name of the package.

PackageType (string) --
Currently supports only TXT-DICTIONARY.

LastUpdated (datetime) --
Timestamp of the most-recent update to the association status.

DomainName (string) --
Name of the domain you\'ve associated a package with.

DomainPackageStatus (string) --
State of the association. Values are ASSOCIATING/ASSOCIATION_FAILED/ACTIVE/DISSOCIATING/DISSOCIATION_FAILED.

ReferencePath (string) --
The relative path on Amazon ES nodes, which can be used as synonym_path when the package is synonym file.

ErrorDetails (dict) --
Additional information if the package is in an error state. Null otherwise.

ErrorType (string) --
ErrorMessage (string) --










Exceptions

ElasticsearchService.Client.exceptions.BaseException
ElasticsearchService.Client.exceptions.InternalException
ElasticsearchService.Client.exceptions.ResourceNotFoundException
ElasticsearchService.Client.exceptions.AccessDeniedException
ElasticsearchService.Client.exceptions.ValidationException
ElasticsearchService.Client.exceptions.ConflictException


    :return: {
        'DomainPackageDetails': {
            'PackageID': 'string',
            'PackageName': 'string',
            'PackageType': 'TXT-DICTIONARY',
            'LastUpdated': datetime(2015, 1, 1),
            'DomainName': 'string',
            'DomainPackageStatus': 'ASSOCIATING'|'ASSOCIATION_FAILED'|'ACTIVE'|'DISSOCIATING'|'DISSOCIATION_FAILED',
            'ReferencePath': 'string',
            'ErrorDetails': {
                'ErrorType': 'string',
                'ErrorMessage': 'string'
            }
        }
    }
    
    
    :returns: 
    ErrorType (string) --
    ErrorMessage (string) --
    
    """
    pass

def generate_presigned_url(ClientMethod=None, Params=None, ExpiresIn=None, HttpMethod=None):
    """
    Generate a presigned url given a client, its method, and arguments
    
    :type ClientMethod: string
    :param ClientMethod: The client method to presign for

    :type Params: dict
    :param Params: The parameters normally passed to\nClientMethod.

    :type ExpiresIn: int
    :param ExpiresIn: The number of seconds the presigned url is valid\nfor. By default it expires in an hour (3600 seconds)

    :type HttpMethod: string
    :param HttpMethod: The http method to use on the generated url. By\ndefault, the http method is whatever is used in the method\'s model.

    """
    pass

def get_compatible_elasticsearch_versions(DomainName=None):
    """
    Returns a list of upgrade compatible Elastisearch versions. You can optionally pass a ``  DomainName `` to get all upgrade compatible Elasticsearch versions for that specific domain.
    See also: AWS API Documentation
    
    Exceptions
    
    :example: response = client.get_compatible_elasticsearch_versions(
        DomainName='string'
    )
    
    
    :type DomainName: string
    :param DomainName: The name of an Elasticsearch domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).

    :rtype: dict
ReturnsResponse Syntax{
    'CompatibleElasticsearchVersions': [
        {
            'SourceVersion': 'string',
            'TargetVersions': [
                'string',
            ]
        },
    ]
}


Response Structure

(dict) --Container for response returned by ``  GetCompatibleElasticsearchVersions `` operation.

CompatibleElasticsearchVersions (list) --A map of compatible Elasticsearch versions returned as part of the ``  GetCompatibleElasticsearchVersions `` operation.

(dict) --A map from an ``  ElasticsearchVersion `` to a list of compatible ``  ElasticsearchVersion `` s to which the domain can be upgraded.

SourceVersion (string) --The current version of Elasticsearch on which a domain is.

TargetVersions (list) --List of supported elastic search versions.

(string) --











Exceptions

ElasticsearchService.Client.exceptions.BaseException
ElasticsearchService.Client.exceptions.ResourceNotFoundException
ElasticsearchService.Client.exceptions.DisabledOperationException
ElasticsearchService.Client.exceptions.ValidationException
ElasticsearchService.Client.exceptions.InternalException


    :return: {
        'CompatibleElasticsearchVersions': [
            {
                'SourceVersion': 'string',
                'TargetVersions': [
                    'string',
                ]
            },
        ]
    }
    
    
    :returns: 
    ElasticsearchService.Client.exceptions.BaseException
    ElasticsearchService.Client.exceptions.ResourceNotFoundException
    ElasticsearchService.Client.exceptions.DisabledOperationException
    ElasticsearchService.Client.exceptions.ValidationException
    ElasticsearchService.Client.exceptions.InternalException
    
    """
    pass

def get_paginator(operation_name=None):
    """
    Create a paginator for an operation.
    
    :type operation_name: string
    :param operation_name: The operation name. This is the same name\nas the method name on the client. For example, if the\nmethod name is create_foo, and you\'d normally invoke the\noperation as client.create_foo(**kwargs), if the\ncreate_foo operation can be paginated, you can use the\ncall client.get_paginator('create_foo').

    :rtype: L{botocore.paginate.Paginator}
ReturnsA paginator object.


    """
    pass

def get_upgrade_history(DomainName=None, MaxResults=None, NextToken=None):
    """
    Retrieves the complete history of the last 10 upgrades that were performed on the domain.
    See also: AWS API Documentation
    
    Exceptions
    
    :example: response = client.get_upgrade_history(
        DomainName='string',
        MaxResults=123,
        NextToken='string'
    )
    
    
    :type DomainName: string
    :param DomainName: [REQUIRED]\nThe name of an Elasticsearch domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).\n

    :type MaxResults: integer
    :param MaxResults: Set this value to limit the number of results returned.

    :type NextToken: string
    :param NextToken: Paginated APIs accepts NextToken input to returns next page results and provides a NextToken output in the response which can be used by the client to retrieve more results.

    :rtype: dict

ReturnsResponse Syntax
{
    'UpgradeHistories': [
        {
            'UpgradeName': 'string',
            'StartTimestamp': datetime(2015, 1, 1),
            'UpgradeStatus': 'IN_PROGRESS'|'SUCCEEDED'|'SUCCEEDED_WITH_ISSUES'|'FAILED',
            'StepsList': [
                {
                    'UpgradeStep': 'PRE_UPGRADE_CHECK'|'SNAPSHOT'|'UPGRADE',
                    'UpgradeStepStatus': 'IN_PROGRESS'|'SUCCEEDED'|'SUCCEEDED_WITH_ISSUES'|'FAILED',
                    'Issues': [
                        'string',
                    ],
                    'ProgressPercent': 123.0
                },
            ]
        },
    ],
    'NextToken': 'string'
}


Response Structure

(dict) --
Container for response returned by ``  GetUpgradeHistory `` operation.

UpgradeHistories (list) --
A list of ``  UpgradeHistory `` objects corresponding to each Upgrade or Upgrade Eligibility Check performed on a domain returned as part of ``  GetUpgradeHistoryResponse `` object.

(dict) --
History of the last 10 Upgrades and Upgrade Eligibility Checks.

UpgradeName (string) --
A string that describes the update briefly

StartTimestamp (datetime) --
UTC Timestamp at which the Upgrade API call was made in "yyyy-MM-ddTHH:mm:ssZ" format.

UpgradeStatus (string) --
The overall status of the update. The status can take one of the following values:

In Progress
Succeeded
Succeeded with Issues
Failed


StepsList (list) --
A list of ``  UpgradeStepItem `` s representing information about each step performed as pard of a specific Upgrade or Upgrade Eligibility Check.

(dict) --
Represents a single step of the Upgrade or Upgrade Eligibility Check workflow.

UpgradeStep (string) --
Represents one of 3 steps that an Upgrade or Upgrade Eligibility Check does through:

PreUpgradeCheck
Snapshot
Upgrade


UpgradeStepStatus (string) --
The status of a particular step during an upgrade. The status can take one of the following values:

In Progress
Succeeded
Succeeded with Issues
Failed


Issues (list) --
A list of strings containing detailed information about the errors encountered in a particular step.

(string) --


ProgressPercent (float) --
The Floating point value representing progress percentage of a particular step.









NextToken (string) --
Pagination token that needs to be supplied to the next call to get the next page of results







Exceptions

ElasticsearchService.Client.exceptions.BaseException
ElasticsearchService.Client.exceptions.ResourceNotFoundException
ElasticsearchService.Client.exceptions.DisabledOperationException
ElasticsearchService.Client.exceptions.ValidationException
ElasticsearchService.Client.exceptions.InternalException


    :return: {
        'UpgradeHistories': [
            {
                'UpgradeName': 'string',
                'StartTimestamp': datetime(2015, 1, 1),
                'UpgradeStatus': 'IN_PROGRESS'|'SUCCEEDED'|'SUCCEEDED_WITH_ISSUES'|'FAILED',
                'StepsList': [
                    {
                        'UpgradeStep': 'PRE_UPGRADE_CHECK'|'SNAPSHOT'|'UPGRADE',
                        'UpgradeStepStatus': 'IN_PROGRESS'|'SUCCEEDED'|'SUCCEEDED_WITH_ISSUES'|'FAILED',
                        'Issues': [
                            'string',
                        ],
                        'ProgressPercent': 123.0
                    },
                ]
            },
        ],
        'NextToken': 'string'
    }
    
    
    :returns: 
    In Progress
    Succeeded
    Succeeded with Issues
    Failed
    
    """
    pass

def get_upgrade_status(DomainName=None):
    """
    Retrieves the latest status of the last upgrade or upgrade eligibility check that was performed on the domain.
    See also: AWS API Documentation
    
    Exceptions
    
    :example: response = client.get_upgrade_status(
        DomainName='string'
    )
    
    
    :type DomainName: string
    :param DomainName: [REQUIRED]\nThe name of an Elasticsearch domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).\n

    :rtype: dict
ReturnsResponse Syntax{
    'UpgradeStep': 'PRE_UPGRADE_CHECK'|'SNAPSHOT'|'UPGRADE',
    'StepStatus': 'IN_PROGRESS'|'SUCCEEDED'|'SUCCEEDED_WITH_ISSUES'|'FAILED',
    'UpgradeName': 'string'
}


Response Structure

(dict) --Container for response returned by ``  GetUpgradeStatus `` operation.

UpgradeStep (string) --Represents one of 3 steps that an Upgrade or Upgrade Eligibility Check does through:

PreUpgradeCheck
Snapshot
Upgrade


StepStatus (string) --One of 4 statuses that a step can go through returned as part of the ``  GetUpgradeStatusResponse `` object. The status can take one of the following values:

In Progress
Succeeded
Succeeded with Issues
Failed


UpgradeName (string) --A string that describes the update briefly






Exceptions

ElasticsearchService.Client.exceptions.BaseException
ElasticsearchService.Client.exceptions.ResourceNotFoundException
ElasticsearchService.Client.exceptions.DisabledOperationException
ElasticsearchService.Client.exceptions.ValidationException
ElasticsearchService.Client.exceptions.InternalException


    :return: {
        'UpgradeStep': 'PRE_UPGRADE_CHECK'|'SNAPSHOT'|'UPGRADE',
        'StepStatus': 'IN_PROGRESS'|'SUCCEEDED'|'SUCCEEDED_WITH_ISSUES'|'FAILED',
        'UpgradeName': 'string'
    }
    
    
    :returns: 
    In Progress
    Succeeded
    Succeeded with Issues
    Failed
    
    """
    pass

def get_waiter(waiter_name=None):
    """
    Returns an object that can wait for some condition.
    
    :type waiter_name: str
    :param waiter_name: The name of the waiter to get. See the waiters\nsection of the service docs for a list of available waiters.

    :rtype: botocore.waiter.Waiter


    """
    pass

def list_domain_names():
    """
    Returns the name of all Elasticsearch domains owned by the current user\'s account.
    See also: AWS API Documentation
    
    Exceptions
    
    :example: response = client.list_domain_names()
    
    
    :rtype: dict
ReturnsResponse Syntax{
    'DomainNames': [
        {
            'DomainName': 'string'
        },
    ]
}


Response Structure

(dict) --The result of a ListDomainNames operation. Contains the names of all Elasticsearch domains owned by this account.

DomainNames (list) --List of Elasticsearch domain names.

(dict) --
DomainName (string) --Specifies the DomainName .










Exceptions

ElasticsearchService.Client.exceptions.BaseException
ElasticsearchService.Client.exceptions.ValidationException


    :return: {
        'DomainNames': [
            {
                'DomainName': 'string'
            },
        ]
    }
    
    
    """
    pass

def list_domains_for_package(PackageID=None, MaxResults=None, NextToken=None):
    """
    Lists all Amazon ES domains associated with the package.
    See also: AWS API Documentation
    
    Exceptions
    
    :example: response = client.list_domains_for_package(
        PackageID='string',
        MaxResults=123,
        NextToken='string'
    )
    
    
    :type PackageID: string
    :param PackageID: [REQUIRED]\nThe package for which to list domains.\n

    :type MaxResults: integer
    :param MaxResults: Limits results to a maximum number of domains.

    :type NextToken: string
    :param NextToken: Used for pagination. Only necessary if a previous API call includes a non-null NextToken value. If provided, returns results for the next page.

    :rtype: dict

ReturnsResponse Syntax
{
    'DomainPackageDetailsList': [
        {
            'PackageID': 'string',
            'PackageName': 'string',
            'PackageType': 'TXT-DICTIONARY',
            'LastUpdated': datetime(2015, 1, 1),
            'DomainName': 'string',
            'DomainPackageStatus': 'ASSOCIATING'|'ASSOCIATION_FAILED'|'ACTIVE'|'DISSOCIATING'|'DISSOCIATION_FAILED',
            'ReferencePath': 'string',
            'ErrorDetails': {
                'ErrorType': 'string',
                'ErrorMessage': 'string'
            }
        },
    ],
    'NextToken': 'string'
}


Response Structure

(dict) --
Container for response parameters to ``  ListDomainsForPackage `` operation.

DomainPackageDetailsList (list) --
List of DomainPackageDetails objects.

(dict) --
Information on a package that is associated with a domain.

PackageID (string) --
Internal ID of the package.

PackageName (string) --
User specified name of the package.

PackageType (string) --
Currently supports only TXT-DICTIONARY.

LastUpdated (datetime) --
Timestamp of the most-recent update to the association status.

DomainName (string) --
Name of the domain you\'ve associated a package with.

DomainPackageStatus (string) --
State of the association. Values are ASSOCIATING/ASSOCIATION_FAILED/ACTIVE/DISSOCIATING/DISSOCIATION_FAILED.

ReferencePath (string) --
The relative path on Amazon ES nodes, which can be used as synonym_path when the package is synonym file.

ErrorDetails (dict) --
Additional information if the package is in an error state. Null otherwise.

ErrorType (string) --
ErrorMessage (string) --






NextToken (string) --







Exceptions

ElasticsearchService.Client.exceptions.BaseException
ElasticsearchService.Client.exceptions.InternalException
ElasticsearchService.Client.exceptions.ResourceNotFoundException
ElasticsearchService.Client.exceptions.AccessDeniedException
ElasticsearchService.Client.exceptions.ValidationException


    :return: {
        'DomainPackageDetailsList': [
            {
                'PackageID': 'string',
                'PackageName': 'string',
                'PackageType': 'TXT-DICTIONARY',
                'LastUpdated': datetime(2015, 1, 1),
                'DomainName': 'string',
                'DomainPackageStatus': 'ASSOCIATING'|'ASSOCIATION_FAILED'|'ACTIVE'|'DISSOCIATING'|'DISSOCIATION_FAILED',
                'ReferencePath': 'string',
                'ErrorDetails': {
                    'ErrorType': 'string',
                    'ErrorMessage': 'string'
                }
            },
        ],
        'NextToken': 'string'
    }
    
    
    :returns: 
    ErrorType (string) --
    ErrorMessage (string) --
    
    """
    pass

def list_elasticsearch_instance_types(ElasticsearchVersion=None, DomainName=None, MaxResults=None, NextToken=None):
    """
    List all Elasticsearch instance types that are supported for given ElasticsearchVersion
    See also: AWS API Documentation
    
    Exceptions
    
    :example: response = client.list_elasticsearch_instance_types(
        ElasticsearchVersion='string',
        DomainName='string',
        MaxResults=123,
        NextToken='string'
    )
    
    
    :type ElasticsearchVersion: string
    :param ElasticsearchVersion: [REQUIRED]\nVersion of Elasticsearch for which list of supported elasticsearch instance types are needed.\n

    :type DomainName: string
    :param DomainName: DomainName represents the name of the Domain that we are trying to modify. This should be present only if we are querying for list of available Elasticsearch instance types when modifying existing domain.

    :type MaxResults: integer
    :param MaxResults: Set this value to limit the number of results returned. Value provided must be greater than 30 else it wont be honored.

    :type NextToken: string
    :param NextToken: NextToken should be sent in case if earlier API call produced result containing NextToken. It is used for pagination.

    :rtype: dict

ReturnsResponse Syntax
{
    'ElasticsearchInstanceTypes': [
        'm3.medium.elasticsearch'|'m3.large.elasticsearch'|'m3.xlarge.elasticsearch'|'m3.2xlarge.elasticsearch'|'m4.large.elasticsearch'|'m4.xlarge.elasticsearch'|'m4.2xlarge.elasticsearch'|'m4.4xlarge.elasticsearch'|'m4.10xlarge.elasticsearch'|'m5.large.elasticsearch'|'m5.xlarge.elasticsearch'|'m5.2xlarge.elasticsearch'|'m5.4xlarge.elasticsearch'|'m5.12xlarge.elasticsearch'|'r5.large.elasticsearch'|'r5.xlarge.elasticsearch'|'r5.2xlarge.elasticsearch'|'r5.4xlarge.elasticsearch'|'r5.12xlarge.elasticsearch'|'c5.large.elasticsearch'|'c5.xlarge.elasticsearch'|'c5.2xlarge.elasticsearch'|'c5.4xlarge.elasticsearch'|'c5.9xlarge.elasticsearch'|'c5.18xlarge.elasticsearch'|'ultrawarm1.medium.elasticsearch'|'ultrawarm1.large.elasticsearch'|'t2.micro.elasticsearch'|'t2.small.elasticsearch'|'t2.medium.elasticsearch'|'r3.large.elasticsearch'|'r3.xlarge.elasticsearch'|'r3.2xlarge.elasticsearch'|'r3.4xlarge.elasticsearch'|'r3.8xlarge.elasticsearch'|'i2.xlarge.elasticsearch'|'i2.2xlarge.elasticsearch'|'d2.xlarge.elasticsearch'|'d2.2xlarge.elasticsearch'|'d2.4xlarge.elasticsearch'|'d2.8xlarge.elasticsearch'|'c4.large.elasticsearch'|'c4.xlarge.elasticsearch'|'c4.2xlarge.elasticsearch'|'c4.4xlarge.elasticsearch'|'c4.8xlarge.elasticsearch'|'r4.large.elasticsearch'|'r4.xlarge.elasticsearch'|'r4.2xlarge.elasticsearch'|'r4.4xlarge.elasticsearch'|'r4.8xlarge.elasticsearch'|'r4.16xlarge.elasticsearch'|'i3.large.elasticsearch'|'i3.xlarge.elasticsearch'|'i3.2xlarge.elasticsearch'|'i3.4xlarge.elasticsearch'|'i3.8xlarge.elasticsearch'|'i3.16xlarge.elasticsearch',
    ],
    'NextToken': 'string'
}


Response Structure

(dict) --
Container for the parameters returned by ``  ListElasticsearchInstanceTypes `` operation.

ElasticsearchInstanceTypes (list) --
List of instance types supported by Amazon Elasticsearch service for given ``  ElasticsearchVersion ``

(string) --


NextToken (string) --
In case if there are more results available NextToken would be present, make further request to the same API with received NextToken to paginate remaining results.







Exceptions

ElasticsearchService.Client.exceptions.BaseException
ElasticsearchService.Client.exceptions.InternalException
ElasticsearchService.Client.exceptions.ResourceNotFoundException
ElasticsearchService.Client.exceptions.ValidationException


    :return: {
        'ElasticsearchInstanceTypes': [
            'm3.medium.elasticsearch'|'m3.large.elasticsearch'|'m3.xlarge.elasticsearch'|'m3.2xlarge.elasticsearch'|'m4.large.elasticsearch'|'m4.xlarge.elasticsearch'|'m4.2xlarge.elasticsearch'|'m4.4xlarge.elasticsearch'|'m4.10xlarge.elasticsearch'|'m5.large.elasticsearch'|'m5.xlarge.elasticsearch'|'m5.2xlarge.elasticsearch'|'m5.4xlarge.elasticsearch'|'m5.12xlarge.elasticsearch'|'r5.large.elasticsearch'|'r5.xlarge.elasticsearch'|'r5.2xlarge.elasticsearch'|'r5.4xlarge.elasticsearch'|'r5.12xlarge.elasticsearch'|'c5.large.elasticsearch'|'c5.xlarge.elasticsearch'|'c5.2xlarge.elasticsearch'|'c5.4xlarge.elasticsearch'|'c5.9xlarge.elasticsearch'|'c5.18xlarge.elasticsearch'|'ultrawarm1.medium.elasticsearch'|'ultrawarm1.large.elasticsearch'|'t2.micro.elasticsearch'|'t2.small.elasticsearch'|'t2.medium.elasticsearch'|'r3.large.elasticsearch'|'r3.xlarge.elasticsearch'|'r3.2xlarge.elasticsearch'|'r3.4xlarge.elasticsearch'|'r3.8xlarge.elasticsearch'|'i2.xlarge.elasticsearch'|'i2.2xlarge.elasticsearch'|'d2.xlarge.elasticsearch'|'d2.2xlarge.elasticsearch'|'d2.4xlarge.elasticsearch'|'d2.8xlarge.elasticsearch'|'c4.large.elasticsearch'|'c4.xlarge.elasticsearch'|'c4.2xlarge.elasticsearch'|'c4.4xlarge.elasticsearch'|'c4.8xlarge.elasticsearch'|'r4.large.elasticsearch'|'r4.xlarge.elasticsearch'|'r4.2xlarge.elasticsearch'|'r4.4xlarge.elasticsearch'|'r4.8xlarge.elasticsearch'|'r4.16xlarge.elasticsearch'|'i3.large.elasticsearch'|'i3.xlarge.elasticsearch'|'i3.2xlarge.elasticsearch'|'i3.4xlarge.elasticsearch'|'i3.8xlarge.elasticsearch'|'i3.16xlarge.elasticsearch',
        ],
        'NextToken': 'string'
    }
    
    
    :returns: 
    (string) --
    
    """
    pass

def list_elasticsearch_versions(MaxResults=None, NextToken=None):
    """
    List all supported Elasticsearch versions
    See also: AWS API Documentation
    
    Exceptions
    
    :example: response = client.list_elasticsearch_versions(
        MaxResults=123,
        NextToken='string'
    )
    
    
    :type MaxResults: integer
    :param MaxResults: Set this value to limit the number of results returned. Value provided must be greater than 10 else it wont be honored.

    :type NextToken: string
    :param NextToken: Paginated APIs accepts NextToken input to returns next page results and provides a NextToken output in the response which can be used by the client to retrieve more results.

    :rtype: dict

ReturnsResponse Syntax
{
    'ElasticsearchVersions': [
        'string',
    ],
    'NextToken': 'string'
}


Response Structure

(dict) --
Container for the parameters for response received from ``  ListElasticsearchVersions `` operation.

ElasticsearchVersions (list) --
List of supported elastic search versions.

(string) --


NextToken (string) --
Paginated APIs accepts NextToken input to returns next page results and provides a NextToken output in the response which can be used by the client to retrieve more results.







Exceptions

ElasticsearchService.Client.exceptions.BaseException
ElasticsearchService.Client.exceptions.InternalException
ElasticsearchService.Client.exceptions.ResourceNotFoundException
ElasticsearchService.Client.exceptions.ValidationException


    :return: {
        'ElasticsearchVersions': [
            'string',
        ],
        'NextToken': 'string'
    }
    
    
    :returns: 
    (string) --
    
    """
    pass

def list_packages_for_domain(DomainName=None, MaxResults=None, NextToken=None):
    """
    Lists all packages associated with the Amazon ES domain.
    See also: AWS API Documentation
    
    Exceptions
    
    :example: response = client.list_packages_for_domain(
        DomainName='string',
        MaxResults=123,
        NextToken='string'
    )
    
    
    :type DomainName: string
    :param DomainName: [REQUIRED]\nThe name of the domain for which you want to list associated packages.\n

    :type MaxResults: integer
    :param MaxResults: Limits results to a maximum number of packages.

    :type NextToken: string
    :param NextToken: Used for pagination. Only necessary if a previous API call includes a non-null NextToken value. If provided, returns results for the next page.

    :rtype: dict

ReturnsResponse Syntax
{
    'DomainPackageDetailsList': [
        {
            'PackageID': 'string',
            'PackageName': 'string',
            'PackageType': 'TXT-DICTIONARY',
            'LastUpdated': datetime(2015, 1, 1),
            'DomainName': 'string',
            'DomainPackageStatus': 'ASSOCIATING'|'ASSOCIATION_FAILED'|'ACTIVE'|'DISSOCIATING'|'DISSOCIATION_FAILED',
            'ReferencePath': 'string',
            'ErrorDetails': {
                'ErrorType': 'string',
                'ErrorMessage': 'string'
            }
        },
    ],
    'NextToken': 'string'
}


Response Structure

(dict) --
Container for response parameters to ``  ListPackagesForDomain `` operation.

DomainPackageDetailsList (list) --
List of DomainPackageDetails objects.

(dict) --
Information on a package that is associated with a domain.

PackageID (string) --
Internal ID of the package.

PackageName (string) --
User specified name of the package.

PackageType (string) --
Currently supports only TXT-DICTIONARY.

LastUpdated (datetime) --
Timestamp of the most-recent update to the association status.

DomainName (string) --
Name of the domain you\'ve associated a package with.

DomainPackageStatus (string) --
State of the association. Values are ASSOCIATING/ASSOCIATION_FAILED/ACTIVE/DISSOCIATING/DISSOCIATION_FAILED.

ReferencePath (string) --
The relative path on Amazon ES nodes, which can be used as synonym_path when the package is synonym file.

ErrorDetails (dict) --
Additional information if the package is in an error state. Null otherwise.

ErrorType (string) --
ErrorMessage (string) --






NextToken (string) --
Pagination token that needs to be supplied to the next call to get the next page of results.







Exceptions

ElasticsearchService.Client.exceptions.BaseException
ElasticsearchService.Client.exceptions.InternalException
ElasticsearchService.Client.exceptions.ResourceNotFoundException
ElasticsearchService.Client.exceptions.AccessDeniedException
ElasticsearchService.Client.exceptions.ValidationException


    :return: {
        'DomainPackageDetailsList': [
            {
                'PackageID': 'string',
                'PackageName': 'string',
                'PackageType': 'TXT-DICTIONARY',
                'LastUpdated': datetime(2015, 1, 1),
                'DomainName': 'string',
                'DomainPackageStatus': 'ASSOCIATING'|'ASSOCIATION_FAILED'|'ACTIVE'|'DISSOCIATING'|'DISSOCIATION_FAILED',
                'ReferencePath': 'string',
                'ErrorDetails': {
                    'ErrorType': 'string',
                    'ErrorMessage': 'string'
                }
            },
        ],
        'NextToken': 'string'
    }
    
    
    :returns: 
    ErrorType (string) --
    ErrorMessage (string) --
    
    """
    pass

def list_tags(ARN=None):
    """
    Returns all tags for the given Elasticsearch domain.
    See also: AWS API Documentation
    
    Exceptions
    
    :example: response = client.list_tags(
        ARN='string'
    )
    
    
    :type ARN: string
    :param ARN: [REQUIRED]\nSpecify the ARN for the Elasticsearch domain to which the tags are attached that you want to view.\n

    :rtype: dict
ReturnsResponse Syntax{
    'TagList': [
        {
            'Key': 'string',
            'Value': 'string'
        },
    ]
}


Response Structure

(dict) --The result of a ListTags operation. Contains tags for all requested Elasticsearch domains.

TagList (list) --List of Tag for the requested Elasticsearch domain.

(dict) --Specifies a key value pair for a resource tag.

Key (string) --Specifies the TagKey , the name of the tag. Tag keys must be unique for the Elasticsearch domain to which they are attached.

Value (string) --Specifies the TagValue , the value assigned to the corresponding tag key. Tag values can be null and do not have to be unique in a tag set. For example, you can have a key value pair in a tag set of project : Trinity and cost-center : Trinity










Exceptions

ElasticsearchService.Client.exceptions.BaseException
ElasticsearchService.Client.exceptions.ResourceNotFoundException
ElasticsearchService.Client.exceptions.ValidationException
ElasticsearchService.Client.exceptions.InternalException


    :return: {
        'TagList': [
            {
                'Key': 'string',
                'Value': 'string'
            },
        ]
    }
    
    
    """
    pass

def purchase_reserved_elasticsearch_instance_offering(ReservedElasticsearchInstanceOfferingId=None, ReservationName=None, InstanceCount=None):
    """
    Allows you to purchase reserved Elasticsearch instances.
    See also: AWS API Documentation
    
    Exceptions
    
    :example: response = client.purchase_reserved_elasticsearch_instance_offering(
        ReservedElasticsearchInstanceOfferingId='string',
        ReservationName='string',
        InstanceCount=123
    )
    
    
    :type ReservedElasticsearchInstanceOfferingId: string
    :param ReservedElasticsearchInstanceOfferingId: [REQUIRED]\nThe ID of the reserved Elasticsearch instance offering to purchase.\n

    :type ReservationName: string
    :param ReservationName: [REQUIRED]\nA customer-specified identifier to track this reservation.\n

    :type InstanceCount: integer
    :param InstanceCount: The number of Elasticsearch instances to reserve.

    :rtype: dict

ReturnsResponse Syntax
{
    'ReservedElasticsearchInstanceId': 'string',
    'ReservationName': 'string'
}


Response Structure

(dict) --
Represents the output of a PurchaseReservedElasticsearchInstanceOffering operation.

ReservedElasticsearchInstanceId (string) --
Details of the reserved Elasticsearch instance which was purchased.

ReservationName (string) --
The customer-specified identifier used to track this reservation.







Exceptions

ElasticsearchService.Client.exceptions.ResourceNotFoundException
ElasticsearchService.Client.exceptions.ResourceAlreadyExistsException
ElasticsearchService.Client.exceptions.LimitExceededException
ElasticsearchService.Client.exceptions.DisabledOperationException
ElasticsearchService.Client.exceptions.ValidationException
ElasticsearchService.Client.exceptions.InternalException


    :return: {
        'ReservedElasticsearchInstanceId': 'string',
        'ReservationName': 'string'
    }
    
    
    :returns: 
    ElasticsearchService.Client.exceptions.ResourceNotFoundException
    ElasticsearchService.Client.exceptions.ResourceAlreadyExistsException
    ElasticsearchService.Client.exceptions.LimitExceededException
    ElasticsearchService.Client.exceptions.DisabledOperationException
    ElasticsearchService.Client.exceptions.ValidationException
    ElasticsearchService.Client.exceptions.InternalException
    
    """
    pass

def remove_tags(ARN=None, TagKeys=None):
    """
    Removes the specified set of tags from the specified Elasticsearch domain.
    See also: AWS API Documentation
    
    Exceptions
    
    :example: response = client.remove_tags(
        ARN='string',
        TagKeys=[
            'string',
        ]
    )
    
    
    :type ARN: string
    :param ARN: [REQUIRED]\nSpecifies the ARN for the Elasticsearch domain from which you want to delete the specified tags.\n

    :type TagKeys: list
    :param TagKeys: [REQUIRED]\nSpecifies the TagKey list which you want to remove from the Elasticsearch domain.\n\n(string) --\n\n

    :returns: 
    ElasticsearchService.Client.exceptions.BaseException
    ElasticsearchService.Client.exceptions.ValidationException
    ElasticsearchService.Client.exceptions.InternalException
    
    """
    pass

def start_elasticsearch_service_software_update(DomainName=None):
    """
    Schedules a service software update for an Amazon ES domain.
    See also: AWS API Documentation
    
    Exceptions
    
    :example: response = client.start_elasticsearch_service_software_update(
        DomainName='string'
    )
    
    
    :type DomainName: string
    :param DomainName: [REQUIRED]\nThe name of the domain that you want to update to the latest service software.\n

    :rtype: dict
ReturnsResponse Syntax{
    'ServiceSoftwareOptions': {
        'CurrentVersion': 'string',
        'NewVersion': 'string',
        'UpdateAvailable': True|False,
        'Cancellable': True|False,
        'UpdateStatus': 'PENDING_UPDATE'|'IN_PROGRESS'|'COMPLETED'|'NOT_ELIGIBLE'|'ELIGIBLE',
        'Description': 'string',
        'AutomatedUpdateDate': datetime(2015, 1, 1),
        'OptionalDeployment': True|False
    }
}


Response Structure

(dict) --The result of a StartElasticsearchServiceSoftwareUpdate operation. Contains the status of the update.

ServiceSoftwareOptions (dict) --The current status of the Elasticsearch service software update.

CurrentVersion (string) --The current service software version that is present on the domain.

NewVersion (string) --The new service software version if one is available.

UpdateAvailable (boolean) --True if you are able to update you service software version. False if you are not able to update your service software version.

Cancellable (boolean) --True if you are able to cancel your service software version update. False if you are not able to cancel your service software version.

UpdateStatus (string) --The status of your service software update. This field can take the following values: ELIGIBLE , PENDING_UPDATE , IN_PROGRESS , COMPLETED , and NOT_ELIGIBLE .

Description (string) --The description of the UpdateStatus .

AutomatedUpdateDate (datetime) --Timestamp, in Epoch time, until which you can manually request a service software update. After this date, we automatically update your service software.

OptionalDeployment (boolean) --True if a service software is never automatically updated. False if a service software is automatically updated after AutomatedUpdateDate .








Exceptions

ElasticsearchService.Client.exceptions.BaseException
ElasticsearchService.Client.exceptions.InternalException
ElasticsearchService.Client.exceptions.ResourceNotFoundException
ElasticsearchService.Client.exceptions.ValidationException


    :return: {
        'ServiceSoftwareOptions': {
            'CurrentVersion': 'string',
            'NewVersion': 'string',
            'UpdateAvailable': True|False,
            'Cancellable': True|False,
            'UpdateStatus': 'PENDING_UPDATE'|'IN_PROGRESS'|'COMPLETED'|'NOT_ELIGIBLE'|'ELIGIBLE',
            'Description': 'string',
            'AutomatedUpdateDate': datetime(2015, 1, 1),
            'OptionalDeployment': True|False
        }
    }
    
    
    """
    pass

def update_elasticsearch_domain_config(DomainName=None, ElasticsearchClusterConfig=None, EBSOptions=None, SnapshotOptions=None, VPCOptions=None, CognitoOptions=None, AdvancedOptions=None, AccessPolicies=None, LogPublishingOptions=None, DomainEndpointOptions=None, AdvancedSecurityOptions=None):
    """
    Modifies the cluster configuration of the specified Elasticsearch domain, setting as setting the instance type and the number of instances.
    See also: AWS API Documentation
    
    Exceptions
    
    :example: response = client.update_elasticsearch_domain_config(
        DomainName='string',
        ElasticsearchClusterConfig={
            'InstanceType': 'm3.medium.elasticsearch'|'m3.large.elasticsearch'|'m3.xlarge.elasticsearch'|'m3.2xlarge.elasticsearch'|'m4.large.elasticsearch'|'m4.xlarge.elasticsearch'|'m4.2xlarge.elasticsearch'|'m4.4xlarge.elasticsearch'|'m4.10xlarge.elasticsearch'|'m5.large.elasticsearch'|'m5.xlarge.elasticsearch'|'m5.2xlarge.elasticsearch'|'m5.4xlarge.elasticsearch'|'m5.12xlarge.elasticsearch'|'r5.large.elasticsearch'|'r5.xlarge.elasticsearch'|'r5.2xlarge.elasticsearch'|'r5.4xlarge.elasticsearch'|'r5.12xlarge.elasticsearch'|'c5.large.elasticsearch'|'c5.xlarge.elasticsearch'|'c5.2xlarge.elasticsearch'|'c5.4xlarge.elasticsearch'|'c5.9xlarge.elasticsearch'|'c5.18xlarge.elasticsearch'|'ultrawarm1.medium.elasticsearch'|'ultrawarm1.large.elasticsearch'|'t2.micro.elasticsearch'|'t2.small.elasticsearch'|'t2.medium.elasticsearch'|'r3.large.elasticsearch'|'r3.xlarge.elasticsearch'|'r3.2xlarge.elasticsearch'|'r3.4xlarge.elasticsearch'|'r3.8xlarge.elasticsearch'|'i2.xlarge.elasticsearch'|'i2.2xlarge.elasticsearch'|'d2.xlarge.elasticsearch'|'d2.2xlarge.elasticsearch'|'d2.4xlarge.elasticsearch'|'d2.8xlarge.elasticsearch'|'c4.large.elasticsearch'|'c4.xlarge.elasticsearch'|'c4.2xlarge.elasticsearch'|'c4.4xlarge.elasticsearch'|'c4.8xlarge.elasticsearch'|'r4.large.elasticsearch'|'r4.xlarge.elasticsearch'|'r4.2xlarge.elasticsearch'|'r4.4xlarge.elasticsearch'|'r4.8xlarge.elasticsearch'|'r4.16xlarge.elasticsearch'|'i3.large.elasticsearch'|'i3.xlarge.elasticsearch'|'i3.2xlarge.elasticsearch'|'i3.4xlarge.elasticsearch'|'i3.8xlarge.elasticsearch'|'i3.16xlarge.elasticsearch',
            'InstanceCount': 123,
            'DedicatedMasterEnabled': True|False,
            'ZoneAwarenessEnabled': True|False,
            'ZoneAwarenessConfig': {
                'AvailabilityZoneCount': 123
            },
            'DedicatedMasterType': 'm3.medium.elasticsearch'|'m3.large.elasticsearch'|'m3.xlarge.elasticsearch'|'m3.2xlarge.elasticsearch'|'m4.large.elasticsearch'|'m4.xlarge.elasticsearch'|'m4.2xlarge.elasticsearch'|'m4.4xlarge.elasticsearch'|'m4.10xlarge.elasticsearch'|'m5.large.elasticsearch'|'m5.xlarge.elasticsearch'|'m5.2xlarge.elasticsearch'|'m5.4xlarge.elasticsearch'|'m5.12xlarge.elasticsearch'|'r5.large.elasticsearch'|'r5.xlarge.elasticsearch'|'r5.2xlarge.elasticsearch'|'r5.4xlarge.elasticsearch'|'r5.12xlarge.elasticsearch'|'c5.large.elasticsearch'|'c5.xlarge.elasticsearch'|'c5.2xlarge.elasticsearch'|'c5.4xlarge.elasticsearch'|'c5.9xlarge.elasticsearch'|'c5.18xlarge.elasticsearch'|'ultrawarm1.medium.elasticsearch'|'ultrawarm1.large.elasticsearch'|'t2.micro.elasticsearch'|'t2.small.elasticsearch'|'t2.medium.elasticsearch'|'r3.large.elasticsearch'|'r3.xlarge.elasticsearch'|'r3.2xlarge.elasticsearch'|'r3.4xlarge.elasticsearch'|'r3.8xlarge.elasticsearch'|'i2.xlarge.elasticsearch'|'i2.2xlarge.elasticsearch'|'d2.xlarge.elasticsearch'|'d2.2xlarge.elasticsearch'|'d2.4xlarge.elasticsearch'|'d2.8xlarge.elasticsearch'|'c4.large.elasticsearch'|'c4.xlarge.elasticsearch'|'c4.2xlarge.elasticsearch'|'c4.4xlarge.elasticsearch'|'c4.8xlarge.elasticsearch'|'r4.large.elasticsearch'|'r4.xlarge.elasticsearch'|'r4.2xlarge.elasticsearch'|'r4.4xlarge.elasticsearch'|'r4.8xlarge.elasticsearch'|'r4.16xlarge.elasticsearch'|'i3.large.elasticsearch'|'i3.xlarge.elasticsearch'|'i3.2xlarge.elasticsearch'|'i3.4xlarge.elasticsearch'|'i3.8xlarge.elasticsearch'|'i3.16xlarge.elasticsearch',
            'DedicatedMasterCount': 123,
            'WarmEnabled': True|False,
            'WarmType': 'ultrawarm1.medium.elasticsearch'|'ultrawarm1.large.elasticsearch',
            'WarmCount': 123
        },
        EBSOptions={
            'EBSEnabled': True|False,
            'VolumeType': 'standard'|'gp2'|'io1',
            'VolumeSize': 123,
            'Iops': 123
        },
        SnapshotOptions={
            'AutomatedSnapshotStartHour': 123
        },
        VPCOptions={
            'SubnetIds': [
                'string',
            ],
            'SecurityGroupIds': [
                'string',
            ]
        },
        CognitoOptions={
            'Enabled': True|False,
            'UserPoolId': 'string',
            'IdentityPoolId': 'string',
            'RoleArn': 'string'
        },
        AdvancedOptions={
            'string': 'string'
        },
        AccessPolicies='string',
        LogPublishingOptions={
            'string': {
                'CloudWatchLogsLogGroupArn': 'string',
                'Enabled': True|False
            }
        },
        DomainEndpointOptions={
            'EnforceHTTPS': True|False,
            'TLSSecurityPolicy': 'Policy-Min-TLS-1-0-2019-07'|'Policy-Min-TLS-1-2-2019-07'
        },
        AdvancedSecurityOptions={
            'Enabled': True|False,
            'InternalUserDatabaseEnabled': True|False,
            'MasterUserOptions': {
                'MasterUserARN': 'string',
                'MasterUserName': 'string',
                'MasterUserPassword': 'string'
            }
        }
    )
    
    
    :type DomainName: string
    :param DomainName: [REQUIRED]\nThe name of the Elasticsearch domain that you are updating.\n

    :type ElasticsearchClusterConfig: dict
    :param ElasticsearchClusterConfig: The type and number of instances to instantiate for the domain cluster.\n\nInstanceType (string) --The instance type for an Elasticsearch cluster. UltraWarm instance types are not supported for data instances.\n\nInstanceCount (integer) --The number of instances in the specified domain cluster.\n\nDedicatedMasterEnabled (boolean) --A boolean value to indicate whether a dedicated master node is enabled. See About Dedicated Master Nodes for more information.\n\nZoneAwarenessEnabled (boolean) --A boolean value to indicate whether zone awareness is enabled. See About Zone Awareness for more information.\n\nZoneAwarenessConfig (dict) --Specifies the zone awareness configuration for a domain when zone awareness is enabled.\n\nAvailabilityZoneCount (integer) --An integer value to indicate the number of availability zones for a domain when zone awareness is enabled. This should be equal to number of subnets if VPC endpoints is enabled\n\n\n\nDedicatedMasterType (string) --The instance type for a dedicated master node.\n\nDedicatedMasterCount (integer) --Total number of dedicated master nodes, active and on standby, for the cluster.\n\nWarmEnabled (boolean) --True to enable warm storage.\n\nWarmType (string) --The instance type for the Elasticsearch cluster\'s warm nodes.\n\nWarmCount (integer) --The number of warm nodes in the cluster.\n\n\n

    :type EBSOptions: dict
    :param EBSOptions: Specify the type and size of the EBS volume that you want to use.\n\nEBSEnabled (boolean) --Specifies whether EBS-based storage is enabled.\n\nVolumeType (string) --Specifies the volume type for EBS-based storage.\n\nVolumeSize (integer) --Integer to specify the size of an EBS volume.\n\nIops (integer) --Specifies the IOPD for a Provisioned IOPS EBS volume (SSD).\n\n\n

    :type SnapshotOptions: dict
    :param SnapshotOptions: Option to set the time, in UTC format, for the daily automated snapshot. Default value is 0 hours.\n\nAutomatedSnapshotStartHour (integer) --Specifies the time, in UTC format, when the service takes a daily automated snapshot of the specified Elasticsearch domain. Default value is 0 hours.\n\n\n

    :type VPCOptions: dict
    :param VPCOptions: Options to specify the subnets and security groups for VPC endpoint. For more information, see Creating a VPC in VPC Endpoints for Amazon Elasticsearch Service Domains\n\nSubnetIds (list) --Specifies the subnets for VPC endpoint.\n\n(string) --\n\n\nSecurityGroupIds (list) --Specifies the security groups for VPC endpoint.\n\n(string) --\n\n\n\n

    :type CognitoOptions: dict
    :param CognitoOptions: Options to specify the Cognito user and identity pools for Kibana authentication. For more information, see Amazon Cognito Authentication for Kibana .\n\nEnabled (boolean) --Specifies the option to enable Cognito for Kibana authentication.\n\nUserPoolId (string) --Specifies the Cognito user pool ID for Kibana authentication.\n\nIdentityPoolId (string) --Specifies the Cognito identity pool ID for Kibana authentication.\n\nRoleArn (string) --Specifies the role ARN that provides Elasticsearch permissions for accessing Cognito resources.\n\n\n

    :type AdvancedOptions: dict
    :param AdvancedOptions: Modifies the advanced option to allow references to indices in an HTTP request body. Must be false when configuring access to individual sub-resources. By default, the value is true . See Configuration Advanced Options for more information.\n\n(string) --\n(string) --\n\n\n\n

    :type AccessPolicies: string
    :param AccessPolicies: IAM access policy as a JSON-formatted string.

    :type LogPublishingOptions: dict
    :param LogPublishingOptions: Map of LogType and LogPublishingOption , each containing options to publish a given type of Elasticsearch log.\n\n(string) --Type of Log File, it can be one of the following:\n\nINDEX_SLOW_LOGS: Index slow logs contain insert requests that took more time than configured index query log threshold to execute.\nSEARCH_SLOW_LOGS: Search slow logs contain search queries that took more time than configured search query log threshold to execute.\nES_APPLICATION_LOGS: Elasticsearch application logs contain information about errors and warnings raised during the operation of the service and can be useful for troubleshooting.\n\n\n(dict) --Log Publishing option that is set for given domain. Attributes and their details:\n\nCloudWatchLogsLogGroupArn: ARN of the Cloudwatch log group to which log needs to be published.\nEnabled: Whether the log publishing for given log type is enabled or not\n\n\nCloudWatchLogsLogGroupArn (string) --ARN of the Cloudwatch log group to which log needs to be published.\n\nEnabled (boolean) --Specifies whether given log publishing option is enabled or not.\n\n\n\n\n\n\n

    :type DomainEndpointOptions: dict
    :param DomainEndpointOptions: Options to specify configuration that will be applied to the domain endpoint.\n\nEnforceHTTPS (boolean) --Specify if only HTTPS endpoint should be enabled for the Elasticsearch domain.\n\nTLSSecurityPolicy (string) --Specify the TLS security policy that needs to be applied to the HTTPS endpoint of Elasticsearch domain. It can be one of the following values:\n\nPolicy-Min-TLS-1-0-2019-07: TLS security policy which supports TLSv1.0 and higher.\nPolicy-Min-TLS-1-2-2019-07: TLS security policy which supports only TLSv1.2\n\n\n\n

    :type AdvancedSecurityOptions: dict
    :param AdvancedSecurityOptions: Specifies advanced security options.\n\nEnabled (boolean) --True if advanced security is enabled.\n\nInternalUserDatabaseEnabled (boolean) --True if the internal user database is enabled.\n\nMasterUserOptions (dict) --Credentials for the master user: username and password, ARN, or both.\n\nMasterUserARN (string) --ARN for the master user (if IAM is enabled).\n\nMasterUserName (string) --The master user\'s username, which is stored in the Amazon Elasticsearch Service domain\'s internal database.\n\nMasterUserPassword (string) --The master user\'s password, which is stored in the Amazon Elasticsearch Service domain\'s internal database.\n\n\n\n\n

    :rtype: dict

ReturnsResponse Syntax
{
    'DomainConfig': {
        'ElasticsearchVersion': {
            'Options': 'string',
            'Status': {
                'CreationDate': datetime(2015, 1, 1),
                'UpdateDate': datetime(2015, 1, 1),
                'UpdateVersion': 123,
                'State': 'RequiresIndexDocuments'|'Processing'|'Active',
                'PendingDeletion': True|False
            }
        },
        'ElasticsearchClusterConfig': {
            'Options': {
                'InstanceType': 'm3.medium.elasticsearch'|'m3.large.elasticsearch'|'m3.xlarge.elasticsearch'|'m3.2xlarge.elasticsearch'|'m4.large.elasticsearch'|'m4.xlarge.elasticsearch'|'m4.2xlarge.elasticsearch'|'m4.4xlarge.elasticsearch'|'m4.10xlarge.elasticsearch'|'m5.large.elasticsearch'|'m5.xlarge.elasticsearch'|'m5.2xlarge.elasticsearch'|'m5.4xlarge.elasticsearch'|'m5.12xlarge.elasticsearch'|'r5.large.elasticsearch'|'r5.xlarge.elasticsearch'|'r5.2xlarge.elasticsearch'|'r5.4xlarge.elasticsearch'|'r5.12xlarge.elasticsearch'|'c5.large.elasticsearch'|'c5.xlarge.elasticsearch'|'c5.2xlarge.elasticsearch'|'c5.4xlarge.elasticsearch'|'c5.9xlarge.elasticsearch'|'c5.18xlarge.elasticsearch'|'ultrawarm1.medium.elasticsearch'|'ultrawarm1.large.elasticsearch'|'t2.micro.elasticsearch'|'t2.small.elasticsearch'|'t2.medium.elasticsearch'|'r3.large.elasticsearch'|'r3.xlarge.elasticsearch'|'r3.2xlarge.elasticsearch'|'r3.4xlarge.elasticsearch'|'r3.8xlarge.elasticsearch'|'i2.xlarge.elasticsearch'|'i2.2xlarge.elasticsearch'|'d2.xlarge.elasticsearch'|'d2.2xlarge.elasticsearch'|'d2.4xlarge.elasticsearch'|'d2.8xlarge.elasticsearch'|'c4.large.elasticsearch'|'c4.xlarge.elasticsearch'|'c4.2xlarge.elasticsearch'|'c4.4xlarge.elasticsearch'|'c4.8xlarge.elasticsearch'|'r4.large.elasticsearch'|'r4.xlarge.elasticsearch'|'r4.2xlarge.elasticsearch'|'r4.4xlarge.elasticsearch'|'r4.8xlarge.elasticsearch'|'r4.16xlarge.elasticsearch'|'i3.large.elasticsearch'|'i3.xlarge.elasticsearch'|'i3.2xlarge.elasticsearch'|'i3.4xlarge.elasticsearch'|'i3.8xlarge.elasticsearch'|'i3.16xlarge.elasticsearch',
                'InstanceCount': 123,
                'DedicatedMasterEnabled': True|False,
                'ZoneAwarenessEnabled': True|False,
                'ZoneAwarenessConfig': {
                    'AvailabilityZoneCount': 123
                },
                'DedicatedMasterType': 'm3.medium.elasticsearch'|'m3.large.elasticsearch'|'m3.xlarge.elasticsearch'|'m3.2xlarge.elasticsearch'|'m4.large.elasticsearch'|'m4.xlarge.elasticsearch'|'m4.2xlarge.elasticsearch'|'m4.4xlarge.elasticsearch'|'m4.10xlarge.elasticsearch'|'m5.large.elasticsearch'|'m5.xlarge.elasticsearch'|'m5.2xlarge.elasticsearch'|'m5.4xlarge.elasticsearch'|'m5.12xlarge.elasticsearch'|'r5.large.elasticsearch'|'r5.xlarge.elasticsearch'|'r5.2xlarge.elasticsearch'|'r5.4xlarge.elasticsearch'|'r5.12xlarge.elasticsearch'|'c5.large.elasticsearch'|'c5.xlarge.elasticsearch'|'c5.2xlarge.elasticsearch'|'c5.4xlarge.elasticsearch'|'c5.9xlarge.elasticsearch'|'c5.18xlarge.elasticsearch'|'ultrawarm1.medium.elasticsearch'|'ultrawarm1.large.elasticsearch'|'t2.micro.elasticsearch'|'t2.small.elasticsearch'|'t2.medium.elasticsearch'|'r3.large.elasticsearch'|'r3.xlarge.elasticsearch'|'r3.2xlarge.elasticsearch'|'r3.4xlarge.elasticsearch'|'r3.8xlarge.elasticsearch'|'i2.xlarge.elasticsearch'|'i2.2xlarge.elasticsearch'|'d2.xlarge.elasticsearch'|'d2.2xlarge.elasticsearch'|'d2.4xlarge.elasticsearch'|'d2.8xlarge.elasticsearch'|'c4.large.elasticsearch'|'c4.xlarge.elasticsearch'|'c4.2xlarge.elasticsearch'|'c4.4xlarge.elasticsearch'|'c4.8xlarge.elasticsearch'|'r4.large.elasticsearch'|'r4.xlarge.elasticsearch'|'r4.2xlarge.elasticsearch'|'r4.4xlarge.elasticsearch'|'r4.8xlarge.elasticsearch'|'r4.16xlarge.elasticsearch'|'i3.large.elasticsearch'|'i3.xlarge.elasticsearch'|'i3.2xlarge.elasticsearch'|'i3.4xlarge.elasticsearch'|'i3.8xlarge.elasticsearch'|'i3.16xlarge.elasticsearch',
                'DedicatedMasterCount': 123,
                'WarmEnabled': True|False,
                'WarmType': 'ultrawarm1.medium.elasticsearch'|'ultrawarm1.large.elasticsearch',
                'WarmCount': 123
            },
            'Status': {
                'CreationDate': datetime(2015, 1, 1),
                'UpdateDate': datetime(2015, 1, 1),
                'UpdateVersion': 123,
                'State': 'RequiresIndexDocuments'|'Processing'|'Active',
                'PendingDeletion': True|False
            }
        },
        'EBSOptions': {
            'Options': {
                'EBSEnabled': True|False,
                'VolumeType': 'standard'|'gp2'|'io1',
                'VolumeSize': 123,
                'Iops': 123
            },
            'Status': {
                'CreationDate': datetime(2015, 1, 1),
                'UpdateDate': datetime(2015, 1, 1),
                'UpdateVersion': 123,
                'State': 'RequiresIndexDocuments'|'Processing'|'Active',
                'PendingDeletion': True|False
            }
        },
        'AccessPolicies': {
            'Options': 'string',
            'Status': {
                'CreationDate': datetime(2015, 1, 1),
                'UpdateDate': datetime(2015, 1, 1),
                'UpdateVersion': 123,
                'State': 'RequiresIndexDocuments'|'Processing'|'Active',
                'PendingDeletion': True|False
            }
        },
        'SnapshotOptions': {
            'Options': {
                'AutomatedSnapshotStartHour': 123
            },
            'Status': {
                'CreationDate': datetime(2015, 1, 1),
                'UpdateDate': datetime(2015, 1, 1),
                'UpdateVersion': 123,
                'State': 'RequiresIndexDocuments'|'Processing'|'Active',
                'PendingDeletion': True|False
            }
        },
        'VPCOptions': {
            'Options': {
                'VPCId': 'string',
                'SubnetIds': [
                    'string',
                ],
                'AvailabilityZones': [
                    'string',
                ],
                'SecurityGroupIds': [
                    'string',
                ]
            },
            'Status': {
                'CreationDate': datetime(2015, 1, 1),
                'UpdateDate': datetime(2015, 1, 1),
                'UpdateVersion': 123,
                'State': 'RequiresIndexDocuments'|'Processing'|'Active',
                'PendingDeletion': True|False
            }
        },
        'CognitoOptions': {
            'Options': {
                'Enabled': True|False,
                'UserPoolId': 'string',
                'IdentityPoolId': 'string',
                'RoleArn': 'string'
            },
            'Status': {
                'CreationDate': datetime(2015, 1, 1),
                'UpdateDate': datetime(2015, 1, 1),
                'UpdateVersion': 123,
                'State': 'RequiresIndexDocuments'|'Processing'|'Active',
                'PendingDeletion': True|False
            }
        },
        'EncryptionAtRestOptions': {
            'Options': {
                'Enabled': True|False,
                'KmsKeyId': 'string'
            },
            'Status': {
                'CreationDate': datetime(2015, 1, 1),
                'UpdateDate': datetime(2015, 1, 1),
                'UpdateVersion': 123,
                'State': 'RequiresIndexDocuments'|'Processing'|'Active',
                'PendingDeletion': True|False
            }
        },
        'NodeToNodeEncryptionOptions': {
            'Options': {
                'Enabled': True|False
            },
            'Status': {
                'CreationDate': datetime(2015, 1, 1),
                'UpdateDate': datetime(2015, 1, 1),
                'UpdateVersion': 123,
                'State': 'RequiresIndexDocuments'|'Processing'|'Active',
                'PendingDeletion': True|False
            }
        },
        'AdvancedOptions': {
            'Options': {
                'string': 'string'
            },
            'Status': {
                'CreationDate': datetime(2015, 1, 1),
                'UpdateDate': datetime(2015, 1, 1),
                'UpdateVersion': 123,
                'State': 'RequiresIndexDocuments'|'Processing'|'Active',
                'PendingDeletion': True|False
            }
        },
        'LogPublishingOptions': {
            'Options': {
                'string': {
                    'CloudWatchLogsLogGroupArn': 'string',
                    'Enabled': True|False
                }
            },
            'Status': {
                'CreationDate': datetime(2015, 1, 1),
                'UpdateDate': datetime(2015, 1, 1),
                'UpdateVersion': 123,
                'State': 'RequiresIndexDocuments'|'Processing'|'Active',
                'PendingDeletion': True|False
            }
        },
        'DomainEndpointOptions': {
            'Options': {
                'EnforceHTTPS': True|False,
                'TLSSecurityPolicy': 'Policy-Min-TLS-1-0-2019-07'|'Policy-Min-TLS-1-2-2019-07'
            },
            'Status': {
                'CreationDate': datetime(2015, 1, 1),
                'UpdateDate': datetime(2015, 1, 1),
                'UpdateVersion': 123,
                'State': 'RequiresIndexDocuments'|'Processing'|'Active',
                'PendingDeletion': True|False
            }
        },
        'AdvancedSecurityOptions': {
            'Options': {
                'Enabled': True|False,
                'InternalUserDatabaseEnabled': True|False
            },
            'Status': {
                'CreationDate': datetime(2015, 1, 1),
                'UpdateDate': datetime(2015, 1, 1),
                'UpdateVersion': 123,
                'State': 'RequiresIndexDocuments'|'Processing'|'Active',
                'PendingDeletion': True|False
            }
        }
    }
}


Response Structure

(dict) --
The result of an UpdateElasticsearchDomain request. Contains the status of the Elasticsearch domain being updated.

DomainConfig (dict) --
The status of the updated Elasticsearch domain.

ElasticsearchVersion (dict) --
String of format X.Y to specify version for the Elasticsearch domain.

Options (string) --
Specifies the Elasticsearch version for the specified Elasticsearch domain.

Status (dict) --
Specifies the status of the Elasticsearch version options for the specified Elasticsearch domain.

CreationDate (datetime) --
Timestamp which tells the creation date for the entity.

UpdateDate (datetime) --
Timestamp which tells the last updated time for the entity.

UpdateVersion (integer) --
Specifies the latest version for the entity.

State (string) --
Provides the OptionState for the Elasticsearch domain.

PendingDeletion (boolean) --
Indicates whether the Elasticsearch domain is being deleted.





ElasticsearchClusterConfig (dict) --
Specifies the ElasticsearchClusterConfig for the Elasticsearch domain.

Options (dict) --
Specifies the cluster configuration for the specified Elasticsearch domain.

InstanceType (string) --
The instance type for an Elasticsearch cluster. UltraWarm instance types are not supported for data instances.

InstanceCount (integer) --
The number of instances in the specified domain cluster.

DedicatedMasterEnabled (boolean) --
A boolean value to indicate whether a dedicated master node is enabled. See About Dedicated Master Nodes for more information.

ZoneAwarenessEnabled (boolean) --
A boolean value to indicate whether zone awareness is enabled. See About Zone Awareness for more information.

ZoneAwarenessConfig (dict) --
Specifies the zone awareness configuration for a domain when zone awareness is enabled.

AvailabilityZoneCount (integer) --
An integer value to indicate the number of availability zones for a domain when zone awareness is enabled. This should be equal to number of subnets if VPC endpoints is enabled



DedicatedMasterType (string) --
The instance type for a dedicated master node.

DedicatedMasterCount (integer) --
Total number of dedicated master nodes, active and on standby, for the cluster.

WarmEnabled (boolean) --
True to enable warm storage.

WarmType (string) --
The instance type for the Elasticsearch cluster\'s warm nodes.

WarmCount (integer) --
The number of warm nodes in the cluster.



Status (dict) --
Specifies the status of the configuration for the specified Elasticsearch domain.

CreationDate (datetime) --
Timestamp which tells the creation date for the entity.

UpdateDate (datetime) --
Timestamp which tells the last updated time for the entity.

UpdateVersion (integer) --
Specifies the latest version for the entity.

State (string) --
Provides the OptionState for the Elasticsearch domain.

PendingDeletion (boolean) --
Indicates whether the Elasticsearch domain is being deleted.





EBSOptions (dict) --
Specifies the EBSOptions for the Elasticsearch domain.

Options (dict) --
Specifies the EBS options for the specified Elasticsearch domain.

EBSEnabled (boolean) --
Specifies whether EBS-based storage is enabled.

VolumeType (string) --
Specifies the volume type for EBS-based storage.

VolumeSize (integer) --
Integer to specify the size of an EBS volume.

Iops (integer) --
Specifies the IOPD for a Provisioned IOPS EBS volume (SSD).



Status (dict) --
Specifies the status of the EBS options for the specified Elasticsearch domain.

CreationDate (datetime) --
Timestamp which tells the creation date for the entity.

UpdateDate (datetime) --
Timestamp which tells the last updated time for the entity.

UpdateVersion (integer) --
Specifies the latest version for the entity.

State (string) --
Provides the OptionState for the Elasticsearch domain.

PendingDeletion (boolean) --
Indicates whether the Elasticsearch domain is being deleted.





AccessPolicies (dict) --
IAM access policy as a JSON-formatted string.

Options (string) --
The access policy configured for the Elasticsearch domain. Access policies may be resource-based, IP-based, or IAM-based. See Configuring Access Policies for more information.

Status (dict) --
The status of the access policy for the Elasticsearch domain. See OptionStatus for the status information that\'s included.

CreationDate (datetime) --
Timestamp which tells the creation date for the entity.

UpdateDate (datetime) --
Timestamp which tells the last updated time for the entity.

UpdateVersion (integer) --
Specifies the latest version for the entity.

State (string) --
Provides the OptionState for the Elasticsearch domain.

PendingDeletion (boolean) --
Indicates whether the Elasticsearch domain is being deleted.





SnapshotOptions (dict) --
Specifies the SnapshotOptions for the Elasticsearch domain.

Options (dict) --
Specifies the daily snapshot options specified for the Elasticsearch domain.

AutomatedSnapshotStartHour (integer) --
Specifies the time, in UTC format, when the service takes a daily automated snapshot of the specified Elasticsearch domain. Default value is 0 hours.



Status (dict) --
Specifies the status of a daily automated snapshot.

CreationDate (datetime) --
Timestamp which tells the creation date for the entity.

UpdateDate (datetime) --
Timestamp which tells the last updated time for the entity.

UpdateVersion (integer) --
Specifies the latest version for the entity.

State (string) --
Provides the OptionState for the Elasticsearch domain.

PendingDeletion (boolean) --
Indicates whether the Elasticsearch domain is being deleted.





VPCOptions (dict) --
The VPCOptions for the specified domain. For more information, see VPC Endpoints for Amazon Elasticsearch Service Domains .

Options (dict) --
Specifies the VPC options for the specified Elasticsearch domain.

VPCId (string) --
The VPC Id for the Elasticsearch domain. Exists only if the domain was created with VPCOptions.

SubnetIds (list) --
Specifies the subnets for VPC endpoint.

(string) --


AvailabilityZones (list) --
The availability zones for the Elasticsearch domain. Exists only if the domain was created with VPCOptions.

(string) --


SecurityGroupIds (list) --
Specifies the security groups for VPC endpoint.

(string) --




Status (dict) --
Specifies the status of the VPC options for the specified Elasticsearch domain.

CreationDate (datetime) --
Timestamp which tells the creation date for the entity.

UpdateDate (datetime) --
Timestamp which tells the last updated time for the entity.

UpdateVersion (integer) --
Specifies the latest version for the entity.

State (string) --
Provides the OptionState for the Elasticsearch domain.

PendingDeletion (boolean) --
Indicates whether the Elasticsearch domain is being deleted.





CognitoOptions (dict) --
The CognitoOptions for the specified domain. For more information, see Amazon Cognito Authentication for Kibana .

Options (dict) --
Specifies the Cognito options for the specified Elasticsearch domain.

Enabled (boolean) --
Specifies the option to enable Cognito for Kibana authentication.

UserPoolId (string) --
Specifies the Cognito user pool ID for Kibana authentication.

IdentityPoolId (string) --
Specifies the Cognito identity pool ID for Kibana authentication.

RoleArn (string) --
Specifies the role ARN that provides Elasticsearch permissions for accessing Cognito resources.



Status (dict) --
Specifies the status of the Cognito options for the specified Elasticsearch domain.

CreationDate (datetime) --
Timestamp which tells the creation date for the entity.

UpdateDate (datetime) --
Timestamp which tells the last updated time for the entity.

UpdateVersion (integer) --
Specifies the latest version for the entity.

State (string) --
Provides the OptionState for the Elasticsearch domain.

PendingDeletion (boolean) --
Indicates whether the Elasticsearch domain is being deleted.





EncryptionAtRestOptions (dict) --
Specifies the EncryptionAtRestOptions for the Elasticsearch domain.

Options (dict) --
Specifies the Encryption At Rest options for the specified Elasticsearch domain.

Enabled (boolean) --
Specifies the option to enable Encryption At Rest.

KmsKeyId (string) --
Specifies the KMS Key ID for Encryption At Rest options.



Status (dict) --
Specifies the status of the Encryption At Rest options for the specified Elasticsearch domain.

CreationDate (datetime) --
Timestamp which tells the creation date for the entity.

UpdateDate (datetime) --
Timestamp which tells the last updated time for the entity.

UpdateVersion (integer) --
Specifies the latest version for the entity.

State (string) --
Provides the OptionState for the Elasticsearch domain.

PendingDeletion (boolean) --
Indicates whether the Elasticsearch domain is being deleted.





NodeToNodeEncryptionOptions (dict) --
Specifies the NodeToNodeEncryptionOptions for the Elasticsearch domain.

Options (dict) --
Specifies the node-to-node encryption options for the specified Elasticsearch domain.

Enabled (boolean) --
Specify true to enable node-to-node encryption.



Status (dict) --
Specifies the status of the node-to-node encryption options for the specified Elasticsearch domain.

CreationDate (datetime) --
Timestamp which tells the creation date for the entity.

UpdateDate (datetime) --
Timestamp which tells the last updated time for the entity.

UpdateVersion (integer) --
Specifies the latest version for the entity.

State (string) --
Provides the OptionState for the Elasticsearch domain.

PendingDeletion (boolean) --
Indicates whether the Elasticsearch domain is being deleted.





AdvancedOptions (dict) --
Specifies the AdvancedOptions for the domain. See Configuring Advanced Options for more information.

Options (dict) --
Specifies the status of advanced options for the specified Elasticsearch domain.

(string) --
(string) --




Status (dict) --
Specifies the status of OptionStatus for advanced options for the specified Elasticsearch domain.

CreationDate (datetime) --
Timestamp which tells the creation date for the entity.

UpdateDate (datetime) --
Timestamp which tells the last updated time for the entity.

UpdateVersion (integer) --
Specifies the latest version for the entity.

State (string) --
Provides the OptionState for the Elasticsearch domain.

PendingDeletion (boolean) --
Indicates whether the Elasticsearch domain is being deleted.





LogPublishingOptions (dict) --
Log publishing options for the given domain.

Options (dict) --
The log publishing options configured for the Elasticsearch domain.

(string) --
Type of Log File, it can be one of the following:

INDEX_SLOW_LOGS: Index slow logs contain insert requests that took more time than configured index query log threshold to execute.
SEARCH_SLOW_LOGS: Search slow logs contain search queries that took more time than configured search query log threshold to execute.
ES_APPLICATION_LOGS: Elasticsearch application logs contain information about errors and warnings raised during the operation of the service and can be useful for troubleshooting.


(dict) --
Log Publishing option that is set for given domain. Attributes and their details:

CloudWatchLogsLogGroupArn: ARN of the Cloudwatch log group to which log needs to be published.
Enabled: Whether the log publishing for given log type is enabled or not


CloudWatchLogsLogGroupArn (string) --
ARN of the Cloudwatch log group to which log needs to be published.

Enabled (boolean) --
Specifies whether given log publishing option is enabled or not.







Status (dict) --
The status of the log publishing options for the Elasticsearch domain. See OptionStatus for the status information that\'s included.

CreationDate (datetime) --
Timestamp which tells the creation date for the entity.

UpdateDate (datetime) --
Timestamp which tells the last updated time for the entity.

UpdateVersion (integer) --
Specifies the latest version for the entity.

State (string) --
Provides the OptionState for the Elasticsearch domain.

PendingDeletion (boolean) --
Indicates whether the Elasticsearch domain is being deleted.





DomainEndpointOptions (dict) --
Specifies the DomainEndpointOptions for the Elasticsearch domain.

Options (dict) --
Options to configure endpoint for the Elasticsearch domain.

EnforceHTTPS (boolean) --
Specify if only HTTPS endpoint should be enabled for the Elasticsearch domain.

TLSSecurityPolicy (string) --
Specify the TLS security policy that needs to be applied to the HTTPS endpoint of Elasticsearch domain. It can be one of the following values:

Policy-Min-TLS-1-0-2019-07: TLS security policy which supports TLSv1.0 and higher.
Policy-Min-TLS-1-2-2019-07: TLS security policy which supports only TLSv1.2




Status (dict) --
The status of the endpoint options for the Elasticsearch domain. See OptionStatus for the status information that\'s included.

CreationDate (datetime) --
Timestamp which tells the creation date for the entity.

UpdateDate (datetime) --
Timestamp which tells the last updated time for the entity.

UpdateVersion (integer) --
Specifies the latest version for the entity.

State (string) --
Provides the OptionState for the Elasticsearch domain.

PendingDeletion (boolean) --
Indicates whether the Elasticsearch domain is being deleted.





AdvancedSecurityOptions (dict) --
Specifies AdvancedSecurityOptions for the domain.

Options (dict) --
Specifies advanced security options for the specified Elasticsearch domain.

Enabled (boolean) --
True if advanced security is enabled.

InternalUserDatabaseEnabled (boolean) --
True if the internal user database is enabled.



Status (dict) --
Status of the advanced security options for the specified Elasticsearch domain.

CreationDate (datetime) --
Timestamp which tells the creation date for the entity.

UpdateDate (datetime) --
Timestamp which tells the last updated time for the entity.

UpdateVersion (integer) --
Specifies the latest version for the entity.

State (string) --
Provides the OptionState for the Elasticsearch domain.

PendingDeletion (boolean) --
Indicates whether the Elasticsearch domain is being deleted.













Exceptions

ElasticsearchService.Client.exceptions.BaseException
ElasticsearchService.Client.exceptions.InternalException
ElasticsearchService.Client.exceptions.InvalidTypeException
ElasticsearchService.Client.exceptions.LimitExceededException
ElasticsearchService.Client.exceptions.ResourceNotFoundException
ElasticsearchService.Client.exceptions.ValidationException


    :return: {
        'DomainConfig': {
            'ElasticsearchVersion': {
                'Options': 'string',
                'Status': {
                    'CreationDate': datetime(2015, 1, 1),
                    'UpdateDate': datetime(2015, 1, 1),
                    'UpdateVersion': 123,
                    'State': 'RequiresIndexDocuments'|'Processing'|'Active',
                    'PendingDeletion': True|False
                }
            },
            'ElasticsearchClusterConfig': {
                'Options': {
                    'InstanceType': 'm3.medium.elasticsearch'|'m3.large.elasticsearch'|'m3.xlarge.elasticsearch'|'m3.2xlarge.elasticsearch'|'m4.large.elasticsearch'|'m4.xlarge.elasticsearch'|'m4.2xlarge.elasticsearch'|'m4.4xlarge.elasticsearch'|'m4.10xlarge.elasticsearch'|'m5.large.elasticsearch'|'m5.xlarge.elasticsearch'|'m5.2xlarge.elasticsearch'|'m5.4xlarge.elasticsearch'|'m5.12xlarge.elasticsearch'|'r5.large.elasticsearch'|'r5.xlarge.elasticsearch'|'r5.2xlarge.elasticsearch'|'r5.4xlarge.elasticsearch'|'r5.12xlarge.elasticsearch'|'c5.large.elasticsearch'|'c5.xlarge.elasticsearch'|'c5.2xlarge.elasticsearch'|'c5.4xlarge.elasticsearch'|'c5.9xlarge.elasticsearch'|'c5.18xlarge.elasticsearch'|'ultrawarm1.medium.elasticsearch'|'ultrawarm1.large.elasticsearch'|'t2.micro.elasticsearch'|'t2.small.elasticsearch'|'t2.medium.elasticsearch'|'r3.large.elasticsearch'|'r3.xlarge.elasticsearch'|'r3.2xlarge.elasticsearch'|'r3.4xlarge.elasticsearch'|'r3.8xlarge.elasticsearch'|'i2.xlarge.elasticsearch'|'i2.2xlarge.elasticsearch'|'d2.xlarge.elasticsearch'|'d2.2xlarge.elasticsearch'|'d2.4xlarge.elasticsearch'|'d2.8xlarge.elasticsearch'|'c4.large.elasticsearch'|'c4.xlarge.elasticsearch'|'c4.2xlarge.elasticsearch'|'c4.4xlarge.elasticsearch'|'c4.8xlarge.elasticsearch'|'r4.large.elasticsearch'|'r4.xlarge.elasticsearch'|'r4.2xlarge.elasticsearch'|'r4.4xlarge.elasticsearch'|'r4.8xlarge.elasticsearch'|'r4.16xlarge.elasticsearch'|'i3.large.elasticsearch'|'i3.xlarge.elasticsearch'|'i3.2xlarge.elasticsearch'|'i3.4xlarge.elasticsearch'|'i3.8xlarge.elasticsearch'|'i3.16xlarge.elasticsearch',
                    'InstanceCount': 123,
                    'DedicatedMasterEnabled': True|False,
                    'ZoneAwarenessEnabled': True|False,
                    'ZoneAwarenessConfig': {
                        'AvailabilityZoneCount': 123
                    },
                    'DedicatedMasterType': 'm3.medium.elasticsearch'|'m3.large.elasticsearch'|'m3.xlarge.elasticsearch'|'m3.2xlarge.elasticsearch'|'m4.large.elasticsearch'|'m4.xlarge.elasticsearch'|'m4.2xlarge.elasticsearch'|'m4.4xlarge.elasticsearch'|'m4.10xlarge.elasticsearch'|'m5.large.elasticsearch'|'m5.xlarge.elasticsearch'|'m5.2xlarge.elasticsearch'|'m5.4xlarge.elasticsearch'|'m5.12xlarge.elasticsearch'|'r5.large.elasticsearch'|'r5.xlarge.elasticsearch'|'r5.2xlarge.elasticsearch'|'r5.4xlarge.elasticsearch'|'r5.12xlarge.elasticsearch'|'c5.large.elasticsearch'|'c5.xlarge.elasticsearch'|'c5.2xlarge.elasticsearch'|'c5.4xlarge.elasticsearch'|'c5.9xlarge.elasticsearch'|'c5.18xlarge.elasticsearch'|'ultrawarm1.medium.elasticsearch'|'ultrawarm1.large.elasticsearch'|'t2.micro.elasticsearch'|'t2.small.elasticsearch'|'t2.medium.elasticsearch'|'r3.large.elasticsearch'|'r3.xlarge.elasticsearch'|'r3.2xlarge.elasticsearch'|'r3.4xlarge.elasticsearch'|'r3.8xlarge.elasticsearch'|'i2.xlarge.elasticsearch'|'i2.2xlarge.elasticsearch'|'d2.xlarge.elasticsearch'|'d2.2xlarge.elasticsearch'|'d2.4xlarge.elasticsearch'|'d2.8xlarge.elasticsearch'|'c4.large.elasticsearch'|'c4.xlarge.elasticsearch'|'c4.2xlarge.elasticsearch'|'c4.4xlarge.elasticsearch'|'c4.8xlarge.elasticsearch'|'r4.large.elasticsearch'|'r4.xlarge.elasticsearch'|'r4.2xlarge.elasticsearch'|'r4.4xlarge.elasticsearch'|'r4.8xlarge.elasticsearch'|'r4.16xlarge.elasticsearch'|'i3.large.elasticsearch'|'i3.xlarge.elasticsearch'|'i3.2xlarge.elasticsearch'|'i3.4xlarge.elasticsearch'|'i3.8xlarge.elasticsearch'|'i3.16xlarge.elasticsearch',
                    'DedicatedMasterCount': 123,
                    'WarmEnabled': True|False,
                    'WarmType': 'ultrawarm1.medium.elasticsearch'|'ultrawarm1.large.elasticsearch',
                    'WarmCount': 123
                },
                'Status': {
                    'CreationDate': datetime(2015, 1, 1),
                    'UpdateDate': datetime(2015, 1, 1),
                    'UpdateVersion': 123,
                    'State': 'RequiresIndexDocuments'|'Processing'|'Active',
                    'PendingDeletion': True|False
                }
            },
            'EBSOptions': {
                'Options': {
                    'EBSEnabled': True|False,
                    'VolumeType': 'standard'|'gp2'|'io1',
                    'VolumeSize': 123,
                    'Iops': 123
                },
                'Status': {
                    'CreationDate': datetime(2015, 1, 1),
                    'UpdateDate': datetime(2015, 1, 1),
                    'UpdateVersion': 123,
                    'State': 'RequiresIndexDocuments'|'Processing'|'Active',
                    'PendingDeletion': True|False
                }
            },
            'AccessPolicies': {
                'Options': 'string',
                'Status': {
                    'CreationDate': datetime(2015, 1, 1),
                    'UpdateDate': datetime(2015, 1, 1),
                    'UpdateVersion': 123,
                    'State': 'RequiresIndexDocuments'|'Processing'|'Active',
                    'PendingDeletion': True|False
                }
            },
            'SnapshotOptions': {
                'Options': {
                    'AutomatedSnapshotStartHour': 123
                },
                'Status': {
                    'CreationDate': datetime(2015, 1, 1),
                    'UpdateDate': datetime(2015, 1, 1),
                    'UpdateVersion': 123,
                    'State': 'RequiresIndexDocuments'|'Processing'|'Active',
                    'PendingDeletion': True|False
                }
            },
            'VPCOptions': {
                'Options': {
                    'VPCId': 'string',
                    'SubnetIds': [
                        'string',
                    ],
                    'AvailabilityZones': [
                        'string',
                    ],
                    'SecurityGroupIds': [
                        'string',
                    ]
                },
                'Status': {
                    'CreationDate': datetime(2015, 1, 1),
                    'UpdateDate': datetime(2015, 1, 1),
                    'UpdateVersion': 123,
                    'State': 'RequiresIndexDocuments'|'Processing'|'Active',
                    'PendingDeletion': True|False
                }
            },
            'CognitoOptions': {
                'Options': {
                    'Enabled': True|False,
                    'UserPoolId': 'string',
                    'IdentityPoolId': 'string',
                    'RoleArn': 'string'
                },
                'Status': {
                    'CreationDate': datetime(2015, 1, 1),
                    'UpdateDate': datetime(2015, 1, 1),
                    'UpdateVersion': 123,
                    'State': 'RequiresIndexDocuments'|'Processing'|'Active',
                    'PendingDeletion': True|False
                }
            },
            'EncryptionAtRestOptions': {
                'Options': {
                    'Enabled': True|False,
                    'KmsKeyId': 'string'
                },
                'Status': {
                    'CreationDate': datetime(2015, 1, 1),
                    'UpdateDate': datetime(2015, 1, 1),
                    'UpdateVersion': 123,
                    'State': 'RequiresIndexDocuments'|'Processing'|'Active',
                    'PendingDeletion': True|False
                }
            },
            'NodeToNodeEncryptionOptions': {
                'Options': {
                    'Enabled': True|False
                },
                'Status': {
                    'CreationDate': datetime(2015, 1, 1),
                    'UpdateDate': datetime(2015, 1, 1),
                    'UpdateVersion': 123,
                    'State': 'RequiresIndexDocuments'|'Processing'|'Active',
                    'PendingDeletion': True|False
                }
            },
            'AdvancedOptions': {
                'Options': {
                    'string': 'string'
                },
                'Status': {
                    'CreationDate': datetime(2015, 1, 1),
                    'UpdateDate': datetime(2015, 1, 1),
                    'UpdateVersion': 123,
                    'State': 'RequiresIndexDocuments'|'Processing'|'Active',
                    'PendingDeletion': True|False
                }
            },
            'LogPublishingOptions': {
                'Options': {
                    'string': {
                        'CloudWatchLogsLogGroupArn': 'string',
                        'Enabled': True|False
                    }
                },
                'Status': {
                    'CreationDate': datetime(2015, 1, 1),
                    'UpdateDate': datetime(2015, 1, 1),
                    'UpdateVersion': 123,
                    'State': 'RequiresIndexDocuments'|'Processing'|'Active',
                    'PendingDeletion': True|False
                }
            },
            'DomainEndpointOptions': {
                'Options': {
                    'EnforceHTTPS': True|False,
                    'TLSSecurityPolicy': 'Policy-Min-TLS-1-0-2019-07'|'Policy-Min-TLS-1-2-2019-07'
                },
                'Status': {
                    'CreationDate': datetime(2015, 1, 1),
                    'UpdateDate': datetime(2015, 1, 1),
                    'UpdateVersion': 123,
                    'State': 'RequiresIndexDocuments'|'Processing'|'Active',
                    'PendingDeletion': True|False
                }
            },
            'AdvancedSecurityOptions': {
                'Options': {
                    'Enabled': True|False,
                    'InternalUserDatabaseEnabled': True|False
                },
                'Status': {
                    'CreationDate': datetime(2015, 1, 1),
                    'UpdateDate': datetime(2015, 1, 1),
                    'UpdateVersion': 123,
                    'State': 'RequiresIndexDocuments'|'Processing'|'Active',
                    'PendingDeletion': True|False
                }
            }
        }
    }
    
    
    :returns: 
    (string) --
    
    """
    pass

def upgrade_elasticsearch_domain(DomainName=None, TargetVersion=None, PerformCheckOnly=None):
    """
    Allows you to either upgrade your domain or perform an Upgrade eligibility check to a compatible Elasticsearch version.
    See also: AWS API Documentation
    
    Exceptions
    
    :example: response = client.upgrade_elasticsearch_domain(
        DomainName='string',
        TargetVersion='string',
        PerformCheckOnly=True|False
    )
    
    
    :type DomainName: string
    :param DomainName: [REQUIRED]\nThe name of an Elasticsearch domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).\n

    :type TargetVersion: string
    :param TargetVersion: [REQUIRED]\nThe version of Elasticsearch that you intend to upgrade the domain to.\n

    :type PerformCheckOnly: boolean
    :param PerformCheckOnly: This flag, when set to True, indicates that an Upgrade Eligibility Check needs to be performed. This will not actually perform the Upgrade.

    :rtype: dict

ReturnsResponse Syntax
{
    'DomainName': 'string',
    'TargetVersion': 'string',
    'PerformCheckOnly': True|False
}


Response Structure

(dict) --
Container for response returned by ``  UpgradeElasticsearchDomain `` operation.

DomainName (string) --
The name of an Elasticsearch domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).

TargetVersion (string) --
The version of Elasticsearch that you intend to upgrade the domain to.

PerformCheckOnly (boolean) --
This flag, when set to True, indicates that an Upgrade Eligibility Check needs to be performed. This will not actually perform the Upgrade.







Exceptions

ElasticsearchService.Client.exceptions.BaseException
ElasticsearchService.Client.exceptions.ResourceNotFoundException
ElasticsearchService.Client.exceptions.ResourceAlreadyExistsException
ElasticsearchService.Client.exceptions.DisabledOperationException
ElasticsearchService.Client.exceptions.ValidationException
ElasticsearchService.Client.exceptions.InternalException


    :return: {
        'DomainName': 'string',
        'TargetVersion': 'string',
        'PerformCheckOnly': True|False
    }
    
    
    :returns: 
    ElasticsearchService.Client.exceptions.BaseException
    ElasticsearchService.Client.exceptions.ResourceNotFoundException
    ElasticsearchService.Client.exceptions.ResourceAlreadyExistsException
    ElasticsearchService.Client.exceptions.DisabledOperationException
    ElasticsearchService.Client.exceptions.ValidationException
    ElasticsearchService.Client.exceptions.InternalException
    
    """
    pass

