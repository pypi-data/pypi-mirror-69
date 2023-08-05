# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from typing import Union
from .. import utilities, tables

class GetFlowlogsResult:
    """
    A collection of values returned by getFlowlogs.
    """
    def __init__(__self__, cen_id=None, description=None, flowlogs=None, id=None, ids=None, log_store_name=None, name_regex=None, names=None, output_file=None, project_name=None, status=None):
        if cen_id and not isinstance(cen_id, str):
            raise TypeError("Expected argument 'cen_id' to be a str")
        __self__.cen_id = cen_id
        """
        The ID of the CEN Instance.
        """
        if description and not isinstance(description, str):
            raise TypeError("Expected argument 'description' to be a str")
        __self__.description = description
        """
        The description of flowlog.
        """
        if flowlogs and not isinstance(flowlogs, list):
            raise TypeError("Expected argument 'flowlogs' to be a list")
        __self__.flowlogs = flowlogs
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
        A list of CEN flow log IDs.
        """
        if log_store_name and not isinstance(log_store_name, str):
            raise TypeError("Expected argument 'log_store_name' to be a str")
        __self__.log_store_name = log_store_name
        """
        The name of the log store which is in the  `project_name` SLS project.
        """
        if name_regex and not isinstance(name_regex, str):
            raise TypeError("Expected argument 'name_regex' to be a str")
        __self__.name_regex = name_regex
        if names and not isinstance(names, list):
            raise TypeError("Expected argument 'names' to be a list")
        __self__.names = names
        """
        A list of CEN flow log names. 
        """
        if output_file and not isinstance(output_file, str):
            raise TypeError("Expected argument 'output_file' to be a str")
        __self__.output_file = output_file
        if project_name and not isinstance(project_name, str):
            raise TypeError("Expected argument 'project_name' to be a str")
        __self__.project_name = project_name
        """
        The name of the SLS project.
        """
        if status and not isinstance(status, str):
            raise TypeError("Expected argument 'status' to be a str")
        __self__.status = status
        """
        The status of flowlog.
        """
class AwaitableGetFlowlogsResult(GetFlowlogsResult):
    # pylint: disable=using-constant-test
    def __await__(self):
        if False:
            yield self
        return GetFlowlogsResult(
            cen_id=self.cen_id,
            description=self.description,
            flowlogs=self.flowlogs,
            id=self.id,
            ids=self.ids,
            log_store_name=self.log_store_name,
            name_regex=self.name_regex,
            names=self.names,
            output_file=self.output_file,
            project_name=self.project_name,
            status=self.status)

def get_flowlogs(cen_id=None,description=None,ids=None,log_store_name=None,name_regex=None,output_file=None,project_name=None,status=None,opts=None):
    """
    This data source provides CEN flow logs available to the user.

    > **NOTE:** Available in 1.78.0+

    ## Example Usage



    ```python
    import pulumi
    import pulumi_alicloud as alicloud

    default = alicloud.cen.get_flowlogs(ids=["flowlog-tig1xxxxx"],
        name_regex="^foo")
    pulumi.export("firstCenFlowlogId", data["cen.getInstances"]["default"]["flowlogs"][0]["id"])
    ```



    :param str cen_id: The ID of the CEN Instance.
    :param str description: The description of flowlog.
    :param list ids: A list of CEN flow log IDs.
    :param str log_store_name: The name of the log store which is in the  `project_name` SLS project.
    :param str name_regex: A regex string to filter CEN flow logs by name.
    :param str project_name: The name of the SLS project.
    :param str status: The status of flowlog. Valid values: ["Active", "Inactive"]. Default to "Active".
    """
    __args__ = dict()


    __args__['cenId'] = cen_id
    __args__['description'] = description
    __args__['ids'] = ids
    __args__['logStoreName'] = log_store_name
    __args__['nameRegex'] = name_regex
    __args__['outputFile'] = output_file
    __args__['projectName'] = project_name
    __args__['status'] = status
    if opts is None:
        opts = pulumi.InvokeOptions()
    if opts.version is None:
        opts.version = utilities.get_version()
    __ret__ = pulumi.runtime.invoke('alicloud:cen/getFlowlogs:getFlowlogs', __args__, opts=opts).value

    return AwaitableGetFlowlogsResult(
        cen_id=__ret__.get('cenId'),
        description=__ret__.get('description'),
        flowlogs=__ret__.get('flowlogs'),
        id=__ret__.get('id'),
        ids=__ret__.get('ids'),
        log_store_name=__ret__.get('logStoreName'),
        name_regex=__ret__.get('nameRegex'),
        names=__ret__.get('names'),
        output_file=__ret__.get('outputFile'),
        project_name=__ret__.get('projectName'),
        status=__ret__.get('status'))
