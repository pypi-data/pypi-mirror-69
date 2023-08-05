# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from typing import Union
from . import utilities, tables

class GetGroupResult:
    """
    A collection of values returned by getGroup.
    """
    def __init__(__self__, description=None, full_name=None, full_path=None, group_id=None, id=None, lfs_enabled=None, name=None, parent_id=None, path=None, request_access_enabled=None, runners_token=None, visibility_level=None, web_url=None):
        if description and not isinstance(description, str):
            raise TypeError("Expected argument 'description' to be a str")
        __self__.description = description
        """
        The description of the group.
        """
        if full_name and not isinstance(full_name, str):
            raise TypeError("Expected argument 'full_name' to be a str")
        __self__.full_name = full_name
        """
        The full name of the group.
        """
        if full_path and not isinstance(full_path, str):
            raise TypeError("Expected argument 'full_path' to be a str")
        __self__.full_path = full_path
        """
        The full path of the group.
        """
        if group_id and not isinstance(group_id, float):
            raise TypeError("Expected argument 'group_id' to be a float")
        __self__.group_id = group_id
        if id and not isinstance(id, str):
            raise TypeError("Expected argument 'id' to be a str")
        __self__.id = id
        """
        The provider-assigned unique ID for this managed resource.
        """
        if lfs_enabled and not isinstance(lfs_enabled, bool):
            raise TypeError("Expected argument 'lfs_enabled' to be a bool")
        __self__.lfs_enabled = lfs_enabled
        """
        Boolean, is LFS enabled for projects in this group.
        """
        if name and not isinstance(name, str):
            raise TypeError("Expected argument 'name' to be a str")
        __self__.name = name
        """
        The name of this group.
        """
        if parent_id and not isinstance(parent_id, float):
            raise TypeError("Expected argument 'parent_id' to be a float")
        __self__.parent_id = parent_id
        """
        Integer, ID of the parent group.
        """
        if path and not isinstance(path, str):
            raise TypeError("Expected argument 'path' to be a str")
        __self__.path = path
        """
        The path of the group.
        """
        if request_access_enabled and not isinstance(request_access_enabled, bool):
            raise TypeError("Expected argument 'request_access_enabled' to be a bool")
        __self__.request_access_enabled = request_access_enabled
        """
        Boolean, is request for access enabled to the group.
        """
        if runners_token and not isinstance(runners_token, str):
            raise TypeError("Expected argument 'runners_token' to be a str")
        __self__.runners_token = runners_token
        """
        The group level registration token to use during runner setup.
        """
        if visibility_level and not isinstance(visibility_level, str):
            raise TypeError("Expected argument 'visibility_level' to be a str")
        __self__.visibility_level = visibility_level
        """
        Visibility level of the group. Possible values are `private`, `internal`, `public`.
        """
        if web_url and not isinstance(web_url, str):
            raise TypeError("Expected argument 'web_url' to be a str")
        __self__.web_url = web_url
        """
        Web URL of the group.
        """
class AwaitableGetGroupResult(GetGroupResult):
    # pylint: disable=using-constant-test
    def __await__(self):
        if False:
            yield self
        return GetGroupResult(
            description=self.description,
            full_name=self.full_name,
            full_path=self.full_path,
            group_id=self.group_id,
            id=self.id,
            lfs_enabled=self.lfs_enabled,
            name=self.name,
            parent_id=self.parent_id,
            path=self.path,
            request_access_enabled=self.request_access_enabled,
            runners_token=self.runners_token,
            visibility_level=self.visibility_level,
            web_url=self.web_url)

def get_group(full_path=None,group_id=None,opts=None):
    """
    Provides details about a specific group in the gitlab provider.

    ## Example Usage



    ```python
    import pulumi
    import pulumi_gitlab as gitlab

    foo = gitlab.get_group(group_id=123)
    ```



    :param str full_path: The full path of the group.
    :param float group_id: The ID of the group.
    """
    __args__ = dict()


    __args__['fullPath'] = full_path
    __args__['groupId'] = group_id
    if opts is None:
        opts = pulumi.InvokeOptions()
    if opts.version is None:
        opts.version = utilities.get_version()
    __ret__ = pulumi.runtime.invoke('gitlab:index/getGroup:getGroup', __args__, opts=opts).value

    return AwaitableGetGroupResult(
        description=__ret__.get('description'),
        full_name=__ret__.get('fullName'),
        full_path=__ret__.get('fullPath'),
        group_id=__ret__.get('groupId'),
        id=__ret__.get('id'),
        lfs_enabled=__ret__.get('lfsEnabled'),
        name=__ret__.get('name'),
        parent_id=__ret__.get('parentId'),
        path=__ret__.get('path'),
        request_access_enabled=__ret__.get('requestAccessEnabled'),
        runners_token=__ret__.get('runnersToken'),
        visibility_level=__ret__.get('visibilityLevel'),
        web_url=__ret__.get('webUrl'))
