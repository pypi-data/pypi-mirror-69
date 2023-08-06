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

def create_member(ClientRequestToken=None, InvitationId=None, NetworkId=None, MemberConfiguration=None):
    """
    Creates a member within a Managed Blockchain network.
    See also: AWS API Documentation
    
    Exceptions
    
    :example: response = client.create_member(
        ClientRequestToken='string',
        InvitationId='string',
        NetworkId='string',
        MemberConfiguration={
            'Name': 'string',
            'Description': 'string',
            'FrameworkConfiguration': {
                'Fabric': {
                    'AdminUsername': 'string',
                    'AdminPassword': 'string'
                }
            },
            'LogPublishingConfiguration': {
                'Fabric': {
                    'CaLogs': {
                        'Cloudwatch': {
                            'Enabled': True|False
                        }
                    }
                }
            }
        }
    )
    
    
    :type ClientRequestToken: string
    :param ClientRequestToken: [REQUIRED]\nA unique, case-sensitive identifier that you provide to ensure the idempotency of the operation. An idempotent operation completes no more than one time. This identifier is required only if you make a service request directly using an HTTP client. It is generated automatically if you use an AWS SDK or the AWS CLI.\nThis field is autopopulated if not provided.\n

    :type InvitationId: string
    :param InvitationId: [REQUIRED]\nThe unique identifier of the invitation that is sent to the member to join the network.\n

    :type NetworkId: string
    :param NetworkId: [REQUIRED]\nThe unique identifier of the network in which the member is created.\n

    :type MemberConfiguration: dict
    :param MemberConfiguration: [REQUIRED]\nMember configuration parameters.\n\nName (string) -- [REQUIRED]The name of the member.\n\nDescription (string) --An optional description of the member.\n\nFrameworkConfiguration (dict) -- [REQUIRED]Configuration properties of the blockchain framework relevant to the member.\n\nFabric (dict) --Attributes of Hyperledger Fabric for a member on a Managed Blockchain network that uses Hyperledger Fabric.\n\nAdminUsername (string) -- [REQUIRED]The user name for the member\'s initial administrative user.\n\nAdminPassword (string) -- [REQUIRED]The password for the member\'s initial administrative user. The AdminPassword must be at least eight characters long and no more than 32 characters. It must contain at least one uppercase letter, one lowercase letter, and one digit. It cannot have a single quote(\xe2\x80\x98), double quote(\xe2\x80\x9c), forward slash(/), backward slash(), @, or a space.\n\n\n\n\n\nLogPublishingConfiguration (dict) --\nFabric (dict) --Configuration properties for logging events associated with a member of a Managed Blockchain network using the Hyperledger Fabric framework.\n\nCaLogs (dict) --Configuration properties for logging events associated with a member\'s Certificate Authority (CA). CA logs help you determine when a member in your account joins the network, or when new peers register with a member CA.\n\nCloudwatch (dict) --Parameters for publishing logs to Amazon CloudWatch Logs.\n\nEnabled (boolean) --Indicates whether logging is enabled.\n\n\n\n\n\n\n\n\n\n\n

    :rtype: dict

ReturnsResponse Syntax
{
    'MemberId': 'string'
}


Response Structure

(dict) --

MemberId (string) --
The unique identifier of the member.







Exceptions

ManagedBlockchain.Client.exceptions.InvalidRequestException
ManagedBlockchain.Client.exceptions.AccessDeniedException
ManagedBlockchain.Client.exceptions.ResourceNotFoundException
ManagedBlockchain.Client.exceptions.ResourceAlreadyExistsException
ManagedBlockchain.Client.exceptions.ResourceNotReadyException
ManagedBlockchain.Client.exceptions.ThrottlingException
ManagedBlockchain.Client.exceptions.ResourceLimitExceededException
ManagedBlockchain.Client.exceptions.InternalServiceErrorException


    :return: {
        'MemberId': 'string'
    }
    
    
    :returns: 
    ManagedBlockchain.Client.exceptions.InvalidRequestException
    ManagedBlockchain.Client.exceptions.AccessDeniedException
    ManagedBlockchain.Client.exceptions.ResourceNotFoundException
    ManagedBlockchain.Client.exceptions.ResourceAlreadyExistsException
    ManagedBlockchain.Client.exceptions.ResourceNotReadyException
    ManagedBlockchain.Client.exceptions.ThrottlingException
    ManagedBlockchain.Client.exceptions.ResourceLimitExceededException
    ManagedBlockchain.Client.exceptions.InternalServiceErrorException
    
    """
    pass

def create_network(ClientRequestToken=None, Name=None, Description=None, Framework=None, FrameworkVersion=None, FrameworkConfiguration=None, VotingPolicy=None, MemberConfiguration=None):
    """
    Creates a new blockchain network using Amazon Managed Blockchain.
    See also: AWS API Documentation
    
    Exceptions
    
    :example: response = client.create_network(
        ClientRequestToken='string',
        Name='string',
        Description='string',
        Framework='HYPERLEDGER_FABRIC',
        FrameworkVersion='string',
        FrameworkConfiguration={
            'Fabric': {
                'Edition': 'STARTER'|'STANDARD'
            }
        },
        VotingPolicy={
            'ApprovalThresholdPolicy': {
                'ThresholdPercentage': 123,
                'ProposalDurationInHours': 123,
                'ThresholdComparator': 'GREATER_THAN'|'GREATER_THAN_OR_EQUAL_TO'
            }
        },
        MemberConfiguration={
            'Name': 'string',
            'Description': 'string',
            'FrameworkConfiguration': {
                'Fabric': {
                    'AdminUsername': 'string',
                    'AdminPassword': 'string'
                }
            },
            'LogPublishingConfiguration': {
                'Fabric': {
                    'CaLogs': {
                        'Cloudwatch': {
                            'Enabled': True|False
                        }
                    }
                }
            }
        }
    )
    
    
    :type ClientRequestToken: string
    :param ClientRequestToken: [REQUIRED]\nA unique, case-sensitive identifier that you provide to ensure the idempotency of the operation. An idempotent operation completes no more than one time. This identifier is required only if you make a service request directly using an HTTP client. It is generated automatically if you use an AWS SDK or the AWS CLI.\nThis field is autopopulated if not provided.\n

    :type Name: string
    :param Name: [REQUIRED]\nThe name of the network.\n

    :type Description: string
    :param Description: An optional description for the network.

    :type Framework: string
    :param Framework: [REQUIRED]\nThe blockchain framework that the network uses.\n

    :type FrameworkVersion: string
    :param FrameworkVersion: [REQUIRED]\nThe version of the blockchain framework that the network uses.\n

    :type FrameworkConfiguration: dict
    :param FrameworkConfiguration: Configuration properties of the blockchain framework relevant to the network configuration.\n\nFabric (dict) --Hyperledger Fabric configuration properties for a Managed Blockchain network that uses Hyperledger Fabric.\n\nEdition (string) -- [REQUIRED]The edition of Amazon Managed Blockchain that the network uses. For more information, see Amazon Managed Blockchain Pricing .\n\n\n\n\n

    :type VotingPolicy: dict
    :param VotingPolicy: [REQUIRED]\nThe voting rules used by the network to determine if a proposal is approved.\n\nApprovalThresholdPolicy (dict) --Defines the rules for the network for voting on proposals, such as the percentage of YES votes required for the proposal to be approved and the duration of the proposal. The policy applies to all proposals and is specified when the network is created.\n\nThresholdPercentage (integer) --The percentage of votes among all members that must be YES for a proposal to be approved. For example, a ThresholdPercentage value of 50 indicates 50%. The ThresholdComparator determines the precise comparison. If a ThresholdPercentage value of 50 is specified on a network with 10 members, along with a ThresholdComparator value of GREATER_THAN , this indicates that 6 YES votes are required for the proposal to be approved.\n\nProposalDurationInHours (integer) --The duration from the time that a proposal is created until it expires. If members cast neither the required number of YES votes to approve the proposal nor the number of NO votes required to reject it before the duration expires, the proposal is EXPIRED and ProposalActions are not carried out.\n\nThresholdComparator (string) --Determines whether the vote percentage must be greater than the ThresholdPercentage or must be greater than or equal to the ThreholdPercentage to be approved.\n\n\n\n\n

    :type MemberConfiguration: dict
    :param MemberConfiguration: [REQUIRED]\nConfiguration properties for the first member within the network.\n\nName (string) -- [REQUIRED]The name of the member.\n\nDescription (string) --An optional description of the member.\n\nFrameworkConfiguration (dict) -- [REQUIRED]Configuration properties of the blockchain framework relevant to the member.\n\nFabric (dict) --Attributes of Hyperledger Fabric for a member on a Managed Blockchain network that uses Hyperledger Fabric.\n\nAdminUsername (string) -- [REQUIRED]The user name for the member\'s initial administrative user.\n\nAdminPassword (string) -- [REQUIRED]The password for the member\'s initial administrative user. The AdminPassword must be at least eight characters long and no more than 32 characters. It must contain at least one uppercase letter, one lowercase letter, and one digit. It cannot have a single quote(\xe2\x80\x98), double quote(\xe2\x80\x9c), forward slash(/), backward slash(), @, or a space.\n\n\n\n\n\nLogPublishingConfiguration (dict) --\nFabric (dict) --Configuration properties for logging events associated with a member of a Managed Blockchain network using the Hyperledger Fabric framework.\n\nCaLogs (dict) --Configuration properties for logging events associated with a member\'s Certificate Authority (CA). CA logs help you determine when a member in your account joins the network, or when new peers register with a member CA.\n\nCloudwatch (dict) --Parameters for publishing logs to Amazon CloudWatch Logs.\n\nEnabled (boolean) --Indicates whether logging is enabled.\n\n\n\n\n\n\n\n\n\n\n

    :rtype: dict

ReturnsResponse Syntax
{
    'NetworkId': 'string',
    'MemberId': 'string'
}


Response Structure

(dict) --

NetworkId (string) --
The unique identifier for the network.

MemberId (string) --
The unique identifier for the first member within the network.







Exceptions

ManagedBlockchain.Client.exceptions.InvalidRequestException
ManagedBlockchain.Client.exceptions.AccessDeniedException
ManagedBlockchain.Client.exceptions.ResourceAlreadyExistsException
ManagedBlockchain.Client.exceptions.ThrottlingException
ManagedBlockchain.Client.exceptions.ResourceLimitExceededException
ManagedBlockchain.Client.exceptions.InternalServiceErrorException


    :return: {
        'NetworkId': 'string',
        'MemberId': 'string'
    }
    
    
    :returns: 
    ManagedBlockchain.Client.exceptions.InvalidRequestException
    ManagedBlockchain.Client.exceptions.AccessDeniedException
    ManagedBlockchain.Client.exceptions.ResourceAlreadyExistsException
    ManagedBlockchain.Client.exceptions.ThrottlingException
    ManagedBlockchain.Client.exceptions.ResourceLimitExceededException
    ManagedBlockchain.Client.exceptions.InternalServiceErrorException
    
    """
    pass

