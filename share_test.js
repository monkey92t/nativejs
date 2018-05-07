var sharedata = {
    "apiName": "native_call",
    "params": {
        "appFunc": "share",
        "data": {
            "uiVersion" : 2,
            "bookId": 409341031,
            "title": "分享的标题",
            "content": "分享的具体内容",
            "url": "https://itunes.apple.com/cn/app/pandareader/id327313778?l=en&mt=8",
            "coverUrl": "http://img.m.shucheng.baidu.com/operateimg/novel/aa/aa7184e8af39e8eef9f632b85c41c645.png",
            "weiboCoverUrl":"http://img.m.shucheng.baidu.com/operateimg/novel/5e/5eb95aff0355b2c513a47e6d5e86a311.png",
            "cbNative" : 1,
            "cbServer" : 0,
            "cbOpkey" : "KEY",
            "platContents": {
                "p0":"content",
                "p5" : "微博分享"
            }
        },
        "handleId": "ACT:TEST_CALL_KEY",
    }
}

//调起一个分享
$.WX.WXPandaReader(JSON.stringify(sharedata));

$(window).on("native:callback", function(e,handleId, json){
    switch (handleId) {
        case "ACT:TEST_CALL_KEY":
            console.log("callback native ok.");
            break;
        default:
            console.log("error: unkn callback.");
    }
});
