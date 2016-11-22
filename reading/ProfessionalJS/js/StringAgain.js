function logString() {

    var str1 = "Hello world."

    output("myLogArea", "str1的值：" + str1);
    output("myLogArea", "str1.length的结果是：" + str1.length);
    output("myLogArea", "str1.charAt(1)的结果是：" + str1.charAt(1));
    output("myLogArea", "str1.charCodeAt(1)的结果是：" + str1.charCodeAt(1));
    output("myLogArea", "str1.concat(\"Hello China.\", \"Hello Beijing.\")的结果是：" + str1.concat("Hello China.", "Hello Beijing."));
    output("myLogArea", "str1.concat(\"Hello China.\", \"Hello Beijing.\")后str1的值是：" + str1);
    output("myLogArea", "str1.slice(3, 7)的结果是：" + str1.slice(3, 7));
    output("myLogArea", "str1.slice(3, 7)后str1的值是：" + str1);
    output("myLogArea", "str1.substr(3, 7)的结果是：" + str1.substr(3, 7));
    output("myLogArea", "str1.substr(3, 7)后str1的值是：" + str1);
    output("myLogArea", "str1.substring(3, 7)的结果是：" + str1.substring(3, 7));
    output("myLogArea", "str1.substring(3, 7)后str1的值是：" + str1);
    output("myLogArea", "str1.slice(-3)的结果是：" + str1.slice(-3));
    output("myLogArea", "str1.slice(5, -3)的结果是：" + str1.slice(5, -3));
    output("myLogArea", "str1.substr(-3,1)的结果是：" + str1.substr(-3, 1));
    output("myLogArea", "str1.substr(-3,2)的结果是：" + str1.substr(-3, 2));
    output("myLogArea", "str1.indexOf(\"o\")的结果是：" + str1.indexOf("o"));
    output("myLogArea", "str1.lastIndexOf(\"o\")的结果是：" + str1.lastIndexOf("o"));
    output("myLogArea", "str1.indexOf(\"o\", 6)的结果是：" + str1.indexOf("o", 6));
    output("myLogArea", "str1.lastIndexOf(\"o\", 6)的结果是：" + str1.lastIndexOf("o", 6));
    output("myLogArea", "str1.trim()的结果是：" + str1.trim());
    output("myLogArea", "str1.toUpperCase()的结果是：" + str1.toUpperCase());
    output("myLogArea", "str1.toLowerCase()的结果是：" + str1.toLowerCase());

    output("myLogArea", "\n-------------------------我是分割线--------------------------\n");

    var text = "cat, bat, sat, fat";
    var pattern = /.at/gi;
    output("myLogArea", "text的值：" + text);
    output("myLogArea", "pattern的值：" + pattern);
    var matches = text.match(pattern);
    output("myLogArea", "matches.index的值：" + matches.index);
    output("myLogArea", "matches[0]的值：" + matches[0]);
    output("myLogArea", "pattern.lastIndex的值：" + pattern.lastIndex);
    matches = pattern.exec(text);
    output("myLogArea", "matches.index的值：" + matches.index);
    output("myLogArea", "matches[0]的值：" + matches[0]);
    output("myLogArea", "pattern.lastIndex的值：" + pattern.lastIndex);


    output("myLogArea", "text.search(pattern)的值：" + text.search(pattern));
    output("myLogArea", "text.search(pattern)第二次的值：" + text.search(pattern));


    output("myLogArea", " text.replace(/at/i, \"ond\")的值：" + text.replace(/at/i, "ond"));
    output("myLogArea", " text.replace(/at/gi, \"ond\")的值：" + text.replace(/at/gi, "ond"));
    output("myLogArea", " text.replace(/.at/g, \"word($1)\")的值：" + text.replace(/.at/g, "word($1)"));
    output("myLogArea", " text.replace(/at/i, \"ond\")后text的值：" + text);

    output("myLogArea", "\n-------------------------我是分割线--------------------------\n");

    function htmlEscape(text) {
        return text.replace(/[<>"&]/g, function(match, pos, originalText) {
            switch (match) {
                case "<":
                    return "&lt;";
                case ">":
                    return "&gt;";
                case "\"":
                    return "&quot;";
                case "&":
                    return "&amp;";
            }
        });
    }

    output("myLogArea", "htmlEscape的定义如下：/n" + htmlEscape);
    output("myLogArea", "htmlEscape(\"<p class=\"greeting\">Hello worrd!</p>\")的结果如下：/n" + htmlEscape("<p class=\"greeting\">Hello worrd!</p>"));

    output("myLogArea", "\n-------------------------我是分割线--------------------------\n");

    var colorText = "red,blue,green,black";
    output("myLogArea", "colorText的值是：" + colorText);
    colorText.split(",").forEach(function(item, index, arr) {
        output("myLogArea", "colorText.split(\",\")后的值分别是：" + item);
    });
    colorText.split(/[^\,]+/).forEach(function(item, index, arr) {
        output("myLogArea", "colorText.split(/[^\,]+/)后的值分别是：" + item);
    });

    output("myLogArea", "\"abc\".localeCompare(\"bcd\")的结果是: " + "abc".localeCompare("bcd"));
    output("myLogArea", "String.fromCharCode(104, 101, 108, 108, 111)的结果是: " + String.fromCharCode(104, 101, 108, 108, 111));
}