---
title: Sign In
---

# Sign In

## POST /auth/signin
Use this to sign into the application. When you sign in, you get a session token.  
This session token currently never expires (although we are working on a mechanism to do 
this).  You may sign out, which invalidates your session token and requires you to sign 
in again. Every time you sign in, you get a new session token.



### Request (null)

[Headers](/baas/api-reference/overview/headers/)

```json
{
    "username":"username",
    "password":"test123"
}
```
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

request.open('POST', 'https://api.catalyze.io/v2/auth/signin');

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

NSString *url = [NSString stringWithFormat:@"/v2%@",@"/auth/signin"];

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

[httpClient POST:url parameters:body success:^(AFHTTPRequestOperation *operation, id responseObject) {
    NSLog(@"Success Response: %@", [NSJSONSerialization JSONObjectWithData:[operation responseData] options:0 error:nil]);
} failure:^(AFHTTPRequestOperation *operation, NSError *error) {
    NSLog(@"Error: %@", error);
    NSLog(@"Status: %ld", [[operation response] statusCode]);
    NSLog(@"Response: %@", [NSJSONSerialization JSONObjectWithData:[operation responseData] options:0 error:nil]);
}];
```


