
$(function () {
    var app = window.app || {};

    app.loop = false;  // 是否循环展示
    app.height = $(window).height();
    app.width = $(window).width();

    // PC上展现的宽度和高度，根据实际的设计图去调整这个高宽
    app.DEFAULT_WIDTH = 640;
    app.DEFAULT_HEIGHT = 1004;

    $.getJSON(URL_GET_DATA).success(function (resp) {
        if (resp.status == 0) {
            var data = resp.data;
            app.renderTemplates(data || {});
            
            app.init({
                hashnav: data.template.hashnav
            });
        }
        else {
            alert(resp.error_msg || '请求不对，没有这个地址！');
            // window.location.href = '404.html';
            // ... fail
        }
    }).error(function () {
        console.log(arguments);
        // window.location.href = '500.html';
    });

    

});