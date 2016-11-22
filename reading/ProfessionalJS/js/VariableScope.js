function outerFn() {
    // 基本数据类型，数值传值
    var outerVar = "I am out.";

    function innerFn1(param) {
        param = "I am in.";
    }

    innerFn1(outerVar);
    console.log(outerVar);

    // Object对象，变量中保存的是引用，所以传递的数值也是引用。
    var outerObj = new Object();
    outerObj.name = "I am a outer object";

    function innerFn2(obj) {
        outerObj.name = "I was changed to a inner object";
    }

    innerFn2(outerObj);
    console.log(outerObj.name);

    if (true) {
        var statementVar = "I am in a statement block.";
    }

    console.log(statementVar);
}