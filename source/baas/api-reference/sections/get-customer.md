---
title: Get Customer
---

# Get Customer

## GET /org/{orgId}/customer
Get the customer object of an existing organization. This is a Customer object from Stripe.
A payment method needs to exist on the customer in order to retrieve the customer.
Otherwise the customer object has not been setup yet and a 400 will be thrown.


This route requires *payment*-level permissions.

### Parameters

* orgId (required, String) ... The ID of the org

### Request (application/json)

[Headers](/baas/api-reference/overview/headers/)

(no body)
### Response (application/json)

```json
{
    "object": "customer",
    "created": 1403096315,
    "id": "cus_4FD4wvEKNQ2sJi",
    "livemode": false,
    "description": "Bingo|www|0c1234567890",
    "email": null,
    "delinquent": false,
    "metadata": {
    },
    "subscriptions": {
        "object": "list",
        "total_count": 0,
        "has_more": false,
        "url": "/v1/customers/cus_4FD4wvEKNQ2sJi/subscriptions",
        "data": [

        ]
    },
    "discount": null,
    "account_balance": 0,
    "currency": "usd",
    "cards": {
        "object": "list",
        "total_count": 1,
        "has_more": false,
        "url": "/v1/customers/cus_4FD4wvEKNQ2sJi/cards",
        "data": [
            {
                "id": "card_104FD42eZvKYlo2Cm1wYwsL1",
                "object": "card",
                "last4": "4242",
                "brand": "Visa",
                "funding": "credit",
                "exp_month": 5,
                "exp_year": 2015,
                "fingerprint": "Xt5EWLLDS7FJjR1c",
                "country": "US",
                "name": null,
                "address_line1": null,
                "address_line2": null,
                "address_city": null,
                "address_state": null,
                "address_zip": null,
                "address_country": null,
                "cvc_check": "pass",
                "address_line1_check": null,
                "address_zip_check": null,
                "customer": "cus_4FD4wvEKNQ2sJi"
            }
        ]
    },
    "default_card": "card_104FD42eZvKYlo2Cm1wYwsL1"
}
```

### Examples

#### JavaScript

```javascript
var request = new XMLHttpRequest();

request.open('GET', 'https://api.catalyze.io/v2/org/{orgId}/customer');

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

NSString *url = [NSString stringWithFormat:@"/v2%@",@"/org/{orgId}/customer"];

NSDictionary *body = @{
    @"object": @"customer",
    @"created": @1403096315,
    @"id": @"cus_4FD4wvEKNQ2sJi",
    @"livemode":@false,
    @"description": @"Bingo|www|0c1234567890",
    @"email": null,
    @"delinquent":@false,
    @"metadata": @{
    },
    @"subscriptions": @{
        @"object": @"list",
        @"total_count": 0,
        @"has_more":@false,
        @"url": @"/v1/customers/cus_4FD4wvEKNQ2sJi/subscriptions",
        @"data": @[

        ]
    },
    @"discount": null,
    @"account_balance": 0,
    @"currency": @"usd",
    @"cards": @{
        @"object": @"list",
        @"total_count": 1,
        @"has_more":@false,
        @"url": @"/v1/customers/cus_4FD4wvEKNQ2sJi/cards",
        @"data": @[
            @{
                @"id": @"card_104FD42eZvKYlo2Cm1wYwsL1",
                @"object": @"card",
                @"last4": @"4242",
                @"brand": @"Visa",
                @"funding": @"credit",
                @"exp_month": 5,
                @"exp_year": @2015,
                @"fingerprint": @"Xt5EWLLDS7FJjR1c",
                @"country": @"US",
                @"name": null,
                @"address_line1": null,
                @"address_line2": null,
                @"address_city": null,
                @"address_state": null,
                @"address_zip": null,
                @"address_country": null,
                @"cvc_check": @"pass",
                @"address_line1_check": null,
                @"address_zip_check": null,
                @"customer": @"cus_4FD4wvEKNQ2sJi"
            }
        ]
    },
    @"default_card": @"card_104FD42eZvKYlo2Cm1wYwsL1"
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


