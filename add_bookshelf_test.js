//对指定的一本书籍加入书架
var add_bookshelf = function(bookid, bookname) {
    if (!bookid || !bookname || isNaN(bookid)) {
        return false;
    }
    if (bookid % 1000 == 699 || bookid % 1000 == 698) {
        return false;
    }
    $.WX.WXPandaReader(JSON.stringify({
        "apiName" : "native_call",
        "params" : {
            "appFunc" : "add_to_bookshelf",
            "data" : {
                "bookId" : bookid.toString(),
                "bookName" : encodeURIComponent(bookname)
            },
            "handleId" : ""
        }
    }));
}

add_bookshelf(1234, "test bookname");
