// 使用new调用构造函数时，构造函数内的this会指向新构建的对象
// 如果不使用new，相当于把构造函数当作普通函数执行，函数内的this指向的作用域由运行时环境决定，通常是全局的window对象
// 所以推荐使用作用域安全的构造函数
function Polygon(sides) {
    // 判断this指向的作用域是不是Polygon对象
    if (this instanceof Polygon) {
        this.sides = sides;
        this.getArea = function() {
            return 0;
        };
    } else {
        // 如果不是，强制使用new执行构造函数
        return new Polygon(sides);
    }
}

// 作用域安全的构造函数，在通过借用构造函数实现继承时，子类不能继承父类的属性。
function Rectangle(width, height) {
    if (this instanceof Rectangle) {
        // 借用构造函数继承
        Polygon.call(this, 2);
        this.width = width;
        this.height = height;
        this.getArea = function() {
            return this.width * this.height;
        }
    } else {
        return new Rectangle(width, height);
    }
}

var rectangle1 = new Rectangle(5, 10);
console.log(rectangle1.sides);
console.log(rectangle1 instanceof Polygon);
console.log(rectangle1 instanceof Rectangle);

// 必须通过组合借用构造函数和原型链继承、或者寄生组合式继承，才能继承父类的属性
function inheritPrototype(subType, superType) {
    var prototype = Object.create(superType.prototype); //克隆
    prototype.constructor = subType; //增强
    subType.prototype = prototype; //指定对象
}

//Rectangle.prototype = new Polygon();
inheritPrototype(Rectangle, Polygon);
var rectangle2 = new Rectangle(5, 10);
console.log(rectangle2.sides);
console.log(rectangle2 instanceof Polygon);
console.log(rectangle2 instanceof Rectangle);