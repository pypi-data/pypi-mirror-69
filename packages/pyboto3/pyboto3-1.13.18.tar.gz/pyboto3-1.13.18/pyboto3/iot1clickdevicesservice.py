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

def claim_devices_by_claim_code(ClaimCode=None):
    """
    Adds device(s) to your account (i.e., claim one or more devices) if and only if you received a claim code with the device(s).
    See also: AWS API Documentation
    
    Exceptions
    
    :example: response = client.claim_devices_by_claim_code(
        ClaimCode='string'
    )
    
    
    :type ClaimCode: string
    :param ClaimCode: [REQUIRED]\nThe claim code, starting with 'C-', as provided by the device manufacturer.\n

    :rtype: dict
ReturnsResponse Syntax{
    'ClaimCode': 'string',
    'Total': 123
}


Response Structure

(dict) --200 response

ClaimCode (string) --The claim code provided by the device manufacturer.

Total (integer) --The total number of devices associated with the claim code that has been processed in the claim request.






Exceptions

IoT1ClickDevicesService.Client.exceptions.InvalidRequestException
IoT1ClickDevicesService.Client.exceptions.InternalFailureException
IoT1ClickDevicesService.Client.exceptions.ForbiddenException


    :return: {
        'ClaimCode': 'string',
        'Total': 123
    }
    
    
    """
    pass

def describe_device(DeviceId=None):
    """
    Given a device ID, returns a DescribeDeviceResponse object describing the details of the device.
    See also: AWS API Documentation
    
    Exceptions
    
    :example: response = client.describe_device(
        DeviceId='string'
    )
    
    
    :type DeviceId: string
    :param DeviceId: [REQUIRED]\nThe unique identifier of the device.\n

    :rtype: dict
ReturnsResponse Syntax{
    'DeviceDescription': {
        'Arn': 'string',
        'Attributes': {
            'string': 'string'
        },
        'DeviceId': 'string',
        'Enabled': True|False,
        'RemainingLife': 123.0,
        'Type': 'string',
        'Tags': {
            'string': 'string'
        }
    }
}


Response Structure

(dict) --200 response

DeviceDescription (dict) --Device details.

Arn (string) --The ARN of the device.

Attributes (dict) --An array of zero or more elements of DeviceAttribute objects providing user specified device attributes.

(string) --
(string) --




DeviceId (string) --The unique identifier of the device.

Enabled (boolean) --A Boolean value indicating whether or not the device is enabled.

RemainingLife (float) --A value between 0 and 1 inclusive, representing the fraction of life remaining for the device.

Type (string) --The type of the device, such as "button".

Tags (dict) --The tags currently associated with the AWS IoT 1-Click device.

(string) --
(string) --











Exceptions

IoT1ClickDevicesService.Client.exceptions.ResourceNotFoundException
IoT1ClickDevicesService.Client.exceptions.InvalidRequestException
IoT1ClickDevicesService.Client.exceptions.InternalFailureException


    :return: {
        'DeviceDescription': {
            'Arn': 'string',
            'Attributes': {
                'string': 'string'
            },
            'DeviceId': 'string',
            'Enabled': True|False,
            'RemainingLife': 123.0,
            'Type': 'string',
            'Tags': {
                'string': 'string'
            }
        }
    }
    
    
    :returns: 
    (string) --
    (string) --
    
    
    
    """
    pass

