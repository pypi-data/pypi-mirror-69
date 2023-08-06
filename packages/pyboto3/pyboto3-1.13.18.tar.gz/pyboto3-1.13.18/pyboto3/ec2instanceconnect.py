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

def get_waiter(waiter_name=None):
    """
    Returns an object that can wait for some condition.
    
    :type waiter_name: str
    :param waiter_name: The name of the waiter to get. See the waiters\nsection of the service docs for a list of available waiters.

    :rtype: botocore.waiter.Waiter


    """
    pass

def send_ssh_public_key(InstanceId=None, InstanceOSUser=None, SSHPublicKey=None, AvailabilityZone=None):
    """
    Pushes an SSH public key to a particular OS user on a given EC2 instance for 60 seconds.
    See also: AWS API Documentation
    
    Exceptions
    
    :example: response = client.send_ssh_public_key(
        InstanceId='string',
        InstanceOSUser='string',
        SSHPublicKey='string',
        AvailabilityZone='string'
    )
    
    
    :type InstanceId: string
    :param InstanceId: [REQUIRED]\nThe EC2 instance you wish to publish the SSH key to.\n

    :type InstanceOSUser: string
    :param InstanceOSUser: [REQUIRED]\nThe OS user on the EC2 instance whom the key may be used to authenticate as.\n

    :type SSHPublicKey: string
    :param SSHPublicKey: [REQUIRED]\nThe public key to be published to the instance. To use it after publication you must have the matching private key.\n

    :type AvailabilityZone: string
    :param AvailabilityZone: [REQUIRED]\nThe availability zone the EC2 instance was launched in.\n

    :rtype: dict

ReturnsResponse Syntax
{
    'RequestId': 'string',
    'Success': True|False
}


Response Structure

(dict) --

RequestId (string) --
The request ID as logged by EC2 Connect. Please provide this when contacting AWS Support.

Success (boolean) --
Indicates request success.







Exceptions

EC2InstanceConnect.Client.exceptions.AuthException
EC2InstanceConnect.Client.exceptions.InvalidArgsException
EC2InstanceConnect.Client.exceptions.ServiceException
EC2InstanceConnect.Client.exceptions.ThrottlingException
EC2InstanceConnect.Client.exceptions.EC2InstanceNotFoundException


    :return: {
        'RequestId': 'string',
        'Success': True|False
    }
    
    
    :returns: 
    EC2InstanceConnect.Client.exceptions.AuthException
    EC2InstanceConnect.Client.exceptions.InvalidArgsException
    EC2InstanceConnect.Client.exceptions.ServiceException
    EC2InstanceConnect.Client.exceptions.ThrottlingException
    EC2InstanceConnect.Client.exceptions.EC2InstanceNotFoundException
    
    """
    pass

