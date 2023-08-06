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

def associate_kms_key(logGroupName=None, kmsKeyId=None):
    """
    Associates the specified AWS Key Management Service (AWS KMS) customer master key (CMK) with the specified log group.
    Associating an AWS KMS CMK with a log group overrides any existing associations between the log group and a CMK. After a CMK is associated with a log group, all newly ingested data for the log group is encrypted using the CMK. This association is stored as long as the data encrypted with the CMK is still within Amazon CloudWatch Logs. This enables Amazon CloudWatch Logs to decrypt this data whenever it is requested.
    Note that it can take up to 5 minutes for this operation to take effect.
    If you attempt to associate a CMK with a log group but the CMK does not exist or the CMK is disabled, you will receive an InvalidParameterException error.
    See also: AWS API Documentation
    
    Exceptions
    
    :example: response = client.associate_kms_key(
        logGroupName='string',
        kmsKeyId='string'
    )
    
    
    :type logGroupName: string
    :param logGroupName: [REQUIRED]\nThe name of the log group.\n

    :type kmsKeyId: string
    :param kmsKeyId: [REQUIRED]\nThe Amazon Resource Name (ARN) of the CMK to use when encrypting log data. This must be a symmetric CMK. For more information, see Amazon Resource Names - AWS Key Management Service (AWS KMS) and Using Symmetric and Asymmetric Keys .\n

    :returns: 
    CloudWatchLogs.Client.exceptions.InvalidParameterException
    CloudWatchLogs.Client.exceptions.ResourceNotFoundException
    CloudWatchLogs.Client.exceptions.OperationAbortedException
    CloudWatchLogs.Client.exceptions.ServiceUnavailableException
    
    """
    pass

def can_paginate(operation_name=None):
    """
    Check if an operation can be paginated.
    
    :type operation_name: string
    :param operation_name: The operation name. This is the same name\nas the method name on the client. For example, if the\nmethod name is create_foo, and you\'d normally invoke the\noperation as client.create_foo(**kwargs), if the\ncreate_foo operation can be paginated, you can use the\ncall client.get_paginator('create_foo').

    """
    pass

def cancel_export_task(taskId=None):
    """
    Cancels the specified export task.
    The task must be in the PENDING or RUNNING state.
    See also: AWS API Documentation
    
    Exceptions
    
    :example: response = client.cancel_export_task(
        taskId='string'
    )
    
    
    :type taskId: string
    :param taskId: [REQUIRED]\nThe ID of the export task.\n

    """
    pass

def create_export_task(taskName=None, logGroupName=None, logStreamNamePrefix=None, fromTime=None, to=None, destination=None, destinationPrefix=None):
    """
    Creates an export task, which allows you to efficiently export data from a log group to an Amazon S3 bucket.
    This is an asynchronous call. If all the required information is provided, this operation initiates an export task and responds with the ID of the task. After the task has started, you can use DescribeExportTasks to get the status of the export task. Each account can only have one active (RUNNING or PENDING ) export task at a time. To cancel an export task, use CancelExportTask .
    You can export logs from multiple log groups or multiple time ranges to the same S3 bucket. To separate out log data for each export task, you can specify a prefix to be used as the Amazon S3 key prefix for all exported objects.
    Exporting to S3 buckets that are encrypted with AES-256 is supported. Exporting to S3 buckets encrypted with SSE-KMS is not supported.
    See also: AWS API Documentation
    
    Exceptions
    
    :example: response = client.create_export_task(
        taskName='string',
        logGroupName='string',
        logStreamNamePrefix='string',
        fromTime=123,
        to=123,
        destination='string',
        destinationPrefix='string'
    )
    
    
    :type taskName: string
    :param taskName: The name of the export task.

    :type logGroupName: string
    :param logGroupName: [REQUIRED]\nThe name of the log group.\n

    :type logStreamNamePrefix: string
    :param logStreamNamePrefix: Export only log streams that match the provided prefix. If you don\'t specify a value, no prefix filter is applied.

    :type fromTime: integer
    :param fromTime: [REQUIRED]\nThe start time of the range for the request, expressed as the number of milliseconds after Jan 1, 1970 00:00:00 UTC. Events with a timestamp earlier than this time are not exported.\n

    :type to: integer
    :param to: [REQUIRED]\nThe end time of the range for the request, expressed as the number of milliseconds after Jan 1, 1970 00:00:00 UTC. Events with a timestamp later than this time are not exported.\n

    :type destination: string
    :param destination: [REQUIRED]\nThe name of S3 bucket for the exported log data. The bucket must be in the same AWS region.\n

    :type destinationPrefix: string
    :param destinationPrefix: The prefix used as the start of the key for every object exported. If you don\'t specify a value, the default is exportedlogs .

    :rtype: dict

ReturnsResponse Syntax
{
    'taskId': 'string'
}


Response Structure

(dict) --

taskId (string) --
The ID of the export task.







Exceptions

CloudWatchLogs.Client.exceptions.InvalidParameterException
CloudWatchLogs.Client.exceptions.LimitExceededException
CloudWatchLogs.Client.exceptions.OperationAbortedException
CloudWatchLogs.Client.exceptions.ServiceUnavailableException
CloudWatchLogs.Client.exceptions.ResourceNotFoundException
CloudWatchLogs.Client.exceptions.ResourceAlreadyExistsException


    :return: {
        'taskId': 'string'
    }
    
    
    :returns: 
    CloudWatchLogs.Client.exceptions.InvalidParameterException
    CloudWatchLogs.Client.exceptions.LimitExceededException
    CloudWatchLogs.Client.exceptions.OperationAbortedException
    CloudWatchLogs.Client.exceptions.ServiceUnavailableException
    CloudWatchLogs.Client.exceptions.ResourceNotFoundException
    CloudWatchLogs.Client.exceptions.ResourceAlreadyExistsException
    
    """
    pass

def create_log_group(logGroupName=None, kmsKeyId=None, tags=None):
    """
    Creates a log group with the specified name.
    You can create up to 20,000 log groups per account.
    You must use the following guidelines when naming a log group:
    If you associate a AWS Key Management Service (AWS KMS) customer master key (CMK) with the log group, ingested data is encrypted using the CMK. This association is stored as long as the data encrypted with the CMK is still within Amazon CloudWatch Logs. This enables Amazon CloudWatch Logs to decrypt this data whenever it is requested.
    If you attempt to associate a CMK with the log group but the CMK does not exist or the CMK is disabled, you will receive an InvalidParameterException error.
    See also: AWS API Documentation
    
    Exceptions
    
    :example: response = client.create_log_group(
        logGroupName='string',
        kmsKeyId='string',
        tags={
            'string': 'string'
        }
    )
    
    
    :type logGroupName: string
    :param logGroupName: [REQUIRED]\nThe name of the log group.\n

    :type kmsKeyId: string
    :param kmsKeyId: The Amazon Resource Name (ARN) of the CMK to use when encrypting log data. For more information, see Amazon Resource Names - AWS Key Management Service (AWS KMS) .

    :type tags: dict
    :param tags: The key-value pairs to use for the tags.\n\n(string) --\n(string) --\n\n\n\n

    :returns: 
    logGroupName (string) -- [REQUIRED]
    The name of the log group.
    
    kmsKeyId (string) -- The Amazon Resource Name (ARN) of the CMK to use when encrypting log data. For more information, see Amazon Resource Names - AWS Key Management Service (AWS KMS) .
    tags (dict) -- The key-value pairs to use for the tags.
    
    (string) --
    (string) --
    
    
    
    
    
    """
    pass

def create_log_stream(logGroupName=None, logStreamName=None):
    """
    Creates a log stream for the specified log group.
    There is no limit on the number of log streams that you can create for a log group. There is a limit of 50 TPS on CreateLogStream operations, after which transactions are throttled.
    You must use the following guidelines when naming a log stream:
    See also: AWS API Documentation
    
    Exceptions
    
    :example: response = client.create_log_stream(
        logGroupName='string',
        logStreamName='string'
    )
    
    
    :type logGroupName: string
    :param logGroupName: [REQUIRED]\nThe name of the log group.\n

    :type logStreamName: string
    :param logStreamName: [REQUIRED]\nThe name of the log stream.\n

    :returns: 
    logGroupName (string) -- [REQUIRED]
    The name of the log group.
    
    logStreamName (string) -- [REQUIRED]
    The name of the log stream.
    
    
    """
    pass

def delete_destination(destinationName=None):
    """
    Deletes the specified destination, and eventually disables all the subscription filters that publish to it. This operation does not delete the physical resource encapsulated by the destination.
    See also: AWS API Documentation
    
    Exceptions
    
    :example: response = client.delete_destination(
        destinationName='string'
    )
    
    
    :type destinationName: string
    :param destinationName: [REQUIRED]\nThe name of the destination.\n

    """
    pass

def delete_log_group(logGroupName=None):
    """
    Deletes the specified log group and permanently deletes all the archived log events associated with the log group.
    See also: AWS API Documentation
    
    Exceptions
    
    :example: response = client.delete_log_group(
        logGroupName='string'
    )
    
    
    :type logGroupName: string
    :param logGroupName: [REQUIRED]\nThe name of the log group.\n

    """
    pass

def delete_log_stream(logGroupName=None, logStreamName=None):
    """
    Deletes the specified log stream and permanently deletes all the archived log events associated with the log stream.
    See also: AWS API Documentation
    
    Exceptions
    
    :example: response = client.delete_log_stream(
        logGroupName='string',
        logStreamName='string'
    )
    
    
    :type logGroupName: string
    :param logGroupName: [REQUIRED]\nThe name of the log group.\n

    :type logStreamName: string
    :param logStreamName: [REQUIRED]\nThe name of the log stream.\n

    :returns: 
    CloudWatchLogs.Client.exceptions.InvalidParameterException
    CloudWatchLogs.Client.exceptions.ResourceNotFoundException
    CloudWatchLogs.Client.exceptions.OperationAbortedException
    CloudWatchLogs.Client.exceptions.ServiceUnavailableException
    
    """
    pass

