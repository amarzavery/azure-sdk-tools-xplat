// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '53d9063d-87ae-4ea8-be90-3686c3b8669f',
    name: 'Visual Studio Ultimate with MSDN',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '6e606ece-3a5a-4674-a654-d6b02bc5a51b',
    state: 'Enabled',
    registeredProviders: [],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_ARM_TEST_LOCATION'] = 'East US 2';
  process.env['AZURE_ARM_TEST_RESOURCE_GROUP'] = 'xplattestadlsrg01';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://xplattestadls3965.azuredatalakestore.net:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/webhdfs/v1/adlsclifolder01%2Fimportfile.txt?overwrite=false&syncFlag=CLOSE&op=CREATE&write=true&api-version=2016-11-01', '*')
  .reply(201, "", { 'cache-control': 'no-cache, no-cache, no-store, max-age=0',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://xplattestadls3965.azuredatalakestore.net/webhdfs/v1/adlsclifolder01/importfile.txt?overwrite=false&syncFlag=CLOSE&op=CREATE&write=true&api-version=2016-11-01',
  'x-ms-request-id': 'c6796727-c8b5-4907-a3f3-f03dc858e676',
  contentlength: '0',
  'x-ms-webhdfs-version': '16.07.18.01',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Thu, 08 Dec 2016 01:56:53 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadls3965.azuredatalakestore.net:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/webhdfs/v1/adlsclifolder01%2Fimportfile.txt?overwrite=false&syncFlag=CLOSE&op=CREATE&write=true&api-version=2016-11-01', '*')
  .reply(201, "", { 'cache-control': 'no-cache, no-cache, no-store, max-age=0',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://xplattestadls3965.azuredatalakestore.net/webhdfs/v1/adlsclifolder01/importfile.txt?overwrite=false&syncFlag=CLOSE&op=CREATE&write=true&api-version=2016-11-01',
  'x-ms-request-id': 'c6796727-c8b5-4907-a3f3-f03dc858e676',
  contentlength: '0',
  'x-ms-webhdfs-version': '16.07.18.01',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Thu, 08 Dec 2016 01:56:53 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('http://xplattestadls3965.azuredatalakestore.net:443')
  .get('/webhdfs/v1/adlsclifolder01%2Fimportfile.txt?op=GETFILESTATUS&api-version=2016-11-01')
  .reply(200, "{\"FileStatus\":{\"length\":22,\"pathSuffix\":\"\",\"type\":\"FILE\",\"blockSize\":268435456,\"accessTime\":1481162213959,\"modificationTime\":1481162214004,\"replication\":1,\"permission\":\"770\",\"owner\":\"2e6c02d2-a364-4530-9137-d17403996cbf\",\"group\":\"2e6c02d2-a364-4530-9137-d17403996cbf\",\"expirationTime\":0,\"msExpirationTime\":0}}", { 'cache-control': 'no-cache, no-cache, no-store, max-age=0',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '6a4d95bb-ebc9-4177-84c1-caa2f6e91d49',
  'x-ms-webhdfs-version': '16.07.18.01',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Thu, 08 Dec 2016 01:56:54 GMT',
  connection: 'close',
  'content-length': '309' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadls3965.azuredatalakestore.net:443')
  .get('/webhdfs/v1/adlsclifolder01%2Fimportfile.txt?op=GETFILESTATUS&api-version=2016-11-01')
  .reply(200, "{\"FileStatus\":{\"length\":22,\"pathSuffix\":\"\",\"type\":\"FILE\",\"blockSize\":268435456,\"accessTime\":1481162213959,\"modificationTime\":1481162214004,\"replication\":1,\"permission\":\"770\",\"owner\":\"2e6c02d2-a364-4530-9137-d17403996cbf\",\"group\":\"2e6c02d2-a364-4530-9137-d17403996cbf\",\"expirationTime\":0,\"msExpirationTime\":0}}", { 'cache-control': 'no-cache, no-cache, no-store, max-age=0',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '6a4d95bb-ebc9-4177-84c1-caa2f6e91d49',
  'x-ms-webhdfs-version': '16.07.18.01',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Thu, 08 Dec 2016 01:56:54 GMT',
  connection: 'close',
  'content-length': '309' });
 return result; },
function (nock) { 
var result = 
nock('http://xplattestadls3965.azuredatalakestore.net:443')
  .get('/webhdfs/v1/adlsclifolder01%2Fimportfile.txt?op=GETFILESTATUS&api-version=2016-11-01')
  .reply(200, "{\"FileStatus\":{\"length\":22,\"pathSuffix\":\"\",\"type\":\"FILE\",\"blockSize\":268435456,\"accessTime\":1481162213959,\"modificationTime\":1481162214004,\"replication\":1,\"permission\":\"770\",\"owner\":\"2e6c02d2-a364-4530-9137-d17403996cbf\",\"group\":\"2e6c02d2-a364-4530-9137-d17403996cbf\",\"expirationTime\":0,\"msExpirationTime\":0}}", { 'cache-control': 'no-cache, no-cache, no-store, max-age=0',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'a55c4dfc-4a67-4424-85f0-f7b956c8469d',
  'x-ms-webhdfs-version': '16.07.18.01',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Thu, 08 Dec 2016 01:56:54 GMT',
  connection: 'close',
  'content-length': '309' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadls3965.azuredatalakestore.net:443')
  .get('/webhdfs/v1/adlsclifolder01%2Fimportfile.txt?op=GETFILESTATUS&api-version=2016-11-01')
  .reply(200, "{\"FileStatus\":{\"length\":22,\"pathSuffix\":\"\",\"type\":\"FILE\",\"blockSize\":268435456,\"accessTime\":1481162213959,\"modificationTime\":1481162214004,\"replication\":1,\"permission\":\"770\",\"owner\":\"2e6c02d2-a364-4530-9137-d17403996cbf\",\"group\":\"2e6c02d2-a364-4530-9137-d17403996cbf\",\"expirationTime\":0,\"msExpirationTime\":0}}", { 'cache-control': 'no-cache, no-cache, no-store, max-age=0',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'a55c4dfc-4a67-4424-85f0-f7b956c8469d',
  'x-ms-webhdfs-version': '16.07.18.01',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Thu, 08 Dec 2016 01:56:54 GMT',
  connection: 'close',
  'content-length': '309' });
 return result; },
function (nock) { 
var result = 
nock('http://xplattestadls3965.azuredatalakestore.net:443')
  .get('/webhdfs/v1/adlsclifolder01%2Fimportfile.txt?length=22&offset=0&op=OPEN&read=true&api-version=2016-11-01')
  .reply(200, "adls cli test content!", { 'cache-control': 'no-cache, no-cache, no-store, max-age=0',
  pragma: 'no-cache',
  'transfer-encoding': 'chunked',
  'content-type': 'application/octet-stream',
  expires: '-1',
  'x-ms-request-id': '936243b6-512b-4185-aee1-d9a10ad9edf0',
  'x-ms-webhdfs-version': '16.07.18.01',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Thu, 08 Dec 2016 01:56:55 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadls3965.azuredatalakestore.net:443')
  .get('/webhdfs/v1/adlsclifolder01%2Fimportfile.txt?length=22&offset=0&op=OPEN&read=true&api-version=2016-11-01')
  .reply(200, "adls cli test content!", { 'cache-control': 'no-cache, no-cache, no-store, max-age=0',
  pragma: 'no-cache',
  'transfer-encoding': 'chunked',
  'content-type': 'application/octet-stream',
  expires: '-1',
  'x-ms-request-id': '936243b6-512b-4185-aee1-d9a10ad9edf0',
  'x-ms-webhdfs-version': '16.07.18.01',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Thu, 08 Dec 2016 01:56:55 GMT',
  connection: 'close' });
 return result; }]];