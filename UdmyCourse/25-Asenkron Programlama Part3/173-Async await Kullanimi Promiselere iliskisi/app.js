// async function test(data) {
//   //Promise return new Promise
//   let promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Bu Degerdir");
//     }, 2000);
//   });

//   let response = await promise; // 5 saniye beklicek

//   return response;
// }

// test("Merhaba").then((response) => console.log(response));


// async function testData (data){
//     let promise = new Promise((resolve,reject ) => {
//         setTimeout(() => {
//             if(typeof data === "string"){
//                 resolve(data);
//             }
//             else{
//                 reject (new Error("Lütfen string bir deger girin"));
//             }
//         },2000);
//     })
//   let response = await promise;

//   return response;
// }
// testData(25)
// .then(data =>  console.log(data))
// .catch(err => console.error(err));

async function getCurrency(url){

    const response = await fetch(url); // Response Object

    const data = await response.json(); // Json Object

    return data;
}

getCurrency("https://api.exchangerate.host/latest")
.then(ahmet => console.log(ahmet));