def delete_metric_filter(logGroupName=None, filterName=None):
    """
    Deletes the specified metric filter.
    See also: AWS API Documentation
    
    Exceptions
    
    :example: response = client.delete_metric_filter(
        logGroupName='string',
        filterName='string'
    )
    
    
    :type logGroupName: string
    :param logGroupName: [REQUIRED]\nThe name of the log group.\n

    :type filterName: string
    :param filterName: [REQUIRED]\nThe name of the metric filter.\n

    :returns: 
    CloudWatchLogs.Client.exceptions.InvalidParameterException
    CloudWatchLogs.Client.exceptions.ResourceNotFoundException
    CloudWatchLogs.Client.exceptions.OperationAbortedException
    CloudWatchLogs.Client.exceptions.ServiceUnavailableException
    
    """
    pass

def delete_query_definition(queryDefinitionId=None):
    """
    See also: AWS API Documentation
    
    Exceptions
    
    :example: response = client.delete_query_definition(
        queryDefinitionId='string'
    )
    
    
    :type queryDefinitionId: string
    :param queryDefinitionId: [REQUIRED]

    :rtype: dict
ReturnsResponse Syntax{
    'success': True|False
}


Response Structure

(dict) --
success (boolean) --





Exceptions

CloudWatchLogs.Client.exceptions.InvalidParameterException
CloudWatchLogs.Client.exceptions.ResourceNotFoundException
CloudWatchLogs.Client.exceptions.ServiceUnavailableException


    :return: {
        'success': True|False
    }
    
    
    :returns: 
    CloudWatchLogs.Client.exceptions.InvalidParameterException
    CloudWatchLogs.Client.exceptions.ResourceNotFoundException
    CloudWatchLogs.Client.exceptions.ServiceUnavailableException
    
    """
    pass

def delete_resource_policy(policyName=None):
    """
    Deletes a resource policy from this account. This revokes the access of the identities in that policy to put log events to this account.
    See also: AWS API Documentation
    
    Exceptions
    
    :example: response = client.delete_resource_policy(
        policyName='string'
    )
    
    
    :type policyName: string
    :param policyName: The name of the policy to be revoked. This parameter is required.

    """
    pass

def delete_retention_policy(logGroupName=None):
    """
    Deletes the specified retention policy.
    Log events do not expire if they belong to log groups without a retention policy.
    See also: AWS API Documentation
    
    Exceptions
    
    :example: response = client.delete_retention_policy(
        logGroupName='string'
    )
    
    
    :type logGroupName: string
    :param logGroupName: [REQUIRED]\nThe name of the log group.\n

    """
    pass

def delete_subscription_filter(logGroupName=None, filterName=None):
    """
    Deletes the specified subscription filter.
    See also: AWS API Documentation
    
    Exceptions
    
    :example: response = client.delete_subscription_filter(
        logGroupName='string',
        filterName='string'
    )
    
    
    :type logGroupName: string
    :param logGroupName: [REQUIRED]\nThe name of the log group.\n

    :type filterName: string
    :param filterName: [REQUIRED]\nThe name of the subscription filter.\n

    :returns: 
    CloudWatchLogs.Client.exceptions.InvalidParameterException
    CloudWatchLogs.Client.exceptions.ResourceNotFoundException
    CloudWatchLogs.Client.exceptions.OperationAbortedException
    CloudWatchLogs.Client.exceptions.ServiceUnavailableException
    
    """
    pass

def describe_destinations(DestinationNamePrefix=None, nextToken=None, limit=None):
    """
    Lists all your destinations. The results are ASCII-sorted by destination name.
    See also: AWS API Documentation
    
    Exceptions
    
    :example: response = client.describe_destinations(
        DestinationNamePrefix='string',
        nextToken='string',
        limit=123
    )
    
    
    :type DestinationNamePrefix: string
    :param DestinationNamePrefix: The prefix to match. If you don\'t specify a value, no prefix filter is applied.

    :type nextToken: string
    :param nextToken: The token for the next set of items to return. (You received this token from a previous call.)

    :type limit: integer
    :param limit: The maximum number of items returned. If you don\'t specify a value, the default is up to 50 items.

    :rtype: dict

ReturnsResponse Syntax
{
    'destinations': [
        {
            'destinationName': 'string',
            'targetArn': 'string',
            'roleArn': 'string',
            'accessPolicy': 'string',
            'arn': 'string',
            'creationTime': 123
        },
    ],
    'nextToken': 'string'
}


Response Structure

(dict) --

destinations (list) --
The destinations.

(dict) --
Represents a cross-account destination that receives subscription log events.

destinationName (string) --
The name of the destination.

targetArn (string) --
The Amazon Resource Name (ARN) of the physical target to where the log events are delivered (for example, a Kinesis stream).

roleArn (string) --
A role for impersonation, used when delivering log events to the target.

accessPolicy (string) --
An IAM policy document that governs which AWS accounts can create subscription filters against this destination.

arn (string) --
The ARN of this destination.

creationTime (integer) --
The creation time of the destination, expressed as the number of milliseconds after Jan 1, 1970 00:00:00 UTC.





nextToken (string) --
The token for the next set of items to return. The token expires after 24 hours.







Exceptions

CloudWatchLogs.Client.exceptions.InvalidParameterException
CloudWatchLogs.Client.exceptions.ServiceUnavailableException


    :return: {
        'destinations': [
            {
                'destinationName': 'string',
                'targetArn': 'string',
                'roleArn': 'string',
                'accessPolicy': 'string',
                'arn': 'string',
                'creationTime': 123
            },
        ],
        'nextToken': 'string'
    }
    
    
    :returns: 
    CloudWatchLogs.Client.exceptions.InvalidParameterException
    CloudWatchLogs.Client.exceptions.ServiceUnavailableException
    
    """
    pass

def describe_export_tasks(taskId=None, statusCode=None, nextToken=None, limit=None):
    """
    Lists the specified export tasks. You can list all your export tasks or filter the results based on task ID or task status.
    See also: AWS API Documentation
    
    Exceptions
    
    :example: response = client.describe_export_tasks(
        taskId='string',
        statusCode='CANCELLED'|'COMPLETED'|'FAILED'|'PENDING'|'PENDING_CANCEL'|'RUNNING',
        nextToken='string',
        limit=123
    )
    
    
    :type taskId: string
    :param taskId: The ID of the export task. Specifying a task ID filters the results to zero or one export tasks.

    :type statusCode: string
    :param statusCode: The status code of the export task. Specifying a status code filters the results to zero or more export tasks.

    :type nextToken: string
    :param nextToken: The token for the next set of items to return. (You received this token from a previous call.)

    :type limit: integer
    :param limit: The maximum number of items returned. If you don\'t specify a value, the default is up to 50 items.

    :rtype: dict

ReturnsResponse Syntax
{
    'exportTasks': [
        {
            'taskId': 'string',
            'taskName': 'string',
            'logGroupName': 'string',
            'from': 123,
            'to': 123,
            'destination': 'string',
            'destinationPrefix': 'string',
            'status': {
                'code': 'CANCELLED'|'COMPLETED'|'FAILED'|'PENDING'|'PENDING_CANCEL'|'RUNNING',
                'message': 'string'
            },
            'executionInfo': {
                'creationTime': 123,
                'completionTime': 123
            }
        },
    ],
    'nextToken': 'string'
}


Response Structure

(dict) --

exportTasks (list) --
The export tasks.

(dict) --
Represents an export task.

taskId (string) --
The ID of the export task.

taskName (string) --
The name of the export task.

logGroupName (string) --
The name of the log group from which logs data was exported.

from (integer) --
The start time, expressed as the number of milliseconds after Jan 1, 1970 00:00:00 UTC. Events with a timestamp before this time are not exported.

to (integer) --
The end time, expressed as the number of milliseconds after Jan 1, 1970 00:00:00 UTC. Events with a timestamp later than this time are not exported.

destination (string) --
The name of Amazon S3 bucket to which the log data was exported.

destinationPrefix (string) --
The prefix that was used as the start of Amazon S3 key for every object exported.

status (dict) --
The status of the export task.

code (string) --
The status code of the export task.

message (string) --
The status message related to the status code.



executionInfo (dict) --
Execution info about the export task.

creationTime (integer) --
The creation time of the export task, expressed as the number of milliseconds after Jan 1, 1970 00:00:00 UTC.

completionTime (integer) --
The completion time of the export task, expressed as the number of milliseconds after Jan 1, 1970 00:00:00 UTC.







nextToken (string) --
The token for the next set of items to return. The token expires after 24 hours.







Exceptions

CloudWatchLogs.Client.exceptions.InvalidParameterException
CloudWatchLogs.Client.exceptions.ServiceUnavailableException


    :return: {
        'exportTasks': [
            {
                'taskId': 'string',
                'taskName': 'string',
                'logGroupName': 'string',
                'from': 123,
                'to': 123,
                'destination': 'string',
                'destinationPrefix': 'string',
                'status': {
                    'code': 'CANCELLED'|'COMPLETED'|'FAILED'|'PENDING'|'PENDING_CANCEL'|'RUNNING',
                    'message': 'string'
                },
                'executionInfo': {
                    'creationTime': 123,
                    'completionTime': 123
                }
            },
        ],
        'nextToken': 'string'
    }
    
    
    :returns: 
    CloudWatchLogs.Client.exceptions.InvalidParameterException
    CloudWatchLogs.Client.exceptions.ServiceUnavailableException
    
    """
    pass

