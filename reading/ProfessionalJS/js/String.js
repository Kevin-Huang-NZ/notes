function stringMethod() {
    var stringVar = "Your are my little little apple."
    console.log("字符串长度：" + stringVar.length);

    var value1 = 10,
        value2 = true,
        value3 = null,
        value4;
    console.log("数值10转换成字符串 = " + value1.toString());
    console.log("数值10转换成2进制字符串 = " + value1.toString(2));
    console.log("数值10转换成8进制字符串 = " + value1.toString(8));
    console.log("数值10转换成16进制字符串 = " + value1.toString(16));
    console.log("true转换成字符串 = " + value2.toString());
    console.log("null转换成字符串 = " + String(value3));
    console.log("undefined转换成字符串 = " + String(value4));
}