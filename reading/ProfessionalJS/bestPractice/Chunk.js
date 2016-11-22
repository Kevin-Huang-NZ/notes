// js的执行是一个阻塞操作，脚本运行时间越长，用户无法与页面交互的时间越久
// 针对运行时间特别长的js脚本，浏览器会弹框提示错误
// 为了避免由于循环处理大数组导致的脚本执行时间超长，可以使用chunk方法
// chunk方法通过settimeout，以一定时间间隔分批处理数组内容

function chunk(array, process, context) {
    if (!(isArray(array) && isFunction(process))) {
        return false;
    }
    setTimeout(function() {
        var item = array.shift();
        process.call(context, item);
        if (array.length > 0) {
            setTimeout(arguments.callee, 100);
        }
    }, 100);
}

function isArray(value) {
    return Object.prototype.toString.call(value) == "[object Array]";
}

function isFunction(value) {
    return Object.prototype.toString.call(value) == "[object Function]";
}