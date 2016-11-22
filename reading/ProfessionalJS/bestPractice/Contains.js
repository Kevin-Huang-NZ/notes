// 用来判断refnode是否包含otherNode
// 用到了ClientDetector.js中定义的client
function contains(refNode, otherNode) {
    if (typeof refNode.contains == "function" && (!client.engine.webkit || client.engine.webkit >= 522)) {
        return refNode.contains(otherNode);
    } else if (typeof refNode.compareDocumentPosition == "function") {
        return !!(refNode.compareDocumentPosition(otherNode) & 16);
    } else {
        var node = otherNode.parentNode;
        do {
            if (node == refNode) {
                return true;
            } else {
                node = node.parentNode;
            }
        } while (node != null);
        return false;
    }
}