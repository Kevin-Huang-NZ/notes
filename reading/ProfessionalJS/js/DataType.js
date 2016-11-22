// var DataType = (function() {
//     function _dataType() {}

//     _dataType.log =

function logDataType() {
    var booleanVar = true,
        numberVar1 = 0.1,
        numberVar2 = 1,
        undefinedVar,
        nullVar = null,
        stringVar1 = 'I am a string.',
        stringVar2 = "I am a string too",
        objectVar = new Object();

    console.log("true's type is : " + typeof(booleanVar));
    console.log("0.1's type is : " + typeof(numberVar1));
    console.log("1's type is : " + typeof(numberVar2));
    console.log("'s type is : " + typeof(undefinedVar));
    console.log("null's type is : " + typeof(nullVar));
    console.log("string's type is : " + typeof(stringVar1));
    console.log("string's type is : " + typeof(stringVar2));
    console.log("object's type is : " + typeof(objectVar));
}

//     return _dataType;
// })();