---
title: ACLs
---

# ACLs

Access Control Lists (ACLs) provide the ability to grant and revoke access to data stored within the backend. Currently ACLs are only implemented to Files and Custom Classes but we will extend the capabilities to more data models in future releases. 

NAME | TYPE | DESCRIPTION
-----|-------------|-----
**entityId**|string|The ID of the user, group, or application associated with this set of permissions.
**model**|string|The name of the model this set of permissions affects.
**permissions**|array|Represents the permissions granted to the user or group. The possible contained items follow - if present, they signify that the user/group has that permission. An empty list means no extra permissions granted.
|**create**|string|Has access to create data for this model.
|**retrieve**|string|Has access to view data for this model.
|**update**|string|Has access to change data for this model.
|**delete**|string|Has access to delete data from this model.

See the [Permissions and ACLs](https://docs.catalyze.io/guides/api/latest/permissions_and_acls/README.html) section of our Getting Started guide for more information.

