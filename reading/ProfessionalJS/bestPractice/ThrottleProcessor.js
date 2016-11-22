// 延迟执行，并且防止重复调用
var processor = {
    timeoutId: null,
    performProcessing: function() {
        //实际执行的代码
    },
    process: function() {
        clearTimeout(this.timeoutId);
        var _this = this;
        this.timeoutId = setTimeout(function() {
            _this.performProcessing();
        }, 100);
    }
}

processor.process();