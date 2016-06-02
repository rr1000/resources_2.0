---
title: Invites Rm
layout: layout
---

## Invites Rm

```
Usage: catalyze invites rm INVITE_ID

Remove a pending organization invitation

Arguments:
  INVITE_ID=""   The ID of an invitation to remove
```

`invites rm` removes a pending invitation found by using the [invites list](#invites-list) command. Once an invite has already been accepted, it cannot be removed. Removing an invitation is helpful if an email was misspelled and an invitation was sent to an incorrect email address. If you want to revoke access to a user who already has been given access to your environment, use the [users rm](#users-rm) command. Here is a sample command

```
catalyze invites rm 78b5d0ed-f71c-47f7-a4c8-6c8c58c29db1
```
