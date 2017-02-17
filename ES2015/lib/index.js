'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//let
{
    var inner = 1;
    var inner1 = 2;
}
// console.log(inner); //error
console.log(inner1);

//destructuring
//数组解构
var cities = ['Beijing', 'Shanghai', 'Guangzhou'];
var city1 = cities[0],
    city2 = cities[1],
    city3 = cities[2],
    city4 = cities[3];

console.log(city1);
console.log(city2);
console.log(city3);
console.log(city4);

//对象解构
var person = { name: 'Kevin', age: 35, gender: 'Male' };
var name = person.name,
    age = person.age,
    workTitle = person.workTitle;

console.log(name);
console.log(age);
// console.log(gender);//error
console.log(workTitle);

//promise
function calcBmi(_ref) {
    var w = _ref.weight,
        h = _ref.height,
        _ref$max = _ref.max,
        max = _ref$max === undefined ? 25 : _ref$max,
        callback = _ref.callback;

    var bmi = w / Math.pow(h, 2);
    if (bmi > max) {
        console.log("You're overweight.");
    }
    if (callback) {
        callback(bmi);
    }
    return bmi;
}

console.log(calcBmi({ weight: 100, height: 1.7 }));
calcBmi({ weight: 80, height: 1.9, max: 25, callback: function callback(bmi) {
        return console.log(bmi);
    } });

//定义类

var Point = function () {
    function Point(x, y) {
        _classCallCheck(this, Point);

        this.x = x;
        this.y = y;
    }

    _createClass(Point, [{
        key: 'toString',
        value: function toString() {
            return '(' + this.x + ', ' + this.y + ')';
        }
    }]);

    return Point;
}();

var point = new Point(2, 3);
console.log(point.toString()); // (2, 3)