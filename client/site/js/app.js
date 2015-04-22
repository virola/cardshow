/**
 * @file 轻杂志的JS交互
 */

/**
 * app 模块
 * 
 * @namespace
 */
var app = {};
app.isPC = false;
app.width;
app.height;
app.loop = false;  // 循环展示
app.DEFAULT_WIDTH = 414;
app.DEFAULT_HEIGHT = 736;
app.shareData = {};

app.init = function (options) {

    options = options || {};
    app.loop = options.loop || getUrlParameterByName('loop') || false;

    // PC上的操作
    if (checkIsPC()) {
        app.isPC = true;
        app.width = app.DEFAULT_WIDTH;
        app.height = Math.min(app.DEFAULT_HEIGHT, app.height);
    }

    console.log(app.height, app.width);
    // 设定好页面为计算值
    $('.wrap, .swiper-slide, .swiper-container').height(app.height).width(app.width);

    var swiperOptions = $.extend({
        direction: options.direction || 'vertical',  // 是竖排还是横排滚动，默认是竖排
        speed: 0, 
        loop: app.loop,  // 循环展示
        longSwipesRatio: 0.1,
        preventClicks: false,
        preventClicksPropagation: false
    }, options || {});

    app.swiper = new Swiper('.swiper-container', swiperOptions);

    // 初始化箭头指示
    app.initArrow();

    // 初始化音乐按钮
    app.initMusic();

    // 初始化回到首页按钮事件
    $('.home-btn').on('click', function () {
        app.swiper.slideTo(0);
        return false;
    });

    app.initPC();

    if (options.hashnav) {
        // 绑定hash变化的事件
        $(window).on('hashchange', function (e) {
            var hash = getLocationHash().replace('#', '');

            if (!hash) {
                return;
            }

            for (var i = 0, length = app.swiper.slides.length; i < length; i++) {
                var slide = $(app.swiper.slides).eq(i);
                var slideHash = slide.attr('data-hash');
                if (slideHash === hash && !slide.hasClass(app.swiper.params.slideDuplicateClass)) {
                    var index = slide.index();
                    if (app.swiper.activeIndex == index) {
                        return;
                    }
                    app.swiper.slideTo(index);
                }
            }
        });
    }
    
    // 加载完成后隐藏loading
    loading.init('.preload', function () {
        $('.loading').fadeOut();

        app.initAnim();
    }, 2000);

    return app;
};

/**
 * 初始化音乐播放和暂停事件
 */
app.initMusic = function() {
    app.music = {
        audio: $('audio').length && $('audio')[0] || null,
        on: function () {
            if (app.music.audio) {
                $('.player-btn').removeClass('player-btn-stop');
                app.music.audio.play();
            }
        },
        off: function () {
            if (app.music.audio) {
                $('.player-btn').addClass('player-btn-stop');
                app.music.audio.pause();
            }
        }
    }
    if (!app.music.audio) {
        return false;
    }

    $('.player-btn').on('click', function () {
        var _me = $(this);
        if (_me.hasClass('player-btn-stop')) {
            app.music.on();
        }
        else {
            app.music.off();
        }
        
    });

    return app;
};

/**
 * 获取hash值
 * 
 * @return {string} #hash-name
 */
function getLocationHash() {
    // Firefox下`location.hash`存在自动解码的情况，
    // 比如hash的值是**abc%3def**，
    // 在Firefox下获取会成为**abc=def**
    // 为了避免这一情况，需要从`location.href`中分解
    var index = location.href.indexOf('#');
    var url = index === -1 ? '' : location.href.slice(index + 1);

    return url;
}

/**
 * 获取URL中的参数
 * 
 * @param {string} name 参数名
 * @return {string} 参数值
 */
function getUrlParameterByName(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)'),
    results = regex.exec(location.search);
    return results === null ? '': decodeURIComponent(results[1].replace(/\+/g, ' '))
}

/**
 * 加载模块
 * 
 * @type {Object}
 * 
 * 使用方法：
 * 
 *  loading.init('.slide', function () {
 *      $('.loading').hide();
 *  });
 */
