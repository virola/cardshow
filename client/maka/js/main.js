function initweixin(a) {
    wx.config({
        debug: !1,
        appId: a.appid,
        timestamp: a.timestamp,
        nonceStr: a.nonceStr,
        signature: a.signature,
        jsApiList: ["onMenuShareTimeline", "onMenuShareAppMessage", "onMenuShareQQ", "onMenuShareWeibo"]
    }), wx.ready(function() {
        wx.onMenuShareAppMessage({
            title: a.title,
            desc: a.desc,
            link: a.link,
            imgUrl: a.imgUrl,
            type: "",
            dataUrl: "",
            success: function() {},
            cancel: function() {}
        }), wx.onMenuShareTimeline({
            title: a.title,
            link: a.link,
            imgUrl: a.imgUrl,
            success: function() {},
            cancel: function() {}
        }), wx.onMenuShareQQ({
            title: a.title,
            desc: a.desc,
            link: a.link,
            imgUrl: a.imgUrl,
            success: function() {},
            cancel: function() {}
        }), wx.onMenuShareWeibo({
            title: a.title,
            desc: a.desc,
            link: a.link,
            imgUrl: a.imgUrl,
            success: function() {},
            cancel: function() {}
        })
    })
}

function settitle(data) {
    data = eval(data), versiondata = data, document.title = data.title, thum = data.thum ? data.thum : IMG_URL_DEFAULT, viewer_isvip = 0 == data.vip || "false" == data.vip || void 0 == data.vip ? !1 : !0, data.status < 0 && (window.location.href = "offline.html")
}

function hideSP() {
    $("#sppage").transition({
        y: "100%"
    }).fadeOut()
}
var viewer_isvip = !1,
    thum, versiondata;
$.ajax({
    type: "post",
    url: get_version_url,
    dataType: "html",
    data: {
        id: _pid_
    },
    success: function(json) {
        settitle(json), getversion(eval(json))
    },
    error: function() {}
}), $.ajax({
    type: "get",
    url: report_url,
    dataType: "html",
    success: function() {
        console.log("report suc")
    },
    error: function() {}
});

var DEFAULT_WIDTH = 640;
var DEFAULT_HEIGHT = 1012;
/**
 * 返回是否是PC页面
 * 
 * @return {boolean} true / false
 */
function checkIsPC() {
    var system = {
        win: false,
        mac: false,
        xll: false
    };
    var p = navigator.platform;
    system.win = p.indexOf('Win') == 0;
    system.mac = p.indexOf('Mac') == 0;
    system.x11 = (p == 'X11') || (p.indexOf('Linux') == 0);
    var winWidth = $(window).width();
    if ((winWidth > DEFAULT_WIDTH && window.devicePixelRatio < 2) && (system.win || system.mac || system.xll)) {
        return true;
    } 
    else {
        return false;
    }
}
$(function () {
    var app = {
        width: $(window).width(),
        height: $(window).height()
    };
    if (checkIsPC()) {
        app.width = DEFAULT_WIDTH;
        app.height = DEFAULT_HEIGHT;
    }
    $('#sugar').width(app.width).height(app.height);
});