---
title: Delete Org
---

# Delete Org

## DELETE /org/{orgId}
Delete an organization and all associated Stripe information. **Be careful using this as it cannot be reversed**.

This route requires *admin*-level permissions.

### Parameters

* orgId (required, String) ... The ID of the org

### Request (application/json)

[Headers](/baas/api-reference/overview/headers/)

(no body)
### Response (application/json)

```json
{}
```

### Examples

#### JavaScript

```javascript
var request = new XMLHttpRequest();

request.open('DELETE', 'https://api.catalyze.io/v2/org/{orgId}');

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

NSString *url = [NSString stringWithFormat:@"/v2%@",@"/org/{orgId}"];

NSDictionary *body = @{};

[httpClient DELETE:url parameters:body success:^(AFHTTPRequestOperation *operation, id responseObject) {
    NSLog(@"Success Response: %@", [NSJSONSerialization JSONObjectWithData:[operation responseData] options:0 error:nil]);
} failure:^(AFHTTPRequestOperation *operation, NSError *error) {
    NSLog(@"Error: %@", error);
    NSLog(@"Status: %ld", [[operation response] statusCode]);
    NSLog(@"Response: %@", [NSJSONSerialization JSONObjectWithData:[operation responseData] options:0 error:nil]);
}];
```


