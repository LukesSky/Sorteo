//documento para sortear nombres de personas

let nombres = []; 
// event listener
document.querySelector("#btn-agregar").addEventListener("click", agregar);
document.querySelector("#btn-sortear").addEventListener("click", sortear);

// Vincular el evento al botón después de que el DOM esté cargado
document.addEventListener("DOMContentLoaded", function() {
    document.querySelector("#btn-agregar").addEventListener("click", agregar);
});
//modelo de datos
function agregar(){
    let nombre = document.querySelector('#nombre').value; 
     // Verificar que el nombre no esté vacío
     if (nombre.trim() !== "") {
        // Agregar el nombre al array
        nombres.push(nombre); 
        console.log(nombres);
        mostrar();

        // Limpiar el input
        document.querySelector('#nombre').value = "";
    } else {
        alert("Por favor, ingresa un nombre.");
    }
}
function mostrar(){
    let lista = document.querySelector('#listaAmigos'); // Asegúrate de que el ID sea correcto
    lista.innerHTML = ""; // Limpiar la lista antes de mostrarla

    // Iterar sobre el array de nombres y agregar cada uno a la lista
    for (let elementoActual of nombres) {
        lista.innerHTML += "<li>" + elementoActual + "</li>";
    }
}
function reset(){
    nombres = [];
    //document.querySelector('#result').innerHTML = "";  
    console.log(nombres);
    mostrar();
}
function refrescarLaPagina(){
    location.reload();
    }
    
function sortear(){
    if (nombres.length === 0) {
        alert("No hay nombres para sortear.");
        return;
    }

    let randomIndex = Math.floor(Math.random() * nombres.length);
    let nombreGanador = nombres[randomIndex];

    // Mostrar el resultado en el HTML
    document.querySelector('#resultado').innerHTML = "<p>¡Felicidades! " + nombreGanador + " ha ganado el sorteo.</p>";
}