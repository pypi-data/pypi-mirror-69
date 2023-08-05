# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from typing import Union
from . import utilities, tables

class GetCollaboratorsResult:
    """
    A collection of values returned by getCollaborators.
    """
    def __init__(__self__, affiliation=None, collaborators=None, id=None, owner=None, repository=None):
        if affiliation and not isinstance(affiliation, str):
            raise TypeError("Expected argument 'affiliation' to be a str")
        __self__.affiliation = affiliation
        if collaborators and not isinstance(collaborators, list):
            raise TypeError("Expected argument 'collaborators' to be a list")
        __self__.collaborators = collaborators
        """
        An Array of GitHub collaborators.  Each `collaborator` block consists of the fields documented below.
        """
        if id and not isinstance(id, str):
            raise TypeError("Expected argument 'id' to be a str")
        __self__.id = id
        """
        The provider-assigned unique ID for this managed resource.
        """
        if owner and not isinstance(owner, str):
            raise TypeError("Expected argument 'owner' to be a str")
        __self__.owner = owner
        if repository and not isinstance(repository, str):
            raise TypeError("Expected argument 'repository' to be a str")
        __self__.repository = repository
class AwaitableGetCollaboratorsResult(GetCollaboratorsResult):
    # pylint: disable=using-constant-test
    def __await__(self):
        if False:
            yield self
        return GetCollaboratorsResult(
            affiliation=self.affiliation,
            collaborators=self.collaborators,
            id=self.id,
            owner=self.owner,
            repository=self.repository)

def get_collaborators(affiliation=None,owner=None,repository=None,opts=None):
    """
    Use this data source to retrieve the collaborators for a given repository.

    ## Example Usage



    ```python
    import pulumi
    import pulumi_github as github

    test = github.get_collaborators(owner="example_owner",
        repository="example_repository")
    ```



    :param str affiliation: Filter collaborators returned by their affiliation. Can be one of: `outside`, `direct`, `all`.  Defaults to `all`.
    :param str owner: The organization that owns the repository.
    :param str repository: The name of the repository.
    """
    __args__ = dict()


    __args__['affiliation'] = affiliation
    __args__['owner'] = owner
    __args__['repository'] = repository
    if opts is None:
        opts = pulumi.InvokeOptions()
    if opts.version is None:
        opts.version = utilities.get_version()
    __ret__ = pulumi.runtime.invoke('github:index/getCollaborators:getCollaborators', __args__, opts=opts).value

    return AwaitableGetCollaboratorsResult(
        affiliation=__ret__.get('affiliation'),
        collaborators=__ret__.get('collaborators'),
        id=__ret__.get('id'),
        owner=__ret__.get('owner'),
        repository=__ret__.get('repository'))
