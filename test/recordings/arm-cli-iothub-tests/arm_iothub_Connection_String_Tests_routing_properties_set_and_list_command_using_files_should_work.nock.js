// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '75917ab0-74e0-451f-b332-caeb57dc5cf6',
    name: 'IOTHUB_PERF_2',
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
  process.env['AZURE_ARM_IOTHUB_TEST_LOCATION'] = 'West US';
  process.env['AZURE_ARM_TEST_RESOURCE_GROUP'] = 'xplattestiothubrg';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/75917ab0-74e0-451f-b332-caeb57dc5cf6/resourceGroups/xplattestiothubrg/providers/Microsoft.Devices/IotHubs/xplattestiothub1636?api-version=2017-01-19')
  .reply(200, "{\"id\":\"/subscriptions/75917ab0-74e0-451f-b332-caeb57dc5cf6/resourceGroups/xplattestiothubrg/providers/Microsoft.Devices/IotHubs/xplattestiothub1636\",\"name\":\"xplattestiothub1636\",\"type\":\"Microsoft.Devices/IotHubs\",\"location\":\"westus\",\"tags\":{},\"subscriptionid\":\"75917ab0-74e0-451f-b332-caeb57dc5cf6\",\"resourcegroup\":\"xplattestiothubrg\",\"etag\":\"AAAAAAD16Oo=\",\"properties\":{\"state\":\"Active\",\"provisioningState\":\"Succeeded\",\"ipFilterRules\":[{\"filterName\":\"deny\",\"action\":\"Accept\",\"ipMask\":\"0.0.0.0/0\"},{\"filterName\":\"test\",\"action\":\"Reject\",\"ipMask\":\"0.0.0.0/0\"}],\"hostName\":\"xplattestiothub1636.azure-devices.net\",\"eventHubEndpoints\":{\"events\":{\"retentionTimeInDays\":1,\"partitionCount\":2,\"partitionIds\":[\"0\",\"1\"],\"path\":\"xplattestiothub1636\",\"endpoint\":\"sb://iothub-ns-xplattesti-163278-e2f5d7ac0b.servicebus.windows.net/\"},\"operationsMonitoringEvents\":{\"retentionTimeInDays\":1,\"partitionCount\":2,\"partitionIds\":[\"0\",\"1\"],\"path\":\"xplattestiothub1636-operationmonitoring\",\"endpoint\":\"sb://iothub-ns-xplattesti-163278-e2f5d7ac0b.servicebus.windows.net/\"}},\"routing\":{\"endpoints\":{\"serviceBusQueues\":[],\"serviceBusTopics\":[],\"eventHubs\":[]},\"routes\":[],\"fallbackRoute\":{\"name\":\"$fallback\",\"source\":\"DeviceMessages\",\"condition\":\"true\",\"endpointNames\":[\"events\"],\"isEnabled\":true}},\"storageEndpoints\":{\"$default\":{\"sasTtlAsIso8601\":\"PT1H\",\"connectionString\":\"\",\"containerName\":\"\"}},\"messagingEndpoints\":{\"fileNotifications\":{\"lockDurationAsIso8601\":\"PT1M\",\"ttlAsIso8601\":\"PT1H\",\"maxDeliveryCount\":10}},\"enableFileUploadNotifications\":false,\"cloudToDevice\":{\"maxDeliveryCount\":10,\"defaultTtlAsIso8601\":\"PT1H\",\"feedback\":{\"lockDurationAsIso8601\":\"PT1M\",\"ttlAsIso8601\":\"PT1H\",\"maxDeliveryCount\":1}},\"operationsMonitoringProperties\":{\"events\":{\"None\":\"None\",\"Connections\":\"None\",\"DeviceTelemetry\":\"None\",\"C2DCommands\":\"None\",\"DeviceIdentityOperations\":\"None\",\"FileUploadOperations\":\"None\",\"Routes\":\"None\"}},\"features\":\"None\",\"generationNumber\":0},\"sku\":{\"name\":\"S1\",\"tier\":\"Standard\",\"capacity\":1}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1986',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14967',
  'x-ms-request-id': '215e8f9a-06db-4976-b6a2-e76e5d22aaf9',
  'x-ms-correlation-request-id': '215e8f9a-06db-4976-b6a2-e76e5d22aaf9',
  'x-ms-routing-request-id': 'WESTUS:20170518T050409Z:215e8f9a-06db-4976-b6a2-e76e5d22aaf9',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 18 May 2017 05:04:08 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/75917ab0-74e0-451f-b332-caeb57dc5cf6/resourceGroups/xplattestiothubrg/providers/Microsoft.Devices/IotHubs/xplattestiothub1636?api-version=2017-01-19')
  .reply(200, "{\"id\":\"/subscriptions/75917ab0-74e0-451f-b332-caeb57dc5cf6/resourceGroups/xplattestiothubrg/providers/Microsoft.Devices/IotHubs/xplattestiothub1636\",\"name\":\"xplattestiothub1636\",\"type\":\"Microsoft.Devices/IotHubs\",\"location\":\"westus\",\"tags\":{},\"subscriptionid\":\"75917ab0-74e0-451f-b332-caeb57dc5cf6\",\"resourcegroup\":\"xplattestiothubrg\",\"etag\":\"AAAAAAD16Oo=\",\"properties\":{\"state\":\"Active\",\"provisioningState\":\"Succeeded\",\"ipFilterRules\":[{\"filterName\":\"deny\",\"action\":\"Accept\",\"ipMask\":\"0.0.0.0/0\"},{\"filterName\":\"test\",\"action\":\"Reject\",\"ipMask\":\"0.0.0.0/0\"}],\"hostName\":\"xplattestiothub1636.azure-devices.net\",\"eventHubEndpoints\":{\"events\":{\"retentionTimeInDays\":1,\"partitionCount\":2,\"partitionIds\":[\"0\",\"1\"],\"path\":\"xplattestiothub1636\",\"endpoint\":\"sb://iothub-ns-xplattesti-163278-e2f5d7ac0b.servicebus.windows.net/\"},\"operationsMonitoringEvents\":{\"retentionTimeInDays\":1,\"partitionCount\":2,\"partitionIds\":[\"0\",\"1\"],\"path\":\"xplattestiothub1636-operationmonitoring\",\"endpoint\":\"sb://iothub-ns-xplattesti-163278-e2f5d7ac0b.servicebus.windows.net/\"}},\"routing\":{\"endpoints\":{\"serviceBusQueues\":[],\"serviceBusTopics\":[],\"eventHubs\":[]},\"routes\":[],\"fallbackRoute\":{\"name\":\"$fallback\",\"source\":\"DeviceMessages\",\"condition\":\"true\",\"endpointNames\":[\"events\"],\"isEnabled\":true}},\"storageEndpoints\":{\"$default\":{\"sasTtlAsIso8601\":\"PT1H\",\"connectionString\":\"\",\"containerName\":\"\"}},\"messagingEndpoints\":{\"fileNotifications\":{\"lockDurationAsIso8601\":\"PT1M\",\"ttlAsIso8601\":\"PT1H\",\"maxDeliveryCount\":10}},\"enableFileUploadNotifications\":false,\"cloudToDevice\":{\"maxDeliveryCount\":10,\"defaultTtlAsIso8601\":\"PT1H\",\"feedback\":{\"lockDurationAsIso8601\":\"PT1M\",\"ttlAsIso8601\":\"PT1H\",\"maxDeliveryCount\":1}},\"operationsMonitoringProperties\":{\"events\":{\"None\":\"None\",\"Connections\":\"None\",\"DeviceTelemetry\":\"None\",\"C2DCommands\":\"None\",\"DeviceIdentityOperations\":\"None\",\"FileUploadOperations\":\"None\",\"Routes\":\"None\"}},\"features\":\"None\",\"generationNumber\":0},\"sku\":{\"name\":\"S1\",\"tier\":\"Standard\",\"capacity\":1}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1986',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14967',
  'x-ms-request-id': '215e8f9a-06db-4976-b6a2-e76e5d22aaf9',
  'x-ms-correlation-request-id': '215e8f9a-06db-4976-b6a2-e76e5d22aaf9',
  'x-ms-routing-request-id': 'WESTUS:20170518T050409Z:215e8f9a-06db-4976-b6a2-e76e5d22aaf9',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 18 May 2017 05:04:08 GMT',
  connection: 'close' });
 return result; }]];