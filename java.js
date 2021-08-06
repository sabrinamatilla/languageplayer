const direccion = "http://api.languagelayer.com/detect?e4de5714278e34a03907e9974449a74b";

fetch(direccion) // Enlazo con la API
.then (respuesta => respuesta.json()) //convierte a json
.then (idioma => {

})
let url = `${direccion}?query= ${document.getElementById("texto")}`
let detectado= idioma.results.language_name
document.getElementById (`texto`).innerHTML += `` 

