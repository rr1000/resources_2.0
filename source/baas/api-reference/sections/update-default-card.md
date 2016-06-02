---
title: Update Default Card
---

# Update Default Card

## PUT /org/{orgId}/customer
Update an organization's default credit card. Each customer has a single default card.
Sending the ID of an existing payment method already linked to the customer will set it as
the organization's default card. This card is used for all active subscriptions (all paid apps)
and all messaging application related billing. You cannot add a new card and set it as the default
with this route. Please add a new card with a POST to /org/{orgId}/payment and then use this
route to set it as the default.


This route requires *payment*-level permissions.

### Parameters

* orgId (required, String) ... The ID of the org

### Request (application/json)

[Headers](/baas/api-reference/overview/headers/)

```json
{
    "paymentId":"tok_104FD42eZvKYlo2Cm1wYwsL1"
}
```
### Response (application/json)

```json
{}
```

### Examples

#### JavaScript

```javascript
var request = new XMLHttpRequest();

request.open('PUT', 'https://api.catalyze.io/v2/org/{orgId}/customer');

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

var body = {};

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

NSString *url = [NSString stringWithFormat:@"/v2%@",@"/org/{orgId}/customer"];

NSDictionary *body = @{};

[httpClient PUT:url parameters:body success:^(AFHTTPRequestOperation *operation, id responseObject) {
    NSLog(@"Success Response: %@", [NSJSONSerialization JSONObjectWithData:[operation responseData] options:0 error:nil]);
} failure:^(AFHTTPRequestOperation *operation, NSError *error) {
    NSLog(@"Error: %@", error);
    NSLog(@"Status: %ld", [[operation response] statusCode]);
    NSLog(@"Response: %@", [NSJSONSerialization JSONObjectWithData:[operation responseData] options:0 error:nil]);
}];
```


