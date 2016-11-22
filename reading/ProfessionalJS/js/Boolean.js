function booleanMethod() {
    var value1 = 10,
        value2 = true,
        value3 = null,
        value4;
    console.log("数值10转换成布尔值 = " + Boolean(10));
    console.log("数值0转换成布尔值 = " + Boolean(0));
    console.log("数值0.1转换成布尔值 = " + Boolean(0.1));
    console.log("数值-10转换成布尔值 = " + Boolean(-10));
    console.log("NaN转换成布尔值 = " + Boolean(NaN));
    console.log("null转换成布尔值 = " + Boolean(null));
    console.log("undefined转换成布尔值 = " + Boolean(undefined));
    console.log("空字符串转换成布尔值 = " + Boolean(""));
    console.log("非空字符串转换成布尔值 = " + Boolean("aaa"));
}