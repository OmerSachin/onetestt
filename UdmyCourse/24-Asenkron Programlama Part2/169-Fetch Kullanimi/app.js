function getTextFile(){ // Text Dosyasindan Bu Sekilde Veriler ALiniyor
    
    fetch("example.txt")
    .then(response => response.text())
    .then(data => console.log(data))
    .catch(err => console.log(err));
}
function getJsonFile(){

    fetch("example.json")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.error(err));
}
function getExternalAPI(){

    fetch("https://api.exchangerate.host/latest")
    .then(response => response.json())
    .then(data => console.log(data.rates.TRY))
    .catch(err => console.log(err));
}

getExternalAPI();

// getTextFile();
// getJsonFile();