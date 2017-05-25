/**
 * Created by Ankit on 5/25/2017.
 */
class Person {

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    //member function
    getName()
    {
        return this.name;
    }

    setName(name) {
        this.name = name;
    }


    set age(value)
    {
        this._age = value;
    }

    get age()
    {
        return this._age;
    }
}

class Student extends Person {
    constructor(name, age, id) {
        super(name, age);

        this.id = id;
    }

    set id(val)
    {
        this._id = val;
    }

    get id()
    {
        return this._id;
    }
}

var p1 = new Person("Ankit", 25);
var s1 = new Student("Divit", 6, 1);

console.log(p1.name);
console.log(s1.name);
console.log(s1.id);