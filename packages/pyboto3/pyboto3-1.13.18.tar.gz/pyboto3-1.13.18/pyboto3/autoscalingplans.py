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

def can_paginate(operation_name=None):
    """
    Check if an operation can be paginated.
    
    :type operation_name: string
    :param operation_name: The operation name. This is the same name\nas the method name on the client. For example, if the\nmethod name is create_foo, and you\'d normally invoke the\noperation as client.create_foo(**kwargs), if the\ncreate_foo operation can be paginated, you can use the\ncall client.get_paginator('create_foo').

    """
    pass

def create_scaling_plan(ScalingPlanName=None, ApplicationSource=None, ScalingInstructions=None):
    """
    Creates a scaling plan.
    See also: AWS API Documentation
    
    Exceptions
    
    :example: response = client.create_scaling_plan(
        ScalingPlanName='string',
        ApplicationSource={
            'CloudFormationStackARN': 'string',
            'TagFilters': [
                {
                    'Key': 'string',
                    'Values': [
                        'string',
                    ]
                },
            ]
        },
        ScalingInstructions=[
            {
                'ServiceNamespace': 'autoscaling'|'ecs'|'ec2'|'rds'|'dynamodb',
                'ResourceId': 'string',
                'ScalableDimension': 'autoscaling:autoScalingGroup:DesiredCapacity'|'ecs:service:DesiredCount'|'ec2:spot-fleet-request:TargetCapacity'|'rds:cluster:ReadReplicaCount'|'dynamodb:table:ReadCapacityUnits'|'dynamodb:table:WriteCapacityUnits'|'dynamodb:index:ReadCapacityUnits'|'dynamodb:index:WriteCapacityUnits',
                'MinCapacity': 123,
                'MaxCapacity': 123,
                'TargetTrackingConfigurations': [
                    {
                        'PredefinedScalingMetricSpecification': {
                            'PredefinedScalingMetricType': 'ASGAverageCPUUtilization'|'ASGAverageNetworkIn'|'ASGAverageNetworkOut'|'DynamoDBReadCapacityUtilization'|'DynamoDBWriteCapacityUtilization'|'ECSServiceAverageCPUUtilization'|'ECSServiceAverageMemoryUtilization'|'ALBRequestCountPerTarget'|'RDSReaderAverageCPUUtilization'|'RDSReaderAverageDatabaseConnections'|'EC2SpotFleetRequestAverageCPUUtilization'|'EC2SpotFleetRequestAverageNetworkIn'|'EC2SpotFleetRequestAverageNetworkOut',
                            'ResourceLabel': 'string'
                        },
                        'CustomizedScalingMetricSpecification': {
                            'MetricName': 'string',
                            'Namespace': 'string',
                            'Dimensions': [
                                {
                                    'Name': 'string',
                                    'Value': 'string'
                                },
                            ],
                            'Statistic': 'Average'|'Minimum'|'Maximum'|'SampleCount'|'Sum',
                            'Unit': 'string'
                        },
                        'TargetValue': 123.0,
                        'DisableScaleIn': True|False,
                        'ScaleOutCooldown': 123,
                        'ScaleInCooldown': 123,
                        'EstimatedInstanceWarmup': 123
                    },
                ],
                'PredefinedLoadMetricSpecification': {
                    'PredefinedLoadMetricType': 'ASGTotalCPUUtilization'|'ASGTotalNetworkIn'|'ASGTotalNetworkOut'|'ALBTargetGroupRequestCount',
                    'ResourceLabel': 'string'
                },
                'CustomizedLoadMetricSpecification': {
                    'MetricName': 'string',
                    'Namespace': 'string',
                    'Dimensions': [
                        {
                            'Name': 'string',
                            'Value': 'string'
                        },
                    ],
                    'Statistic': 'Average'|'Minimum'|'Maximum'|'SampleCount'|'Sum',
                    'Unit': 'string'
                },
                'ScheduledActionBufferTime': 123,
                'PredictiveScalingMaxCapacityBehavior': 'SetForecastCapacityToMaxCapacity'|'SetMaxCapacityToForecastCapacity'|'SetMaxCapacityAboveForecastCapacity',
                'PredictiveScalingMaxCapacityBuffer': 123,
                'PredictiveScalingMode': 'ForecastAndScale'|'ForecastOnly',
                'ScalingPolicyUpdateBehavior': 'KeepExternalPolicies'|'ReplaceExternalPolicies',
                'DisableDynamicScaling': True|False
            },
        ]
    )
    
    
    :type ScalingPlanName: string
    :param ScalingPlanName: [REQUIRED]\nThe name of the scaling plan. Names cannot contain vertical bars, colons, or forward slashes.\n

    :type ApplicationSource: dict
    :param ApplicationSource: [REQUIRED]\nA CloudFormation stack or set of tags. You can create one scaling plan per application source.\n\nCloudFormationStackARN (string) --The Amazon Resource Name (ARN) of a AWS CloudFormation stack.\n\nTagFilters (list) --A set of tags (up to 50).\n\n(dict) --Represents a tag.\n\nKey (string) --The tag key.\n\nValues (list) --The tag values (0 to 20).\n\n(string) --\n\n\n\n\n\n\n\n

    :type ScalingInstructions: list
    :param ScalingInstructions: [REQUIRED]\nThe scaling instructions.\n\n(dict) --Describes a scaling instruction for a scalable resource.\nThe scaling instruction is used in combination with a scaling plan, which is a set of instructions for configuring dynamic scaling and predictive scaling for the scalable resources in your application. Each scaling instruction applies to one resource.\nAWS Auto Scaling creates target tracking scaling policies based on the scaling instructions. Target tracking scaling policies adjust the capacity of your scalable resource as required to maintain resource utilization at the target value that you specified.\nAWS Auto Scaling also configures predictive scaling for your Amazon EC2 Auto Scaling groups using a subset of parameters, including the load metric, the scaling metric, the target value for the scaling metric, the predictive scaling mode (forecast and scale or forecast only), and the desired behavior when the forecast capacity exceeds the maximum capacity of the resource. With predictive scaling, AWS Auto Scaling generates forecasts with traffic predictions for the two days ahead and schedules scaling actions that proactively add and remove resource capacity to match the forecast.\nWe recommend waiting a minimum of 24 hours after creating an Auto Scaling group to configure predictive scaling. At minimum, there must be 24 hours of historical data to generate a forecast.\nFor more information, see Getting Started with AWS Auto Scaling .\n\nServiceNamespace (string) -- [REQUIRED]The namespace of the AWS service.\n\nResourceId (string) -- [REQUIRED]The ID of the resource. This string consists of the resource type and unique identifier.\n\nAuto Scaling group - The resource type is autoScalingGroup and the unique identifier is the name of the Auto Scaling group. Example: autoScalingGroup/my-asg .\nECS service - The resource type is service and the unique identifier is the cluster name and service name. Example: service/default/sample-webapp .\nSpot Fleet request - The resource type is spot-fleet-request and the unique identifier is the Spot Fleet request ID. Example: spot-fleet-request/sfr-73fbd2ce-aa30-494c-8788-1cee4EXAMPLE .\nDynamoDB table - The resource type is table and the unique identifier is the resource ID. Example: table/my-table .\nDynamoDB global secondary index - The resource type is index and the unique identifier is the resource ID. Example: table/my-table/index/my-table-index .\nAurora DB cluster - The resource type is cluster and the unique identifier is the cluster name. Example: cluster:my-db-cluster .\n\n\nScalableDimension (string) -- [REQUIRED]The scalable dimension associated with the resource.\n\nautoscaling:autoScalingGroup:DesiredCapacity - The desired capacity of an Auto Scaling group.\necs:service:DesiredCount - The desired task count of an ECS service.\nec2:spot-fleet-request:TargetCapacity - The target capacity of a Spot Fleet request.\ndynamodb:table:ReadCapacityUnits - The provisioned read capacity for a DynamoDB table.\ndynamodb:table:WriteCapacityUnits - The provisioned write capacity for a DynamoDB table.\ndynamodb:index:ReadCapacityUnits - The provisioned read capacity for a DynamoDB global secondary index.\ndynamodb:index:WriteCapacityUnits - The provisioned write capacity for a DynamoDB global secondary index.\nrds:cluster:ReadReplicaCount - The count of Aurora Replicas in an Aurora DB cluster. Available for Aurora MySQL-compatible edition and Aurora PostgreSQL-compatible edition.\n\n\nMinCapacity (integer) -- [REQUIRED]The minimum capacity of the resource.\n\nMaxCapacity (integer) -- [REQUIRED]The maximum capacity of the resource. The exception to this upper limit is if you specify a non-default setting for PredictiveScalingMaxCapacityBehavior .\n\nTargetTrackingConfigurations (list) -- [REQUIRED]The structure that defines new target tracking configurations (up to 10). Each of these structures includes a specific scaling metric and a target value for the metric, along with various parameters to use with dynamic scaling.\nWith predictive scaling and dynamic scaling, the resource scales based on the target tracking configuration that provides the largest capacity for both scale in and scale out.\nCondition: The scaling metric must be unique across target tracking configurations.\n\n(dict) --Describes a target tracking configuration to use with AWS Auto Scaling. Used with ScalingInstruction and ScalingPolicy .\n\nPredefinedScalingMetricSpecification (dict) --A predefined metric. You can specify either a predefined metric or a customized metric.\n\nPredefinedScalingMetricType (string) -- [REQUIRED]The metric type. The ALBRequestCountPerTarget metric type applies only to Auto Scaling groups, Spot Fleet requests, and ECS services.\n\nResourceLabel (string) --Identifies the resource associated with the metric type. You can\'t specify a resource label unless the metric type is ALBRequestCountPerTarget and there is a target group for an Application Load Balancer attached to the Auto Scaling group, Spot Fleet request, or ECS service.\nThe format is app/<load-balancer-name>/<load-balancer-id>/targetgroup/<target-group-name>/<target-group-id>, where:\n\napp/<load-balancer-name>/<load-balancer-id> is the final portion of the load balancer ARN.\ntargetgroup/<target-group-name>/<target-group-id> is the final portion of the target group ARN.\n\n\n\n\nCustomizedScalingMetricSpecification (dict) --A customized metric. You can specify either a predefined metric or a customized metric.\n\nMetricName (string) -- [REQUIRED]The name of the metric.\n\nNamespace (string) -- [REQUIRED]The namespace of the metric.\n\nDimensions (list) --The dimensions of the metric.\nConditional: If you published your metric with dimensions, you must specify the same dimensions in your customized scaling metric specification.\n\n(dict) --Represents a dimension for a customized metric.\n\nName (string) -- [REQUIRED]The name of the dimension.\n\nValue (string) -- [REQUIRED]The value of the dimension.\n\n\n\n\n\nStatistic (string) -- [REQUIRED]The statistic of the metric.\n\nUnit (string) --The unit of the metric.\n\n\n\nTargetValue (float) -- [REQUIRED]The target value for the metric. The range is 8.515920e-109 to 1.174271e+108 (Base 10) or 2e-360 to 2e360 (Base 2).\n\nDisableScaleIn (boolean) --Indicates whether scale in by the target tracking scaling policy is disabled. If the value is true , scale in is disabled and the target tracking scaling policy doesn\'t remove capacity from the scalable resource. Otherwise, scale in is enabled and the target tracking scaling policy can remove capacity from the scalable resource.\nThe default value is false .\n\nScaleOutCooldown (integer) --The amount of time, in seconds, after a scale-out activity completes before another scale-out activity can start. This value is not used if the scalable resource is an Auto Scaling group.\nWhile the cooldown period is in effect, the capacity that has been added by the previous scale-out event that initiated the cooldown is calculated as part of the desired capacity for the next scale out. The intention is to continuously (but not excessively) scale out.\n\nScaleInCooldown (integer) --The amount of time, in seconds, after a scale in activity completes before another scale in activity can start. This value is not used if the scalable resource is an Auto Scaling group.\nThe cooldown period is used to block subsequent scale in requests until it has expired. The intention is to scale in conservatively to protect your application\'s availability. However, if another alarm triggers a scale-out policy during the cooldown period after a scale-in, AWS Auto Scaling scales out your scalable target immediately.\n\nEstimatedInstanceWarmup (integer) --The estimated time, in seconds, until a newly launched instance can contribute to the CloudWatch metrics. This value is used only if the resource is an Auto Scaling group.\n\n\n\n\n\nPredefinedLoadMetricSpecification (dict) --The predefined load metric to use for predictive scaling. This parameter or a CustomizedLoadMetricSpecification is required when configuring predictive scaling, and cannot be used otherwise.\n\nPredefinedLoadMetricType (string) -- [REQUIRED]The metric type.\n\nResourceLabel (string) --Identifies the resource associated with the metric type. You can\'t specify a resource label unless the metric type is ALBRequestCountPerTarget and there is a target group for an Application Load Balancer attached to the Auto Scaling group.\nThe format is app/<load-balancer-name>/<load-balancer-id>/targetgroup/<target-group-name>/<target-group-id>, where:\n\napp/<load-balancer-name>/<load-balancer-id> is the final portion of the load balancer ARN.\ntargetgroup/<target-group-name>/<target-group-id> is the final portion of the target group ARN.\n\n\n\n\nCustomizedLoadMetricSpecification (dict) --The customized load metric to use for predictive scaling. This parameter or a PredefinedLoadMetricSpecification is required when configuring predictive scaling, and cannot be used otherwise.\n\nMetricName (string) -- [REQUIRED]The name of the metric.\n\nNamespace (string) -- [REQUIRED]The namespace of the metric.\n\nDimensions (list) --The dimensions of the metric.\nConditional: If you published your metric with dimensions, you must specify the same dimensions in your customized load metric specification.\n\n(dict) --Represents a dimension for a customized metric.\n\nName (string) -- [REQUIRED]The name of the dimension.\n\nValue (string) -- [REQUIRED]The value of the dimension.\n\n\n\n\n\nStatistic (string) -- [REQUIRED]The statistic of the metric. Currently, the value must always be Sum .\n\nUnit (string) --The unit of the metric.\n\n\n\nScheduledActionBufferTime (integer) --The amount of time, in seconds, to buffer the run time of scheduled scaling actions when scaling out. For example, if the forecast says to add capacity at 10:00 AM, and the buffer time is 5 minutes, then the run time of the corresponding scheduled scaling action will be 9:55 AM. The intention is to give resources time to be provisioned. For example, it can take a few minutes to launch an EC2 instance. The actual amount of time required depends on several factors, such as the size of the instance and whether there are startup scripts to complete.\nThe value must be less than the forecast interval duration of 3600 seconds (60 minutes). The default is 300 seconds.\nOnly valid when configuring predictive scaling.\n\nPredictiveScalingMaxCapacityBehavior (string) --Defines the behavior that should be applied if the forecast capacity approaches or exceeds the maximum capacity specified for the resource. The default value is SetForecastCapacityToMaxCapacity .\nThe following are possible values:\n\nSetForecastCapacityToMaxCapacity - AWS Auto Scaling cannot scale resource capacity higher than the maximum capacity. The maximum capacity is enforced as a hard limit.\nSetMaxCapacityToForecastCapacity - AWS Auto Scaling may scale resource capacity higher than the maximum capacity to equal but not exceed forecast capacity.\nSetMaxCapacityAboveForecastCapacity - AWS Auto Scaling may scale resource capacity higher than the maximum capacity by a specified buffer value. The intention is to give the target tracking scaling policy extra capacity if unexpected traffic occurs.\n\nOnly valid when configuring predictive scaling.\n\nPredictiveScalingMaxCapacityBuffer (integer) --The size of the capacity buffer to use when the forecast capacity is close to or exceeds the maximum capacity. The value is specified as a percentage relative to the forecast capacity. For example, if the buffer is 10, this means a 10 percent buffer, such that if the forecast capacity is 50, and the maximum capacity is 40, then the effective maximum capacity is 55.\nOnly valid when configuring predictive scaling. Required if the PredictiveScalingMaxCapacityBehavior is set to SetMaxCapacityAboveForecastCapacity , and cannot be used otherwise.\nThe range is 1-100.\n\nPredictiveScalingMode (string) --The predictive scaling mode. The default value is ForecastAndScale . Otherwise, AWS Auto Scaling forecasts capacity but does not create any scheduled scaling actions based on the capacity forecast.\n\nScalingPolicyUpdateBehavior (string) --Controls whether a resource\'s externally created scaling policies are kept or replaced.\nThe default value is KeepExternalPolicies . If the parameter is set to ReplaceExternalPolicies , any scaling policies that are external to AWS Auto Scaling are deleted and new target tracking scaling policies created.\nOnly valid when configuring dynamic scaling.\nCondition: The number of existing policies to be replaced must be less than or equal to 50. If there are more than 50 policies to be replaced, AWS Auto Scaling keeps all existing policies and does not create new ones.\n\nDisableDynamicScaling (boolean) --Controls whether dynamic scaling by AWS Auto Scaling is disabled. When dynamic scaling is enabled, AWS Auto Scaling creates target tracking scaling policies based on the specified target tracking configurations.\nThe default is enabled (false ).\n\n\n\n\n

    :rtype: dict

ReturnsResponse Syntax
{
    'ScalingPlanVersion': 123
}


Response Structure

(dict) --

ScalingPlanVersion (integer) --
The version number of the scaling plan. This value is always 1.
Currently, you cannot specify multiple scaling plan versions.







Exceptions

AutoScalingPlans.Client.exceptions.ValidationException
AutoScalingPlans.Client.exceptions.LimitExceededException
AutoScalingPlans.Client.exceptions.ConcurrentUpdateException
AutoScalingPlans.Client.exceptions.InternalServiceException


    :return: {
        'ScalingPlanVersion': 123
    }
    
    
    :returns: 
    AutoScalingPlans.Client.exceptions.ValidationException
    AutoScalingPlans.Client.exceptions.LimitExceededException
    AutoScalingPlans.Client.exceptions.ConcurrentUpdateException
    AutoScalingPlans.Client.exceptions.InternalServiceException
    
    """
    pass

