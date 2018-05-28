var $ = Zepto || {};
(function($) {
    $.WX = {};
    const OS_ANDROID = 1;
    const OS_IOS = 2;
    const OS_UNKN = 3;

    $.WX.getOS = function() {
        if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
            return OS_IOS;
        }
        if (/(Android)/i.test(navigator.userAgent)) {
            return OS_ANDROID;
        }

        return OS_UNKN;
    }

    $.WX.os = $.WX.getOS();

    $.WX.Android_WXPandaReader = window.WXPandaReader || {
        getJsCall: function() {
            console.log(json);
        }
    }

    $.WX.Ios_WXPandaReader = function(j) {
        var u = "wx://pandareader/" + j;
        location.href = u;
    }

    $.WX.scToast = function(msg) {
        this.WXPandaReader(JSON.stringify({
            apiName: "native_call",
            params: {
                appFunc: "show_toast",
                data: {
                    msg: msg
                },
                handleId: ""
            }
        }))
    };

    $.WX.WXPandaReader = function(j) {
        switch ($.WX.os) {
            case OS_ANDROID:
                var d = JSON.parse(j),
                $this = this;
                if (typeof d.length != "undefined" && d.length > 1) {
                    $.each(d,
                    function(idx, item) {
                        $this.Android_WXPandaReader.getJsCall(JSON.stringify(item))
                    })
                } else {
                    this.Android_WXPandaReader.getJsCall(j)
                }
                break;
            case OS_IOS:
                this.Ios_WXPandaReader(j);
                break;
            default:
                console.log(j);
                break;
        }
    }

    $.WX.nativeCallback = function(j) {
        if (j.handleId != undefined && j.handleId) {
            $(window).trigger("native:callback", [j.handleId, j]);
        }
    };
})($);
