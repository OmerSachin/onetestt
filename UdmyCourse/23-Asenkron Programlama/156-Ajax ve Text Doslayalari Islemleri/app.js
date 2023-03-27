// Http Status
// 200 : Ok
// 403 : Forbidden
// 404 : Notfound
// 505 : Internal Server Error
//Holds the status of the XMLHttpRequest.
// 0: request not initialized
// 1: server connection established
// 2: request received
// 3: processing request
// 4: request finished and response is ready

document.getElementById("btn").addEventListener("click",function(){

    // XMLHttpRequest

    const xhr = new XMLHttpRequest();

     

    xhr.onload = function(){
        if(this.status === 200) {
            document.getElementById("ajax").textContent = this.responseText;
        }
    }
    



//    xhr.onreadystatechange = function(){
   
//     if(this.status == 200 && this.readyState == 4){
//          Resonse Hazir
//         console.log(this.responseText)
//     }


// }
   xhr.open("GET", "example.txt",true);

   xhr.send();

   
});