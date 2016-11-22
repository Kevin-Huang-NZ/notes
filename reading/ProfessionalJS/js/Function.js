function logFunc() {
    var sum1 = function(num1, num2) {
        return num1 + num2;
    }

    function sum2(num1, num2) {
        return num1 + num2;
    }

    var sum3 = sum2;
    output("myLogArea", "函数sum1的定义是：\n" + sum1);
    output("myLogArea", "函数sum2的定义是：\n" + sum2);
    output("myLogArea", "函数sum3的定义是：\n" + sum3);

    output("myLogArea", "\n-------------------------我是分割线--------------------------\n");


    output("myLogArea", "函数sum2 = null;后");
    sum2 = null;
    output("myLogArea", "函数sum2的定义是：\n" + sum2);
    output("myLogArea", "函数sum3的定义是：\n" + sum3);

    output("myLogArea", "\n-------------------------我是分割线--------嵌套function------------------\n");

    function createComparisonFunction(propertyName) {
        return function(object1, object2) {
            var value1 = object1[propertyName];
            var value2 = object2[propertyName];
            if (value1 < value2) {
                return -1;
            } else if (value1 > value2) {
                return 1;
            } else {
                return 0;
            }
        };
    }

    var data = [{ name: "Kevin", age: 35 }, { name: "Lina", age: 34 }];
    data.sort(createComparisonFunction("name"));
    output("myLogArea", "按照name排序后：\n");
    data.forEach(function(item, index, array) {
        output("myLogArea", index + " : " + item.name + ", " + item.age);
    });
    data.sort(createComparisonFunction("age"));
    output("myLogArea", "按照age排序后：\n");
    data.forEach(function(item, index, array) {
        output("myLogArea", index + " : " + item.name + ", " + item.age);
    });

    output("myLogArea", "\n-------------------------我是分割线------------arguments.callee--------------\n");

    function factorial1(num) {
        if (num <= 1) {
            return 1;
        } else {
            return num * factorial1(num - 1);
        }
    }

    function factorial2(num) {
        if (num <= 1) {
            return 1;
        } else {
            return num * arguments.callee(num - 1);
        }
    }

    var trueFactorail1 = factorial1;
    var trueFactorail2 = factorial2;
    factorial1 = null;
    factorial2 = null;
    // output("myLogArea", "使用函数名实现递归函数：阶乘。阶乘5等于：" + trueFactorail1(5));
    output("myLogArea", "使用arguments.callee实现递归函数：阶乘。阶乘5等于：" + trueFactorail2(5));

    output("myLogArea", "\n-------------------------我是分割线------------this-------------\n");

    window.color = "red";
    var obj = { color: "blue" };

    function showColor() {
        output("myLogArea", "this指向的对象的color是：" + this.color);
    }

    showColor();
    obj.showColor = showColor;
    obj.showColor();

    output("myLogArea", "\n-------------------------我是分割线----------length----------------\n");

    function func1(arg1) {
        return 0;
    }

    function func2(arg1, arg2) {
        return 0;
    }
    output("myLogArea", "方法func1的参数个数是：" + func1.length);
    output("myLogArea", "方法func2的参数个数是：" + func2.length);

    output("myLogArea", "\n-------------------------我是分割线----------call----------------\n");

    window.color = "red";
    var obj1 = { color: "blue" };
    var obj2 = { color: "black" };

    showColor.call(this);
    showColor.call(window);
    showColor.call(obj1);
    showColor.call(obj2);

    output("myLogArea", "\n-------------------------我是分割线----------bind----------------\n");

    var objShowColor = showColor.bind(obj2);
    objShowColor();
}