---
title: Update Org
---

# Update Org

## PUT /org/{orgId}
Update an organization and associated details. Include the fields or data elements you wish to add or update into the body of the request.

This route requires *admin,dev*-level permissions.

### Parameters

* orgId (required, String) ... The ID of the org

### Request (application/json)

[Headers](/baas/api-reference/overview/headers/)

```json
{
    "description": "We simplify building apps for healthcare. Here's an updated description!"
}
```
### Response (application/json)

```json
{
    "name": "Catalyze Inc.",
    "orgId": "0468bfb5-31b6-441d-8012-bda14410d0e7",
    "description": "We simplify building apps for healthcare. Here's an updated description!",
    "permissions": {
        "dev":["a564ef59-085b-4803-b514-37288e32709e"],
        "admin":["a564ef59-085b-4803-b514-37288e32709e"],
        "payment":["a564ef59-085b-4803-b514-37288e32709e"],
        "viewOther":["a564ef59-085b-4803-b514-37288e32709e"],
        "viewPhi":["a564ef59-085b-4803-b514-37288e32709e"]
    }
}
```

### Examples

#### JavaScript

```javascript
var request = new XMLHttpRequest();

request.open('PUT', 'https://api.catalyze.io/v2/org/{orgId}');

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
    "name": "Catalyze Inc.",
    "orgId": "0468bfb5-31b6-441d-8012-bda14410d0e7",
    "description": "We simplify building apps for healthcare. Here's an updated description!",
    "permissions": {
        "dev":["a564ef59-085b-4803-b514-37288e32709e"],
        "admin":["a564ef59-085b-4803-b514-37288e32709e"],
        "payment":["a564ef59-085b-4803-b514-37288e32709e"],
        "viewOther":["a564ef59-085b-4803-b514-37288e32709e"],
        "viewPhi":["a564ef59-085b-4803-b514-37288e32709e"]
    }
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

NSString *url = [NSString stringWithFormat:@"/v2%@",@"/org/{orgId}"];

NSDictionary *body = @{
    @"name": @"Catalyze Inc.",
    @"orgId": @"0468bfb5-31b6-441d-8012-bda14410d0e7",
    @"description": @"We simplify building apps for healthcare. Here's an updated description!",
    @"permissions": @{
        @"dev":@[@"a564ef59-085b-4803-b514-37288e32709e@"],
        @"admin":@[@"a564ef59-085b-4803-b514-37288e32709e@"],
        @"payment":@[@"a564ef59-085b-4803-b514-37288e32709e@"],
        @"viewOther":@[@"a564ef59-085b-4803-b514-37288e32709e@"],
        @"viewPhi":@[@"a564ef59-085b-4803-b514-37288e32709e@"]
    }
}
;

[httpClient PUT:url parameters:body success:^(AFHTTPRequestOperation *operation, id responseObject) {
    NSLog(@"Success Response: %@", [NSJSONSerialization JSONObjectWithData:[operation responseData] options:0 error:nil]);
} failure:^(AFHTTPRequestOperation *operation, NSError *error) {
    NSLog(@"Error: %@", error);
    NSLog(@"Status: %ld", [[operation response] statusCode]);
    NSLog(@"Response: %@", [NSJSONSerialization JSONObjectWithData:[operation responseData] options:0 error:nil]);
}];
```


