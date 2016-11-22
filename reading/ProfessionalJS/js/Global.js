function logGlobal() {
    output("myLogArea", "\n-------------------------我是分割线----------encodeURI----------------\n");
    var url = "http://www.52htn.net/helllo word.html?p1=aaa&p2=bbb";
    output("myLogArea", "url的值是: " + url);
    output("myLogArea", "encodeURI(url)的结果是: " + encodeURI(url));
    output("myLogArea", "decodeURI回去的结果是: " + decodeURI(encodeURI(url)));
    output("myLogArea", "encodeURIComponent的结果是: " + encodeURIComponent(url));
    output("myLogArea", "decodeURIComponent回去的结果是: " + decodeURIComponent(encodeURIComponent(url)));


    output("myLogArea", "\n-------------------------我是分割线--------------eval------------\n");
    eval("output(\"myLogArea\", \"eval执行的output方法，打印的日志\");");

}