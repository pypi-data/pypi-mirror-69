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

def associate_delegate_to_resource(OrganizationId=None, ResourceId=None, EntityId=None):
    """
    Adds a member (user or group) to the resource\'s set of delegates.
    See also: AWS API Documentation
    
    Exceptions
    
    :example: response = client.associate_delegate_to_resource(
        OrganizationId='string',
        ResourceId='string',
        EntityId='string'
    )
    
    
    :type OrganizationId: string
    :param OrganizationId: [REQUIRED]\nThe organization under which the resource exists.\n

    :type ResourceId: string
    :param ResourceId: [REQUIRED]\nThe resource for which members (users or groups) are associated.\n

    :type EntityId: string
    :param EntityId: [REQUIRED]\nThe member (user or group) to associate to the resource.\n

    :rtype: dict

ReturnsResponse Syntax
{}


Response Structure

(dict) --




Exceptions

WorkMail.Client.exceptions.EntityNotFoundException
WorkMail.Client.exceptions.EntityStateException
WorkMail.Client.exceptions.InvalidParameterException
WorkMail.Client.exceptions.OrganizationNotFoundException
WorkMail.Client.exceptions.OrganizationStateException


    :return: {}
    
    
    :returns: 
    (dict) --
    
    """
    pass

def associate_member_to_group(OrganizationId=None, GroupId=None, MemberId=None):
    """
    Adds a member (user or group) to the group\'s set.
    See also: AWS API Documentation
    
    Exceptions
    
    :example: response = client.associate_member_to_group(
        OrganizationId='string',
        GroupId='string',
        MemberId='string'
    )
    
    
    :type OrganizationId: string
    :param OrganizationId: [REQUIRED]\nThe organization under which the group exists.\n

    :type GroupId: string
    :param GroupId: [REQUIRED]\nThe group to which the member (user or group) is associated.\n

    :type MemberId: string
    :param MemberId: [REQUIRED]\nThe member (user or group) to associate to the group.\n

    :rtype: dict

ReturnsResponse Syntax
{}


Response Structure

(dict) --




Exceptions

WorkMail.Client.exceptions.DirectoryServiceAuthenticationFailedException
WorkMail.Client.exceptions.DirectoryUnavailableException
WorkMail.Client.exceptions.EntityNotFoundException
WorkMail.Client.exceptions.EntityStateException
WorkMail.Client.exceptions.InvalidParameterException
WorkMail.Client.exceptions.OrganizationNotFoundException
WorkMail.Client.exceptions.OrganizationStateException
WorkMail.Client.exceptions.UnsupportedOperationException


    :return: {}
    
    
    :returns: 
    (dict) --
    
    """
    pass

def can_paginate(operation_name=None):
    """
    Check if an operation can be paginated.
    
    :type operation_name: string
    :param operation_name: The operation name. This is the same name\nas the method name on the client. For example, if the\nmethod name is create_foo, and you\'d normally invoke the\noperation as client.create_foo(**kwargs), if the\ncreate_foo operation can be paginated, you can use the\ncall client.get_paginator('create_foo').

    """
    pass

def create_alias(OrganizationId=None, EntityId=None, Alias=None):
    """
    Adds an alias to the set of a given member (user or group) of Amazon WorkMail.
    See also: AWS API Documentation
    
    Exceptions
    
    :example: response = client.create_alias(
        OrganizationId='string',
        EntityId='string',
        Alias='string'
    )
    
    
    :type OrganizationId: string
    :param OrganizationId: [REQUIRED]\nThe organization under which the member (user or group) exists.\n

    :type EntityId: string
    :param EntityId: [REQUIRED]\nThe member (user or group) to which this alias is added.\n

    :type Alias: string
    :param Alias: [REQUIRED]\nThe alias to add to the member set.\n

    :rtype: dict

ReturnsResponse Syntax
{}


Response Structure

(dict) --




Exceptions

WorkMail.Client.exceptions.EmailAddressInUseException
WorkMail.Client.exceptions.EntityNotFoundException
WorkMail.Client.exceptions.EntityStateException
WorkMail.Client.exceptions.InvalidParameterException
WorkMail.Client.exceptions.MailDomainNotFoundException
WorkMail.Client.exceptions.MailDomainStateException
WorkMail.Client.exceptions.OrganizationNotFoundException
WorkMail.Client.exceptions.OrganizationStateException
WorkMail.Client.exceptions.LimitExceededException


    :return: {}
    
    
    :returns: 
    (dict) --
    
    """
    pass

def create_group(OrganizationId=None, Name=None):
    """
    Creates a group that can be used in Amazon WorkMail by calling the  RegisterToWorkMail operation.
    See also: AWS API Documentation
    
    Exceptions
    
    :example: response = client.create_group(
        OrganizationId='string',
        Name='string'
    )
    
    
    :type OrganizationId: string
    :param OrganizationId: [REQUIRED]\nThe organization under which the group is to be created.\n

    :type Name: string
    :param Name: [REQUIRED]\nThe name of the group.\n

    :rtype: dict

ReturnsResponse Syntax
{
    'GroupId': 'string'
}


Response Structure

(dict) --

GroupId (string) --
The identifier of the group.







Exceptions

WorkMail.Client.exceptions.DirectoryServiceAuthenticationFailedException
WorkMail.Client.exceptions.DirectoryUnavailableException
WorkMail.Client.exceptions.InvalidParameterException
WorkMail.Client.exceptions.NameAvailabilityException
WorkMail.Client.exceptions.OrganizationNotFoundException
WorkMail.Client.exceptions.OrganizationStateException
WorkMail.Client.exceptions.ReservedNameException
WorkMail.Client.exceptions.UnsupportedOperationException


    :return: {
        'GroupId': 'string'
    }
    
    
    :returns: 
    WorkMail.Client.exceptions.DirectoryServiceAuthenticationFailedException
    WorkMail.Client.exceptions.DirectoryUnavailableException
    WorkMail.Client.exceptions.InvalidParameterException
    WorkMail.Client.exceptions.NameAvailabilityException
    WorkMail.Client.exceptions.OrganizationNotFoundException
    WorkMail.Client.exceptions.OrganizationStateException
    WorkMail.Client.exceptions.ReservedNameException
    WorkMail.Client.exceptions.UnsupportedOperationException
    
    """
    pass

def create_resource(OrganizationId=None, Name=None, Type=None):
    """
    Creates a new Amazon WorkMail resource.
    See also: AWS API Documentation
    
    Exceptions
    
    :example: response = client.create_resource(
        OrganizationId='string',
        Name='string',
        Type='ROOM'|'EQUIPMENT'
    )
    
    
    :type OrganizationId: string
    :param OrganizationId: [REQUIRED]\nThe identifier associated with the organization for which the resource is created.\n

    :type Name: string
    :param Name: [REQUIRED]\nThe name of the new resource.\n

    :type Type: string
    :param Type: [REQUIRED]\nThe type of the new resource. The available types are equipment and room .\n

    :rtype: dict

ReturnsResponse Syntax
{
    'ResourceId': 'string'
}


Response Structure

(dict) --

ResourceId (string) --
The identifier of the new resource.







Exceptions

WorkMail.Client.exceptions.DirectoryServiceAuthenticationFailedException
WorkMail.Client.exceptions.DirectoryUnavailableException
WorkMail.Client.exceptions.InvalidParameterException
WorkMail.Client.exceptions.NameAvailabilityException
WorkMail.Client.exceptions.OrganizationNotFoundException
WorkMail.Client.exceptions.OrganizationStateException
WorkMail.Client.exceptions.ReservedNameException


    :return: {
        'ResourceId': 'string'
    }
    
    
    :returns: 
    WorkMail.Client.exceptions.DirectoryServiceAuthenticationFailedException
    WorkMail.Client.exceptions.DirectoryUnavailableException
    WorkMail.Client.exceptions.InvalidParameterException
    WorkMail.Client.exceptions.NameAvailabilityException
    WorkMail.Client.exceptions.OrganizationNotFoundException
    WorkMail.Client.exceptions.OrganizationStateException
    WorkMail.Client.exceptions.ReservedNameException
    
    """
    pass

