const puntosActuales = document.querySelector('#puntajeActual')
const mejorPuntaje = document.querySelector('#mejorPuntaje')
let puntos = 0;

let cantidadManzanas = 1;

puntosActuales.textContent = puntos;
mejorPuntaje.textContent = puntos;


let casillasVacias = []; //array para guardar las casillas "vacias" o que no son paredes
let caminoCasillas = []; //array para que el personaje se pueda mover



//Llamamos funciones

function cargarArray(){//funcion para cargar el array

    casillasVacias = [] //reiniciamos el array por las dudas de que se carguen nuevas paredes

    arrayCasillas.forEach(casilla => {
        if(casilla.classList == "vacio" || casilla.classList == "manzana"){//verifica la clase para saber si es vacio o no
            casillasVacias = [...casillasVacias, casilla] //si es vacion lo guarda en el array ya creado
        }//si no es vacio no hace nada
    });

}

function cargarManzana(){
    cargarArray()

    if(casillasVacias.length >= cantidadManzanas + 1){
        seleccionador = parseInt((Math.random() * 100))

        if (seleccionador > casillasVacias.length - 1 || casillasVacias[seleccionador].classList != "vacio" || casillasVacias[seleccionador].textContent != "") {
            cargarManzana()
        }
    
        casillasVacias[seleccionador].textContent = "🍎";
        casillasVacias[seleccionador].classList = "manzana";
    } else {
        if(cantidadManzanas >= 1){
            cantidadManzanas --;
        }
    }

    if (cantidadManzanas == 0) {
        ganaste()
    }

    

}

function agregarParedes(){
    seleccionador = parseInt((Math.random() * 100) - 1)
    while (seleccionador > casillasVacias.length) {
        seleccionador = parseInt((Math.random() * 100) - 1)
    }
    if(casillasVacias[seleccionador].classList == "vacio"){
        casillasVacias[seleccionador].classList = "paredes";

    } else {
        agregarParedes();
    }
}

function quitarManzana(casilla){
    const {textContent, id} = casilla
    if(textContent == "🍎"){
        arrayCasillas[id].textContent = "";

        puntos++;

        puntosActuales.textContent = puntos;
        cargarManzana()

        for (let i = 0; i < 3; i++) {
            agregarParedes();
        }
    }
}

function ganaste(){
    alert("ganaste")
    ubicacion = 999*999;

}