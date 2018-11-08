/* jshint node: true */
"use strict";
var fs = require('fs');
var i = 0
module.exports = (function() {
  var verbose_ = false;

  return {
    setVerbose: function(v) {
      verbose_ = v;
    },
    log: function(str) {
      if(verbose_) {
// info: data4:  Logging in to CareLink
// info: data4:  POST https://carelink.minimed.eu/patient/j_security_check
// info: **********************************************
// info: test >>>>>>>>  undefined
// info: Execution took 243 ms, user function completed successfully
// info: data4:  GET https://carelink.minimed.eu/patient/main/login.do
// info: data4:  GET https://carelink.minimed.eu/patient/connect/ConnectViewerServlet?cpSerialNumber=NONE&msgType=last24hours&requestTime=1537444800

        // console.log('data4: ', str);
        // console.log('data5: ', i , typeof(str) , str);
      //   fs.writeFile('logs/test_' + i + '.txt', str, function(err) {
      //     if(err) {
      //         return console.log(err);
      //     }
      
      //     // console.log("The file was saved!");
      // });
      // if (i == 4) {
      //   var object = JSON.parse(str)
      //   // console.log('object', object)
      //   for (var key in object) {
      //     // console.log(key)
      //     if (key === 'sgs'){
      //       var sgs = object[key]
      //       for (var ii=0; ii < sgs.length; ii++ ) {
      //         // console.log(sgs[ii]['sg'])
      //         // console.log(sgs[ii]['datetime'])
      //         // const timestampLocal = Date.parse(sgs[ii]['datetime'])/1000
      //         // console.log('timestampLocal', timestampLocal)
      //         // const dateGMT = new Date(timestampLocal * 1000)
      //         // console.log('dateGMT', dateGMT)
      //         // console.log(dateGMT.getTime()/1000)
      //         // console.log(timestampGMT.)
              
              
      //         // for (var keyy in sgs[ii]){
      //         //   if (keyy === 'sg') {
      //         //     console.log(sgs[ii]['sg'])
      //         //   }
      //         // }
      //         // console.log(object[key][ii])
      //       }
      //       // console.log(sgs.length)
      //       // console.log(object[key][0])
      //       // console.log(typeof(object[key][0]))
      //     }
      //     // console.log(object[key])
      //     // if 
      //   }
      //   // console.log('data5: ', i , 'JSON.parse(str)' , JSON.parse(str));
      // //   var n = str.search("sg")
      // //   // console.log(n)
      // //   // console.log(str.slice(n,2))
      // //   var sg = str.split('"sg":')
      // //   var sg1 = str.split('},{')
      // //   //console.log(sg)
      // //   //   for (i = 1; i < sg.length; i++) { 
      // //   //     console.log('i=' + i)

      // //   //     console.log(sg[i].slice(0,3))

      // //   // }
      // //   // for (i = 1; i < sg1.length; i++) { 
      // //   //   console.log(sg1[i])
      // //   // } 
        
      // //   // for (str.slice(n,2))
      // }
      //   //console.log(JSON.parse("str"));
      i = i + 1


      }
    }
  };
})();


