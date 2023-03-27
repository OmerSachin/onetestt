// Kalitim - Inheritance

function Person(name, age) {
  this.name = name;
  this.age = age;
}
Person.prototype.showInfos = function () {
  console.log("Isim:" + this.name + "Yas:" + this.age);
};

// const person = new Person ("Mustafa",25);
// console.log(person);

function Employee(name, age, salary) {
  this.name = name;
  this.age = age;
  this.salary = salary;
}

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.toString = function () {
  console.log("Employee");
};
//Overriding - Iptal Etme
Employee.prototype.showInfos = function () {
  console.log(
    "isim: " + this.name + " Yas: " + this.age + " Maas: " + this.salary
  );
};
const emp = new Employee("Maho", 24, 1200);

// console.log(emp);
emp.showInfos();
emp.toString();
