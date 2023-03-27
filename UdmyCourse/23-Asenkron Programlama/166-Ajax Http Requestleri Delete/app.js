// Ajax, callback , http requests

class Request {
  constructor() {
    this.xhr = new XMLHttpRequest();
  }
  // Get Request

  delete(url, callback) {
    this.xhr.open("DELETE", url); // Baglanti acik
    // const temp = this;

    // console.log(this.xhr)
    this.xhr.onload = () => {
      if (this.xhr.status === 200) {
        callback(null,"Veri Silme Islemi Basarili "); // istegimiz bitti
      } else {
        // Hata durumuna
        callback("Delete Request: Herhangi bir hata olustu", null);
      }
    };

    this.xhr.send();
  }
  post(url, data, callback) {
    this.xhr.open("POST", url);
    this.xhr.setRequestHeader("Content-type", "application/json"); //Json Verileri

    this.xhr.onload = () => {
      if (this.xhr.status === 201) {
        // Basarili
        callback(null, this.xhr.responseText);
      } else {
        callback("Herhangi bir hata olustu", null);
      }
    };
    this.xhr.send(JSON.stringify(data));
  }
}

const request = new Request();

// request.get("https://jsonplaceholder.typicode.com/albums",function(err,response){
//     if(err === null){
//         // Basarili
//         console.log(response);
//     }
//     else{
//         console.log(err);
//     }
// });

// request.get("https://jsonplaceholder.typicode.com/albums/5",function(err,response){
//     if(err === null){
//         // Basarili
//         console.log(response);
//     }
//     else{
//         console.log(err);
//     }
// });

// request.post("https://jsonplaceholder.typicode.com/albums",{userId:2,title:"Thriller"},function(err,album){

// if(err === null){
//     console.log(album);
// }
// else{
//     //Hata 
//     console.log(err); 
// }

// });

request.delete("https://jsonplaceholder.typicode.com/albums/10",function(err,response){
    if(err === null){
        // Basarili
        console.log(response);
    }
    else{
        console.log(err);
    }
});




