// 1、原型链继承
function SuperType() {
    this.superValue = true;
}

SuperType.prototype.getSuperValue = function() {
    return this.superValue;
};

function SubType() {
    this.subValue = false;
}

SubType.prototype = new SuperType();

SubType.prototype.getSubValue = function() {
    return this.subValue;
};

var instance = new SubType();
instance.getSuperValue();

// 1.1、原型链继承问题：所有子类对象共享父类的引用类型属性
function SuperType() {
    this.colors = ["red", "blue", "green"];
}

function SubType() {

}

SubType.prototype = new SuperType();

var instance1 = new SubType();
instance1.colors.push("black");

var instance2 = new SubType();
console.log(instance2.colors);

// 2、借用构造函数继承：解决共享父类的引用类型属性问题
function SuperType() {
    this.colors = ["red", "blue", "green"];
}

function SubType() {
    SuperType.call(this);
}

var instance1 = new SubType();
instance1.colors.push("black");

var instance2 = new SubType();
console.log(instance2.colors);

// 2.1、借用构造函数继承的问题：子类无法访问父类的原型函数，方法都要在构造函数中定义，否则子类不能访问。
function SuperType() {
    this.fun1 = function() {
        console.log("I am in constructor.");
    }
}
SuperType.prototype.fun2 = function() {
    console.log("I am in prototype.");
};

function SubType() {
    SuperType.call(this);
}

var instance1 = new SubType();
instance1.fun1();
instance1.fun2();


// 3、组合原型链和构造函数继承
function SuperType() {
    this.colors = ["red", "blue", "green"];
}

SuperType.prototype.getColors = function() {
    return this.colors;
};

function SubType() {
    SuperType.call(this);
}

SubType.prototype = new SuperType();
var instance1 = new SubType();
instance1.colors.push("black");

var instance2 = new SubType();
console.log(instance2.colors);
console.log(instance2.getColors());

// 3.1、组合继承的问题：父类被实例化2次，构造函数中的实例化，子类继承了父类的属性；第二次原型赋值时的实例化，把父类的属性和方法都继承到了子类的原型中。
// a、实例化2次，存在效率问题；
// b、父类的属性存在于子类的实例和原型中，相同的属性存在两份，并且由于属性的查找顺序，实例中的覆盖了原型中的，原型中的是多余的。

// 4、寄生组合式继承(最佳实践)
function inheritPrototype(subType, superType) {
    var prototype = Object.create(superType.prototype); //克隆
    prototype.constructor = subType; //增强
    subType.prototype = prototype; //指定对象
}

function SuperType() {
    this.colors = ["red", "blue", "green"];
}

SuperType.prototype.getColors = function() {
    return this.colors;
};

function SubType() {
    SuperType.call(this);
}

// SubType.prototype = new SuperType();
inheritPrototype(SubType, SuperType)
var instance1 = new SubType();
instance1.colors.push("black");

var instance2 = new SubType();
console.log(instance2.colors);
console.log(instance2.getColors());