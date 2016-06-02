---
title: Upload a File for a User
---

# Upload a File for a User

## POST /users/{userId}/files
Upload a file to another user and assign that user ownership of the file. 
The authenticated user will be listed as the author of the file and will still be able to access it. 

Model level or higher access to files is required in order to perform this operation.


### Parameters

* userId (required, String) ... The ID of the user that will own the uploaded file

### Request (multipart/form-data)

[Headers](/baas/api-reference/overview/headers/)

```json
{}
```
### Response (application/json)

```json
{
	"filesId": "123abcFileId"
}
```

### Examples

#### JavaScript

```javascript
var request = new XMLHttpRequest();

request.open('POST', 'https://api.catalyze.io/v2/users/{userId}/files');

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

var form = new FormData();
form.append("file", document.getElementById("file").files[0]);
form.append("phi", false);
Request.send(form);
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

NSDictionary *body = @{
	@"filesId": @"123abcFileId"
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


