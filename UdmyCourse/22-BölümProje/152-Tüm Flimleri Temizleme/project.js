const form = document.getElementById("film-form");
const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");
const cardbody = document.querySelectorAll(".card-body")[1];
const clear = document.getElementById("clear-films")
// UI Objesini Baslatma

const ui = new UI();

// Storage Objesi Üret

const storage = new Storage();

// Tüm Eventleri Yükleme

addEventListener();

function addEventListener() {
  form.addEventListener("submit", addFilm);
  document.addEventListener("DOMContentLoaded",function(){
    let films = storage.getFilmsFromStorage();
    ui.loadAllFilms(films);
  });

cardbody.addEventListener("click", deleteFilm);
clear.addEventListener("click", clearAllFilms);

}
function addFilm(e) {
  const title = titleElement.value;
  const director = directorElement.value;
  const url = urlElement.value;

  if (title === "" || director === "" || url === "") {
    //Hata
    ui.displayMessages("Tüm Alanlari Doldurun...", "danger");
  } else {
    // Yeni Film
    const newFilm = new Film(title, director, url);

    ui.addFilmToUI(newFilm); // Arayüze Film Ekleme
   storage.addFilmToStorage(newFilm); //Storage'a Film Ekleme
    ui.displayMessages("Film basariyla eklendi...", "success");
  }

  ui.clearInputs(titleElement, urlElement, directorElement);

  e.preventDefault();
}

function deleteFilm(e){
  
  if(e.target.id ==="delete-film"){
    ui.deleteFilmFromUI(e.target);
    storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling
      .textContent);

      ui.displayMessages("Silme islemi basarili...","success");
      
  }
}
function clearAllFilms(){

  if(confirm("Emin misiniz ?")){
    ui.clearAllFilmsFromUI();
    storage.clearAllFilmsFromStorage();
  }
  }
