var slConfig = {
  "customerId": "tricentis-demo",
  "appName": "Testim-Shopping-Cart",
  "buildName": "18.0",
  "branchName": "Main",
  "server": "https://tricentis-demo.sealights.co/api",
  "token": "eyJhbGciOiJSUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL1BST0QtUE9DLmF1dGguc2VhbGlnaHRzLmlvLyIsImp3dGlkIjoiUFJPRC1QT0MsbmVlZFRvUmVtb3ZlLEFQSUdXLTZjYjczN2IyLTE2YzYtNDI2Zi05YTJhLTQwMzc0MmRlMGQ4YSwxNzIyNzgzODk0MTQ4Iiwic3ViamVjdCI6InRyaWNlbnRpcy1kZW1vQGFnZW50IiwiYXVkaWVuY2UiOlsiYWdlbnRzIl0sIngtc2wtcm9sZSI6ImFnZW50IiwieC1zbC1zZXJ2ZXIiOiJodHRwczovL3RyaWNlbnRpcy1kZW1vLnNlYWxpZ2h0cy5jby9hcGkiLCJzbF9pbXBlcl9zdWJqZWN0IjoiIiwiaWF0IjoxNzIyNzgzODk0fQ.b_N4YB0IMzxEeW21lYQS5OHmBhV7nnqkEaZArlq_biT3BHtX_yoXRULKB61f58h2n2XzBK1QmU-VkavfIAbVmyYUaaQYmZ6l0CKoEhgqonveuonfINzp9W_th9rSPxThU4AZvimrPPB8h0MQ3T2eZa2eC8eTJ4rd-TKX8wlql7ENv-rNpM3ppk8RN31K4zRjcvf9zrtOVvQwTRnusEYjcGvB_GE6uqc5XbIpUkrNssD8MF4NbQuHThvDuhZshnJjPbU9kU66z5ocx5hAXITKLe9WBjDABfm9qkmUTk9GWQOQtvBQ9jYgJZ7v7Kvf7InmgJkzvpMueSa4TJ6kNrG1n_dUGGdROSkzPqUsDN4Apte_ZXiPm4V32-RfDQ4GrjzJFeiRfX0VWr5kP33qSqMADpXQiblJu6pfCis3mlqgOtsWlcYYgFL_TGxv3Mup8pnaxCHKNYKW8NUzJwGUhPzqfghBoq46rnZhcO9o1m4DdXB9PikpWdDZjGOt8VAo2xsAS7FMWXbmZ2hlHlH20T5GAm08tBkVQMLADEpPf4QijXbQroddmvlA7Ewbbf7KJVxvyMPzDbzNpnwfm53o3jzE2laMwetUIIxN8ASvtmBFD-_wJlXNa2jeFAL01Linte5jArLuPnMRNFDCBC3n0aibtilRLfgJnPJ4eF5n3zkw6d8",
  "buildSessionId": "d7a5292d-54af-4352-8bb4-3b28318e7834",
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
   window.$Sealights.components["d7a5292d-54af-4352-8bb4-3b28318e7834"] = slConfig;   document.addEventListener("DOMContentLoaded", function(event) {
       document.body.dataset.components = JSON.stringify(window.$Sealights.components || {});
   });}
