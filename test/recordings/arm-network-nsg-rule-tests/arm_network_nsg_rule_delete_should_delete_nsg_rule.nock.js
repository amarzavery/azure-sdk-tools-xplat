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
  process.env['AZURE_VM_TEST_LOCATION'] = 'westus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nsg-rule/providers/Microsoft.Network/networkSecurityGroups/test-nsg?api-version=2017-03-01')
  .reply(200, "{\r\n  \"name\": \"test-nsg\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nsg-rule/providers/Microsoft.Network/networkSecurityGroups/test-nsg\",\r\n  \"etag\": \"W/\\\"6eb4bfa2-98e3-4439-8c20-8a5f8f5cd81c\\\"\",\r\n  \"type\": \"Microsoft.Network/networkSecurityGroups\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"e2b84a1c-c950-436d-9576-2b6e6a141a51\",\r\n    \"securityRules\": [\r\n      {\r\n        \"name\": \"test-rule\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nsg-rule/providers/Microsoft.Network/networkSecurityGroups/test-nsg/securityRules/test-rule\",\r\n        \"etag\": \"W/\\\"6eb4bfa2-98e3-4439-8c20-8a5f8f5cd81c\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"description\": \"foobarbaz\",\r\n          \"protocol\": \"Udp\",\r\n          \"sourcePortRange\": \"*\",\r\n          \"destinationPortRange\": \"300-400\",\r\n          \"sourceAddressPrefix\": \"VirtualNetwork\",\r\n          \"destinationAddressPrefix\": \"*\",\r\n          \"access\": \"Deny\",\r\n          \"priority\": 300,\r\n          \"direction\": \"Outbound\"\r\n        }\r\n      }\r\n    ],\r\n    \"defaultSecurityRules\": [\r\n      {\r\n        \"name\": \"AllowVnetInBound\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nsg-rule/providers/Microsoft.Network/networkSecurityGroups/test-nsg/defaultSecurityRules/AllowVnetInBound\",\r\n        \"etag\": \"W/\\\"6eb4bfa2-98e3-4439-8c20-8a5f8f5cd81c\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"description\": \"Allow inbound traffic from all VMs in VNET\",\r\n          \"protocol\": \"*\",\r\n          \"sourcePortRange\": \"*\",\r\n          \"destinationPortRange\": \"*\",\r\n          \"sourceAddressPrefix\": \"VirtualNetwork\",\r\n          \"destinationAddressPrefix\": \"VirtualNetwork\",\r\n          \"access\": \"Allow\",\r\n          \"priority\": 65000,\r\n          \"direction\": \"Inbound\"\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"AllowAzureLoadBalancerInBound\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nsg-rule/providers/Microsoft.Network/networkSecurityGroups/test-nsg/defaultSecurityRules/AllowAzureLoadBalancerInBound\",\r\n        \"etag\": \"W/\\\"6eb4bfa2-98e3-4439-8c20-8a5f8f5cd81c\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"description\": \"Allow inbound traffic from azure load balancer\",\r\n          \"protocol\": \"*\",\r\n          \"sourcePortRange\": \"*\",\r\n          \"destinationPortRange\": \"*\",\r\n          \"sourceAddressPrefix\": \"AzureLoadBalancer\",\r\n          \"destinationAddressPrefix\": \"*\",\r\n          \"access\": \"Allow\",\r\n          \"priority\": 65001,\r\n          \"direction\": \"Inbound\"\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"DenyAllInBound\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nsg-rule/providers/Microsoft.Network/networkSecurityGroups/test-nsg/defaultSecurityRules/DenyAllInBound\",\r\n        \"etag\": \"W/\\\"6eb4bfa2-98e3-4439-8c20-8a5f8f5cd81c\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"description\": \"Deny all inbound traffic\",\r\n          \"protocol\": \"*\",\r\n          \"sourcePortRange\": \"*\",\r\n          \"destinationPortRange\": \"*\",\r\n          \"sourceAddressPrefix\": \"*\",\r\n          \"destinationAddressPrefix\": \"*\",\r\n          \"access\": \"Deny\",\r\n          \"priority\": 65500,\r\n          \"direction\": \"Inbound\"\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"AllowVnetOutBound\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nsg-rule/providers/Microsoft.Network/networkSecurityGroups/test-nsg/defaultSecurityRules/AllowVnetOutBound\",\r\n        \"etag\": \"W/\\\"6eb4bfa2-98e3-4439-8c20-8a5f8f5cd81c\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"description\": \"Allow outbound traffic from all VMs to all VMs in VNET\",\r\n          \"protocol\": \"*\",\r\n          \"sourcePortRange\": \"*\",\r\n          \"destinationPortRange\": \"*\",\r\n          \"sourceAddressPrefix\": \"VirtualNetwork\",\r\n          \"destinationAddressPrefix\": \"VirtualNetwork\",\r\n          \"access\": \"Allow\",\r\n          \"priority\": 65000,\r\n          \"direction\": \"Outbound\"\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"AllowInternetOutBound\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nsg-rule/providers/Microsoft.Network/networkSecurityGroups/test-nsg/defaultSecurityRules/AllowInternetOutBound\",\r\n        \"etag\": \"W/\\\"6eb4bfa2-98e3-4439-8c20-8a5f8f5cd81c\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"description\": \"Allow outbound traffic from all VMs to Internet\",\r\n          \"protocol\": \"*\",\r\n          \"sourcePortRange\": \"*\",\r\n          \"destinationPortRange\": \"*\",\r\n          \"sourceAddressPrefix\": \"*\",\r\n          \"destinationAddressPrefix\": \"Internet\",\r\n          \"access\": \"Allow\",\r\n          \"priority\": 65001,\r\n          \"direction\": \"Outbound\"\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"DenyAllOutBound\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nsg-rule/providers/Microsoft.Network/networkSecurityGroups/test-nsg/defaultSecurityRules/DenyAllOutBound\",\r\n        \"etag\": \"W/\\\"6eb4bfa2-98e3-4439-8c20-8a5f8f5cd81c\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"description\": \"Deny all outbound traffic\",\r\n          \"protocol\": \"*\",\r\n          \"sourcePortRange\": \"*\",\r\n          \"destinationPortRange\": \"*\",\r\n          \"sourceAddressPrefix\": \"*\",\r\n          \"destinationAddressPrefix\": \"*\",\r\n          \"access\": \"Deny\",\r\n          \"priority\": 65500,\r\n          \"direction\": \"Outbound\"\r\n        }\r\n      }\r\n    ]\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '5850',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"6eb4bfa2-98e3-4439-8c20-8a5f8f5cd81c"',
  'x-ms-request-id': '10702e77-3e02-42cb-81f7-8cbc07989937',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14992',
  'x-ms-correlation-request-id': 'a17043b1-899c-4c3d-a0c7-fa65d61bb1b8',
  'x-ms-routing-request-id': 'WESTEUROPE:20161207T183353Z:a17043b1-899c-4c3d-a0c7-fa65d61bb1b8',
  date: 'Wed, 07 Dec 2016 18:33:53 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nsg-rule/providers/Microsoft.Network/networkSecurityGroups/test-nsg/securityRules/test-rule?api-version=2017-03-01')
  .reply(200, "{\r\n  \"name\": \"test-rule\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nsg-rule/providers/Microsoft.Network/networkSecurityGroups/test-nsg/securityRules/test-rule\",\r\n  \"etag\": \"W/\\\"6eb4bfa2-98e3-4439-8c20-8a5f8f5cd81c\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"description\": \"foobarbaz\",\r\n    \"protocol\": \"Udp\",\r\n    \"sourcePortRange\": \"*\",\r\n    \"destinationPortRange\": \"300-400\",\r\n    \"sourceAddressPrefix\": \"VirtualNetwork\",\r\n    \"destinationAddressPrefix\": \"*\",\r\n    \"access\": \"Deny\",\r\n    \"priority\": 300,\r\n    \"direction\": \"Outbound\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '614',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"6eb4bfa2-98e3-4439-8c20-8a5f8f5cd81c"',
  'x-ms-request-id': 'cfd698c9-8165-4dea-954b-d75ceeb128c7',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-correlation-request-id': '71ada258-bc2b-4708-843f-d63ef61f564a',
  'x-ms-routing-request-id': 'WESTEUROPE:20161207T183354Z:71ada258-bc2b-4708-843f-d63ef61f564a',
  date: 'Wed, 07 Dec 2016 18:33:54 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nsg-rule/providers/Microsoft.Network/networkSecurityGroups/test-nsg/securityRules/test-rule?api-version=2017-03-01')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus.validation/operationResults/42af0199-3105-4b9b-82b4-2d6f5bf8908a?api-version=2017-03-01',
  'retry-after': '10',
  'x-ms-request-id': '42af0199-3105-4b9b-82b4-2d6f5bf8908a',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus.validation/operations/42af0199-3105-4b9b-82b4-2d6f5bf8908a?api-version=2017-03-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '22b9e0f0-a89a-4de7-8a0a-78e4d23c1289',
  'x-ms-routing-request-id': 'WESTEUROPE:20161207T183358Z:22b9e0f0-a89a-4de7-8a0a-78e4d23c1289',
  date: 'Wed, 07 Dec 2016 18:33:57 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus.validation/operations/42af0199-3105-4b9b-82b4-2d6f5bf8908a?api-version=2017-03-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'e5439afe-d57c-4543-b643-236b2a3096c4',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14989',
  'x-ms-correlation-request-id': 'f9335579-d8c4-4fc1-bbd0-c8597a58860c',
  'x-ms-routing-request-id': 'WESTEUROPE:20161207T183429Z:f9335579-d8c4-4fc1-bbd0-c8597a58860c',
  date: 'Wed, 07 Dec 2016 18:34:29 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nsg-rule/providers/Microsoft.Network/networkSecurityGroups/test-nsg?api-version=2017-03-01')
  .reply(200, "{\r\n  \"name\": \"test-nsg\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nsg-rule/providers/Microsoft.Network/networkSecurityGroups/test-nsg\",\r\n  \"etag\": \"W/\\\"4e479736-0bb7-4b81-baf0-75ed9d065bd0\\\"\",\r\n  \"type\": \"Microsoft.Network/networkSecurityGroups\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"e2b84a1c-c950-436d-9576-2b6e6a141a51\",\r\n    \"securityRules\": [],\r\n    \"defaultSecurityRules\": [\r\n      {\r\n        \"name\": \"AllowVnetInBound\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nsg-rule/providers/Microsoft.Network/networkSecurityGroups/test-nsg/defaultSecurityRules/AllowVnetInBound\",\r\n        \"etag\": \"W/\\\"4e479736-0bb7-4b81-baf0-75ed9d065bd0\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"description\": \"Allow inbound traffic from all VMs in VNET\",\r\n          \"protocol\": \"*\",\r\n          \"sourcePortRange\": \"*\",\r\n          \"destinationPortRange\": \"*\",\r\n          \"sourceAddressPrefix\": \"VirtualNetwork\",\r\n          \"destinationAddressPrefix\": \"VirtualNetwork\",\r\n          \"access\": \"Allow\",\r\n          \"priority\": 65000,\r\n          \"direction\": \"Inbound\"\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"AllowAzureLoadBalancerInBound\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nsg-rule/providers/Microsoft.Network/networkSecurityGroups/test-nsg/defaultSecurityRules/AllowAzureLoadBalancerInBound\",\r\n        \"etag\": \"W/\\\"4e479736-0bb7-4b81-baf0-75ed9d065bd0\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"description\": \"Allow inbound traffic from azure load balancer\",\r\n          \"protocol\": \"*\",\r\n          \"sourcePortRange\": \"*\",\r\n          \"destinationPortRange\": \"*\",\r\n          \"sourceAddressPrefix\": \"AzureLoadBalancer\",\r\n          \"destinationAddressPrefix\": \"*\",\r\n          \"access\": \"Allow\",\r\n          \"priority\": 65001,\r\n          \"direction\": \"Inbound\"\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"DenyAllInBound\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nsg-rule/providers/Microsoft.Network/networkSecurityGroups/test-nsg/defaultSecurityRules/DenyAllInBound\",\r\n        \"etag\": \"W/\\\"4e479736-0bb7-4b81-baf0-75ed9d065bd0\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"description\": \"Deny all inbound traffic\",\r\n          \"protocol\": \"*\",\r\n          \"sourcePortRange\": \"*\",\r\n          \"destinationPortRange\": \"*\",\r\n          \"sourceAddressPrefix\": \"*\",\r\n          \"destinationAddressPrefix\": \"*\",\r\n          \"access\": \"Deny\",\r\n          \"priority\": 65500,\r\n          \"direction\": \"Inbound\"\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"AllowVnetOutBound\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nsg-rule/providers/Microsoft.Network/networkSecurityGroups/test-nsg/defaultSecurityRules/AllowVnetOutBound\",\r\n        \"etag\": \"W/\\\"4e479736-0bb7-4b81-baf0-75ed9d065bd0\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"description\": \"Allow outbound traffic from all VMs to all VMs in VNET\",\r\n          \"protocol\": \"*\",\r\n          \"sourcePortRange\": \"*\",\r\n          \"destinationPortRange\": \"*\",\r\n          \"sourceAddressPrefix\": \"VirtualNetwork\",\r\n          \"destinationAddressPrefix\": \"VirtualNetwork\",\r\n          \"access\": \"Allow\",\r\n          \"priority\": 65000,\r\n          \"direction\": \"Outbound\"\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"AllowInternetOutBound\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nsg-rule/providers/Microsoft.Network/networkSecurityGroups/test-nsg/defaultSecurityRules/AllowInternetOutBound\",\r\n        \"etag\": \"W/\\\"4e479736-0bb7-4b81-baf0-75ed9d065bd0\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"description\": \"Allow outbound traffic from all VMs to Internet\",\r\n          \"protocol\": \"*\",\r\n          \"sourcePortRange\": \"*\",\r\n          \"destinationPortRange\": \"*\",\r\n          \"sourceAddressPrefix\": \"*\",\r\n          \"destinationAddressPrefix\": \"Internet\",\r\n          \"access\": \"Allow\",\r\n          \"priority\": 65001,\r\n          \"direction\": \"Outbound\"\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"DenyAllOutBound\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nsg-rule/providers/Microsoft.Network/networkSecurityGroups/test-nsg/defaultSecurityRules/DenyAllOutBound\",\r\n        \"etag\": \"W/\\\"4e479736-0bb7-4b81-baf0-75ed9d065bd0\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"description\": \"Deny all outbound traffic\",\r\n          \"protocol\": \"*\",\r\n          \"sourcePortRange\": \"*\",\r\n          \"destinationPortRange\": \"*\",\r\n          \"sourceAddressPrefix\": \"*\",\r\n          \"destinationAddressPrefix\": \"*\",\r\n          \"access\": \"Deny\",\r\n          \"priority\": 65500,\r\n          \"direction\": \"Outbound\"\r\n        }\r\n      }\r\n    ]\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '5126',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"4e479736-0bb7-4b81-baf0-75ed9d065bd0"',
  'x-ms-request-id': '07e16dc1-9b0b-4475-a39b-4620727b2fc2',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14968',
  'x-ms-correlation-request-id': '6550fd51-54cc-4d73-8ee4-28f385e48bea',
  'x-ms-routing-request-id': 'WESTEUROPE:20161207T183430Z:6550fd51-54cc-4d73-8ee4-28f385e48bea',
  date: 'Wed, 07 Dec 2016 18:34:30 GMT' });
 return result; }]];