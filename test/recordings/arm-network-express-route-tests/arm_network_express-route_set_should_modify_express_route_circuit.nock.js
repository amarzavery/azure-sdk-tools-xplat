// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '2c224e7e-3ef5-431d-a57b-e71f4662e3a6',
    name: 'Node CLI Test',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: ['mobileservice'],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'eastus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-express-route-circuit/providers/Microsoft.Network/expressRouteCircuits/test-circuit?api-version=2017-03-01')
  .reply(200, "{\r\n  \"name\": \"test-circuit\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-express-route-circuit/providers/Microsoft.Network/expressRouteCircuits/test-circuit\",\r\n  \"etag\": \"W/\\\"d062a5cb-3e41-406b-b188-b35b43dc4663\\\"\",\r\n  \"type\": \"Microsoft.Network/expressRouteCircuits\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {\r\n    \"tag1\": \"aaa\",\r\n    \"tag2\": \"bbb\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"6a72a948-3f93-4e4c-b1a3-aaa90168814b\",\r\n    \"peerings\": [],\r\n    \"authorizations\": [],\r\n    \"serviceProviderProperties\": {\r\n      \"serviceProviderName\": \"InterCloud\",\r\n      \"peeringLocation\": \"London\",\r\n      \"bandwidthInMbps\": 100\r\n    },\r\n    \"circuitProvisioningState\": \"Enabled\",\r\n    \"allowClassicOperations\": false,\r\n    \"gatewayManagerEtag\": \"\",\r\n    \"serviceKey\": \"36e16bd4-64d1-4784-8622-cb54ffc44032\",\r\n    \"serviceProviderProvisioningState\": \"NotProvisioned\"\r\n  },\r\n  \"sku\": {\r\n    \"name\": \"Standard_MeteredData\",\r\n    \"tier\": \"Standard\",\r\n    \"family\": \"MeteredData\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1063',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '7bdcbd52-a36f-4a52-a421-f21b85adb315',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14971',
  'x-ms-correlation-request-id': '3fa4e1f2-085c-47a4-b641-217e812ca791',
  'x-ms-routing-request-id': 'WESTEUROPE:20161207T143240Z:3fa4e1f2-085c-47a4-b641-217e812ca791',
  date: 'Wed, 07 Dec 2016 14:32:39 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-express-route-circuit/providers/Microsoft.Network/expressRouteCircuits/test-circuit?api-version=2017-03-01', '*')
  .reply(200, "{\r\n  \"name\": \"test-circuit\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-express-route-circuit/providers/Microsoft.Network/expressRouteCircuits/test-circuit\",\r\n  \"etag\": \"W/\\\"9fe3a260-a85c-4e6a-8f5a-3a0409b0f8df\\\"\",\r\n  \"type\": \"Microsoft.Network/expressRouteCircuits\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {\r\n    \"tag1\": \"aaa\",\r\n    \"tag2\": \"bbb\",\r\n    \"tag3\": \"ccc\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"resourceGuid\": \"6a72a948-3f93-4e4c-b1a3-aaa90168814b\",\r\n    \"peerings\": [],\r\n    \"authorizations\": [],\r\n    \"serviceProviderProperties\": {\r\n      \"serviceProviderName\": \"InterCloud\",\r\n      \"peeringLocation\": \"London\",\r\n      \"bandwidthInMbps\": 500\r\n    },\r\n    \"circuitProvisioningState\": \"Disabled\",\r\n    \"allowClassicOperations\": false,\r\n    \"gatewayManagerEtag\": \"\",\r\n    \"serviceKey\": \"36e16bd4-64d1-4784-8622-cb54ffc44032\",\r\n    \"serviceProviderProvisioningState\": \"NotProvisioned\"\r\n  },\r\n  \"sku\": {\r\n    \"name\": \"Premium_UnlimitedData\",\r\n    \"tier\": \"Premium\",\r\n    \"family\": \"UnlimitedData\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1085',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': 'd110d6ba-524b-487e-8098-5b3ca48272ae',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/eastus/operations/d110d6ba-524b-487e-8098-5b3ca48272ae?api-version=2017-03-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1191',
  'x-ms-correlation-request-id': '06b14007-276f-4f8a-aa00-1f3e1b3c5390',
  'x-ms-routing-request-id': 'WESTEUROPE:20161207T143242Z:06b14007-276f-4f8a-aa00-1f3e1b3c5390',
  date: 'Wed, 07 Dec 2016 14:32:41 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/eastus/operations/d110d6ba-524b-487e-8098-5b3ca48272ae?api-version=2017-03-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'b21367f9-beee-4f53-9b80-a53188fa5b5b',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14970',
  'x-ms-correlation-request-id': 'ec7be9c7-ba96-4792-80e0-1675acf565bd',
  'x-ms-routing-request-id': 'WESTEUROPE:20161207T143313Z:ec7be9c7-ba96-4792-80e0-1675acf565bd',
  date: 'Wed, 07 Dec 2016 14:33:12 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-express-route-circuit/providers/Microsoft.Network/expressRouteCircuits/test-circuit?api-version=2017-03-01')
  .reply(200, "{\r\n  \"name\": \"test-circuit\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-express-route-circuit/providers/Microsoft.Network/expressRouteCircuits/test-circuit\",\r\n  \"etag\": \"W/\\\"0e06b75e-3ecf-4626-84c9-f54bc8c3c579\\\"\",\r\n  \"type\": \"Microsoft.Network/expressRouteCircuits\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {\r\n    \"tag1\": \"aaa\",\r\n    \"tag2\": \"bbb\",\r\n    \"tag3\": \"ccc\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"6a72a948-3f93-4e4c-b1a3-aaa90168814b\",\r\n    \"peerings\": [],\r\n    \"authorizations\": [],\r\n    \"serviceProviderProperties\": {\r\n      \"serviceProviderName\": \"InterCloud\",\r\n      \"peeringLocation\": \"London\",\r\n      \"bandwidthInMbps\": 500\r\n    },\r\n    \"circuitProvisioningState\": \"Enabled\",\r\n    \"allowClassicOperations\": false,\r\n    \"gatewayManagerEtag\": \"\",\r\n    \"serviceKey\": \"36e16bd4-64d1-4784-8622-cb54ffc44032\",\r\n    \"serviceProviderProvisioningState\": \"NotProvisioned\"\r\n  },\r\n  \"sku\": {\r\n    \"name\": \"Premium_UnlimitedData\",\r\n    \"tier\": \"Premium\",\r\n    \"family\": \"UnlimitedData\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1085',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '3d088d4e-564b-4c15-a37e-d874c2453231',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14902',
  'x-ms-correlation-request-id': '48113cf3-becf-4225-95a9-71ece1c0f7c7',
  'x-ms-routing-request-id': 'WESTEUROPE:20161207T143313Z:48113cf3-becf-4225-95a9-71ece1c0f7c7',
  date: 'Wed, 07 Dec 2016 14:33:13 GMT' });
 return result; }]];
