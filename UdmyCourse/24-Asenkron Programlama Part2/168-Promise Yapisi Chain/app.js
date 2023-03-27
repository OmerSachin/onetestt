// function getData(data) {
//   // Promise Objesi döndüren fonksiyon

//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       if (typeof data === "string") {
//         //Olumlu
//         resolve(data);
//       } else {
//         //Olumsuz
//         reject(new Error("Lütfen string bir deger girin"));
//       }
//     }, 5000);
//   });
// }
// // Kisa Yola Asagida
// // getData(25)
// // .then(function(response){
// //     console.log("Gelen Deger " +response);
// // }).catch(function(err){
// //    console.error(err); 
// // });

// getData(25)
// .then(response => console.log("Gelen Deger " +response))
// .catch(err => console.error(err));

function addTwo(number){

    return new Promise((resolve,reject) =>{
     setTimeout( function () {
         if (typeof number === "number"){
            resolve(number+5)
         }
         else {
             reject(new Error("Lütfen bir sayi girin"));
         }
     },3000);
    });
}

addTwo("memet")
.then(response => {
    console.log(response);
    return response +5;
}).then(response2 => console.log(response2))
.catch(err => console.error(err));
