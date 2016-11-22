// 1、优先能力检测
function isSortable(object) {
    return typeof object.sort == "function";
}

var o = new Object();

function isHostMethod(object, method) {
    var t = typeof object[method];
    return t == "function" || (!!(t == "object" && object[method])) || t == "unknown";
}
console.log(isHostMethod(o, "toString"));
console.log(isHostMethod(o, "toXXX"));

// 2、其次怪癖检测

// ie8以及更早版本，如果某个实例属性与标记为[[DontEnum]]的某个原形属性同名，那么该实例属性将不会出现在for-in中
function hasDontEnumQuirk() {
    var o = { toString: function() {} };
    for (var prop in o) {
        if (prop == "toString") {
            return false;
        }
    }
    return true;
}


// 3、不能通过1、2检测或者需要更多信息时，通过用户代理字符串，检测呈现引擎、平台、windows操作系统、移动设备、游戏系统
var client = function() {
    var engine = {
        ie: 0,
        gecko: 0,
        webkit: 0,
        khtml: 0,
        opera: 0,
        //完整版本号
        ver: null
    };
    var browser = {
        ie: 0,
        firefox: 0,
        safari: 0,
        konq: 0,
        opera: 0,
        chrome: 0,
        //具体版本号
        ver: null
    };
    var system = {
        // OS
        win: false,
        mac: false,
        x11: false,

        // 移动设备
        iphone: false,
        ipad: false,
        ipod: false,
        ios: false,
        android: false,
        nokiaN: false,
        winMobile: false,
        // 游戏系统
        wii: false,
        ps: false
    };

    // 检测呈现引擎和浏览器
    var ua = navigator.userAgent;
    if (window.opera) {
        engine.ver = browser.ver = window.opera.version();
        engine.opera = browser.opera = parseFloat(engine.ver);
    } else if (/AppleWebKit\/(\S+)/.test(ua)) {
        engine.ver = RegExp["$1"];
        engine.webkit = parseFloat(engine.ver);
        if (/Chrome\/(\S+)/.test(ua)) {
            browser.ver = RegExp["$1"];
            browser.chrome = parseFloat(browser.ver);
        } else if (/Version\/(\S+)/.test(ua)) {
            browser.ver = RegExp["$1"];
            browser.safari = parseFloat(browser.ver);
        } else {
            var safariVersion = 1;
            if (engine.webkit.ver < 100) {
                safariVersion = 1;
            } else if (engine.webkit.ver < 312) {
                safariVersion = 1.2;
            } else if (engine.webkit.ver < 412) {
                safariVersion = 1.3;
            } else {
                safariVersion = 2;
            }
            browser.safari = browser.ver = parseFloat(safariVersion);
        }
    } else if (/KHTML\/(\S+)/.test(ua) || /Konqueror\/([^;]+])/.test(ua)) {
        engine.ver = browser.ver = RegExp["$1"];
        engine.khtml = browser.konq = parseFloat(engine.ver);
    } else if (/rv:([^\)]+)\( Gecko\/\d{8}/.test(ua)) {
        engine.ver = RegExp["$1"];
        engine.gecko = parseFloat(engine.ver);
        if (/Firefox\/(\S+)/.test(ua)) {
            browser.ver = RegExp["$1"];
            browser.firefox = parseFloat(browser.ver);
        }
    } else if (/MSIE ([^;]+])/.test(ua)) {
        engine.ver = browser.ver = RegExp["$1"];
        engine.ie = browser.ie = parseFloat(engine.ver);
    }

    browser.ie = engine.ie;
    browser.opera = engine.opera;

    // 检测平台
    var p = navigator.platform;
    system.win = p.indexOf("Win") == 0;
    system.mac = p.indexOf("Mac") == 0;
    system.x11 = (p == "X11") || (p.indexOf("Linux") == 0);

    // 检测windows操作系统
    if (system.win) {
        if (/Win(?:dows )?([^do]{2})\s?(\d+\.\d+)?/.test(ua)) {
            if (RegExp["$1"] == "NT") {
                switch (RegExp["$2"]) {
                    case "5.0":
                        system.win = "2000";
                        break;
                    case "5.1":
                        system.win = "XP";
                        break;
                    case "6.0":
                        system.win = "Vista";
                        break;
                    case "6.1":
                        system.win = "7";
                        break;
                    default:
                        system.win = "NT";
                        break;
                }
            } else if (RegExp["$1"] == "9x") {
                system.win = "ME";
            } else {
                system.win = RegExp["$1"];
            }
        }
    }

    //移动设备
    system.iphone = ua.indexOf("iPhone") > -1;
    system.ipad = ua.indexOf("iPad") > -1;
    system.ipod = ua.indexOf("iPod") > -1;
    system.nokiaN = ua.indexOf("NokiaN") > -1;
    // windows mobile
    if (system.win == "CE") {
        system.winMobile = system.win;
    } else if (system.win == "Ph") {
        if (/Windows Phone OS (\d+\.\d+)/.test(ua)) {
            system.win = "Phone";
            system.winMobile = parseFloat(RegExp["$1"]);
        }
    }

    //检测IOS版本
    if (system.mac && ua.indexOf("Mobile") > -1) {
        if (/CPU (?:iPhone )?OS (\d+_\d+)/.test(ua)) {
            system.ios = parseFloat(RegExp["$1"].replace("_", "."));
        } else {
            system.ios = 2; //不可检测
        }
    }

    //检测Android
    if (/Android (\d+\.\d+)/.test(ua)) {
        system.android = parseFloat(RegExp["$1"]);
    }

    //检测游戏系统
    system.wii = ua.indexOf("Wii") > -1;
    system.ps = /playstation/.test(ua);

    return {
        engine: engine,
        browser: browser,
        system: system
    };
}();