class Person { //Superclass, Baseclass
  constructor(name,age) {
    this.name = name;
    this.age = age;
  }
  showInfos() {
    console.log("Isim: " + this.name + " Age: " + this.age);
  }
}
class Employee extends Person { // DerivedClass, SubClass,ChildClass
  constructor(name,age,salary) {
    // this.name = name;
    // this.age = age;
    super(name,age);
    this.salary = salary;
  }
  showInfos(){
    console.log("Isim: " + this.name + " Age: " + this.age + " Maas: " + this.salary );
  }
  toString(){ // Ovveriding
    console.log("Employee")
  }
  raiseSalary(amount){ //Ekstra 
this.salary += amount;
  }
}
const emp = new Employee("Mustafa", 25, 3000);
emp.raiseSalary(500);
// console.log(emp);
// emp.showInfos();

emp.showInfos();
emp.toString();