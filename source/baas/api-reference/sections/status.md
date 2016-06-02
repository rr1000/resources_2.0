---
title: Status Codes
---

# Status Codes

The following are standard HTTP statuses that can be returned from any of the routes this API.
These adhere closely to REST standards.

Code | Reason
-----|--------
200  | The request was performed successfully, and the response body has the result of the operation.
204  | The request was performed successfully, but there's no result to be sent.
400  | The request was malformed.
401  | The session token is invalid (this typically occurs when the user's session times out).
403  | The requesting user does not have the required permission to perform the requested operation.
404  | The requested resource (e.g. a user or a class entry) does not exist in your application.
500  | You're found a bug - please let us know ASAP!
