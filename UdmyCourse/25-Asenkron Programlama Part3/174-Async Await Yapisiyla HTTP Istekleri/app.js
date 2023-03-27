class Request {
  async get(url) {
    //  Get Request
    //     return new Promise((resolve, reject) => {
    //       fetch(url)
    //         .then((response) => response.json())
    //         .then((data) => resolve(data))
    //         .catch((err) => reject(err));
    //     });

    const response = await fetch(url); // Response

    let data = await response.json(); //JSON Object
    return data;
  }

  async post(url, data) {
    // return new Promise((resolve, reject) => {
    //   fetch(url, {
    //     method: "POST",
    //     body: JSON.stringify(data),
    //     headers: {
    //       "Content-type": "application/json; charset=UTF-8",
    //     },
    //   })
    //     .then((response) => response.json())
    //     .then((data) => resolve(data))
    //     .catch((err) => reject(err));
    // })

    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }); // Response object
    const responsadata = await response.json();
    return responsadata;
  }
  async put(url, data) {
    // return new Promise((resolve,reject) =>{
    //   fetch(url,{
    //     method: 'PUT',
    //     body: JSON.stringify(data),
    //     headers: {
    //       'Content-type': 'application/json; charset=UTF-8',
    //     }
    //   })
    //   .then(response => response.json())
    //   .then(data => resolve(data))
    //   .catch(err => reject(err));
    // })

    const response = await fetch(url, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const responsadata = await response.json();

    return responsadata;
  }
  async delete(url) {
    // return new Promise((resolve,reject) =>{
    //   fetch('https://jsonplaceholder.typicode.com/albums/1', {
    //     method: 'DELETE'
    //   }).then(response => resolve("Silme islemi basarili"))
    //   .catch(err => reject(err));
    // });

    const response = await fetch(
      "https://jsonplaceholder.typicode.com/albums/1",
      {
        method: "DELETE",
      }
    ); // Response Object
    //  const data await response.json();
    return "Veri Silme Islemi Basariyla tammalandi...!";
  }
}
const request = new Request();

// request.get("https://jsonplaceholder.typicode.com/albums")
// .then (data => {
//   albums = data;
//   console.log(albums);
// })
// .catch(err => console.log(err));

// console.log(albums); // Asenkron

request
  .post("https://jsonplaceholder.typicode.com/albums", {
    userId: 1,
    title: "Thriller",
  })
  .then((newAlbum) => console.log(newAlbum))
  .catch((err) => console.log(err));

request.put("https://jsonplaceholder.typicode.com/albums/1",{userId:10,title:"Omer"})
.then(album => console.log(album))
.catch(err => console.log(err));

request.delete("https://jsonplaceholder.typicode.com/album/1")
.then(message => console.log(message))
.catch(err => console.error(err));