def create_user(OrganizationId=None, Name=None, DisplayName=None, Password=None):
    """
    Creates a user who can be used in Amazon WorkMail by calling the  RegisterToWorkMail operation.
    See also: AWS API Documentation
    
    Exceptions
    
    :example: response = client.create_user(
        OrganizationId='string',
        Name='string',
        DisplayName='string',
        Password='string'
    )
    
    
    :type OrganizationId: string
    :param OrganizationId: [REQUIRED]\nThe identifier of the organization for which the user is created.\n

    :type Name: string
    :param Name: [REQUIRED]\nThe name for the new user. Simple AD or AD Connector user names have a maximum length of 20. All others have a maximum length of 64.\n

    :type DisplayName: string
    :param DisplayName: [REQUIRED]\nThe display name for the new user.\n

    :type Password: string
    :param Password: [REQUIRED]\nThe password for the new user.\n

    :rtype: dict

ReturnsResponse Syntax
{
    'UserId': 'string'
}


Response Structure

(dict) --

UserId (string) --
The identifier for the new user.







Exceptions

WorkMail.Client.exceptions.DirectoryServiceAuthenticationFailedException
WorkMail.Client.exceptions.DirectoryUnavailableException
WorkMail.Client.exceptions.InvalidParameterException
WorkMail.Client.exceptions.InvalidPasswordException
WorkMail.Client.exceptions.NameAvailabilityException
WorkMail.Client.exceptions.OrganizationNotFoundException
WorkMail.Client.exceptions.OrganizationStateException
WorkMail.Client.exceptions.ReservedNameException
WorkMail.Client.exceptions.UnsupportedOperationException


    :return: {
        'UserId': 'string'
    }
    
    
    :returns: 
    WorkMail.Client.exceptions.DirectoryServiceAuthenticationFailedException
    WorkMail.Client.exceptions.DirectoryUnavailableException
    WorkMail.Client.exceptions.InvalidParameterException
    WorkMail.Client.exceptions.InvalidPasswordException
    WorkMail.Client.exceptions.NameAvailabilityException
    WorkMail.Client.exceptions.OrganizationNotFoundException
    WorkMail.Client.exceptions.OrganizationStateException
    WorkMail.Client.exceptions.ReservedNameException
    WorkMail.Client.exceptions.UnsupportedOperationException
    
    """
    pass

def delete_access_control_rule(OrganizationId=None, Name=None):
    """
    Deletes an access control rule for the specified WorkMail organization.
    See also: AWS API Documentation
    
    Exceptions
    
    :example: response = client.delete_access_control_rule(
        OrganizationId='string',
        Name='string'
    )
    
    
    :type OrganizationId: string
    :param OrganizationId: [REQUIRED]\nThe identifier for the organization.\n

    :type Name: string
    :param Name: [REQUIRED]\nThe name of the access control rule.\n

    :rtype: dict

ReturnsResponse Syntax
{}


Response Structure

(dict) --




Exceptions

WorkMail.Client.exceptions.OrganizationNotFoundException
WorkMail.Client.exceptions.OrganizationStateException


    :return: {}
    
    
    :returns: 
    (dict) --
    
    """
    pass

def delete_alias(OrganizationId=None, EntityId=None, Alias=None):
    """
    Remove one or more specified aliases from a set of aliases for a given user.
    See also: AWS API Documentation
    
    Exceptions
    
    :example: response = client.delete_alias(
        OrganizationId='string',
        EntityId='string',
        Alias='string'
    )
    
    
    :type OrganizationId: string
    :param OrganizationId: [REQUIRED]\nThe identifier for the organization under which the user exists.\n

    :type EntityId: string
    :param EntityId: [REQUIRED]\nThe identifier for the member (user or group) from which to have the aliases removed.\n

    :type Alias: string
    :param Alias: [REQUIRED]\nThe aliases to be removed from the user\'s set of aliases. Duplicate entries in the list are collapsed into single entries (the list is transformed into a set).\n

    :rtype: dict

ReturnsResponse Syntax
{}


Response Structure

(dict) --




Exceptions

WorkMail.Client.exceptions.EntityNotFoundException
WorkMail.Client.exceptions.EntityStateException
WorkMail.Client.exceptions.InvalidParameterException
WorkMail.Client.exceptions.OrganizationNotFoundException
WorkMail.Client.exceptions.OrganizationStateException


    :return: {}
    
    
    :returns: 
    (dict) --
    
    """
    pass

def delete_group(OrganizationId=None, GroupId=None):
    """
    Deletes a group from Amazon WorkMail.
    See also: AWS API Documentation
    
    Exceptions
    
    :example: response = client.delete_group(
        OrganizationId='string',
        GroupId='string'
    )
    
    
    :type OrganizationId: string
    :param OrganizationId: [REQUIRED]\nThe organization that contains the group.\n

    :type GroupId: string
    :param GroupId: [REQUIRED]\nThe identifier of the group to be deleted.\n

    :rtype: dict

ReturnsResponse Syntax
{}


Response Structure

(dict) --




Exceptions

WorkMail.Client.exceptions.DirectoryServiceAuthenticationFailedException
WorkMail.Client.exceptions.DirectoryUnavailableException
WorkMail.Client.exceptions.EntityStateException
WorkMail.Client.exceptions.InvalidParameterException
WorkMail.Client.exceptions.OrganizationNotFoundException
WorkMail.Client.exceptions.OrganizationStateException
WorkMail.Client.exceptions.UnsupportedOperationException


    :return: {}
    
    
    :returns: 
    (dict) --
    
    """
    pass

def delete_mailbox_permissions(OrganizationId=None, EntityId=None, GranteeId=None):
    """
    Deletes permissions granted to a member (user or group).
    See also: AWS API Documentation
    
    Exceptions
    
    :example: response = client.delete_mailbox_permissions(
        OrganizationId='string',
        EntityId='string',
        GranteeId='string'
    )
    
    
    :type OrganizationId: string
    :param OrganizationId: [REQUIRED]\nThe identifier of the organization under which the member (user or group) exists.\n

    :type EntityId: string
    :param EntityId: [REQUIRED]\nThe identifier of the member (user or group)that owns the mailbox.\n

    :type GranteeId: string
    :param GranteeId: [REQUIRED]\nThe identifier of the member (user or group) for which to delete granted permissions.\n

    :rtype: dict

ReturnsResponse Syntax
{}


Response Structure

(dict) --




Exceptions

WorkMail.Client.exceptions.EntityNotFoundException
WorkMail.Client.exceptions.EntityStateException
WorkMail.Client.exceptions.InvalidParameterException
WorkMail.Client.exceptions.OrganizationNotFoundException
WorkMail.Client.exceptions.OrganizationStateException


    :return: {}
    
    
    :returns: 
    (dict) --
    
    """
    pass

def delete_resource(OrganizationId=None, ResourceId=None):
    """
    Deletes the specified resource.
    See also: AWS API Documentation
    
    Exceptions
    
    :example: response = client.delete_resource(
        OrganizationId='string',
        ResourceId='string'
    )
    
    
    :type OrganizationId: string
    :param OrganizationId: [REQUIRED]\nThe identifier associated with the organization from which the resource is deleted.\n

    :type ResourceId: string
    :param ResourceId: [REQUIRED]\nThe identifier of the resource to be deleted.\n

    :rtype: dict

ReturnsResponse Syntax
{}


Response Structure

(dict) --




Exceptions

WorkMail.Client.exceptions.EntityStateException
WorkMail.Client.exceptions.InvalidParameterException
WorkMail.Client.exceptions.OrganizationNotFoundException
WorkMail.Client.exceptions.OrganizationStateException


    :return: {}
    
    
    :returns: 
    (dict) --
    
    """
    pass

def delete_user(OrganizationId=None, UserId=None):
    """
    Deletes a user from Amazon WorkMail and all subsequent systems. Before you can delete a user, the user state must be DISABLED . Use the  DescribeUser action to confirm the user state.
    Deleting a user is permanent and cannot be undone. WorkMail archives user mailboxes for 30 days before they are permanently removed.
    See also: AWS API Documentation
    
    Exceptions
    
    :example: response = client.delete_user(
        OrganizationId='string',
        UserId='string'
    )
    
    
    :type OrganizationId: string
    :param OrganizationId: [REQUIRED]\nThe organization that contains the user to be deleted.\n

    :type UserId: string
    :param UserId: [REQUIRED]\nThe identifier of the user to be deleted.\n

    :rtype: dict

ReturnsResponse Syntax
{}


Response Structure

(dict) --




Exceptions

WorkMail.Client.exceptions.DirectoryServiceAuthenticationFailedException
WorkMail.Client.exceptions.DirectoryUnavailableException
WorkMail.Client.exceptions.EntityStateException
WorkMail.Client.exceptions.InvalidParameterException
WorkMail.Client.exceptions.OrganizationNotFoundException
WorkMail.Client.exceptions.OrganizationStateException
WorkMail.Client.exceptions.UnsupportedOperationException


    :return: {}
    
    
    :returns: 
    (dict) --
    
    """
    pass

def deregister_from_work_mail(OrganizationId=None, EntityId=None):
    """
    Mark a user, group, or resource as no longer used in Amazon WorkMail. This action disassociates the mailbox and schedules it for clean-up. WorkMail keeps mailboxes for 30 days before they are permanently removed. The functionality in the console is Disable .
    See also: AWS API Documentation
    
    Exceptions
    
    :example: response = client.deregister_from_work_mail(
        OrganizationId='string',
        EntityId='string'
    )
    
    
    :type OrganizationId: string
    :param OrganizationId: [REQUIRED]\nThe identifier for the organization under which the Amazon WorkMail entity exists.\n

    :type EntityId: string
    :param EntityId: [REQUIRED]\nThe identifier for the member (user or group) to be updated.\n

    :rtype: dict

ReturnsResponse Syntax
{}


Response Structure

(dict) --




Exceptions

WorkMail.Client.exceptions.EntityNotFoundException
WorkMail.Client.exceptions.EntityStateException
WorkMail.Client.exceptions.InvalidParameterException
WorkMail.Client.exceptions.OrganizationNotFoundException
WorkMail.Client.exceptions.OrganizationStateException


    :return: {}
    
    
    :returns: 
    (dict) --
    
    """
    pass

