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
    registeredProviders: ['mobileservice', 'website'],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'southeastasia';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone-record-set3088/providers/Microsoft.Network/dnsZones/exampledns.com?api-version=2016-04-01')
  .reply(200, "{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone-record-set3088\\/providers\\/Microsoft.Network\\/dnszones\\/exampledns.com\",\"name\":\"exampledns.com\",\"type\":\"Microsoft.Network\\/dnszones\",\"etag\":\"00000002-0000-0000-e744-55318f78d201\",\"location\":\"global\",\"tags\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\"},\"properties\":{\"maxNumberOfRecordSets\":5000,\"nameServers\":[\"ns1-05.azure-dns.com.\",\"ns2-05.azure-dns.net.\",\"ns3-05.azure-dns.org.\",\"ns4-05.azure-dns.info.\"],\"numberOfRecordSets\":3}}", { 'cache-control': 'private',
  'content-length': '512',
  'content-type': 'application/json; charset=utf-8',
  etag: '00000002-0000-0000-e744-55318f78d201',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '83e33235-42ac-4f44-8a0c-585e6dc9772f',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11978',
  'x-ms-correlation-request-id': '062169b5-193b-452c-a50c-ab6b27677b2c',
  'x-ms-routing-request-id': 'WESTEUROPE:20170127T111921Z:062169b5-193b-452c-a50c-ab6b27677b2c',
  date: 'Fri, 27 Jan 2017 11:19:21 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone-record-set3088/providers/Microsoft.Network/dnsZones/exampledns.com?api-version=2016-04-01')
  .reply(200, "{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone-record-set3088\\/providers\\/Microsoft.Network\\/dnszones\\/exampledns.com\",\"name\":\"exampledns.com\",\"type\":\"Microsoft.Network\\/dnszones\",\"etag\":\"00000002-0000-0000-e744-55318f78d201\",\"location\":\"global\",\"tags\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\"},\"properties\":{\"maxNumberOfRecordSets\":5000,\"nameServers\":[\"ns1-05.azure-dns.com.\",\"ns2-05.azure-dns.net.\",\"ns3-05.azure-dns.org.\",\"ns4-05.azure-dns.info.\"],\"numberOfRecordSets\":3}}", { 'cache-control': 'private',
  'content-length': '512',
  'content-type': 'application/json; charset=utf-8',
  etag: '00000002-0000-0000-e744-55318f78d201',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '83e33235-42ac-4f44-8a0c-585e6dc9772f',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11978',
  'x-ms-correlation-request-id': '062169b5-193b-452c-a50c-ab6b27677b2c',
  'x-ms-routing-request-id': 'WESTEUROPE:20170127T111921Z:062169b5-193b-452c-a50c-ab6b27677b2c',
  date: 'Fri, 27 Jan 2017 11:19:21 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone-record-set3088/providers/Microsoft.Network/dnsZones/exampledns.com/A/set-a?api-version=2016-04-01')
  .reply(200, "{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone-record-set3088\\/providers\\/Microsoft.Network\\/dnszones\\/exampledns.com\\/A\\/set-a\",\"name\":\"set-a\",\"type\":\"Microsoft.Network\\/dnszones\\/A\",\"etag\":\"2c21001e-9e09-4ba3-89df-4f25e2fd01b4\",\"properties\":{\"metadata\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\"},\"fqdn\":\"set-a.exampledns.com.\",\"TTL\":3600,\"ARecords\":[]}}", { 'cache-control': 'private',
  'content-length': '391',
  'content-type': 'application/json; charset=utf-8',
  etag: '2c21001e-9e09-4ba3-89df-4f25e2fd01b4',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'da8dd398-5045-4f4e-8b90-b38ce736cd86',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': '3ddf7dc1-272b-4bc2-8520-09378267d48d',
  'x-ms-routing-request-id': 'WESTEUROPE:20170127T111922Z:3ddf7dc1-272b-4bc2-8520-09378267d48d',
  date: 'Fri, 27 Jan 2017 11:19:21 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone-record-set3088/providers/Microsoft.Network/dnsZones/exampledns.com/A/set-a?api-version=2016-04-01')
  .reply(200, "{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone-record-set3088\\/providers\\/Microsoft.Network\\/dnszones\\/exampledns.com\\/A\\/set-a\",\"name\":\"set-a\",\"type\":\"Microsoft.Network\\/dnszones\\/A\",\"etag\":\"2c21001e-9e09-4ba3-89df-4f25e2fd01b4\",\"properties\":{\"metadata\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\"},\"fqdn\":\"set-a.exampledns.com.\",\"TTL\":3600,\"ARecords\":[]}}", { 'cache-control': 'private',
  'content-length': '391',
  'content-type': 'application/json; charset=utf-8',
  etag: '2c21001e-9e09-4ba3-89df-4f25e2fd01b4',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'da8dd398-5045-4f4e-8b90-b38ce736cd86',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': '3ddf7dc1-272b-4bc2-8520-09378267d48d',
  'x-ms-routing-request-id': 'WESTEUROPE:20170127T111922Z:3ddf7dc1-272b-4bc2-8520-09378267d48d',
  date: 'Fri, 27 Jan 2017 11:19:21 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone-record-set3088/providers/Microsoft.Network/dnsZones/exampledns.com/A/set-a?api-version=2016-04-01', '*')
  .reply(200, "{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone-record-set3088\\/providers\\/Microsoft.Network\\/dnszones\\/exampledns.com\\/A\\/set-a\",\"name\":\"set-a\",\"type\":\"Microsoft.Network\\/dnszones\\/A\",\"etag\":\"67c6600b-df7a-4856-99c2-7a4cc886628c\",\"properties\":{\"metadata\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\",\"tag3\":\"ccc\"},\"fqdn\":\"set-a.exampledns.com.\",\"TTL\":255,\"ARecords\":[]}}", { 'cache-control': 'private',
  'content-length': '403',
  'content-type': 'application/json; charset=utf-8',
  etag: '67c6600b-df7a-4856-99c2-7a4cc886628c',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '9e733816-3e37-4567-9688-fe616b96b709',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': 'b8adcfe7-9a34-4867-b8b7-95d95871ad50',
  'x-ms-routing-request-id': 'WESTEUROPE:20170127T111923Z:b8adcfe7-9a34-4867-b8b7-95d95871ad50',
  date: 'Fri, 27 Jan 2017 11:19:22 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone-record-set3088/providers/Microsoft.Network/dnsZones/exampledns.com/A/set-a?api-version=2016-04-01', '*')
  .reply(200, "{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone-record-set3088\\/providers\\/Microsoft.Network\\/dnszones\\/exampledns.com\\/A\\/set-a\",\"name\":\"set-a\",\"type\":\"Microsoft.Network\\/dnszones\\/A\",\"etag\":\"67c6600b-df7a-4856-99c2-7a4cc886628c\",\"properties\":{\"metadata\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\",\"tag3\":\"ccc\"},\"fqdn\":\"set-a.exampledns.com.\",\"TTL\":255,\"ARecords\":[]}}", { 'cache-control': 'private',
  'content-length': '403',
  'content-type': 'application/json; charset=utf-8',
  etag: '67c6600b-df7a-4856-99c2-7a4cc886628c',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '9e733816-3e37-4567-9688-fe616b96b709',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': 'b8adcfe7-9a34-4867-b8b7-95d95871ad50',
  'x-ms-routing-request-id': 'WESTEUROPE:20170127T111923Z:b8adcfe7-9a34-4867-b8b7-95d95871ad50',
  date: 'Fri, 27 Jan 2017 11:19:22 GMT',
  connection: 'close' });
 return result; }]];