var loading = (function () {

    // 要加载图片的总数
    var allcount;

    // 开始检测加载的时间戳
    var startTime;

    // 已加载图片的数量
    var loadedCount = 0;

    // 要加载的图片
    var loadImgs = [];

    // 是否强制停留至少1s的loading
    var isForcetime;
    var forceTime = 1000;

    // 完成加载图片时的执行函数
    var callbackFn = function () {};

    function init(selector, readycallback, forcetime) {
        if (forcetime) {
            isForcetime = 1;
        }

        if (typeof readycallback == 'function') {
            callbackFn = readycallback;
        }

        // 用于判断是否有重复图片
        var imgMap = {};

        $(selector).each(function (i) {

            var page = $(this);

            // 取这个selector里面的所有img标签的图片进行加载
            page.find('img').each(function () {
                var url = this.src;
                if (imgMap[url]) {
                    return;
                }

                imgMap[url] = 1;
                loadImgs.push(url);
            });

            // 取这个classname的背景图片
            var bgimg = page.css('background-image');
            if (bgimg == 'none' || imgMap[bgimg]) {
                return;
            }
            imgMap[bgimg] = 1;

            bgimg = bgimg.replace(/\'|\"/, '').replace('url(', '').replace(')', '')
            loadImgs.push(bgimg);

            
        });

        allcount = loadImgs.length;


        // 启动超时监控
        startTime = new Date();

        // 启动图片的预加载
        start();

        // 检测图片是否加载完成
        check();
    }

    function start() {
        $.each(loadImgs, function (i, imgurl) {
            var img = new Image();
            img.src = imgurl;
            img.onload = function () {
                if (this.complete) {
                    loadedCount++;
                    // 更新百分比
                    updatePercent(Math.round(loadedCount / allcount * 100));
                }
            };
        });
    }

    var percentText = $('#percentage');

    function updatePercent(value) {
        if (!percentText.length) {
            return;
        }

        percentText.text(value + '%');
    }

    function check() {
        var nowTime = new Date();
        var gap = nowTime - startTime;

        if (isForcetime) {
            if (loadedCount >= allcount && gap > forceTime) {

                // 加载完成，执行回调函数
                callbackFn();
            }
            else {
                setTimeout(function () {
                    check();
                }, 200);
            }
        }
        else {
            if (loadedCount >= allcount) {

                // 加载完成，执行回调函数
                callbackFn();
            }
            else {
                setTimeout(function () {
                    check();
                }, 200);
            }
        }        
    }
    

    return {
        init: init
    };
})();

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
    if (winWidth > app.DEFAULT_WIDTH && (system.win || system.mac || system.xll)) {
        return true;
    } 
    else {
        return false;
    }
}



// 箭头在最后一页的显示隐藏
app.initArrow = function () {
    if (app.loop) {
        return app;
    }

    var arrow = $('.arrow');
    var slideCount = app.swiper.slides.length;
    app.swiper.on('SlideChangeEnd', function (swiper) {
        var curIndex = app.swiper.activeIndex;

        // 是否最后一页
        if (curIndex >= slideCount - 1) {
            arrow.hide();
        }
        else {
            arrow.show();
        }
    });
    return app;
};

// PC上的事件初始化
app.initPC = function () {
    if (!app.isPC) {
        return false;
    }
    var left = $(window).width() / 2 + app.width / 2;

    var copyright = $('#copyright');
    copyright.css({
        'top': app.height + 'px',
        'opacity': 1
    });
    copyright.show();

    var pcboard = $('#pc-board');
    pcboard.find('.qrcode div')
        .html('<img src=\"http://plus.94uv.com/qrcode/urlQrcode.html?data=' + decodeURIComponent(location.href) + '\"/>');

    pcboard.css({
        left: left + 'px'
    }).show();

    app.initPager();

    return app;
};
app.initPager = function () {
    // 初始化PC上的翻页按钮事件
    var pager = $('#pc-board .pager a');
    var pPrev = $('#btn-prev');
    var pNext = $('#btn-next');
    pager.show();

    var slideCount = app.swiper.slides.length;

    pNext.on('click', function () {
        app.swiper.slideNext();
        return false;
    });
    pPrev.on('click', function () {
        app.swiper.slidePrev();
        return false;
    });

    var adjustPagers = function () {
        if (app.loop) {
            return false;
        }

        var curIndex = app.swiper.activeIndex;

        // 是否最后一页
        pager.css('visibility', 'visible');
        if (curIndex >= slideCount - 1) {
            pNext.css('visibility', 'hidden');
        }
        else if (curIndex == 0) {
            pPrev.css('visibility', 'hidden');
        }
        else {
            pager.show();
        }
    };

    app.swiper.on('SlideChangeEnd', adjustPagers);
    adjustPagers();
};

