// Prototype Ajax Callback

addEventListener();

function addEventListener(){
    document.getElementById("translate-form").addEventListener("submit",translateWord)
  // Change
  document.getElementById("language").onchange = function (){
    // Arayüz Islemleri 
  }
}

function translateWord(e){

    e.preventDefult();
}