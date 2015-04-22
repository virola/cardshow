!function(e,t){var n=t||{each:function(e,t){for(var n=0;n<e.length;n++)t(n,e[n])},map:function(e,t){for(var n=0;n<e.length;n++)e[n]=t(e[n],n)}},r={getUrlPara:function(t){var n=e.location.search.replace(/^\?/g,""),o=n;try{o=decodeURI(n)}catch(i){o=n.replace(/"%26"/g,"&")}return r.getParaFromString(o,t)},getHashPara:function(t){var n=e.location.href.match(/#(.*)$/);return r.getParaFromString(n?n[1]:"",t)},getParaFromString:function(e,t){var r={};return n.each((""+e).match(/([^=&#\?]+)=[^&#]+/g)||[],function(e,t){var n=t.split("="),o=decodeURIComponent(n[1]);void 0!==r[n[0]]?r[n[0]]+=","+o:r[n[0]]=o}),t?r[t]||"":r},safeHTML:function(e){return String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")},addUrlPara:function(e,t,o){var i,a=(e+"").split("#");return a[0]=a[0].replace(/&+$/,""),o&&(a[0]=r.removeUrlPara(a[0],n.map(t.match(/([^=&#\?]+)=[^&#]+/g),function(e){return e.replace(/=.+$/,"")}))),i=a[0].indexOf("?")+1?"&":"?",(a[0]+i+t+(a.length>1?"#"+a[1]:"")).replace(/\?\&/,"?")},removeUrlPara:function(e,t){var r=e.split("#"),o=r[0].split("?"),i=o[0],a=o.length>1?o[1]:"",c=r.length>1?"#"+r[1]:"",p="string"==typeof t&&t?[t]:t.join?t:[];return p.length&&a?(n.map(p,function(e){return e.replace(/([\\\(\)\{\}\[\]\^\$\+\-\*\?\|])/g,"\\$1")}),(i+"?"+a.replace(new RegExp("(?:^|&)(?:"+p.join("|")+")=[^&$]+","g"),"").replace(/^&/,"")).replace(/\?$/,"")+c):i.replace(/\?.+$/,"")+c},fillUrl:function(t){if("string"!=typeof t||""==t)return t;if(!/^http/i.test(t)){var n=e.location.port||"80",r=/^\//.test(t);t=r?e.location.protocol+"//"+e.location.host+("80"==n?"":":"+n)+t:document.URL.replace(/\/[^\/]*$/g,"/")+t}return t},format:function(e){var t=/\{([\w\.]+)\}/g,n=/^\d+$/,r=t.compile?t.compile(t.source,"g")||t:t,o=Object.prototype.toString,i=Array.prototype.slice;return function(t,a){if(a===e||null===a)return t;var c=!0,p=o.call(a),l="[object Object]"===p?(c=!1,a):"[object Array]"===p?a:i.call(arguments,1),u=c?l.length:0;return String(t).replace(r,function(t,r){var o,i,a,p=n.test(r);if(p&&c)return o=parseInt(r,10),u>o?l[o]:t;i=r.split("."),a=l;for(var d=0;d<i.length;d++)a=a[i[d]];return a===e?t:a})}}()};t?t.extend(t,r):e.AppCoreTools=r}(window,window.jQuery||window.Zepto),function(e){var t=function(e,t){var n=document.getElementsByTagName("head")[0]||document.documentElement||document.body,r=document.createElement("script");r.type="text/javascript",r.charset="UTF-8";var o=!1;r.onload=r.onreadystatechange=function(){o||this.readyState&&!{loaded:1,complete:1}[this.readyState]||(o=!0,r.onload=r.onreadystatechange=null,this.parentNode.removeChild(this),t&&t(),n=r=null)},r.src=e,n.appendChild(r,n.lastChild)},n=function(){AppCore.helper.loadTextCss("@media screen and (min-width:240px){#wapShareWrap a{font-size:9px}}@media screen and (min-width:320px){#wapShareWrap a{font-size:12px}}@media screen and (min-width:380px){#wapShareWrap a{font-size:14px}}@media screen and (min-width:420px){#wapShareWrap a{font-size:16px}}@media screen and (min-width:450px){#wapShareWrap a{font-size:18px}}@media screen and (min-width:480px){#wapShareWrap a{font-size:18px}}@media screen and (min-width:540px){#wapShareWrap a{font-size:20.25px}}@media screen and (min-width:600px){#wapShareWrap a{font-size:22px}}@media screen and (min-width:640px){#wapShareWrap a{font-size:24px}}"),"trip"===AppCore.getAppName()&&AppCore.trip.setActionButton({title:"\u5206\u4eab"},function(){AppCore.shareNow()})},r="http://pimg1.126.net/mail/AppCore/min/";document.addEventListener("DOMContentLoaded",function(){return window.AppCore?void n():void window.setTimeout(function(){if(e)t(r+"share.js?k19",n);else{var o=window.$;t(r+"h5.zepto.js?v3",function(){o&&(window.$=o),e=window.Zepto,t(r+"share.js?k19",n)})}},10)},!1),window.h5Share={init:function(e){if(window.AppCore){var t=e||{};t.initOnly=1,AppCore.share(t,window.__shareCallback),this.__inited=1,h5Share.init=function(){}}else window.setTimeout(function(){h5Share.init(e)},50)},share:function(){window.AppCore&&this.__inited?AppCore.shareNow():window.AppCore?window.setTimeout(function(){h5Share.__inited?AppCore.shareNow():window.console&&console.log("[h5Share] share\u65b9\u6cd5\u9700\u8981\u5728init\u4e4b\u540e\u8c03\u7528")},50):window.setTimeout(function(){h5Share.share()},50)},confAndBind:function(e){window.AppCore?(AppCore.share(e,window.__shareCallback),this.__inited=1):window.setTimeout(function(){h5Share.confAndBind(e)},50)}}}(window.jQuery||window.Zepto);