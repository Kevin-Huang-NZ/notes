var EventUtil = {
    // 为元素添加事件处理程序
    addHandler: function(element, type, handler) {
        if (element.addEventListener) {
            element.addEventListener(type, handler, false); // false代表在事件冒泡阶段触发
        } else if (element.attachEvent) {
            element.attachEvent('on' + type, handler);
        } else {
            element['on' + type] = handler; // dom0级方法
        }
    },
    // 移除元素上的时间处理程序
    removeHandler: function(element, type, handler) {
        if (element.removeEventListener) {
            element.removeEventListener(type, handler, false); // 与addEventListener完全一致的参数
        } else if (element.detachEvent) {
            element.detachEvent('on' + type, handler);
        } else {
            element['on' + type] = null; // dom0级方法
        }
    },
    // 获取event对象
    getEvent: function(event) {
        return event ? event : window.event;
    },
    // 获取事件的目标
    getTarget: function(event) {
        return event.target || event.srcElement;
    },
    // 取消事件的默认行为，比如：点击a标签跳转到href
    preventDefault: function(event) {
        if (event.preventDefault) {
            event.preventDefault();
        } else {
            event.returnValue = false;
        }
    },
    // 阻止事件冒泡
    stopPropagation: function(event) {
        if (event.stopPropagation) {
            event.stopPropagation();
        } else {
            event.cancelBubble = true;
        }
    },
    // 获取事件相关元素
    getRelatedTarget: function(event) {
        if (event.relatedTarget) {
            return event.relatedTarget;
        } else if (event.toElement) { // IE mouseout
            return event.toElement;
        } else if (event.fromElement) { // IE mouseover
            return event.fromElement;
        } else {
            return null;
        }
    },
    // 获取鼠标按钮
    getButton: function(event) {
        if (document.implementation.hasFeature("MouseEvents", "2.0")) {
            return event.button; // 0-鼠标主键；1-鼠标中键；2-鼠标次键。
        } else {
            switch (event.button) {
                case 0:
                case 1:
                case 3:
                case 5:
                case 7:
                    return 0;
                case 2:
                case 6:
                    return 2;
                case 4:
                    return 1;
            }
        }
    },
    // 获取鼠标滚轮增量
    getWheelDelta: function(event) {
        if (event.wheelDelta) {
            return (client.engine.opera && client.engine.opera < 9.5 ? -event.wheelDelta : event.wheelDelta);
        } else {
            return -event.detail * 40;
        }
    },
    // 获得按键的ASCII编码
    getCharCode: function(event) {
        if (typeof event.charCode == "number") {
            return event.charCode;
        } else {
            return event.keyCode;
        }
    },
    // 获取剪切板的内容
    getClipboardText: function(event) {
        var clipboardData = (event.clipboardData || window.clipboardData);
        return clipboardData;
    },
    // 设置剪切板的内容
    setClipboardText: function(event, value) {
        if (event.clipboardData) {
            return event.clipboardData.setData("text/plain", value);
        } else if (window.clipboardData) {
            return window.clipboardData.setData("text", value);
        }
    }
};