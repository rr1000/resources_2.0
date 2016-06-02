---
title: Filter Class Entries
---

# Filter Class Entries

## GET /classes/{name}/query{?pageSize,pageNumber,orderBy,direction}
This route allows the data in a custom class to be filtered by certain values inside it, each passed as part of the query string by `fieldName=value`. Any number of fields can be passed, including zero (no entries would be filtered out).

Examples for an imaginary class "people":

* `?name=Bob` - entries with `name` = `"Bob"`
* `?name=Bob&gender=male&age=20` - entries with `name` = `"Bob"`, `gender` = `"male"`, and `age` = `20`

Properties of child objects can also be queried (Note: if querying a child property, ensure that every entry in that class has that property, or errors may occur) by separating the properties with a period (`.`):

* `?name.first=Bob` - would match `{"name": {"first": "Bob"}}`

To query the `createdAt` and `updatedAt` fields, the special values `@createdAt` and `@updatedAt` can be passed.


This route requires *Admin, dev, or supervisor*-level permissions.

### Parameters

* pageNumber (optional (default=1), int) ... The number of pages of size pageSize to skip before returning entries.  If not specified, defaults to 1.
* name (required, String) ... The name of the custom class to query.
* pageSize (optional (default=10), int) ... The number of entries to return. If not specified, defaults to 10.
* orderBy (optional (default=@createdAt), String) ... The field by which to order the results.
* direction (optional (default=asc), String) ... The direction in which to sort entries. "asc" and "desc" are accepted values.

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

request.open('GET', 'https://api.catalyze.io/v2/classes/{name}/query');

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

NSString *url = [NSString stringWithFormat:@"/v2%@",@"/classes/{name}/query"];

NSDictionary *body = @{};

[httpClient GET:url parameters:body success:^(AFHTTPRequestOperation *operation, id responseObject) {
    NSLog(@"Success Response: %@", [NSJSONSerialization JSONObjectWithData:[operation responseData] options:0 error:nil]);
} failure:^(AFHTTPRequestOperation *operation, NSError *error) {
    NSLog(@"Error: %@", error);
    NSLog(@"Status: %ld", [[operation response] statusCode]);
    NSLog(@"Response: %@", [NSJSONSerialization JSONObjectWithData:[operation responseData] options:0 error:nil]);
}];
```