def describe_log_groups(logGroupNamePrefix=None, nextToken=None, limit=None):
    """
    Lists the specified log groups. You can list all your log groups or filter the results by prefix. The results are ASCII-sorted by log group name.
    See also: AWS API Documentation
    
    Exceptions
    
    :example: response = client.describe_log_groups(
        logGroupNamePrefix='string',
        nextToken='string',
        limit=123
    )
    
    
    :type logGroupNamePrefix: string
    :param logGroupNamePrefix: The prefix to match.

    :type nextToken: string
    :param nextToken: The token for the next set of items to return. (You received this token from a previous call.)

    :type limit: integer
    :param limit: The maximum number of items returned. If you don\'t specify a value, the default is up to 50 items.

    :rtype: dict

ReturnsResponse Syntax
{
    'logGroups': [
        {
            'logGroupName': 'string',
            'creationTime': 123,
            'retentionInDays': 123,
            'metricFilterCount': 123,
            'arn': 'string',
            'storedBytes': 123,
            'kmsKeyId': 'string'
        },
    ],
    'nextToken': 'string'
}


Response Structure

(dict) --

logGroups (list) --
The log groups.

(dict) --
Represents a log group.

logGroupName (string) --
The name of the log group.

creationTime (integer) --
The creation time of the log group, expressed as the number of milliseconds after Jan 1, 1970 00:00:00 UTC.

retentionInDays (integer) --
The number of days to retain the log events in the specified log group. Possible values are: 1, 3, 5, 7, 14, 30, 60, 90, 120, 150, 180, 365, 400, 545, 731, 1827, and 3653.

metricFilterCount (integer) --
The number of metric filters.

arn (string) --
The Amazon Resource Name (ARN) of the log group.

storedBytes (integer) --
The number of bytes stored.

kmsKeyId (string) --
The Amazon Resource Name (ARN) of the CMK to use when encrypting log data.





nextToken (string) --
The token for the next set of items to return. The token expires after 24 hours.







Exceptions

CloudWatchLogs.Client.exceptions.InvalidParameterException
CloudWatchLogs.Client.exceptions.ServiceUnavailableException


    :return: {
        'logGroups': [
            {
                'logGroupName': 'string',
                'creationTime': 123,
                'retentionInDays': 123,
                'metricFilterCount': 123,
                'arn': 'string',
                'storedBytes': 123,
                'kmsKeyId': 'string'
            },
        ],
        'nextToken': 'string'
    }
    
    
    :returns: 
    CloudWatchLogs.Client.exceptions.InvalidParameterException
    CloudWatchLogs.Client.exceptions.ServiceUnavailableException
    
    """
    pass

def describe_log_streams(logGroupName=None, logStreamNamePrefix=None, orderBy=None, descending=None, nextToken=None, limit=None):
    """
    Lists the log streams for the specified log group. You can list all the log streams or filter the results by prefix. You can also control how the results are ordered.
    This operation has a limit of five transactions per second, after which transactions are throttled.
    See also: AWS API Documentation
    
    Exceptions
    
    :example: response = client.describe_log_streams(
        logGroupName='string',
        logStreamNamePrefix='string',
        orderBy='LogStreamName'|'LastEventTime',
        descending=True|False,
        nextToken='string',
        limit=123
    )
    
    
    :type logGroupName: string
    :param logGroupName: [REQUIRED]\nThe name of the log group.\n

    :type logStreamNamePrefix: string
    :param logStreamNamePrefix: The prefix to match.\nIf orderBy is LastEventTime ,you cannot specify this parameter.\n

    :type orderBy: string
    :param orderBy: If the value is LogStreamName , the results are ordered by log stream name. If the value is LastEventTime , the results are ordered by the event time. The default value is LogStreamName .\nIf you order the results by event time, you cannot specify the logStreamNamePrefix parameter.\nlastEventTimestamp represents the time of the most recent log event in the log stream in CloudWatch Logs. This number is expressed as the number of milliseconds after Jan 1, 1970 00:00:00 UTC. lastEventTimeStamp updates on an eventual consistency basis. It typically updates in less than an hour from ingestion, but may take longer in some rare situations.\n

    :type descending: boolean
    :param descending: If the value is true, results are returned in descending order. If the value is to false, results are returned in ascending order. The default value is false.

    :type nextToken: string
    :param nextToken: The token for the next set of items to return. (You received this token from a previous call.)

    :type limit: integer
    :param limit: The maximum number of items returned. If you don\'t specify a value, the default is up to 50 items.

    :rtype: dict

ReturnsResponse Syntax
{
    'logStreams': [
        {
            'logStreamName': 'string',
            'creationTime': 123,
            'firstEventTimestamp': 123,
            'lastEventTimestamp': 123,
            'lastIngestionTime': 123,
            'uploadSequenceToken': 'string',
            'arn': 'string',
            'storedBytes': 123
        },
    ],
    'nextToken': 'string'
}


Response Structure

(dict) --

logStreams (list) --
The log streams.

(dict) --
Represents a log stream, which is a sequence of log events from a single emitter of logs.

logStreamName (string) --
The name of the log stream.

creationTime (integer) --
The creation time of the stream, expressed as the number of milliseconds after Jan 1, 1970 00:00:00 UTC.

firstEventTimestamp (integer) --
The time of the first event, expressed as the number of milliseconds after Jan 1, 1970 00:00:00 UTC.

lastEventTimestamp (integer) --
The time of the most recent log event in the log stream in CloudWatch Logs. This number is expressed as the number of milliseconds after Jan 1, 1970 00:00:00 UTC. The lastEventTime value updates on an eventual consistency basis. It typically updates in less than an hour from ingestion, but may take longer in some rare situations.

lastIngestionTime (integer) --
The ingestion time, expressed as the number of milliseconds after Jan 1, 1970 00:00:00 UTC.

uploadSequenceToken (string) --
The sequence token.

arn (string) --
The Amazon Resource Name (ARN) of the log stream.

storedBytes (integer) --
The number of bytes stored.

IMPORTANT: On June 17, 2019, this parameter was deprecated for log streams, and is always reported as zero. This change applies only to log streams. The storedBytes parameter for log groups is not affected.






nextToken (string) --
The token for the next set of items to return. The token expires after 24 hours.







Exceptions

CloudWatchLogs.Client.exceptions.InvalidParameterException
CloudWatchLogs.Client.exceptions.ResourceNotFoundException
CloudWatchLogs.Client.exceptions.ServiceUnavailableException


    :return: {
        'logStreams': [
            {
                'logStreamName': 'string',
                'creationTime': 123,
                'firstEventTimestamp': 123,
                'lastEventTimestamp': 123,
                'lastIngestionTime': 123,
                'uploadSequenceToken': 'string',
                'arn': 'string',
                'storedBytes': 123
            },
        ],
        'nextToken': 'string'
    }
    
    
    :returns: 
    CloudWatchLogs.Client.exceptions.InvalidParameterException
    CloudWatchLogs.Client.exceptions.ResourceNotFoundException
    CloudWatchLogs.Client.exceptions.ServiceUnavailableException
    
    """
    pass

def describe_metric_filters(logGroupName=None, filterNamePrefix=None, nextToken=None, limit=None, metricName=None, metricNamespace=None):
    """
    Lists the specified metric filters. You can list all the metric filters or filter the results by log name, prefix, metric name, or metric namespace. The results are ASCII-sorted by filter name.
    See also: AWS API Documentation
    
    Exceptions
    
    :example: response = client.describe_metric_filters(
        logGroupName='string',
        filterNamePrefix='string',
        nextToken='string',
        limit=123,
        metricName='string',
        metricNamespace='string'
    )
    
    
    :type logGroupName: string
    :param logGroupName: The name of the log group.

    :type filterNamePrefix: string
    :param filterNamePrefix: The prefix to match.

    :type nextToken: string
    :param nextToken: The token for the next set of items to return. (You received this token from a previous call.)

    :type limit: integer
    :param limit: The maximum number of items returned. If you don\'t specify a value, the default is up to 50 items.

    :type metricName: string
    :param metricName: Filters results to include only those with the specified metric name. If you include this parameter in your request, you must also include the metricNamespace parameter.

    :type metricNamespace: string
    :param metricNamespace: Filters results to include only those in the specified namespace. If you include this parameter in your request, you must also include the metricName parameter.

    :rtype: dict

ReturnsResponse Syntax
{
    'metricFilters': [
        {
            'filterName': 'string',
            'filterPattern': 'string',
            'metricTransformations': [
                {
                    'metricName': 'string',
                    'metricNamespace': 'string',
                    'metricValue': 'string',
                    'defaultValue': 123.0
                },
            ],
            'creationTime': 123,
            'logGroupName': 'string'
        },
    ],
    'nextToken': 'string'
}


Response Structure

(dict) --

metricFilters (list) --
The metric filters.

(dict) --
Metric filters express how CloudWatch Logs would extract metric observations from ingested log events and transform them into metric data in a CloudWatch metric.

filterName (string) --
The name of the metric filter.

filterPattern (string) --
A symbolic description of how CloudWatch Logs should interpret the data in each log event. For example, a log event may contain timestamps, IP addresses, strings, and so on. You use the filter pattern to specify what to look for in the log event message.

metricTransformations (list) --
The metric transformations.

(dict) --
Indicates how to transform ingested log events to metric data in a CloudWatch metric.

metricName (string) --
The name of the CloudWatch metric.

metricNamespace (string) --
A custom namespace to contain your metric in CloudWatch. Use namespaces to group together metrics that are similar. For more information, see Namespaces .

metricValue (string) --
The value to publish to the CloudWatch metric when a filter pattern matches a log event.

defaultValue (float) --
(Optional) The value to emit when a filter pattern does not match a log event. This value can be null.





creationTime (integer) --
The creation time of the metric filter, expressed as the number of milliseconds after Jan 1, 1970 00:00:00 UTC.

logGroupName (string) --
The name of the log group.





nextToken (string) --
The token for the next set of items to return. The token expires after 24 hours.







Exceptions

CloudWatchLogs.Client.exceptions.InvalidParameterException
CloudWatchLogs.Client.exceptions.ResourceNotFoundException
CloudWatchLogs.Client.exceptions.ServiceUnavailableException


    :return: {
        'metricFilters': [
            {
                'filterName': 'string',
                'filterPattern': 'string',
                'metricTransformations': [
                    {
                        'metricName': 'string',
                        'metricNamespace': 'string',
                        'metricValue': 'string',
                        'defaultValue': 123.0
                    },
                ],
                'creationTime': 123,
                'logGroupName': 'string'
            },
        ],
        'nextToken': 'string'
    }
    
    
    :returns: 
    CloudWatchLogs.Client.exceptions.InvalidParameterException
    CloudWatchLogs.Client.exceptions.ResourceNotFoundException
    CloudWatchLogs.Client.exceptions.ServiceUnavailableException
    
    """
    pass

