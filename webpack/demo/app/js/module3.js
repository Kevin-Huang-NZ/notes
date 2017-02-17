var _ = require("lodash");
var $ = require("jquery");

var people = [
    { "name": "Kevin", "gender": "Male", "age": "35" },
    { "name": "Lina", "gender": "Female", "age": "34" },
    { "name": "Sophie", "gender": "Female", "age": "5" }
];

// _.countBy(people.filter({ "gender": "Male" }));

$("#root").append("<p>Number of Male: " + _.size(_.filter(people, { "gender": "Male" })) + "</p>");
console.log("loading module3......");