def describe_group(OrganizationId=None, GroupId=None):
    """
    Returns the data available for the group.
    See also: AWS API Documentation
    
    Exceptions
    
    :example: response = client.describe_group(
        OrganizationId='string',
        GroupId='string'
    )
    
    
    :type OrganizationId: string
    :param OrganizationId: [REQUIRED]\nThe identifier for the organization under which the group exists.\n

    :type GroupId: string
    :param GroupId: [REQUIRED]\nThe identifier for the group to be described.\n

    :rtype: dict

ReturnsResponse Syntax
{
    'GroupId': 'string',
    'Name': 'string',
    'Email': 'string',
    'State': 'ENABLED'|'DISABLED'|'DELETED',
    'EnabledDate': datetime(2015, 1, 1),
    'DisabledDate': datetime(2015, 1, 1)
}


Response Structure

(dict) --

GroupId (string) --
The identifier of the described group.

Name (string) --
The name of the described group.

Email (string) --
The email of the described group.

State (string) --
The state of the user: enabled (registered to Amazon WorkMail) or disabled (deregistered or never registered to WorkMail).

EnabledDate (datetime) --
The date and time when a user was registered to WorkMail, in UNIX epoch time format.

DisabledDate (datetime) --
The date and time when a user was deregistered from WorkMail, in UNIX epoch time format.







Exceptions

WorkMail.Client.exceptions.EntityNotFoundException
WorkMail.Client.exceptions.InvalidParameterException
WorkMail.Client.exceptions.OrganizationNotFoundException
WorkMail.Client.exceptions.OrganizationStateException


    :return: {
        'GroupId': 'string',
        'Name': 'string',
        'Email': 'string',
        'State': 'ENABLED'|'DISABLED'|'DELETED',
        'EnabledDate': datetime(2015, 1, 1),
        'DisabledDate': datetime(2015, 1, 1)
    }
    
    
    :returns: 
    WorkMail.Client.exceptions.EntityNotFoundException
    WorkMail.Client.exceptions.InvalidParameterException
    WorkMail.Client.exceptions.OrganizationNotFoundException
    WorkMail.Client.exceptions.OrganizationStateException
    
    """
    pass

def describe_organization(OrganizationId=None):
    """
    Provides more information regarding a given organization based on its identifier.
    See also: AWS API Documentation
    
    Exceptions
    
    :example: response = client.describe_organization(
        OrganizationId='string'
    )
    
    
    :type OrganizationId: string
    :param OrganizationId: [REQUIRED]\nThe identifier for the organization to be described.\n

    :rtype: dict
ReturnsResponse Syntax{
    'OrganizationId': 'string',
    'Alias': 'string',
    'State': 'string',
    'DirectoryId': 'string',
    'DirectoryType': 'string',
    'DefaultMailDomain': 'string',
    'CompletedDate': datetime(2015, 1, 1),
    'ErrorMessage': 'string',
    'ARN': 'string'
}


Response Structure

(dict) --
OrganizationId (string) --The identifier of an organization.

Alias (string) --The alias for an organization.

State (string) --The state of an organization.

DirectoryId (string) --The identifier for the directory associated with an Amazon WorkMail organization.

DirectoryType (string) --The type of directory associated with the WorkMail organization.

DefaultMailDomain (string) --The default mail domain associated with the organization.

CompletedDate (datetime) --The date at which the organization became usable in the WorkMail context, in UNIX epoch time format.

ErrorMessage (string) --(Optional) The error message indicating if unexpected behavior was encountered with regards to the organization.

ARN (string) --The Amazon Resource Name (ARN) of the organization.






Exceptions

WorkMail.Client.exceptions.InvalidParameterException
WorkMail.Client.exceptions.OrganizationNotFoundException


    :return: {
        'OrganizationId': 'string',
        'Alias': 'string',
        'State': 'string',
        'DirectoryId': 'string',
        'DirectoryType': 'string',
        'DefaultMailDomain': 'string',
        'CompletedDate': datetime(2015, 1, 1),
        'ErrorMessage': 'string',
        'ARN': 'string'
    }
    
    
    """
    pass

def describe_resource(OrganizationId=None, ResourceId=None):
    """
    Returns the data available for the resource.
    See also: AWS API Documentation
    
    Exceptions
    
    :example: response = client.describe_resource(
        OrganizationId='string',
        ResourceId='string'
    )
    
    
    :type OrganizationId: string
    :param OrganizationId: [REQUIRED]\nThe identifier associated with the organization for which the resource is described.\n

    :type ResourceId: string
    :param ResourceId: [REQUIRED]\nThe identifier of the resource to be described.\n

    :rtype: dict

ReturnsResponse Syntax
{
    'ResourceId': 'string',
    'Email': 'string',
    'Name': 'string',
    'Type': 'ROOM'|'EQUIPMENT',
    'BookingOptions': {
        'AutoAcceptRequests': True|False,
        'AutoDeclineRecurringRequests': True|False,
        'AutoDeclineConflictingRequests': True|False
    },
    'State': 'ENABLED'|'DISABLED'|'DELETED',
    'EnabledDate': datetime(2015, 1, 1),
    'DisabledDate': datetime(2015, 1, 1)
}


Response Structure

(dict) --

ResourceId (string) --
The identifier of the described resource.

Email (string) --
The email of the described resource.

Name (string) --
The name of the described resource.

Type (string) --
The type of the described resource.

BookingOptions (dict) --
The booking options for the described resource.

AutoAcceptRequests (boolean) --
The resource\'s ability to automatically reply to requests. If disabled, delegates must be associated to the resource.

AutoDeclineRecurringRequests (boolean) --
The resource\'s ability to automatically decline any recurring requests.

AutoDeclineConflictingRequests (boolean) --
The resource\'s ability to automatically decline any conflicting requests.



State (string) --
The state of the resource: enabled (registered to Amazon WorkMail), disabled (deregistered or never registered to WorkMail), or deleted.

EnabledDate (datetime) --
The date and time when a resource was enabled for WorkMail, in UNIX epoch time format.

DisabledDate (datetime) --
The date and time when a resource was disabled from WorkMail, in UNIX epoch time format.







Exceptions

WorkMail.Client.exceptions.EntityNotFoundException
WorkMail.Client.exceptions.InvalidParameterException
WorkMail.Client.exceptions.OrganizationNotFoundException
WorkMail.Client.exceptions.OrganizationStateException


    :return: {
        'ResourceId': 'string',
        'Email': 'string',
        'Name': 'string',
        'Type': 'ROOM'|'EQUIPMENT',
        'BookingOptions': {
            'AutoAcceptRequests': True|False,
            'AutoDeclineRecurringRequests': True|False,
            'AutoDeclineConflictingRequests': True|False
        },
        'State': 'ENABLED'|'DISABLED'|'DELETED',
        'EnabledDate': datetime(2015, 1, 1),
        'DisabledDate': datetime(2015, 1, 1)
    }
    
    
    :returns: 
    WorkMail.Client.exceptions.EntityNotFoundException
    WorkMail.Client.exceptions.InvalidParameterException
    WorkMail.Client.exceptions.OrganizationNotFoundException
    WorkMail.Client.exceptions.OrganizationStateException
    
    """
    pass

def describe_user(OrganizationId=None, UserId=None):
    """
    Provides information regarding the user.
    See also: AWS API Documentation
    
    Exceptions
    
    :example: response = client.describe_user(
        OrganizationId='string',
        UserId='string'
    )
    
    
    :type OrganizationId: string
    :param OrganizationId: [REQUIRED]\nThe identifier for the organization under which the user exists.\n

    :type UserId: string
    :param UserId: [REQUIRED]\nThe identifier for the user to be described.\n

    :rtype: dict

ReturnsResponse Syntax
{
    'UserId': 'string',
    'Name': 'string',
    'Email': 'string',
    'DisplayName': 'string',
    'State': 'ENABLED'|'DISABLED'|'DELETED',
    'UserRole': 'USER'|'RESOURCE'|'SYSTEM_USER',
    'EnabledDate': datetime(2015, 1, 1),
    'DisabledDate': datetime(2015, 1, 1)
}


Response Structure

(dict) --

UserId (string) --
The identifier for the described user.

Name (string) --
The name for the user.

Email (string) --
The email of the user.

DisplayName (string) --
The display name of the user.

State (string) --
The state of a user: enabled (registered to Amazon WorkMail) or disabled (deregistered or never registered to WorkMail).

UserRole (string) --
In certain cases, other entities are modeled as users. If interoperability is enabled, resources are imported into Amazon WorkMail as users. Because different WorkMail organizations rely on different directory types, administrators can distinguish between an unregistered user (account is disabled and has a user role) and the directory administrators. The values are USER, RESOURCE, and SYSTEM_USER.

EnabledDate (datetime) --
The date and time at which the user was enabled for Amazon WorkMail usage, in UNIX epoch time format.

DisabledDate (datetime) --
The date and time at which the user was disabled for Amazon WorkMail usage, in UNIX epoch time format.







Exceptions

WorkMail.Client.exceptions.EntityNotFoundException
WorkMail.Client.exceptions.InvalidParameterException
WorkMail.Client.exceptions.OrganizationNotFoundException
WorkMail.Client.exceptions.OrganizationStateException


    :return: {
        'UserId': 'string',
        'Name': 'string',
        'Email': 'string',
        'DisplayName': 'string',
        'State': 'ENABLED'|'DISABLED'|'DELETED',
        'UserRole': 'USER'|'RESOURCE'|'SYSTEM_USER',
        'EnabledDate': datetime(2015, 1, 1),
        'DisabledDate': datetime(2015, 1, 1)
    }
    
    
    :returns: 
    WorkMail.Client.exceptions.EntityNotFoundException
    WorkMail.Client.exceptions.InvalidParameterException
    WorkMail.Client.exceptions.OrganizationNotFoundException
    WorkMail.Client.exceptions.OrganizationStateException
    
    """
    pass