def finalize_device_claim(DeviceId=None, Tags=None):
    """
    Given a device ID, finalizes the claim request for the associated device.
    See also: AWS API Documentation
    
    Exceptions
    
    :example: response = client.finalize_device_claim(
        DeviceId='string',
        Tags={
            'string': 'string'
        }
    )
    
    
    :type DeviceId: string
    :param DeviceId: [REQUIRED]\nThe unique identifier of the device.\n

    :type Tags: dict
    :param Tags: A collection of key/value pairs defining the resource tags. For example, { 'tags': {'key1': 'value1', 'key2': 'value2'} }. For more information, see AWS Tagging Strategies .\n\n(string) --\n(string) --\n\n\n\n

    :rtype: dict

ReturnsResponse Syntax
{
    'State': 'string'
}


Response Structure

(dict) --
200 response

State (string) --
The device\'s final claim state.







Exceptions

IoT1ClickDevicesService.Client.exceptions.ResourceNotFoundException
IoT1ClickDevicesService.Client.exceptions.InvalidRequestException
IoT1ClickDevicesService.Client.exceptions.InternalFailureException
IoT1ClickDevicesService.Client.exceptions.PreconditionFailedException
IoT1ClickDevicesService.Client.exceptions.ResourceConflictException


    :return: {
        'State': 'string'
    }
    
    
    :returns: 
    IoT1ClickDevicesService.Client.exceptions.ResourceNotFoundException
    IoT1ClickDevicesService.Client.exceptions.InvalidRequestException
    IoT1ClickDevicesService.Client.exceptions.InternalFailureException
    IoT1ClickDevicesService.Client.exceptions.PreconditionFailedException
    IoT1ClickDevicesService.Client.exceptions.ResourceConflictException
    
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

def get_device_methods(DeviceId=None):
    """
    Given a device ID, returns the invokable methods associated with the device.
    See also: AWS API Documentation
    
    Exceptions
    
    :example: response = client.get_device_methods(
        DeviceId='string'
    )
    
    
    :type DeviceId: string
    :param DeviceId: [REQUIRED]\nThe unique identifier of the device.\n

    :rtype: dict
ReturnsResponse Syntax{
    'DeviceMethods': [
        {
            'DeviceType': 'string',
            'MethodName': 'string'
        },
    ]
}


Response Structure

(dict) --200 response

DeviceMethods (list) --List of available device APIs.

(dict) --
DeviceType (string) --The type of the device, such as "button".

MethodName (string) --The name of the method applicable to the deviceType.










Exceptions

IoT1ClickDevicesService.Client.exceptions.ResourceNotFoundException
IoT1ClickDevicesService.Client.exceptions.InvalidRequestException
IoT1ClickDevicesService.Client.exceptions.InternalFailureException


    :return: {
        'DeviceMethods': [
            {
                'DeviceType': 'string',
                'MethodName': 'string'
            },
        ]
    }
    
    
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

def get_waiter(waiter_name=None):
    """
    Returns an object that can wait for some condition.
    
    :type waiter_name: str
    :param waiter_name: The name of the waiter to get. See the waiters\nsection of the service docs for a list of available waiters.

    :rtype: botocore.waiter.Waiter


    """
    pass

def initiate_device_claim(DeviceId=None):
    """
    Given a device ID, initiates a claim request for the associated device.
    See also: AWS API Documentation
    
    Exceptions
    
    :example: response = client.initiate_device_claim(
        DeviceId='string'
    )
    
    
    :type DeviceId: string
    :param DeviceId: [REQUIRED]\nThe unique identifier of the device.\n

    :rtype: dict
ReturnsResponse Syntax{
    'State': 'string'
}


Response Structure

(dict) --200 response

State (string) --The device\'s final claim state.






Exceptions

IoT1ClickDevicesService.Client.exceptions.ResourceNotFoundException
IoT1ClickDevicesService.Client.exceptions.InvalidRequestException
IoT1ClickDevicesService.Client.exceptions.InternalFailureException
IoT1ClickDevicesService.Client.exceptions.ResourceConflictException


    :return: {
        'State': 'string'
    }
    
    
    """
    pass

