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
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/networkInterfaces/test-nic?api-version=2016-06-01')
  .reply(200, "{\r\n  \"name\": \"test-nic\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/networkInterfaces/test-nic\",\r\n  \"etag\": \"W/\\\"5240c2f6-67bc-4756-851b-80f6d973feb7\\\"\",\r\n  \"location\": \"westeurope\",\r\n  \"tags\": {\r\n    \"tag1\": \"aaa\",\r\n    \"tag2\": \"bbb\",\r\n    \"tag3\": \"ccc\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"094eec59-ce2b-4f89-9a56-9bc44b0c6991\",\r\n    \"ipConfigurations\": [\r\n      {\r\n        \"name\": \"config02\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/networkInterfaces/test-nic/ipConfigurations/config02\",\r\n        \"etag\": \"W/\\\"5240c2f6-67bc-4756-851b-80f6d973feb7\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAddress\": \"10.0.0.5\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"subnet\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/virtualNetworks/test-vnet/subnets/test-subnet\"\r\n          },\r\n          \"primary\": true,\r\n          \"privateIPAddressVersion\": \"IPv4\"\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"default-ip-config\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/networkInterfaces/test-nic/ipConfigurations/default-ip-config\",\r\n        \"etag\": \"W/\\\"5240c2f6-67bc-4756-851b-80f6d973feb7\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAddress\": \"10.0.0.22\",\r\n          \"privateIPAllocationMethod\": \"Static\",\r\n          \"subnet\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/virtualNetworks/test-vnet/subnets/test-subnet\"\r\n          },\r\n          \"primary\": false,\r\n          \"privateIPAddressVersion\": \"IPv4\"\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"config01\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/networkInterfaces/test-nic/ipConfigurations/config01\",\r\n        \"etag\": \"W/\\\"5240c2f6-67bc-4756-851b-80f6d973feb7\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAddress\": \"10.0.0.4\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"subnet\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/virtualNetworks/test-vnet/subnets/test-subnet\"\r\n          },\r\n          \"primary\": false,\r\n          \"privateIPAddressVersion\": \"IPv4\"\r\n        }\r\n      }\r\n    ],\r\n    \"dnsSettings\": {\r\n      \"dnsServers\": [],\r\n      \"appliedDnsServers\": [],\r\n      \"internalDnsNameLabel\": \"internal-dns-bar\",\r\n      \"internalDomainNameSuffix\": \"zochz3hlldfeljv202pfqkxwob.ax.internal.cloudapp.net\"\r\n    },\r\n    \"macAddress\": \"00-0D-3A-22-5D-FF\",\r\n    \"enableIPForwarding\": true\r\n  },\r\n  \"type\": \"Microsoft.Network/networkInterfaces\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '3129',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"5240c2f6-67bc-4756-851b-80f6d973feb7"',
  'x-ms-request-id': '2c18e751-e54c-40ee-99f1-548419ff3f1c',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14952',
  'x-ms-correlation-request-id': 'b4931aaf-ed7b-4618-9706-c339413f7261',
  'x-ms-routing-request-id': 'WESTEUROPE:20160919T083454Z:b4931aaf-ed7b-4618-9706-c339413f7261',
  date: 'Mon, 19 Sep 2016 08:34:54 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/networkInterfaces/test-nic?api-version=2016-06-01', '*')
  .reply(200, "{\r\n  \"name\": \"test-nic\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/networkInterfaces/test-nic\",\r\n  \"etag\": \"W/\\\"e0aaff83-79ce-4a33-926d-17375ce105ed\\\"\",\r\n  \"location\": \"westeurope\",\r\n  \"tags\": {\r\n    \"tag1\": \"aaa\",\r\n    \"tag2\": \"bbb\",\r\n    \"tag3\": \"ccc\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"094eec59-ce2b-4f89-9a56-9bc44b0c6991\",\r\n    \"ipConfigurations\": [\r\n      {\r\n        \"name\": \"config01\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/networkInterfaces/test-nic/ipConfigurations/config01\",\r\n        \"etag\": \"W/\\\"e0aaff83-79ce-4a33-926d-17375ce105ed\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAddress\": \"10.0.0.4\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"subnet\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/virtualNetworks/test-vnet/subnets/test-subnet\"\r\n          },\r\n          \"primary\": true,\r\n          \"privateIPAddressVersion\": \"IPv4\"\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"config02\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/networkInterfaces/test-nic/ipConfigurations/config02\",\r\n        \"etag\": \"W/\\\"e0aaff83-79ce-4a33-926d-17375ce105ed\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAddress\": \"10.0.0.5\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"subnet\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/virtualNetworks/test-vnet/subnets/test-subnet\"\r\n          },\r\n          \"primary\": false,\r\n          \"privateIPAddressVersion\": \"IPv4\"\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"default-ip-config\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/networkInterfaces/test-nic/ipConfigurations/default-ip-config\",\r\n        \"etag\": \"W/\\\"e0aaff83-79ce-4a33-926d-17375ce105ed\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAddress\": \"10.0.0.22\",\r\n          \"privateIPAllocationMethod\": \"Static\",\r\n          \"subnet\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/virtualNetworks/test-vnet/subnets/test-subnet\"\r\n          },\r\n          \"primary\": false,\r\n          \"privateIPAddressVersion\": \"IPv4\"\r\n        }\r\n      }\r\n    ],\r\n    \"dnsSettings\": {\r\n      \"dnsServers\": [],\r\n      \"appliedDnsServers\": [],\r\n      \"internalDnsNameLabel\": \"internal-dns-bar\",\r\n      \"internalDomainNameSuffix\": \"zochz3hlldfeljv202pfqkxwob.ax.internal.cloudapp.net\"\r\n    },\r\n    \"macAddress\": \"00-0D-3A-22-5D-FF\",\r\n    \"enableIPForwarding\": true\r\n  },\r\n  \"type\": \"Microsoft.Network/networkInterfaces\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '3129',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '5d9a16c0-4516-49e4-8ff7-23018dad1815',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westeurope/operations/5d9a16c0-4516-49e4-8ff7-23018dad1815?api-version=2016-06-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1191',
  'x-ms-correlation-request-id': '65cd5be3-a9f8-47ff-831b-cd8c64793942',
  'x-ms-routing-request-id': 'WESTEUROPE:20160919T083454Z:65cd5be3-a9f8-47ff-831b-cd8c64793942',
  date: 'Mon, 19 Sep 2016 08:34:54 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/networkInterfaces/test-nic?api-version=2016-06-01')
  .reply(200, "{\r\n  \"name\": \"test-nic\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/networkInterfaces/test-nic\",\r\n  \"etag\": \"W/\\\"e0aaff83-79ce-4a33-926d-17375ce105ed\\\"\",\r\n  \"location\": \"westeurope\",\r\n  \"tags\": {\r\n    \"tag1\": \"aaa\",\r\n    \"tag2\": \"bbb\",\r\n    \"tag3\": \"ccc\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"094eec59-ce2b-4f89-9a56-9bc44b0c6991\",\r\n    \"ipConfigurations\": [\r\n      {\r\n        \"name\": \"config01\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/networkInterfaces/test-nic/ipConfigurations/config01\",\r\n        \"etag\": \"W/\\\"e0aaff83-79ce-4a33-926d-17375ce105ed\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAddress\": \"10.0.0.4\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"subnet\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/virtualNetworks/test-vnet/subnets/test-subnet\"\r\n          },\r\n          \"primary\": true,\r\n          \"privateIPAddressVersion\": \"IPv4\"\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"config02\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/networkInterfaces/test-nic/ipConfigurations/config02\",\r\n        \"etag\": \"W/\\\"e0aaff83-79ce-4a33-926d-17375ce105ed\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAddress\": \"10.0.0.5\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"subnet\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/virtualNetworks/test-vnet/subnets/test-subnet\"\r\n          },\r\n          \"primary\": false,\r\n          \"privateIPAddressVersion\": \"IPv4\"\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"default-ip-config\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/networkInterfaces/test-nic/ipConfigurations/default-ip-config\",\r\n        \"etag\": \"W/\\\"e0aaff83-79ce-4a33-926d-17375ce105ed\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAddress\": \"10.0.0.22\",\r\n          \"privateIPAllocationMethod\": \"Static\",\r\n          \"subnet\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/virtualNetworks/test-vnet/subnets/test-subnet\"\r\n          },\r\n          \"primary\": false,\r\n          \"privateIPAddressVersion\": \"IPv4\"\r\n        }\r\n      }\r\n    ],\r\n    \"dnsSettings\": {\r\n      \"dnsServers\": [],\r\n      \"appliedDnsServers\": [],\r\n      \"internalDnsNameLabel\": \"internal-dns-bar\",\r\n      \"internalDomainNameSuffix\": \"zochz3hlldfeljv202pfqkxwob.ax.internal.cloudapp.net\"\r\n    },\r\n    \"macAddress\": \"00-0D-3A-22-5D-FF\",\r\n    \"enableIPForwarding\": true\r\n  },\r\n  \"type\": \"Microsoft.Network/networkInterfaces\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '3129',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"e0aaff83-79ce-4a33-926d-17375ce105ed"',
  'x-ms-request-id': '466920ed-7324-47e4-b7b7-89b68586fb97',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14981',
  'x-ms-correlation-request-id': 'de51fc6c-8345-4e25-8fd6-ba5bc28846bd',
  'x-ms-routing-request-id': 'WESTEUROPE:20160919T083455Z:de51fc6c-8345-4e25-8fd6-ba5bc28846bd',
  date: 'Mon, 19 Sep 2016 08:34:55 GMT' });
 return result; }]];