function logMath() {
    output("myLogArea", "\n-------------------------我是分割线----------min,max----------------\n");
    output("myLogArea", "Math.max(0.1, 3, 5, 8, 2, 99.2)的值是: " + Math.max(0.1, 3, 5, 8, 2, 99.2));
    output("myLogArea", "Math.min(0.1, 3, 5, 8, 2, 99.2)的值是: " + Math.min(0.1, 3, 5, 8, 2, 99.2));
    output("myLogArea", "Math.max.apply(Math, [0.1, 3, 5, 8, 2, 99.2])的值是: " + Math.max.apply(Math, [0.1, 3, 5, 8, 2, 99.2]));

    output("myLogArea", "\n-------------------------我是分割线----------cell,round,floor----------------\n");
    output("myLogArea", "Math.ceil(25.9)的值是: " + Math.ceil(25.9));
    output("myLogArea", "Math.ceil(25.5)的值是: " + Math.ceil(25.5));
    output("myLogArea", "Math.ceil(25.1)的值是: " + Math.ceil(25.1));
    output("myLogArea", "Math.round(25.9)的值是: " + Math.round(25.9));
    output("myLogArea", "Math.round(25.5)的值是: " + Math.round(25.5));
    output("myLogArea", "Math.round(25.1)的值是: " + Math.round(25.1));
    output("myLogArea", "Math.floor(25.9)的值是: " + Math.floor(25.9));
    output("myLogArea", "Math.floor(25.5)的值是: " + Math.floor(25.5));
    output("myLogArea", "Math.floor(25.1)的值是: " + Math.floor(25.1));

    output("myLogArea", "\n-------------------------我是分割线----------random----------------\n");

    function selectFrom(lowerValue, upperValue) {
        var choices = upperValue - lowerValue + 1;
        return Math.floor(Math.random() * choices + lowerValue);
    }
    output("myLogArea", "selectFrom定义如下是:\n " + selectFrom);
    output("myLogArea", "selectFrom(2, 9)结果: " + selectFrom(2, 9));
    output("myLogArea", "selectFrom(2, 9)结果: " + selectFrom(2, 9));
    output("myLogArea", "selectFrom(2, 9)结果: " + selectFrom(2, 9));
    output("myLogArea", "selectFrom(2, 9)结果: " + selectFrom(2, 9));
}