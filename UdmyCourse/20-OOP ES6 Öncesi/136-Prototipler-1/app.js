// // Prototipler 

// const object = new Object(); // Object Literal 
// const object2 =new Object();
// object.name ="Ömer";
// console.log(object);



function Employee(name,age){
    this.name = name;
    this.age = age;
    this.showInfos = function(){
        console.log("Bilgiler Gösteriliyor..");
    }
    this.toString = function(){
        console.log("Bu bir Emloyee objesi ")
    }
}
const emp1 = new Employee("Mustafa",25);
emp1.showInfos();
console.log(emp1);
console.log(emp1.toString());