//let
{
    let inner = 1;
    var inner1 = 2;
}
// console.log(inner); //error
console.log(inner1);

//destructuring
//数组解构
var cities = ['Beijing', 'Shanghai', 'Guangzhou'];
var [city1, city2, city3, city4] = cities;
console.log(city1);
console.log(city2);
console.log(city3);
console.log(city4);

//对象解构
var person = { name: 'Kevin', age: 35, gender: 'Male' };
var { name, age, workTitle } = person;
console.log(name);
console.log(age);
// console.log(gender);//error
console.log(workTitle);

//promise
function calcBmi({ weight: w, height: h, max = 25, callback }) {
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
calcBmi({ weight: 80, height: 1.9, max: 25, callback: bmi => console.log(bmi) });


//定义类
class Point {

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    toString() {
        return '(' + this.x + ', ' + this.y + ')';
    }

}

var point = new Point(2, 3);
console.log(point.toString()); // (2, 3)