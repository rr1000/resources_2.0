---
title: Create a User
---

# Create a User

## POST /users
This is used to create a user with associated PII (Personally Identifiable Information) details.


### Request (application/json)

[Headers](/baas/api-reference/overview/headers/)

```json
{
    "username":"username",
    "password":"test123",
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
    }
}
```
### Response (application/json)

```json
{
    "username":"username",
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
    "phoneNumber": {
        "home":"4141112222",
        "mobile":"4143334444",
        "work":"4145556666",
        "other":"4147778888",
        "preferred":"mobile"
    },
    "dob":"2000-01-01",
    "age":21,
    "addresses":[
        {
            "type":"Home",
            "addressLine1":"1234 5th Street",
            "addressLine2":"Apt #2A",
            "city":"Milwaukee",
            "state":"Wisconsin",
            "zipCode":"53202",
            "country":"UNITED STATES",
            "geocode": {
                "latitude":1.0,
                "longitude":2.0
            }
        }
    ],
    "gender":"Male",
    "maritalStatus":"Married",
    "religion":"Baptist",
    "race":"White",
    "ethnicity":"Not Hispanic or Latino",
    "guardians":[
        {
            "guardianId":"2",
            "relationship":"father"
        }
    ],
    "confCode":"confCode",
    "languages": [
        {
            "language":"English",
            "languageMode":"Expressed written"
        }
    ],
    "socialIds":[
        {
            "handle":"@catalyzeio",
            "network":"twitter"
        }
    ],
    "mrns":[
        {
            "institutionsId":"inst_id_1",
            "mrn":"mrn1"
        },
        {
            "institutionsId":"inst_id_2",
            "mrn":"mrn2"
        }
    ],
    "healthPlans":[
        {
            "institutionsId":"inst_id",
            "type":"current",
            "groupName":"group name",
            "groupId":"1",
            "memberId":"1"
        }
    ],
    "avatar":"http://avatar.com",
    "ssn":"123456789",
    "profilePhoto":"/file/photo.png",
    "extras":{
        "extra1":"value1",
        "extra2":"value2"
    },
    "sessionToken":"25074b4e-bc7f-4ee3-aae0-f9ff0db1786e",
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

request.open('POST', 'https://api.catalyze.io/v2/users');

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
    "username":"username",
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
    "phoneNumber": {
        "home":"4141112222",
        "mobile":"4143334444",
        "work":"4145556666",
        "other":"4147778888",
        "preferred":"mobile"
    },
    "dob":"2000-01-01",
    "age":21,
    "addresses":[
        {
            "type":"Home",
            "addressLine1":"1234 5th Street",
            "addressLine2":"Apt #2A",
            "city":"Milwaukee",
            "state":"Wisconsin",
            "zipCode":"53202",
            "country":"UNITED STATES",
            "geocode": {
                "latitude":1.0,
                "longitude":2.0
            }
        }
    ],
    "gender":"Male",
    "maritalStatus":"Married",
    "religion":"Baptist",
    "race":"White",
    "ethnicity":"Not Hispanic or Latino",
    "guardians":[
        {
            "guardianId":"2",
            "relationship":"father"
        }
    ],
    "confCode":"confCode",
    "languages": [
        {
            "language":"English",
            "languageMode":"Expressed written"
        }
    ],
    "socialIds":[
        {
            "handle":"@catalyzeio",
            "network":"twitter"
        }
    ],
    "mrns":[
        {
            "institutionsId":"inst_id_1",
            "mrn":"mrn1"
        },
        {
            "institutionsId":"inst_id_2",
            "mrn":"mrn2"
        }
    ],
    "healthPlans":[
        {
            "institutionsId":"inst_id",
            "type":"current",
            "groupName":"group name",
            "groupId":"1",
            "memberId":"1"
        }
    ],
    "avatar":"http://avatar.com",
    "ssn":"123456789",
    "profilePhoto":"/file/photo.png",
    "extras":{
        "extra1":"value1",
        "extra2":"value2"
    },
    "sessionToken":"25074b4e-bc7f-4ee3-aae0-f9ff0db1786e",
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

NSString *url = [NSString stringWithFormat:@"/v2%@",@"/users"];

NSDictionary *body = @{
    @"username":@"username",
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
    @"phoneNumber": @{
        @"home":@"4141112222",
        @"mobile":@"4143334444",
        @"work":@"4145556666",
        @"other":@"4147778888",
        @"preferred":@"mobile"
    },
    @"dob":@"2000-01-01",
    @"age":@21,
    @"addresses":@[
        @{
            @"type":@"Home",
            @"addressLine1":@"@1234 5th Street",
            @"addressLine2":@"Apt #2A",
            @"city":@"Milwaukee",
            @"state":@"Wisconsin",
            @"zipCode":@"53202",
            @"country":@"UNITED STATES",
            @"geocode": @{
                @"latitude":@1.0,
                @"longitude":@2.0
            }
        }
    ],
    @"gender":@"Male",
    @"maritalStatus":@"Married",
    @"religion":@"Baptist",
    @"race":@"White",
    @"ethnicity":@"Not Hispanic or Latino",
    @"guardians":@[
        @{
            @"guardianId":@"2",
            @"relationship":@"father"
        }
    ],
    @"confCode":@"confCode",
    @"languages": @[
        @{
            @"language":@"English",
            @"languageMode":@"Expressed written"
        }
    ],
    @"socialIds":@[
        @{
            @"handle":@"@catalyzeio",
            @"network":@"twitter"
        }
    ],
    @"mrns":@[
        @{
            @"institutionsId":@"inst_id_1",
            @"mrn":@"mrn1"
        },
        @{
            @"institutionsId":@"inst_id_2",
            @"mrn":@"mrn2"
        }
    ],
    @"healthPlans":@[
        @{
            @"institutionsId":@"inst_id",
            @"type":@"current",
            @"groupName":@"group name",
            @"groupId":@"1",
            @"memberId":@"1"
        }
    ],
    @"avatar":@"http://avatar.com",
    @"ssn":@"123456789",
    @"profilePhoto":@"/file/photo.png",
    @"extras":@{
        @"extra1":@"value1",
        @"extra2":@"value2"
    },
    @"sessionToken":@"25074b4e-bc7f-4ee3-aae0-f9ff0db1786e",
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


