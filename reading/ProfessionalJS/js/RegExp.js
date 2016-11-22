function logRegExp() {
    var regExp1 = null,
        i = 0;

    for (i = 0; i < 4; i++) {
        regExp1 = /cat/gi;
        output("myLogArea", "正则表达式/cat/gi 测试catastrophe的结果是：" + regExp1.test("catastrophe"));
    }

    for (i = 0; i < 4; i++) {
        regExp1 = new RegExp("cat", "gi");
        output("myLogArea", "正则表达式new RegExp(\"cat\", \"gi\") 测试catastrophe的结果是：" + regExp1.test("catastrophe"));
    }

    output("myLogArea", "\n-------------------------我是分割线--------------------------\n");

    regExp1 = /cat/gi;
    output("myLogArea", "正则表达式/cat/gi 的global属性是：" + regExp1.global);
    output("myLogArea", "正则表达式/cat/gi 的ignoreCase属性是：" + regExp1.ignoreCase);
    output("myLogArea", "正则表达式/cat/gi 的multiline属性是：" + regExp1.multiline);
    output("myLogArea", "正则表达式/cat/gi 的lastIndex属性是：" + regExp1.lastIndex);
    output("myLogArea", "正则表达式/cat/gi 的source属性是：" + regExp1.source);
    regExp1.test("catastrophe");
    output("myLogArea", "正则表达式/cat/gi 的lastIndex属性是：" + regExp1.lastIndex);

    output("myLogArea", "\n-------------------------我是分割线--------------------------\n");

    var text = "mom and dad and baby";
    var pattern1 = /mom( and dad( and baby)?)?/gi;
    var matches = pattern1.exec(text);
    output("myLogArea", "pattern1.exec(text)的结果中index是：" + matches.index);
    output("myLogArea", "pattern1.exec(text)的结果中input是：" + matches.input);
    output("myLogArea", "pattern1.exec(text)的结果中matches[0]是：" + matches[0]);
    output("myLogArea", "pattern1.exec(text)的结果中matches[1]是：" + matches[1]);
    output("myLogArea", "pattern1.exec(text)的结果中matches[2]是：" + matches[2]);

    output("myLogArea", "\n-------------------------我是分割线--------------------------\n");

    text = "cat, bat, sat, fat";
    pattern1 = /.at/i;
    var pattern2 = /.at/gi;
    matches = pattern1.exec(text);
    output("myLogArea", "/.at/i.exec(cat, bat, sat, fat)的结果中index是：" + matches.index);
    output("myLogArea", "/.at/i.exec(cat, bat, sat, fat)的结果中matches[0]是：" + matches[0]);
    output("myLogArea", "/.at/i.exec(cat, bat, sat, fat)的后中m/.at/i的lastIndex是：" + pattern1.lastIndex);
    matches = pattern2.exec(text);
    output("myLogArea", "/.at/gi.exec(cat, bat, sat, fat)的结果中index是：" + matches.index);
    output("myLogArea", "/.at/gi.exec(cat, bat, sat, fat)的结果中matches[0]是：" + matches[0]);
    output("myLogArea", "/.at/gi.exec(cat, bat, sat, fat)的后中m/.at/gi的lastIndex是：" + pattern2.lastIndex);
    matches = pattern1.exec(text);
    output("myLogArea", "/.at/i.exec(cat, bat, sat, fat)的结果中index是：" + matches.index);
    output("myLogArea", "/.at/i.exec(cat, bat, sat, fat)的结果中matches[0]是：" + matches[0]);
    output("myLogArea", "/.at/i.exec(cat, bat, sat, fat)的后中m/.at/i的lastIndex是：" + pattern1.lastIndex);
    matches = pattern2.exec(text);
    output("myLogArea", "/.at/gi.exec(cat, bat, sat, fat)的结果中index是：" + matches.index);
    output("myLogArea", "/.at/gi.exec(cat, bat, sat, fat)的结果中matches[0]是：" + matches[0]);
    output("myLogArea", "/.at/gi.exec(cat, bat, sat, fat)的后中m/.at/gi的lastIndex是：" + pattern2.lastIndex);

    output("myLogArea", "\n-------------------------我是分割线--------------------------\n");

    var phoneNumber = "021-026-07358"
    var patternPhoneNumber = /\d{2,3}-\d{3}-\d{4,5}/;
    output("myLogArea", "/d{2-3}-d{3}-d{4-5}/.test(021-026-07358)的后结果是：" + patternPhoneNumber.test(phoneNumber));

}