def describe_queries(logGroupName=None, status=None, maxResults=None, nextToken=None):
    """
    Returns a list of CloudWatch Logs Insights queries that are scheduled, executing, or have been executed recently in this account. You can request all queries, or limit it to queries of a specific log group or queries with a certain status.
    See also: AWS API Documentation
    
    Exceptions
    
    :example: response = client.describe_queries(
        logGroupName='string',
        status='Scheduled'|'Running'|'Complete'|'Failed'|'Cancelled',
        maxResults=123,
        nextToken='string'
    )
    
    
    :type logGroupName: string
    :param logGroupName: Limits the returned queries to only those for the specified log group.

    :type status: string
    :param status: Limits the returned queries to only those that have the specified status. Valid values are Cancelled , Complete , Failed , Running , and Scheduled .

    :type maxResults: integer
    :param maxResults: Limits the number of returned queries to the specified number.

    :type nextToken: string
    :param nextToken: The token for the next set of items to return. The token expires after 24 hours.

    :rtype: dict

ReturnsResponse Syntax
{
    'queries': [
        {
            'queryId': 'string',
            'queryString': 'string',
            'status': 'Scheduled'|'Running'|'Complete'|'Failed'|'Cancelled',
            'createTime': 123,
            'logGroupName': 'string'
        },
    ],
    'nextToken': 'string'
}


Response Structure

(dict) --

queries (list) --
The list of queries that match the request.

(dict) --
Information about one CloudWatch Logs Insights query that matches the request in a DescribeQueries operation.

queryId (string) --
The unique ID number of this query.

queryString (string) --
The query string used in this query.

status (string) --
The status of this query. Possible values are Cancelled , Complete , Failed , Running , Scheduled , and Unknown .

createTime (integer) --
The date and time that this query was created.

logGroupName (string) --
The name of the log group scanned by this query.





nextToken (string) --
The token for the next set of items to return. The token expires after 24 hours.







Exceptions

CloudWatchLogs.Client.exceptions.InvalidParameterException
CloudWatchLogs.Client.exceptions.ResourceNotFoundException
CloudWatchLogs.Client.exceptions.ServiceUnavailableException


    :return: {
        'queries': [
            {
                'queryId': 'string',
                'queryString': 'string',
                'status': 'Scheduled'|'Running'|'Complete'|'Failed'|'Cancelled',
                'createTime': 123,
                'logGroupName': 'string'
            },
        ],
        'nextToken': 'string'
    }
    
    
    :returns: 
    CloudWatchLogs.Client.exceptions.InvalidParameterException
    CloudWatchLogs.Client.exceptions.ResourceNotFoundException
    CloudWatchLogs.Client.exceptions.ServiceUnavailableException
    
    """
    pass

def describe_query_definitions(queryDefinitionNamePrefix=None, maxResults=None, nextToken=None):
    """
    See also: AWS API Documentation
    
    Exceptions
    
    :example: response = client.describe_query_definitions(
        queryDefinitionNamePrefix='string',
        maxResults=123,
        nextToken='string'
    )
    
    
    :type queryDefinitionNamePrefix: string
    :param queryDefinitionNamePrefix: 

    :type maxResults: integer
    :param maxResults: 

    :type nextToken: string
    :param nextToken: The token for the next set of items to return. The token expires after 24 hours.

    :rtype: dict

ReturnsResponse Syntax
{
    'queryDefinitions': [
        {
            'queryDefinitionId': 'string',
            'name': 'string',
            'queryString': 'string',
            'lastModified': 123,
            'logGroupNames': [
                'string',
            ]
        },
    ],
    'nextToken': 'string'
}


Response Structure

(dict) --

queryDefinitions (list) --

(dict) --
queryDefinitionId (string) --
name (string) --
queryString (string) --
lastModified (integer) --
logGroupNames (list) --
(string) --






nextToken (string) --
The token for the next set of items to return. The token expires after 24 hours.







Exceptions

CloudWatchLogs.Client.exceptions.InvalidParameterException
CloudWatchLogs.Client.exceptions.ServiceUnavailableException


    :return: {
        'queryDefinitions': [
            {
                'queryDefinitionId': 'string',
                'name': 'string',
                'queryString': 'string',
                'lastModified': 123,
                'logGroupNames': [
                    'string',
                ]
            },
        ],
        'nextToken': 'string'
    }
    
    
    :returns: 
    (dict) --
    queryDefinitionId (string) --
    name (string) --
    queryString (string) --
    lastModified (integer) --
    logGroupNames (list) --
    (string) --
    
    
    
    
    
    """
    pass

def describe_resource_policies(nextToken=None, limit=None):
    """
    Lists the resource policies in this account.
    See also: AWS API Documentation
    
    Exceptions
    
    :example: response = client.describe_resource_policies(
        nextToken='string',
        limit=123
    )
    
    
    :type nextToken: string
    :param nextToken: The token for the next set of items to return. The token expires after 24 hours.

    :type limit: integer
    :param limit: The maximum number of resource policies to be displayed with one call of this API.

    :rtype: dict

ReturnsResponse Syntax
{
    'resourcePolicies': [
        {
            'policyName': 'string',
            'policyDocument': 'string',
            'lastUpdatedTime': 123
        },
    ],
    'nextToken': 'string'
}


Response Structure

(dict) --

resourcePolicies (list) --
The resource policies that exist in this account.

(dict) --
A policy enabling one or more entities to put logs to a log group in this account.

policyName (string) --
The name of the resource policy.

policyDocument (string) --
The details of the policy.

lastUpdatedTime (integer) --
Timestamp showing when this policy was last updated, expressed as the number of milliseconds after Jan 1, 1970 00:00:00 UTC.





nextToken (string) --
The token for the next set of items to return. The token expires after 24 hours.







Exceptions

CloudWatchLogs.Client.exceptions.InvalidParameterException
CloudWatchLogs.Client.exceptions.ServiceUnavailableException


    :return: {
        'resourcePolicies': [
            {
                'policyName': 'string',
                'policyDocument': 'string',
                'lastUpdatedTime': 123
            },
        ],
        'nextToken': 'string'
    }
    
    
    :returns: 
    CloudWatchLogs.Client.exceptions.InvalidParameterException
    CloudWatchLogs.Client.exceptions.ServiceUnavailableException
    
    """
    pass

def describe_subscription_filters(logGroupName=None, filterNamePrefix=None, nextToken=None, limit=None):
    """
    Lists the subscription filters for the specified log group. You can list all the subscription filters or filter the results by prefix. The results are ASCII-sorted by filter name.
    See also: AWS API Documentation
    
    Exceptions
    
    :example: response = client.describe_subscription_filters(
        logGroupName='string',
        filterNamePrefix='string',
        nextToken='string',
        limit=123
    )
    
    
    :type logGroupName: string
    :param logGroupName: [REQUIRED]\nThe name of the log group.\n

    :type filterNamePrefix: string
    :param filterNamePrefix: The prefix to match. If you don\'t specify a value, no prefix filter is applied.

    :type nextToken: string
    :param nextToken: The token for the next set of items to return. (You received this token from a previous call.)

    :type limit: integer
    :param limit: The maximum number of items returned. If you don\'t specify a value, the default is up to 50 items.

    :rtype: dict

ReturnsResponse Syntax
{
    'subscriptionFilters': [
        {
            'filterName': 'string',
            'logGroupName': 'string',
            'filterPattern': 'string',
            'destinationArn': 'string',
            'roleArn': 'string',
            'distribution': 'Random'|'ByLogStream',
            'creationTime': 123
        },
    ],
    'nextToken': 'string'
}


Response Structure

(dict) --

subscriptionFilters (list) --
The subscription filters.

(dict) --
Represents a subscription filter.

filterName (string) --
The name of the subscription filter.

logGroupName (string) --
The name of the log group.

filterPattern (string) --
A symbolic description of how CloudWatch Logs should interpret the data in each log event. For example, a log event may contain timestamps, IP addresses, strings, and so on. You use the filter pattern to specify what to look for in the log event message.

destinationArn (string) --
The Amazon Resource Name (ARN) of the destination.

roleArn (string) --

distribution (string) --
The method used to distribute log data to the destination, which can be either random or grouped by log stream.

creationTime (integer) --
The creation time of the subscription filter, expressed as the number of milliseconds after Jan 1, 1970 00:00:00 UTC.





nextToken (string) --
The token for the next set of items to return. The token expires after 24 hours.







Exceptions

CloudWatchLogs.Client.exceptions.InvalidParameterException
CloudWatchLogs.Client.exceptions.ResourceNotFoundException
CloudWatchLogs.Client.exceptions.ServiceUnavailableException


    :return: {
        'subscriptionFilters': [
            {
                'filterName': 'string',
                'logGroupName': 'string',
                'filterPattern': 'string',
                'destinationArn': 'string',
                'roleArn': 'string',
                'distribution': 'Random'|'ByLogStream',
                'creationTime': 123
            },
        ],
        'nextToken': 'string'
    }
    
    
    :returns: 
    CloudWatchLogs.Client.exceptions.InvalidParameterException
    CloudWatchLogs.Client.exceptions.ResourceNotFoundException
    CloudWatchLogs.Client.exceptions.ServiceUnavailableException
    
    """
    pass

def disassociate_kms_key(logGroupName=None):
    """
    Disassociates the associated AWS Key Management Service (AWS KMS) customer master key (CMK) from the specified log group.
    After the AWS KMS CMK is disassociated from the log group, AWS CloudWatch Logs stops encrypting newly ingested data for the log group. All previously ingested data remains encrypted, and AWS CloudWatch Logs requires permissions for the CMK whenever the encrypted data is requested.
    Note that it can take up to 5 minutes for this operation to take effect.
    See also: AWS API Documentation
    
    Exceptions
    
    :example: response = client.disassociate_kms_key(
        logGroupName='string'
    )
    
    
    :type logGroupName: string
    :param logGroupName: [REQUIRED]\nThe name of the log group.\n

    """
    pass

