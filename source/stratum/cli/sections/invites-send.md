---
title: Invites Send
layout: layout
---

## Invites Send

```
Usage: catalyze invites send EMAIL [-m | -a]

Send an invite to a user by email for a given organization

Arguments:
  EMAIL=""     The email of a user to invite to the associated environment. This user does not need to have a Catalyze account prior to sending the invitation

Options:
  -m, --member=true   Whether or not the user will be invited as a basic member
  -a, --admin=false   Whether or not the user will be invited as an admin
```

`invites send` invites a new user to your environment's organization. The only piece of information required is the email address to send the invitation to. The invited user will join the organization as a basic member, unless otherwise specified with the `-a` flag. The recipient does **not** need to have a Dashboard account in order to send them an invitation. However, they will need to have a Dashboard account to accept the invitation. Here is a sample command

```
catalyze invites send coworker@catalyze.io -a
```
