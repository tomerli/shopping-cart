var slConfig = {
  "customerId": "tricentis-demo",
  "appName": "Testim-Shopping-Cart",
  "buildName": "17.0",
  "branchName": "Main",
  "server": "https://tricentis-demo.sealights.co/api",
  "token": "eyJhbGciOiJSUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL1BST0QtUE9DLmF1dGguc2VhbGlnaHRzLmlvLyIsImp3dGlkIjoiUFJPRC1QT0MsbmVlZFRvUmVtb3ZlLEFQSUdXLTZjYjczN2IyLTE2YzYtNDI2Zi05YTJhLTQwMzc0MmRlMGQ4YSwxNzIyNzgzODk0MTQ4Iiwic3ViamVjdCI6InRyaWNlbnRpcy1kZW1vQGFnZW50IiwiYXVkaWVuY2UiOlsiYWdlbnRzIl0sIngtc2wtcm9sZSI6ImFnZW50IiwieC1zbC1zZXJ2ZXIiOiJodHRwczovL3RyaWNlbnRpcy1kZW1vLnNlYWxpZ2h0cy5jby9hcGkiLCJzbF9pbXBlcl9zdWJqZWN0IjoiIiwiaWF0IjoxNzIyNzgzODk0fQ.b_N4YB0IMzxEeW21lYQS5OHmBhV7nnqkEaZArlq_biT3BHtX_yoXRULKB61f58h2n2XzBK1QmU-VkavfIAbVmyYUaaQYmZ6l0CKoEhgqonveuonfINzp9W_th9rSPxThU4AZvimrPPB8h0MQ3T2eZa2eC8eTJ4rd-TKX8wlql7ENv-rNpM3ppk8RN31K4zRjcvf9zrtOVvQwTRnusEYjcGvB_GE6uqc5XbIpUkrNssD8MF4NbQuHThvDuhZshnJjPbU9kU66z5ocx5hAXITKLe9WBjDABfm9qkmUTk9GWQOQtvBQ9jYgJZ7v7Kvf7InmgJkzvpMueSa4TJ6kNrG1n_dUGGdROSkzPqUsDN4Apte_ZXiPm4V32-RfDQ4GrjzJFeiRfX0VWr5kP33qSqMADpXQiblJu6pfCis3mlqgOtsWlcYYgFL_TGxv3Mup8pnaxCHKNYKW8NUzJwGUhPzqfghBoq46rnZhcO9o1m4DdXB9PikpWdDZjGOt8VAo2xsAS7FMWXbmZ2hlHlH20T5GAm08tBkVQMLADEpPf4QijXbQroddmvlA7Ewbbf7KJVxvyMPzDbzNpnwfm53o3jzE2laMwetUIIxN8ASvtmBFD-_wJlXNa2jeFAL01Linte5jArLuPnMRNFDCBC3n0aibtilRLfgJnPJ4eF5n3zkw6d8",
  "buildSessionId": "6d176643-87e7-47f3-ae3f-14c30477af93",
  "enabled": true,
  "workspacepath": "/home/runner/work/shopping-cart/shopping-cart/build/",
  "maxItemsInQueue": 500,
  "registerShutdownHook": true,
  "interval": 10,
  "resolveWithoutHash": true,
  "delayShutdownInSeconds": 30,
  "isUseNewUniqueId": false,
  "footprintsEnableV6": true,
  "footprintsBufferThresholdMb": 10,
  "footprintsCollectIntervalSecs": 10,
  "footprintsSendIntervalSecs": 10,
  "executionQueryIntervalSecs": 10,
  "footprintsQueueSize": 2,
  "blockBrowserHttpTraffic": false,
  "enableOpenTelemetry": false,
  "footprintsMapping": "agent",
  "removeSensitiveData": false,
  "experimentalSizeReduction": false,
  "splitPreambleIntoFile": false,
  "preambleFileName": "sl-preamble-config.js",
  "preambleFileUrl": "",
  "excludeTokenFromBrowserConfig": false
};
window.$Sealights = window.$Sealights || {};
if(window && window.$SealightsAgent){
   window.$SealightsAgent.createInstance(slConfig)
} else {
   window.$Sealights.components = window.$Sealights.components || {};
   window.$Sealights.components["6d176643-87e7-47f3-ae3f-14c30477af93"] = slConfig;   document.addEventListener("DOMContentLoaded", function(event) {
       document.body.dataset.components = JSON.stringify(window.$Sealights.components || {});
   });}
if(!window.$Sealights.scriptAdded && !window.$Sealights.skipSlAgent) {
   var script   = document.createElement("script");
   script.type  = "text/javascript";
   script.src   = "https://tricentis-demo.sealights.co/api/v1/agents/browser/recommended?redirect=1&customerId=tricentis-demo";
   var head     = document.head || document.getElementsByTagName && document.getElementsByTagName('head')[0]
   if (head) { head.appendChild(script); window.$Sealights.scriptAdded = true; } else { /* Unsupported/restricted browser */ }
}
var cov_sp6kiwqaw=function(){var path="/home/runner/work/shopping-cart/shopping-cart/build/precache-manifest.f1432a0269f79dc4714718b26746b344.js",hash="f0347cb94f387ce6dd3d713342b65b2bc4bbf6f9",Function=function(){}.constructor,global=new Function('return this')(),gcv="$SealightsCoverage_6d176643-87e7-47f3-ae3f-14c30477af93",coverageData={path:"/home/runner/work/shopping-cart/shopping-cart/build/precache-manifest.f1432a0269f79dc4714718b26746b344.js",statementMap:{"0":{start:{line:1,column:0},end:{line:26,column:3}}},fnMap:{},branchMap:{"0":{loc:{start:{line:1,column:27},end:{line:1,column:56}},type:"binary-expr",locations:[{start:{line:1,column:27},end:{line:1,column:50}},{start:{line:1,column:54},end:{line:1,column:56}}],line:1}},s:{"0":0},f:{},b:{"0":[0,0]},_coverageSchema:"43e27e138ebf9cfc5966b082cf9a028302ed4184"},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();cov_sp6kiwqaw.s[0]++;self.__precacheManifest=((cov_sp6kiwqaw.b[0][0]++,self.__precacheManifest)||(cov_sp6kiwqaw.b[0][1]++,[])).concat([{"revision":"2ec559b252edae951806cdc7375dde1c","url":"/shopping-cart/index.html"},{"revision":"02027454ecccdb704a32","url":"/shopping-cart/static/css/main.83ce19a0.chunk.css"},{"revision":"1646adc8ce876b41b0b3","url":"/shopping-cart/static/js/2.a555117f.chunk.js"},{"revision":"5b8dba7eeb457c24d070468991587b51","url":"/shopping-cart/static/js/2.a555117f.chunk.js.LICENSE.txt"},{"revision":"02027454ecccdb704a32","url":"/shopping-cart/static/js/main.ac718757.chunk.js"},{"revision":"a168b8240fa792af5021","url":"/shopping-cart/static/js/runtime-main.2f8c013a.js"}]);