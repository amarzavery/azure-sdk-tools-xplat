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
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone-record-set3088/providers/Microsoft.Network/dnsZones/exampledns.com/NS/set-ns?api-version=2016-04-01')
  .reply(200, "{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone-record-set3088\\/providers\\/Microsoft.Network\\/dnszones\\/exampledns.com\\/NS\\/set-ns\",\"name\":\"set-ns\",\"type\":\"Microsoft.Network\\/dnszones\\/NS\",\"etag\":\"81d2a393-0717-41bf-a890-966e02bc37d2\",\"properties\":{\"metadata\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\"},\"fqdn\":\"set-ns.exampledns.com.\",\"TTL\":3600,\"NSRecords\":[]}}", { 'cache-control': 'private',
  'content-length': '397',
  'content-type': 'application/json; charset=utf-8',
  etag: '81d2a393-0717-41bf-a890-966e02bc37d2',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '83cfc828-b0e2-4754-a32b-109d1cd52ff4',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14976',
  'x-ms-correlation-request-id': 'a01d3058-5300-4d9e-b5c6-a94ff720bf87',
  'x-ms-routing-request-id': 'WESTEUROPE:20170127T112007Z:a01d3058-5300-4d9e-b5c6-a94ff720bf87',
  date: 'Fri, 27 Jan 2017 11:20:06 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone-record-set3088/providers/Microsoft.Network/dnsZones/exampledns.com/NS/set-ns?api-version=2016-04-01')
  .reply(200, "{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone-record-set3088\\/providers\\/Microsoft.Network\\/dnszones\\/exampledns.com\\/NS\\/set-ns\",\"name\":\"set-ns\",\"type\":\"Microsoft.Network\\/dnszones\\/NS\",\"etag\":\"81d2a393-0717-41bf-a890-966e02bc37d2\",\"properties\":{\"metadata\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\"},\"fqdn\":\"set-ns.exampledns.com.\",\"TTL\":3600,\"NSRecords\":[]}}", { 'cache-control': 'private',
  'content-length': '397',
  'content-type': 'application/json; charset=utf-8',
  etag: '81d2a393-0717-41bf-a890-966e02bc37d2',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '83cfc828-b0e2-4754-a32b-109d1cd52ff4',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14976',
  'x-ms-correlation-request-id': 'a01d3058-5300-4d9e-b5c6-a94ff720bf87',
  'x-ms-routing-request-id': 'WESTEUROPE:20170127T112007Z:a01d3058-5300-4d9e-b5c6-a94ff720bf87',
  date: 'Fri, 27 Jan 2017 11:20:06 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .delete('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone-record-set3088/providers/Microsoft.Network/dnsZones/exampledns.com/NS/set-ns?api-version=2016-04-01')
  .reply(200, "", { 'cache-control': 'private',
  'content-length': '0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '8b9598db-0dd1-44f6-bbce-8bba304dab01',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': '7a51b6d2-4856-4bc8-a605-af54fe9d92dd',
  'x-ms-routing-request-id': 'WESTEUROPE:20170127T112007Z:7a51b6d2-4856-4bc8-a605-af54fe9d92dd',
  date: 'Fri, 27 Jan 2017 11:20:06 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone-record-set3088/providers/Microsoft.Network/dnsZones/exampledns.com/NS/set-ns?api-version=2016-04-01')
  .reply(200, "", { 'cache-control': 'private',
  'content-length': '0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '8b9598db-0dd1-44f6-bbce-8bba304dab01',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': '7a51b6d2-4856-4bc8-a605-af54fe9d92dd',
  'x-ms-routing-request-id': 'WESTEUROPE:20170127T112007Z:7a51b6d2-4856-4bc8-a605-af54fe9d92dd',
  date: 'Fri, 27 Jan 2017 11:20:06 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone-record-set3088/providers/Microsoft.Network/dnsZones/exampledns.com/NS/set-ns?api-version=2016-04-01')
  .reply(404, "{\"code\":\"NotFound\",\"message\":\"The resource record 'set-ns' does not exist in resource group 'xplat-test-dns-zone-record-set3088' of subscription '2c224e7e-3ef5-431d-a57b-e71f4662e3a6'.\"}", { 'cache-control': 'private',
  'content-length': '186',
  'content-type': 'application/json; charset=utf-8',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '2998e4e6-3cfb-4622-a60b-b700a8785d6f',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14974',
  'x-ms-correlation-request-id': '062ac734-8b80-4b5d-93ef-480b0cc2d28f',
  'x-ms-routing-request-id': 'WESTEUROPE:20170127T112009Z:062ac734-8b80-4b5d-93ef-480b0cc2d28f',
  date: 'Fri, 27 Jan 2017 11:20:08 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone-record-set3088/providers/Microsoft.Network/dnsZones/exampledns.com/NS/set-ns?api-version=2016-04-01')
  .reply(404, "{\"code\":\"NotFound\",\"message\":\"The resource record 'set-ns' does not exist in resource group 'xplat-test-dns-zone-record-set3088' of subscription '2c224e7e-3ef5-431d-a57b-e71f4662e3a6'.\"}", { 'cache-control': 'private',
  'content-length': '186',
  'content-type': 'application/json; charset=utf-8',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '2998e4e6-3cfb-4622-a60b-b700a8785d6f',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14974',
  'x-ms-correlation-request-id': '062ac734-8b80-4b5d-93ef-480b0cc2d28f',
  'x-ms-routing-request-id': 'WESTEUROPE:20170127T112009Z:062ac734-8b80-4b5d-93ef-480b0cc2d28f',
  date: 'Fri, 27 Jan 2017 11:20:08 GMT',
  connection: 'close' });
 return result; }]];