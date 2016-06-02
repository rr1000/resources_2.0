---
title: Application Invites
---

# Application Invites

Applications have the ability to be marked invite-only, meaning that any user that signs up for your application must have a valid inviteCode that you send by email. This invite code must be sent with the User model on creation under the key inviteCode. After initial creation this code is never used again. But administrators of applications need a way to send out invites and manage existing ones. The following routes explain how to send invites by email as well as view and cancel any outstanding invites. Please note that once an invite is used it cannot be viewed or deleted. You will have to manually delete that User if a mistake was made. These routes are restricted to those with supervisor permissions or higher. Here are the parameters for the `Invite` model:

NAME | TYPE | DESCRIPTION
-----|------|------------
inviteId | string | Internal ID for this particular invite. This should not be usedfor signing up, you must use `inviteCode`.
inviteCode | string | Ihe code that the user will send along with the User object on User creation
email | string | Ihe email address to send the invitation to
appId | string | Ihe ID of the application that the user with the given `email` address was invited to
used | boolean | Flag indicating if this invite has already been used or not

