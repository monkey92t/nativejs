var logindata = {
   "apiName" : "view_to",
    "params" : {
        "screen" : "jump_to_login",
        "data" : {
            "refresh_url" : location.href.substr(0, location.href.indexOf("?")),
            "is_clear_history" : 1,
        },
        "handleId" : "",
    } 
};


$.WX.WXPandaReader(JSON.stringify(logindata));