def create_node(ClientRequestToken=None, NetworkId=None, MemberId=None, NodeConfiguration=None):
    """
    Creates a peer node in a member.
    See also: AWS API Documentation
    
    Exceptions
    
    :example: response = client.create_node(
        ClientRequestToken='string',
        NetworkId='string',
        MemberId='string',
        NodeConfiguration={
            'InstanceType': 'string',
            'AvailabilityZone': 'string',
            'LogPublishingConfiguration': {
                'Fabric': {
                    'ChaincodeLogs': {
                        'Cloudwatch': {
                            'Enabled': True|False
                        }
                    },
                    'PeerLogs': {
                        'Cloudwatch': {
                            'Enabled': True|False
                        }
                    }
                }
            }
        }
    )
    
    
    :type ClientRequestToken: string
    :param ClientRequestToken: [REQUIRED]\nA unique, case-sensitive identifier that you provide to ensure the idempotency of the operation. An idempotent operation completes no more than one time. This identifier is required only if you make a service request directly using an HTTP client. It is generated automatically if you use an AWS SDK or the AWS CLI.\nThis field is autopopulated if not provided.\n

    :type NetworkId: string
    :param NetworkId: [REQUIRED]\nThe unique identifier of the network in which this node runs.\n

    :type MemberId: string
    :param MemberId: [REQUIRED]\nThe unique identifier of the member that owns this node.\n

    :type NodeConfiguration: dict
    :param NodeConfiguration: [REQUIRED]\nThe properties of a node configuration.\n\nInstanceType (string) -- [REQUIRED]The Amazon Managed Blockchain instance type for the node.\n\nAvailabilityZone (string) -- [REQUIRED]The Availability Zone in which the node exists.\n\nLogPublishingConfiguration (dict) --\nFabric (dict) --Configuration properties for logging events associated with a node that is owned by a member of a Managed Blockchain network using the Hyperledger Fabric framework.\n\nChaincodeLogs (dict) --Configuration properties for logging events associated with chaincode execution on a peer node. Chaincode logs contain the results of instantiating, invoking, and querying the chaincode. A peer can run multiple instances of chaincode. When enabled, a log stream is created for all chaincodes, with an individual log stream for each chaincode.\n\nCloudwatch (dict) --Parameters for publishing logs to Amazon CloudWatch Logs.\n\nEnabled (boolean) --Indicates whether logging is enabled.\n\n\n\n\n\nPeerLogs (dict) --Configuration properties for a peer node log. Peer node logs contain messages generated when your client submits transaction proposals to peer nodes, requests to join channels, enrolls an admin peer, and lists the chaincode instances on a peer node.\n\nCloudwatch (dict) --Parameters for publishing logs to Amazon CloudWatch Logs.\n\nEnabled (boolean) --Indicates whether logging is enabled.\n\n\n\n\n\n\n\n\n\n\n

    :rtype: dict

ReturnsResponse Syntax
{
    'NodeId': 'string'
}


Response Structure

(dict) --

NodeId (string) --
The unique identifier of the node.







Exceptions

ManagedBlockchain.Client.exceptions.InvalidRequestException
ManagedBlockchain.Client.exceptions.AccessDeniedException
ManagedBlockchain.Client.exceptions.ResourceNotFoundException
ManagedBlockchain.Client.exceptions.ResourceAlreadyExistsException
ManagedBlockchain.Client.exceptions.ResourceNotReadyException
ManagedBlockchain.Client.exceptions.ThrottlingException
ManagedBlockchain.Client.exceptions.ResourceLimitExceededException
ManagedBlockchain.Client.exceptions.InternalServiceErrorException


    :return: {
        'NodeId': 'string'
    }
    
    
    :returns: 
    ManagedBlockchain.Client.exceptions.InvalidRequestException
    ManagedBlockchain.Client.exceptions.AccessDeniedException
    ManagedBlockchain.Client.exceptions.ResourceNotFoundException
    ManagedBlockchain.Client.exceptions.ResourceAlreadyExistsException
    ManagedBlockchain.Client.exceptions.ResourceNotReadyException
    ManagedBlockchain.Client.exceptions.ThrottlingException
    ManagedBlockchain.Client.exceptions.ResourceLimitExceededException
    ManagedBlockchain.Client.exceptions.InternalServiceErrorException
    
    """
    pass

def create_proposal(ClientRequestToken=None, NetworkId=None, MemberId=None, Actions=None, Description=None):
    """
    Creates a proposal for a change to the network that other members of the network can vote on, for example, a proposal to add a new member to the network. Any member can create a proposal.
    See also: AWS API Documentation
    
    Exceptions
    
    :example: response = client.create_proposal(
        ClientRequestToken='string',
        NetworkId='string',
        MemberId='string',
        Actions={
            'Invitations': [
                {
                    'Principal': 'string'
                },
            ],
            'Removals': [
                {
                    'MemberId': 'string'
                },
            ]
        },
        Description='string'
    )
    
    
    :type ClientRequestToken: string
    :param ClientRequestToken: [REQUIRED]\nA unique, case-sensitive identifier that you provide to ensure the idempotency of the operation. An idempotent operation completes no more than one time. This identifier is required only if you make a service request directly using an HTTP client. It is generated automatically if you use an AWS SDK or the AWS CLI.\nThis field is autopopulated if not provided.\n

    :type NetworkId: string
    :param NetworkId: [REQUIRED]\nThe unique identifier of the network for which the proposal is made.\n

    :type MemberId: string
    :param MemberId: [REQUIRED]\nThe unique identifier of the member that is creating the proposal. This identifier is especially useful for identifying the member making the proposal when multiple members exist in a single AWS account.\n

    :type Actions: dict
    :param Actions: [REQUIRED]\nThe type of actions proposed, such as inviting a member or removing a member. The types of Actions in a proposal are mutually exclusive. For example, a proposal with Invitations actions cannot also contain Removals actions.\n\nInvitations (list) --The actions to perform for an APPROVED proposal to invite an AWS account to create a member and join the network.\n\n(dict) --An action to invite a specific AWS account to create a member and join the network. The InviteAction is carried out when a Proposal is APPROVED .\n\nPrincipal (string) -- [REQUIRED]The AWS account ID to invite.\n\n\n\n\n\nRemovals (list) --The actions to perform for an APPROVED proposal to remove a member from the network, which deletes the member and all associated member resources from the network.\n\n(dict) --An action to remove a member from a Managed Blockchain network as the result of a removal proposal that is APPROVED . The member and all associated resources are deleted from the network.\n\nMemberId (string) -- [REQUIRED]The unique identifier of the member to remove.\n\n\n\n\n\n\n

    :type Description: string
    :param Description: A description for the proposal that is visible to voting members, for example, 'Proposal to add Example Corp. as member.'

    :rtype: dict

ReturnsResponse Syntax
{
    'ProposalId': 'string'
}


Response Structure

(dict) --

ProposalId (string) --
The unique identifier of the proposal.







Exceptions

ManagedBlockchain.Client.exceptions.InvalidRequestException
ManagedBlockchain.Client.exceptions.AccessDeniedException
ManagedBlockchain.Client.exceptions.ResourceNotFoundException
ManagedBlockchain.Client.exceptions.ResourceNotReadyException
ManagedBlockchain.Client.exceptions.ThrottlingException
ManagedBlockchain.Client.exceptions.InternalServiceErrorException


    :return: {
        'ProposalId': 'string'
    }
    
    
    :returns: 
    ManagedBlockchain.Client.exceptions.InvalidRequestException
    ManagedBlockchain.Client.exceptions.AccessDeniedException
    ManagedBlockchain.Client.exceptions.ResourceNotFoundException
    ManagedBlockchain.Client.exceptions.ResourceNotReadyException
    ManagedBlockchain.Client.exceptions.ThrottlingException
    ManagedBlockchain.Client.exceptions.InternalServiceErrorException
    
    """
    pass

