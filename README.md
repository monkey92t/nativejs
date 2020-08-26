# nativejs 熊猫APP JS API

通过API，可以使用熊猫APP内部诸多功能，如：登陆、支付、使用外部浏览器打开web页面、分享、阻断APP滑动等;

#### 使用方法

1、下载https://github.com/monkey92t/nativejs/blob/master/native.js 放到自己的CDN上

2、在web html中引入native.js

3、参数示例中(*_test.js) 调用API即可

#### 示例：

调起系统浏览器打开web页面
```shell script
//换成自己的cdn地址
<script src="https://github.com/monkey92t/nativejs/blob/master/native.js"></script>
.....
<script>
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
</script>
```
