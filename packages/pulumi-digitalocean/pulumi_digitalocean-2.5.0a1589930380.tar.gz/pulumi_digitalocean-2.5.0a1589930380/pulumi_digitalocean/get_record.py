# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from typing import Union
from . import utilities, tables

class GetRecordResult:
    """
    A collection of values returned by getRecord.
    """
    def __init__(__self__, data=None, domain=None, flags=None, id=None, name=None, port=None, priority=None, tag=None, ttl=None, type=None, weight=None):
        if data and not isinstance(data, str):
            raise TypeError("Expected argument 'data' to be a str")
        __self__.data = data
        if domain and not isinstance(domain, str):
            raise TypeError("Expected argument 'domain' to be a str")
        __self__.domain = domain
        if flags and not isinstance(flags, float):
            raise TypeError("Expected argument 'flags' to be a float")
        __self__.flags = flags
        if id and not isinstance(id, str):
            raise TypeError("Expected argument 'id' to be a str")
        __self__.id = id
        """
        The provider-assigned unique ID for this managed resource.
        """
        if name and not isinstance(name, str):
            raise TypeError("Expected argument 'name' to be a str")
        __self__.name = name
        if port and not isinstance(port, float):
            raise TypeError("Expected argument 'port' to be a float")
        __self__.port = port
        if priority and not isinstance(priority, float):
            raise TypeError("Expected argument 'priority' to be a float")
        __self__.priority = priority
        if tag and not isinstance(tag, str):
            raise TypeError("Expected argument 'tag' to be a str")
        __self__.tag = tag
        if ttl and not isinstance(ttl, float):
            raise TypeError("Expected argument 'ttl' to be a float")
        __self__.ttl = ttl
        if type and not isinstance(type, str):
            raise TypeError("Expected argument 'type' to be a str")
        __self__.type = type
        if weight and not isinstance(weight, float):
            raise TypeError("Expected argument 'weight' to be a float")
        __self__.weight = weight
class AwaitableGetRecordResult(GetRecordResult):
    # pylint: disable=using-constant-test
    def __await__(self):
        if False:
            yield self
        return GetRecordResult(
            data=self.data,
            domain=self.domain,
            flags=self.flags,
            id=self.id,
            name=self.name,
            port=self.port,
            priority=self.priority,
            tag=self.tag,
            ttl=self.ttl,
            type=self.type,
            weight=self.weight)

def get_record(domain=None,name=None,opts=None):
    """
    Use this data source to access information about an existing resource.

    :param str domain: The domain name of the record.
    :param str name: The name of the record.
    """
    __args__ = dict()


    __args__['domain'] = domain
    __args__['name'] = name
    if opts is None:
        opts = pulumi.InvokeOptions()
    if opts.version is None:
        opts.version = utilities.get_version()
    __ret__ = pulumi.runtime.invoke('digitalocean:index/getRecord:getRecord', __args__, opts=opts).value

    return AwaitableGetRecordResult(
        data=__ret__.get('data'),
        domain=__ret__.get('domain'),
        flags=__ret__.get('flags'),
        id=__ret__.get('id'),
        name=__ret__.get('name'),
        port=__ret__.get('port'),
        priority=__ret__.get('priority'),
        tag=__ret__.get('tag'),
        ttl=__ret__.get('ttl'),
        type=__ret__.get('type'),
        weight=__ret__.get('weight'))
