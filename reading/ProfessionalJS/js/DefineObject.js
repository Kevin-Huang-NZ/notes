function log() {

    output("myLogArea", "\n-------------------------我是分割线----------Object.defineProperty--writable--------------\n");
    var person = {};
    person.name = "Kevin";
    person._age = 35;
    person.isOld = false;

    person.sayHi = function() {
        return "Hi. I'm " + this.name + ".";
    }

    Object.defineProperty(person, "name", {
        writable: false
    });
    output("myLogArea", "name属性被设置成只读。");

    output("myLogArea", person.sayHi());
    person.name = "Lina";
    output("myLogArea", person.sayHi());

    output("myLogArea", "\n-------------------------我是分割线----------Object.defineProperty--get/set--------------\n");
    Object.defineProperty(person, "age", {
        get: function() {
            return this._age;
        },
        set: function(newValue) {
            this._age = newValue;
            if (newValue > 40) {
                this.isOld = true;
            }
        }
    });

    output("myLogArea", person.name + "老了: " + person.isOld);
    person.age = 41;
    output("myLogArea", person.name + "老了: " + person.isOld);

    output("myLogArea", "\n-------------------------我是分割线----------Object.defineProperties--定义多个属性--------------\n");

    var person1 = {};
    Object.defineProperties(person1, {
        name: {
            writable: false,
            value: 'Lina'
        },
        _age: {
            value: 34
        },
        isOld: {
            value: false
        },
        "age": {
            get: function() {
                return this._age;
            },
            set: function(newValue) {
                this._age = newValue;
                if (newValue > 40) {
                    this.isOld = true;
                }
            }
        }
    });
    person1.sayHi = function() {
        return "Hi. I'm " + this.name + ".";
    };
    output("myLogArea", person1.sayHi());
    output("myLogArea", person1.name + "老了: " + person1.isOld);

    output("myLogArea", "\n-------------------------我是分割线----------prototype--------------\n");

    function Person() {}
    Person.prototype.name = "Sophie";
    Person.prototype.age = 5;
    Person.prototype.sayName = function() {
        return this.name;
    };

    var sophie1 = new Person();
    var sophie2 = new Person();
    output("myLogArea", "sophie1.sayName : " + sophie1.sayName());
    output("myLogArea", "sophie2.sayName : " + sophie2.sayName());
    output("myLogArea", "sophie1 == sophie2 : " + (sophie1 == sophie2));
    output("myLogArea", "sophie1.sayName == sophie2.sayName : " + (sophie1.sayName == sophie2.sayName));
    output("myLogArea", "Person.prototype.isPrototypeOf(sophie1) : " + Person.prototype.isPrototypeOf(sophie1));
    output("myLogArea", "Object.getPrototypeOf(sophie1).name : " + Object.getPrototypeOf(sophie1).name);
    sophie1.name = "Sophie Huang";
    output("myLogArea", "sophie1.hasOwnProperty(\"name\") : " + sophie1.hasOwnProperty("name"));
    output("myLogArea", "sophie2.hasOwnProperty(\"name\") : " + sophie2.hasOwnProperty("name"));
    output("myLogArea", "hasPrototypeProperty(sophie1, \"name\") : " + hasPrototypeProperty(sophie1, "name"));
    output("myLogArea", "hasPrototypeProperty(sophie2, \"name\") : " + hasPrototypeProperty(sophie2, "name"));
    output("myLogArea", "sophie1.sayName : " + sophie1.sayName());
    output("myLogArea", "sophie2.sayName : " + sophie2.sayName());

    delete sophie1.name;
    output("myLogArea", "sophie1.hasOwnProperty(\"name\") : " + sophie1.hasOwnProperty("name"));
    output("myLogArea", "sophie2.hasOwnProperty(\"name\") : " + sophie2.hasOwnProperty("name"));
    output("myLogArea", "sophie1.sayName : " + sophie1.sayName());
    output("myLogArea", "sophie2.sayName : " + sophie2.sayName());

    output("myLogArea", "\n-------------------------我是分割线----------prototype--in------------\n");
    output("myLogArea", "(\"name\" in sophie1) : " + ("name" in sophie1));
    output("myLogArea", "(\"name\" in sophie1) : " + ("name" in sophie2));

    output("myLogArea", "\n-------------------------我是分割线----------Object.keys---Enumerable---------\n");
    output("myLogArea", "Object.keys(sophie1) : " + Object.keys(sophie1));
    output("myLogArea", "Object.keys(Person.prototype) : " + Object.keys(Person.prototype));
}

function hasPrototypeProperty(obj, propertyName) {
    return !obj.hasOwnProperty(propertyName) && (propertyName in obj);
}