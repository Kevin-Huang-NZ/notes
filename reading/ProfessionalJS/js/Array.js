function logArray() {
    var array1 = new Array();
    array1[0] = "Kevin";
    array1[1] = "Lina";
    array1[2] = "Sophie";

    var array2 = new Array(3);
    array2[0] = "Kevin";
    array2[1] = "Lina";
    array2[2] = "Sophie";

    var array3 = ["Kevin", "Lina", "Sophie"];

    for (var i = 0; i < array1.length; i++) {
        output("myLogArea", array1[i]);
    }
    output("myLogArea", "循环之后，变量i还存在吗？i = " + i);

    output("myLogArea", "\n---------------------------我是分割线--------------------------\n");

    array1[8] = "Haha";
    output("myLogArea", "array1[8]赋值后，数组长度变为：" + array1.length);
    i = 0;
    while (i < array1.length) {
        output("myLogArea", array1[i]);
        i++;
    }

    output("myLogArea", "\n---------------------------我是分割线--------------------------\n");
    output("myLogArea", "数组长度为：" + array1.length);
    for (i = 0; i < 10; i++) {
        array1[array1.length] = i;
    }
    output("myLogArea", "向数组中加10次数据后，数组长度变为：" + array1.length);

    output("myLogArea", "\n---------------------------我是分割线--------------------------\n");
    output("myLogArea", "一个值是不是Array的判断方法：");
    output("myLogArea", "1、instanceof 跨框架判断不出来：" + (array1 instanceof Array));
    output("myLogArea", "2、Array.isArray()低版本浏览器不支持：" + Array.isArray(array1));
    output("myLogArea", "3、自定义：" + isArray(array1));

    output("myLogArea", "\n---------------------------我是分割线--------------------------\n");

    output("myLogArea", "数组toString结果：" + array1.toString());
    output("myLogArea", "数组toLocaleString结果：" + array1.toLocaleString());
    output("myLogArea", "数组valueOf结果：" + array1.valueOf());
    output("myLogArea", "数组join结果：" + array1.join(" | "));

    output("myLogArea", "\n---------------------------我是分割线--------------------------\n");

    output("myLogArea", "数组原始数据为：" + array2.toString());
    output("myLogArea", "数组push后长度变为：" + array2.push("NiuNiu"));
    output("myLogArea", "数组push后变为：" + array2.toString());
    output("myLogArea", "数组pop：" + array2.pop());
    output("myLogArea", "数组pop后变为：" + array2.toString());
    output("myLogArea", "数组shift：" + array2.shift());
    output("myLogArea", "数组shift后变为：" + array2.toString());
    output("myLogArea", "数组unshift：" + array2.unshift("Kevin"));
    output("myLogArea", "数组unshift后变为：" + array2.toString());

    output("myLogArea", "\n---------------------------我是分割线--------------------------\n");

    var array4 = [0, 5, 10, 15, 20, 25];
    output("myLogArea", "数组原始数据为：" + array4.toString());
    output("myLogArea", "数组reverse后数据为：" + array4.reverse());
    output("myLogArea", "数组sort后数据为：" + array4.sort());
    output("myLogArea", "为sort指定比较方法，数组再sort后数据为：" + array4.sort(function(value1, value2) {
        if (value1 > value2) {
            return 1;
        } else if (value1 < value2) {
            return -1;
        } else {
            return 0;
        }
    }));

    output("myLogArea", "\n---------------------------我是分割线--------------------------\n");
    array4 = [0, 5, 10, 15, 20, 25];
    output("myLogArea", "数组原始数据为：" + array4.toString());
    output("myLogArea", "数组concat(30)得到：" + array4.concat(30));
    output("myLogArea", "数组concat([30, 35])得到：" + array4.concat([30, 35]));
    output("myLogArea", "数组slice(1)得到：" + array4.slice(1));
    output("myLogArea", "数组slice(1, 3)得到：" + array4.slice(1, 3));

    output("myLogArea", "\n---------------------------我是分割线--------------------------\n");
    array4 = [0, 5, 10, 15, 20, 25];
    output("myLogArea", "数组原始数据为：" + array4.toString());
    array4.splice(1, 2);
    output("myLogArea", "数组splice(1, 2)得到：" + array4);
    array4.splice(1, 0, 6, 7, 8, 9);
    output("myLogArea", "数组splice(1, 0, 11, 12, 13, 14)得到：" + array4);
    array4 = [0, 5, 10, 15, 20, 25];
    array4.splice(1, 2, 6, 7, 8, 9);
    output("myLogArea", "还原数组后，数组splice(1, 2, 11, 12, 13, 14)得到：" + array4);

    output("myLogArea", "\n---------------------------我是分割线--------------------------\n");
    array4 = [0, 1, 2, 3, 4, 5];
    output("myLogArea", "数组原始数据为：" + array4.toString());
    var lower6 = array4.every(function(item, index, array) {
        return item < 6;
    });
    if (lower6) {
        output("myLogArea", "数组中所有数据都小于6。");
    }

    var lower4 = array4.some(function(item, index, array) {
        return item < 4;
    });
    if (lower4) {
        output("myLogArea", "数组中至少有1个数据都小于4。");
    }

    output("myLogArea", "数组中小于4的数据有。" + array4.filter(
        function(item, index, array) {
            return item < 4;
        }
    ));

    output("myLogArea", "数组中所有数据都乘以2后变为。" + array4.map(
        function(item, index, array) {
            return item * 2;
        }
    ));
    array4.forEach(
        function(item, index, array) {
            output("myLogArea", "循环打印数组: " + item + "; 在数组中的位置：" + index);
            return;
        }
    )

    output("myLogArea", "\n---------------------------我是分割线--------------------------\n");
    array4 = [0, 1, 2, 3, 4, 5];
    var sum = array4.reduce(function(pre, cur, index, array) {
        return pre + cur;
    });
    output("myLogArea", "数组各项加和：" + sum);
    sum = array4.reduceRight(function(pre, cur, index, array) {
        return pre + cur;
    });
    output("myLogArea", "数组各项反向（从右边开始）加和：" + sum);

}


/**
 * 安全的监测数据类型的方法，适用于Array，可以扩展问Function、Object、RegExp、JSON
 */
function isArray(value) {
    // console.log(Object.prototype.toString.call(value));
    return Object.prototype.toString.call(value) == "[object Array]";
}

function output(elementID, content) {
    var oldContent = document.getElementById(elementID).value;
    if (oldContent == "" || oldContent == null || typeof oldContent == undefined) {
        document.getElementById(elementID).value = content;
    } else {
        document.getElementById(elementID).value = oldContent + "\n" + content;
    }
}