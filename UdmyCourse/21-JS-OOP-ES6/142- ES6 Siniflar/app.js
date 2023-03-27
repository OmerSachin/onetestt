// Syntactic Sugur

// function Employee(name, age, salary) {
//   this.name = name;
//   this.age = age;
//   this.salary = salary;
// }
// Employee.prototype.showInfos = function () {
//   console.log("Isim:" + this.name + "Yas:" + this.age + "Maas:" + this.salary);
// };
// const emp = new Employee("Mustafa", 40, 2000);

// console.log(emp);

class Employee {
    constructor(name,age,salary){ //Constructor
        this.name = name;
        this.age = age;
        this.salary = salary;
    }
   showInfos(){
    console.log("Isim: " + this.name + " Yas: " + this.age + " Maas: " + this.salary);
   }
}

const emp = new Employee("Mustafa",25,4000);

// console.log(emp)
emp.showInfos();