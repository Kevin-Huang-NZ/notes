function output(elementID, content) {
    var oldContent = document.getElementById(elementID).value;
    if (oldContent == "" || oldContent == null || typeof oldContent == undefined) {
        document.getElementById(elementID).value = content;
    } else {
        document.getElementById(elementID).value = oldContent + "\n" + content;
    }
}