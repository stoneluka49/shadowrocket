/**
* @fileoverview Example to deploy a HTTP backend.
*
* [http_backend]
* https://raw.githubusercontent.com/crossutility/Quantumult-X/master/sample-backend.js, tag=Backend Example, path=^/example/v1/
*
* You can visit through http://quantumult-x:9999/example/v1/ or http://127.0.0.1:9999/example/v1/ or http://localhost:9999/example/v1/
* You can also deploy a lot of different backends for your own usage, such as remote resource combination backend, task perferences manager backend, file converting backend ...
* The requests only will be sent to the related backends with the matching (regex) path.
* Further more you can use a signature or any other validation method to verify if the request is legitimate or not.
* Since the NE has the memory limitation, you should keep the backend as tiny as possible.
*
*
* @supported Quantumult X (v1.0.14-build358)
*/


// The availabel variables: $request.url, $request.path, $request.headers, $request.body, $prefs, $task, $notify(title, subtitle, message), console.log(message), $done(response)

const myStatus = "HTTP/1.1 200 OK";
const myHeaders = {"Connection": "keep-alive"};
const myData = "We got you.\n\n";

const myResponse = {
    status: myStatus,
    headers: myHeaders,
    body:{
  "result" : {
    "picUrl" : "https:\/\/cdn.sdzhx.com.cn\/20240302\/369cx\/4\/5c46d79a-fe26-4838-8357-d609df4df6c5.jpg",
    "splashId" : 5047,
    "tabThree" : {
      "targetUrl" : "https:\/\/jngj.369cx.cn\/nativepage.html?pageId=gh_5c0ca8781705%7C",
      "config" : "{\"viewAutoLog\":false,\"content\":\"\",\"background\":\" \",\"theme\":\"\",\"title\":\"公交商城\",\"buttons\":[]}",
      "type" : 1,
      "name" : "公交商城",
      "splashId" : 2598,
          },
    "theme" : {
      "enableWxLogin" : true,
      "themeMainType" : 0,
      "themeId" : 5,
      "themeUrl" : "https:\/\/jngj.369cx.cn\/theme\/Version7xx\/",
      "themeColor" : "#1e73ff",
      "bannerAdEnable" : false,
      "themeName" : "Version7xx"
    },
    "tabCenter" : {
      "targetUrl" : "__UNI__CE3255C|10221|",
      "config" : "{\"viewAutoLog\":false,\"content\":\"\",\"background\":\"\",\"theme\":\"\",\"title\":\"泉城云卡\",\"buttons\":[]}",
      "type" : 8,
      "name" : "泉城云卡",
      "splashId" : 2494,
      "picUrl" : ""
    },
  "status" : {
    "msg" : "成功",
    "code" : 0
  }
}
};

$done(myResponse);