def delete_member(NetworkId=None, MemberId=None):
    """
    Deletes a member. Deleting a member removes the member and all associated resources from the network. DeleteMember can only be called for a specified MemberId if the principal performing the action is associated with the AWS account that owns the member. In all other cases, the DeleteMember action is carried out as the result of an approved proposal to remove a member. If MemberId is the last member in a network specified by the last AWS account, the network is deleted also.
    See also: AWS API Documentation
    
    Exceptions
    
    :example: response = client.delete_member(
        NetworkId='string',
        MemberId='string'
    )
    
    
    :type NetworkId: string
    :param NetworkId: [REQUIRED]\nThe unique identifier of the network from which the member is removed.\n

    :type MemberId: string
    :param MemberId: [REQUIRED]\nThe unique identifier of the member to remove.\n

    :rtype: dict

ReturnsResponse Syntax
{}


Response Structure

(dict) --




Exceptions

ManagedBlockchain.Client.exceptions.InvalidRequestException
ManagedBlockchain.Client.exceptions.AccessDeniedException
ManagedBlockchain.Client.exceptions.ResourceNotFoundException
ManagedBlockchain.Client.exceptions.ResourceNotReadyException
ManagedBlockchain.Client.exceptions.ThrottlingException
ManagedBlockchain.Client.exceptions.InternalServiceErrorException


    :return: {}
    
    
    :returns: 
    (dict) --
    
    """
    pass

def delete_node(NetworkId=None, MemberId=None, NodeId=None):
    """
    Deletes a peer node from a member that your AWS account owns. All data on the node is lost and cannot be recovered.
    See also: AWS API Documentation
    
    Exceptions
    
    :example: response = client.delete_node(
        NetworkId='string',
        MemberId='string',
        NodeId='string'
    )
    
    
    :type NetworkId: string
    :param NetworkId: [REQUIRED]\nThe unique identifier of the network that the node belongs to.\n

    :type MemberId: string
    :param MemberId: [REQUIRED]\nThe unique identifier of the member that owns this node.\n

    :type NodeId: string
    :param NodeId: [REQUIRED]\nThe unique identifier of the node.\n

    :rtype: dict

ReturnsResponse Syntax
{}


Response Structure

(dict) --




Exceptions

ManagedBlockchain.Client.exceptions.InvalidRequestException
ManagedBlockchain.Client.exceptions.AccessDeniedException
ManagedBlockchain.Client.exceptions.ResourceNotFoundException
ManagedBlockchain.Client.exceptions.ResourceNotReadyException
ManagedBlockchain.Client.exceptions.ThrottlingException
ManagedBlockchain.Client.exceptions.InternalServiceErrorException


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

def get_member(NetworkId=None, MemberId=None):
    """
    Returns detailed information about a member.
    See also: AWS API Documentation
    
    Exceptions
    
    :example: response = client.get_member(
        NetworkId='string',
        MemberId='string'
    )
    
    
    :type NetworkId: string
    :param NetworkId: [REQUIRED]\nThe unique identifier of the network to which the member belongs.\n

    :type MemberId: string
    :param MemberId: [REQUIRED]\nThe unique identifier of the member.\n

    :rtype: dict

ReturnsResponse Syntax
{
    'Member': {
        'NetworkId': 'string',
        'Id': 'string',
        'Name': 'string',
        'Description': 'string',
        'FrameworkAttributes': {
            'Fabric': {
                'AdminUsername': 'string',
                'CaEndpoint': 'string'
            }
        },
        'LogPublishingConfiguration': {
            'Fabric': {
                'CaLogs': {
                    'Cloudwatch': {
                        'Enabled': True|False
                    }
                }
            }
        },
        'Status': 'CREATING'|'AVAILABLE'|'CREATE_FAILED'|'UPDATING'|'DELETING'|'DELETED',
        'CreationDate': datetime(2015, 1, 1)
    }
}


Response Structure

(dict) --

Member (dict) --
The properties of a member.

NetworkId (string) --
The unique identifier of the network to which the member belongs.

Id (string) --
The unique identifier of the member.

Name (string) --
The name of the member.

Description (string) --
An optional description for the member.

FrameworkAttributes (dict) --
Attributes relevant to a member for the blockchain framework that the Managed Blockchain network uses.

Fabric (dict) --
Attributes of Hyperledger Fabric relevant to a member on a Managed Blockchain network that uses Hyperledger Fabric.

AdminUsername (string) --
The user name for the initial administrator user for the member.

CaEndpoint (string) --
The endpoint used to access the member\'s certificate authority.





LogPublishingConfiguration (dict) --
Configuration properties for logging events associated with a member.

Fabric (dict) --
Configuration properties for logging events associated with a member of a Managed Blockchain network using the Hyperledger Fabric framework.

CaLogs (dict) --
Configuration properties for logging events associated with a member\'s Certificate Authority (CA). CA logs help you determine when a member in your account joins the network, or when new peers register with a member CA.

Cloudwatch (dict) --
Parameters for publishing logs to Amazon CloudWatch Logs.

Enabled (boolean) --
Indicates whether logging is enabled.









Status (string) --
The status of a member.

CREATING - The AWS account is in the process of creating a member.
AVAILABLE - The member has been created and can participate in the network.
CREATE_FAILED - The AWS account attempted to create a member and creation failed.
DELETING - The member and all associated resources are in the process of being deleted. Either the AWS account that owns the member deleted it, or the member is being deleted as the result of an APPROVED PROPOSAL to remove the member.
DELETED - The member can no longer participate on the network and all associated resources are deleted. Either the AWS account that owns the member deleted it, or the member is being deleted as the result of an APPROVED PROPOSAL to remove the member.


CreationDate (datetime) --
The date and time that the member was created.









Exceptions

ManagedBlockchain.Client.exceptions.InvalidRequestException
ManagedBlockchain.Client.exceptions.AccessDeniedException
ManagedBlockchain.Client.exceptions.ResourceNotFoundException
ManagedBlockchain.Client.exceptions.ThrottlingException
ManagedBlockchain.Client.exceptions.InternalServiceErrorException


    :return: {
        'Member': {
            'NetworkId': 'string',
            'Id': 'string',
            'Name': 'string',
            'Description': 'string',
            'FrameworkAttributes': {
                'Fabric': {
                    'AdminUsername': 'string',
                    'CaEndpoint': 'string'
                }
            },
            'LogPublishingConfiguration': {
                'Fabric': {
                    'CaLogs': {
                        'Cloudwatch': {
                            'Enabled': True|False
                        }
                    }
                }
            },
            'Status': 'CREATING'|'AVAILABLE'|'CREATE_FAILED'|'UPDATING'|'DELETING'|'DELETED',
            'CreationDate': datetime(2015, 1, 1)
        }
    }
    
    
    :returns: 
    CREATING - The AWS account is in the process of creating a member.
    AVAILABLE - The member has been created and can participate in the network.
    CREATE_FAILED - The AWS account attempted to create a member and creation failed.
    DELETING - The member and all associated resources are in the process of being deleted. Either the AWS account that owns the member deleted it, or the member is being deleted as the result of an APPROVED PROPOSAL to remove the member.
    DELETED - The member can no longer participate on the network and all associated resources are deleted. Either the AWS account that owns the member deleted it, or the member is being deleted as the result of an APPROVED PROPOSAL to remove the member.
    
    """
    pass

def get_network(NetworkId=None):
    """
    Returns detailed information about a network.
    See also: AWS API Documentation
    
    Exceptions
    
    :example: response = client.get_network(
        NetworkId='string'
    )
    
    
    :type NetworkId: string
    :param NetworkId: [REQUIRED]\nThe unique identifier of the network to get information about.\n

    :rtype: dict
