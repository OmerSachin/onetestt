// Ajax, callback , http requests


class Request{

    constructor(){
    this.xhr = new XMLHttpRequest();
}
// Get Request

get(url,callback){
    this.xhr.open("GET",url); // Baglanti acik 
    // const temp = this;

    // console.log(this.xhr)
    this.xhr.onload = () => {
       

        if (this.xhr.status === 200){
            callback(null,this.xhr.responseText); // istegimiz bitti 
        }
        else{
            // Hata durumuna 
            callback("Herhangi bir hata olustu",null);
        }
    };



    this.xhr.send();

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

request.get("https://jsonplaceholder.typicode.com/albums/5",function(err,response){
    if(err === null){
        // Basarili
        console.log(response);
    }
    else{
        console.log(err);
    }
});

