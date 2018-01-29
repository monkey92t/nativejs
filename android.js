var pandaReader = window.WXPandaReader || {
        getJsCall: function(json) {
            console.log(json);
        }
};

var sharedata = {
    "apiName": "native_call",
    "params": {
        "appFunc": "share",
        "data": {
            "uiVersion" : 2,//第几版UI
            "bookId": 409341031,
            "title": "分享的标题",
            "content": "分享的具体内容",
            "url": "https://itunes.apple.com/cn/app/pandareader/id327313778?l=en&mt=8",
            "coverUrl": "http://img.m.shucheng.baidu.com/operateimg/novel/aa/aa7184e8af39e8eef9f632b85c41c645.png",
            "weiboCoverUrl":"http://img.m.shucheng.baidu.com/operateimg/novel/5e/5eb95aff0355b2c513a47e6d5e86a311.png",
            "cbNative" : 0,
            "cbServer" : 0,
            "cbOpkey" : "KEY",
            "platContents": {
                "p0":"content",
                "p5" : "微博分享"
            }
        },
        "handleId": "ABC"
    }
}

//调用分享
pandaReader.getJsCall(JSON.stringify(sharedata));

//调用书籍详情信息页面
var callBookInfo = function(bookid, bookname, booktype) {
    var bookdata = {
        apiName: "view_to",
        params: {
            screen: "jump_to_bookcover",
            data: {
                bookid: bookid.toString(),
                siteid: "0",
                bookname: encodeURIComponent(bookname),
                booktype: booktype.toString(),
            },
            handleId: ""
        }
    };

    pandaReader.getJsCall(JSON.stringify(bookdata));
}

callBookInfo(15300218, "乡村小游医", 0);
