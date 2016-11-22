// 1、如果闭包的作用域链中保存了一个HTML元素，该元素不能被回收，导致内存泄漏（IE）
function assignHandler() {
    var ele = document.getElementById("id");
    ele.onclick = function() {
        console.log(ele.id);
    }
}

// 2、解决内存泄漏
function assignHandler() {
    var ele = document.getElementById("id");
    // 闭包作用域链中不保存HTML元素
    var id = ele.id;
    ele.onclick = function() {
        console.log(id);
    };
    // 强制回收
    ele = null;
}