def filter_log_events(logGroupName=None, logStreamNames=None, logStreamNamePrefix=None, startTime=None, endTime=None, filterPattern=None, nextToken=None, limit=None, interleaved=None):
    """
    Lists log events from the specified log group. You can list all the log events or filter the results using a filter pattern, a time range, and the name of the log stream.
    By default, this operation returns as many log events as can fit in 1 MB (up to 10,000 log events), or all the events found within the time range that you specify. If the results include a token, then there are more log events available, and you can get additional results by specifying the token in a subsequent call.
    See also: AWS API Documentation
    
    Exceptions
    
    :example: response = client.filter_log_events(
        logGroupName='string',
        logStreamNames=[
            'string',
        ],
        logStreamNamePrefix='string',
        startTime=123,
        endTime=123,
        filterPattern='string',
        nextToken='string',
        limit=123,
        interleaved=True|False
    )
    
    
    :type logGroupName: string
    :param logGroupName: [REQUIRED]\nThe name of the log group to search.\n

    :type logStreamNames: list
    :param logStreamNames: Filters the results to only logs from the log streams in this list.\nIf you specify a value for both logStreamNamePrefix and logStreamNames , the action returns an InvalidParameterException error.\n\n(string) --\n\n

    :type logStreamNamePrefix: string
    :param logStreamNamePrefix: Filters the results to include only events from log streams that have names starting with this prefix.\nIf you specify a value for both logStreamNamePrefix and logStreamNames , but the value for logStreamNamePrefix does not match any log stream names specified in logStreamNames , the action returns an InvalidParameterException error.\n

    :type startTime: integer
    :param startTime: The start of the time range, expressed as the number of milliseconds after Jan 1, 1970 00:00:00 UTC. Events with a timestamp before this time are not returned.

    :type endTime: integer
    :param endTime: The end of the time range, expressed as the number of milliseconds after Jan 1, 1970 00:00:00 UTC. Events with a timestamp later than this time are not returned.

    :type filterPattern: string
    :param filterPattern: The filter pattern to use. For more information, see Filter and Pattern Syntax .\nIf not provided, all the events are matched.\n

    :type nextToken: string
    :param nextToken: The token for the next set of events to return. (You received this token from a previous call.)

    :type limit: integer
    :param limit: The maximum number of events to return. The default is 10,000 events.

    :type interleaved: boolean
    :param interleaved: If the value is true, the operation makes a best effort to provide responses that contain events from multiple log streams within the log group, interleaved in a single response. If the value is false, all the matched log events in the first log stream are searched first, then those in the next log stream, and so on. The default is false.\n\nIMPORTANT: Starting on June 17, 2019, this parameter will be ignored and the value will be assumed to be true. The response from this operation will always interleave events from multiple log streams within a log group.\n

    :rtype: dict

ReturnsResponse Syntax
{
    'events': [
        {
            'logStreamName': 'string',
            'timestamp': 123,
            'message': 'string',
            'ingestionTime': 123,
            'eventId': 'string'
        },
    ],
    'searchedLogStreams': [
        {
            'logStreamName': 'string',
            'searchedCompletely': True|False
        },
    ],
    'nextToken': 'string'
}


Response Structure

(dict) --

events (list) --
The matched events.

(dict) --
Represents a matched event.

logStreamName (string) --
The name of the log stream to which this event belongs.

timestamp (integer) --
The time the event occurred, expressed as the number of milliseconds after Jan 1, 1970 00:00:00 UTC.

message (string) --
The data contained in the log event.

ingestionTime (integer) --
The time the event was ingested, expressed as the number of milliseconds after Jan 1, 1970 00:00:00 UTC.

eventId (string) --
The ID of the event.





searchedLogStreams (list) --
Indicates which log streams have been searched and whether each has been searched completely.

(dict) --
Represents the search status of a log stream.

logStreamName (string) --
The name of the log stream.

searchedCompletely (boolean) --
Indicates whether all the events in this log stream were searched.





nextToken (string) --
The token to use when requesting the next set of items. The token expires after 24 hours.







Exceptions

CloudWatchLogs.Client.exceptions.InvalidParameterException
CloudWatchLogs.Client.exceptions.ResourceNotFoundException
CloudWatchLogs.Client.exceptions.ServiceUnavailableException


    :return: {
        'events': [
            {
                'logStreamName': 'string',
                'timestamp': 123,
                'message': 'string',
                'ingestionTime': 123,
                'eventId': 'string'
            },
        ],
        'searchedLogStreams': [
            {
                'logStreamName': 'string',
                'searchedCompletely': True|False
            },
        ],
        'nextToken': 'string'
    }
    
    
    :returns: 
    CloudWatchLogs.Client.exceptions.InvalidParameterException
    CloudWatchLogs.Client.exceptions.ResourceNotFoundException
    CloudWatchLogs.Client.exceptions.ServiceUnavailableException
    
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

def get_log_events(logGroupName=None, logStreamName=None, startTime=None, endTime=None, nextToken=None, limit=None, startFromHead=None):
    """
    Lists log events from the specified log stream. You can list all the log events or filter using a time range.
    By default, this operation returns as many log events as can fit in a response size of 1MB (up to 10,000 log events). You can get additional log events by specifying one of the tokens in a subsequent call.
    See also: AWS API Documentation
    
    Exceptions
    
    :example: response = client.get_log_events(
        logGroupName='string',
        logStreamName='string',
        startTime=123,
        endTime=123,
        nextToken='string',
        limit=123,
        startFromHead=True|False
    )
    
    
    :type logGroupName: string
    :param logGroupName: [REQUIRED]\nThe name of the log group.\n

    :type logStreamName: string
    :param logStreamName: [REQUIRED]\nThe name of the log stream.\n

    :type startTime: integer
    :param startTime: The start of the time range, expressed as the number of milliseconds after Jan 1, 1970 00:00:00 UTC. Events with a timestamp equal to this time or later than this time are included. Events with a timestamp earlier than this time are not included.

    :type endTime: integer
    :param endTime: The end of the time range, expressed as the number of milliseconds after Jan 1, 1970 00:00:00 UTC. Events with a timestamp equal to or later than this time are not included.

    :type nextToken: string
    :param nextToken: The token for the next set of items to return. (You received this token from a previous call.)\nUsing this token works only when you specify true for startFromHead .\n

    :type limit: integer
    :param limit: The maximum number of log events returned. If you don\'t specify a value, the maximum is as many log events as can fit in a response size of 1 MB, up to 10,000 log events.

    :type startFromHead: boolean
    :param startFromHead: If the value is true, the earliest log events are returned first. If the value is false, the latest log events are returned first. The default value is false.\nIf you are using nextToken in this operation, you must specify true for startFromHead .\n

    :rtype: dict

ReturnsResponse Syntax
{
    'events': [
        {
            'timestamp': 123,
            'message': 'string',
            'ingestionTime': 123
        },
    ],
    'nextForwardToken': 'string',
    'nextBackwardToken': 'string'
}


Response Structure

(dict) --

events (list) --
The events.

(dict) --
Represents a log event.

timestamp (integer) --
The time the event occurred, expressed as the number of milliseconds after Jan 1, 1970 00:00:00 UTC.

message (string) --
The data contained in the log event.

ingestionTime (integer) --
The time the event was ingested, expressed as the number of milliseconds after Jan 1, 1970 00:00:00 UTC.





nextForwardToken (string) --
The token for the next set of items in the forward direction. The token expires after 24 hours. If you have reached the end of the stream, it will return the same token you passed in.

nextBackwardToken (string) --
The token for the next set of items in the backward direction. The token expires after 24 hours. This token will never be null. If you have reached the end of the stream, it will return the same token you passed in.







Exceptions

CloudWatchLogs.Client.exceptions.InvalidParameterException
CloudWatchLogs.Client.exceptions.ResourceNotFoundException
CloudWatchLogs.Client.exceptions.ServiceUnavailableException


    :return: {
        'events': [
            {
                'timestamp': 123,
                'message': 'string',
                'ingestionTime': 123
            },
        ],
        'nextForwardToken': 'string',
        'nextBackwardToken': 'string'
    }
    
    
    :returns: 
    CloudWatchLogs.Client.exceptions.InvalidParameterException
    CloudWatchLogs.Client.exceptions.ResourceNotFoundException
    CloudWatchLogs.Client.exceptions.ServiceUnavailableException
    
    """
    pass

def get_log_group_fields(logGroupName=None, time=None):
    """
    Returns a list of the fields that are included in log events in the specified log group, along with the percentage of log events that contain each field. The search is limited to a time period that you specify.
    In the results, fields that start with @ are fields generated by CloudWatch Logs. For example, @timestamp is the timestamp of each log event. For more information about the fields that are generated by CloudWatch logs, see Supported Logs and Discovered Fields .
    The response results are sorted by the frequency percentage, starting with the highest percentage.
    See also: AWS API Documentation
    
    Exceptions
    
    :example: response = client.get_log_group_fields(
        logGroupName='string',
        time=123
    )
    
    
    :type logGroupName: string
    :param logGroupName: [REQUIRED]\nThe name of the log group to search.\n

    :type time: integer
    :param time: The time to set as the center of the query. If you specify time , the 8 minutes before and 8 minutes after this time are searched. If you omit time , the past 15 minutes are queried.\nThe time value is specified as epoch time, the number of seconds since January 1, 1970, 00:00:00 UTC.\n

    :rtype: dict

ReturnsResponse Syntax
{
    'logGroupFields': [
        {
            'name': 'string',
            'percent': 123
        },
    ]
}


Response Structure

(dict) --

logGroupFields (list) --
The array of fields found in the query. Each object in the array contains the name of the field, along with the percentage of time it appeared in the log events that were queried.

(dict) --
The fields contained in log events found by a GetLogGroupFields operation, along with the percentage of queried log events in which each field appears.

name (string) --
The name of a log field.

percent (integer) --
The percentage of log events queried that contained the field.











Exceptions

