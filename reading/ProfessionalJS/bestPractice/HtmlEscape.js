    function htmlEscape(text) {
        return text.replace(/[<>"&]/g, function(match, pos, originalText) {
            switch (match) {
                case "<":
                    return "&lt;";
                case ">":
                    return "&gt;";
                case "\"":
                    return "&quot;";
                case "&":
                    return "&amp;";
            }
        });
    }
    console.log(htmlEscape("<p class=\"greeting\">Hello worrd!</p>"));