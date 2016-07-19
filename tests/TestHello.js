"use strict";

require("./helpers/setup");
var ios81 = {
  browserName: '',
  'appium-version': '1.3',
  platformName: 'iOS',
  platformVersion: '9.2',
  deviceName: 'iPhone 5s',
  app: 'platforms/ios/build/emulator/HelloCordova.app'
};


var wd = require("wd"),
    serverConfigs = require('./helpers/appium-servers');

describe("ios webview", function () {
  this.timeout(300000);
  var driver;
  var allPassed = true;

  before(function () {
    var serverConfig = serverConfigs.local;
    driver = wd.promiseChainRemote(serverConfig);

    return driver.init(ios81);
  });

  after(function () {
    return driver
      .quit()
      .finally(function () {
      });
  });

  afterEach(function () {
    allPassed = allPassed && this.currentTest.state === 'passed';
  });

  it("HELLO WORLD", function () {
    return driver
      .title().should.eventually.include('Hello World');
  });

});

