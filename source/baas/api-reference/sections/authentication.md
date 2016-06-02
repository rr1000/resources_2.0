---
title: Authentication
---

# Authentication

Routes are provided for user login and logout. Sessions and session keys are 
managed automatically. The following are the key parameters you need to know.

NAME | TYPE | DESCRIPTION
-----|------|------------
 username | email | email address of the user
 password | string | password of the user
 sessionToken | string | This will be returned by the server every time the user logs in. If the user logs out, the old session token is invalidated and a new one will be issued when the user logs in again.

