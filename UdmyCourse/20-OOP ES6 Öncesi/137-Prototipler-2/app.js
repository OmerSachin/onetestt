function Employee(name,age){
    this.name = name;
    this.age = age;
}
Employee.prototype.showInfos = function(){
    console.log("Isim:" + this.name + "Yas:" + this.age);
}
const emp1 = new Employee("Mustafa",25);
const emp2 = new Employee("Oguz",40);

emp2.showInfos();
console.log(emp1);
console.log(emp2)