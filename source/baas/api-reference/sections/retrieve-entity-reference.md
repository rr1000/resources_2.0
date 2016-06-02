---
title: Retrieve Entity Reference
---

# Retrieve Entity Reference

## GET /classes/{name}/entry/{entryId}/ref/{refName}/{refId}
Retrieve a specific reference for an entry.

### Parameters

* name (required, String) ... The name of the custom class you are querying.
* refId (required, String) ... The ID of the reference which you are querying.
* refName (required, String) ... The name of the reference you are querying.
* entryId (required, String) ... The ID of the custom class entry you are searching for references.

### Request (application/json)

[Headers](/baas/api-reference/overview/headers/)

(no body)
### Response (application/json)

```json
{
	"content": 
	{
		"REFERENCED_CLASS_KEY_1": "REFERENCED_CLASS_VAL_1",
		"REFERENCED_CLASS_KEY_2": "REFERENCED_CLASS_VAL_2"
	},

	"id": "REFERENCED_ENTRY_ID_123",
	"parentId": "USER_ID_123",
	"phi": false
}
```

### Examples

#### JavaScript

```javascript
var request = new XMLHttpRequest();

request.open('GET', 'https://api.catalyze.io/v2/classes/{name}/entry/{entryId}/ref/{refName}/{refId}');

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

NSString *url = [NSString stringWithFormat:@"/v2%@",@"/classes/{name}/entry/{entryId}/ref/{refName}/{refId}"];

NSDictionary *body = @{
	@"content": 
	@{
		@"REFERENCED_CLASS_KEY_1": @"REFERENCED_CLASS_VAL_1",
		@"REFERENCED_CLASS_KEY_2": @"REFERENCED_CLASS_VAL_2"
	},

	@"id": @"REFERENCED_ENTRY_ID_123",
	@"parentId": @"USER_ID_123",
	@"phi":@false
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