app.options = {
    doms : {
        main: '#wrap',
        loading: '#loading',
        slides: '#slides-content',
        controls: '#g-ctrl'
    },
    tpls: {
        loading: '#tpl-loading',
        page: '#tpl-page',
        pc: '#tpl-pc',
        controls: '#tpl-global'
    }
}; 

app.setOptions = function (options) {
    app.options = $.extend(app.options, options);
    return app;
};

/**
 * 渲染整个页面
 * 
 * @param {Object} data 数据
 */
app.renderTemplates = function (data) {
    var template = data.template;
    if (!template) {
        app.isRender = 0;
        return false;
    }

    app.updateViewport(template);
    app.renderSlides(template.slides);

    app.isRender = 1;
};

app.updateViewport = function(data) {
    app.shareData.title = document.title = data.title;
    app.shareData.desc = data.content;
    app.shareData.imgUrl = data.sharepic;

    app.loop = data.loop || false;

    var global = data.global;

    var globalTpl = Handlebars.compile($(app.options.tpls.controls).html());
    var globalHtml = globalTpl(global);

    $(app.options.doms.controls).html(globalHtml);
};
app.getBgSize = function(w, h) {
    return (w > 0 ? w + 'px' : w) 
        + ' ' 
        + (h > 0 ? h + 'px' : h);
};
app.renderSlides = function (slides) {
    
    $.each(slides, function (i, data) {
        var slide = $('<div>').addClass('swiper-slide');
        
        slide.attr('data-effect', data.effect);
        // render background
        app.renderBg(slide, data.bg);

        // render contents
        app.renderContents(slide, data.content);
        slide.appendTo($(app.options.doms.slides));
    });
};
app.renderBg = function (slide, bg) {
    var bgObj = $('<div>').addClass('sugar-bg');
    if (bg.pic) {
        bgObj.css('background-image', 'url(' + bg.pic + ')');
    }
    bgObj.css({
        'background-color': bg.bgcolor,
        'background-size': app.getBgSize(bg.picwidth, bg.picheight),
        'background-position': bg.picleft + 'px ' + bg.pictop + 'px'
    });
    bgObj.appendTo(slide);
    
};
app.renderContents = function (slide, contents) {
    slide = $(slide);
    if (!slide.length) {
        return;
    }
    function setAnim(obj, options) {
        obj.css({
            '-webkit-animation-name': options.show,
            '-webkit-animation-duration': options.speed
            // ,
            // '-webkit-animation-play-state': 'paused'
        });
        if (options.delay) {
            obj.css({
                '-weibkit-animation-delay': options.delay
            });
        }

    }

    var contWrap = $('<div>').addClass('sugar-content');

    $.each(contents, function (i, item) {
        var type = item.type;
        switch (type) {
            case 'text':
                var obj = $('<div>').addClass('sugar-text');
                obj.css(item.style).css('background-color', item.bgcolor);
                obj.text(item.text).data({
                    'show': item.show
                });
                obj.attr('data-show', item.show);
                if (item.show) {
                    setAnim(obj, item);
                }
                obj.appendTo(contWrap);
                break;
            default:
                // whatever
        }
    });

    contWrap.appendTo(slide);

};

var PAGE_STYLE = {
    'toup': 'page-moveFromTopSlow'
};

function handleSlideAnim(slide, state) {
    var slides = $('.swiper-slide');
    // var target = $('.swiper-slide-active');
    var target = $(slide);
    
    if (state == 'end') {
        $.each(slides, function (i, item) {
            var me = $(item);
            me.removeClass(PAGE_STYLE[me.data('effect')]);
        });
    }
    

    if (state == 'start') {
        var effect = target.data('effect');
        if (effect) {
            slides.addClass('noeffect');
            target.removeClass('noeffect').addClass(PAGE_STYLE[effect]);
        }
    }

    
}

app.initAnim = function () {
    console.log('init anim');

    handleSlideAnim(app.swiper.slides[app.swiper.activeIndex], 'start');
    
    app.swiper.on('SlideChangeStart', function (swiper) {
        var slide = swiper.slides[swiper.activeIndex];
        handleSlideAnim(slide, 'start');
    });

    app.swiper.on('SlideChangeEnd', function (swiper) {
        var slide = swiper.slides[swiper.activeIndex];
        handleSlideAnim(slide, 'end');
    });
};