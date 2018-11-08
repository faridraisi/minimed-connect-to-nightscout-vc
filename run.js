/* jshint node: true */
"use strict";
exports.runNight = function (usrnm, psswrd, callbackSuccess, callbackFailure) {
  var carelink = require('./carelink'),
  //  filter = require('./filter'),
    logger = require('./logger');
  // transform = require('./transform');

  function readEnv(key, defaultVal) {
    var val = process.env[key] ||
      process.env[key.toLowerCase()] ||
      // Azure prefixes environment variables with this
      process.env['CUSTOMCONNSTR_' + key] ||
      process.env['CUSTOMCONNSTR_' + key.toLowerCase()];
    return val !== undefined ? val : defaultVal;
  }

  var config = {
    username: usrnm,
    password: psswrd,
    verbose: true
  };

  if (!config.username) {
    throw new Error('Missing CareLink username');
  } else if(!config.password) {
    throw new Error('Missing CareLink password');
  }

  var client = carelink.Client({
    username: config.username,
    password: config.password,
    maxRetryDuration: config.maxRetryDuration
  });
  // console.log('config', config)

  logger.setVerbose(config.verbose);

  client.fetch(function(err, data) {
    if (!err) {
      // console.log('data2:', data)

      // logger.log("data3: " + JSON.stringify(data));
      callbackSuccess(data);
      return data
      //updateServer()
      // var transformed = transform(data);
      // logger.log("Transformed: " + transformed.entries);
      //mmcns.nightscout.upload(transformed.entries, 'https://your.ns.host/api/v1/entries.json', 'api-secret', callback);
      // ...or:
      //mmcns.nightscout.upload(transformed.devicestatus, 'https://your.ns.host/api/v1/devicestatus.json', 'api-secret', callback);
      // ...or use `transformed.entries` and `transformed.devicestatus` directly
    } else {
      callbackFailure(err);
      logger.log(err);
    }
  });
  function updateServer(){
    console.log("****** Testing at: " + Date())
    // response.send(run.runNight());
    var url = 'https://glook.monash.edu/api/v1/glucose/'
    var pid = '1234'
    var hash = '1af3f306d724e979fec9144dc6e3c8471bec93e6bcde93f08e432e537e52f008'
    var ts = '1538564400'
    var data = '8'
    var urlRequest = url + '?pid=' + pid + '&hash=' + hash + '&ts='+ ts + '&data=' + data
    console.log(urlRequest)
    // import the module
    var request1 = require('request');

    // make the request
    request1.post(urlRequest, function (error, response, body) {
        console.log('error:', error); // Print the error if one occurred
        console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        console.log('body:', body); // Print the HTML for the Google homepage.
        console.log('Patient ID: ', pid)
        console.log('Time: ', new Date(parseInt(ts, 10) * 1000))
    });
  }

  function uploadMaybe(items, endpoint, callback) {
    if (items.length === 0) {
      logger.log('No new items for ' + endpoint);
      callback();
    } else {/*
      nightscout.upload(items, endpoint, config.nsSecret, function(err, response) {
        if (err) {
          // Continue gathering data from CareLink even if Nightscout can't be reached
          console.log(err);
        }
        callback();
      });*/
      //logger.log(items);
    }
  }
  /*
  (function requestLoop() {
    
    client.fetch(function(err, data) {
      logger.log(data);
      if (err) {
        throw new Error(err);
      } else {
        var transformed = transform(data, config.sgvLimit);

        // Because of Nightscout's upsert semantics and the fact that CareLink provides trend
        // data only for the most recent sgv, we need to filter out sgvs we've already sent.
        // Otherwise we'll overwrite existing sgv entries and remove their trend data.
        var newSgvs = filterSgvs(transformed.entries);

        // Nightscout's entries collection upserts based on date, but the devicestatus collection
        // does not do the same for created_at, so we need to de-dupe them here.
        var newDeviceStatuses = filterDeviceStatus(transformed.devicestatus);

        uploadMaybe(newSgvs, entriesUrl, function() {
          uploadMaybe(newDeviceStatuses, devicestatusUrl, function() {
            setTimeout(requestLoop, config.interval);
          });
        });
      //}
    });
    client.fetch(function(err, data) {
      if (!err) {
        var transformed = carelink.transform(data);
        logger.log(transformed.entries);
        //mmcns.nightscout.upload(transformed.entries, 'https://your.ns.host/api/v1/entries.json', 'api-secret', callback);
        // ...or:
        //mmcns.nightscout.upload(transformed.devicestatus, 'https://your.ns.host/api/v1/devicestatus.json', 'api-secret', callback);
        // ...or use `transformed.entries` and `transformed.devicestatus` directly
      }
      logger.log(err);
    });
  })();
  */
}