def delete_scaling_plan(ScalingPlanName=None, ScalingPlanVersion=None):
    """
    Deletes the specified scaling plan.
    Deleting a scaling plan deletes the underlying  ScalingInstruction for all of the scalable resources that are covered by the plan.
    If the plan has launched resources or has scaling activities in progress, you must delete those resources separately.
    See also: AWS API Documentation
    
    Exceptions
    
    :example: response = client.delete_scaling_plan(
        ScalingPlanName='string',
        ScalingPlanVersion=123
    )
    
    
    :type ScalingPlanName: string
    :param ScalingPlanName: [REQUIRED]\nThe name of the scaling plan.\n

    :type ScalingPlanVersion: integer
    :param ScalingPlanVersion: [REQUIRED]\nThe version number of the scaling plan.\n

    :rtype: dict

ReturnsResponse Syntax
{}


Response Structure

(dict) --




Exceptions

AutoScalingPlans.Client.exceptions.ValidationException
AutoScalingPlans.Client.exceptions.ObjectNotFoundException
AutoScalingPlans.Client.exceptions.ConcurrentUpdateException
AutoScalingPlans.Client.exceptions.InternalServiceException


    :return: {}
    
    
    :returns: 
    (dict) --
    
    """
    pass

def describe_scaling_plan_resources(ScalingPlanName=None, ScalingPlanVersion=None, MaxResults=None, NextToken=None):
    """
    Describes the scalable resources in the specified scaling plan.
    See also: AWS API Documentation
    
    Exceptions
    
    :example: response = client.describe_scaling_plan_resources(
        ScalingPlanName='string',
        ScalingPlanVersion=123,
        MaxResults=123,
        NextToken='string'
    )
    
    
    :type ScalingPlanName: string
    :param ScalingPlanName: [REQUIRED]\nThe name of the scaling plan.\n

    :type ScalingPlanVersion: integer
    :param ScalingPlanVersion: [REQUIRED]\nThe version number of the scaling plan.\n

    :type MaxResults: integer
    :param MaxResults: The maximum number of scalable resources to return. The value must be between 1 and 50. The default value is 50.

    :type NextToken: string
    :param NextToken: The token for the next set of results.

    :rtype: dict

ReturnsResponse Syntax
{
    'ScalingPlanResources': [
        {
            'ScalingPlanName': 'string',
            'ScalingPlanVersion': 123,
            'ServiceNamespace': 'autoscaling'|'ecs'|'ec2'|'rds'|'dynamodb',
            'ResourceId': 'string',
            'ScalableDimension': 'autoscaling:autoScalingGroup:DesiredCapacity'|'ecs:service:DesiredCount'|'ec2:spot-fleet-request:TargetCapacity'|'rds:cluster:ReadReplicaCount'|'dynamodb:table:ReadCapacityUnits'|'dynamodb:table:WriteCapacityUnits'|'dynamodb:index:ReadCapacityUnits'|'dynamodb:index:WriteCapacityUnits',
            'ScalingPolicies': [
                {
                    'PolicyName': 'string',
                    'PolicyType': 'TargetTrackingScaling',
                    'TargetTrackingConfiguration': {
                        'PredefinedScalingMetricSpecification': {
                            'PredefinedScalingMetricType': 'ASGAverageCPUUtilization'|'ASGAverageNetworkIn'|'ASGAverageNetworkOut'|'DynamoDBReadCapacityUtilization'|'DynamoDBWriteCapacityUtilization'|'ECSServiceAverageCPUUtilization'|'ECSServiceAverageMemoryUtilization'|'ALBRequestCountPerTarget'|'RDSReaderAverageCPUUtilization'|'RDSReaderAverageDatabaseConnections'|'EC2SpotFleetRequestAverageCPUUtilization'|'EC2SpotFleetRequestAverageNetworkIn'|'EC2SpotFleetRequestAverageNetworkOut',
                            'ResourceLabel': 'string'
                        },
                        'CustomizedScalingMetricSpecification': {
                            'MetricName': 'string',
                            'Namespace': 'string',
                            'Dimensions': [
                                {
                                    'Name': 'string',
                                    'Value': 'string'
                                },
                            ],
                            'Statistic': 'Average'|'Minimum'|'Maximum'|'SampleCount'|'Sum',
                            'Unit': 'string'
                        },
                        'TargetValue': 123.0,
                        'DisableScaleIn': True|False,
                        'ScaleOutCooldown': 123,
                        'ScaleInCooldown': 123,
                        'EstimatedInstanceWarmup': 123
                    }
                },
            ],
            'ScalingStatusCode': 'Inactive'|'PartiallyActive'|'Active',
            'ScalingStatusMessage': 'string'
        },
    ],
    'NextToken': 'string'
}


Response Structure

(dict) --

ScalingPlanResources (list) --
Information about the scalable resources.

(dict) --
Represents a scalable resource.

ScalingPlanName (string) --
The name of the scaling plan.

ScalingPlanVersion (integer) --
The version number of the scaling plan.

ServiceNamespace (string) --
The namespace of the AWS service.

ResourceId (string) --
The ID of the resource. This string consists of the resource type and unique identifier.

Auto Scaling group - The resource type is autoScalingGroup and the unique identifier is the name of the Auto Scaling group. Example: autoScalingGroup/my-asg .
ECS service - The resource type is service and the unique identifier is the cluster name and service name. Example: service/default/sample-webapp .
Spot Fleet request - The resource type is spot-fleet-request and the unique identifier is the Spot Fleet request ID. Example: spot-fleet-request/sfr-73fbd2ce-aa30-494c-8788-1cee4EXAMPLE .
DynamoDB table - The resource type is table and the unique identifier is the resource ID. Example: table/my-table .
DynamoDB global secondary index - The resource type is index and the unique identifier is the resource ID. Example: table/my-table/index/my-table-index .
Aurora DB cluster - The resource type is cluster and the unique identifier is the cluster name. Example: cluster:my-db-cluster .


ScalableDimension (string) --
The scalable dimension for the resource.

autoscaling:autoScalingGroup:DesiredCapacity - The desired capacity of an Auto Scaling group.
ecs:service:DesiredCount - The desired task count of an ECS service.
ec2:spot-fleet-request:TargetCapacity - The target capacity of a Spot Fleet request.
dynamodb:table:ReadCapacityUnits - The provisioned read capacity for a DynamoDB table.
dynamodb:table:WriteCapacityUnits - The provisioned write capacity for a DynamoDB table.
dynamodb:index:ReadCapacityUnits - The provisioned read capacity for a DynamoDB global secondary index.
dynamodb:index:WriteCapacityUnits - The provisioned write capacity for a DynamoDB global secondary index.
rds:cluster:ReadReplicaCount - The count of Aurora Replicas in an Aurora DB cluster. Available for Aurora MySQL-compatible edition and Aurora PostgreSQL-compatible edition.


ScalingPolicies (list) --
The scaling policies.

(dict) --
Represents a scaling policy.

PolicyName (string) --
The name of the scaling policy.

PolicyType (string) --
The type of scaling policy.

TargetTrackingConfiguration (dict) --
The target tracking scaling policy. Includes support for predefined or customized metrics.

PredefinedScalingMetricSpecification (dict) --
A predefined metric. You can specify either a predefined metric or a customized metric.

PredefinedScalingMetricType (string) --
The metric type. The ALBRequestCountPerTarget metric type applies only to Auto Scaling groups, Spot Fleet requests, and ECS services.

ResourceLabel (string) --
Identifies the resource associated with the metric type. You can\'t specify a resource label unless the metric type is ALBRequestCountPerTarget and there is a target group for an Application Load Balancer attached to the Auto Scaling group, Spot Fleet request, or ECS service.
The format is app/<load-balancer-name>/<load-balancer-id>/targetgroup/<target-group-name>/<target-group-id>, where:

app/<load-balancer-name>/<load-balancer-id> is the final portion of the load balancer ARN.
targetgroup/<target-group-name>/<target-group-id> is the final portion of the target group ARN.




CustomizedScalingMetricSpecification (dict) --
A customized metric. You can specify either a predefined metric or a customized metric.

MetricName (string) --
The name of the metric.

Namespace (string) --
The namespace of the metric.

Dimensions (list) --
The dimensions of the metric.
Conditional: If you published your metric with dimensions, you must specify the same dimensions in your customized scaling metric specification.

(dict) --
Represents a dimension for a customized metric.

Name (string) --
The name of the dimension.

Value (string) --
The value of the dimension.





Statistic (string) --
The statistic of the metric.

Unit (string) --
The unit of the metric.



TargetValue (float) --
The target value for the metric. The range is 8.515920e-109 to 1.174271e+108 (Base 10) or 2e-360 to 2e360 (Base 2).

DisableScaleIn (boolean) --
Indicates whether scale in by the target tracking scaling policy is disabled. If the value is true , scale in is disabled and the target tracking scaling policy doesn\'t remove capacity from the scalable resource. Otherwise, scale in is enabled and the target tracking scaling policy can remove capacity from the scalable resource.
The default value is false .

ScaleOutCooldown (integer) --
The amount of time, in seconds, after a scale-out activity completes before another scale-out activity can start. This value is not used if the scalable resource is an Auto Scaling group.
While the cooldown period is in effect, the capacity that has been added by the previous scale-out event that initiated the cooldown is calculated as part of the desired capacity for the next scale out. The intention is to continuously (but not excessively) scale out.

ScaleInCooldown (integer) --
The amount of time, in seconds, after a scale in activity completes before another scale in activity can start. This value is not used if the scalable resource is an Auto Scaling group.
The cooldown period is used to block subsequent scale in requests until it has expired. The intention is to scale in conservatively to protect your application\'s availability. However, if another alarm triggers a scale-out policy during the cooldown period after a scale-in, AWS Auto Scaling scales out your scalable target immediately.

EstimatedInstanceWarmup (integer) --
The estimated time, in seconds, until a newly launched instance can contribute to the CloudWatch metrics. This value is used only if the resource is an Auto Scaling group.







ScalingStatusCode (string) --
The scaling status of the resource.

Active - The scaling configuration is active.
Inactive - The scaling configuration is not active because the scaling plan is being created or the scaling configuration could not be applied. Check the status message for more information.
PartiallyActive - The scaling configuration is partially active because the scaling plan is being created or deleted or the scaling configuration could not be fully applied. Check the status message for more information.


ScalingStatusMessage (string) --
A simple message about the current scaling status of the resource.





NextToken (string) --
The token required to get the next set of results. This value is null if there are no more results to return.







Exceptions

AutoScalingPlans.Client.exceptions.ValidationException
AutoScalingPlans.Client.exceptions.InvalidNextTokenException
AutoScalingPlans.Client.exceptions.ConcurrentUpdateException
AutoScalingPlans.Client.exceptions.InternalServiceException


    :return: {
        'ScalingPlanResources': [
            {
                'ScalingPlanName': 'string',
                'ScalingPlanVersion': 123,
                'ServiceNamespace': 'autoscaling'|'ecs'|'ec2'|'rds'|'dynamodb',
                'ResourceId': 'string',
                'ScalableDimension': 'autoscaling:autoScalingGroup:DesiredCapacity'|'ecs:service:DesiredCount'|'ec2:spot-fleet-request:TargetCapacity'|'rds:cluster:ReadReplicaCount'|'dynamodb:table:ReadCapacityUnits'|'dynamodb:table:WriteCapacityUnits'|'dynamodb:index:ReadCapacityUnits'|'dynamodb:index:WriteCapacityUnits',
                'ScalingPolicies': [
                    {
                        'PolicyName': 'string',
                        'PolicyType': 'TargetTrackingScaling',
                        'TargetTrackingConfiguration': {
                            'PredefinedScalingMetricSpecification': {
                                'PredefinedScalingMetricType': 'ASGAverageCPUUtilization'|'ASGAverageNetworkIn'|'ASGAverageNetworkOut'|'DynamoDBReadCapacityUtilization'|'DynamoDBWriteCapacityUtilization'|'ECSServiceAverageCPUUtilization'|'ECSServiceAverageMemoryUtilization'|'ALBRequestCountPerTarget'|'RDSReaderAverageCPUUtilization'|'RDSReaderAverageDatabaseConnections'|'EC2SpotFleetRequestAverageCPUUtilization'|'EC2SpotFleetRequestAverageNetworkIn'|'EC2SpotFleetRequestAverageNetworkOut',
                                'ResourceLabel': 'string'
                            },
                            'CustomizedScalingMetricSpecification': {
                                'MetricName': 'string',
                                'Namespace': 'string',
                                'Dimensions': [
                                    {
                                        'Name': 'string',
                                        'Value': 'string'
                                    },
                                ],
                                'Statistic': 'Average'|'Minimum'|'Maximum'|'SampleCount'|'Sum',
                                'Unit': 'string'
                            },
                            'TargetValue': 123.0,
                            'DisableScaleIn': True|False,
                            'ScaleOutCooldown': 123,
                            'ScaleInCooldown': 123,
                            'EstimatedInstanceWarmup': 123
                        }
                    },
                ],
                'ScalingStatusCode': 'Inactive'|'PartiallyActive'|'Active',
                'ScalingStatusMessage': 'string'
            },
        ],
        'NextToken': 'string'
    }
    
    
    :returns: 
    Auto Scaling group - The resource type is autoScalingGroup and the unique identifier is the name of the Auto Scaling group. Example: autoScalingGroup/my-asg .
    ECS service - The resource type is service and the unique identifier is the cluster name and service name. Example: service/default/sample-webapp .
    Spot Fleet request - The resource type is spot-fleet-request and the unique identifier is the Spot Fleet request ID. Example: spot-fleet-request/sfr-73fbd2ce-aa30-494c-8788-1cee4EXAMPLE .
    DynamoDB table - The resource type is table and the unique identifier is the resource ID. Example: table/my-table .
    DynamoDB global secondary index - The resource type is index and the unique identifier is the resource ID. Example: table/my-table/index/my-table-index .
    Aurora DB cluster - The resource type is cluster and the unique identifier is the cluster name. Example: cluster:my-db-cluster .
    
    """
    pass

