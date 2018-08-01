//调起微信
var callWx = function() {
    $.WX.WXPandaReader(JSON.stringify({
        "apiName" : "native_call",
        "params" : {
            "appFunc" : "open_sys_browser",
            "data" : {
                "url":"weixin://"
            },
            "handleId" : ""
        }
    })); 
}

callWx();
