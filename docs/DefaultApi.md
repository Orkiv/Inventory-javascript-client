# InventoryClient.DefaultApi

All URIs are relative to *https://www.orkiv.com/i/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**allGet**](DefaultApi.md#allGet) | **GET** /all/ | 
[**categoriesDelete**](DefaultApi.md#categoriesDelete) | **DELETE** /categories/ | 
[**categoriesPost**](DefaultApi.md#categoriesPost) | **POST** /categories/ | 
[**categoriesPut**](DefaultApi.md#categoriesPut) | **PUT** /categories/ | 
[**itemAddPost**](DefaultApi.md#itemAddPost) | **POST** /item/add/ | 
[**itemAddbulkPost**](DefaultApi.md#itemAddbulkPost) | **POST** /item/addbulk/ | 
[**itemDelete**](DefaultApi.md#itemDelete) | **DELETE** /item/ | 
[**itemPut**](DefaultApi.md#itemPut) | **PUT** /item/ | 
[**itemsCountPost**](DefaultApi.md#itemsCountPost) | **POST** /items/count/ | 
[**itemsPost**](DefaultApi.md#itemsPost) | **POST** /items/ | 
[**itemsallfieldsPost**](DefaultApi.md#itemsallfieldsPost) | **POST** /items/?allfields | 
[**ordersPost**](DefaultApi.md#ordersPost) | **POST** /orders/ | 
[**queryPost**](DefaultApi.md#queryPost) | **POST** /query/ | 
[**queryallfieldsPost**](DefaultApi.md#queryallfieldsPost) | **POST** /query/?allfields | 
[**servicesDelete**](DefaultApi.md#servicesDelete) | **DELETE** /services/ | 
[**servicesGet**](DefaultApi.md#servicesGet) | **GET** /services/ | 
[**servicesPost**](DefaultApi.md#servicesPost) | **POST** /services/ | 
[**servicesPut**](DefaultApi.md#servicesPut) | **PUT** /services/ | 
[**writeDelete**](DefaultApi.md#writeDelete) | **DELETE** /write/ | 
[**writePost**](DefaultApi.md#writePost) | **POST** /write/ | 


<a name="allGet"></a>
# **allGet**
> [InventoryGroup] allGet()



### Example
```javascript
var InventoryClient = require('InventoryClient');
var defaultClient = InventoryClient.ApiClient.default;

// Configure API key authorization: APIKey
var APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';

// Configure API key authorization: AccountID
var AccountID = defaultClient.authentications['AccountID'];
AccountID.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AccountID.apiKeyPrefix = 'Token';

var apiInstance = new InventoryClient.DefaultApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.allGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[InventoryGroup]**](InventoryGroup.md)

### Authorization

[APIKey](../README.md#APIKey), [AccountID](../README.md#AccountID)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="categoriesDelete"></a>
# **categoriesDelete**
> Response categoriesDelete(id)



### Example
```javascript
var InventoryClient = require('InventoryClient');
var defaultClient = InventoryClient.ApiClient.default;

// Configure API key authorization: APIKey
var APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';

// Configure API key authorization: AccountID
var AccountID = defaultClient.authentications['AccountID'];
AccountID.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AccountID.apiKeyPrefix = 'Token';

var apiInstance = new InventoryClient.DefaultApi();

var id = "id_example"; // String | Id of category to remove


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.categoriesDelete(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Id of category to remove | 

### Return type

[**Response**](Response.md)

### Authorization

[APIKey](../README.md#APIKey), [AccountID](../README.md#AccountID)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="categoriesPost"></a>
# **categoriesPost**
> [Category] categoriesPost(opts)



### Example
```javascript
var InventoryClient = require('InventoryClient');
var defaultClient = InventoryClient.ApiClient.default;

// Configure API key authorization: APIKey
var APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';

// Configure API key authorization: AccountID
var AccountID = defaultClient.authentications['AccountID'];
AccountID.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AccountID.apiKeyPrefix = 'Token';

var apiInstance = new InventoryClient.DefaultApi();

var opts = { 
  'query': new InventoryClient.Dictionary() // Dictionary | Category to query against system
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.categoriesPost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | [**Dictionary**](Dictionary.md)| Category to query against system | [optional] 

### Return type

[**[Category]**](Category.md)

### Authorization

[APIKey](../README.md#APIKey), [AccountID](../README.md#AccountID)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="categoriesPut"></a>
# **categoriesPut**
> Category categoriesPut(id, category)



If no ID is specified a new category will be created!

### Example
```javascript
var InventoryClient = require('InventoryClient');
var defaultClient = InventoryClient.ApiClient.default;

// Configure API key authorization: APIKey
var APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';

// Configure API key authorization: AccountID
var AccountID = defaultClient.authentications['AccountID'];
AccountID.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AccountID.apiKeyPrefix = 'Token';

var apiInstance = new InventoryClient.DefaultApi();

var id = "id_example"; // String | category id to update.

var category = new InventoryClient.Category(); // Category | New category information.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.categoriesPut(id, category, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| category id to update. | 
 **category** | [**Category**](Category.md)| New category information. | 

### Return type

[**Category**](Category.md)

### Authorization

[APIKey](../README.md#APIKey), [AccountID](../README.md#AccountID)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="itemAddPost"></a>
# **itemAddPost**
> Item itemAddPost(item)



### Example
```javascript
var InventoryClient = require('InventoryClient');
var defaultClient = InventoryClient.ApiClient.default;

// Configure API key authorization: APIKey
var APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';

// Configure API key authorization: AccountID
var AccountID = defaultClient.authentications['AccountID'];
AccountID.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AccountID.apiKeyPrefix = 'Token';

var apiInstance = new InventoryClient.DefaultApi();

var item = new InventoryClient.Item(); // Item | Item to create.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.itemAddPost(item, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **item** | [**Item**](Item.md)| Item to create. | 

### Return type

[**Item**](Item.md)

### Authorization

[APIKey](../README.md#APIKey), [AccountID](../README.md#AccountID)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="itemAddbulkPost"></a>
# **itemAddbulkPost**
> Response itemAddbulkPost(items)



### Example
```javascript
var InventoryClient = require('InventoryClient');
var defaultClient = InventoryClient.ApiClient.default;

// Configure API key authorization: APIKey
var APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';

// Configure API key authorization: AccountID
var AccountID = defaultClient.authentications['AccountID'];
AccountID.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AccountID.apiKeyPrefix = 'Token';

var apiInstance = new InventoryClient.DefaultApi();

var items = [new InventoryClient.Item()]; // [Item] | Items to create.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.itemAddbulkPost(items, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **items** | [**[Item]**](Item.md)| Items to create. | 

### Return type

[**Response**](Response.md)

### Authorization

[APIKey](../README.md#APIKey), [AccountID](../README.md#AccountID)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="itemDelete"></a>
# **itemDelete**
> Response itemDelete(id)



### Example
```javascript
var InventoryClient = require('InventoryClient');
var defaultClient = InventoryClient.ApiClient.default;

// Configure API key authorization: APIKey
var APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';

// Configure API key authorization: AccountID
var AccountID = defaultClient.authentications['AccountID'];
AccountID.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AccountID.apiKeyPrefix = 'Token';

var apiInstance = new InventoryClient.DefaultApi();

var id = "id_example"; // String | item id to remove


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.itemDelete(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| item id to remove | 

### Return type

[**Response**](Response.md)

### Authorization

[APIKey](../README.md#APIKey), [AccountID](../README.md#AccountID)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="itemPut"></a>
# **itemPut**
> Response itemPut(id, item)



### Example
```javascript
var InventoryClient = require('InventoryClient');
var defaultClient = InventoryClient.ApiClient.default;

// Configure API key authorization: APIKey
var APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';

// Configure API key authorization: AccountID
var AccountID = defaultClient.authentications['AccountID'];
AccountID.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AccountID.apiKeyPrefix = 'Token';

var apiInstance = new InventoryClient.DefaultApi();

var id = "id_example"; // String | item id to update.

var item = new InventoryClient.Dictionary(); // Dictionary | New item information.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.itemPut(id, item, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| item id to update. | 
 **item** | [**Dictionary**](Dictionary.md)| New item information. | 

### Return type

[**Response**](Response.md)

### Authorization

[APIKey](../README.md#APIKey), [AccountID](../README.md#AccountID)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="itemsCountPost"></a>
# **itemsCountPost**
> &#39;Number&#39; itemsCountPost(opts)



### Example
```javascript
var InventoryClient = require('InventoryClient');
var defaultClient = InventoryClient.ApiClient.default;

// Configure API key authorization: APIKey
var APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';

// Configure API key authorization: AccountID
var AccountID = defaultClient.authentications['AccountID'];
AccountID.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AccountID.apiKeyPrefix = 'Token';

var apiInstance = new InventoryClient.DefaultApi();

var opts = { 
  'query': new InventoryClient.Dictionary() // Dictionary | Item to query against system.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.itemsCountPost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | [**Dictionary**](Dictionary.md)| Item to query against system. | [optional] 

### Return type

**&#39;Number&#39;**

### Authorization

[APIKey](../README.md#APIKey), [AccountID](../README.md#AccountID)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="itemsPost"></a>
# **itemsPost**
> [Item] itemsPost(opts)



### Example
```javascript
var InventoryClient = require('InventoryClient');
var defaultClient = InventoryClient.ApiClient.default;

// Configure API key authorization: APIKey
var APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';

// Configure API key authorization: AccountID
var AccountID = defaultClient.authentications['AccountID'];
AccountID.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AccountID.apiKeyPrefix = 'Token';

var apiInstance = new InventoryClient.DefaultApi();

var opts = { 
  'query': new InventoryClient.Dictionary() // Dictionary | Item to query against system.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.itemsPost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | [**Dictionary**](Dictionary.md)| Item to query against system. | [optional] 

### Return type

[**[Item]**](Item.md)

### Authorization

[APIKey](../README.md#APIKey), [AccountID](../README.md#AccountID)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="itemsallfieldsPost"></a>
# **itemsallfieldsPost**
> [Dictionary] itemsallfieldsPost(opts)



### Example
```javascript
var InventoryClient = require('InventoryClient');
var defaultClient = InventoryClient.ApiClient.default;

// Configure API key authorization: APIKey
var APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';

// Configure API key authorization: AccountID
var AccountID = defaultClient.authentications['AccountID'];
AccountID.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AccountID.apiKeyPrefix = 'Token';

var apiInstance = new InventoryClient.DefaultApi();

var opts = { 
  'query': new InventoryClient.Dictionary() // Dictionary | Item to query against system.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.itemsallfieldsPost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | [**Dictionary**](Dictionary.md)| Item to query against system. | [optional] 

### Return type

[**[Dictionary]**](Dictionary.md)

### Authorization

[APIKey](../README.md#APIKey), [AccountID](../README.md#AccountID)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="ordersPost"></a>
# **ordersPost**
> [Order] ordersPost(opts)



### Example
```javascript
var InventoryClient = require('InventoryClient');
var defaultClient = InventoryClient.ApiClient.default;

// Configure API key authorization: APIKey
var APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';

// Configure API key authorization: AccountID
var AccountID = defaultClient.authentications['AccountID'];
AccountID.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AccountID.apiKeyPrefix = 'Token';

var apiInstance = new InventoryClient.DefaultApi();

var opts = { 
  'query': new InventoryClient.Dictionary() // Dictionary | Order to query against system.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.ordersPost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | [**Dictionary**](Dictionary.md)| Order to query against system. | [optional] 

### Return type

[**[Order]**](Order.md)

### Authorization

[APIKey](../README.md#APIKey), [AccountID](../README.md#AccountID)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="queryPost"></a>
# **queryPost**
> [Item] queryPost(opts)



### Example
```javascript
var InventoryClient = require('InventoryClient');
var defaultClient = InventoryClient.ApiClient.default;

// Configure API key authorization: APIKey
var APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';

// Configure API key authorization: AccountID
var AccountID = defaultClient.authentications['AccountID'];
AccountID.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AccountID.apiKeyPrefix = 'Token';

var apiInstance = new InventoryClient.DefaultApi();

var opts = { 
  'page': 3.4, // Number | Current page index.
  'categoryid': "categoryid_example", // String | Get items under specified category id.
  'sort': "sort_example", // String | Comma delimited Sort string. ie ; +ordprice. Please use number based fields only
  'search': "search_example", // String | Performs a regex pattern match against the items within your account
  'minprice': 3.4, // Number | Min price in hundreds.
  'maxprice': 3.4, // Number | Max price in hudreds.
  'query': new InventoryClient.Dictionary() // Dictionary | Custom parameters to query against system.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.queryPost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**| Current page index. | [optional] 
 **categoryid** | **String**| Get items under specified category id. | [optional] 
 **sort** | **String**| Comma delimited Sort string. ie ; +ordprice. Please use number based fields only | [optional] 
 **search** | **String**| Performs a regex pattern match against the items within your account | [optional] 
 **minprice** | **Number**| Min price in hundreds. | [optional] 
 **maxprice** | **Number**| Max price in hudreds. | [optional] 
 **query** | [**Dictionary**](Dictionary.md)| Custom parameters to query against system. | [optional] 

### Return type

[**[Item]**](Item.md)

### Authorization

[APIKey](../README.md#APIKey), [AccountID](../README.md#AccountID)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="queryallfieldsPost"></a>
# **queryallfieldsPost**
> [Dictionary] queryallfieldsPost(opts)



### Example
```javascript
var InventoryClient = require('InventoryClient');
var defaultClient = InventoryClient.ApiClient.default;

// Configure API key authorization: APIKey
var APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';

// Configure API key authorization: AccountID
var AccountID = defaultClient.authentications['AccountID'];
AccountID.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AccountID.apiKeyPrefix = 'Token';

var apiInstance = new InventoryClient.DefaultApi();

var opts = { 
  'page': 3.4, // Number | Current page index.
  'categoryid': "categoryid_example", // String | Get items under specified category id.
  'sort': "sort_example", // String | Comma delimited Sort string. ie ; +ordprice. Please use number based fields only
  'search': "search_example", // String | Performs a regex pattern match against the items within your account
  'minprice': 3.4, // Number | Min price in hundreds.
  'maxprice': 3.4, // Number | Max price in hudreds.
  'query': new InventoryClient.Dictionary() // Dictionary | Custom parameters to query against system.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.queryallfieldsPost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**| Current page index. | [optional] 
 **categoryid** | **String**| Get items under specified category id. | [optional] 
 **sort** | **String**| Comma delimited Sort string. ie ; +ordprice. Please use number based fields only | [optional] 
 **search** | **String**| Performs a regex pattern match against the items within your account | [optional] 
 **minprice** | **Number**| Min price in hundreds. | [optional] 
 **maxprice** | **Number**| Max price in hudreds. | [optional] 
 **query** | [**Dictionary**](Dictionary.md)| Custom parameters to query against system. | [optional] 

### Return type

[**[Dictionary]**](Dictionary.md)

### Authorization

[APIKey](../README.md#APIKey), [AccountID](../README.md#AccountID)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="servicesDelete"></a>
# **servicesDelete**
> Response servicesDelete(id)



### Example
```javascript
var InventoryClient = require('InventoryClient');
var defaultClient = InventoryClient.ApiClient.default;

// Configure API key authorization: APIKey
var APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';

// Configure API key authorization: AccountID
var AccountID = defaultClient.authentications['AccountID'];
AccountID.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AccountID.apiKeyPrefix = 'Token';

var apiInstance = new InventoryClient.DefaultApi();

var id = "id_example"; // String | ID of the service to update


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.servicesDelete(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the service to update | 

### Return type

[**Response**](Response.md)

### Authorization

[APIKey](../README.md#APIKey), [AccountID](../README.md#AccountID)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="servicesGet"></a>
# **servicesGet**
> [Service] servicesGet()



### Example
```javascript
var InventoryClient = require('InventoryClient');
var defaultClient = InventoryClient.ApiClient.default;

// Configure API key authorization: APIKey
var APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';

// Configure API key authorization: AccountID
var AccountID = defaultClient.authentications['AccountID'];
AccountID.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AccountID.apiKeyPrefix = 'Token';

var apiInstance = new InventoryClient.DefaultApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.servicesGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[Service]**](Service.md)

### Authorization

[APIKey](../README.md#APIKey), [AccountID](../README.md#AccountID)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="servicesPost"></a>
# **servicesPost**
> Service servicesPost(service)



### Example
```javascript
var InventoryClient = require('InventoryClient');
var defaultClient = InventoryClient.ApiClient.default;

// Configure API key authorization: APIKey
var APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';

// Configure API key authorization: AccountID
var AccountID = defaultClient.authentications['AccountID'];
AccountID.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AccountID.apiKeyPrefix = 'Token';

var apiInstance = new InventoryClient.DefaultApi();

var service = new InventoryClient.Service(); // Service | Service to create.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.servicesPost(service, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **service** | [**Service**](Service.md)| Service to create. | 

### Return type

[**Service**](Service.md)

### Authorization

[APIKey](../README.md#APIKey), [AccountID](../README.md#AccountID)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="servicesPut"></a>
# **servicesPut**
> Response servicesPut(id, service)



### Example
```javascript
var InventoryClient = require('InventoryClient');
var defaultClient = InventoryClient.ApiClient.default;

// Configure API key authorization: APIKey
var APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';

// Configure API key authorization: AccountID
var AccountID = defaultClient.authentications['AccountID'];
AccountID.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AccountID.apiKeyPrefix = 'Token';

var apiInstance = new InventoryClient.DefaultApi();

var id = "id_example"; // String | ID of the service to update

var service = new InventoryClient.Service(); // Service | New service data to set.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.servicesPut(id, service, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the service to update | 
 **service** | [**Service**](Service.md)| New service data to set. | 

### Return type

[**Response**](Response.md)

### Authorization

[APIKey](../README.md#APIKey), [AccountID](../README.md#AccountID)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="writeDelete"></a>
# **writeDelete**
> Response writeDelete(opts)



### Example
```javascript
var InventoryClient = require('InventoryClient');
var defaultClient = InventoryClient.ApiClient.default;

// Configure API key authorization: APIKey
var APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';

// Configure API key authorization: AccountID
var AccountID = defaultClient.authentications['AccountID'];
AccountID.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AccountID.apiKeyPrefix = 'Token';

var apiInstance = new InventoryClient.DefaultApi();

var opts = { 
  'id': "id_example" // String | Will delete event attached to this serviceid
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.writeDelete(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Will delete event attached to this serviceid | [optional] 

### Return type

[**Response**](Response.md)

### Authorization

[APIKey](../README.md#APIKey), [AccountID](../README.md#AccountID)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="writePost"></a>
# **writePost**
> Response writePost(eventRequest)



Will ovveride the current event of the specified service.

### Example
```javascript
var InventoryClient = require('InventoryClient');
var defaultClient = InventoryClient.ApiClient.default;

// Configure API key authorization: APIKey
var APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';

// Configure API key authorization: AccountID
var AccountID = defaultClient.authentications['AccountID'];
AccountID.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AccountID.apiKeyPrefix = 'Token';

var apiInstance = new InventoryClient.DefaultApi();

var eventRequest = new InventoryClient.EventRequest(); // EventRequest | Event to upload


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.writePost(eventRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **eventRequest** | [**EventRequest**](EventRequest.md)| Event to upload | 

### Return type

[**Response**](Response.md)

### Authorization

[APIKey](../README.md#APIKey), [AccountID](../README.md#AccountID)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

