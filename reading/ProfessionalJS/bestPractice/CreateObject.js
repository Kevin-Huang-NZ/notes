// 1、组合使用构造函数和原型定义(最佳实践)

// 构造函数
function Person(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
}

// 原型定义
Person.prototype = {
    constructor: Person,
    sayName: function() {
        console.log(this.name);
    }
}


// 2、动态原型模式
function Person(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;

    if (typeof this.sayName != "function") {
        Person.prototype.sayName = function() {
            console.log(this.name);
        };
    }
}

// 3、寄生构造函数模式

function Person(name, age, gender) {
    var o = new Object();
    o.name = name;
    o.age = age;
    o.gender = gender;

    o.sayName = function() {
        console.log(this.name);
    };

    return o;
}

// 4、稳妥构造函数模式

function Person(name, age, gender) {
    // 创建要返回的对象
    var o = new Object();

    //私有变量和方法
    var _name = name;
    var _age = age;
    var _gender = gender;

    function personToString() {
        return _name + "," + _age + "," + _gender;
    }

    // 添加方法（用来访问私有变量和方法，对外接口）
    o.sayName = function() {
        console.log(_name);
    };

    o.print = function() {
        console.log(personToString());
    };

    // 返回对象
    return o;
}

var person1 = new Person("Kevin", 35, "Male");
person1.print();
person1.personToString(); // error