ReturnsResponse Syntax{
    'Network': {
        'Id': 'string',
        'Name': 'string',
        'Description': 'string',
        'Framework': 'HYPERLEDGER_FABRIC',
        'FrameworkVersion': 'string',
        'FrameworkAttributes': {
            'Fabric': {
                'OrderingServiceEndpoint': 'string',
                'Edition': 'STARTER'|'STANDARD'
            }
        },
        'VpcEndpointServiceName': 'string',
        'VotingPolicy': {
            'ApprovalThresholdPolicy': {
                'ThresholdPercentage': 123,
                'ProposalDurationInHours': 123,
                'ThresholdComparator': 'GREATER_THAN'|'GREATER_THAN_OR_EQUAL_TO'
            }
        },
        'Status': 'CREATING'|'AVAILABLE'|'CREATE_FAILED'|'DELETING'|'DELETED',
        'CreationDate': datetime(2015, 1, 1)
    }
}


Response Structure

(dict) --
Network (dict) --An object containing network configuration parameters.

Id (string) --The unique identifier of the network.

Name (string) --The name of the network.

Description (string) --Attributes of the blockchain framework for the network.

Framework (string) --The blockchain framework that the network uses.

FrameworkVersion (string) --The version of the blockchain framework that the network uses.

FrameworkAttributes (dict) --Attributes of the blockchain framework that the network uses.

Fabric (dict) --Attributes of Hyperledger Fabric for a Managed Blockchain network that uses Hyperledger Fabric.

OrderingServiceEndpoint (string) --The endpoint of the ordering service for the network.

Edition (string) --The edition of Amazon Managed Blockchain that Hyperledger Fabric uses. For more information, see Amazon Managed Blockchain Pricing .





VpcEndpointServiceName (string) --The VPC endpoint service name of the VPC endpoint service of the network. Members use the VPC endpoint service name to create a VPC endpoint to access network resources.

VotingPolicy (dict) --The voting rules for the network to decide if a proposal is accepted.

ApprovalThresholdPolicy (dict) --Defines the rules for the network for voting on proposals, such as the percentage of YES votes required for the proposal to be approved and the duration of the proposal. The policy applies to all proposals and is specified when the network is created.

ThresholdPercentage (integer) --The percentage of votes among all members that must be YES for a proposal to be approved. For example, a ThresholdPercentage value of 50 indicates 50%. The ThresholdComparator determines the precise comparison. If a ThresholdPercentage value of 50 is specified on a network with 10 members, along with a ThresholdComparator value of GREATER_THAN , this indicates that 6 YES votes are required for the proposal to be approved.

ProposalDurationInHours (integer) --The duration from the time that a proposal is created until it expires. If members cast neither the required number of YES votes to approve the proposal nor the number of NO votes required to reject it before the duration expires, the proposal is EXPIRED and ProposalActions are not carried out.

ThresholdComparator (string) --Determines whether the vote percentage must be greater than the ThresholdPercentage or must be greater than or equal to the ThreholdPercentage to be approved.





Status (string) --The current status of the network.

CreationDate (datetime) --The date and time that the network was created.








Exceptions

ManagedBlockchain.Client.exceptions.InvalidRequestException
ManagedBlockchain.Client.exceptions.AccessDeniedException
ManagedBlockchain.Client.exceptions.ResourceNotFoundException
ManagedBlockchain.Client.exceptions.ThrottlingException
ManagedBlockchain.Client.exceptions.InternalServiceErrorException


    :return: {
        'Network': {
            'Id': 'string',
            'Name': 'string',
            'Description': 'string',
            'Framework': 'HYPERLEDGER_FABRIC',
            'FrameworkVersion': 'string',
            'FrameworkAttributes': {
                'Fabric': {
                    'OrderingServiceEndpoint': 'string',
                    'Edition': 'STARTER'|'STANDARD'
                }
            },
            'VpcEndpointServiceName': 'string',
            'VotingPolicy': {
                'ApprovalThresholdPolicy': {
                    'ThresholdPercentage': 123,
                    'ProposalDurationInHours': 123,
                    'ThresholdComparator': 'GREATER_THAN'|'GREATER_THAN_OR_EQUAL_TO'
                }
            },
            'Status': 'CREATING'|'AVAILABLE'|'CREATE_FAILED'|'DELETING'|'DELETED',
            'CreationDate': datetime(2015, 1, 1)
        }
    }
    
    
    """
    pass

def get_node(NetworkId=None, MemberId=None, NodeId=None):
    """
    Returns detailed information about a peer node.
    See also: AWS API Documentation
    
    Exceptions
    
    :example: response = client.get_node(
        NetworkId='string',
        MemberId='string',
        NodeId='string'
    )
    
    
    :type NetworkId: string
    :param NetworkId: [REQUIRED]\nThe unique identifier of the network to which the node belongs.\n

    :type MemberId: string
    :param MemberId: [REQUIRED]\nThe unique identifier of the member that owns the node.\n

    :type NodeId: string
    :param NodeId: [REQUIRED]\nThe unique identifier of the node.\n

    :rtype: dict

ReturnsResponse Syntax
{
    'Node': {
        'NetworkId': 'string',
        'MemberId': 'string',
        'Id': 'string',
        'InstanceType': 'string',
        'AvailabilityZone': 'string',
        'FrameworkAttributes': {
            'Fabric': {
                'PeerEndpoint': 'string',
                'PeerEventEndpoint': 'string'
            }
        },
        'LogPublishingConfiguration': {
            'Fabric': {
                'ChaincodeLogs': {
                    'Cloudwatch': {
                        'Enabled': True|False
                    }
                },
                'PeerLogs': {
                    'Cloudwatch': {
                        'Enabled': True|False
                    }
                }
            }
        },
        'Status': 'CREATING'|'AVAILABLE'|'CREATE_FAILED'|'UPDATING'|'DELETING'|'DELETED'|'FAILED',
        'CreationDate': datetime(2015, 1, 1)
    }
}


Response Structure

(dict) --

Node (dict) --
Properties of the node configuration.

NetworkId (string) --
The unique identifier of the network that the node is in.

MemberId (string) --
The unique identifier of the member to which the node belongs.

Id (string) --
The unique identifier of the node.

InstanceType (string) --
The instance type of the node.

AvailabilityZone (string) --
The Availability Zone in which the node exists.

FrameworkAttributes (dict) --
Attributes of the blockchain framework being used.

Fabric (dict) --
Attributes of Hyperledger Fabric for a peer node on a Managed Blockchain network that uses Hyperledger Fabric.

PeerEndpoint (string) --
The endpoint that identifies the peer node for all services except peer channel-based event services.

PeerEventEndpoint (string) --
The endpoint that identifies the peer node for peer channel-based event services.





LogPublishingConfiguration (dict) --

Fabric (dict) --
Configuration properties for logging events associated with a node that is owned by a member of a Managed Blockchain network using the Hyperledger Fabric framework.

ChaincodeLogs (dict) --
Configuration properties for logging events associated with chaincode execution on a peer node. Chaincode logs contain the results of instantiating, invoking, and querying the chaincode. A peer can run multiple instances of chaincode. When enabled, a log stream is created for all chaincodes, with an individual log stream for each chaincode.

Cloudwatch (dict) --
Parameters for publishing logs to Amazon CloudWatch Logs.

Enabled (boolean) --
Indicates whether logging is enabled.





PeerLogs (dict) --
Configuration properties for a peer node log. Peer node logs contain messages generated when your client submits transaction proposals to peer nodes, requests to join channels, enrolls an admin peer, and lists the chaincode instances on a peer node.

Cloudwatch (dict) --
Parameters for publishing logs to Amazon CloudWatch Logs.

Enabled (boolean) --
Indicates whether logging is enabled.









Status (string) --
The status of the node.

CreationDate (datetime) --
The date and time that the node was created.









Exceptions

