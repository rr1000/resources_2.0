---
title: List a User's Files
---

# List a User's Files

## GET /users/{userId}/files
Return a list of the specified user's files stored within the application.

Model level or higher access to files is required to perform this operation.


### Parameters

* userId (required, String) ... The ID of the user to list files for

### Request (null)

[Headers](/baas/api-reference/overview/headers/)

(no body)
### Response (application/json)

```json
[
    {
        "filesId": "123abcFilesId",
        "usersId": "456xyzUsersId",
        "authorsId": "789zxcUsersId",
        "phi": "true",
        "createdAt": "2013-05-01T07:00:00.000Z"
    },
    {
        "filesId": "456defFilesId",
        "usersId": "456xyzUsersId",
        "authorsId": "789zxcUsersId",
        "phi": "true",
        "createdAt": "2013-05-02T07:00:00.000Z"
    }
]
```

### Examples

#### JavaScript

```javascript
var request = new XMLHttpRequest();

request.open('GET', 'https://api.catalyze.io/v2/users/{userId}/files');

request.setRequestHeader('X-Api-Key', 'browser api.catalyze.io 525ad5d6993247cccb083e5a');
request.setRequestHeader('Authorization', 'Bearer 0c7f26c8-5b4a-4a32-b35a-2e249448bbf2');
request.setRequestHeader('Accept', 'application/json');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

request.send();
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

NSString *url = [NSString stringWithFormat:@"/v2%@",@"/users/{userId}/files"];

NSDictionary *body = @[
    @{
        @"filesId": @"123abcFilesId",
        @"usersId": @"456xyzUsersId",
        @"authorsId": @"789zxcUsersId",
        @"phi": @"true",
        @"createdAt": @"2013-05-01T07:00:00.000Z"
    },
    @{
        @"filesId": @"456defFilesId",
        @"usersId": @"456xyzUsersId",
        @"authorsId": @"789zxcUsersId",
        @"phi": @"true",
        @"createdAt": @"2013-05-02T07:00:00.000Z"
    }
]
;

[httpClient GET:url parameters:body success:^(AFHTTPRequestOperation *operation, id responseObject) {
    NSLog(@"Success Response: %@", [NSJSONSerialization JSONObjectWithData:[operation responseData] options:0 error:nil]);
} failure:^(AFHTTPRequestOperation *operation, NSError *error) {
    NSLog(@"Error: %@", error);
    NSLog(@"Status: %ld", [[operation response] statusCode]);
    NSLog(@"Response: %@", [NSJSONSerialization JSONObjectWithData:[operation responseData] options:0 error:nil]);
}];
```


