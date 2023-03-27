// const obj ={
//     test1:function(){
//         console.log("Test1");
//     },
//     test2:function(){
//         console.log("Test2");
//     }
// }
// // console.log(obj);

// const emp = Object.create(obj);
// emp.name = "Ömer";
// emp.age = 25;
// console.log(emp);



function Person(){

}
Person.prototype.test1 = function(){
    console.log(Test1);

}
Person.prototype.test2 = function(){
    console.log(Test2);
}
function Employee(name,age){
    this.name = name;
    this.age = age;
}
Employee.prototype = Object.create(Person.prototype);

const emp = new Employee("Mustafa",30);

console.log(emp);

