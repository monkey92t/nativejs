//调起浏览器
var callBrowser = function(u) {
    $.WX.WXPandaReader(JSON.stringify({
        "apiName" : "native_call",
        "params" : {
            "appFunc" : "open_sys_browser",
            "data" : {
                "url":u
            },
            "handleId" : ""
        }
    })); 
}

callBrowser("https://www.xmkanshu.com/");
