﻿/**
 * Copyright (c) Microsoft.  All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// Warning: This code was generated by a tool.
// 
// Changes to this file may cause incorrect behavior and will be lost if the
// code is regenerated.

'use strict';

var should = require('should');
var util = require('util');
var _ = require('underscore');

var CLITest = require('../../../framework/arm-cli-test');
var utils = require('../../../../lib/util/utils');
var tagUtils = require('../../../../lib/commands/arm/tag/tagUtils');
var testUtils = require('../../../util/util');

var networkTestUtil = new (require('../../../util/networkTestUtil'))();

var generatorUtils = require('../../../../lib/util/generatorUtils');
var profile = require('../../../../lib/util/profile');

var testPrefix = 'arm-network-application-gateway-frontend-ip-tests-generated',
  groupName = 'xplat-test-frontend-ip',
  location;
var index = 0;

var frontendIPConfigurations = {
  name: 'frontendIPConfigurationName'
};

frontendIPConfigurations.virtualNetworkName = 'virtualNetworkName';
frontendIPConfigurations.subnetName = 'subnetName';
frontendIPConfigurations.applicationGatewayName = 'applicationGatewayName';
frontendIPConfigurations.publicIPAddressName = 'publicIPAddressName';

var subnet = {
  addressPrefix: '10.0.0.0/16',
  virtualNetworkName: 'virtualNetworkName',
  name: 'subnetName'
};

var virtualNetwork = {
  location: 'westus',
  name: 'virtualNetworkName'
};

var applicationGateway = {
  backendAddresses: '10.0.0.0',
  location: 'westus',
  virtualNetworkName: 'virtualNetworkName',
  subnetName: 'subnetName',
  name: 'applicationGatewayName'
};

var publicIPAddress = {
  location: 'westus',
  name: 'publicIPAddressName'
};

var requiredEnvironment = [{
  name: 'AZURE_VM_TEST_LOCATION',
  defaultValue: 'westus'
}];

describe('arm', function () {
  describe('network', function () {
    var suite, retry = 5;
    var hour = 60 * 60000;
    var testTimeout = hour;

    before(function (done) {
      this.timeout(testTimeout);
      suite = new CLITest(this, testPrefix, requiredEnvironment);
      suite.setupSuite(function () {
        location = frontendIPConfigurations.location || process.env.AZURE_VM_TEST_LOCATION;
        groupName = suite.isMocked ? groupName : suite.generateId(groupName, null);
        frontendIPConfigurations.location = location;
        frontendIPConfigurations.name = suite.isMocked ? frontendIPConfigurations.name : suite.generateId(frontendIPConfigurations.name, null);
        frontendIPConfigurations.group = groupName;
        if (!suite.isPlayback()) {
          networkTestUtil.createGroup(groupName, location, suite, function () {
            var cmd = 'network vnet create -g {1} -n {name} --location {location} --json'.formatArgs(virtualNetwork, groupName);
            generatorUtils.executeCommand(suite, retry, cmd, function (result) {
              if (!testUtils.assertExitStatus(result, done)) return;
              var cmd = 'network vnet subnet create -g {1} -n {name} --address-prefix {addressPrefix} --vnet-name {virtualNetworkName} --json'.formatArgs(subnet, groupName);
              generatorUtils.executeCommand(suite, retry, cmd, function (result) {
                if (!testUtils.assertExitStatus(result, done)) return;
                var cmd = 'network application-gateway create -g {1} -n {name} --servers {backendAddresses} --location {location} --vnet-name {virtualNetworkName} --subnet-name {subnetName} --json'.formatArgs(applicationGateway, groupName);
                generatorUtils.executeCommand(suite, retry, cmd, function (result) {
                  if (!testUtils.assertExitStatus(result, done)) return;
                  var cmd = 'network public-ip create -g {1} -n {name} --location {location} --json'.formatArgs(publicIPAddress, groupName);
                  generatorUtils.executeCommand(suite, retry, cmd, function (result) {
                    if (!testUtils.assertExitStatus(result, done)) return;
                    done();
                  });
                });
              });
            });
          });
        } else {
          done();
        }
      });
    });
    after(function (done) {
      this.timeout(testTimeout);
      networkTestUtil.deleteGroup(groupName, suite, function () {
        suite.teardownSuite(done);
      });
    });
    beforeEach(function (done) {
      suite.setupTest(done);
    });
    afterEach(function (done) {
      suite.teardownTest(done);
    });

    describe('frontend ip configurations', function () {
      this.timeout(testTimeout);
      it('create should create frontend ip configurations', function (done) {
        var cmd = 'network application-gateway frontend-ip create -g {group} -n {name} --gateway-name {applicationGatewayName} --public-ip-name {publicIPAddressName} --json'.formatArgs(frontendIPConfigurations);
        generatorUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.equal(0);
          var parentOutput = JSON.parse(result.text);
          parentOutput.name.should.equal('applicationGatewayName');
          var output = utils.findFirstCaseIgnore(parentOutput.frontendIPConfigurations, {name: 'frontendIpConfigurationName'});
          output.name.should.equal(frontendIPConfigurations.name);
          done();
        });
      });
      it('show should display frontend ip configurations details', function (done) {
        var cmd = 'network application-gateway frontend-ip show -g {group} -n {name} --gateway-name {applicationGatewayName} --json'.formatArgs(frontendIPConfigurations);
        generatorUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.equal(0);
          var output = JSON.parse(result.text);
          output.name.should.equal(frontendIPConfigurations.name);
          done();
        });
      });
      it('set should update frontend ip configurations', function (done) {
        var cmd = 'network application-gateway frontend-ip set -g {group} -n {name} --gateway-name {applicationGatewayName} --json'.formatArgs(frontendIPConfigurations);
        generatorUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.equal(0);
          var parentOutput = JSON.parse(result.text);
          parentOutput.name.should.equal('applicationGatewayName');
          var output = utils.findFirstCaseIgnore(parentOutput.frontendIPConfigurations, {name: 'frontendIpConfigurationName'});
          output.name.should.equal(frontendIPConfigurations.name);
          done();
        });
      });
      it('list should display all frontend ip configurations in resource group', function (done) {
        var cmd = 'network application-gateway frontend-ip list -g {group} --gateway-name {applicationGatewayName} --json'.formatArgs(frontendIPConfigurations);
        generatorUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.equal(0);
          var outputs = JSON.parse(result.text);
          _.some(outputs, function (output) {
            return output.name === frontendIPConfigurations.name;
          }).should.be.true;
          done();
        });
      });
    });
  });
});
