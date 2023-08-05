# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from typing import Union
from .. import utilities, tables

class GetAccessRulesResult:
    """
    A collection of values returned by getAccessRules.
    """
    def __init__(__self__, access_group_name=None, id=None, ids=None, output_file=None, rules=None, rw_access=None, source_cidr_ip=None, user_access=None):
        if access_group_name and not isinstance(access_group_name, str):
            raise TypeError("Expected argument 'access_group_name' to be a str")
        __self__.access_group_name = access_group_name
        if id and not isinstance(id, str):
            raise TypeError("Expected argument 'id' to be a str")
        __self__.id = id
        """
        The provider-assigned unique ID for this managed resource.
        """
        if ids and not isinstance(ids, list):
            raise TypeError("Expected argument 'ids' to be a list")
        __self__.ids = ids
        """
        A list of rule IDs, Each element set to `access_rule_id` (Each element formats as `<access_group_name>:<access rule id>` before 1.53.0).
        """
        if output_file and not isinstance(output_file, str):
            raise TypeError("Expected argument 'output_file' to be a str")
        __self__.output_file = output_file
        if rules and not isinstance(rules, list):
            raise TypeError("Expected argument 'rules' to be a list")
        __self__.rules = rules
        """
        A list of AccessRules. Each element contains the following attributes:
        """
        if rw_access and not isinstance(rw_access, str):
            raise TypeError("Expected argument 'rw_access' to be a str")
        __self__.rw_access = rw_access
        """
        RWAccess of the AccessRule.
        """
        if source_cidr_ip and not isinstance(source_cidr_ip, str):
            raise TypeError("Expected argument 'source_cidr_ip' to be a str")
        __self__.source_cidr_ip = source_cidr_ip
        """
        SourceCidrIp of the AccessRule.
        """
        if user_access and not isinstance(user_access, str):
            raise TypeError("Expected argument 'user_access' to be a str")
        __self__.user_access = user_access
        """
        UserAccess of the AccessRule
        """
class AwaitableGetAccessRulesResult(GetAccessRulesResult):
    # pylint: disable=using-constant-test
    def __await__(self):
        if False:
            yield self
        return GetAccessRulesResult(
            access_group_name=self.access_group_name,
            id=self.id,
            ids=self.ids,
            output_file=self.output_file,
            rules=self.rules,
            rw_access=self.rw_access,
            source_cidr_ip=self.source_cidr_ip,
            user_access=self.user_access)

def get_access_rules(access_group_name=None,ids=None,output_file=None,rw_access=None,source_cidr_ip=None,user_access=None,opts=None):
    """
    This data source provides AccessRule available to the user.

    > NOTE: Available in 1.35.0+




    :param str access_group_name: Filter results by a specific AccessGroupName.
    :param list ids: A list of rule IDs.
    :param str rw_access: Filter results by a specific RWAccess. 
    :param str source_cidr_ip: Filter results by a specific SourceCidrIp. 
    :param str user_access: Filter results by a specific UserAccess. 
    """
    __args__ = dict()


    __args__['accessGroupName'] = access_group_name
    __args__['ids'] = ids
    __args__['outputFile'] = output_file
    __args__['rwAccess'] = rw_access
    __args__['sourceCidrIp'] = source_cidr_ip
    __args__['userAccess'] = user_access
    if opts is None:
        opts = pulumi.InvokeOptions()
    if opts.version is None:
        opts.version = utilities.get_version()
    __ret__ = pulumi.runtime.invoke('alicloud:nas/getAccessRules:getAccessRules', __args__, opts=opts).value

    return AwaitableGetAccessRulesResult(
        access_group_name=__ret__.get('accessGroupName'),
        id=__ret__.get('id'),
        ids=__ret__.get('ids'),
        output_file=__ret__.get('outputFile'),
        rules=__ret__.get('rules'),
        rw_access=__ret__.get('rwAccess'),
        source_cidr_ip=__ret__.get('sourceCidrIp'),
        user_access=__ret__.get('userAccess'))
