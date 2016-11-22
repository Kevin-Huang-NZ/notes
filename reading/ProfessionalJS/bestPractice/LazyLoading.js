// 在浏览器功能检查时，通常要执行多次if
// 而且在页面活动期间，每次检查都要执行多次if
// 所以有了延迟加载，解决这个性能问题

//第一种延迟加载方法的方法(第一次调用时，重定义方法)
function createXHR() {
    if (typeof XMLHttpRequest != "undefined") {
        createXHR = function() {
            return new XMLHttpRequest();
        };
    } else if (typeof ActiveXObject != "undefined") {
        createXHR = function() {
            if (typeof arguments.callee.activeXString != "string") {
                var versions = ["MSXML2.XMLHttp.6.0", "MSXML2.XMLHttp.3.0", "MSXML2.XMLHttp"],
                    i, len;
                for (i = 0, len = versions.length; i < len; i++) {
                    try {
                        new ActiveXObject(versions[i]);
                        arguments.callee.activeXString = versions[i];
                        break;
                    } catch (ex) {

                    }
                }
            }
            return new ActiveXObject(arguments.callee.activeXString);
        };
    } else {
        recreateXHR = function() {
            throw new Error("No XHR object available.");
        };
    }
}

// 第二种延迟加载方法的方法
var createXHR = function() {
    if (typeof XMLHttpRequest != "undefined") {
        return function() {
            return new XMLHttpRequest();
        }
    } else if (typeof ActiveXObject != "undefined") {
        return function() {
            if (typeof arguments.callee.activeXString != "string") {
                var versions = ["MSXML2.XMLHttp.6.0", "MSXML2.XMLHttp.3.0", "MSXML2.XMLHttp"],
                    i, len;
                for (i = 0, len = versions.length; i < len; i++) {
                    try {
                        new ActiveXObject(versions[i]);
                        arguments.callee.activeXString = versions[i];
                        break;
                    } catch (ex) {

                    }
                }
            }
            return new ActiveXObject(arguments.callee.activeXString);
        }
    } else {
        return function() {
            throw new Error("No XHR object available.");
        }
    }
};