CloudWatchLogs.Client.exceptions.InvalidParameterException
CloudWatchLogs.Client.exceptions.LimitExceededException
CloudWatchLogs.Client.exceptions.ResourceNotFoundException
CloudWatchLogs.Client.exceptions.ServiceUnavailableException


    :return: {
        'logGroupFields': [
            {
                'name': 'string',
                'percent': 123
            },
        ]
    }
    
    
    :returns: 
    CloudWatchLogs.Client.exceptions.InvalidParameterException
    CloudWatchLogs.Client.exceptions.LimitExceededException
    CloudWatchLogs.Client.exceptions.ResourceNotFoundException
    CloudWatchLogs.Client.exceptions.ServiceUnavailableException
    
    """
    pass

def get_log_record(logRecordPointer=None):
    """
    Retrieves all the fields and values of a single log event. All fields are retrieved, even if the original query that produced the logRecordPointer retrieved only a subset of fields. Fields are returned as field name/field value pairs.
    Additionally, the entire unparsed log event is returned within @message .
    See also: AWS API Documentation
    
    Exceptions
    
    :example: response = client.get_log_record(
        logRecordPointer='string'
    )
    
    
    :type logRecordPointer: string
    :param logRecordPointer: [REQUIRED]\nThe pointer corresponding to the log event record you want to retrieve. You get this from the response of a GetQueryResults operation. In that response, the value of the @ptr field for a log event is the value to use as logRecordPointer to retrieve that complete log event record.\n

    :rtype: dict
ReturnsResponse Syntax{
    'logRecord': {
        'string': 'string'
    }
}


Response Structure

(dict) --
logRecord (dict) --The requested log event, as a JSON string.

(string) --
(string) --









Exceptions

CloudWatchLogs.Client.exceptions.InvalidParameterException
CloudWatchLogs.Client.exceptions.LimitExceededException
CloudWatchLogs.Client.exceptions.ResourceNotFoundException
CloudWatchLogs.Client.exceptions.ServiceUnavailableException


    :return: {
        'logRecord': {
            'string': 'string'
        }
    }
    
    
    :returns: 
    CloudWatchLogs.Client.exceptions.InvalidParameterException
    CloudWatchLogs.Client.exceptions.LimitExceededException
    CloudWatchLogs.Client.exceptions.ResourceNotFoundException
    CloudWatchLogs.Client.exceptions.ServiceUnavailableException
    
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

def get_query_results(queryId=None):
    """
    Returns the results from the specified query.
    Only the fields requested in the query are returned, along with a @ptr field which is the identifier for the log record. You can use the value of @ptr in a GetLogRecord operation to get the full log record.
    If the value of the Status field in the output is Running , this operation returns only partial results. If you see a value of Scheduled or Running for the status, you can retry the operation later to see the final results.
    See also: AWS API Documentation
    
    Exceptions
    
    :example: response = client.get_query_results(
        queryId='string'
    )
    
    
    :type queryId: string
    :param queryId: [REQUIRED]\nThe ID number of the query.\n

    :rtype: dict
ReturnsResponse Syntax{
    'results': [
        [
            {
                'field': 'string',
                'value': 'string'
            },
        ],
    ],
    'statistics': {
        'recordsMatched': 123.0,
        'recordsScanned': 123.0,
        'bytesScanned': 123.0
    },
    'status': 'Scheduled'|'Running'|'Complete'|'Failed'|'Cancelled'
}


Response Structure

(dict) --
results (list) --The log events that matched the query criteria during the most recent time it ran.
The results value is an array of arrays. Each log event is one object in the top-level array. Each of these log event objects is an array of field /value pairs.

(list) --
(dict) --Contains one field from one log event returned by a CloudWatch Logs Insights query, along with the value of that field.
For more information about the fields that are generated by CloudWatch logs, see Supported Logs and Discovered Fields .

field (string) --The log event field.

value (string) --The value of this field.







statistics (dict) --Includes the number of log events scanned by the query, the number of log events that matched the query criteria, and the total number of bytes in the log events that were scanned.

recordsMatched (float) --The number of log events that matched the query string.

recordsScanned (float) --The total number of log events scanned during the query.

bytesScanned (float) --The total number of bytes in the log events scanned during the query.



status (string) --The status of the most recent running of the query. Possible values are Cancelled , Complete , Failed , Running , Scheduled , Timeout , and Unknown .
Queries time out after 15 minutes of execution. To avoid having your queries time out, reduce the time range being searched, or partition your query into a number of queries.






Exceptions

CloudWatchLogs.Client.exceptions.InvalidParameterException
CloudWatchLogs.Client.exceptions.ResourceNotFoundException
CloudWatchLogs.Client.exceptions.ServiceUnavailableException


    :return: {
        'results': [
            [
                {
                    'field': 'string',
                    'value': 'string'
                },
            ],
        ],
        'statistics': {
            'recordsMatched': 123.0,
            'recordsScanned': 123.0,
            'bytesScanned': 123.0
        },
        'status': 'Scheduled'|'Running'|'Complete'|'Failed'|'Cancelled'
    }
    
    
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

def list_tags_log_group(logGroupName=None):
    """
    Lists the tags for the specified log group.
    See also: AWS API Documentation
    
    Exceptions
    
    :example: response = client.list_tags_log_group(
        logGroupName='string'
    )
    
    
    :type logGroupName: string
    :param logGroupName: [REQUIRED]\nThe name of the log group.\n

    :rtype: dict
ReturnsResponse Syntax{
    'tags': {
        'string': 'string'
    }
}


Response Structure

(dict) --
tags (dict) --The tags for the log group.

(string) --
(string) --









Exceptions

CloudWatchLogs.Client.exceptions.ResourceNotFoundException
CloudWatchLogs.Client.exceptions.ServiceUnavailableException


    :return: {
        'tags': {
            'string': 'string'
        }
    }
    
    
    :returns: 
    CloudWatchLogs.Client.exceptions.ResourceNotFoundException
    CloudWatchLogs.Client.exceptions.ServiceUnavailableException
    
    """
    pass

def put_destination(destinationName=None, targetArn=None, roleArn=None):
    """
    Creates or updates a destination. This operation is used only to create destinations for cross-account subscriptions.
    A destination encapsulates a physical resource (such as an Amazon Kinesis stream) and enables you to subscribe to a real-time stream of log events for a different account, ingested using PutLogEvents .
    Through an access policy, a destination controls what is written to it. By default, PutDestination does not set any access policy with the destination, which means a cross-account user cannot call PutSubscriptionFilter against this destination. To enable this, the destination owner must call PutDestinationPolicy after PutDestination .
    See also: AWS API Documentation
    
    Exceptions
    
    :example: response = client.put_destination(
        destinationName='string',
        targetArn='string',
        roleArn='string'
    )
    
    
    :type destinationName: string
    :param destinationName: [REQUIRED]\nA name for the destination.\n

    :type targetArn: string
    :param targetArn: [REQUIRED]\nThe ARN of an Amazon Kinesis stream to which to deliver matching log events.\n

    :type roleArn: string
    :param roleArn: [REQUIRED]\nThe ARN of an IAM role that grants CloudWatch Logs permissions to call the Amazon Kinesis PutRecord operation on the destination stream.\n

    :rtype: dict

ReturnsResponse Syntax
{
    'destination': {
        'destinationName': 'string',
        'targetArn': 'string',
        'roleArn': 'string',
        'accessPolicy': 'string',
        'arn': 'string',
        'creationTime': 123
    }
}


Response Structure

(dict) --

destination (dict) --
The destination.

destinationName (string) --
The name of the destination.

targetArn (string) --
The Amazon Resource Name (ARN) of the physical target to where the log events are delivered (for example, a Kinesis stream).

roleArn (string) --
A role for impersonation, used when delivering log events to the target.

accessPolicy (string) --
An IAM policy document that governs which AWS accounts can create subscription filters against this destination.

arn (string) --
The ARN of this destination.

creationTime (integer) --
The creation time of the destination, expressed as the number of milliseconds after Jan 1, 1970 00:00:00 UTC.









Exceptions

CloudWatchLogs.Client.exceptions.InvalidParameterException
CloudWatchLogs.Client.exceptions.OperationAbortedException
CloudWatchLogs.Client.exceptions.ServiceUnavailableException


    :return: {
        'destination': {
            'destinationName': 'string',
            'targetArn': 'string',
            'roleArn': 'string',
            'accessPolicy': 'string',
            'arn': 'string',
            'creationTime': 123
        }
    }
    
    
    :returns: 
    CloudWatchLogs.Client.exceptions.InvalidParameterException
    CloudWatchLogs.Client.exceptions.OperationAbortedException
    CloudWatchLogs.Client.exceptions.ServiceUnavailableException
    
    """
    pass

def put_destination_policy(destinationName=None, accessPolicy=None):
    """
    Creates or updates an access policy associated with an existing destination. An access policy is an IAM policy document that is used to authorize claims to register a subscription filter against a given destination.
    See also: AWS API Documentation
    
    Exceptions
    
    :example: response = client.put_destination_policy(
        destinationName='string',
        accessPolicy='string'
    )
    
    
    :type destinationName: string
    :param destinationName: [REQUIRED]\nA name for an existing destination.\n

    :type accessPolicy: string
    :param accessPolicy: [REQUIRED]\nAn IAM policy document that authorizes cross-account users to deliver their log events to the associated destination.\n

    :returns: 
    CloudWatchLogs.Client.exceptions.InvalidParameterException
    CloudWatchLogs.Client.exceptions.OperationAbortedException
    CloudWatchLogs.Client.exceptions.ServiceUnavailableException
    
    """
    pass

def put_log_events(logGroupName=None, logStreamName=None, logEvents=None, sequenceToken=None):
    """
    Uploads a batch of log events to the specified log stream.
    You must include the sequence token obtained from the response of the previous call. An upload in a newly created log stream does not require a sequence token. You can also get the sequence token in the expectedSequenceToken field from InvalidSequenceTokenException . If you call PutLogEvents twice within a narrow time period using the same value for sequenceToken , both calls may be successful, or one may be rejected.
    The batch of events must satisfy the following constraints:
    If a call to PutLogEvents returns "UnrecognizedClientException" the most likely cause is an invalid AWS access key ID or secret key.
    See also: AWS API Documentation
    
    Exceptions
    
    :example: response = client.put_log_events(
        logGroupName='string',
        logStreamName='string',
        logEvents=[
            {
                'timestamp': 123,
                'message': 'string'
            },
        ],
        sequenceToken='string'
    )
    
    
    :type logGroupName: string
    :param logGroupName: [REQUIRED]\nThe name of the log group.\n

    :type logStreamName: string
    :param logStreamName: [REQUIRED]\nThe name of the log stream.\n

    :type logEvents: list
    :param logEvents: [REQUIRED]\nThe log events.\n\n(dict) --Represents a log event, which is a record of activity that was recorded by the application or resource being monitored.\n\ntimestamp (integer) -- [REQUIRED]The time the event occurred, expressed as the number of milliseconds after Jan 1, 1970 00:00:00 UTC.\n\nmessage (string) -- [REQUIRED]The raw event message.\n\n\n\n\n

    :type sequenceToken: string
    :param sequenceToken: The sequence token obtained from the response of the previous PutLogEvents call. An upload in a newly created log stream does not require a sequence token. You can also get the sequence token using DescribeLogStreams . If you call PutLogEvents twice within a narrow time period using the same value for sequenceToken , both calls may be successful, or one may be rejected.

    :rtype: dict