def describe_scaling_plans(ScalingPlanNames=None, ScalingPlanVersion=None, ApplicationSources=None, MaxResults=None, NextToken=None):
    """
    Describes one or more of your scaling plans.
    See also: AWS API Documentation
    
    Exceptions
    
    :example: response = client.describe_scaling_plans(
        ScalingPlanNames=[
            'string',
        ],
        ScalingPlanVersion=123,
        ApplicationSources=[
            {
                'CloudFormationStackARN': 'string',
                'TagFilters': [
                    {
                        'Key': 'string',
                        'Values': [
                            'string',
                        ]
                    },
                ]
            },
        ],
        MaxResults=123,
        NextToken='string'
    )
    
    
    :type ScalingPlanNames: list
    :param ScalingPlanNames: The names of the scaling plans (up to 10). If you specify application sources, you cannot specify scaling plan names.\n\n(string) --\n\n

    :type ScalingPlanVersion: integer
    :param ScalingPlanVersion: The version number of the scaling plan. If you specify a scaling plan version, you must also specify a scaling plan name.

    :type ApplicationSources: list
    :param ApplicationSources: The sources for the applications (up to 10). If you specify scaling plan names, you cannot specify application sources.\n\n(dict) --Represents an application source.\n\nCloudFormationStackARN (string) --The Amazon Resource Name (ARN) of a AWS CloudFormation stack.\n\nTagFilters (list) --A set of tags (up to 50).\n\n(dict) --Represents a tag.\n\nKey (string) --The tag key.\n\nValues (list) --The tag values (0 to 20).\n\n(string) --\n\n\n\n\n\n\n\n\n\n

    :type MaxResults: integer
    :param MaxResults: The maximum number of scalable resources to return. This value can be between 1 and 50. The default value is 50.

    :type NextToken: string
    :param NextToken: The token for the next set of results.

    :rtype: dict

ReturnsResponse Syntax
{
    'ScalingPlans': [
        {
            'ScalingPlanName': 'string',
            'ScalingPlanVersion': 123,
            'ApplicationSource': {
                'CloudFormationStackARN': 'string',
                'TagFilters': [
                    {
                        'Key': 'string',
                        'Values': [
                            'string',
                        ]
                    },
                ]
            },
            'ScalingInstructions': [
                {
                    'ServiceNamespace': 'autoscaling'|'ecs'|'ec2'|'rds'|'dynamodb',
                    'ResourceId': 'string',
                    'ScalableDimension': 'autoscaling:autoScalingGroup:DesiredCapacity'|'ecs:service:DesiredCount'|'ec2:spot-fleet-request:TargetCapacity'|'rds:cluster:ReadReplicaCount'|'dynamodb:table:ReadCapacityUnits'|'dynamodb:table:WriteCapacityUnits'|'dynamodb:index:ReadCapacityUnits'|'dynamodb:index:WriteCapacityUnits',
                    'MinCapacity': 123,
                    'MaxCapacity': 123,
                    'TargetTrackingConfigurations': [
                        {
                            'PredefinedScalingMetricSpecification': {
                                'PredefinedScalingMetricType': 'ASGAverageCPUUtilization'|'ASGAverageNetworkIn'|'ASGAverageNetworkOut'|'DynamoDBReadCapacityUtilization'|'DynamoDBWriteCapacityUtilization'|'ECSServiceAverageCPUUtilization'|'ECSServiceAverageMemoryUtilization'|'ALBRequestCountPerTarget'|'RDSReaderAverageCPUUtilization'|'RDSReaderAverageDatabaseConnections'|'EC2SpotFleetRequestAverageCPUUtilization'|'EC2SpotFleetRequestAverageNetworkIn'|'EC2SpotFleetRequestAverageNetworkOut',
                                'ResourceLabel': 'string'
                            },
                            'CustomizedScalingMetricSpecification': {
                                'MetricName': 'string',
                                'Namespace': 'string',
                                'Dimensions': [
                                    {
                                        'Name': 'string',
                                        'Value': 'string'
                                    },
                                ],
                                'Statistic': 'Average'|'Minimum'|'Maximum'|'SampleCount'|'Sum',
                                'Unit': 'string'
                            },
                            'TargetValue': 123.0,
                            'DisableScaleIn': True|False,
                            'ScaleOutCooldown': 123,
                            'ScaleInCooldown': 123,
                            'EstimatedInstanceWarmup': 123
                        },
                    ],
                    'PredefinedLoadMetricSpecification': {
                        'PredefinedLoadMetricType': 'ASGTotalCPUUtilization'|'ASGTotalNetworkIn'|'ASGTotalNetworkOut'|'ALBTargetGroupRequestCount',
                        'ResourceLabel': 'string'
                    },
                    'CustomizedLoadMetricSpecification': {
                        'MetricName': 'string',
                        'Namespace': 'string',
                        'Dimensions': [
                            {
                                'Name': 'string',
                                'Value': 'string'
                            },
                        ],
                        'Statistic': 'Average'|'Minimum'|'Maximum'|'SampleCount'|'Sum',
                        'Unit': 'string'
                    },
                    'ScheduledActionBufferTime': 123,
                    'PredictiveScalingMaxCapacityBehavior': 'SetForecastCapacityToMaxCapacity'|'SetMaxCapacityToForecastCapacity'|'SetMaxCapacityAboveForecastCapacity',
                    'PredictiveScalingMaxCapacityBuffer': 123,
                    'PredictiveScalingMode': 'ForecastAndScale'|'ForecastOnly',
                    'ScalingPolicyUpdateBehavior': 'KeepExternalPolicies'|'ReplaceExternalPolicies',
                    'DisableDynamicScaling': True|False
                },
            ],
            'StatusCode': 'Active'|'ActiveWithProblems'|'CreationInProgress'|'CreationFailed'|'DeletionInProgress'|'DeletionFailed'|'UpdateInProgress'|'UpdateFailed',
            'StatusMessage': 'string',
            'StatusStartTime': datetime(2015, 1, 1),
            'CreationTime': datetime(2015, 1, 1)
        },
    ],
    'NextToken': 'string'
}


Response Structure

(dict) --

ScalingPlans (list) --
Information about the scaling plans.

(dict) --
Represents a scaling plan.

ScalingPlanName (string) --
The name of the scaling plan.

ScalingPlanVersion (integer) --
The version number of the scaling plan.

ApplicationSource (dict) --
The application source.

CloudFormationStackARN (string) --
The Amazon Resource Name (ARN) of a AWS CloudFormation stack.

TagFilters (list) --
A set of tags (up to 50).

(dict) --
Represents a tag.

Key (string) --
The tag key.

Values (list) --
The tag values (0 to 20).

(string) --








ScalingInstructions (list) --
The scaling instructions.

(dict) --
Describes a scaling instruction for a scalable resource.
The scaling instruction is used in combination with a scaling plan, which is a set of instructions for configuring dynamic scaling and predictive scaling for the scalable resources in your application. Each scaling instruction applies to one resource.
AWS Auto Scaling creates target tracking scaling policies based on the scaling instructions. Target tracking scaling policies adjust the capacity of your scalable resource as required to maintain resource utilization at the target value that you specified.
AWS Auto Scaling also configures predictive scaling for your Amazon EC2 Auto Scaling groups using a subset of parameters, including the load metric, the scaling metric, the target value for the scaling metric, the predictive scaling mode (forecast and scale or forecast only), and the desired behavior when the forecast capacity exceeds the maximum capacity of the resource. With predictive scaling, AWS Auto Scaling generates forecasts with traffic predictions for the two days ahead and schedules scaling actions that proactively add and remove resource capacity to match the forecast.
We recommend waiting a minimum of 24 hours after creating an Auto Scaling group to configure predictive scaling. At minimum, there must be 24 hours of historical data to generate a forecast.
For more information, see Getting Started with AWS Auto Scaling .

ServiceNamespace (string) --
The namespace of the AWS service.

ResourceId (string) --
The ID of the resource. This string consists of the resource type and unique identifier.

Auto Scaling group - The resource type is autoScalingGroup and the unique identifier is the name of the Auto Scaling group. Example: autoScalingGroup/my-asg .
ECS service - The resource type is service and the unique identifier is the cluster name and service name. Example: service/default/sample-webapp .
Spot Fleet request - The resource type is spot-fleet-request and the unique identifier is the Spot Fleet request ID. Example: spot-fleet-request/sfr-73fbd2ce-aa30-494c-8788-1cee4EXAMPLE .
DynamoDB table - The resource type is table and the unique identifier is the resource ID. Example: table/my-table .
DynamoDB global secondary index - The resource type is index and the unique identifier is the resource ID. Example: table/my-table/index/my-table-index .
Aurora DB cluster - The resource type is cluster and the unique identifier is the cluster name. Example: cluster:my-db-cluster .


ScalableDimension (string) --
The scalable dimension associated with the resource.

autoscaling:autoScalingGroup:DesiredCapacity - The desired capacity of an Auto Scaling group.
ecs:service:DesiredCount - The desired task count of an ECS service.
ec2:spot-fleet-request:TargetCapacity - The target capacity of a Spot Fleet request.
dynamodb:table:ReadCapacityUnits - The provisioned read capacity for a DynamoDB table.
dynamodb:table:WriteCapacityUnits - The provisioned write capacity for a DynamoDB table.
dynamodb:index:ReadCapacityUnits - The provisioned read capacity for a DynamoDB global secondary index.
dynamodb:index:WriteCapacityUnits - The provisioned write capacity for a DynamoDB global secondary index.
rds:cluster:ReadReplicaCount - The count of Aurora Replicas in an Aurora DB cluster. Available for Aurora MySQL-compatible edition and Aurora PostgreSQL-compatible edition.


MinCapacity (integer) --
The minimum capacity of the resource.

MaxCapacity (integer) --
The maximum capacity of the resource. The exception to this upper limit is if you specify a non-default setting for PredictiveScalingMaxCapacityBehavior .

TargetTrackingConfigurations (list) --
The structure that defines new target tracking configurations (up to 10). Each of these structures includes a specific scaling metric and a target value for the metric, along with various parameters to use with dynamic scaling.
With predictive scaling and dynamic scaling, the resource scales based on the target tracking configuration that provides the largest capacity for both scale in and scale out.
Condition: The scaling metric must be unique across target tracking configurations.

(dict) --
Describes a target tracking configuration to use with AWS Auto Scaling. Used with  ScalingInstruction and  ScalingPolicy .

PredefinedScalingMetricSpecification (dict) --
A predefined metric. You can specify either a predefined metric or a customized metric.

PredefinedScalingMetricType (string) --
The metric type. The ALBRequestCountPerTarget metric type applies only to Auto Scaling groups, Spot Fleet requests, and ECS services.

ResourceLabel (string) --
Identifies the resource associated with the metric type. You can\'t specify a resource label unless the metric type is ALBRequestCountPerTarget and there is a target group for an Application Load Balancer attached to the Auto Scaling group, Spot Fleet request, or ECS service.
The format is app/<load-balancer-name>/<load-balancer-id>/targetgroup/<target-group-name>/<target-group-id>, where:

app/<load-balancer-name>/<load-balancer-id> is the final portion of the load balancer ARN.
targetgroup/<target-group-name>/<target-group-id> is the final portion of the target group ARN.




CustomizedScalingMetricSpecification (dict) --
A customized metric. You can specify either a predefined metric or a customized metric.

MetricName (string) --
The name of the metric.

Namespace (string) --
The namespace of the metric.

Dimensions (list) --
The dimensions of the metric.
Conditional: If you published your metric with dimensions, you must specify the same dimensions in your customized scaling metric specification.

(dict) --
Represents a dimension for a customized metric.

Name (string) --
The name of the dimension.

Value (string) --
The value of the dimension.





Statistic (string) --
The statistic of the metric.

Unit (string) --
The unit of the metric.



TargetValue (float) --
The target value for the metric. The range is 8.515920e-109 to 1.174271e+108 (Base 10) or 2e-360 to 2e360 (Base 2).

DisableScaleIn (boolean) --
Indicates whether scale in by the target tracking scaling policy is disabled. If the value is true , scale in is disabled and the target tracking scaling policy doesn\'t remove capacity from the scalable resource. Otherwise, scale in is enabled and the target tracking scaling policy can remove capacity from the scalable resource.
The default value is false .

ScaleOutCooldown (integer) --
The amount of time, in seconds, after a scale-out activity completes before another scale-out activity can start. This value is not used if the scalable resource is an Auto Scaling group.
While the cooldown period is in effect, the capacity that has been added by the previous scale-out event that initiated the cooldown is calculated as part of the desired capacity for the next scale out. The intention is to continuously (but not excessively) scale out.

ScaleInCooldown (integer) --
The amount of time, in seconds, after a scale in activity completes before another scale in activity can start. This value is not used if the scalable resource is an Auto Scaling group.
The cooldown period is used to block subsequent scale in requests until it has expired. The intention is to scale in conservatively to protect your application\'s availability. However, if another alarm triggers a scale-out policy during the cooldown period after a scale-in, AWS Auto Scaling scales out your scalable target immediately.

EstimatedInstanceWarmup (integer) --
The estimated time, in seconds, until a newly launched instance can contribute to the CloudWatch metrics. This value is used only if the resource is an Auto Scaling group.





PredefinedLoadMetricSpecification (dict) --
The predefined load metric to use for predictive scaling. This parameter or a CustomizedLoadMetricSpecification is required when configuring predictive scaling, and cannot be used otherwise.

PredefinedLoadMetricType (string) --
The metric type.

ResourceLabel (string) --
Identifies the resource associated with the metric type. You can\'t specify a resource label unless the metric type is ALBRequestCountPerTarget and there is a target group for an Application Load Balancer attached to the Auto Scaling group.
The format is app/<load-balancer-name>/<load-balancer-id>/targetgroup/<target-group-name>/<target-group-id>, where:

app/<load-balancer-name>/<load-balancer-id> is the final portion of the load balancer ARN.
targetgroup/<target-group-name>/<target-group-id> is the final portion of the target group ARN.




CustomizedLoadMetricSpecification (dict) --
The customized load metric to use for predictive scaling. This parameter or a PredefinedLoadMetricSpecification is required when configuring predictive scaling, and cannot be used otherwise.

MetricName (string) --
The name of the metric.

Namespace (string) --
The namespace of the metric.

Dimensions (list) --
The dimensions of the metric.
Conditional: If you published your metric with dimensions, you must specify the same dimensions in your customized load metric specification.

(dict) --
Represents a dimension for a customized metric.

Name (string) --
The name of the dimension.

Value (string) --
The value of the dimension.





Statistic (string) --
The statistic of the metric. Currently, the value must always be Sum .

Unit (string) --
The unit of the metric.



ScheduledActionBufferTime (integer) --
The amount of time, in seconds, to buffer the run time of scheduled scaling actions when scaling out. For example, if the forecast says to add capacity at 10:00 AM, and the buffer time is 5 minutes, then the run time of the corresponding scheduled scaling action will be 9:55 AM. The intention is to give resources time to be provisioned. For example, it can take a few minutes to launch an EC2 instance. The actual amount of time required depends on several factors, such as the size of the instance and whether there are startup scripts to complete.
The value must be less than the forecast interval duration of 3600 seconds (60 minutes). The default is 300 seconds.
Only valid when configuring predictive scaling.

PredictiveScalingMaxCapacityBehavior (string) --
Defines the behavior that should be applied if the forecast capacity approaches or exceeds the maximum capacity specified for the resource. The default value is SetForecastCapacityToMaxCapacity .
The following are possible values:

SetForecastCapacityToMaxCapacity - AWS Auto Scaling cannot scale resource capacity higher than the maximum capacity. The maximum capacity is enforced as a hard limit.
SetMaxCapacityToForecastCapacity - AWS Auto Scaling may scale resource capacity higher than the maximum capacity to equal but not exceed forecast capacity.
SetMaxCapacityAboveForecastCapacity - AWS Auto Scaling may scale resource capacity higher than the maximum capacity by a specified buffer value. The intention is to give the target tracking scaling policy extra capacity if unexpected traffic occurs.

Only valid when configuring predictive scaling.

PredictiveScalingMaxCapacityBuffer (integer) --
The size of the capacity buffer to use when the forecast capacity is close to or exceeds the maximum capacity. The value is specified as a percentage relative to the forecast capacity. For example, if the buffer is 10, this means a 10 percent buffer, such that if the forecast capacity is 50, and the maximum capacity is 40, then the effective maximum capacity is 55.
Only valid when configuring predictive scaling. Required if the PredictiveScalingMaxCapacityBehavior is set to SetMaxCapacityAboveForecastCapacity , and cannot be used otherwise.
The range is 1-100.

PredictiveScalingMode (string) --
The predictive scaling mode. The default value is ForecastAndScale . Otherwise, AWS Auto Scaling forecasts capacity but does not create any scheduled scaling actions based on the capacity forecast.

ScalingPolicyUpdateBehavior (string) --
Controls whether a resource\'s externally created scaling policies are kept or replaced.
The default value is KeepExternalPolicies . If the parameter is set to ReplaceExternalPolicies , any scaling policies that are external to AWS Auto Scaling are deleted and new target tracking scaling policies created.
Only valid when configuring dynamic scaling.
Condition: The number of existing policies to be replaced must be less than or equal to 50. If there are more than 50 policies to be replaced, AWS Auto Scaling keeps all existing policies and does not create new ones.

DisableDynamicScaling (boolean) --
Controls whether dynamic scaling by AWS Auto Scaling is disabled. When dynamic scaling is enabled, AWS Auto Scaling creates target tracking scaling policies based on the specified target tracking configurations.
The default is enabled (false ).





StatusCode (string) --
The status of the scaling plan.

Active - The scaling plan is active.
ActiveWithProblems - The scaling plan is active, but the scaling configuration for one or more resources could not be applied.
CreationInProgress - The scaling plan is being created.
CreationFailed - The scaling plan could not be created.
DeletionInProgress - The scaling plan is being deleted.
DeletionFailed - The scaling plan could not be deleted.
UpdateInProgress - The scaling plan is being updated.
UpdateFailed - The scaling plan could not be updated.


StatusMessage (string) --
A simple message about the current status of the scaling plan.

StatusStartTime (datetime) --
The Unix time stamp when the scaling plan entered the current status.

CreationTime (datetime) --
The Unix time stamp when the scaling plan was created.





NextToken (string) --
The token required to get the next set of results. This value is null if there are no more results to return.







Exceptions

AutoScalingPlans.Client.exceptions.ValidationException
AutoScalingPlans.Client.exceptions.InvalidNextTokenException
AutoScalingPlans.Client.exceptions.ConcurrentUpdateException
AutoScalingPlans.Client.exceptions.InternalServiceException


    :return: {
        'ScalingPlans': [
            {
                'ScalingPlanName': 'string',
                'ScalingPlanVersion': 123,
                'ApplicationSource': {
                    'CloudFormationStackARN': 'string',
                    'TagFilters': [
                        {
                            'Key': 'string',
                            'Values': [
                                'string',
                            ]
                        },
                    ]
                },
                'ScalingInstructions': [
                    {
                        'ServiceNamespace': 'autoscaling'|'ecs'|'ec2'|'rds'|'dynamodb',
                        'ResourceId': 'string',
                        'ScalableDimension': 'autoscaling:autoScalingGroup:DesiredCapacity'|'ecs:service:DesiredCount'|'ec2:spot-fleet-request:TargetCapacity'|'rds:cluster:ReadReplicaCount'|'dynamodb:table:ReadCapacityUnits'|'dynamodb:table:WriteCapacityUnits'|'dynamodb:index:ReadCapacityUnits'|'dynamodb:index:WriteCapacityUnits',
                        'MinCapacity': 123,
                        'MaxCapacity': 123,
                        'TargetTrackingConfigurations': [
                            {
                                'PredefinedScalingMetricSpecification': {
                                    'PredefinedScalingMetricType': 'ASGAverageCPUUtilization'|'ASGAverageNetworkIn'|'ASGAverageNetworkOut'|'DynamoDBReadCapacityUtilization'|'DynamoDBWriteCapacityUtilization'|'ECSServiceAverageCPUUtilization'|'ECSServiceAverageMemoryUtilization'|'ALBRequestCountPerTarget'|'RDSReaderAverageCPUUtilization'|'RDSReaderAverageDatabaseConnections'|'EC2SpotFleetRequestAverageCPUUtilization'|'EC2SpotFleetRequestAverageNetworkIn'|'EC2SpotFleetRequestAverageNetworkOut',
                                    'ResourceLabel': 'string'
                                },
                                'CustomizedScalingMetricSpecification': {
                                    'MetricName': 'string',
                                    'Namespace': 'string',
                                    'Dimensions': [
                                        {
                                            'Name': 'string',
                                            'Value': 'string'
                                        },
                                    ],
                                    'Statistic': 'Average'|'Minimum'|'Maximum'|'SampleCount'|'Sum',
                                    'Unit': 'string'
                                },
                                'TargetValue': 123.0,
                                'DisableScaleIn': True|False,
                                'ScaleOutCooldown': 123,
                                'ScaleInCooldown': 123,
                                'EstimatedInstanceWarmup': 123
                            },
                        ],
                        'PredefinedLoadMetricSpecification': {
                            'PredefinedLoadMetricType': 'ASGTotalCPUUtilization'|'ASGTotalNetworkIn'|'ASGTotalNetworkOut'|'ALBTargetGroupRequestCount',
                            'ResourceLabel': 'string'
                        },
                        'CustomizedLoadMetricSpecification': {
                            'MetricName': 'string',
                            'Namespace': 'string',
                            'Dimensions': [
                                {
                                    'Name': 'string',
                                    'Value': 'string'
                                },
                            ],
                            'Statistic': 'Average'|'Minimum'|'Maximum'|'SampleCount'|'Sum',
                            'Unit': 'string'
                        },
                        'ScheduledActionBufferTime': 123,
                        'PredictiveScalingMaxCapacityBehavior': 'SetForecastCapacityToMaxCapacity'|'SetMaxCapacityToForecastCapacity'|'SetMaxCapacityAboveForecastCapacity',
                        'PredictiveScalingMaxCapacityBuffer': 123,
                        'PredictiveScalingMode': 'ForecastAndScale'|'ForecastOnly',
                        'ScalingPolicyUpdateBehavior': 'KeepExternalPolicies'|'ReplaceExternalPolicies',
                        'DisableDynamicScaling': True|False
                    },
                ],
                'StatusCode': 'Active'|'ActiveWithProblems'|'CreationInProgress'|'CreationFailed'|'DeletionInProgress'|'DeletionFailed'|'UpdateInProgress'|'UpdateFailed',
                'StatusMessage': 'string',
                'StatusStartTime': datetime(2015, 1, 1),
                'CreationTime': datetime(2015, 1, 1)
            },
        ],
        'NextToken': 'string'
    }
    
    
    :returns: 
    (string) --
    
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

def get_paginator(operation_name=None):
    """
    Create a paginator for an operation.
    
    :type operation_name: string
    :param operation_name: The operation name. This is the same name\nas the method name on the client. For example, if the\nmethod name is create_foo, and you\'d normally invoke the\noperation as client.create_foo(**kwargs), if the\ncreate_foo operation can be paginated, you can use the\ncall client.get_paginator('create_foo').

    :rtype: L{botocore.paginate.Paginator}
