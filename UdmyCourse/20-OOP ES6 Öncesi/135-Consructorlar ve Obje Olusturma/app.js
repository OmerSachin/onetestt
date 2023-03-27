// // console.log(this);

// // Kendi Objelerimiz Olusturma

// const emp1 = {
//     name:"Mustafa",
//     age:"25",
//     showInfos:function(){console.log("Bilgiler Gösteriliyor");}
// };
// const emp2 = {
//     name:"Ahmet",
//     age:30
// };

// emp1.salary = 4000;
// emp1.showInfos();
// console.log(emp1)

function Employee(name,age,salary){ // Yapici Fonksiyon-Constructor

    this.name = name;
    this.age = age;
    this.salary = salary;

    this.showInfos = function(){
        console.log(this.name,this.age,this.salary);
    }
}
const emp1 = new Employee("Mustafa", 25,4500);
const emp2 = new Employee("Ömer", 23,"Beles Calisiyor");

emp1.showInfos();
emp2.showInfos();

