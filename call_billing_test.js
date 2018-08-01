var callBilling = function(url) {
    var p = "pandareader://action/nativeurl?page=recharge&url=" + encodeURIComponent(url);
    $.WX.callProtocol(p);
}

//qa地址
var host = "http://qa.megatron.baidu-shucheng.com:8091/game_billing?";
//线上地址
//var host = "https://megatron.xmkanshu.com/game_billing?";

var gameid = "test_game_id";
var orderid = "orderid";
var ordername = "订单商品信息";
var ordermoney = "50000";

var url = host + "gameid=" + encodeURIComponent(gameid) +
    "&orderid=" + encodeURIComponent(orderid) +
    "&ordername=" + encodeURIComponent(ordername) +
    "&ordermoney=" + encodeURIComponent(ordermoney);

callBilling(url);