ManagedBlockchain.Client.exceptions.InvalidRequestException
ManagedBlockchain.Client.exceptions.AccessDeniedException
ManagedBlockchain.Client.exceptions.ResourceNotFoundException
ManagedBlockchain.Client.exceptions.ThrottlingException
ManagedBlockchain.Client.exceptions.InternalServiceErrorException


    :return: {
        'Node': {
            'NetworkId': 'string',
            'MemberId': 'string',
            'Id': 'string',
            'InstanceType': 'string',
            'AvailabilityZone': 'string',
            'FrameworkAttributes': {
                'Fabric': {
                    'PeerEndpoint': 'string',
                    'PeerEventEndpoint': 'string'
                }
            },
            'LogPublishingConfiguration': {
                'Fabric': {
                    'ChaincodeLogs': {
                        'Cloudwatch': {
                            'Enabled': True|False
                        }
                    },
                    'PeerLogs': {
                        'Cloudwatch': {
                            'Enabled': True|False
                        }
                    }
                }
            },
            'Status': 'CREATING'|'AVAILABLE'|'CREATE_FAILED'|'UPDATING'|'DELETING'|'DELETED'|'FAILED',
            'CreationDate': datetime(2015, 1, 1)
        }
    }
    
    
    :returns: 
    ManagedBlockchain.Client.exceptions.InvalidRequestException
    ManagedBlockchain.Client.exceptions.AccessDeniedException
    ManagedBlockchain.Client.exceptions.ResourceNotFoundException
    ManagedBlockchain.Client.exceptions.ThrottlingException
    ManagedBlockchain.Client.exceptions.InternalServiceErrorException
    
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

def get_proposal(NetworkId=None, ProposalId=None):
    """
    Returns detailed information about a proposal.
    See also: AWS API Documentation
    
    Exceptions
    
    :example: response = client.get_proposal(
        NetworkId='string',
        ProposalId='string'
    )
    
    
    :type NetworkId: string
    :param NetworkId: [REQUIRED]\nThe unique identifier of the network for which the proposal is made.\n

    :type ProposalId: string
    :param ProposalId: [REQUIRED]\nThe unique identifier of the proposal.\n

    :rtype: dict

ReturnsResponse Syntax
{
    'Proposal': {
        'ProposalId': 'string',
        'NetworkId': 'string',
        'Description': 'string',
        'Actions': {
            'Invitations': [
                {
                    'Principal': 'string'
                },
            ],
            'Removals': [
                {
                    'MemberId': 'string'
                },
            ]
        },
        'ProposedByMemberId': 'string',
        'ProposedByMemberName': 'string',
        'Status': 'IN_PROGRESS'|'APPROVED'|'REJECTED'|'EXPIRED'|'ACTION_FAILED',
        'CreationDate': datetime(2015, 1, 1),
        'ExpirationDate': datetime(2015, 1, 1),
        'YesVoteCount': 123,
        'NoVoteCount': 123,
        'OutstandingVoteCount': 123
    }
}


Response Structure

(dict) --

Proposal (dict) --
Information about a proposal.

ProposalId (string) --
The unique identifier of the proposal.

NetworkId (string) --
The unique identifier of the network for which the proposal is made.

Description (string) --
The description of the proposal.

Actions (dict) --
The actions to perform on the network if the proposal is APPROVED .

Invitations (list) --
The actions to perform for an APPROVED proposal to invite an AWS account to create a member and join the network.

(dict) --
An action to invite a specific AWS account to create a member and join the network. The InviteAction is carried out when a Proposal is APPROVED .

Principal (string) --
The AWS account ID to invite.





Removals (list) --
The actions to perform for an APPROVED proposal to remove a member from the network, which deletes the member and all associated member resources from the network.

(dict) --
An action to remove a member from a Managed Blockchain network as the result of a removal proposal that is APPROVED . The member and all associated resources are deleted from the network.

MemberId (string) --
The unique identifier of the member to remove.







ProposedByMemberId (string) --
The unique identifier of the member that created the proposal.

ProposedByMemberName (string) --
The name of the member that created the proposal.

Status (string) --
The status of the proposal. Values are as follows:

IN_PROGRESS - The proposal is active and open for member voting.
APPROVED - The proposal was approved with sufficient YES votes among members according to the VotingPolicy specified for the Network . The specified proposal actions are carried out.
REJECTED - The proposal was rejected with insufficient YES votes among members according to the VotingPolicy specified for the Network . The specified ProposalActions are not carried out.
EXPIRED - Members did not cast the number of votes required to determine the proposal outcome before the proposal expired. The specified ProposalActions are not carried out.
ACTION_FAILED - One or more of the specified ProposalActions in a proposal that was approved could not be completed because of an error. The ACTION_FAILED status occurs even if only one ProposalAction fails and other actions are successful.


CreationDate (datetime) --
The date and time that the proposal was created.

ExpirationDate (datetime) --
The date and time that the proposal expires. This is the CreationDate plus the ProposalDurationInHours that is specified in the ProposalThresholdPolicy . After this date and time, if members have not cast enough votes to determine the outcome according to the voting policy, the proposal is EXPIRED and Actions are not carried out.

YesVoteCount (integer) --
The current total of YES votes cast on the proposal by members.

NoVoteCount (integer) --
The current total of NO votes cast on the proposal by members.

OutstandingVoteCount (integer) --
The number of votes remaining to be cast on the proposal by members. In other words, the number of members minus the sum of YES votes and NO votes.









Exceptions

ManagedBlockchain.Client.exceptions.InvalidRequestException
ManagedBlockchain.Client.exceptions.AccessDeniedException
ManagedBlockchain.Client.exceptions.ResourceNotFoundException
ManagedBlockchain.Client.exceptions.ThrottlingException
ManagedBlockchain.Client.exceptions.InternalServiceErrorException


    :return: {
        'Proposal': {
            'ProposalId': 'string',
            'NetworkId': 'string',
            'Description': 'string',
            'Actions': {
                'Invitations': [
                    {
                        'Principal': 'string'
                    },
                ],
                'Removals': [
                    {
                        'MemberId': 'string'
                    },
                ]
            },
            'ProposedByMemberId': 'string',
            'ProposedByMemberName': 'string',
            'Status': 'IN_PROGRESS'|'APPROVED'|'REJECTED'|'EXPIRED'|'ACTION_FAILED',
            'CreationDate': datetime(2015, 1, 1),
            'ExpirationDate': datetime(2015, 1, 1),
            'YesVoteCount': 123,
            'NoVoteCount': 123,
            'OutstandingVoteCount': 123
        }
    }
    
    
    :returns: 
    IN_PROGRESS - The proposal is active and open for member voting.
    APPROVED - The proposal was approved with sufficient YES votes among members according to the VotingPolicy specified for the Network . The specified proposal actions are carried out.
    REJECTED - The proposal was rejected with insufficient YES votes among members according to the VotingPolicy specified for the Network . The specified ProposalActions are not carried out.
    EXPIRED - Members did not cast the number of votes required to determine the proposal outcome before the proposal expired. The specified ProposalActions are not carried out.
    ACTION_FAILED - One or more of the specified ProposalActions in a proposal that was approved could not be completed because of an error. The ACTION_FAILED status occurs even if only one ProposalAction fails and other actions are successful.
    
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

def list_invitations(MaxResults=None, NextToken=None):
    """
    Returns a listing of all invitations made on the specified network.
    See also: AWS API Documentation
    
    Exceptions
    
    :example: response = client.list_invitations(
        MaxResults=123,
        NextToken='string'
    )
    
    
    :type MaxResults: integer
    :param MaxResults: The maximum number of invitations to return.

    :type NextToken: string
    :param NextToken: The pagination token that indicates the next set of results to retrieve.

    :rtype: dict

ReturnsResponse Syntax
{
    'Invitations': [
        {
            'InvitationId': 'string',
            'CreationDate': datetime(2015, 1, 1),
            'ExpirationDate': datetime(2015, 1, 1),
            'Status': 'PENDING'|'ACCEPTED'|'ACCEPTING'|'REJECTED'|'EXPIRED',
            'NetworkSummary': {
                'Id': 'string',
                'Name': 'string',
                'Description': 'string',
                'Framework': 'HYPERLEDGER_FABRIC',
                'FrameworkVersion': 'string',
                'Status': 'CREATING'|'AVAILABLE'|'CREATE_FAILED'|'DELETING'|'DELETED',
                'CreationDate': datetime(2015, 1, 1)
            }
        },
    ],
    'NextToken': 'string'
}


Response Structure

(dict) --

Invitations (list) --
The invitations for the network.

(dict) --
An invitation to an AWS account to create a member and join the network.

InvitationId (string) --
The unique identifier for the invitation.

CreationDate (datetime) --
The date and time that the invitation was created.

ExpirationDate (datetime) --
The date and time that the invitation expires. This is the CreationDate plus the ProposalDurationInHours that is specified in the ProposalThresholdPolicy . After this date and time, the invitee can no longer create a member and join the network using this InvitationId .

Status (string) --
The status of the invitation:

PENDING - The invitee has not created a member to join the network, and the invitation has not yet expired.
ACCEPTING - The invitee has begun creating a member, and creation has not yet completed.
ACCEPTED - The invitee created a member and joined the network using the InvitationID .
REJECTED - The invitee rejected the invitation.
EXPIRED - The invitee neither created a member nor rejected the invitation before the ExpirationDate .


