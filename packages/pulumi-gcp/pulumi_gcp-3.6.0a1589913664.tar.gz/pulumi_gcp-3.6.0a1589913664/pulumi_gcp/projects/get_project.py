# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from typing import Union
from .. import utilities, tables

class GetProjectResult:
    """
    A collection of values returned by getProject.
    """
    def __init__(__self__, filter=None, id=None, projects=None):
        if filter and not isinstance(filter, str):
            raise TypeError("Expected argument 'filter' to be a str")
        __self__.filter = filter
        if id and not isinstance(id, str):
            raise TypeError("Expected argument 'id' to be a str")
        __self__.id = id
        """
        The provider-assigned unique ID for this managed resource.
        """
        if projects and not isinstance(projects, list):
            raise TypeError("Expected argument 'projects' to be a list")
        __self__.projects = projects
        """
        A list of projects matching the provided filter. Structure is defined below.
        """
class AwaitableGetProjectResult(GetProjectResult):
    # pylint: disable=using-constant-test
    def __await__(self):
        if False:
            yield self
        return GetProjectResult(
            filter=self.filter,
            id=self.id,
            projects=self.projects)

def get_project(filter=None,opts=None):
    """
    Retrieve information about a set of projects based on a filter. See the
    [REST API](https://cloud.google.com/resource-manager/reference/rest/v1/projects/list)
    for more details.

    ## Example Usage - searching for projects about to be deleted in an org

    ```python
    import pulumi
    import pulumi_gcp as gcp

    my_org_projects = gcp.projects.get_project(filter="parent.id:012345678910 lifecycleState:DELETE_REQUESTED")
    deletion_candidate = gcp.organizations.get_project(project_id=my_org_projects.projects[0]["project_id"])
    ```


    :param str filter: A string filter as defined in the [REST API](https://cloud.google.com/resource-manager/reference/rest/v1/projects/list#query-parameters).
    """
    __args__ = dict()


    __args__['filter'] = filter
    if opts is None:
        opts = pulumi.InvokeOptions()
    if opts.version is None:
        opts.version = utilities.get_version()
    __ret__ = pulumi.runtime.invoke('gcp:projects/getProject:getProject', __args__, opts=opts).value

    return AwaitableGetProjectResult(
        filter=__ret__.get('filter'),
        id=__ret__.get('id'),
        projects=__ret__.get('projects'))