ReturnsA paginator object.


    """
    pass

def get_scaling_plan_resource_forecast_data(ScalingPlanName=None, ScalingPlanVersion=None, ServiceNamespace=None, ResourceId=None, ScalableDimension=None, ForecastDataType=None, StartTime=None, EndTime=None):
    """
    Retrieves the forecast data for a scalable resource.
    Capacity forecasts are represented as predicted values, or data points, that are calculated using historical data points from a specified CloudWatch load metric. Data points are available for up to 56 days.
    See also: AWS API Documentation
    
    Exceptions
    
    :example: response = client.get_scaling_plan_resource_forecast_data(
        ScalingPlanName='string',
        ScalingPlanVersion=123,
        ServiceNamespace='autoscaling'|'ecs'|'ec2'|'rds'|'dynamodb',
        ResourceId='string',
        ScalableDimension='autoscaling:autoScalingGroup:DesiredCapacity'|'ecs:service:DesiredCount'|'ec2:spot-fleet-request:TargetCapacity'|'rds:cluster:ReadReplicaCount'|'dynamodb:table:ReadCapacityUnits'|'dynamodb:table:WriteCapacityUnits'|'dynamodb:index:ReadCapacityUnits'|'dynamodb:index:WriteCapacityUnits',
        ForecastDataType='CapacityForecast'|'LoadForecast'|'ScheduledActionMinCapacity'|'ScheduledActionMaxCapacity',
        StartTime=datetime(2015, 1, 1),
        EndTime=datetime(2015, 1, 1)
    )
    
    
    :type ScalingPlanName: string
    :param ScalingPlanName: [REQUIRED]\nThe name of the scaling plan.\n

    :type ScalingPlanVersion: integer
    :param ScalingPlanVersion: [REQUIRED]\nThe version number of the scaling plan.\n

    :type ServiceNamespace: string
    :param ServiceNamespace: [REQUIRED]\nThe namespace of the AWS service.\n

    :type ResourceId: string
    :param ResourceId: [REQUIRED]\nThe ID of the resource. This string consists of the resource type and unique identifier.\n\nAuto Scaling group - The resource type is autoScalingGroup and the unique identifier is the name of the Auto Scaling group. Example: autoScalingGroup/my-asg .\nECS service - The resource type is service and the unique identifier is the cluster name and service name. Example: service/default/sample-webapp .\nSpot Fleet request - The resource type is spot-fleet-request and the unique identifier is the Spot Fleet request ID. Example: spot-fleet-request/sfr-73fbd2ce-aa30-494c-8788-1cee4EXAMPLE .\nDynamoDB table - The resource type is table and the unique identifier is the resource ID. Example: table/my-table .\nDynamoDB global secondary index - The resource type is index and the unique identifier is the resource ID. Example: table/my-table/index/my-table-index .\nAurora DB cluster - The resource type is cluster and the unique identifier is the cluster name. Example: cluster:my-db-cluster .\n\n

    :type ScalableDimension: string
    :param ScalableDimension: [REQUIRED]\nThe scalable dimension for the resource.\n

    :type ForecastDataType: string
    :param ForecastDataType: [REQUIRED]\nThe type of forecast data to get.\n\nLoadForecast : The load metric forecast.\nCapacityForecast : The capacity forecast.\nScheduledActionMinCapacity : The minimum capacity for each scheduled scaling action. This data is calculated as the larger of two values: the capacity forecast or the minimum capacity in the scaling instruction.\nScheduledActionMaxCapacity : The maximum capacity for each scheduled scaling action. The calculation used is determined by the predictive scaling maximum capacity behavior setting in the scaling instruction.\n\n

    :type StartTime: datetime
    :param StartTime: [REQUIRED]\nThe inclusive start time of the time range for the forecast data to get. The date and time can be at most 56 days before the current date and time.\n

    :type EndTime: datetime
    :param EndTime: [REQUIRED]\nThe exclusive end time of the time range for the forecast data to get. The maximum time duration between the start and end time is seven days.\nAlthough this parameter can accept a date and time that is more than two days in the future, the availability of forecast data has limits. AWS Auto Scaling only issues forecasts for periods of two days in advance.\n

    :rtype: dict