def invoke_device_method(DeviceId=None, DeviceMethod=None, DeviceMethodParameters=None):
    """
    Given a device ID, issues a request to invoke a named device method (with possible parameters). See the "Example POST" code snippet below.
    See also: AWS API Documentation
    
    Exceptions
    
    :example: response = client.invoke_device_method(
        DeviceId='string',
        DeviceMethod={
            'DeviceType': 'string',
            'MethodName': 'string'
        },
        DeviceMethodParameters='string'
    )
    
    
    :type DeviceId: string
    :param DeviceId: [REQUIRED]\nThe unique identifier of the device.\n

    :type DeviceMethod: dict
    :param DeviceMethod: The device method to invoke.\n\nDeviceType (string) --The type of the device, such as 'button'.\n\nMethodName (string) --The name of the method applicable to the deviceType.\n\n\n

    :type DeviceMethodParameters: string
    :param DeviceMethodParameters: A JSON encoded string containing the device method request parameters.

    :rtype: dict

ReturnsResponse Syntax
{
    'DeviceMethodResponse': 'string'
}


Response Structure

(dict) --
200 response

DeviceMethodResponse (string) --
A JSON encoded string containing the device method response.







Exceptions

IoT1ClickDevicesService.Client.exceptions.InvalidRequestException
IoT1ClickDevicesService.Client.exceptions.PreconditionFailedException
IoT1ClickDevicesService.Client.exceptions.InternalFailureException
IoT1ClickDevicesService.Client.exceptions.ResourceNotFoundException
IoT1ClickDevicesService.Client.exceptions.RangeNotSatisfiableException
IoT1ClickDevicesService.Client.exceptions.ResourceConflictException


    :return: {
        'DeviceMethodResponse': 'string'
    }
    
    
    :returns: 
    IoT1ClickDevicesService.Client.exceptions.InvalidRequestException
    IoT1ClickDevicesService.Client.exceptions.PreconditionFailedException
    IoT1ClickDevicesService.Client.exceptions.InternalFailureException
    IoT1ClickDevicesService.Client.exceptions.ResourceNotFoundException
    IoT1ClickDevicesService.Client.exceptions.RangeNotSatisfiableException
    IoT1ClickDevicesService.Client.exceptions.ResourceConflictException
    
    """
    pass

def list_device_events(DeviceId=None, FromTimeStamp=None, MaxResults=None, NextToken=None, ToTimeStamp=None):
    """
    Using a device ID, returns a DeviceEventsResponse object containing an array of events for the device.
    See also: AWS API Documentation
    
    Exceptions
    
    :example: response = client.list_device_events(
        DeviceId='string',
        FromTimeStamp=datetime(2015, 1, 1),
        MaxResults=123,
        NextToken='string',
        ToTimeStamp=datetime(2015, 1, 1)
    )
    
    
    :type DeviceId: string
    :param DeviceId: [REQUIRED]\nThe unique identifier of the device.\n

    :type FromTimeStamp: datetime
    :param FromTimeStamp: [REQUIRED]\nThe start date for the device event query, in ISO8061 format. For example, 2018-03-28T15:45:12.880Z\n

    :type MaxResults: integer
    :param MaxResults: The maximum number of results to return per request. If not set, a default value of 100 is used.

    :type NextToken: string
    :param NextToken: The token to retrieve the next set of results.

    :type ToTimeStamp: datetime
    :param ToTimeStamp: [REQUIRED]\nThe end date for the device event query, in ISO8061 format. For example, 2018-03-28T15:45:12.880Z\n

    :rtype: dict

ReturnsResponse Syntax
{
    'Events': [
        {
            'Device': {
                'Attributes': {},
                'DeviceId': 'string',
                'Type': 'string'
            },
            'StdEvent': 'string'
        },
    ],
    'NextToken': 'string'
}


Response Structure

(dict) --
200 response

Events (list) --
An array of zero or more elements describing the event(s) associated with the device.

(dict) --

Device (dict) --
An object representing the device associated with the event.

Attributes (dict) --
The user specified attributes associated with the device for an event.

DeviceId (string) --
The unique identifier of the device.

Type (string) --
The device type, such as "button".



StdEvent (string) --
A serialized JSON object representing the device-type specific event.





NextToken (string) --
The token to retrieve the next set of results.







Exceptions

IoT1ClickDevicesService.Client.exceptions.ResourceNotFoundException
IoT1ClickDevicesService.Client.exceptions.RangeNotSatisfiableException
IoT1ClickDevicesService.Client.exceptions.InvalidRequestException
IoT1ClickDevicesService.Client.exceptions.InternalFailureException


    :return: {
        'Events': [
            {
                'Device': {
                    'Attributes': {},
                    'DeviceId': 'string',
                    'Type': 'string'
                },
                'StdEvent': 'string'
            },
        ],
        'NextToken': 'string'
    }
    
    
    :returns: 
    IoT1ClickDevicesService.Client.exceptions.ResourceNotFoundException
    IoT1ClickDevicesService.Client.exceptions.RangeNotSatisfiableException
    IoT1ClickDevicesService.Client.exceptions.InvalidRequestException
    IoT1ClickDevicesService.Client.exceptions.InternalFailureException
    
    """
    pass

