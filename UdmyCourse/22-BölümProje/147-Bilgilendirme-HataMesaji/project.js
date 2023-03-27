const form = document.getElementById("film-form");
const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");

// UI Objesini Baslatma

const ui = new UI();

// Tüm Eventleri Yükleme

addEventListener();
function addEventListener() {
  form.addEventListener("submit", addFilm);
}
function addFilm(e) {
  const title = titleElement.value;
  const director = directorElement.value;
  const url = urlElement.value;

  if (title === "" || director === "" || url === "") {
    //Hata
    ui.displayMessages("Tüm alanlari doldurun...","danger");
  }
   else {
    // Yeni Film

    const newFilm = new Film(title, director, url);

    ui.addFilmToUI(newFilm); // Arayüze Film Ekleme
    ui.displayMessages("Film basariyla eklendi...","success");
  }


  ui.clearInputs(titleElement,urlElement,directorElement);

  e.preventDefault();
}
