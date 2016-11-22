var name = "global excution context";

function log() {

    output("myLogArea", "\n-------------------------我是分割线-----------闭包导致的问题---------------\n");

    function createFunctions() {
        var result = new Array();

        for (var i = 0; i < 10; i++) {
            result[i] = function() {
                return i;
            };
        }

        return result;
    }

    output("myLogArea", createFunctions()[0]());
    output("myLogArea", createFunctions()[1]());
    output("myLogArea", createFunctions()[8]());
    output("myLogArea", createFunctions()[9]());

    output("myLogArea", "\n-------------------------我是分割线-----------通过传参打破闭包，内部函数不直接引用外部函数的变量，通过参数传递外部变量的值---------------\n");

    function createFunctions1() {
        var result = new Array();

        for (var i = 0; i < 10; i++) {
            result[i] = function(num) {
                return function() {
                    return num;
                };
            }(i);
        }

        return result;
    }

    output("myLogArea", createFunctions1()[0]());
    output("myLogArea", createFunctions1()[1]());
    output("myLogArea", createFunctions1()[8]());
    output("myLogArea", createFunctions1()[9]());

    output("myLogArea", "\n-------------------------我是分割线-----------匿名函数执行环境是全局环境---------------\n");
    var name = "log function excution context";
    var obj = {
        name: "getFunc function excution context",
        getFunc: function() {
            return function() {
                return this.name;
            }
        }
    };

    output("myLogArea", obj.getFunc()());
    output("myLogArea", obj.getFunc().call(obj));

    var obj1 = {
        name: "getFunc function excution context",
        getFunc: function() {
            var _this = this;
            return function() {
                return _this.name;
            }
        }
    };

    output("myLogArea", obj1.getFunc()());
}