def disassociate_delegate_from_resource(OrganizationId=None, ResourceId=None, EntityId=None):
    """
    Removes a member from the resource\'s set of delegates.
    See also: AWS API Documentation
    
    Exceptions
    
    :example: response = client.disassociate_delegate_from_resource(
        OrganizationId='string',
        ResourceId='string',
        EntityId='string'
    )
    
    
    :type OrganizationId: string
    :param OrganizationId: [REQUIRED]\nThe identifier for the organization under which the resource exists.\n

    :type ResourceId: string
    :param ResourceId: [REQUIRED]\nThe identifier of the resource from which delegates\' set members are removed.\n

    :type EntityId: string
    :param EntityId: [REQUIRED]\nThe identifier for the member (user, group) to be removed from the resource\'s delegates.\n

    :rtype: dict

ReturnsResponse Syntax
{}


Response Structure

(dict) --




Exceptions

WorkMail.Client.exceptions.EntityNotFoundException
WorkMail.Client.exceptions.EntityStateException
WorkMail.Client.exceptions.InvalidParameterException
WorkMail.Client.exceptions.OrganizationNotFoundException
WorkMail.Client.exceptions.OrganizationStateException


    :return: {}
    
    
    :returns: 
    (dict) --
    
    """
    pass

def disassociate_member_from_group(OrganizationId=None, GroupId=None, MemberId=None):
    """
    Removes a member from a group.
    See also: AWS API Documentation
    
    Exceptions
    
    :example: response = client.disassociate_member_from_group(
        OrganizationId='string',
        GroupId='string',
        MemberId='string'
    )
    
    
    :type OrganizationId: string
    :param OrganizationId: [REQUIRED]\nThe identifier for the organization under which the group exists.\n

    :type GroupId: string
    :param GroupId: [REQUIRED]\nThe identifier for the group from which members are removed.\n

    :type MemberId: string
    :param MemberId: [REQUIRED]\nThe identifier for the member to be removed to the group.\n

    :rtype: dict

ReturnsResponse Syntax
{}


Response Structure

(dict) --




Exceptions

WorkMail.Client.exceptions.DirectoryServiceAuthenticationFailedException
WorkMail.Client.exceptions.DirectoryUnavailableException
WorkMail.Client.exceptions.EntityNotFoundException
WorkMail.Client.exceptions.EntityStateException
WorkMail.Client.exceptions.InvalidParameterException
WorkMail.Client.exceptions.OrganizationNotFoundException
WorkMail.Client.exceptions.OrganizationStateException
WorkMail.Client.exceptions.UnsupportedOperationException


    :return: {}
    
    
    :returns: 
    (dict) --
    
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

def get_access_control_effect(OrganizationId=None, IpAddress=None, Action=None, UserId=None):
    """
    Gets the effects of an organization\'s access control rules as they apply to a specified IPv4 address, access protocol action, or user ID.
    See also: AWS API Documentation
    
    Exceptions
    
    :example: response = client.get_access_control_effect(
        OrganizationId='string',
        IpAddress='string',
        Action='string',
        UserId='string'
    )
    
    
    :type OrganizationId: string
    :param OrganizationId: [REQUIRED]\nThe identifier for the organization.\n

    :type IpAddress: string
    :param IpAddress: [REQUIRED]\nThe IPv4 address.\n

    :type Action: string
    :param Action: [REQUIRED]\nThe access protocol action. Valid values include ActiveSync , AutoDiscover , EWS , IMAP , SMTP , WindowsOutlook , and WebMail .\n

    :type UserId: string
    :param UserId: [REQUIRED]\nThe user ID.\n

    :rtype: dict

ReturnsResponse Syntax
{
    'Effect': 'ALLOW'|'DENY',
    'MatchedRules': [
        'string',
    ]
}


Response Structure

(dict) --

Effect (string) --
The rule effect.

MatchedRules (list) --
The rules that match the given parameters, resulting in an effect.

(string) --








Exceptions

WorkMail.Client.exceptions.EntityNotFoundException
WorkMail.Client.exceptions.InvalidParameterException
WorkMail.Client.exceptions.OrganizationNotFoundException
WorkMail.Client.exceptions.OrganizationStateException


    :return: {
        'Effect': 'ALLOW'|'DENY',
        'MatchedRules': [
            'string',
        ]
    }
    
    
    :returns: 
    (string) --
    
    """
    pass

def get_mailbox_details(OrganizationId=None, UserId=None):
    """
    Requests a user\'s mailbox details for a specified organization and user.
    See also: AWS API Documentation
    
    Exceptions
    
    :example: response = client.get_mailbox_details(
        OrganizationId='string',
        UserId='string'
    )
    
    
    :type OrganizationId: string
    :param OrganizationId: [REQUIRED]\nThe identifier for the organization that contains the user whose mailbox details are being requested.\n

    :type UserId: string
    :param UserId: [REQUIRED]\nThe identifier for the user whose mailbox details are being requested.\n

    :rtype: dict

ReturnsResponse Syntax
{
    'MailboxQuota': 123,
    'MailboxSize': 123.0
}


Response Structure

(dict) --

MailboxQuota (integer) --
The maximum allowed mailbox size, in MB, for the specified user.

MailboxSize (float) --
The current mailbox size, in MB, for the specified user.







Exceptions

WorkMail.Client.exceptions.OrganizationNotFoundException
WorkMail.Client.exceptions.OrganizationStateException
WorkMail.Client.exceptions.EntityNotFoundException


    :return: {
        'MailboxQuota': 123,
        'MailboxSize': 123.0
    }
    
    
    :returns: 
    WorkMail.Client.exceptions.OrganizationNotFoundException
    WorkMail.Client.exceptions.OrganizationStateException
    WorkMail.Client.exceptions.EntityNotFoundException
    
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

def list_access_control_rules(OrganizationId=None):
    """
    Lists the access control rules for the specified organization.
    See also: AWS API Documentation
    
    Exceptions
    
    :example: response = client.list_access_control_rules(
        OrganizationId='string'
    )
    
    
    :type OrganizationId: string
    :param OrganizationId: [REQUIRED]\nThe identifier for the organization.\n

    :rtype: dict
ReturnsResponse Syntax{
    'Rules': [
        {
            'Name': 'string',
            'Effect': 'ALLOW'|'DENY',
            'Description': 'string',
            'IpRanges': [
                'string',
            ],
            'NotIpRanges': [
                'string',
            ],
            'Actions': [
                'string',
            ],
            'NotActions': [
                'string',
            ],
            'UserIds': [
                'string',
            ],
            'NotUserIds': [
                'string',
            ],
            'DateCreated': datetime(2015, 1, 1),
            'DateModified': datetime(2015, 1, 1)
        },
    ]
}


Response Structure

(dict) --
Rules (list) --The access control rules.

(dict) --A rule that controls access to an Amazon WorkMail organization.

Name (string) --The rule name.

Effect (string) --The rule effect.

Description (string) --The rule description.

IpRanges (list) --IPv4 CIDR ranges to include in the rule.

(string) --


NotIpRanges (list) --IPv4 CIDR ranges to exclude from the rule.

(string) --


Actions (list) --Access protocol actions to include in the rule. Valid values include ActiveSync , AutoDiscover , EWS , IMAP , SMTP , WindowsOutlook , and WebMail .

(string) --


NotActions (list) --Access protocol actions to exclude from the rule. Valid values include ActiveSync , AutoDiscover , EWS , IMAP , SMTP , WindowsOutlook , and WebMail .

(string) --


UserIds (list) --User IDs to include in the rule.

(string) --


NotUserIds (list) --User IDs to exclude from the rule.

(string) --


DateCreated (datetime) --The date that the rule was created.

DateModified (datetime) --The date that the rule was modified.










Exceptions

WorkMail.Client.exceptions.OrganizationNotFoundException
WorkMail.Client.exceptions.OrganizationStateException


    :return: {
        'Rules': [
            {
                'Name': 'string',
                'Effect': 'ALLOW'|'DENY',
                'Description': 'string',
                'IpRanges': [
                    'string',
                ],
                'NotIpRanges': [
                    'string',
                ],
                'Actions': [
                    'string',
                ],
                'NotActions': [
                    'string',
                ],
                'UserIds': [
                    'string',
                ],
                'NotUserIds': [
                    'string',
                ],
                'DateCreated': datetime(2015, 1, 1),
                'DateModified': datetime(2015, 1, 1)
            },
        ]
    }
    
    
    :returns: 
    (string) --
    
    """
    pass

