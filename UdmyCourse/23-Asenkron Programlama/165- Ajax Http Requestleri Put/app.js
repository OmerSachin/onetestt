// Ajax, callback , http requests

class Request {
  constructor() {
    this.xhr = new XMLHttpRequest();
  }
  // Get Request

  get(url, callback) {
    this.xhr.open("GET", url); // Baglanti acik
    // const temp = this;

    // console.log(this.xhr)
    this.xhr.onload = () => {
      if (this.xhr.status === 200) {
        callback(null, this.xhr.responseText); // istegimiz bitti
      } else {
        // Hata durumuna
        callback("Herhangi bir hata olustu", null);
      }
    };

    this.xhr.send();
  }
  put(url, data, callback) {
    this.xhr.open("PUT", url);
    this.xhr.setRequestHeader("Content-type", "application/json"); //Json Verileri

    this.xhr.onload = () => {
      if (this.xhr.status === 200) {
        // Basarili
        callback(null, this.xhr.responseText);
      } else {
        callback("Put Request Bir hata olustu", null);
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

request.put("https://jsonplaceholder.typicode.com/albums/10",{userId:142,title:"Ömer Sahin"},function(err,album){

if(err === null){
    console.log(album);
}
else{
    //Hata 
    console.log(err); 
}

});