ReturnsResponse Syntax
{
    'nextSequenceToken': 'string',
    'rejectedLogEventsInfo': {
        'tooNewLogEventStartIndex': 123,
        'tooOldLogEventEndIndex': 123,
        'expiredLogEventEndIndex': 123
    }
}


Response Structure

(dict) --

nextSequenceToken (string) --
The next sequence token.

rejectedLogEventsInfo (dict) --
The rejected events.

tooNewLogEventStartIndex (integer) --
The log events that are too new.

tooOldLogEventEndIndex (integer) --
The log events that are too old.

expiredLogEventEndIndex (integer) --
The expired log events.









Exceptions

CloudWatchLogs.Client.exceptions.InvalidParameterException
CloudWatchLogs.Client.exceptions.InvalidSequenceTokenException
CloudWatchLogs.Client.exceptions.DataAlreadyAcceptedException
CloudWatchLogs.Client.exceptions.ResourceNotFoundException
CloudWatchLogs.Client.exceptions.ServiceUnavailableException
CloudWatchLogs.Client.exceptions.UnrecognizedClientException


    :return: {
        'nextSequenceToken': 'string',
        'rejectedLogEventsInfo': {
            'tooNewLogEventStartIndex': 123,
            'tooOldLogEventEndIndex': 123,
            'expiredLogEventEndIndex': 123
        }
    }
    
    
    :returns: 
    logGroupName (string) -- [REQUIRED]
    The name of the log group.
    
    logStreamName (string) -- [REQUIRED]
    The name of the log stream.
    
    logEvents (list) -- [REQUIRED]
    The log events.
    
    (dict) --Represents a log event, which is a record of activity that was recorded by the application or resource being monitored.
    
    timestamp (integer) -- [REQUIRED]The time the event occurred, expressed as the number of milliseconds after Jan 1, 1970 00:00:00 UTC.
    
    message (string) -- [REQUIRED]The raw event message.
    
    
    
    
    
    sequenceToken (string) -- The sequence token obtained from the response of the previous PutLogEvents call. An upload in a newly created log stream does not require a sequence token. You can also get the sequence token using DescribeLogStreams . If you call PutLogEvents twice within a narrow time period using the same value for sequenceToken , both calls may be successful, or one may be rejected.
    
    """
    pass

def put_metric_filter(logGroupName=None, filterName=None, filterPattern=None, metricTransformations=None):
    """
    Creates or updates a metric filter and associates it with the specified log group. Metric filters allow you to configure rules to extract metric data from log events ingested through PutLogEvents .
    The maximum number of metric filters that can be associated with a log group is 100.
    See also: AWS API Documentation
    
    Exceptions
    
    :example: response = client.put_metric_filter(
        logGroupName='string',
        filterName='string',
        filterPattern='string',
        metricTransformations=[
            {
                'metricName': 'string',
                'metricNamespace': 'string',
                'metricValue': 'string',
                'defaultValue': 123.0
            },
        ]
    )
    
    
    :type logGroupName: string
    :param logGroupName: [REQUIRED]\nThe name of the log group.\n

    :type filterName: string
    :param filterName: [REQUIRED]\nA name for the metric filter.\n

    :type filterPattern: string
    :param filterPattern: [REQUIRED]\nA filter pattern for extracting metric data out of ingested log events.\n

    :type metricTransformations: list
    :param metricTransformations: [REQUIRED]\nA collection of information that defines how metric data gets emitted.\n\n(dict) --Indicates how to transform ingested log events to metric data in a CloudWatch metric.\n\nmetricName (string) -- [REQUIRED]The name of the CloudWatch metric.\n\nmetricNamespace (string) -- [REQUIRED]A custom namespace to contain your metric in CloudWatch. Use namespaces to group together metrics that are similar. For more information, see Namespaces .\n\nmetricValue (string) -- [REQUIRED]The value to publish to the CloudWatch metric when a filter pattern matches a log event.\n\ndefaultValue (float) --(Optional) The value to emit when a filter pattern does not match a log event. This value can be null.\n\n\n\n\n

    :returns: 
    CloudWatchLogs.Client.exceptions.InvalidParameterException
    CloudWatchLogs.Client.exceptions.ResourceNotFoundException
    CloudWatchLogs.Client.exceptions.OperationAbortedException
    CloudWatchLogs.Client.exceptions.LimitExceededException
    CloudWatchLogs.Client.exceptions.ServiceUnavailableException
    
    """
    pass

def put_query_definition(name=None, queryDefinitionId=None, logGroupNames=None, queryString=None):
    """
    See also: AWS API Documentation
    
    Exceptions
    
    :example: response = client.put_query_definition(
        name='string',
        queryDefinitionId='string',
        logGroupNames=[
            'string',
        ],
        queryString='string'
    )
    
    
    :type name: string
    :param name: [REQUIRED]

    :type queryDefinitionId: string
    :param queryDefinitionId: 

    :type logGroupNames: list
    :param logGroupNames: \n(string) --\n\n

    :type queryString: string
    :param queryString: [REQUIRED]

    :rtype: dict

ReturnsResponse Syntax
{
    'queryDefinitionId': 'string'
}


Response Structure

(dict) --
queryDefinitionId (string) --






Exceptions

CloudWatchLogs.Client.exceptions.InvalidParameterException
CloudWatchLogs.Client.exceptions.ResourceNotFoundException
CloudWatchLogs.Client.exceptions.ServiceUnavailableException


    :return: {
        'queryDefinitionId': 'string'
    }
    
    
    :returns: 
    (dict) --
    queryDefinitionId (string) --
    
    
    
    """
    pass

def put_resource_policy(policyName=None, policyDocument=None):
    """
    Creates or updates a resource policy allowing other AWS services to put log events to this account, such as Amazon Route 53. An account can have up to 10 resource policies per region.
    See also: AWS API Documentation
    
    Exceptions
    
    :example: response = client.put_resource_policy(
        policyName='string',
        policyDocument='string'
    )
    
    
    :type policyName: string
    :param policyName: Name of the new policy. This parameter is required.

    :type policyDocument: string
    :param policyDocument: Details of the new policy, including the identity of the principal that is enabled to put logs to this account. This is formatted as a JSON string. This parameter is required.\nThe following example creates a resource policy enabling the Route 53 service to put DNS query logs in to the specified log group. Replace 'logArn' with the ARN of your CloudWatch Logs resource, such as a log group or log stream.\n\n{ 'Version': '2012-10-17', 'Statement': [ { 'Sid': 'Route53LogsToCloudWatchLogs', 'Effect': 'Allow', 'Principal': { 'Service': [ 'route53.amazonaws.com' ] }, 'Action':'logs:PutLogEvents', 'Resource': 'logArn' } ] }\n

    :rtype: dict

ReturnsResponse Syntax
{
    'resourcePolicy': {
        'policyName': 'string',
        'policyDocument': 'string',
        'lastUpdatedTime': 123
    }
}


Response Structure

(dict) --

resourcePolicy (dict) --
The new policy.

policyName (string) --
The name of the resource policy.

policyDocument (string) --
The details of the policy.

lastUpdatedTime (integer) --
Timestamp showing when this policy was last updated, expressed as the number of milliseconds after Jan 1, 1970 00:00:00 UTC.









Exceptions

