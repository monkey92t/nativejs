//调用书籍详情信息页面
var bookinfo_test = function(bookid, bookname, booktype) {
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

    $.WX.WXPandaReader(JSON.stringify(bookdata));
}

bookinfo_test(15300218, "乡村小游医", 0);
