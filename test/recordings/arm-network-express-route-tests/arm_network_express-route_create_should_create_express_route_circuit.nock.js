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
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourcegroups/xplat-test-express-route-circuit?api-version=2016-09-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceGroupNotFound\",\"message\":\"Resource group 'xplat-test-express-route-circuit' could not be found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-ratelimit-remaining-subscription-reads': '14968',
  'x-ms-request-id': '971d5d6d-c104-429a-85fa-1c0bfe1af936',
  'x-ms-correlation-request-id': '971d5d6d-c104-429a-85fa-1c0bfe1af936',
  'x-ms-routing-request-id': 'WESTEUROPE:20161207T143156Z:971d5d6d-c104-429a-85fa-1c0bfe1af936',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 07 Dec 2016 14:31:56 GMT',
  'content-length': '124' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourcegroups/xplat-test-express-route-circuit?api-version=2016-09-01', '*')
  .reply(201, "{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-express-route-circuit\",\"name\":\"xplat-test-express-route-circuit\",\"location\":\"eastus\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '227',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1190',
  'x-ms-request-id': '78e88ecf-017e-4b1e-b23c-9965d31e6ed7',
  'x-ms-correlation-request-id': '78e88ecf-017e-4b1e-b23c-9965d31e6ed7',
  'x-ms-routing-request-id': 'WESTEUROPE:20161207T143158Z:78e88ecf-017e-4b1e-b23c-9965d31e6ed7',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 07 Dec 2016 14:31:57 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-express-route-circuit/providers/Microsoft.Network/expressRouteCircuits/test-circuit?api-version=2017-03-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/expressRouteCircuits/test-circuit' under resource group 'xplat-test-express-route-circuit' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '601bb1e2-ea6c-4141-a49e-6c86ce27c7ea',
  'x-ms-correlation-request-id': '601bb1e2-ea6c-4141-a49e-6c86ce27c7ea',
  'x-ms-routing-request-id': 'WESTEUROPE:20161207T143159Z:601bb1e2-ea6c-4141-a49e-6c86ce27c7ea',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 07 Dec 2016 14:31:58 GMT',
  'content-length': '187' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-express-route-circuit/providers/Microsoft.Network/expressRouteCircuits/test-circuit?api-version=2017-03-01', '*')
  .reply(201, "{\r\n  \"name\": \"test-circuit\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-express-route-circuit/providers/Microsoft.Network/expressRouteCircuits/test-circuit\",\r\n  \"etag\": \"W/\\\"e4d47963-f6e3-4f51-a6d7-8424e17003b4\\\"\",\r\n  \"type\": \"Microsoft.Network/expressRouteCircuits\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {\r\n    \"tag1\": \"aaa\",\r\n    \"tag2\": \"bbb\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"resourceGuid\": \"6a72a948-3f93-4e4c-b1a3-aaa90168814b\",\r\n    \"peerings\": [],\r\n    \"authorizations\": [],\r\n    \"serviceProviderProperties\": {\r\n      \"serviceProviderName\": \"InterCloud\",\r\n      \"peeringLocation\": \"London\",\r\n      \"bandwidthInMbps\": 100\r\n    },\r\n    \"circuitProvisioningState\": \"Disabled\",\r\n    \"allowClassicOperations\": false,\r\n    \"serviceKey\": \"00000000-0000-0000-0000-000000000000\",\r\n    \"serviceProviderProvisioningState\": \"NotProvisioned\"\r\n  },\r\n  \"sku\": {\r\n    \"name\": \"Standard_MeteredData\",\r\n    \"tier\": \"Standard\",\r\n    \"family\": \"MeteredData\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1032',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': '09f71784-3ddb-40b3-ab46-f8344c4eb9cc',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/eastus/operations/09f71784-3ddb-40b3-ab46-f8344c4eb9cc?api-version=2017-03-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1192',
  'x-ms-correlation-request-id': 'f47ccffe-0715-457c-a14b-43566b9c585d',
  'x-ms-routing-request-id': 'WESTEUROPE:20161207T143201Z:f47ccffe-0715-457c-a14b-43566b9c585d',
  date: 'Wed, 07 Dec 2016 14:32:01 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/eastus/operations/09f71784-3ddb-40b3-ab46-f8344c4eb9cc?api-version=2017-03-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'cca89328-eedb-4767-a5bb-9fc5e733c241',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14971',
  'x-ms-correlation-request-id': '1c48c423-3d9a-49ba-93e9-c527a3f00b82',
  'x-ms-routing-request-id': 'WESTEUROPE:20161207T143232Z:1c48c423-3d9a-49ba-93e9-c527a3f00b82',
  date: 'Wed, 07 Dec 2016 14:32:32 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-express-route-circuit/providers/Microsoft.Network/expressRouteCircuits/test-circuit?api-version=2017-03-01')
  .reply(200, "{\r\n  \"name\": \"test-circuit\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-express-route-circuit/providers/Microsoft.Network/expressRouteCircuits/test-circuit\",\r\n  \"etag\": \"W/\\\"d062a5cb-3e41-406b-b188-b35b43dc4663\\\"\",\r\n  \"type\": \"Microsoft.Network/expressRouteCircuits\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {\r\n    \"tag1\": \"aaa\",\r\n    \"tag2\": \"bbb\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"6a72a948-3f93-4e4c-b1a3-aaa90168814b\",\r\n    \"peerings\": [],\r\n    \"authorizations\": [],\r\n    \"serviceProviderProperties\": {\r\n      \"serviceProviderName\": \"InterCloud\",\r\n      \"peeringLocation\": \"London\",\r\n      \"bandwidthInMbps\": 100\r\n    },\r\n    \"circuitProvisioningState\": \"Enabled\",\r\n    \"allowClassicOperations\": false,\r\n    \"gatewayManagerEtag\": \"\",\r\n    \"serviceKey\": \"36e16bd4-64d1-4784-8622-cb54ffc44032\",\r\n    \"serviceProviderProvisioningState\": \"NotProvisioned\"\r\n  },\r\n  \"sku\": {\r\n    \"name\": \"Standard_MeteredData\",\r\n    \"tier\": \"Standard\",\r\n    \"family\": \"MeteredData\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1063',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'd368b6bc-dfce-4a30-8acd-b0e338fe2645',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14968',
  'x-ms-correlation-request-id': '1beaa337-cb84-4702-aa1a-a9b38ac00b18',
  'x-ms-routing-request-id': 'WESTEUROPE:20161207T143233Z:1beaa337-cb84-4702-aa1a-a9b38ac00b18',
  date: 'Wed, 07 Dec 2016 14:32:33 GMT' });
 return result; }]];
