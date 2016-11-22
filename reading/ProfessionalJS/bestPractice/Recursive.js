// 最佳实践：递归调用时使用arguments.callee

function factorial(num) {
    if (num <= 1) {
        return 1;
    } else {
        return num * arguments.callee(num - 1);
    }
}

var fun1 = factorial;
factorial = null;

console.log(fun1(5));

// 使用名字递归调用会出问题
function badfactorial(num) {
    if (num <= 1) {
        return 1;
    } else {
        return num * badfactorial(num - 1);
    }
}



var fun3 = badfactorial;
badfactorial = null;

console.log(fun3(5));