if(!window.$Sealights.scriptAdded && !window.$Sealights.skipSlAgent) {
   var script   = document.createElement("script");
   script.type  = "text/javascript";
   script.src   = "https://tricentis-demo.sealights.co/api/v1/agents/browser/recommended?redirect=1&customerId=tricentis-demo";
   var head     = document.head || document.getElementsByTagName && document.getElementsByTagName('head')[0]
   if (head) { head.appendChild(script); window.$Sealights.scriptAdded = true; } else { /* Unsupported/restricted browser */ }
}
var cov_v2fskxi6i=function(){var path="/home/runner/work/shopping-cart/shopping-cart/build/static/js/runtime-main.2f8c013a.js",hash="e31820ac4143c44fa6d97d71036fc9cf231ad20a",Function=function(){}.constructor,global=new Function('return this')(),gcv="$SealightsCoverage_d7a5292d-54af-4352-8bb4-3b28318e7834",coverageData={path:"/home/runner/work/shopping-cart/shopping-cart/build/static/js/runtime-main.2f8c013a.js",statementMap:{"0":{start:{line:1,column:0},end:{line:1,column:1537}},"1":{start:{line:1,column:27},end:{line:1,column:163}},"2":{start:{line:1,column:84},end:{line:1,column:163}},"3":{start:{line:1,column:163},end:{line:1,column:229}},"4":{start:{line:1,column:174},end:{line:1,column:229}},"5":{start:{line:1,column:229},end:{line:1,column:263}},"6":{start:{line:1,column:251},end:{line:1,column:263}},"7":{start:{line:1,column:263},end:{line:1,column:295}},"8":{start:{line:1,column:309},end:{line:1,column:442}},"9":{start:{line:1,column:339},end:{line:1,column:407}},"10":{start:{line:1,column:385},end:{line:1,column:389}},"11":{start:{line:1,column:390},end:{line:1,column:406}},"12":{start:{line:1,column:407},end:{line:1,column:441}},"13":{start:{line:1,column:442},end:{line:1,column:450}},"14":{start:{line:1,column:457},end:{line:1,column:459}},"15":{start:{line:1,column:462},end:{line:1,column:467}},"16":{start:{line:1,column:470},end:{line:1,column:472}},"17":{start:{line:1,column:487},end:{line:1,column:515}},"18":{start:{line:1,column:495},end:{line:1,column:515}},"19":{start:{line:1,column:521},end:{line:1,column:547}},"20":{start:{line:1,column:548},end:{line:1,column:606}},"21":{start:{line:1,column:607},end:{line:1,column:1369}},"22":{start:{line:1,column:639},end:{line:1,column:697}},"23":{start:{line:1,column:715},end:{line:1,column:873}},"24":{start:{line:1,column:893},end:{line:1,column:923}},"25":{start:{line:1,column:914},end:{line:1,column:923}},"26":{start:{line:1,column:923},end:{line:1,column:977}},"27":{start:{line:1,column:968},end:{line:1,column:977}},"28":{start:{line:1,column:983},end:{line:1,column:1002}},"29":{start:{line:1,column:1003},end:{line:1,column:1158}},"30":{start:{line:1,column:1096},end:{line:1,column:1158}},"31":{start:{line:1,column:1111},end:{line:1,column:1158}},"32":{start:{line:1,column:1131},end:{line:1,column:1142}},"33":{start:{line:1,column:1158},end:{line:1,column:1166}},"34":{start:{line:1,column:1190},end:{line:1,column:1255}},"35":{start:{line:1,column:1217},end:{line:1,column:1233}},"36":{start:{line:1,column:1246},end:{line:1,column:1254}},"37":{start:{line:1,column:1256},end:{line:1,column:1277}},"38":{start:{line:1,column:1297},end:{line:1,column:1345}},"39":{start:{line:1,column:1375},end:{line:1,column:1446}},"40":{start:{line:1,column:1449},end:{line:1,column:1463}},"41":{start:{line:1,column:1464},end:{line:1,column:1485}},"42":{start:{line:1,column:1485},end:{line:1,column:1520}},"43":{start:{line:1,column:1512},end:{line:1,column:1520}},"44":{start:{line:1,column:1526},end:{line:1,column:1527}},"45":{start:{line:1,column:1528},end:{line:1,column:1531}}},fnMap:{"0":{name:"(anonymous_0)",decl:{start:{line:1,column:1},end:{line:1,column:2}},loc:{start:{line:1,column:12},end:{line:1,column:1532}},line:1},"1":{name:"r",decl:{start:{line:1,column:22},end:{line:1,column:23}},loc:{start:{line:1,column:26},end:{line:1,column:296}},line:1},"2":{name:"t",decl:{start:{line:1,column:305},end:{line:1,column:306}},loc:{start:{line:1,column:308},end:{line:1,column:451}},line:1},"3":{name:"p",decl:{start:{line:1,column:482},end:{line:1,column:483}},loc:{start:{line:1,column:486},end:{line:1,column:607}},line:1},"4":{name:"(anonymous_4)",decl:{start:{line:1,column:623},end:{line:1,column:624}},loc:{start:{line:1,column:638},end:{line:1,column:698}},line:1},"5":{name:"(anonymous_5)",decl:{start:{line:1,column:703},end:{line:1,column:704}},loc:{start:{line:1,column:714},end:{line:1,column:874}},line:1},"6":{name:"(anonymous_6)",decl:{start:{line:1,column:879},end:{line:1,column:880}},loc:{start:{line:1,column:892},end:{line:1,column:1167}},line:1},"7":{name:"(anonymous_7)",decl:{start:{line:1,column:1119},end:{line:1,column:1120}},loc:{start:{line:1,column:1130},end:{line:1,column:1143}},line:1},"8":{name:"(anonymous_8)",decl:{start:{line:1,column:1172},end:{line:1,column:1173}},loc:{start:{line:1,column:1183},end:{line:1,column:1278}},line:1},"9":{name:"(anonymous_9)",decl:{start:{line:1,column:1206},end:{line:1,column:1207}},loc:{start:{line:1,column:1216},end:{line:1,column:1234}},line:1},"10":{name:"(anonymous_10)",decl:{start:{line:1,column:1235},end:{line:1,column:1236}},loc:{start:{line:1,column:1245},end:{line:1,column:1255}},line:1},"11":{name:"(anonymous_11)",decl:{start:{line:1,column:1283},end:{line:1,column:1284}},loc:{start:{line:1,column:1296},end:{line:1,column:1346}},line:1}},branchMap:{"0":{loc:{start:{line:1,column:91},end:{line:1,column:155}},type:"binary-expr",locations:[{start:{line:1,column:91},end:{line:1,column:132}},{start:{line:1,column:134},end:{line:1,column:138}},{start:{line:1,column:140},end:{line:1,column:155}}],line:1},"1":{loc:{start:{line:1,column:174},end:{line:1,column:228}},type:"binary-expr",locations:[{start:{line:1,column:174},end:{line:1,column:215}},{start:{line:1,column:218},end:{line:1,column:227}}],line:1},"2":{loc:{start:{line:1,column:285},end:{line:1,column:290}},type:"binary-expr",locations:[{start:{line:1,column:285},end:{line:1,column:286}},{start:{line:1,column:288},end:{line:1,column:290}}],line:1},"3":{loc:{start:{line:1,column:390},end:{line:1,column:406}},type:"binary-expr",locations:[{start:{line:1,column:390},end:{line:1,column:398}},{start:{line:1,column:401},end:{line:1,column:405}}],line:1},"4":{loc:{start:{line:1,column:407},end:{line:1,column:441}},type:"binary-expr",locations:[{start:{line:1,column:407},end:{line:1,column:408}},{start:{line:1,column:411},end:{line:1,column:440}}],line:1},"5":{loc:{start:{line:1,column:487},end:{line:1,column:515}},type:"if",locations:[{start:{line:1,column:487},end:{line:1,column:515}},{start:{line:1,column:487},end:{line:1,column:515}}],line:1},"6":{loc:{start:{line:1,column:639},end:{line:1,column:697}},type:"binary-expr",locations:[{start:{line:1,column:639},end:{line:1,column:647}},{start:{line:1,column:649},end:{line:1,column:697}}],line:1},"7":{loc:{start:{line:1,column:715},end:{line:1,column:824}},type:"binary-expr",locations:[{start:{line:1,column:715},end:{line:1,column:742}},{start:{line:1,column:744},end:{line:1,column:762}},{start:{line:1,column:764},end:{line:1,column:824}}],line:1},"8":{loc:{start:{line:1,column:893},end:{line:1,column:923}},type:"if",locations:[{start:{line:1,column:893},end:{line:1,column:923}},{start:{line:1,column:893},end:{line:1,column:923}}],line:1},"9":{loc:{start:{line:1,column:896},end:{line:1,column:909}},type:"binary-expr",locations:[{start:{line:1,column:896},end:{line:1,column:899}},{start:{line:1,column:902},end:{line:1,column:908}}],line:1},"10":{loc:{start:{line:1,column:923},end:{line:1,column:977}},type:"if",locations:[{start:{line:1,column:923},end:{line:1,column:977}},{start:{line:1,column:923},end:{line:1,column:977}}],line:1},"11":{loc:{start:{line:1,column:926},end:{line:1,column:967}},type:"binary-expr",locations:[{start:{line:1,column:926},end:{line:1,column:929}},{start:{line:1,column:931},end:{line:1,column:950}},{start:{line:1,column:952},end:{line:1,column:953}},{start:{line:1,column:955},end:{line:1,column:967}}],line:1},"12":{loc:{start:{line:1,column:1003},end:{line:1,column:1158}},type:"if",locations:[{start:{line:1,column:1003},end:{line:1,column:1158}},{start:{line:1,column:1003},end:{line:1,column:1158}}],line:1},"13":{loc:{start:{line:1,column:1072},end:{line:1,column:1095}},type:"binary-expr",locations:[{start:{line:1,column:1072},end:{line:1,column:1075}},{start:{line:1,column:1077},end:{line:1,column:1095}}],line:1},"14":{loc:{start:{line:1,column:1190},end:{line:1,column:1255}},type:"cond-expr",locations:[{start:{line:1,column:1206},end:{line:1,column:1234}},{start:{line:1,column:1235},end:{line:1,column:1255}}],line:1},"15":{loc:{start:{line:1,column:1190},end:{line:1,column:1205}},type:"binary-expr",locations:[{start:{line:1,column:1190},end:{line:1,column:1191}},{start:{line:1,column:1193},end:{line:1,column:1205}}],line:1},"16":{loc:{start:{line:1,column:1409},end:{line:1,column:1446}},type:"binary-expr",locations:[{start:{line:1,column:1409},end:{line:1,column:1442}},{start:{line:1,column:1444},end:{line:1,column:1446}}],line:1}},s:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":0,"22":0,"23":0,"24":0,"25":0,"26":0,"27":0,"28":0,"29":0,"30":0,"31":0,"32":0,"33":0,"34":0,"35":0,"36":0,"37":0,"38":0,"39":0,"40":0,"41":0,"42":0,"43":0,"44":0,"45":0},f:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0},b:{"0":[0,0,0],"1":[0,0],"2":[0,0],"3":[0,0],"4":[0,0],"5":[0,0],"6":[0,0],"7":[0,0,0],"8":[0,0],"9":[0,0],"10":[0,0],"11":[0,0,0,0],"12":[0,0],"13":[0,0],"14":[0,0],"15":[0,0],"16":[0,0]},_coverageSchema:"43e27e138ebf9cfc5966b082cf9a028302ed4184"},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();cov_v2fskxi6i.s[0]++;!function(e){cov_v2fskxi6i.f[0]++;function r(r){cov_v2fskxi6i.f[1]++;cov_v2fskxi6i.s[1]++;for(var n,p,i=r[0],a=r[1],l=r[2],f=0,s=[];f<i.length;f++){cov_v2fskxi6i.s[2]++;p=i[f],(cov_v2fskxi6i.b[0][0]++,Object.prototype.hasOwnProperty.call(o,p))&&(cov_v2fskxi6i.b[0][1]++,o[p])&&(cov_v2fskxi6i.b[0][2]++,s.push(o[p][0])),o[p]=0;}cov_v2fskxi6i.s[3]++;for(n in a){cov_v2fskxi6i.s[4]++;(cov_v2fskxi6i.b[1][0]++,Object.prototype.hasOwnProperty.call(a,n))&&(cov_v2fskxi6i.b[1][1]++,e[n]=a[n]);}cov_v2fskxi6i.s[5]++;for(c&&c(r);s.length;){cov_v2fskxi6i.s[6]++;s.shift()();}cov_v2fskxi6i.s[7]++;return u.push.apply(u,(cov_v2fskxi6i.b[2][0]++,l)||(cov_v2fskxi6i.b[2][1]++,[])),t();}function t(){cov_v2fskxi6i.f[2]++;cov_v2fskxi6i.s[8]++;for(var e,r=0;r<u.length;r++){cov_v2fskxi6i.s[9]++;for(var t=u[r],n=!0,i=1;i<t.length;i++){var a=(cov_v2fskxi6i.s[10]++,t[i]);cov_v2fskxi6i.s[11]++;(cov_v2fskxi6i.b[3][0]++,0!==o[a])&&(cov_v2fskxi6i.b[3][1]++,n=!1);}cov_v2fskxi6i.s[12]++;(cov_v2fskxi6i.b[4][0]++,n)&&(cov_v2fskxi6i.b[4][1]++,(u.splice(r--,1),e=p(p.s=t[0])));}cov_v2fskxi6i.s[13]++;return e;}var n=(cov_v2fskxi6i.s[14]++,{}),o=(cov_v2fskxi6i.s[15]++,{1:0}),u=(cov_v2fskxi6i.s[16]++,[]);function p(r){cov_v2fskxi6i.f[3]++;cov_v2fskxi6i.s[17]++;if(n[r]){cov_v2fskxi6i.b[5][0]++;cov_v2fskxi6i.s[18]++;return n[r].exports;}else{cov_v2fskxi6i.b[5][1]++;}var t=(cov_v2fskxi6i.s[19]++,n[r]={i:r,l:!1,exports:{}});cov_v2fskxi6i.s[20]++;return e[r].call(t.exports,t,t.exports,p),t.l=!0,t.exports;}cov_v2fskxi6i.s[21]++;p.m=e,p.c=n,p.d=function(e,r,t){cov_v2fskxi6i.f[4]++;cov_v2fskxi6i.s[22]++;(cov_v2fskxi6i.b[6][0]++,p.o(e,r))||(cov_v2fskxi6i.b[6][1]++,Object.defineProperty(e,r,{enumerable:!0,get:t}));},p.r=function(e){cov_v2fskxi6i.f[5]++;cov_v2fskxi6i.s[23]++;(cov_v2fskxi6i.b[7][0]++,"undefined"!==typeof Symbol)&&(cov_v2fskxi6i.b[7][1]++,Symbol.toStringTag)&&(cov_v2fskxi6i.b[7][2]++,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})),Object.defineProperty(e,"__esModule",{value:!0});},p.t=function(e,r){cov_v2fskxi6i.f[6]++;cov_v2fskxi6i.s[24]++;if((cov_v2fskxi6i.b[9][0]++,1&r)&&(cov_v2fskxi6i.b[9][1]++,e=p(e)),8&r){cov_v2fskxi6i.b[8][0]++;cov_v2fskxi6i.s[25]++;return e;}else{cov_v2fskxi6i.b[8][1]++;}cov_v2fskxi6i.s[26]++;if((cov_v2fskxi6i.b[11][0]++,4&r)&&(cov_v2fskxi6i.b[11][1]++,"object"===typeof e)&&(cov_v2fskxi6i.b[11][2]++,e)&&(cov_v2fskxi6i.b[11][3]++,e.__esModule)){cov_v2fskxi6i.b[10][0]++;cov_v2fskxi6i.s[27]++;return e;}else{cov_v2fskxi6i.b[10][1]++;}var t=(cov_v2fskxi6i.s[28]++,Object.create(null));cov_v2fskxi6i.s[29]++;if(p.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),(cov_v2fskxi6i.b[13][0]++,2&r)&&(cov_v2fskxi6i.b[13][1]++,"string"!=typeof e)){cov_v2fskxi6i.b[12][0]++;cov_v2fskxi6i.s[30]++;for(var n in e){cov_v2fskxi6i.s[31]++;p.d(t,n,function(r){cov_v2fskxi6i.f[7]++;cov_v2fskxi6i.s[32]++;return e[r];}.bind(null,n));}}else{cov_v2fskxi6i.b[12][1]++;}cov_v2fskxi6i.s[33]++;return t;},p.n=function(e){cov_v2fskxi6i.f[8]++;var r=(cov_v2fskxi6i.s[34]++,(cov_v2fskxi6i.b[15][0]++,e)&&(cov_v2fskxi6i.b[15][1]++,e.__esModule)?(cov_v2fskxi6i.b[14][0]++,function(){cov_v2fskxi6i.f[9]++;cov_v2fskxi6i.s[35]++;return e.default;}):(cov_v2fskxi6i.b[14][1]++,function(){cov_v2fskxi6i.f[10]++;cov_v2fskxi6i.s[36]++;return e;}));cov_v2fskxi6i.s[37]++;return p.d(r,"a",r),r;},p.o=function(e,r){cov_v2fskxi6i.f[11]++;cov_v2fskxi6i.s[38]++;return Object.prototype.hasOwnProperty.call(e,r);},p.p="/shopping-cart/";var i=(cov_v2fskxi6i.s[39]++,this["webpackJsonpshopping-cart"]=(cov_v2fskxi6i.b[16][0]++,this["webpackJsonpshopping-cart"])||(cov_v2fskxi6i.b[16][1]++,[])),a=(cov_v2fskxi6i.s[40]++,i.push.bind(i));cov_v2fskxi6i.s[41]++;i.push=r,i=i.slice();cov_v2fskxi6i.s[42]++;for(var l=0;l<i.length;l++){cov_v2fskxi6i.s[43]++;r(i[l]);}var c=(cov_v2fskxi6i.s[44]++,a);cov_v2fskxi6i.s[45]++;t();}([]);//# sourceMappingURL=runtime-main.2f8c013a.js.map