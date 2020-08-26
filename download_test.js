//url是要下载的apk地址，adid联系我方获取
var callBilling = function(url, adid) {
    var p = "pandareader://action/addown?url=" + encodeURIComponent(url) + "&adid=" + adid
    $.WX.callProtocol(p);
}
