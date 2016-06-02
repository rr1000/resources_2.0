---
title: Update Payment Method
---

# Update Payment Method

## PUT /org/{orgId}/payment/{paymentId}
Update an existing payment method on the organization's Stripe customer. The only fields that should
be updated are specified [here](https://stripe.com/docs/api#update_card). No credit card numbers should be sent to the Catalyze API.


This route requires *payment*-level permissions.

### Parameters

* paymentId (required, String) ... The ID of the existing payment method
* orgId (required, String) ... The ID of the org

### Request (application/json)

[Headers](/baas/api-reference/overview/headers/)

```json
{
    "address_city": "Madison",
    "address_country": "US",
    "address_line1": "1234 5th Street",
    "address_line2": "#1",
    "address_state": "Wisconsin",
    "address_zip": "53703",
    "exp_month": "01",
    "exp_year": "2014",
    "name": "my favorite card"
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

request.open('PUT', 'https://api.catalyze.io/v2/org/{orgId}/payment/{paymentId}');

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

NSString *url = [NSString stringWithFormat:@"/v2%@",@"/org/{orgId}/payment/{paymentId}"];

NSDictionary *body = @{};

[httpClient PUT:url parameters:body success:^(AFHTTPRequestOperation *operation, id responseObject) {
    NSLog(@"Success Response: %@", [NSJSONSerialization JSONObjectWithData:[operation responseData] options:0 error:nil]);
} failure:^(AFHTTPRequestOperation *operation, NSError *error) {
    NSLog(@"Error: %@", error);
    NSLog(@"Status: %ld", [[operation response] statusCode]);
    NSLog(@"Response: %@", [NSJSONSerialization JSONObjectWithData:[operation responseData] options:0 error:nil]);
}];
```