def list_aliases(OrganizationId=None, EntityId=None, NextToken=None, MaxResults=None):
    """
    Creates a paginated call to list the aliases associated with a given entity.
    See also: AWS API Documentation
    
    Exceptions
    
    :example: response = client.list_aliases(
        OrganizationId='string',
        EntityId='string',
        NextToken='string',
        MaxResults=123
    )
    
    
    :type OrganizationId: string
    :param OrganizationId: [REQUIRED]\nThe identifier for the organization under which the entity exists.\n

    :type EntityId: string
    :param EntityId: [REQUIRED]\nThe identifier for the entity for which to list the aliases.\n

    :type NextToken: string
    :param NextToken: The token to use to retrieve the next page of results. The first call does not contain any tokens.

    :type MaxResults: integer
    :param MaxResults: The maximum number of results to return in a single call.

    :rtype: dict

ReturnsResponse Syntax
{
    'Aliases': [
        'string',
    ],
    'NextToken': 'string'
}


Response Structure

(dict) --

Aliases (list) --
The entity\'s paginated aliases.

(string) --


NextToken (string) --
The token to use to retrieve the next page of results. The value is "null" when there are no more results to return.







Exceptions

WorkMail.Client.exceptions.EntityNotFoundException
WorkMail.Client.exceptions.EntityStateException
WorkMail.Client.exceptions.InvalidParameterException
WorkMail.Client.exceptions.OrganizationNotFoundException
WorkMail.Client.exceptions.OrganizationStateException


    :return: {
        'Aliases': [
            'string',
        ],
        'NextToken': 'string'
    }
    
    
    :returns: 
    (string) --
    
    """
    pass

def list_group_members(OrganizationId=None, GroupId=None, NextToken=None, MaxResults=None):
    """
    Returns an overview of the members of a group. Users and groups can be members of a group.
    See also: AWS API Documentation
    
    Exceptions
    
    :example: response = client.list_group_members(
        OrganizationId='string',
        GroupId='string',
        NextToken='string',
        MaxResults=123
    )
    
    
    :type OrganizationId: string
    :param OrganizationId: [REQUIRED]\nThe identifier for the organization under which the group exists.\n

    :type GroupId: string
    :param GroupId: [REQUIRED]\nThe identifier for the group to which the members (users or groups) are associated.\n

    :type NextToken: string
    :param NextToken: The token to use to retrieve the next page of results. The first call does not contain any tokens.

    :type MaxResults: integer
    :param MaxResults: The maximum number of results to return in a single call.

    :rtype: dict

ReturnsResponse Syntax
{
    'Members': [
        {
            'Id': 'string',
            'Name': 'string',
            'Type': 'GROUP'|'USER',
            'State': 'ENABLED'|'DISABLED'|'DELETED',
            'EnabledDate': datetime(2015, 1, 1),
            'DisabledDate': datetime(2015, 1, 1)
        },
    ],
    'NextToken': 'string'
}


Response Structure

(dict) --

Members (list) --
The members associated to the group.

(dict) --
The representation of a user or group.

Id (string) --
The identifier of the member.

Name (string) --
The name of the member.

Type (string) --
A member can be a user or group.

State (string) --
The state of the member, which can be ENABLED, DISABLED, or DELETED.

EnabledDate (datetime) --
The date indicating when the member was enabled for Amazon WorkMail use.

DisabledDate (datetime) --
The date indicating when the member was disabled from Amazon WorkMail use.





NextToken (string) --
The token to use to retrieve the next page of results. The first call does not contain any tokens.







Exceptions

WorkMail.Client.exceptions.EntityNotFoundException
WorkMail.Client.exceptions.EntityStateException
WorkMail.Client.exceptions.InvalidParameterException
WorkMail.Client.exceptions.OrganizationNotFoundException
WorkMail.Client.exceptions.OrganizationStateException


    :return: {
        'Members': [
            {
                'Id': 'string',
                'Name': 'string',
                'Type': 'GROUP'|'USER',
                'State': 'ENABLED'|'DISABLED'|'DELETED',
                'EnabledDate': datetime(2015, 1, 1),
                'DisabledDate': datetime(2015, 1, 1)
            },
        ],
        'NextToken': 'string'
    }
    
    
    :returns: 
    WorkMail.Client.exceptions.EntityNotFoundException
    WorkMail.Client.exceptions.EntityStateException
    WorkMail.Client.exceptions.InvalidParameterException
    WorkMail.Client.exceptions.OrganizationNotFoundException
    WorkMail.Client.exceptions.OrganizationStateException
    
    """
    pass

def list_groups(OrganizationId=None, NextToken=None, MaxResults=None):
    """
    Returns summaries of the organization\'s groups.
    See also: AWS API Documentation
    
    Exceptions
    
    :example: response = client.list_groups(
        OrganizationId='string',
        NextToken='string',
        MaxResults=123
    )
    
    
    :type OrganizationId: string
    :param OrganizationId: [REQUIRED]\nThe identifier for the organization under which the groups exist.\n

    :type NextToken: string
    :param NextToken: The token to use to retrieve the next page of results. The first call does not contain any tokens.

    :type MaxResults: integer
    :param MaxResults: The maximum number of results to return in a single call.

    :rtype: dict

ReturnsResponse Syntax
{
    'Groups': [
        {
            'Id': 'string',
            'Email': 'string',
            'Name': 'string',
            'State': 'ENABLED'|'DISABLED'|'DELETED',
            'EnabledDate': datetime(2015, 1, 1),
            'DisabledDate': datetime(2015, 1, 1)
        },
    ],
    'NextToken': 'string'
}


Response Structure

(dict) --

Groups (list) --
The overview of groups for an organization.

(dict) --
The representation of an Amazon WorkMail group.

Id (string) --
The identifier of the group.

Email (string) --
The email of the group.

Name (string) --
The name of the group.

State (string) --
The state of the group, which can be ENABLED, DISABLED, or DELETED.

EnabledDate (datetime) --
The date indicating when the group was enabled for Amazon WorkMail use.

DisabledDate (datetime) --
The date indicating when the group was disabled from Amazon WorkMail use.





NextToken (string) --
The token to use to retrieve the next page of results. The value is "null" when there are no more results to return.







Exceptions

WorkMail.Client.exceptions.EntityNotFoundException
WorkMail.Client.exceptions.InvalidParameterException
WorkMail.Client.exceptions.OrganizationNotFoundException
WorkMail.Client.exceptions.OrganizationStateException


    :return: {
        'Groups': [
            {
                'Id': 'string',
                'Email': 'string',
                'Name': 'string',
                'State': 'ENABLED'|'DISABLED'|'DELETED',
                'EnabledDate': datetime(2015, 1, 1),
                'DisabledDate': datetime(2015, 1, 1)
            },
        ],
        'NextToken': 'string'
    }
    
    
    :returns: 
    WorkMail.Client.exceptions.EntityNotFoundException
    WorkMail.Client.exceptions.InvalidParameterException
    WorkMail.Client.exceptions.OrganizationNotFoundException
    WorkMail.Client.exceptions.OrganizationStateException
    
    """
    pass

