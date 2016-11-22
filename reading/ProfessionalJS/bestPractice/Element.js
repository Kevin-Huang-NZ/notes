// 1、通过tagName获取的标签名字都是大写
// 比较的时候最好转换一下
var htmlElement = document.documentElement;
if (htmlElement.tagName.toLowerCase() == "html") {
    console.log("document.documentElement is html.");
}

// 2、遵从HTML5的惯例，element自定义属性，最好以data-开头
htmlElement.setAttribute("data-mine", "My special attribute.");

// 3、通常获取element属性值时，直接使用属性名获取，只有获取自定义属性的时候，才使用getAttribute
htmlElement.style;
htmlElement.className;
htmlElement.onclick;
htmlElement.getAttribute("data-mine");

// 4、序列化元素的属性，使用join方法连接数组中的成员 
function outputAttributes(element) {
    var pairs = new Array(),
        attrName,
        attrValue;
    for (var i = 0, len = element.attributes.length; i < len; i++) {
        attrName = element.attributes[i].nodeName;
        attrValue = element.attributes[i].nodeValue;
        if (element.attributes[i].specified) {
            pairs.push(attrName + "=\"" + attrValue + "\"");
        }
    }
    return pairs.join(" ");
}