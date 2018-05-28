var disableSlide = function(f){
    return JSON.stringify({
        "apiName":"native_call",
        "params":{
            "appFunc" : "set_native_slide_enabled",
            "data" : {
                "enabled" : f ? true : false
            },
            "handleId" : ""
        },
    });
};

//阻断app滑动
$.WX.WXPandaReader(disableSlide(false));

//启用app滑动
$.WX.WXPandaReader(disableSlide(true));
