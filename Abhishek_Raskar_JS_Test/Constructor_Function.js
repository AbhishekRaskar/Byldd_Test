// Constructor
function Person(name) {
  this.name = name;
}
//  method to the prototype
Person.prototype.greet = function () {
  console.log("Hello, " + this.name);
};

let person1 = new Person("MS");
let person2 = new Person("Abhi");


person1.greet();
person2.greet(); 
