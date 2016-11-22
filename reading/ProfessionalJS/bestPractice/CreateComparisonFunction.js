  // 数组排序最佳实践
  function createComparisonFunction(propertyName) {
      return function(object1, object2) {
          var value1 = object1[propertyName];
          var value2 = object2[propertyName];
          if (value1 < value2) {
              return -1;
          } else if (value1 > value2) {
              return 1;
          } else {
              return 0;
          }
      };
  }

  var data = [{ name: "Kevin", age: 35 }, { name: "Lina", age: 34 }];
  data.sort(createComparisonFunction("name"));
  console.log("按照name排序后：\n");
  data.forEach(function(item, index, array) {
      console.log(index + " : " + item.name + ", " + item.age);
  });
  data.sort(createComparisonFunction("age"));
  console.log("按照age排序后：\n");
  data.forEach(function(item, index, array) {
      console.log(index + " : " + item.name + ", " + item.age);
  });