def list_devices(DeviceType=None, MaxResults=None, NextToken=None):
    """
    Lists the 1-Click compatible devices associated with your AWS account.
    See also: AWS API Documentation
    
    Exceptions
    
    :example: response = client.list_devices(
        DeviceType='string',
        MaxResults=123,
        NextToken='string'
    )
    
    
    :type DeviceType: string
    :param DeviceType: The type of the device, such as 'button'.

    :type MaxResults: integer
    :param MaxResults: The maximum number of results to return per request. If not set, a default value of 100 is used.

    :type NextToken: string
    :param NextToken: The token to retrieve the next set of results.

    :rtype: dict

ReturnsResponse Syntax
{
    'Devices': [
        {
            'Arn': 'string',
            'Attributes': {
                'string': 'string'
            },
            'DeviceId': 'string',
            'Enabled': True|False,
            'RemainingLife': 123.0,
            'Type': 'string',
            'Tags': {
                'string': 'string'
            }
        },
    ],
    'NextToken': 'string'
}


Response Structure

(dict) --
200 response

Devices (list) --
A list of devices.

(dict) --

Arn (string) --
The ARN of the device.

Attributes (dict) --
An array of zero or more elements of DeviceAttribute objects providing user specified device attributes.

(string) --
(string) --




DeviceId (string) --
The unique identifier of the device.

Enabled (boolean) --
A Boolean value indicating whether or not the device is enabled.

RemainingLife (float) --
A value between 0 and 1 inclusive, representing the fraction of life remaining for the device.

Type (string) --
The type of the device, such as "button".

Tags (dict) --
The tags currently associated with the AWS IoT 1-Click device.

(string) --
(string) --








NextToken (string) --
The token to retrieve the next set of results.







Exceptions

IoT1ClickDevicesService.Client.exceptions.RangeNotSatisfiableException
IoT1ClickDevicesService.Client.exceptions.InvalidRequestException
IoT1ClickDevicesService.Client.exceptions.InternalFailureException


    :return: {
        'Devices': [
            {
                'Arn': 'string',
                'Attributes': {
                    'string': 'string'
                },
                'DeviceId': 'string',
                'Enabled': True|False,
                'RemainingLife': 123.0,
                'Type': 'string',
                'Tags': {
                    'string': 'string'
                }
            },
        ],
        'NextToken': 'string'
    }
    
    
    :returns: 
    (string) --
    (string) --
    
    
    
    """
    pass

def list_tags_for_resource(ResourceArn=None):
    """
    Lists the tags associated with the specified resource ARN.
    See also: AWS API Documentation
    
    Exceptions
    
    :example: response = client.list_tags_for_resource(
        ResourceArn='string'
    )
    
    
    :type ResourceArn: string
    :param ResourceArn: [REQUIRED]\nThe ARN of the resource.\n

    :rtype: dict
ReturnsResponse Syntax{
    'Tags': {
        'string': 'string'
    }
}


Response Structure

(dict) --
Tags (dict) --A collection of key/value pairs defining the resource tags. For example, { "tags": {"key1": "value1", "key2": "value2"} }. For more information, see AWS Tagging Strategies .

(string) --
(string) --









Exceptions

IoT1ClickDevicesService.Client.exceptions.ResourceNotFoundException
IoT1ClickDevicesService.Client.exceptions.InternalFailureException


    :return: {
        'Tags': {
            'string': 'string'
        }
    }
    
    
    :returns: 
    IoT1ClickDevicesService.Client.exceptions.ResourceNotFoundException
    IoT1ClickDevicesService.Client.exceptions.InternalFailureException
    
    """
    pass

