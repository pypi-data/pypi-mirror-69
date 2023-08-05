# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from typing import Union
from . import utilities, tables

class UserInvitationAccepter(pulumi.CustomResource):
    invitation_id: pulumi.Output[str]
    """
    ID of the invitation to accept
    """
    def __init__(__self__, resource_name, opts=None, invitation_id=None, __props__=None, __name__=None, __opts__=None):
        """
        Provides a resource to manage GitHub repository collaborator invitations.

        ## Example Usage



        ```python
        import pulumi
        import pulumi_github as github
        import pulumi_pulumi as pulumi

        example_repository = github.Repository("exampleRepository")
        example_repository_collaborator = github.RepositoryCollaborator("exampleRepositoryCollaborator",
            permission="push",
            repository=example_repository.name,
            username="example-username")
        invitee = pulumi.providers.Github("invitee", token=var["invitee_token"])
        example_user_invitation_accepter = github.UserInvitationAccepter("exampleUserInvitationAccepter", invitation_id=example_repository_collaborator.invitation_id)
        ```


        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] invitation_id: ID of the invitation to accept
        """
        if __name__ is not None:
            warnings.warn("explicit use of __name__ is deprecated", DeprecationWarning)
            resource_name = __name__
        if __opts__ is not None:
            warnings.warn("explicit use of __opts__ is deprecated, use 'opts' instead", DeprecationWarning)
            opts = __opts__
        if opts is None:
            opts = pulumi.ResourceOptions()
        if not isinstance(opts, pulumi.ResourceOptions):
            raise TypeError('Expected resource options to be a ResourceOptions instance')
        if opts.version is None:
            opts.version = utilities.get_version()
        if opts.id is None:
            if __props__ is not None:
                raise TypeError('__props__ is only valid when passed in combination with a valid opts.id to get an existing resource')
            __props__ = dict()

            if invitation_id is None:
                raise TypeError("Missing required property 'invitation_id'")
            __props__['invitation_id'] = invitation_id
        super(UserInvitationAccepter, __self__).__init__(
            'github:index/userInvitationAccepter:UserInvitationAccepter',
            resource_name,
            __props__,
            opts)

    @staticmethod
    def get(resource_name, id, opts=None, invitation_id=None):
        """
        Get an existing UserInvitationAccepter resource's state with the given name, id, and optional extra
        properties used to qualify the lookup.

        :param str resource_name: The unique name of the resulting resource.
        :param str id: The unique provider ID of the resource to lookup.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] invitation_id: ID of the invitation to accept
        """
        opts = pulumi.ResourceOptions.merge(opts, pulumi.ResourceOptions(id=id))

        __props__ = dict()

        __props__["invitation_id"] = invitation_id
        return UserInvitationAccepter(resource_name, opts=opts, __props__=__props__)
    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