ReturnsResponse Syntax
{
    'Datapoints': [
        {
            'Timestamp': datetime(2015, 1, 1),
            'Value': 123.0
        },
    ]
}


Response Structure

(dict) --

Datapoints (list) --
The data points to return.

(dict) --
Represents a single value in the forecast data used for predictive scaling.

Timestamp (datetime) --
The time stamp for the data point in UTC format.

Value (float) --
The value of the data point.











Exceptions

AutoScalingPlans.Client.exceptions.ValidationException
AutoScalingPlans.Client.exceptions.InternalServiceException


    :return: {
        'Datapoints': [
            {
                'Timestamp': datetime(2015, 1, 1),
                'Value': 123.0
            },
        ]
    }
    
    
    :returns: 
    AutoScalingPlans.Client.exceptions.ValidationException
    AutoScalingPlans.Client.exceptions.InternalServiceException
    
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

def update_scaling_plan(ScalingPlanName=None, ScalingPlanVersion=None, ApplicationSource=None, ScalingInstructions=None):
    """
    Updates the specified scaling plan.
    You cannot update a scaling plan if it is in the process of being created, updated, or deleted.
    See also: AWS API Documentation
    
    Exceptions
    
    :example: response = client.update_scaling_plan(
        ScalingPlanName='string',
        ScalingPlanVersion=123,
        ApplicationSource={
            'CloudFormationStackARN': 'string',
            'TagFilters': [
                {
                    'Key': 'string',
                    'Values': [
                        'string',
                    ]
                },
            ]
        },
        ScalingInstructions=[
            {
                'ServiceNamespace': 'autoscaling'|'ecs'|'ec2'|'rds'|'dynamodb',
                'ResourceId': 'string',
                'ScalableDimension': 'autoscaling:autoScalingGroup:DesiredCapacity'|'ecs:service:DesiredCount'|'ec2:spot-fleet-request:TargetCapacity'|'rds:cluster:ReadReplicaCount'|'dynamodb:table:ReadCapacityUnits'|'dynamodb:table:WriteCapacityUnits'|'dynamodb:index:ReadCapacityUnits'|'dynamodb:index:WriteCapacityUnits',
                'MinCapacity': 123,
                'MaxCapacity': 123,
                'TargetTrackingConfigurations': [
                    {
                        'PredefinedScalingMetricSpecification': {
                            'PredefinedScalingMetricType': 'ASGAverageCPUUtilization'|'ASGAverageNetworkIn'|'ASGAverageNetworkOut'|'DynamoDBReadCapacityUtilization'|'DynamoDBWriteCapacityUtilization'|'ECSServiceAverageCPUUtilization'|'ECSServiceAverageMemoryUtilization'|'ALBRequestCountPerTarget'|'RDSReaderAverageCPUUtilization'|'RDSReaderAverageDatabaseConnections'|'EC2SpotFleetRequestAverageCPUUtilization'|'EC2SpotFleetRequestAverageNetworkIn'|'EC2SpotFleetRequestAverageNetworkOut',
                            'ResourceLabel': 'string'
                        },
                        'CustomizedScalingMetricSpecification': {
                            'MetricName': 'string',
                            'Namespace': 'string',
                            'Dimensions': [
                                {
                                    'Name': 'string',
                                    'Value': 'string'
                                },
                            ],
                            'Statistic': 'Average'|'Minimum'|'Maximum'|'SampleCount'|'Sum',
                            'Unit': 'string'
                        },
                        'TargetValue': 123.0,
                        'DisableScaleIn': True|False,
                        'ScaleOutCooldown': 123,
                        'ScaleInCooldown': 123,
                        'EstimatedInstanceWarmup': 123
                    },
                ],
                'PredefinedLoadMetricSpecification': {
                    'PredefinedLoadMetricType': 'ASGTotalCPUUtilization'|'ASGTotalNetworkIn'|'ASGTotalNetworkOut'|'ALBTargetGroupRequestCount',
                    'ResourceLabel': 'string'
                },
                'CustomizedLoadMetricSpecification': {
                    'MetricName': 'string',
                    'Namespace': 'string',
                    'Dimensions': [
                        {
                            'Name': 'string',
                            'Value': 'string'
                        },
                    ],
                    'Statistic': 'Average'|'Minimum'|'Maximum'|'SampleCount'|'Sum',
                    'Unit': 'string'
                },
                'ScheduledActionBufferTime': 123,
                'PredictiveScalingMaxCapacityBehavior': 'SetForecastCapacityToMaxCapacity'|'SetMaxCapacityToForecastCapacity'|'SetMaxCapacityAboveForecastCapacity',
                'PredictiveScalingMaxCapacityBuffer': 123,
                'PredictiveScalingMode': 'ForecastAndScale'|'ForecastOnly',
                'ScalingPolicyUpdateBehavior': 'KeepExternalPolicies'|'ReplaceExternalPolicies',
                'DisableDynamicScaling': True|False
            },
        ]
    )
    
    
    :type ScalingPlanName: string
    :param ScalingPlanName: [REQUIRED]\nThe name of the scaling plan.\n

    :type ScalingPlanVersion: integer
    :param ScalingPlanVersion: [REQUIRED]\nThe version number of the scaling plan.\n

    :type ApplicationSource: dict
    :param ApplicationSource: A CloudFormation stack or set of tags.\n\nCloudFormationStackARN (string) --The Amazon Resource Name (ARN) of a AWS CloudFormation stack.\n\nTagFilters (list) --A set of tags (up to 50).\n\n(dict) --Represents a tag.\n\nKey (string) --The tag key.\n\nValues (list) --The tag values (0 to 20).\n\n(string) --\n\n\n\n\n\n\n\n

    :type ScalingInstructions: list
    :param ScalingInstructions: The scaling instructions.\n\n(dict) --Describes a scaling instruction for a scalable resource.\nThe scaling instruction is used in combination with a scaling plan, which is a set of instructions for configuring dynamic scaling and predictive scaling for the scalable resources in your application. Each scaling instruction applies to one resource.\nAWS Auto Scaling creates target tracking scaling policies based on the scaling instructions. Target tracking scaling policies adjust the capacity of your scalable resource as required to maintain resource utilization at the target value that you specified.\nAWS Auto Scaling also configures predictive scaling for your Amazon EC2 Auto Scaling groups using a subset of parameters, including the load metric, the scaling metric, the target value for the scaling metric, the predictive scaling mode (forecast and scale or forecast only), and the desired behavior when the forecast capacity exceeds the maximum capacity of the resource. With predictive scaling, AWS Auto Scaling generates forecasts with traffic predictions for the two days ahead and schedules scaling actions that proactively add and remove resource capacity to match the forecast.\nWe recommend waiting a minimum of 24 hours after creating an Auto Scaling group to configure predictive scaling. At minimum, there must be 24 hours of historical data to generate a forecast.\nFor more information, see Getting Started with AWS Auto Scaling .\n\nServiceNamespace (string) -- [REQUIRED]The namespace of the AWS service.\n\nResourceId (string) -- [REQUIRED]The ID of the resource. This string consists of the resource type and unique identifier.\n\nAuto Scaling group - The resource type is autoScalingGroup and the unique identifier is the name of the Auto Scaling group. Example: autoScalingGroup/my-asg .\nECS service - The resource type is service and the unique identifier is the cluster name and service name. Example: service/default/sample-webapp .\nSpot Fleet request - The resource type is spot-fleet-request and the unique identifier is the Spot Fleet request ID. Example: spot-fleet-request/sfr-73fbd2ce-aa30-494c-8788-1cee4EXAMPLE .\nDynamoDB table - The resource type is table and the unique identifier is the resource ID. Example: table/my-table .\nDynamoDB global secondary index - The resource type is index and the unique identifier is the resource ID. Example: table/my-table/index/my-table-index .\nAurora DB cluster - The resource type is cluster and the unique identifier is the cluster name. Example: cluster:my-db-cluster .\n\n\nScalableDimension (string) -- [REQUIRED]The scalable dimension associated with the resource.\n\nautoscaling:autoScalingGroup:DesiredCapacity - The desired capacity of an Auto Scaling group.\necs:service:DesiredCount - The desired task count of an ECS service.\nec2:spot-fleet-request:TargetCapacity - The target capacity of a Spot Fleet request.\ndynamodb:table:ReadCapacityUnits - The provisioned read capacity for a DynamoDB table.\ndynamodb:table:WriteCapacityUnits - The provisioned write capacity for a DynamoDB table.\ndynamodb:index:ReadCapacityUnits - The provisioned read capacity for a DynamoDB global secondary index.\ndynamodb:index:WriteCapacityUnits - The provisioned write capacity for a DynamoDB global secondary index.\nrds:cluster:ReadReplicaCount - The count of Aurora Replicas in an Aurora DB cluster. Available for Aurora MySQL-compatible edition and Aurora PostgreSQL-compatible edition.\n\n\nMinCapacity (integer) -- [REQUIRED]The minimum capacity of the resource.\n\nMaxCapacity (integer) -- [REQUIRED]The maximum capacity of the resource. The exception to this upper limit is if you specify a non-default setting for PredictiveScalingMaxCapacityBehavior .\n\nTargetTrackingConfigurations (list) -- [REQUIRED]The structure that defines new target tracking configurations (up to 10). Each of these structures includes a specific scaling metric and a target value for the metric, along with various parameters to use with dynamic scaling.\nWith predictive scaling and dynamic scaling, the resource scales based on the target tracking configuration that provides the largest capacity for both scale in and scale out.\nCondition: The scaling metric must be unique across target tracking configurations.\n\n(dict) --Describes a target tracking configuration to use with AWS Auto Scaling. Used with ScalingInstruction and ScalingPolicy .\n\nPredefinedScalingMetricSpecification (dict) --A predefined metric. You can specify either a predefined metric or a customized metric.\n\nPredefinedScalingMetricType (string) -- [REQUIRED]The metric type. The ALBRequestCountPerTarget metric type applies only to Auto Scaling groups, Spot Fleet requests, and ECS services.\n\nResourceLabel (string) --Identifies the resource associated with the metric type. You can\'t specify a resource label unless the metric type is ALBRequestCountPerTarget and there is a target group for an Application Load Balancer attached to the Auto Scaling group, Spot Fleet request, or ECS service.\nThe format is app/<load-balancer-name>/<load-balancer-id>/targetgroup/<target-group-name>/<target-group-id>, where:\n\napp/<load-balancer-name>/<load-balancer-id> is the final portion of the load balancer ARN.\ntargetgroup/<target-group-name>/<target-group-id> is the final portion of the target group ARN.\n\n\n\n\nCustomizedScalingMetricSpecification (dict) --A customized metric. You can specify either a predefined metric or a customized metric.\n\nMetricName (string) -- [REQUIRED]The name of the metric.\n\nNamespace (string) -- [REQUIRED]The namespace of the metric.\n\nDimensions (list) --The dimensions of the metric.\nConditional: If you published your metric with dimensions, you must specify the same dimensions in your customized scaling metric specification.\n\n(dict) --Represents a dimension for a customized metric.\n\nName (string) -- [REQUIRED]The name of the dimension.\n\nValue (string) -- [REQUIRED]The value of the dimension.\n\n\n\n\n\nStatistic (string) -- [REQUIRED]The statistic of the metric.\n\nUnit (string) --The unit of the metric.\n\n\n\nTargetValue (float) -- [REQUIRED]The target value for the metric. The range is 8.515920e-109 to 1.174271e+108 (Base 10) or 2e-360 to 2e360 (Base 2).\n\nDisableScaleIn (boolean) --Indicates whether scale in by the target tracking scaling policy is disabled. If the value is true , scale in is disabled and the target tracking scaling policy doesn\'t remove capacity from the scalable resource. Otherwise, scale in is enabled and the target tracking scaling policy can remove capacity from the scalable resource.\nThe default value is false .\n\nScaleOutCooldown (integer) --The amount of time, in seconds, after a scale-out activity completes before another scale-out activity can start. This value is not used if the scalable resource is an Auto Scaling group.\nWhile the cooldown period is in effect, the capacity that has been added by the previous scale-out event that initiated the cooldown is calculated as part of the desired capacity for the next scale out. The intention is to continuously (but not excessively) scale out.\n\nScaleInCooldown (integer) --The amount of time, in seconds, after a scale in activity completes before another scale in activity can start. This value is not used if the scalable resource is an Auto Scaling group.\nThe cooldown period is used to block subsequent scale in requests until it has expired. The intention is to scale in conservatively to protect your application\'s availability. However, if another alarm triggers a scale-out policy during the cooldown period after a scale-in, AWS Auto Scaling scales out your scalable target immediately.\n\nEstimatedInstanceWarmup (integer) --The estimated time, in seconds, until a newly launched instance can contribute to the CloudWatch metrics. This value is used only if the resource is an Auto Scaling group.\n\n\n\n\n\nPredefinedLoadMetricSpecification (dict) --The predefined load metric to use for predictive scaling. This parameter or a CustomizedLoadMetricSpecification is required when configuring predictive scaling, and cannot be used otherwise.\n\nPredefinedLoadMetricType (string) -- [REQUIRED]The metric type.\n\nResourceLabel (string) --Identifies the resource associated with the metric type. You can\'t specify a resource label unless the metric type is ALBRequestCountPerTarget and there is a target group for an Application Load Balancer attached to the Auto Scaling group.\nThe format is app/<load-balancer-name>/<load-balancer-id>/targetgroup/<target-group-name>/<target-group-id>, where:\n\napp/<load-balancer-name>/<load-balancer-id> is the final portion of the load balancer ARN.\ntargetgroup/<target-group-name>/<target-group-id> is the final portion of the target group ARN.\n\n\n\n\nCustomizedLoadMetricSpecification (dict) --The customized load metric to use for predictive scaling. This parameter or a PredefinedLoadMetricSpecification is required when configuring predictive scaling, and cannot be used otherwise.\n\nMetricName (string) -- [REQUIRED]The name of the metric.\n\nNamespace (string) -- [REQUIRED]The namespace of the metric.\n\nDimensions (list) --The dimensions of the metric.\nConditional: If you published your metric with dimensions, you must specify the same dimensions in your customized load metric specification.\n\n(dict) --Represents a dimension for a customized metric.\n\nName (string) -- [REQUIRED]The name of the dimension.\n\nValue (string) -- [REQUIRED]The value of the dimension.\n\n\n\n\n\nStatistic (string) -- [REQUIRED]The statistic of the metric. Currently, the value must always be Sum .\n\nUnit (string) --The unit of the metric.\n\n\n\nScheduledActionBufferTime (integer) --The amount of time, in seconds, to buffer the run time of scheduled scaling actions when scaling out. For example, if the forecast says to add capacity at 10:00 AM, and the buffer time is 5 minutes, then the run time of the corresponding scheduled scaling action will be 9:55 AM. The intention is to give resources time to be provisioned. For example, it can take a few minutes to launch an EC2 instance. The actual amount of time required depends on several factors, such as the size of the instance and whether there are startup scripts to complete.\nThe value must be less than the forecast interval duration of 3600 seconds (60 minutes). The default is 300 seconds.\nOnly valid when configuring predictive scaling.\n\nPredictiveScalingMaxCapacityBehavior (string) --Defines the behavior that should be applied if the forecast capacity approaches or exceeds the maximum capacity specified for the resource. The default value is SetForecastCapacityToMaxCapacity .\nThe following are possible values:\n\nSetForecastCapacityToMaxCapacity - AWS Auto Scaling cannot scale resource capacity higher than the maximum capacity. The maximum capacity is enforced as a hard limit.\nSetMaxCapacityToForecastCapacity - AWS Auto Scaling may scale resource capacity higher than the maximum capacity to equal but not exceed forecast capacity.\nSetMaxCapacityAboveForecastCapacity - AWS Auto Scaling may scale resource capacity higher than the maximum capacity by a specified buffer value. The intention is to give the target tracking scaling policy extra capacity if unexpected traffic occurs.\n\nOnly valid when configuring predictive scaling.\n\nPredictiveScalingMaxCapacityBuffer (integer) --The size of the capacity buffer to use when the forecast capacity is close to or exceeds the maximum capacity. The value is specified as a percentage relative to the forecast capacity. For example, if the buffer is 10, this means a 10 percent buffer, such that if the forecast capacity is 50, and the maximum capacity is 40, then the effective maximum capacity is 55.\nOnly valid when configuring predictive scaling. Required if the PredictiveScalingMaxCapacityBehavior is set to SetMaxCapacityAboveForecastCapacity , and cannot be used otherwise.\nThe range is 1-100.\n\nPredictiveScalingMode (string) --The predictive scaling mode. The default value is ForecastAndScale . Otherwise, AWS Auto Scaling forecasts capacity but does not create any scheduled scaling actions based on the capacity forecast.\n\nScalingPolicyUpdateBehavior (string) --Controls whether a resource\'s externally created scaling policies are kept or replaced.\nThe default value is KeepExternalPolicies . If the parameter is set to ReplaceExternalPolicies , any scaling policies that are external to AWS Auto Scaling are deleted and new target tracking scaling policies created.\nOnly valid when configuring dynamic scaling.\nCondition: The number of existing policies to be replaced must be less than or equal to 50. If there are more than 50 policies to be replaced, AWS Auto Scaling keeps all existing policies and does not create new ones.\n\nDisableDynamicScaling (boolean) --Controls whether dynamic scaling by AWS Auto Scaling is disabled. When dynamic scaling is enabled, AWS Auto Scaling creates target tracking scaling policies based on the specified target tracking configurations.\nThe default is enabled (false ).\n\n\n\n\n

    :rtype: dict

ReturnsResponse Syntax
{}


Response Structure

(dict) --




Exceptions

AutoScalingPlans.Client.exceptions.ValidationException
AutoScalingPlans.Client.exceptions.ConcurrentUpdateException
AutoScalingPlans.Client.exceptions.InternalServiceException
AutoScalingPlans.Client.exceptions.ObjectNotFoundException


    :return: {}
    
    
    :returns: 
    (dict) --
    
    """
    pass