NetworkSummary (dict) --
A summary of network configuration properties.

Id (string) --
The unique identifier of the network.

Name (string) --
The name of the network.

Description (string) --
An optional description of the network.

Framework (string) --
The blockchain framework that the network uses.

FrameworkVersion (string) --
The version of the blockchain framework that the network uses.

Status (string) --
The current status of the network.

CreationDate (datetime) --
The date and time that the network was created.







NextToken (string) --
The pagination token that indicates the next set of results to retrieve.







Exceptions

ManagedBlockchain.Client.exceptions.InvalidRequestException
ManagedBlockchain.Client.exceptions.AccessDeniedException
ManagedBlockchain.Client.exceptions.ResourceNotFoundException
ManagedBlockchain.Client.exceptions.ThrottlingException
ManagedBlockchain.Client.exceptions.ResourceLimitExceededException
ManagedBlockchain.Client.exceptions.InternalServiceErrorException


    :return: {
        'Invitations': [
            {
                'InvitationId': 'string',
                'CreationDate': datetime(2015, 1, 1),
                'ExpirationDate': datetime(2015, 1, 1),
                'Status': 'PENDING'|'ACCEPTED'|'ACCEPTING'|'REJECTED'|'EXPIRED',
                'NetworkSummary': {
                    'Id': 'string',
                    'Name': 'string',
                    'Description': 'string',
                    'Framework': 'HYPERLEDGER_FABRIC',
                    'FrameworkVersion': 'string',
                    'Status': 'CREATING'|'AVAILABLE'|'CREATE_FAILED'|'DELETING'|'DELETED',
                    'CreationDate': datetime(2015, 1, 1)
                }
            },
        ],
        'NextToken': 'string'
    }
    
    
    :returns: 
    PENDING - The invitee has not created a member to join the network, and the invitation has not yet expired.
    ACCEPTING - The invitee has begun creating a member, and creation has not yet completed.
    ACCEPTED - The invitee created a member and joined the network using the InvitationID .
    REJECTED - The invitee rejected the invitation.
    EXPIRED - The invitee neither created a member nor rejected the invitation before the ExpirationDate .
    
    """
    pass

def list_members(NetworkId=None, Name=None, Status=None, IsOwned=None, MaxResults=None, NextToken=None):
    """
    Returns a listing of the members in a network and properties of their configurations.
    See also: AWS API Documentation
    
    Exceptions
    
    :example: response = client.list_members(
        NetworkId='string',
        Name='string',
        Status='CREATING'|'AVAILABLE'|'CREATE_FAILED'|'UPDATING'|'DELETING'|'DELETED',
        IsOwned=True|False,
        MaxResults=123,
        NextToken='string'
    )
    
    
    :type NetworkId: string
    :param NetworkId: [REQUIRED]\nThe unique identifier of the network for which to list members.\n

    :type Name: string
    :param Name: The optional name of the member to list.

    :type Status: string
    :param Status: An optional status specifier. If provided, only members currently in this status are listed.

    :type IsOwned: boolean
    :param IsOwned: An optional Boolean value. If provided, the request is limited either to members that the current AWS account owns (true ) or that other AWS accounts own (false ). If omitted, all members are listed.

    :type MaxResults: integer
    :param MaxResults: The maximum number of members to return in the request.

    :type NextToken: string
    :param NextToken: The pagination token that indicates the next set of results to retrieve.

    :rtype: dict

ReturnsResponse Syntax
{
    'Members': [
        {
            'Id': 'string',
            'Name': 'string',
            'Description': 'string',
            'Status': 'CREATING'|'AVAILABLE'|'CREATE_FAILED'|'UPDATING'|'DELETING'|'DELETED',
            'CreationDate': datetime(2015, 1, 1),
            'IsOwned': True|False
        },
    ],
    'NextToken': 'string'
}


Response Structure

(dict) --

Members (list) --
An array of MemberSummary objects. Each object contains details about a network member.

(dict) --
A summary of configuration properties for a member.

Id (string) --
The unique identifier of the member.

Name (string) --
The name of the member.

Description (string) --
An optional description of the member.

Status (string) --
The status of the member.

CREATING - The AWS account is in the process of creating a member.
AVAILABLE - The member has been created and can participate in the network.
CREATE_FAILED - The AWS account attempted to create a member and creation failed.
DELETING - The member and all associated resources are in the process of being deleted. Either the AWS account that owns the member deleted it, or the member is being deleted as the result of an APPROVED PROPOSAL to remove the member.
DELETED - The member can no longer participate on the network and all associated resources are deleted. Either the AWS account that owns the member deleted it, or the member is being deleted as the result of an APPROVED PROPOSAL to remove the member.


CreationDate (datetime) --
The date and time that the member was created.

IsOwned (boolean) --
An indicator of whether the member is owned by your AWS account or a different AWS account.





NextToken (string) --
The pagination token that indicates the next set of results to retrieve.







Exceptions

ManagedBlockchain.Client.exceptions.InvalidRequestException
ManagedBlockchain.Client.exceptions.AccessDeniedException
ManagedBlockchain.Client.exceptions.ThrottlingException
ManagedBlockchain.Client.exceptions.InternalServiceErrorException


    :return: {
        'Members': [
            {
                'Id': 'string',
                'Name': 'string',
                'Description': 'string',
                'Status': 'CREATING'|'AVAILABLE'|'CREATE_FAILED'|'UPDATING'|'DELETING'|'DELETED',
                'CreationDate': datetime(2015, 1, 1),
                'IsOwned': True|False
            },
        ],
        'NextToken': 'string'
    }
    
    
    :returns: 
    CREATING - The AWS account is in the process of creating a member.
    AVAILABLE - The member has been created and can participate in the network.
    CREATE_FAILED - The AWS account attempted to create a member and creation failed.
    DELETING - The member and all associated resources are in the process of being deleted. Either the AWS account that owns the member deleted it, or the member is being deleted as the result of an APPROVED PROPOSAL to remove the member.
    DELETED - The member can no longer participate on the network and all associated resources are deleted. Either the AWS account that owns the member deleted it, or the member is being deleted as the result of an APPROVED PROPOSAL to remove the member.
    
    """
    pass

def list_networks(Name=None, Framework=None, Status=None, MaxResults=None, NextToken=None):
    """
    Returns information about the networks in which the current AWS account has members.
    See also: AWS API Documentation
    
    Exceptions
    
    :example: response = client.list_networks(
        Name='string',
        Framework='HYPERLEDGER_FABRIC',
        Status='CREATING'|'AVAILABLE'|'CREATE_FAILED'|'DELETING'|'DELETED',
        MaxResults=123,
        NextToken='string'
    )
    
    
    :type Name: string
    :param Name: The name of the network.

    :type Framework: string
    :param Framework: An optional framework specifier. If provided, only networks of this framework type are listed.

    :type Status: string
    :param Status: An optional status specifier. If provided, only networks currently in this status are listed.

    :type MaxResults: integer
    :param MaxResults: The maximum number of networks to list.

    :type NextToken: string
    :param NextToken: The pagination token that indicates the next set of results to retrieve.

    :rtype: dict

ReturnsResponse Syntax
{
    'Networks': [
        {
            'Id': 'string',
            'Name': 'string',
            'Description': 'string',
            'Framework': 'HYPERLEDGER_FABRIC',
            'FrameworkVersion': 'string',
            'Status': 'CREATING'|'AVAILABLE'|'CREATE_FAILED'|'DELETING'|'DELETED',
            'CreationDate': datetime(2015, 1, 1)
        },
    ],
    'NextToken': 'string'
}


Response Structure

(dict) --

Networks (list) --
An array of NetworkSummary objects that contain configuration properties for each network.

(dict) --
A summary of network configuration properties.

Id (string) --
The unique identifier of the network.

Name (string) --
The name of the network.

Description (string) --
An optional description of the network.

Framework (string) --
The blockchain framework that the network uses.

FrameworkVersion (string) --
The version of the blockchain framework that the network uses.

Status (string) --
The current status of the network.

CreationDate (datetime) --
The date and time that the network was created.





NextToken (string) --
The pagination token that indicates the next set of results to retrieve.







Exceptions