def list_mailbox_permissions(OrganizationId=None, EntityId=None, NextToken=None, MaxResults=None):
    """
    Lists the mailbox permissions associated with a user, group, or resource mailbox.
    See also: AWS API Documentation
    
    Exceptions
    
    :example: response = client.list_mailbox_permissions(
        OrganizationId='string',
        EntityId='string',
        NextToken='string',
        MaxResults=123
    )
    
    
    :type OrganizationId: string
    :param OrganizationId: [REQUIRED]\nThe identifier of the organization under which the user, group, or resource exists.\n

    :type EntityId: string
    :param EntityId: [REQUIRED]\nThe identifier of the user, group, or resource for which to list mailbox permissions.\n

    :type NextToken: string
    :param NextToken: The token to use to retrieve the next page of results. The first call does not contain any tokens.

    :type MaxResults: integer
    :param MaxResults: The maximum number of results to return in a single call.

    :rtype: dict

ReturnsResponse Syntax
{
    'Permissions': [
        {
            'GranteeId': 'string',
            'GranteeType': 'GROUP'|'USER',
            'PermissionValues': [
                'FULL_ACCESS'|'SEND_AS'|'SEND_ON_BEHALF',
            ]
        },
    ],
    'NextToken': 'string'
}


Response Structure

(dict) --

Permissions (list) --
One page of the user, group, or resource mailbox permissions.

(dict) --
Permission granted to a user, group, or resource to access a certain aspect of another user, group, or resource mailbox.

GranteeId (string) --
The identifier of the user, group, or resource to which the permissions are granted.

GranteeType (string) --
The type of user, group, or resource referred to in GranteeId.

PermissionValues (list) --
The permissions granted to the grantee. SEND_AS allows the grantee to send email as the owner of the mailbox (the grantee is not mentioned on these emails). SEND_ON_BEHALF allows the grantee to send email on behalf of the owner of the mailbox (the grantee is not mentioned as the physical sender of these emails). FULL_ACCESS allows the grantee full access to the mailbox, irrespective of other folder-level permissions set on the mailbox.

(string) --






NextToken (string) --
The token to use to retrieve the next page of results. The value is "null" when there are no more results to return.







Exceptions

WorkMail.Client.exceptions.EntityNotFoundException
WorkMail.Client.exceptions.InvalidParameterException
WorkMail.Client.exceptions.OrganizationNotFoundException
WorkMail.Client.exceptions.OrganizationStateException


    :return: {
        'Permissions': [
            {
                'GranteeId': 'string',
                'GranteeType': 'GROUP'|'USER',
                'PermissionValues': [
                    'FULL_ACCESS'|'SEND_AS'|'SEND_ON_BEHALF',
                ]
            },
        ],
        'NextToken': 'string'
    }
    
    
    :returns: 
    (string) --
    
    """
    pass

def list_organizations(NextToken=None, MaxResults=None):
    """
    Returns summaries of the customer\'s organizations.
    See also: AWS API Documentation
    
    Exceptions
    
    :example: response = client.list_organizations(
        NextToken='string',
        MaxResults=123
    )
    
    
    :type NextToken: string
    :param NextToken: The token to use to retrieve the next page of results. The first call does not contain any tokens.

    :type MaxResults: integer
    :param MaxResults: The maximum number of results to return in a single call.

    :rtype: dict

ReturnsResponse Syntax
{
    'OrganizationSummaries': [
        {
            'OrganizationId': 'string',
            'Alias': 'string',
            'ErrorMessage': 'string',
            'State': 'string'
        },
    ],
    'NextToken': 'string'
}


Response Structure

(dict) --

OrganizationSummaries (list) --
The overview of owned organizations presented as a list of organization summaries.

(dict) --
The representation of an organization.

OrganizationId (string) --
The identifier associated with the organization.

Alias (string) --
The alias associated with the organization.

ErrorMessage (string) --
The error message associated with the organization. It is only present if unexpected behavior has occurred with regards to the organization. It provides insight or solutions regarding unexpected behavior.

State (string) --
The state associated with the organization.





NextToken (string) --
The token to use to retrieve the next page of results. The value is "null" when there are no more results to return.







Exceptions

WorkMail.Client.exceptions.InvalidParameterException


    :return: {
        'OrganizationSummaries': [
            {
                'OrganizationId': 'string',
                'Alias': 'string',
                'ErrorMessage': 'string',
                'State': 'string'
            },
        ],
        'NextToken': 'string'
    }
    
    
    :returns: 
    WorkMail.Client.exceptions.InvalidParameterException
    
    """
    pass

def list_resource_delegates(OrganizationId=None, ResourceId=None, NextToken=None, MaxResults=None):
    """
    Lists the delegates associated with a resource. Users and groups can be resource delegates and answer requests on behalf of the resource.
    See also: AWS API Documentation
    
    Exceptions
    
    :example: response = client.list_resource_delegates(
        OrganizationId='string',
        ResourceId='string',
        NextToken='string',
        MaxResults=123
    )
    
    
    :type OrganizationId: string
    :param OrganizationId: [REQUIRED]\nThe identifier for the organization that contains the resource for which delegates are listed.\n

    :type ResourceId: string
    :param ResourceId: [REQUIRED]\nThe identifier for the resource whose delegates are listed.\n

    :type NextToken: string
    :param NextToken: The token used to paginate through the delegates associated with a resource.

    :type MaxResults: integer
    :param MaxResults: The number of maximum results in a page.

    :rtype: dict

ReturnsResponse Syntax
{
    'Delegates': [
        {
            'Id': 'string',
            'Type': 'GROUP'|'USER'
        },
    ],
    'NextToken': 'string'
}


Response Structure

(dict) --

Delegates (list) --
One page of the resource\'s delegates.

(dict) --
The name of the attribute, which is one of the values defined in the UserAttribute enumeration.

Id (string) --
The identifier for the user or group associated as the resource\'s delegate.

Type (string) --
The type of the delegate: user or group.





NextToken (string) --
The token used to paginate through the delegates associated with a resource. While results are still available, it has an associated value. When the last page is reached, the token is empty.







Exceptions

WorkMail.Client.exceptions.EntityNotFoundException
WorkMail.Client.exceptions.EntityStateException
WorkMail.Client.exceptions.InvalidParameterException
WorkMail.Client.exceptions.OrganizationNotFoundException
WorkMail.Client.exceptions.OrganizationStateException


    :return: {
        'Delegates': [
            {
                'Id': 'string',
                'Type': 'GROUP'|'USER'
            },
        ],
        'NextToken': 'string'
    }
    
    
    :returns: 
    WorkMail.Client.exceptions.EntityNotFoundException
    WorkMail.Client.exceptions.EntityStateException
    WorkMail.Client.exceptions.InvalidParameterException
    WorkMail.Client.exceptions.OrganizationNotFoundException
    WorkMail.Client.exceptions.OrganizationStateException
    
    """
    pass

def list_resources(OrganizationId=None, NextToken=None, MaxResults=None):
    """
    Returns summaries of the organization\'s resources.
    See also: AWS API Documentation
    
    Exceptions
    
    :example: response = client.list_resources(
        OrganizationId='string',
        NextToken='string',
        MaxResults=123
    )
    
    
    :type OrganizationId: string
    :param OrganizationId: [REQUIRED]\nThe identifier for the organization under which the resources exist.\n

    :type NextToken: string
    :param NextToken: The token to use to retrieve the next page of results. The first call does not contain any tokens.

    :type MaxResults: integer
    :param MaxResults: The maximum number of results to return in a single call.

    :rtype: dict

ReturnsResponse Syntax
{
    'Resources': [
        {
            'Id': 'string',
            'Email': 'string',
            'Name': 'string',
            'Type': 'ROOM'|'EQUIPMENT',
            'State': 'ENABLED'|'DISABLED'|'DELETED',
            'EnabledDate': datetime(2015, 1, 1),
            'DisabledDate': datetime(2015, 1, 1)
        },
    ],
    'NextToken': 'string'
}


Response Structure

(dict) --

Resources (list) --
One page of the organization\'s resource representation.

(dict) --
The representation of a resource.

Id (string) --
The identifier of the resource.

Email (string) --
The email of the resource.

Name (string) --
The name of the resource.

Type (string) --
The type of the resource: equipment or room.

State (string) --
The state of the resource, which can be ENABLED, DISABLED, or DELETED.

EnabledDate (datetime) --
The date indicating when the resource was enabled for Amazon WorkMail use.

DisabledDate (datetime) --
The date indicating when the resource was disabled from Amazon WorkMail use.





NextToken (string) --
The token used to paginate through all the organization\'s resources. While results are still available, it has an associated value. When the last page is reached, the token is empty.







Exceptions

WorkMail.Client.exceptions.InvalidParameterException
WorkMail.Client.exceptions.OrganizationNotFoundException
WorkMail.Client.exceptions.OrganizationStateException


    :return: {
        'Resources': [
            {
                'Id': 'string',
                'Email': 'string',
                'Name': 'string',
                'Type': 'ROOM'|'EQUIPMENT',
                'State': 'ENABLED'|'DISABLED'|'DELETED',
                'EnabledDate': datetime(2015, 1, 1),
                'DisabledDate': datetime(2015, 1, 1)
            },
        ],
        'NextToken': 'string'
    }
    
    
    :returns: 
    WorkMail.Client.exceptions.InvalidParameterException
    WorkMail.Client.exceptions.OrganizationNotFoundException
    WorkMail.Client.exceptions.OrganizationStateException
    
    """
    pass

def list_tags_for_resource(ResourceARN=None):
    """
    Lists the tags applied to an Amazon WorkMail organization resource.
    See also: AWS API Documentation
    
    Exceptions
    
    :example: response = client.list_tags_for_resource(
        ResourceARN='string'
    )
    
    
    :type ResourceARN: string
    :param ResourceARN: [REQUIRED]\nThe resource ARN.\n

    :rtype: dict
ReturnsResponse Syntax{
    'Tags': [
        {
            'Key': 'string',
            'Value': 'string'
        },
    ]
}


Response Structure

(dict) --
Tags (list) --A list of tag key-value pairs.

(dict) --Describes a tag applied to a resource.

Key (string) --The key of the tag.

Value (string) --The value of the tag.










Exceptions

WorkMail.Client.exceptions.ResourceNotFoundException


    :return: {
        'Tags': [
            {
                'Key': 'string',
                'Value': 'string'
            },
        ]
    }
    
    
    """
    pass