def tag_resource(ResourceArn=None, Tags=None):
    """
    Adds or updates the tags associated with the resource ARN. See AWS IoT 1-Click Service Limits for the maximum number of tags allowed per resource.
    See also: AWS API Documentation
    
    Exceptions
    
    :example: response = client.tag_resource(
        ResourceArn='string',
        Tags={
            'string': 'string'
        }
    )
    
    
    :type ResourceArn: string
    :param ResourceArn: [REQUIRED]\nThe ARN of the resource.\n

    :type Tags: dict
    :param Tags: [REQUIRED]\nA collection of key/value pairs defining the resource tags. For example, { 'tags': {'key1': 'value1', 'key2': 'value2'} }. For more information, see AWS Tagging Strategies .\n\n(string) --\n(string) --\n\n\n\n

    :returns: 
    IoT1ClickDevicesService.Client.exceptions.ResourceNotFoundException
    IoT1ClickDevicesService.Client.exceptions.InvalidRequestException
    IoT1ClickDevicesService.Client.exceptions.InternalFailureException
    
    """
    pass

def unclaim_device(DeviceId=None):
    """
    Disassociates a device from your AWS account using its device ID.
    See also: AWS API Documentation
    
    Exceptions
    
    :example: response = client.unclaim_device(
        DeviceId='string'
    )
    
    
    :type DeviceId: string
    :param DeviceId: [REQUIRED]\nThe unique identifier of the device.\n

    :rtype: dict
ReturnsResponse Syntax{
    'State': 'string'
}


Response Structure

(dict) --200 response

State (string) --The device\'s final claim state.






Exceptions

IoT1ClickDevicesService.Client.exceptions.ResourceNotFoundException
IoT1ClickDevicesService.Client.exceptions.InvalidRequestException
IoT1ClickDevicesService.Client.exceptions.InternalFailureException


    :return: {
        'State': 'string'
    }
    
    
    """
    pass

def untag_resource(ResourceArn=None, TagKeys=None):
    """
    Using tag keys, deletes the tags (key/value pairs) associated with the specified resource ARN.
    See also: AWS API Documentation
    
    Exceptions
    
    :example: response = client.untag_resource(
        ResourceArn='string',
        TagKeys=[
            'string',
        ]
    )
    
    
    :type ResourceArn: string
    :param ResourceArn: [REQUIRED]\nThe ARN of the resource.\n

    :type TagKeys: list
    :param TagKeys: [REQUIRED]\nA collections of tag keys. For example, {'key1','key2'}\n\n(string) --\n\n

    :returns: 
    IoT1ClickDevicesService.Client.exceptions.ResourceNotFoundException
    IoT1ClickDevicesService.Client.exceptions.InvalidRequestException
    IoT1ClickDevicesService.Client.exceptions.InternalFailureException
    
    """
    pass

def update_device_state(DeviceId=None, Enabled=None):
    """
    Using a Boolean value (true or false), this operation enables or disables the device given a device ID.
    See also: AWS API Documentation
    
    Exceptions
    
    :example: response = client.update_device_state(
        DeviceId='string',
        Enabled=True|False
    )
    
    
    :type DeviceId: string
    :param DeviceId: [REQUIRED]\nThe unique identifier of the device.\n

    :type Enabled: boolean
    :param Enabled: If true, the device is enabled. If false, the device is disabled.

    :rtype: dict

ReturnsResponse Syntax
{}


Response Structure

(dict) --
200 response





Exceptions

IoT1ClickDevicesService.Client.exceptions.ResourceNotFoundException
IoT1ClickDevicesService.Client.exceptions.InvalidRequestException
IoT1ClickDevicesService.Client.exceptions.InternalFailureException


    :return: {}
    
    
    :returns: 
    IoT1ClickDevicesService.Client.exceptions.ResourceNotFoundException
    IoT1ClickDevicesService.Client.exceptions.InvalidRequestException
    IoT1ClickDevicesService.Client.exceptions.InternalFailureException
    
    """
    pass

