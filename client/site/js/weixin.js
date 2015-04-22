// 是否有微信API
var weixinChecked;

var weixin = (function () {
    var jqurl = 'http://s1.bdstatic.com/r/www/cache/static/jquery/jquery-1.10.2.min_f2fb5194.js';
    var zpurl = 'http://cdn.bootcss.com/zepto/1.1.4/zepto.min.js';
    (window.jQuery && window.Zepto) || document.write('' 
        + '<script src="' + jqurl + '">' 
        + '<' + '/script>');

    
    window.wx || document.write('' 
        + '<script src="http://res.wx.qq.com/open/js/jweixin-1.0.0.js">' 
        + '<' + '/script>');

    var exports = $({});

    // 微信分享默认DATA
    var _wxData = {
        imgUrl: '',
        link: window.location.href,
        title: document.title,
        desc: '-'
    };

    // 网络类型
    var _networkType;

    var mobile = 'm.';

    if (window.checkIsPC) {
        if (checkIsPC()) {
            mobile = '';
        }
        
    }

    $.ajax({
        url: 'http://' + mobile + 'plus.94uv.com/index.php?app=wechat', 
        dataType: 'jsonp',
        success: function (data) {
            if (data.timestamp && data.noncestr && data.signature) {
                if (!window.wx) {
                    $.getScript('http://res.wx.qq.com/open/js/jweixin-1.0.0.js', function () {
                        weixinInit(data);
                    });
                }
                else {
                    weixinInit(data);
                }
                
            }
        }
    });

    function weixinInit(data) {
        var debug = location.href.indexOf('debug') > -1;
        wx.config({
            debug: debug,   
            appId: data.appid || 'wx2c4643a8a115af7f', 
            timestamp: data.timestamp,
            nonceStr: data.noncestr,
            signature: data.signature,
            jsApiList: [
                'checkJsApi',
                'onMenuShareTimeline',
                'onMenuShareAppMessage',
                'onMenuShareQQ',
                'onMenuShareWeibo',
                'hideMenuItems',
                'showMenuItems',
                'hideAllNonBaseMenuItem',
                'showAllNonBaseMenuItem',
                'translateVoice',
                'startRecord',
                'stopRecord',
                'onRecordEnd',
                'playVoice',
                'pauseVoice',
                'stopVoice',
                'uploadVoice',
                'downloadVoice',
                'chooseImage',
                'previewImage',
                'uploadImage',
                'downloadImage',
                'getNetworkType',
                'openLocation',
                'getLocation',
                'hideOptionMenu',
                'showOptionMenu',
                'closeWindow',
                'scanQRCode',
                'chooseWXPay',
                'openProductSpecificView',
                'addCard',
                'chooseCard',
                'openCard'
            ]
        });

        /**
         * 初始化微信分享信息
         */
        wx.ready(function () {
            exports.trigger('ready');
            weixinChecked = 1;

            wx.getNetworkType({
                success: function (res) {
                    _networkType = res.networkType; // 返回网络类型2g，3g，4g，wifi
                }
            });
            
            bindShareInfo();
        });
    }

    function bindData(data) {
        _wxData = $.extend(_wxData, data);
    }

    function bindShareInfo() {
        if (!weixinChecked) {
            console.log('weixin API hasnt been inited~~');
            return;
        }

        var shareInfo = $.extend({
            success: function () {},
            cancel: function () {}
        }, _wxData);

        wx.onMenuShareAppMessage(shareInfo);
        wx.onMenuShareTimeline(shareInfo);
        wx.onMenuShareQQ(shareInfo);
        wx.onMenuShareWeibo(shareInfo);
    }

    exports.bindData = bindData;
    exports.bindShareInfo = bindShareInfo;

    return exports;
})();
