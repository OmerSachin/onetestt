class Request{
    get (url){ // Get Request
return new Promise((resolve,reject) =>{        

    fetch(url)
    .then(response =>response.json())
    .then(data => resolve(data))
    .then(err => reject(err))
})
  }

}
const request = new Request();
let albums;

request.get("https://jsonplaceholder.typicode.com/albums")
.then(data => {
    albums = data;
    console.log(albums);
})
.catch(err => console.error(err));

// console.log(albums); // Asenkron bir islem 