ManagedBlockchain.Client.exceptions.InvalidRequestException
ManagedBlockchain.Client.exceptions.AccessDeniedException
ManagedBlockchain.Client.exceptions.ThrottlingException
ManagedBlockchain.Client.exceptions.InternalServiceErrorException


    :return: {
        'Networks': [
            {
                'Id': 'string',
                'Name': 'string',
                'Description': 'string',
                'Framework': 'HYPERLEDGER_FABRIC',
                'FrameworkVersion': 'string',
                'Status': 'CREATING'|'AVAILABLE'|'CREATE_FAILED'|'DELETING'|'DELETED',
                'CreationDate': datetime(2015, 1, 1)
            },
        ],
        'NextToken': 'string'
    }
    
    
    :returns: 
    ManagedBlockchain.Client.exceptions.InvalidRequestException
    ManagedBlockchain.Client.exceptions.AccessDeniedException
    ManagedBlockchain.Client.exceptions.ThrottlingException
    ManagedBlockchain.Client.exceptions.InternalServiceErrorException
    
    """
    pass

def list_nodes(NetworkId=None, MemberId=None, Status=None, MaxResults=None, NextToken=None):
    """
    Returns information about the nodes within a network.
    See also: AWS API Documentation
    
    Exceptions
    
    :example: response = client.list_nodes(
        NetworkId='string',
        MemberId='string',
        Status='CREATING'|'AVAILABLE'|'CREATE_FAILED'|'UPDATING'|'DELETING'|'DELETED'|'FAILED',
        MaxResults=123,
        NextToken='string'
    )
    
    
    :type NetworkId: string
    :param NetworkId: [REQUIRED]\nThe unique identifier of the network for which to list nodes.\n

    :type MemberId: string
    :param MemberId: [REQUIRED]\nThe unique identifier of the member who owns the nodes to list.\n

    :type Status: string
    :param Status: An optional status specifier. If provided, only nodes currently in this status are listed.

    :type MaxResults: integer
    :param MaxResults: The maximum number of nodes to list.

    :type NextToken: string
    :param NextToken: The pagination token that indicates the next set of results to retrieve.

    :rtype: dict

ReturnsResponse Syntax
{
    'Nodes': [
        {
            'Id': 'string',
            'Status': 'CREATING'|'AVAILABLE'|'CREATE_FAILED'|'UPDATING'|'DELETING'|'DELETED'|'FAILED',
            'CreationDate': datetime(2015, 1, 1),
            'AvailabilityZone': 'string',
            'InstanceType': 'string'
        },
    ],
    'NextToken': 'string'
}


Response Structure

(dict) --

Nodes (list) --
An array of NodeSummary objects that contain configuration properties for each node.

(dict) --
A summary of configuration properties for a peer node.

Id (string) --
The unique identifier of the node.

Status (string) --
The status of the node.

CreationDate (datetime) --
The date and time that the node was created.

AvailabilityZone (string) --
The Availability Zone in which the node exists.

InstanceType (string) --
The EC2 instance type for the node.





NextToken (string) --
The pagination token that indicates the next set of results to retrieve.







Exceptions

ManagedBlockchain.Client.exceptions.InvalidRequestException
ManagedBlockchain.Client.exceptions.AccessDeniedException
ManagedBlockchain.Client.exceptions.ThrottlingException
ManagedBlockchain.Client.exceptions.InternalServiceErrorException


    :return: {
        'Nodes': [
            {
                'Id': 'string',
                'Status': 'CREATING'|'AVAILABLE'|'CREATE_FAILED'|'UPDATING'|'DELETING'|'DELETED'|'FAILED',
                'CreationDate': datetime(2015, 1, 1),
                'AvailabilityZone': 'string',
                'InstanceType': 'string'
            },
        ],
        'NextToken': 'string'
    }
    
    
    :returns: 
    ManagedBlockchain.Client.exceptions.InvalidRequestException
    ManagedBlockchain.Client.exceptions.AccessDeniedException
    ManagedBlockchain.Client.exceptions.ThrottlingException
    ManagedBlockchain.Client.exceptions.InternalServiceErrorException
    
    """
    pass

def list_proposal_votes(NetworkId=None, ProposalId=None, MaxResults=None, NextToken=None):
    """
    Returns the listing of votes for a specified proposal, including the value of each vote and the unique identifier of the member that cast the vote.
    See also: AWS API Documentation
    
    Exceptions
    
    :example: response = client.list_proposal_votes(
        NetworkId='string',
        ProposalId='string',
        MaxResults=123,
        NextToken='string'
    )
    
    
    :type NetworkId: string
    :param NetworkId: [REQUIRED]\nThe unique identifier of the network.\n

    :type ProposalId: string
    :param ProposalId: [REQUIRED]\nThe unique identifier of the proposal.\n

    :type MaxResults: integer
    :param MaxResults: The maximum number of votes to return.

    :type NextToken: string
    :param NextToken: The pagination token that indicates the next set of results to retrieve.

    :rtype: dict

ReturnsResponse Syntax
{
    'ProposalVotes': [
        {
            'Vote': 'YES'|'NO',
            'MemberName': 'string',
            'MemberId': 'string'
        },
    ],
    'NextToken': 'string'
}


Response Structure

(dict) --

ProposalVotes (list) --
The listing of votes.

(dict) --
Properties of an individual vote that a member cast for a proposal.

Vote (string) --
The vote value, either YES or NO .

MemberName (string) --
The name of the member that cast the vote.

MemberId (string) --
The unique identifier of the member that cast the vote.





NextToken (string) --
The pagination token that indicates the next set of results to retrieve.







Exceptions

ManagedBlockchain.Client.exceptions.InvalidRequestException
ManagedBlockchain.Client.exceptions.AccessDeniedException
ManagedBlockchain.Client.exceptions.ThrottlingException
ManagedBlockchain.Client.exceptions.InternalServiceErrorException


    :return: {
        'ProposalVotes': [
            {
                'Vote': 'YES'|'NO',
                'MemberName': 'string',
                'MemberId': 'string'
            },
        ],
        'NextToken': 'string'
    }
    
    
    :returns: 
    ManagedBlockchain.Client.exceptions.InvalidRequestException
    ManagedBlockchain.Client.exceptions.AccessDeniedException
    ManagedBlockchain.Client.exceptions.ThrottlingException
    ManagedBlockchain.Client.exceptions.InternalServiceErrorException
    
    """
    pass

def list_proposals(NetworkId=None, MaxResults=None, NextToken=None):
    """
    Returns a listing of proposals for the network.
    See also: AWS API Documentation
    
    Exceptions
    
    :example: response = client.list_proposals(
        NetworkId='string',
        MaxResults=123,
        NextToken='string'
    )
    
    
    :type NetworkId: string
    :param NetworkId: [REQUIRED]\nThe unique identifier of the network.\n

    :type MaxResults: integer
    :param MaxResults: The maximum number of proposals to return.

    :type NextToken: string
    :param NextToken: The pagination token that indicates the next set of results to retrieve.

    :rtype: dict

ReturnsResponse Syntax
{
    'Proposals': [
        {
            'ProposalId': 'string',
            'Description': 'string',
            'ProposedByMemberId': 'string',
            'ProposedByMemberName': 'string',
            'Status': 'IN_PROGRESS'|'APPROVED'|'REJECTED'|'EXPIRED'|'ACTION_FAILED',
            'CreationDate': datetime(2015, 1, 1),
            'ExpirationDate': datetime(2015, 1, 1)
        },
    ],
    'NextToken': 'string'
}


Response Structure

(dict) --

Proposals (list) --
The summary of each proposal made on the network.

(dict) --
Properties of a proposal.

ProposalId (string) --
The unique identifier of the proposal.

Description (string) --
The description of the proposal.

ProposedByMemberId (string) --
The unique identifier of the member that created the proposal.

ProposedByMemberName (string) --
The name of the member that created the proposal.

Status (string) --
The status of the proposal. Values are as follows:

IN_PROGRESS - The proposal is active and open for member voting.
APPROVED - The proposal was approved with sufficient YES votes among members according to the VotingPolicy specified for the Network . The specified proposal actions are carried out.
REJECTED - The proposal was rejected with insufficient YES votes among members according to the VotingPolicy specified for the Network . The specified ProposalActions are not carried out.
EXPIRED - Members did not cast the number of votes required to determine the proposal outcome before the proposal expired. The specified ProposalActions are not carried out.
ACTION_FAILED - One or more of the specified ProposalActions in a proposal that was approved could not be completed because of an error.


CreationDate (datetime) --
The date and time that the proposal was created.

ExpirationDate (datetime) --
The date and time that the proposal expires. This is the CreationDate plus the ProposalDurationInHours that is specified in the ProposalThresholdPolicy . After this date and time, if members have not cast enough votes to determine the outcome according to the voting policy, the proposal is EXPIRED and Actions are not carried out.





NextToken (string) --
The pagination token that indicates the next set of results to retrieve.







Exceptions