def list_users(OrganizationId=None, NextToken=None, MaxResults=None):
    """
    Returns summaries of the organization\'s users.
    See also: AWS API Documentation
    
    Exceptions
    
    :example: response = client.list_users(
        OrganizationId='string',
        NextToken='string',
        MaxResults=123
    )
    
    
    :type OrganizationId: string
    :param OrganizationId: [REQUIRED]\nThe identifier for the organization under which the users exist.\n

    :type NextToken: string
    :param NextToken: The token to use to retrieve the next page of results. The first call does not contain any tokens.

    :type MaxResults: integer
    :param MaxResults: The maximum number of results to return in a single call.

    :rtype: dict

ReturnsResponse Syntax
{
    'Users': [
        {
            'Id': 'string',
            'Email': 'string',
            'Name': 'string',
            'DisplayName': 'string',
            'State': 'ENABLED'|'DISABLED'|'DELETED',
            'UserRole': 'USER'|'RESOURCE'|'SYSTEM_USER',
            'EnabledDate': datetime(2015, 1, 1),
            'DisabledDate': datetime(2015, 1, 1)
        },
    ],
    'NextToken': 'string'
}


Response Structure

(dict) --

Users (list) --
The overview of users for an organization.

(dict) --
The representation of an Amazon WorkMail user.

Id (string) --
The identifier of the user.

Email (string) --
The email of the user.

Name (string) --
The name of the user.

DisplayName (string) --
The display name of the user.

State (string) --
The state of the user, which can be ENABLED, DISABLED, or DELETED.

UserRole (string) --
The role of the user.

EnabledDate (datetime) --
The date indicating when the user was enabled for Amazon WorkMail use.

DisabledDate (datetime) --
The date indicating when the user was disabled from Amazon WorkMail use.





NextToken (string) --
The token to use to retrieve the next page of results. This value is null when there are no more results to return.







Exceptions

WorkMail.Client.exceptions.InvalidParameterException
WorkMail.Client.exceptions.OrganizationNotFoundException
WorkMail.Client.exceptions.OrganizationStateException


    :return: {
        'Users': [
            {
                'Id': 'string',
                'Email': 'string',
                'Name': 'string',
                'DisplayName': 'string',
                'State': 'ENABLED'|'DISABLED'|'DELETED',
                'UserRole': 'USER'|'RESOURCE'|'SYSTEM_USER',
                'EnabledDate': datetime(2015, 1, 1),
                'DisabledDate': datetime(2015, 1, 1)
            },
        ],
        'NextToken': 'string'
    }
    
    
    :returns: 
    WorkMail.Client.exceptions.InvalidParameterException
    WorkMail.Client.exceptions.OrganizationNotFoundException
    WorkMail.Client.exceptions.OrganizationStateException
    
    """
    pass

def put_access_control_rule(Name=None, Effect=None, Description=None, IpRanges=None, NotIpRanges=None, Actions=None, NotActions=None, UserIds=None, NotUserIds=None, OrganizationId=None):
    """
    Adds a new access control rule for the specified organization. The rule allows or denies access to the organization for the specified IPv4 addresses, access protocol actions, and user IDs. Adding a new rule with the same name as an existing rule replaces the older rule.
    See also: AWS API Documentation
    
    Exceptions
    
    :example: response = client.put_access_control_rule(
        Name='string',
        Effect='ALLOW'|'DENY',
        Description='string',
        IpRanges=[
            'string',
        ],
        NotIpRanges=[
            'string',
        ],
        Actions=[
            'string',
        ],
        NotActions=[
            'string',
        ],
        UserIds=[
            'string',
        ],
        NotUserIds=[
            'string',
        ],
        OrganizationId='string'
    )
    
    
    :type Name: string
    :param Name: [REQUIRED]\nThe rule name.\n

    :type Effect: string
    :param Effect: [REQUIRED]\nThe rule effect.\n

    :type Description: string
    :param Description: [REQUIRED]\nThe rule description.\n

    :type IpRanges: list
    :param IpRanges: IPv4 CIDR ranges to include in the rule.\n\n(string) --\n\n

    :type NotIpRanges: list
    :param NotIpRanges: IPv4 CIDR ranges to exclude from the rule.\n\n(string) --\n\n

    :type Actions: list
    :param Actions: Access protocol actions to include in the rule. Valid values include ActiveSync , AutoDiscover , EWS , IMAP , SMTP , WindowsOutlook , and WebMail .\n\n(string) --\n\n

    :type NotActions: list
    :param NotActions: Access protocol actions to exclude from the rule. Valid values include ActiveSync , AutoDiscover , EWS , IMAP , SMTP , WindowsOutlook , and WebMail .\n\n(string) --\n\n

    :type UserIds: list
    :param UserIds: User IDs to include in the rule.\n\n(string) --\n\n

    :type NotUserIds: list
    :param NotUserIds: User IDs to exclude from the rule.\n\n(string) --\n\n

    :type OrganizationId: string
    :param OrganizationId: [REQUIRED]\nThe identifier of the organization.\n

    :rtype: dict

ReturnsResponse Syntax
{}


Response Structure

(dict) --




Exceptions

WorkMail.Client.exceptions.LimitExceededException
WorkMail.Client.exceptions.InvalidParameterException
WorkMail.Client.exceptions.EntityNotFoundException
WorkMail.Client.exceptions.OrganizationNotFoundException
WorkMail.Client.exceptions.OrganizationStateException


    :return: {}
    
    
    :returns: 
    (dict) --
    
    """
    pass

def put_mailbox_permissions(OrganizationId=None, EntityId=None, GranteeId=None, PermissionValues=None):
    """
    Sets permissions for a user, group, or resource. This replaces any pre-existing permissions.
    See also: AWS API Documentation
    
    Exceptions
    
    :example: response = client.put_mailbox_permissions(
        OrganizationId='string',
        EntityId='string',
        GranteeId='string',
        PermissionValues=[
            'FULL_ACCESS'|'SEND_AS'|'SEND_ON_BEHALF',
        ]
    )
    
    
    :type OrganizationId: string
    :param OrganizationId: [REQUIRED]\nThe identifier of the organization under which the user, group, or resource exists.\n

    :type EntityId: string
    :param EntityId: [REQUIRED]\nThe identifier of the user, group, or resource for which to update mailbox permissions.\n

    :type GranteeId: string
    :param GranteeId: [REQUIRED]\nThe identifier of the user, group, or resource to which to grant the permissions.\n

    :type PermissionValues: list
    :param PermissionValues: [REQUIRED]\nThe permissions granted to the grantee. SEND_AS allows the grantee to send email as the owner of the mailbox (the grantee is not mentioned on these emails). SEND_ON_BEHALF allows the grantee to send email on behalf of the owner of the mailbox (the grantee is not mentioned as the physical sender of these emails). FULL_ACCESS allows the grantee full access to the mailbox, irrespective of other folder-level permissions set on the mailbox.\n\n(string) --\n\n

    :rtype: dict

ReturnsResponse Syntax
{}


Response Structure

(dict) --




Exceptions

WorkMail.Client.exceptions.EntityNotFoundException
WorkMail.Client.exceptions.EntityStateException
WorkMail.Client.exceptions.InvalidParameterException
WorkMail.Client.exceptions.OrganizationNotFoundException
WorkMail.Client.exceptions.OrganizationStateException


    :return: {}
    
    
    :returns: 
    (dict) --
    
    """
    pass

def register_to_work_mail(OrganizationId=None, EntityId=None, Email=None):
    """
    Registers an existing and disabled user, group, or resource for Amazon WorkMail use by associating a mailbox and calendaring capabilities. It performs no change if the user, group, or resource is enabled and fails if the user, group, or resource is deleted. This operation results in the accumulation of costs. For more information, see Pricing . The equivalent console functionality for this operation is Enable .
    Users can either be created by calling the  CreateUser API operation or they can be synchronized from your directory. For more information, see  DeregisterFromWorkMail .
    See also: AWS API Documentation
    
    Exceptions
    
    :example: response = client.register_to_work_mail(
        OrganizationId='string',
        EntityId='string',
        Email='string'
    )
    
    
    :type OrganizationId: string
    :param OrganizationId: [REQUIRED]\nThe identifier for the organization under which the user, group, or resource exists.\n

    :type EntityId: string
    :param EntityId: [REQUIRED]\nThe identifier for the user, group, or resource to be updated.\n

    :type Email: string
    :param Email: [REQUIRED]\nThe email for the user, group, or resource to be updated.\n

    :rtype: dict

ReturnsResponse Syntax
{}


Response Structure

(dict) --




Exceptions

WorkMail.Client.exceptions.DirectoryServiceAuthenticationFailedException
WorkMail.Client.exceptions.DirectoryUnavailableException
WorkMail.Client.exceptions.EmailAddressInUseException
WorkMail.Client.exceptions.EntityNotFoundException
WorkMail.Client.exceptions.EntityStateException
WorkMail.Client.exceptions.EntityAlreadyRegisteredException
WorkMail.Client.exceptions.InvalidParameterException
WorkMail.Client.exceptions.MailDomainNotFoundException
WorkMail.Client.exceptions.MailDomainStateException
WorkMail.Client.exceptions.OrganizationNotFoundException
WorkMail.Client.exceptions.OrganizationStateException


    :return: {}
    
    
    :returns: 
    (dict) --
    
    """
    pass

