function defineObj() {
    var person1 = new Object();
    person1.name = "Kevin";
    person1.age = 35;

    var person2 = {
        "name": "Lina",
        "age": 34
    };


    var person3 = {};
    person3.name = "Sophie";
    person3.age = 5;

    console.log("第1个人，名字：" + person1.name + ";年龄：" + person1.age);
    console.log("第2个人，名字：" + person2.name + ";年龄：" + person2.age);
    console.log("第3个人，名字：" + person3.name + ";年龄：" + person3.age);

    var fields = ["name", "age"];
    for (var i = 0; i < fields.length; i++) {
        var field = fields[i];
        console.log(field + ": " + person1[field]);
    }

    for (var field in fields) {
        console.log(field + ": " + person1[field]);
    }

    console.log(isObject(person1));
}

/**
 * 安全的监测数据类型的方法，适用于Object.
 */
function isObject(value) {
    console.log(Object.prototype.toString.call(value));
    return Object.prototype.toString.call(value) == "[object Object]";
}