ManagedBlockchain.Client.exceptions.InvalidRequestException
ManagedBlockchain.Client.exceptions.ResourceNotFoundException
ManagedBlockchain.Client.exceptions.AccessDeniedException
ManagedBlockchain.Client.exceptions.ThrottlingException
ManagedBlockchain.Client.exceptions.InternalServiceErrorException


    :return: {
        'Proposals': [
            {
                'ProposalId': 'string',
                'Description': 'string',
                'ProposedByMemberId': 'string',
                'ProposedByMemberName': 'string',
                'Status': 'IN_PROGRESS'|'APPROVED'|'REJECTED'|'EXPIRED'|'ACTION_FAILED',
                'CreationDate': datetime(2015, 1, 1),
                'ExpirationDate': datetime(2015, 1, 1)
            },
        ],
        'NextToken': 'string'
    }
    
    
    :returns: 
    IN_PROGRESS - The proposal is active and open for member voting.
    APPROVED - The proposal was approved with sufficient YES votes among members according to the VotingPolicy specified for the Network . The specified proposal actions are carried out.
    REJECTED - The proposal was rejected with insufficient YES votes among members according to the VotingPolicy specified for the Network . The specified ProposalActions are not carried out.
    EXPIRED - Members did not cast the number of votes required to determine the proposal outcome before the proposal expired. The specified ProposalActions are not carried out.
    ACTION_FAILED - One or more of the specified ProposalActions in a proposal that was approved could not be completed because of an error.
    
    """
    pass

def reject_invitation(InvitationId=None):
    """
    Rejects an invitation to join a network. This action can be called by a principal in an AWS account that has received an invitation to create a member and join a network.
    See also: AWS API Documentation
    
    Exceptions
    
    :example: response = client.reject_invitation(
        InvitationId='string'
    )
    
    
    :type InvitationId: string
    :param InvitationId: [REQUIRED]\nThe unique identifier of the invitation to reject.\n

    :rtype: dict
ReturnsResponse Syntax{}


Response Structure

(dict) --



Exceptions

ManagedBlockchain.Client.exceptions.InvalidRequestException
ManagedBlockchain.Client.exceptions.IllegalActionException
ManagedBlockchain.Client.exceptions.AccessDeniedException
ManagedBlockchain.Client.exceptions.ResourceNotFoundException
ManagedBlockchain.Client.exceptions.ThrottlingException
ManagedBlockchain.Client.exceptions.InternalServiceErrorException


    :return: {}
    
    
    :returns: 
    ManagedBlockchain.Client.exceptions.InvalidRequestException
    ManagedBlockchain.Client.exceptions.IllegalActionException
    ManagedBlockchain.Client.exceptions.AccessDeniedException
    ManagedBlockchain.Client.exceptions.ResourceNotFoundException
    ManagedBlockchain.Client.exceptions.ThrottlingException
    ManagedBlockchain.Client.exceptions.InternalServiceErrorException
    
    """
    pass

def update_member(NetworkId=None, MemberId=None, LogPublishingConfiguration=None):
    """
    Updates a member configuration with new parameters.
    See also: AWS API Documentation
    
    Exceptions
    
    :example: response = client.update_member(
        NetworkId='string',
        MemberId='string',
        LogPublishingConfiguration={
            'Fabric': {
                'CaLogs': {
                    'Cloudwatch': {
                        'Enabled': True|False
                    }
                }
            }
        }
    )
    
    
    :type NetworkId: string
    :param NetworkId: [REQUIRED]\nThe unique ID of the Managed Blockchain network to which the member belongs.\n

    :type MemberId: string
    :param MemberId: [REQUIRED]\nThe unique ID of the member.\n

    :type LogPublishingConfiguration: dict
    :param LogPublishingConfiguration: Configuration properties for publishing to Amazon CloudWatch Logs.\n\nFabric (dict) --Configuration properties for logging events associated with a member of a Managed Blockchain network using the Hyperledger Fabric framework.\n\nCaLogs (dict) --Configuration properties for logging events associated with a member\'s Certificate Authority (CA). CA logs help you determine when a member in your account joins the network, or when new peers register with a member CA.\n\nCloudwatch (dict) --Parameters for publishing logs to Amazon CloudWatch Logs.\n\nEnabled (boolean) --Indicates whether logging is enabled.\n\n\n\n\n\n\n\n\n

    :rtype: dict

ReturnsResponse Syntax
{}


Response Structure

(dict) --




Exceptions

ManagedBlockchain.Client.exceptions.InvalidRequestException
ManagedBlockchain.Client.exceptions.AccessDeniedException
ManagedBlockchain.Client.exceptions.ResourceNotFoundException
ManagedBlockchain.Client.exceptions.ThrottlingException
ManagedBlockchain.Client.exceptions.InternalServiceErrorException


    :return: {}
    
    
    :returns: 
    (dict) --
    
    """
    pass

def update_node(NetworkId=None, MemberId=None, NodeId=None, LogPublishingConfiguration=None):
    """
    Updates a node configuration with new parameters.
    See also: AWS API Documentation
    
    Exceptions
    
    :example: response = client.update_node(
        NetworkId='string',
        MemberId='string',
        NodeId='string',
        LogPublishingConfiguration={
            'Fabric': {
                'ChaincodeLogs': {
                    'Cloudwatch': {
                        'Enabled': True|False
                    }
                },
                'PeerLogs': {
                    'Cloudwatch': {
                        'Enabled': True|False
                    }
                }
            }
        }
    )
    
    
    :type NetworkId: string
    :param NetworkId: [REQUIRED]\nThe unique ID of the Managed Blockchain network to which the node belongs.\n

    :type MemberId: string
    :param MemberId: [REQUIRED]\nThe unique ID of the member that owns the node.\n

    :type NodeId: string
    :param NodeId: [REQUIRED]\nThe unique ID of the node.\n

    :type LogPublishingConfiguration: dict
    :param LogPublishingConfiguration: Configuration properties for publishing to Amazon CloudWatch Logs.\n\nFabric (dict) --Configuration properties for logging events associated with a node that is owned by a member of a Managed Blockchain network using the Hyperledger Fabric framework.\n\nChaincodeLogs (dict) --Configuration properties for logging events associated with chaincode execution on a peer node. Chaincode logs contain the results of instantiating, invoking, and querying the chaincode. A peer can run multiple instances of chaincode. When enabled, a log stream is created for all chaincodes, with an individual log stream for each chaincode.\n\nCloudwatch (dict) --Parameters for publishing logs to Amazon CloudWatch Logs.\n\nEnabled (boolean) --Indicates whether logging is enabled.\n\n\n\n\n\nPeerLogs (dict) --Configuration properties for a peer node log. Peer node logs contain messages generated when your client submits transaction proposals to peer nodes, requests to join channels, enrolls an admin peer, and lists the chaincode instances on a peer node.\n\nCloudwatch (dict) --Parameters for publishing logs to Amazon CloudWatch Logs.\n\nEnabled (boolean) --Indicates whether logging is enabled.\n\n\n\n\n\n\n\n\n

    :rtype: dict

ReturnsResponse Syntax
{}


Response Structure

(dict) --




Exceptions

ManagedBlockchain.Client.exceptions.InvalidRequestException
ManagedBlockchain.Client.exceptions.AccessDeniedException
ManagedBlockchain.Client.exceptions.ResourceNotFoundException
ManagedBlockchain.Client.exceptions.ThrottlingException
ManagedBlockchain.Client.exceptions.InternalServiceErrorException


    :return: {}
    
    
    :returns: 
    (dict) --
    
    """
    pass

def vote_on_proposal(NetworkId=None, ProposalId=None, VoterMemberId=None, Vote=None):
    """
    Casts a vote for a specified ProposalId on behalf of a member. The member to vote as, specified by VoterMemberId , must be in the same AWS account as the principal that calls the action.
    See also: AWS API Documentation
    
    Exceptions
    
    :example: response = client.vote_on_proposal(
        NetworkId='string',
        ProposalId='string',
        VoterMemberId='string',
        Vote='YES'|'NO'
    )
    
    
    :type NetworkId: string
    :param NetworkId: [REQUIRED]\nThe unique identifier of the network.\n

    :type ProposalId: string
    :param ProposalId: [REQUIRED]\nThe unique identifier of the proposal.\n

    :type VoterMemberId: string
    :param VoterMemberId: [REQUIRED]\nThe unique identifier of the member casting the vote.\n

    :type Vote: string
    :param Vote: [REQUIRED]\nThe value of the vote.\n

    :rtype: dict

ReturnsResponse Syntax
{}


Response Structure

(dict) --




Exceptions

ManagedBlockchain.Client.exceptions.InvalidRequestException
ManagedBlockchain.Client.exceptions.IllegalActionException
ManagedBlockchain.Client.exceptions.AccessDeniedException
ManagedBlockchain.Client.exceptions.ResourceNotFoundException
ManagedBlockchain.Client.exceptions.ThrottlingException
ManagedBlockchain.Client.exceptions.InternalServiceErrorException


    :return: {}
    
    
    :returns: 
    (dict) --
    
    """
    pass

