// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '6e0b24a6-2bef-4598-9bd3-f87e9700e24c',
    name: 'Windows Azure Internal Consumption',
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
  process.env['AZURE_BATCH_ACCOUNT'] = 'test1';
  process.env['AZURE_BATCH_ENDPOINT'] = 'https://test1.westus.batch.azure.com';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://test1.westus.batch.azure.com:443')
  .get('/jobs/xplatJobForTaskTests/tasks/xplatTask?api-version=2016-02-01.3.0&timeout=30')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://test1.westus.batch.azure.com/$metadata#tasks/@Element\",\"id\":\"xplatTask\",\"displayName\":\"displayName\",\"url\":\"https://test1.westus.batch.azure.com/jobs/xplatJobForTaskTests/tasks/xplatTask\",\"eTag\":\"0x8D36F939787DF4C\",\"creationTime\":\"2016-04-28T18:33:28.2511692Z\",\"lastModified\":\"2016-04-28T18:33:28.2511692Z\",\"state\":\"running\",\"stateTransitionTime\":\"2016-04-28T18:33:28.7407122Z\",\"previousState\":\"active\",\"previousStateTransitionTime\":\"2016-04-28T18:33:28.2511692Z\",\"commandLine\":\"cmd /c dir /s\",\"environmentSettings\":[\r\n    {\r\n      \"name\":\"env1\",\"value\":\"value1\"\r\n    },{\r\n      \"name\":\"env2\",\"value\":\"value2\"\r\n    }\r\n  ],\"runElevated\":false,\"multiInstanceSettings\":{\r\n    \"numberOfInstances\":3,\"coordinationCommandLine\":\"cmd /c echo hello\"\r\n  },\"constraints\":{\r\n    \"maxWallClockTime\":\"P1D\",\"retentionTime\":\"P10675199DT2H48M5.4775807S\",\"maxTaskRetryCount\":2\r\n  },\"executionInfo\":{\r\n    \"startTime\":\"2016-04-28T18:33:28.7407122Z\",\"retryCount\":0,\"requeueCount\":0\r\n  },\"nodeInfo\":{\r\n    \"affinityId\":\"TVM:tvm-2316545714_3-20160428t012222z\",\"nodeUrl\":\"https://test1.westus.batch.azure.com/pools/xplattestpool/nodes/tvm-2316545714_3-20160428t012222z\",\"poolId\":\"xplattestpool\",\"nodeId\":\"tvm-2316545714_3-20160428t012222z\",\"taskRootDirectory\":\"workitems\\\\xplatjobfortasktests\\\\job-1\\\\xplattask\\\\0\",\"taskRootDirectoryUrl\":\"https://test1.westus.batch.azure.com/pools/xplattestpool/nodes/tvm-2316545714_3-20160428t012222z/files/workitems/xplatjobfortasktests/job-1/xplattask/0\"\r\n  }\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  'last-modified': 'Thu, 28 Apr 2016 18:33:28 GMT',
  etag: '0x8D36F939787DF4C',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '2097dea8-51d3-4a4a-8870-29fe2dff6653',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': '3e0c6951-3c5b-41c8-8432-b3ea9b2b1702',
  dataserviceversion: '3.0',
  date: 'Thu, 28 Apr 2016 18:33:28 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://test1.westus.batch.azure.com:443')
  .get('/jobs/xplatJobForTaskTests/tasks/xplatTask?api-version=2016-02-01.3.0&timeout=30')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://test1.westus.batch.azure.com/$metadata#tasks/@Element\",\"id\":\"xplatTask\",\"displayName\":\"displayName\",\"url\":\"https://test1.westus.batch.azure.com/jobs/xplatJobForTaskTests/tasks/xplatTask\",\"eTag\":\"0x8D36F939787DF4C\",\"creationTime\":\"2016-04-28T18:33:28.2511692Z\",\"lastModified\":\"2016-04-28T18:33:28.2511692Z\",\"state\":\"running\",\"stateTransitionTime\":\"2016-04-28T18:33:28.7407122Z\",\"previousState\":\"active\",\"previousStateTransitionTime\":\"2016-04-28T18:33:28.2511692Z\",\"commandLine\":\"cmd /c dir /s\",\"environmentSettings\":[\r\n    {\r\n      \"name\":\"env1\",\"value\":\"value1\"\r\n    },{\r\n      \"name\":\"env2\",\"value\":\"value2\"\r\n    }\r\n  ],\"runElevated\":false,\"multiInstanceSettings\":{\r\n    \"numberOfInstances\":3,\"coordinationCommandLine\":\"cmd /c echo hello\"\r\n  },\"constraints\":{\r\n    \"maxWallClockTime\":\"P1D\",\"retentionTime\":\"P10675199DT2H48M5.4775807S\",\"maxTaskRetryCount\":2\r\n  },\"executionInfo\":{\r\n    \"startTime\":\"2016-04-28T18:33:28.7407122Z\",\"retryCount\":0,\"requeueCount\":0\r\n  },\"nodeInfo\":{\r\n    \"affinityId\":\"TVM:tvm-2316545714_3-20160428t012222z\",\"nodeUrl\":\"https://test1.westus.batch.azure.com/pools/xplattestpool/nodes/tvm-2316545714_3-20160428t012222z\",\"poolId\":\"xplattestpool\",\"nodeId\":\"tvm-2316545714_3-20160428t012222z\",\"taskRootDirectory\":\"workitems\\\\xplatjobfortasktests\\\\job-1\\\\xplattask\\\\0\",\"taskRootDirectoryUrl\":\"https://test1.westus.batch.azure.com/pools/xplattestpool/nodes/tvm-2316545714_3-20160428t012222z/files/workitems/xplatjobfortasktests/job-1/xplattask/0\"\r\n  }\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  'last-modified': 'Thu, 28 Apr 2016 18:33:28 GMT',
  etag: '0x8D36F939787DF4C',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '2097dea8-51d3-4a4a-8870-29fe2dff6653',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': '3e0c6951-3c5b-41c8-8432-b3ea9b2b1702',
  dataserviceversion: '3.0',
  date: 'Thu, 28 Apr 2016 18:33:28 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://test1.westus.batch.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/jobs/xplatJobForTaskTests/tasks/xplatTask?api-version=2016-02-01.3.0&timeout=30', '*')
  .reply(200, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Thu, 28 Apr 2016 18:33:29 GMT',
  etag: '0x8D36F93988C08B7',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '9a3429a0-38e6-4d89-8a0f-cc2d9617aa99',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': 'f5160d88-9b7e-422b-862a-2aca61180866',
  dataserviceversion: '3.0',
  dataserviceid: 'https://test1.westus.batch.azure.com/jobs/xplatJobForTaskTests/tasks/xplatTask',
  date: 'Thu, 28 Apr 2016 18:33:31 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://test1.westus.batch.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/jobs/xplatJobForTaskTests/tasks/xplatTask?api-version=2016-02-01.3.0&timeout=30', '*')
  .reply(200, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Thu, 28 Apr 2016 18:33:29 GMT',
  etag: '0x8D36F93988C08B7',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '9a3429a0-38e6-4d89-8a0f-cc2d9617aa99',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': 'f5160d88-9b7e-422b-862a-2aca61180866',
  dataserviceversion: '3.0',
  dataserviceid: 'https://test1.westus.batch.azure.com/jobs/xplatJobForTaskTests/tasks/xplatTask',
  date: 'Thu, 28 Apr 2016 18:33:31 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://test1.westus.batch.azure.com:443')
  .get('/jobs/xplatJobForTaskTests/tasks/xplatTask?api-version=2016-02-01.3.0&timeout=30')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://test1.westus.batch.azure.com/$metadata#tasks/@Element\",\"id\":\"xplatTask\",\"displayName\":\"displayName\",\"url\":\"https://test1.westus.batch.azure.com/jobs/xplatJobForTaskTests/tasks/xplatTask\",\"eTag\":\"0x8D36F93988C08B7\",\"creationTime\":\"2016-04-28T18:33:28.2511692Z\",\"lastModified\":\"2016-04-28T18:33:29.9561655Z\",\"state\":\"running\",\"stateTransitionTime\":\"2016-04-28T18:33:28.7407122Z\",\"previousState\":\"active\",\"previousStateTransitionTime\":\"2016-04-28T18:33:28.2511692Z\",\"commandLine\":\"cmd /c dir /s\",\"environmentSettings\":[\r\n    {\r\n      \"name\":\"env1\",\"value\":\"value1\"\r\n    },{\r\n      \"name\":\"env2\",\"value\":\"value2\"\r\n    }\r\n  ],\"runElevated\":false,\"multiInstanceSettings\":{\r\n    \"numberOfInstances\":3,\"coordinationCommandLine\":\"cmd /c echo hello\"\r\n  },\"constraints\":{\r\n    \"maxWallClockTime\":\"P1D\",\"retentionTime\":\"P10675199DT2H48M5.4775807S\",\"maxTaskRetryCount\":5\r\n  },\"executionInfo\":{\r\n    \"startTime\":\"2016-04-28T18:33:28.7407122Z\",\"retryCount\":0,\"requeueCount\":0\r\n  },\"nodeInfo\":{\r\n    \"affinityId\":\"TVM:tvm-2316545714_3-20160428t012222z\",\"nodeUrl\":\"https://test1.westus.batch.azure.com/pools/xplattestpool/nodes/tvm-2316545714_3-20160428t012222z\",\"poolId\":\"xplattestpool\",\"nodeId\":\"tvm-2316545714_3-20160428t012222z\",\"taskRootDirectory\":\"workitems\\\\xplatjobfortasktests\\\\job-1\\\\xplattask\\\\0\",\"taskRootDirectoryUrl\":\"https://test1.westus.batch.azure.com/pools/xplattestpool/nodes/tvm-2316545714_3-20160428t012222z/files/workitems/xplatjobfortasktests/job-1/xplattask/0\"\r\n  }\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  'last-modified': 'Thu, 28 Apr 2016 18:33:29 GMT',
  etag: '0x8D36F93988C08B7',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '5d927eb6-32b5-408a-ab61-9002e164c372',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': 'f63d1608-8a28-4d8e-8e63-4f6c1ccc3b4b',
  dataserviceversion: '3.0',
  date: 'Thu, 28 Apr 2016 18:33:32 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://test1.westus.batch.azure.com:443')
  .get('/jobs/xplatJobForTaskTests/tasks/xplatTask?api-version=2016-02-01.3.0&timeout=30')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://test1.westus.batch.azure.com/$metadata#tasks/@Element\",\"id\":\"xplatTask\",\"displayName\":\"displayName\",\"url\":\"https://test1.westus.batch.azure.com/jobs/xplatJobForTaskTests/tasks/xplatTask\",\"eTag\":\"0x8D36F93988C08B7\",\"creationTime\":\"2016-04-28T18:33:28.2511692Z\",\"lastModified\":\"2016-04-28T18:33:29.9561655Z\",\"state\":\"running\",\"stateTransitionTime\":\"2016-04-28T18:33:28.7407122Z\",\"previousState\":\"active\",\"previousStateTransitionTime\":\"2016-04-28T18:33:28.2511692Z\",\"commandLine\":\"cmd /c dir /s\",\"environmentSettings\":[\r\n    {\r\n      \"name\":\"env1\",\"value\":\"value1\"\r\n    },{\r\n      \"name\":\"env2\",\"value\":\"value2\"\r\n    }\r\n  ],\"runElevated\":false,\"multiInstanceSettings\":{\r\n    \"numberOfInstances\":3,\"coordinationCommandLine\":\"cmd /c echo hello\"\r\n  },\"constraints\":{\r\n    \"maxWallClockTime\":\"P1D\",\"retentionTime\":\"P10675199DT2H48M5.4775807S\",\"maxTaskRetryCount\":5\r\n  },\"executionInfo\":{\r\n    \"startTime\":\"2016-04-28T18:33:28.7407122Z\",\"retryCount\":0,\"requeueCount\":0\r\n  },\"nodeInfo\":{\r\n    \"affinityId\":\"TVM:tvm-2316545714_3-20160428t012222z\",\"nodeUrl\":\"https://test1.westus.batch.azure.com/pools/xplattestpool/nodes/tvm-2316545714_3-20160428t012222z\",\"poolId\":\"xplattestpool\",\"nodeId\":\"tvm-2316545714_3-20160428t012222z\",\"taskRootDirectory\":\"workitems\\\\xplatjobfortasktests\\\\job-1\\\\xplattask\\\\0\",\"taskRootDirectoryUrl\":\"https://test1.westus.batch.azure.com/pools/xplattestpool/nodes/tvm-2316545714_3-20160428t012222z/files/workitems/xplatjobfortasktests/job-1/xplattask/0\"\r\n  }\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  'last-modified': 'Thu, 28 Apr 2016 18:33:29 GMT',
  etag: '0x8D36F93988C08B7',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '5d927eb6-32b5-408a-ab61-9002e164c372',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': 'f63d1608-8a28-4d8e-8e63-4f6c1ccc3b4b',
  dataserviceversion: '3.0',
  date: 'Thu, 28 Apr 2016 18:33:32 GMT',
  connection: 'close' });
 return result; }]];