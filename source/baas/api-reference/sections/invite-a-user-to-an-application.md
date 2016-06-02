---
title: Invite a user to an application
---

# Invite a user to an application

## POST /app/{appId}/invite
Use this route to invite a user to your application by email.

This route requires *admin,dev*-level permissions.

### Parameters

* appId (required, String) ... The ID of the application

### Request (application/json)

[Headers](/baas/api-reference/overview/headers/)

```json
{
    "email":"inviteMe@catalyze.io"
}
```
### Response (application/json)

```json
{
    "inviteId":"e1200bd6-b0de-461a-893f-25d6c36b277b",
    "inviteCode":"8216502f-e57f-40c8-9bd1-833d99fb0854",
    "email":"inviteMe@catalyze.io",
    "appId":"bf9e0920-e41b-4705-b66b-87e4dc11cd46",
    "used":false
}
```

### Examples

#### JavaScript

```javascript
var request = new XMLHttpRequest();

request.open('POST', 'https://api.catalyze.io/v2/app/{appId}/invite');

request.setRequestHeader('X-Api-Key', 'browser api.catalyze.io 525ad5d6993247cccb083e5a');
request.setRequestHeader('Authorization', 'Bearer 0c7f26c8-5b4a-4a32-b35a-2e249448bbf2');
request.setRequestHeader('Accept', 'application/json');
request.setRequestHeader('Content-Type', 'application/json');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

var body = {
    "inviteId":"e1200bd6-b0de-461a-893f-25d6c36b277b",
    "inviteCode":"8216502f-e57f-40c8-9bd1-833d99fb0854",
    "email":"inviteMe@catalyze.io",
    "appId":"bf9e0920-e41b-4705-b66b-87e4dc11cd46",
    "used":false
}
;

request.send(JSON.stringify(body));
```


#### iOS

```objc
NSURL *baseUrl = [NSURL URLWithString:@"https://api.catalyze.io"];
AFHTTPRequestOperationManager *httpClient = [[AFHTTPRequestOperationManager alloc] initWithBaseURL:baseUrl];
httpClient.requestSerializer = [AFJSONRequestSerializer serializer];

[httpClient.requestSerializer setValue:@"application/json" forHTTPHeaderField:@"Content-Type"];
[httpClient.requestSerializer setValue:@"application/json" forHTTPHeaderField:@"Accept"];
[httpClient.requestSerializer setValue:@"Bearer 0c7f26c8-5b4a-4a32-b35a-2e249448bbf2" forHTTPHeaderField:@"Authorization"];
[httpClient.requestSerializer setValue:@"browser api.catalyze.io 525ad5d6993247cccb083e5a" forHTTPHeaderField:@"X-Api-Key"];

httpClient.responseSerializer = [AFHTTPResponseSerializer serializer];

NSString *url = [NSString stringWithFormat:@"/v2%@",@"/app/{appId}/invite"];

NSDictionary *body = @{
    @"inviteId":@"e1200bd6-b0de-461a-893f-25d6c36b277b",
    @"inviteCode":@"8216502f-e57f-40c8-9bd1-833d99fb0854",
    @"email":@"inviteMe@catalyze.io",
    @"appId":@"bf9e0920-e41b-4705-b66b-87e4dc11cd46",
    @"used":@false
}
;

[httpClient POST:url parameters:body success:^(AFHTTPRequestOperation *operation, id responseObject) {
    NSLog(@"Success Response: %@", [NSJSONSerialization JSONObjectWithData:[operation responseData] options:0 error:nil]);
} failure:^(AFHTTPRequestOperation *operation, NSError *error) {
    NSLog(@"Error: %@", error);
    NSLog(@"Status: %ld", [[operation response] statusCode]);
    NSLog(@"Response: %@", [NSJSONSerialization JSONObjectWithData:[operation responseData] options:0 error:nil]);
}];
```


