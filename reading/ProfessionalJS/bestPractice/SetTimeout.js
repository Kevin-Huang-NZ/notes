// 1、通常使用超时调用模拟间歇调用
var num = 0;
var numMax = 10;

function increaseNumber() {
    num++;
    if (num < numMax) {
        setTimeout(increaseNumber, 500);
        console.log("plus 1......");
    } else {
        console.log("Done.");
    }
}

setTimeout(increaseNumber, 500);