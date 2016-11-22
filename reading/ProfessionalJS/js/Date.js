function logDate() {

    var date1 = new Date();
    var date2 = new Date(Date.parse("Oct 29 2016"));
    var date3 = new Date("Oct 29 2016");
    var date4 = new Date(Date.UTC(2016, 9, 29, 21, 0, 34));
    var date5 = new Date(2016, 9, 29, 21, 0, 34);
    var date6 = new Date(Date.now());
    var date7 = +new Date();
    output("myLogArea", "new Date()的时间是：" + date1);
    output("myLogArea", "new Date(Date.parse(\"Oct 29 2016\"))的时间是：" + date2);
    output("myLogArea", "new Date(\"Oct 29 2016\")的时间是：" + date3);
    output("myLogArea", "new Date(Date.UTC(2016, 9, 29, 21, 0, 34))的时间是：" + date4);
    output("myLogArea", "new Date(2016, 9, 29, 21, 0, 34)的时间是：" + date5);
    output("myLogArea", "Date.now()的时间是：" + Date.now());
    output("myLogArea", "new Date(Date.now())的时间是：" + date6);
    output("myLogArea", "+new Date()的时间是：" + date7);

    output("myLogArea", "\n-------------------------我是分割线--------------------------\n");

    output("myLogArea", "toString的结果是：" + date5.toString());
    output("myLogArea", "toLocaleString的结果是：" + date5.toLocaleString());
    output("myLogArea", "valueOf的结果是：" + date5.valueOf());
    output("myLogArea", "toDateString的结果是：" + date5.toDateString());
    output("myLogArea", "toTimeString的结果是：" + date5.toTimeString());
    output("myLogArea", "toLocaleDateString的结果是：" + date5.toLocaleDateString());
    output("myLogArea", "toLocaleTimeString的结果是：" + date5.toLocaleTimeString());
    output("myLogArea", "toUTCString的结果是：" + date5.toUTCString());

    output("myLogArea", "\n-------------------------我是分割线--------------------------\n");

    output("myLogArea", "getTime的结果是：" + date5.getTime());
    output("myLogArea", "getFullYear的结果是：" + date5.getFullYear());
    output("myLogArea", "getMonth的结果是：" + date5.getMonth());
    output("myLogArea", "getDate的结果是：" + date5.getDate());
    output("myLogArea", "getDay的结果是：" + date5.getDay());
    output("myLogArea", "getHours的结果是：" + date5.getHours());
    output("myLogArea", "getMinutes的结果是：" + date5.getMinutes());
    output("myLogArea", "getSeconds的结果是：" + date5.getSeconds());

    output("myLogArea", "getUTCFullYear的结果是：" + date5.getUTCFullYear());
    output("myLogArea", "getUTCMonth的结果是：" + date5.getUTCMonth());
    output("myLogArea", "getUTCDate的结果是：" + date5.getUTCDate());
    output("myLogArea", "getUTCDay的结果是：" + date5.getUTCDay());
    output("myLogArea", "getUTCHours的结果是：" + date5.getUTCHours());
    output("myLogArea", "getUTCMinutes的结果是：" + date5.getUTCMinutes());
    output("myLogArea", "getUTCSeconds的结果是：" + date5.getUTCSeconds());

}