CloudWatchLogs.Client.exceptions.InvalidParameterException
CloudWatchLogs.Client.exceptions.LimitExceededException
CloudWatchLogs.Client.exceptions.ServiceUnavailableException


    :return: {
        'resourcePolicy': {
            'policyName': 'string',
            'policyDocument': 'string',
            'lastUpdatedTime': 123
        }
    }
    
    
    :returns: 
    CloudWatchLogs.Client.exceptions.InvalidParameterException
    CloudWatchLogs.Client.exceptions.LimitExceededException
    CloudWatchLogs.Client.exceptions.ServiceUnavailableException
    
    """
    pass

def put_retention_policy(logGroupName=None, retentionInDays=None):
    """
    Sets the retention of the specified log group. A retention policy allows you to configure the number of days for which to retain log events in the specified log group.
    See also: AWS API Documentation
    
    Exceptions
    
    :example: response = client.put_retention_policy(
        logGroupName='string',
        retentionInDays=123
    )
    
    
    :type logGroupName: string
    :param logGroupName: [REQUIRED]\nThe name of the log group.\n

    :type retentionInDays: integer
    :param retentionInDays: [REQUIRED]\nThe number of days to retain the log events in the specified log group. Possible values are: 1, 3, 5, 7, 14, 30, 60, 90, 120, 150, 180, 365, 400, 545, 731, 1827, and 3653.\n

    :returns: 
    CloudWatchLogs.Client.exceptions.InvalidParameterException
    CloudWatchLogs.Client.exceptions.ResourceNotFoundException
    CloudWatchLogs.Client.exceptions.OperationAbortedException
    CloudWatchLogs.Client.exceptions.ServiceUnavailableException
    
    """
    pass

def put_subscription_filter(logGroupName=None, filterName=None, filterPattern=None, destinationArn=None, roleArn=None, distribution=None):
    """
    Creates or updates a subscription filter and associates it with the specified log group. Subscription filters allow you to subscribe to a real-time stream of log events ingested through PutLogEvents and have them delivered to a specific destination. Currently, the supported destinations are:
    There can only be one subscription filter associated with a log group. If you are updating an existing filter, you must specify the correct name in filterName . Otherwise, the call fails because you cannot associate a second filter with a log group.
    See also: AWS API Documentation
    
    Exceptions
    
    :example: response = client.put_subscription_filter(
        logGroupName='string',
        filterName='string',
        filterPattern='string',
        destinationArn='string',
        roleArn='string',
        distribution='Random'|'ByLogStream'
    )
    
    
    :type logGroupName: string
    :param logGroupName: [REQUIRED]\nThe name of the log group.\n

    :type filterName: string
    :param filterName: [REQUIRED]\nA name for the subscription filter. If you are updating an existing filter, you must specify the correct name in filterName . Otherwise, the call fails because you cannot associate a second filter with a log group. To find the name of the filter currently associated with a log group, use DescribeSubscriptionFilters .\n

    :type filterPattern: string
    :param filterPattern: [REQUIRED]\nA filter pattern for subscribing to a filtered stream of log events.\n

    :type destinationArn: string
    :param destinationArn: [REQUIRED]\nThe ARN of the destination to deliver matching log events to. Currently, the supported destinations are:\n\nAn Amazon Kinesis stream belonging to the same account as the subscription filter, for same-account delivery.\nA logical destination (specified using an ARN) belonging to a different account, for cross-account delivery.\nAn Amazon Kinesis Firehose delivery stream belonging to the same account as the subscription filter, for same-account delivery.\nAn AWS Lambda function belonging to the same account as the subscription filter, for same-account delivery.\n\n

    :type roleArn: string
    :param roleArn: The ARN of an IAM role that grants CloudWatch Logs permissions to deliver ingested log events to the destination stream. You don\'t need to provide the ARN when you are working with a logical destination for cross-account delivery.

    :type distribution: string
    :param distribution: The method used to distribute log data to the destination. By default log data is grouped by log stream, but the grouping can be set to random for a more even distribution. This property is only applicable when the destination is an Amazon Kinesis stream.

    :returns: 
    logGroupName (string) -- [REQUIRED]
    The name of the log group.
    
    filterName (string) -- [REQUIRED]
    A name for the subscription filter. If you are updating an existing filter, you must specify the correct name in filterName . Otherwise, the call fails because you cannot associate a second filter with a log group. To find the name of the filter currently associated with a log group, use DescribeSubscriptionFilters .
    
    filterPattern (string) -- [REQUIRED]
    A filter pattern for subscribing to a filtered stream of log events.
    
    destinationArn (string) -- [REQUIRED]
    The ARN of the destination to deliver matching log events to. Currently, the supported destinations are:
    
    An Amazon Kinesis stream belonging to the same account as the subscription filter, for same-account delivery.
    A logical destination (specified using an ARN) belonging to a different account, for cross-account delivery.
    An Amazon Kinesis Firehose delivery stream belonging to the same account as the subscription filter, for same-account delivery.
    An AWS Lambda function belonging to the same account as the subscription filter, for same-account delivery.
    
    
    roleArn (string) -- The ARN of an IAM role that grants CloudWatch Logs permissions to deliver ingested log events to the destination stream. You don\'t need to provide the ARN when you are working with a logical destination for cross-account delivery.
    distribution (string) -- The method used to distribute log data to the destination. By default log data is grouped by log stream, but the grouping can be set to random for a more even distribution. This property is only applicable when the destination is an Amazon Kinesis stream.
    
    """
    pass

def start_query(logGroupName=None, logGroupNames=None, startTime=None, endTime=None, queryString=None, limit=None):
    """
    Schedules a query of a log group using CloudWatch Logs Insights. You specify the log group and time range to query, and the query string to use.
    For more information, see CloudWatch Logs Insights Query Syntax .
    Queries time out after 15 minutes of execution. If your queries are timing out, reduce the time range being searched, or partition your query into a number of queries.
    See also: AWS API Documentation
    
    Exceptions
    
    :example: response = client.start_query(
        logGroupName='string',
        logGroupNames=[
            'string',
        ],
        startTime=123,
        endTime=123,
        queryString='string',
        limit=123
    )
    
    
    :type logGroupName: string
    :param logGroupName: The log group on which to perform the query.\nA StartQuery operation must include a logGroupNames or a logGroupName parameter, but not both.\n

    :type logGroupNames: list
    :param logGroupNames: The list of log groups to be queried. You can include up to 20 log groups.\nA StartQuery operation must include a logGroupNames or a logGroupName parameter, but not both.\n\n(string) --\n\n

    :type startTime: integer
    :param startTime: [REQUIRED]\nThe beginning of the time range to query. The range is inclusive, so the specified start time is included in the query. Specified as epoch time, the number of seconds since January 1, 1970, 00:00:00 UTC.\n

    :type endTime: integer
    :param endTime: [REQUIRED]\nThe end of the time range to query. The range is inclusive, so the specified end time is included in the query. Specified as epoch time, the number of seconds since January 1, 1970, 00:00:00 UTC.\n

    :type queryString: string
    :param queryString: [REQUIRED]\nThe query string to use. For more information, see CloudWatch Logs Insights Query Syntax .\n

    :type limit: integer
    :param limit: The maximum number of log events to return in the query. If the query string uses the fields command, only the specified fields and their values are returned. The default is 1000.

    :rtype: dict

ReturnsResponse Syntax
{
    'queryId': 'string'
}


Response Structure

(dict) --

queryId (string) --
The unique ID of the query.







Exceptions

CloudWatchLogs.Client.exceptions.MalformedQueryException
CloudWatchLogs.Client.exceptions.InvalidParameterException
CloudWatchLogs.Client.exceptions.LimitExceededException
CloudWatchLogs.Client.exceptions.ResourceNotFoundException
CloudWatchLogs.Client.exceptions.ServiceUnavailableException


    :return: {
        'queryId': 'string'
    }
    
    
    :returns: 
    CloudWatchLogs.Client.exceptions.MalformedQueryException
    CloudWatchLogs.Client.exceptions.InvalidParameterException
    CloudWatchLogs.Client.exceptions.LimitExceededException
    CloudWatchLogs.Client.exceptions.ResourceNotFoundException
    CloudWatchLogs.Client.exceptions.ServiceUnavailableException
    
    """
    pass

def stop_query(queryId=None):
    """
    Stops a CloudWatch Logs Insights query that is in progress. If the query has already ended, the operation returns an error indicating that the specified query is not running.
    See also: AWS API Documentation
    
    Exceptions
    
    :example: response = client.stop_query(
        queryId='string'
    )
    
    
    :type queryId: string
    :param queryId: [REQUIRED]\nThe ID number of the query to stop. If necessary, you can use DescribeQueries to find this ID number.\n

    :rtype: dict
ReturnsResponse Syntax{
    'success': True|False
}


Response Structure

(dict) --
success (boolean) --This is true if the query was stopped by the StopQuery operation.






Exceptions

CloudWatchLogs.Client.exceptions.InvalidParameterException
CloudWatchLogs.Client.exceptions.ResourceNotFoundException
CloudWatchLogs.Client.exceptions.ServiceUnavailableException


    :return: {
        'success': True|False
    }
    
    
    """
    pass

def tag_log_group(logGroupName=None, tags=None):
    """
    Adds or updates the specified tags for the specified log group.
    To list the tags for a log group, use ListTagsLogGroup . To remove tags, use UntagLogGroup .
    For more information about tags, see Tag Log Groups in Amazon CloudWatch Logs in the Amazon CloudWatch Logs User Guide .
    See also: AWS API Documentation
    
    Exceptions
    
    :example: response = client.tag_log_group(
        logGroupName='string',
        tags={
            'string': 'string'
        }
    )
    
    
    :type logGroupName: string
    :param logGroupName: [REQUIRED]\nThe name of the log group.\n

    :type tags: dict
    :param tags: [REQUIRED]\nThe key-value pairs to use for the tags.\n\n(string) --\n(string) --\n\n\n\n

    :returns: 
    CloudWatchLogs.Client.exceptions.ResourceNotFoundException
    CloudWatchLogs.Client.exceptions.InvalidParameterException
    
    """
    pass

def test_metric_filter(filterPattern=None, logEventMessages=None):
    """
    Tests the filter pattern of a metric filter against a sample of log event messages. You can use this operation to validate the correctness of a metric filter pattern.
    See also: AWS API Documentation
    
    Exceptions
    
    :example: response = client.test_metric_filter(
        filterPattern='string',
        logEventMessages=[
            'string',
        ]
    )
    
    
    :type filterPattern: string
    :param filterPattern: [REQUIRED]\nA symbolic description of how CloudWatch Logs should interpret the data in each log event. For example, a log event may contain timestamps, IP addresses, strings, and so on. You use the filter pattern to specify what to look for in the log event message.\n

    :type logEventMessages: list
    :param logEventMessages: [REQUIRED]\nThe log event messages to test.\n\n(string) --\n\n

    :rtype: dict

ReturnsResponse Syntax
{
    'matches': [
        {
            'eventNumber': 123,
            'eventMessage': 'string',
            'extractedValues': {
                'string': 'string'
            }
        },
    ]
}


Response Structure

(dict) --

matches (list) --
The matched events.

(dict) --
Represents a matched event.

eventNumber (integer) --
The event number.

eventMessage (string) --
The raw event data.

extractedValues (dict) --
The values extracted from the event data by the filter.

(string) --
(string) --














Exceptions

CloudWatchLogs.Client.exceptions.InvalidParameterException
CloudWatchLogs.Client.exceptions.ServiceUnavailableException


    :return: {
        'matches': [
            {
                'eventNumber': 123,
                'eventMessage': 'string',
                'extractedValues': {
                    'string': 'string'
                }
            },
        ]
    }
    
    
    :returns: 
    (string) --
    (string) --
    
    
    
    """
    pass

def untag_log_group(logGroupName=None, tags=None):
    """
    Removes the specified tags from the specified log group.
    To list the tags for a log group, use ListTagsLogGroup . To add tags, use TagLogGroup .
    See also: AWS API Documentation
    
    Exceptions
    
    :example: response = client.untag_log_group(
        logGroupName='string',
        tags=[
            'string',
        ]
    )
    
    
    :type logGroupName: string
    :param logGroupName: [REQUIRED]\nThe name of the log group.\n

    :type tags: list
    :param tags: [REQUIRED]\nThe tag keys. The corresponding tags are removed from the log group.\n\n(string) --\n\n

    :returns: 
    CloudWatchLogs.Client.exceptions.ResourceNotFoundException
    
    """
    pass

