# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from typing import Union
from . import utilities, tables

class GetProjectResult:
    """
    A collection of values returned by getProject.
    """
    def __init__(__self__, created_at=None, description=None, environment=None, id=None, is_default=None, name=None, owner_id=None, owner_uuid=None, purpose=None, resources=None, updated_at=None):
        if created_at and not isinstance(created_at, str):
            raise TypeError("Expected argument 'created_at' to be a str")
        __self__.created_at = created_at
        """
        The date and time when the project was created, (ISO8601)
        """
        if description and not isinstance(description, str):
            raise TypeError("Expected argument 'description' to be a str")
        __self__.description = description
        """
        The description of the project
        """
        if environment and not isinstance(environment, str):
            raise TypeError("Expected argument 'environment' to be a str")
        __self__.environment = environment
        """
        The environment of the project's resources. The possible values are: `Development`, `Staging`, `Production`.
        """
        if id and not isinstance(id, str):
            raise TypeError("Expected argument 'id' to be a str")
        __self__.id = id
        if is_default and not isinstance(is_default, bool):
            raise TypeError("Expected argument 'is_default' to be a bool")
        __self__.is_default = is_default
        if name and not isinstance(name, str):
            raise TypeError("Expected argument 'name' to be a str")
        __self__.name = name
        if owner_id and not isinstance(owner_id, float):
            raise TypeError("Expected argument 'owner_id' to be a float")
        __self__.owner_id = owner_id
        """
        The ID of the project owner.
        """
        if owner_uuid and not isinstance(owner_uuid, str):
            raise TypeError("Expected argument 'owner_uuid' to be a str")
        __self__.owner_uuid = owner_uuid
        """
        The unique universal identifier of the project owner.
        """
        if purpose and not isinstance(purpose, str):
            raise TypeError("Expected argument 'purpose' to be a str")
        __self__.purpose = purpose
        """
        The purpose of the project, (Default: "Web Application")
        """
        if resources and not isinstance(resources, list):
            raise TypeError("Expected argument 'resources' to be a list")
        __self__.resources = resources
        """
        A set of uniform resource names (URNs) for the resources associated with the project
        """
        if updated_at and not isinstance(updated_at, str):
            raise TypeError("Expected argument 'updated_at' to be a str")
        __self__.updated_at = updated_at
        """
        The date and time when the project was last updated, (ISO8601)
        """
class AwaitableGetProjectResult(GetProjectResult):
    # pylint: disable=using-constant-test
    def __await__(self):
        if False:
            yield self
        return GetProjectResult(
            created_at=self.created_at,
            description=self.description,
            environment=self.environment,
            id=self.id,
            is_default=self.is_default,
            name=self.name,
            owner_id=self.owner_id,
            owner_uuid=self.owner_uuid,
            purpose=self.purpose,
            resources=self.resources,
            updated_at=self.updated_at)

def get_project(id=None,name=None,opts=None):
    """
    Get information on a single DigitalOcean project. If neither the `id` nor `name` attributes are provided,
    then this data source returns the default project.

    ## Example Usage



    ```python
    import pulumi
    import pulumi_digitalocean as digitalocean

    default = digitalocean.get_project()
    staging = digitalocean.get_project(name="My Staging Project")
    ```



    :param str id: the ID of the project to retrieve
    :param str name: the name of the project to retrieve. The data source will raise an error if more than
           one project has the provided name or if no project has that name.
    """
    __args__ = dict()


    __args__['id'] = id
    __args__['name'] = name
    if opts is None:
        opts = pulumi.InvokeOptions()
    if opts.version is None:
        opts.version = utilities.get_version()
    __ret__ = pulumi.runtime.invoke('digitalocean:index/getProject:getProject', __args__, opts=opts).value

    return AwaitableGetProjectResult(
        created_at=__ret__.get('createdAt'),
        description=__ret__.get('description'),
        environment=__ret__.get('environment'),
        id=__ret__.get('id'),
        is_default=__ret__.get('isDefault'),
        name=__ret__.get('name'),
        owner_id=__ret__.get('ownerId'),
        owner_uuid=__ret__.get('ownerUuid'),
        purpose=__ret__.get('purpose'),
        resources=__ret__.get('resources'),
        updated_at=__ret__.get('updatedAt'))
