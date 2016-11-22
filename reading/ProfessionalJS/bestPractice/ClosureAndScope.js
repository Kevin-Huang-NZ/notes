// * 函数定义和函数活动对象。
// * 函数是对象，所以函数定义实际上就是一个对象，这个对象保存函数体。
// * 函数活动对象，是函数执行过程中创建的对象，包含函数的参数值、函数内部变量。
// * 全局作用域：全局作用域中保存全局变量值。
// * 作用域链：函数作用域链，第一个链接到函数自己的活动对象，依次链接到外部函数的活动对象，最后是全局作用域。
// * 匿名函数的执行环境具有全局性，即：匿名函数相当于call(window)，浏览器中window是全局作用域

// 1、闭包是指内部函数可以访问外部函数的变量，通过在作用域链中引用外部函数的活动对象。
// 经典闭包作用域链问题实例，执行结果不是我们期待的，但是有助于理解闭包作用域链。
function createFunctions() {
    var result = new Array();

    for (var i = 0; i < 10; i++) {
        result[i] = function() {
            return i;
        };
    }

    return result;
}

console.log(createFunctions()[0]());
console.log(createFunctions()[9]());

// 2、块级作用域
// js中是没有块级作用域的
function blockScope() {
    for (var i = 0; i < 10; i++) {
        // do something
    }
    console.log(i);
}

blockScope();

// 可以通过立即执行的匿名函数，达到块级作用域的目的
(function() {
    for (var i = 0; i < 10; i++) {
        // do something
    }
})();
console.log(i); // error

// 3、静态私有变量，对比【CreateObject.js中的稳妥构造函数模式】,静态私有变量，被所有实例共享
(function() {
    var _name = "";
    // 未经声明的变量（没有var）总是全局变量，所以可以在块级作用域外访问。
    Person = function(name) {
        _name = name;
    };
    Person.prototype.getName = function() {
        return _name;
    }
    Person.prototype.setName = function(name) {
        _name = name;
    }
})();

var person1 = new Person("Kevin");
var person2 = new Person("Lina");
console.log(person1.getName());
console.log(person2.getName());
person1.setName("Sophie");
console.log(person1.getName());
console.log(person2.getName());
person1._name = "Haha"; // 赋值失败，因为_name不是person的属性，只是person的方法的闭包作用域链上的外部函数活动对象中的变量。
console.log(person2.getName());

// 4、单例模式（模块模式）
function BaseComponent() {}

var singleton = function() {
    // 私有变量和函数
    var _components = new Array();

    // 初始化
    _components.push(new BaseComponent());

    // 公共
    return {
        getComponentCount: function() {
            return _components.length;
        },
        registerComponent: function(component) {
            console.log(typeof component);
            if (typeof component == "object") {
                _components.push(component)
            }
        }
    };
}();

console.log(singleton.getComponentCount());
singleton.registerComponent(new BaseComponent());
console.log(singleton.getComponentCount());

// 5、增强的模块模式
function BaseComponent() {}

var app = function() {
    // 私有变量和函数
    var _components = new Array();

    // 初始化
    _components.push(new BaseComponent());

    // 创建一个局部副本
    var _app = new BaseComponent();
    // 公共(对局部副本加强, 装饰模式)
    _app.getComponentCount = function() {
        return _components.length;
    };
    _app.registerComponent = function(component) {
        console.log(typeof component);
        if (typeof component == "object") {
            _components.push(component)
        }
    };
    // 返回副本
    return _app;
}();

console.log(app.getComponentCount());
app.registerComponent(new BaseComponent());
console.log(app.getComponentCount());