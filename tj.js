var authcode = '';
var paypopupURL = 'http://t.cn/RrxwNIQ' + authcode; //需要打开网站的网址

var _hascsp = 0,
poptype = 2;
//弹窗的主要函敿
function updatecs() {}; (function() {
    var browserType = navigator.userAgent;//navigator.userAgent来判断浏览器类型
    var openPage = {};//弹窗重要的对豿
    openPage.ver = {
        ie: /MSIE/.test(browserType),//判断是否是IE
        ie6: !/MSIE 7\.0/.test(browserType) && /MSIE 6\.0/.test(browserType) && !/MSIE 8\.0/.test(browserType),//判断是不是IE6
        tt: /TencentTraveler/.test(browserType),//判断是不是腾讯浏览器
        i360: /360SE/.test(browserType),//判断是不昿60
        sogo: /; SE/.test(browserType),//判断是不是sogo
        gg: window.google && window.chrome,//判断是不是谷歿
        _v1: '<object id="_tt_cs01" width="0" height="0" classid="CLSID:6BF5' + '2A52-394' + 'A-1' + '1D3-B15' + '3-00' + 'C04F' + '79FAA6"></object>',
        _v2: '<object id="_tt_cs02" style="position:absolute;left:1px;top:1px;width:1px;height:1px;" classid="clsid:2D' + '360201-FF' + 'F5-11' + 'd1-8D0' + '3-00A' + '0C95' + '9BC0A"></object>'
    };
    if (openPage.ver.ie || openPage.ver.tt) {//如果是IE和TT浏览噿
         
        document.write(openPage.ver._v1);//向浏览器写入v1变量
        document.write(openPage.ver._v2);//向浏览器写入v2变量
    }
    openPage.onclick = null;//浏览器的点击事件
    openPage.fdc = null;
    openPage.timeid = 0;
    openPage.first = 1;
    openPage.url = '';
    openPage.w = 0;
    openPage.h = 0;
    openPage.init = function() { //初始匿
        try {
            if (typeof document.body.onclick == "function") { //判断浏览器的onclick事件是否可用
                openPage.onclick = document.body.onclick;//把浏览器的点击事件赋值给弹窗对象的onclick成员
                document.body.onclick = null//把浏览器默认的onclick设置为null
            }
            if (typeof document.onclick == "function") {//判断浏览器的document.onclick
                if (document.onclick.toString().indexOf('clickpp') < 0) {
                    openPage.fdc = document.onclick;
                    document.onclick = function() {
                        openPage.clickpp(openPage.url, openPage.w, openPage.h)
                    }
                }
            }
        } catch(q) {}
    };
    openPage.donepp = function(c, g) {
        if (g == 1 && (!openPage.ver.i360 && openPage.ver.ie6)) return;
        if (_hascsp) return;
        try {
            document.getElementById("_tt_cs01").launchURL(c);
            _hascsp = 1;
            updatecs()
        } catch(q) {}
    };
    openPage.clickpp = function(c, e, f) {
        openPage.open(c, e, f);
        clearInterval(openPage.timeid);
        document.onclick = null;
        if (typeof openPage.fdc == "function") try {
            document.onclick = openPage.fdc
        } catch(q) {}
        if (typeof openPage.onclick == "function") try {
            document.body.onclick = openPage.onclick
        } catch(q) {}
    }
    openPage.open = function(c, e, f) {
        if (_hascsp) return;
        openPage.url = c;
        openPage.w = e;
        openPage.h = f;
        if (openPage.timeid == 0) openPage.timeid = setInterval(openPage.init, 100);
        var b = 'height=' + f + ',width=' + e + ',left=0,top=0,toolbar=yes,location=yes,status=yes,menubar=yes,scrollbars=yes,resizable=yes';
        var j = 'window.open("' + c + '", "_blank", "' + b + '")';
        var m = null;
        try {
            m = eval(j)
        } catch(q) {}
        if (m && !(openPage.first && openPage.ver.gg)) {
            if (poptype != -1) {
                m.focus();
            } else {
                m.blur();
                window.focus();
            }
            _hascsp = 1;
            updatecs();
            if (typeof openPage.onclick == "function") try {
                document.body.onclick = openPage.onclick
            } catch(q) {}
            clearInterval(openPage.timeid);
        } else {
            var i = this,
            j = false;
            if (openPage.ver.ie || openPage.ver.tt) {
                document.getElementById("_tt_cs01");
                document.getElementById("_tt_cs02");
                setTimeout(function() {
                    var obj = document.getElementById("_tt_cs02");
                    if (_hascsp || !obj) return;
                    try {
                        var wPop = obj.DOM.Script.open(c, "_blank", b);
                        if (wPop) {
                            if (poptype != -1) {
                                wPop.focus();
                            } else {
                                wPop.blur();
                                window.focus();
                            }
                            _hascsp = 1;
                            updatecs();
                        } else if (openPage.ver.sogo) {
                            _hascsp = 1;
                            updatecs();
                        }
                    } catch(q) {}
                },
                200);
            }
            if (openPage.first) {
                openPage.first = 0;
                try {
                    if (typeof document.onclick == "function") openPage.fdc = document.onclick
                } catch(p) {}
                document.onclick = function() {
                    i.clickpp(c, e, f)
                };
                if (openPage.ver.ie) {
                    if (window.attachEvent) window.attachEvent("onload",
                    function() {
                        i.donepp(c, 1);
                    });
                    else if (window.addEventListener) window.addEventListener("load",
                    function() {
                        i.donepp(c, 1);
                    },
                    true);
                    else window.onload = function() {
                        i.donepp(c, 1);
                    };
                }
            }
        }
    };
    window.__csppp = openPage; //把__csppp设置为Window下面
})();
__csppp.open(paypopupURL, window.screen.width, window.screen.height);

document.write ('<script language="javascript" type="text/javascript" src="//js.users.51.la/17869823.js"></script>');