def reset_password(OrganizationId=None, UserId=None, Password=None):
    """
    Allows the administrator to reset the password for a user.
    See also: AWS API Documentation
    
    Exceptions
    
    :example: response = client.reset_password(
        OrganizationId='string',
        UserId='string',
        Password='string'
    )
    
    
    :type OrganizationId: string
    :param OrganizationId: [REQUIRED]\nThe identifier of the organization that contains the user for which the password is reset.\n

    :type UserId: string
    :param UserId: [REQUIRED]\nThe identifier of the user for whom the password is reset.\n

    :type Password: string
    :param Password: [REQUIRED]\nThe new password for the user.\n

    :rtype: dict

ReturnsResponse Syntax
{}


Response Structure

(dict) --




Exceptions

WorkMail.Client.exceptions.DirectoryServiceAuthenticationFailedException
WorkMail.Client.exceptions.DirectoryUnavailableException
WorkMail.Client.exceptions.EntityNotFoundException
WorkMail.Client.exceptions.EntityStateException
WorkMail.Client.exceptions.InvalidParameterException
WorkMail.Client.exceptions.InvalidPasswordException
WorkMail.Client.exceptions.OrganizationNotFoundException
WorkMail.Client.exceptions.OrganizationStateException
WorkMail.Client.exceptions.UnsupportedOperationException


    :return: {}
    
    
    :returns: 
    (dict) --
    
    """
    pass

def tag_resource(ResourceARN=None, Tags=None):
    """
    Applies the specified tags to the specified Amazon WorkMail organization resource.
    See also: AWS API Documentation
    
    Exceptions
    
    :example: response = client.tag_resource(
        ResourceARN='string',
        Tags=[
            {
                'Key': 'string',
                'Value': 'string'
            },
        ]
    )
    
    
    :type ResourceARN: string
    :param ResourceARN: [REQUIRED]\nThe resource ARN.\n

    :type Tags: list
    :param Tags: [REQUIRED]\nThe tag key-value pairs.\n\n(dict) --Describes a tag applied to a resource.\n\nKey (string) -- [REQUIRED]The key of the tag.\n\nValue (string) -- [REQUIRED]The value of the tag.\n\n\n\n\n

    :rtype: dict

ReturnsResponse Syntax
{}


Response Structure

(dict) --




Exceptions

WorkMail.Client.exceptions.ResourceNotFoundException
WorkMail.Client.exceptions.TooManyTagsException
WorkMail.Client.exceptions.OrganizationStateException


    :return: {}
    
    
    :returns: 
    (dict) --
    
    """
    pass

def untag_resource(ResourceARN=None, TagKeys=None):
    """
    Untags the specified tags from the specified Amazon WorkMail organization resource.
    See also: AWS API Documentation
    
    Exceptions
    
    :example: response = client.untag_resource(
        ResourceARN='string',
        TagKeys=[
            'string',
        ]
    )
    
    
    :type ResourceARN: string
    :param ResourceARN: [REQUIRED]\nThe resource ARN.\n

    :type TagKeys: list
    :param TagKeys: [REQUIRED]\nThe tag keys.\n\n(string) --\n\n

    :rtype: dict

ReturnsResponse Syntax
{}


Response Structure

(dict) --




Exceptions

WorkMail.Client.exceptions.ResourceNotFoundException


    :return: {}
    
    
    :returns: 
    (dict) --
    
    """
    pass

def update_mailbox_quota(OrganizationId=None, UserId=None, MailboxQuota=None):
    """
    Updates a user\'s current mailbox quota for a specified organization and user.
    See also: AWS API Documentation
    
    Exceptions
    
    :example: response = client.update_mailbox_quota(
        OrganizationId='string',
        UserId='string',
        MailboxQuota=123
    )
    
    
    :type OrganizationId: string
    :param OrganizationId: [REQUIRED]\nThe identifier for the organization that contains the user for whom to update the mailbox quota.\n

    :type UserId: string
    :param UserId: [REQUIRED]\nThe identifer for the user for whom to update the mailbox quota.\n

    :type MailboxQuota: integer
    :param MailboxQuota: [REQUIRED]\nThe updated mailbox quota, in MB, for the specified user.\n

    :rtype: dict

ReturnsResponse Syntax
{}


Response Structure

(dict) --




Exceptions

WorkMail.Client.exceptions.InvalidParameterException
WorkMail.Client.exceptions.OrganizationNotFoundException
WorkMail.Client.exceptions.OrganizationStateException
WorkMail.Client.exceptions.EntityNotFoundException
WorkMail.Client.exceptions.EntityStateException


    :return: {}
    
    
    :returns: 
    (dict) --
    
    """
    pass

def update_primary_email_address(OrganizationId=None, EntityId=None, Email=None):
    """
    Updates the primary email for a user, group, or resource. The current email is moved into the list of aliases (or swapped between an existing alias and the current primary email), and the email provided in the input is promoted as the primary.
    See also: AWS API Documentation
    
    Exceptions
    
    :example: response = client.update_primary_email_address(
        OrganizationId='string',
        EntityId='string',
        Email='string'
    )
    
    
    :type OrganizationId: string
    :param OrganizationId: [REQUIRED]\nThe organization that contains the user, group, or resource to update.\n

    :type EntityId: string
    :param EntityId: [REQUIRED]\nThe user, group, or resource to update.\n

    :type Email: string
    :param Email: [REQUIRED]\nThe value of the email to be updated as primary.\n

    :rtype: dict

ReturnsResponse Syntax
{}


Response Structure

(dict) --




Exceptions

WorkMail.Client.exceptions.DirectoryServiceAuthenticationFailedException
WorkMail.Client.exceptions.DirectoryUnavailableException
WorkMail.Client.exceptions.EmailAddressInUseException
WorkMail.Client.exceptions.EntityNotFoundException
WorkMail.Client.exceptions.EntityStateException
WorkMail.Client.exceptions.InvalidParameterException
WorkMail.Client.exceptions.MailDomainNotFoundException
WorkMail.Client.exceptions.MailDomainStateException
WorkMail.Client.exceptions.InvalidParameterException
WorkMail.Client.exceptions.OrganizationNotFoundException
WorkMail.Client.exceptions.OrganizationStateException
WorkMail.Client.exceptions.UnsupportedOperationException


    :return: {}
    
    
    :returns: 
    (dict) --
    
    """
    pass

def update_resource(OrganizationId=None, ResourceId=None, Name=None, BookingOptions=None):
    """
    Updates data for the resource. To have the latest information, it must be preceded by a  DescribeResource call. The dataset in the request should be the one expected when performing another DescribeResource call.
    See also: AWS API Documentation
    
    Exceptions
    
    :example: response = client.update_resource(
        OrganizationId='string',
        ResourceId='string',
        Name='string',
        BookingOptions={
            'AutoAcceptRequests': True|False,
            'AutoDeclineRecurringRequests': True|False,
            'AutoDeclineConflictingRequests': True|False
        }
    )
    
    
    :type OrganizationId: string
    :param OrganizationId: [REQUIRED]\nThe identifier associated with the organization for which the resource is updated.\n

    :type ResourceId: string
    :param ResourceId: [REQUIRED]\nThe identifier of the resource to be updated.\n

    :type Name: string
    :param Name: The name of the resource to be updated.

    :type BookingOptions: dict
    :param BookingOptions: The resource\'s booking options to be updated.\n\nAutoAcceptRequests (boolean) --The resource\'s ability to automatically reply to requests. If disabled, delegates must be associated to the resource.\n\nAutoDeclineRecurringRequests (boolean) --The resource\'s ability to automatically decline any recurring requests.\n\nAutoDeclineConflictingRequests (boolean) --The resource\'s ability to automatically decline any conflicting requests.\n\n\n

    :rtype: dict

ReturnsResponse Syntax
{}


Response Structure

(dict) --




Exceptions

WorkMail.Client.exceptions.DirectoryUnavailableException
WorkMail.Client.exceptions.EntityNotFoundException
WorkMail.Client.exceptions.EntityStateException
WorkMail.Client.exceptions.InvalidConfigurationException
WorkMail.Client.exceptions.EmailAddressInUseException
WorkMail.Client.exceptions.MailDomainNotFoundException
WorkMail.Client.exceptions.MailDomainStateException
WorkMail.Client.exceptions.NameAvailabilityException
WorkMail.Client.exceptions.OrganizationNotFoundException
WorkMail.Client.exceptions.OrganizationStateException


    :return: {}
    
    
    :returns: 
    (dict) --
    
    """
    pass

