// 1、通常检测浏览器是否有某种插件，采用按插件分别检测的方式
function hasPlugin(name) {
    name = name.toLowerCase();
    for (var i = 0; i < navigator.plugins.length; i++) {
        if (navigator.plugins[i].name.toLowerCase().indexOf(name) > -1) {
            return true;
        }
    }
    return false;
}

// IE的插件是以COM对象形式存在的，所以必须知道插件的COM标识符。
function hasIEPlugin(comId) {
    try {
        new ActiveXObject(comId);
        return true;
    } catch (error) {
        return false;
    }
}

function hasFlash() {
    var result = hasPlugin("flash");
    if (!result) {
        result = hasIEPlugin("ShockwaveFlash.ShockwaveFlash");
    }
    return result;
}

function hasQuickTime() {
    var result = hasPlugin("QuickTime");
    if (!result) {
        result = hasIEPlugin("QuickTime.QuickTime");
    }
    return result;
}