function addFloat() {
    var floatNumber1 = 0.1,
        floatNumber2 = 0.2;
    var result = floatNumber1 + floatNumber2;
    console.log("0.1 + 0.2 = " + result);

    var number8 = 023,
        number10 = 23,
        number16 = 0x23;
    console.log("8进制数字023 = : " + number8);
    console.log("10进制数字23 = : " + number10);
    console.log("16进制数字0x23 = : " + number16);


    console.log("数字最小值 = : " + Number.MIN_VALUE);
    console.log("数字最大值 = : " + Number.MAX_VALUE);

    console.log("正无穷 = : " + (Number.MAX_VALUE + Number.MAX_VALUE));
    console.log("负无穷 = : " + (Number.MIN_VALUE - Number.MAX_VALUE - Number.MAX_VALUE));
    console.log("isFinite(12) = : " + isFinite(12));
    console.log("isFinite(Number.MAX_VALUE + Number.MAX_VALUE) = : " + isFinite(Number.MAX_VALUE + Number.MAX_VALUE));
    console.log("isFinite(Number.MIN_VALUE - Number.MAX_VALUE - Number.MAX_VALUE) = : " + isFinite(Number.MIN_VALUE - Number.MAX_VALUE - Number.MAX_VALUE));

    console.log("isNaN(NaN) = " + isNaN(NaN));
    console.log("isNaN(10) = " + isNaN(10));
    console.log("isNaN(\"10\") = " + isNaN("10"));
    console.log("isNaN(\"blue\") = " + isNaN("blue"));
    console.log("isNaN(true) = " + isNaN(true));
    console.log("NaN == NaN = " + (NaN == NaN));

    console.log("1234blue 转换为整数 = " + parseInt("1234blue"));
    console.log("\"\" 转换为整数 = " + parseInt(""));
    console.log("0xA 转换为整数 = " + parseInt("0xA"));
    console.log("0xf 转换为整数 = " + parseInt("0xf"));
    console.log("22.5 转换为整数 = " + parseInt("22.5"));
    console.log("070 转换为8进制整数 = " + parseInt("070", 8));
    console.log("70 转换为10进制整数 = " + parseInt("70", 10));
    console.log("0xAF 转换为16进制整数 = " + parseInt("0xAF", 16));

    console.log("22.5 转换为浮点数 = " + parseFloat("22.5"));

    var num1 = 99.8999;
    console.log("num1 = " + num1);
    console.log("num1.toFixed(2) = " + num1.toFixed(2));
    console.log("num1.toExponential(1) = " + num1.toExponential(1));
    console.log("num1.toPrecision(1) = " + num1.toPrecision(1));
    console.log("num1.toPrecision(2) = " + num1.toPrecision(2));
    console.log("num1.toPrecision(3) = " + num1.toPrecision(3));
    console.log("num1.toPrecision(5) = " + num1.toPrecision(5));
}