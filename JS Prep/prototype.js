function Person(name) {
  this.name = name;
}

Person.prototype.sayHi = function () {
  return `Hi ${this.name}`;
};

const p1 = new Person("John");

console.log(p1.sayHi());

/*
    A new object is created
    this points to that new object
    this.name = name sets "Rehan" on that object

    Instead of putting sayHi inside every object, it’s added to Person.prototype
    All instances of Person share this method
*/
