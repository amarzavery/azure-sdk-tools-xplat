// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '947d47b4-7883-4bb9-9d85-c5e8e2f572ce',
    name: 'nrptest58.westus.validation.partner',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: [],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'westus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-nsg/providers/Microsoft.Network/networkSecurityGroups/networkSecurityGroupName?api-version=2017-09-01')
  .reply(200, "{\r\n  \"name\": \"networkSecurityGroupName\",\r\n  \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-nsg/providers/Microsoft.Network/networkSecurityGroups/networkSecurityGroupName\",\r\n  \"etag\": \"W/\\\"f930d461-c46b-4542-bce9-1d92639db1c8\\\"\",\r\n  \"type\": \"Microsoft.Network/networkSecurityGroups\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"a5e4fcb0-2591-47b9-b491-ce09f1c777c6\",\r\n    \"securityRules\": [],\r\n    \"defaultSecurityRules\": [\r\n      {\r\n        \"name\": \"AllowVnetInBound\",\r\n        \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-nsg/providers/Microsoft.Network/networkSecurityGroups/networkSecurityGroupName/defaultSecurityRules/AllowVnetInBound\",\r\n        \"etag\": \"W/\\\"f930d461-c46b-4542-bce9-1d92639db1c8\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"description\": \"Allow inbound traffic from all VMs in VNET\",\r\n          \"protocol\": \"*\",\r\n          \"sourcePortRange\": \"*\",\r\n          \"destinationPortRange\": \"*\",\r\n          \"sourceAddressPrefix\": \"VirtualNetwork\",\r\n          \"destinationAddressPrefix\": \"VirtualNetwork\",\r\n          \"access\": \"Allow\",\r\n          \"priority\": 65000,\r\n          \"direction\": \"Inbound\",\r\n          \"sourcePortRanges\": [],\r\n          \"destinationPortRanges\": [],\r\n          \"sourceAddressPrefixes\": [],\r\n          \"destinationAddressPrefixes\": []\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"AllowAzureLoadBalancerInBound\",\r\n        \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-nsg/providers/Microsoft.Network/networkSecurityGroups/networkSecurityGroupName/defaultSecurityRules/AllowAzureLoadBalancerInBound\",\r\n        \"etag\": \"W/\\\"f930d461-c46b-4542-bce9-1d92639db1c8\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"description\": \"Allow inbound traffic from azure load balancer\",\r\n          \"protocol\": \"*\",\r\n          \"sourcePortRange\": \"*\",\r\n          \"destinationPortRange\": \"*\",\r\n          \"sourceAddressPrefix\": \"AzureLoadBalancer\",\r\n          \"destinationAddressPrefix\": \"*\",\r\n          \"access\": \"Allow\",\r\n          \"priority\": 65001,\r\n          \"direction\": \"Inbound\",\r\n          \"sourcePortRanges\": [],\r\n          \"destinationPortRanges\": [],\r\n          \"sourceAddressPrefixes\": [],\r\n          \"destinationAddressPrefixes\": []\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"DenyAllInBound\",\r\n        \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-nsg/providers/Microsoft.Network/networkSecurityGroups/networkSecurityGroupName/defaultSecurityRules/DenyAllInBound\",\r\n        \"etag\": \"W/\\\"f930d461-c46b-4542-bce9-1d92639db1c8\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"description\": \"Deny all inbound traffic\",\r\n          \"protocol\": \"*\",\r\n          \"sourcePortRange\": \"*\",\r\n          \"destinationPortRange\": \"*\",\r\n          \"sourceAddressPrefix\": \"*\",\r\n          \"destinationAddressPrefix\": \"*\",\r\n          \"access\": \"Deny\",\r\n          \"priority\": 65500,\r\n          \"direction\": \"Inbound\",\r\n          \"sourcePortRanges\": [],\r\n          \"destinationPortRanges\": [],\r\n          \"sourceAddressPrefixes\": [],\r\n          \"destinationAddressPrefixes\": []\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"AllowVnetOutBound\",\r\n        \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-nsg/providers/Microsoft.Network/networkSecurityGroups/networkSecurityGroupName/defaultSecurityRules/AllowVnetOutBound\",\r\n        \"etag\": \"W/\\\"f930d461-c46b-4542-bce9-1d92639db1c8\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"description\": \"Allow outbound traffic from all VMs to all VMs in VNET\",\r\n          \"protocol\": \"*\",\r\n          \"sourcePortRange\": \"*\",\r\n          \"destinationPortRange\": \"*\",\r\n          \"sourceAddressPrefix\": \"VirtualNetwork\",\r\n          \"destinationAddressPrefix\": \"VirtualNetwork\",\r\n          \"access\": \"Allow\",\r\n          \"priority\": 65000,\r\n          \"direction\": \"Outbound\",\r\n          \"sourcePortRanges\": [],\r\n          \"destinationPortRanges\": [],\r\n          \"sourceAddressPrefixes\": [],\r\n          \"destinationAddressPrefixes\": []\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"AllowInternetOutBound\",\r\n        \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-nsg/providers/Microsoft.Network/networkSecurityGroups/networkSecurityGroupName/defaultSecurityRules/AllowInternetOutBound\",\r\n        \"etag\": \"W/\\\"f930d461-c46b-4542-bce9-1d92639db1c8\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"description\": \"Allow outbound traffic from all VMs to Internet\",\r\n          \"protocol\": \"*\",\r\n          \"sourcePortRange\": \"*\",\r\n          \"destinationPortRange\": \"*\",\r\n          \"sourceAddressPrefix\": \"*\",\r\n          \"destinationAddressPrefix\": \"Internet\",\r\n          \"access\": \"Allow\",\r\n          \"priority\": 65001,\r\n          \"direction\": \"Outbound\",\r\n          \"sourcePortRanges\": [],\r\n          \"destinationPortRanges\": [],\r\n          \"sourceAddressPrefixes\": [],\r\n          \"destinationAddressPrefixes\": []\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"DenyAllOutBound\",\r\n        \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-nsg/providers/Microsoft.Network/networkSecurityGroups/networkSecurityGroupName/defaultSecurityRules/DenyAllOutBound\",\r\n        \"etag\": \"W/\\\"f930d461-c46b-4542-bce9-1d92639db1c8\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"description\": \"Deny all outbound traffic\",\r\n          \"protocol\": \"*\",\r\n          \"sourcePortRange\": \"*\",\r\n          \"destinationPortRange\": \"*\",\r\n          \"sourceAddressPrefix\": \"*\",\r\n          \"destinationAddressPrefix\": \"*\",\r\n          \"access\": \"Deny\",\r\n          \"priority\": 65500,\r\n          \"direction\": \"Outbound\",\r\n          \"sourcePortRanges\": [],\r\n          \"destinationPortRanges\": [],\r\n          \"sourceAddressPrefixes\": [],\r\n          \"destinationAddressPrefixes\": []\r\n        }\r\n      }\r\n    ]\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '6179',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"f930d461-c46b-4542-bce9-1d92639db1c8"',
  'x-ms-request-id': 'd458398d-d2a0-4d8f-968f-75b29fafcd56',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14983',
  'x-ms-correlation-request-id': '24087537-d3d7-483f-abfb-b0ac0f2c7141',
  'x-ms-routing-request-id': 'WESTEUROPE:20170901T115126Z:24087537-d3d7-483f-abfb-b0ac0f2c7141',
  date: 'Fri, 01 Sep 2017 11:51:25 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-nsg/providers/Microsoft.Network/networkSecurityGroups/networkSecurityGroupName?api-version=2017-09-01')
  .reply(200, "{\r\n  \"name\": \"networkSecurityGroupName\",\r\n  \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-nsg/providers/Microsoft.Network/networkSecurityGroups/networkSecurityGroupName\",\r\n  \"etag\": \"W/\\\"f930d461-c46b-4542-bce9-1d92639db1c8\\\"\",\r\n  \"type\": \"Microsoft.Network/networkSecurityGroups\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"a5e4fcb0-2591-47b9-b491-ce09f1c777c6\",\r\n    \"securityRules\": [],\r\n    \"defaultSecurityRules\": [\r\n      {\r\n        \"name\": \"AllowVnetInBound\",\r\n        \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-nsg/providers/Microsoft.Network/networkSecurityGroups/networkSecurityGroupName/defaultSecurityRules/AllowVnetInBound\",\r\n        \"etag\": \"W/\\\"f930d461-c46b-4542-bce9-1d92639db1c8\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"description\": \"Allow inbound traffic from all VMs in VNET\",\r\n          \"protocol\": \"*\",\r\n          \"sourcePortRange\": \"*\",\r\n          \"destinationPortRange\": \"*\",\r\n          \"sourceAddressPrefix\": \"VirtualNetwork\",\r\n          \"destinationAddressPrefix\": \"VirtualNetwork\",\r\n          \"access\": \"Allow\",\r\n          \"priority\": 65000,\r\n          \"direction\": \"Inbound\",\r\n          \"sourcePortRanges\": [],\r\n          \"destinationPortRanges\": [],\r\n          \"sourceAddressPrefixes\": [],\r\n          \"destinationAddressPrefixes\": []\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"AllowAzureLoadBalancerInBound\",\r\n        \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-nsg/providers/Microsoft.Network/networkSecurityGroups/networkSecurityGroupName/defaultSecurityRules/AllowAzureLoadBalancerInBound\",\r\n        \"etag\": \"W/\\\"f930d461-c46b-4542-bce9-1d92639db1c8\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"description\": \"Allow inbound traffic from azure load balancer\",\r\n          \"protocol\": \"*\",\r\n          \"sourcePortRange\": \"*\",\r\n          \"destinationPortRange\": \"*\",\r\n          \"sourceAddressPrefix\": \"AzureLoadBalancer\",\r\n          \"destinationAddressPrefix\": \"*\",\r\n          \"access\": \"Allow\",\r\n          \"priority\": 65001,\r\n          \"direction\": \"Inbound\",\r\n          \"sourcePortRanges\": [],\r\n          \"destinationPortRanges\": [],\r\n          \"sourceAddressPrefixes\": [],\r\n          \"destinationAddressPrefixes\": []\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"DenyAllInBound\",\r\n        \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-nsg/providers/Microsoft.Network/networkSecurityGroups/networkSecurityGroupName/defaultSecurityRules/DenyAllInBound\",\r\n        \"etag\": \"W/\\\"f930d461-c46b-4542-bce9-1d92639db1c8\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"description\": \"Deny all inbound traffic\",\r\n          \"protocol\": \"*\",\r\n          \"sourcePortRange\": \"*\",\r\n          \"destinationPortRange\": \"*\",\r\n          \"sourceAddressPrefix\": \"*\",\r\n          \"destinationAddressPrefix\": \"*\",\r\n          \"access\": \"Deny\",\r\n          \"priority\": 65500,\r\n          \"direction\": \"Inbound\",\r\n          \"sourcePortRanges\": [],\r\n          \"destinationPortRanges\": [],\r\n          \"sourceAddressPrefixes\": [],\r\n          \"destinationAddressPrefixes\": []\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"AllowVnetOutBound\",\r\n        \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-nsg/providers/Microsoft.Network/networkSecurityGroups/networkSecurityGroupName/defaultSecurityRules/AllowVnetOutBound\",\r\n        \"etag\": \"W/\\\"f930d461-c46b-4542-bce9-1d92639db1c8\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"description\": \"Allow outbound traffic from all VMs to all VMs in VNET\",\r\n          \"protocol\": \"*\",\r\n          \"sourcePortRange\": \"*\",\r\n          \"destinationPortRange\": \"*\",\r\n          \"sourceAddressPrefix\": \"VirtualNetwork\",\r\n          \"destinationAddressPrefix\": \"VirtualNetwork\",\r\n          \"access\": \"Allow\",\r\n          \"priority\": 65000,\r\n          \"direction\": \"Outbound\",\r\n          \"sourcePortRanges\": [],\r\n          \"destinationPortRanges\": [],\r\n          \"sourceAddressPrefixes\": [],\r\n          \"destinationAddressPrefixes\": []\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"AllowInternetOutBound\",\r\n        \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-nsg/providers/Microsoft.Network/networkSecurityGroups/networkSecurityGroupName/defaultSecurityRules/AllowInternetOutBound\",\r\n        \"etag\": \"W/\\\"f930d461-c46b-4542-bce9-1d92639db1c8\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"description\": \"Allow outbound traffic from all VMs to Internet\",\r\n          \"protocol\": \"*\",\r\n          \"sourcePortRange\": \"*\",\r\n          \"destinationPortRange\": \"*\",\r\n          \"sourceAddressPrefix\": \"*\",\r\n          \"destinationAddressPrefix\": \"Internet\",\r\n          \"access\": \"Allow\",\r\n          \"priority\": 65001,\r\n          \"direction\": \"Outbound\",\r\n          \"sourcePortRanges\": [],\r\n          \"destinationPortRanges\": [],\r\n          \"sourceAddressPrefixes\": [],\r\n          \"destinationAddressPrefixes\": []\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"DenyAllOutBound\",\r\n        \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-nsg/providers/Microsoft.Network/networkSecurityGroups/networkSecurityGroupName/defaultSecurityRules/DenyAllOutBound\",\r\n        \"etag\": \"W/\\\"f930d461-c46b-4542-bce9-1d92639db1c8\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"description\": \"Deny all outbound traffic\",\r\n          \"protocol\": \"*\",\r\n          \"sourcePortRange\": \"*\",\r\n          \"destinationPortRange\": \"*\",\r\n          \"sourceAddressPrefix\": \"*\",\r\n          \"destinationAddressPrefix\": \"*\",\r\n          \"access\": \"Deny\",\r\n          \"priority\": 65500,\r\n          \"direction\": \"Outbound\",\r\n          \"sourcePortRanges\": [],\r\n          \"destinationPortRanges\": [],\r\n          \"sourceAddressPrefixes\": [],\r\n          \"destinationAddressPrefixes\": []\r\n        }\r\n      }\r\n    ]\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '6179',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"f930d461-c46b-4542-bce9-1d92639db1c8"',
  'x-ms-request-id': 'd458398d-d2a0-4d8f-968f-75b29fafcd56',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14983',
  'x-ms-correlation-request-id': '24087537-d3d7-483f-abfb-b0ac0f2c7141',
  'x-ms-routing-request-id': 'WESTEUROPE:20170901T115126Z:24087537-d3d7-483f-abfb-b0ac0f2c7141',
  date: 'Fri, 01 Sep 2017 11:51:25 GMT',
  connection: 'close' });
 return result; }]];