---
title: Retrieve a user by ID
---

# Retrieve a user by ID

## GET /users/{usersId}
This is used to retrieve a user's PII details by ID.

### Parameters

* usersId (required, String) ... The ID of the user

### Request (application/json)

[Headers](/baas/api-reference/overview/headers/)

(no body)
### Response (application/json)

```json
{
    "email": {
        "primary":"primary@email.com",
        "secondary":"secondary@email.com",
        "work":"work@email.com",
        "other":"other@email.com"
    },
    "name": {
        "prefix":"prefix",
        "firstName":"first name",
        "middleName":"middle name",
        "lastName":"last name",
        "maidenName":"maiden name",
        "suffix":"jr"
    },
    "extras":{
        "extra1":"value1",
        "extra2":"value2"
    },
    "usersId":"a564ef59-085b-4803-b514-37288e32709e",
    "active":false,
    "createdAt":"2013-11-07T12:00:00Z",
    "updatedAt":"2013-11-07T12:00:00Z"
}
```

### Examples

#### JavaScript

```javascript
var request = new XMLHttpRequest();

request.open('GET', 'https://api.catalyze.io/v2/users/{usersId}');

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

NSString *url = [NSString stringWithFormat:@"/v2%@",@"/users/{usersId}"];

NSDictionary *body = @{
    @"email": @{
        @"primary":@"primary@email.com",
        @"secondary":@"secondary@email.com",
        @"work":@"work@email.com",
        @"other":@"other@email.com"
    },
    @"name": @{
        @"prefix":@"prefix",
        @"firstName":@"first name",
        @"middleName":@"middle name",
        @"lastName":@"last name",
        @"maidenName":@"maiden name",
        @"suffix":@"jr"
    },
    @"extras":@{
        @"extra1":@"value1",
        @"extra2":@"value2"
    },
    @"usersId":@"a564ef59-085b-4803-b514-37288e32709e",
    @"active":@false,
    @"createdAt":@"2013-11-07T12:00:00Z",
    @"updatedAt":@"2013-11-07T12:00:00Z"
}
;

[httpClient GET:url parameters:body success:^(AFHTTPRequestOperation *operation, id responseObject) {
    NSLog(@"Success Response: %@", [NSJSONSerialization JSONObjectWithData:[operation responseData] options:0 error:nil]);
} failure:^(AFHTTPRequestOperation *operation, NSError *error) {
    NSLog(@"Error: %@", error);
    NSLog(@"Status: %ld", [[operation response] statusCode]);
    NSLog(@"Response: %@", [NSJSONSerialization JSONObjectWithData:[operation responseData] options:0 error:nil]);
}];
```


