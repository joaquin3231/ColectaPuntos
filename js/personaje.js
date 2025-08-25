//variables y selectores
const saltoActivado = document.querySelector('#saltoActivo');
let ubicacion = 41

let accion = "salto";
let movimiento = true;

let salto = 1;

const seleccionPersonaje = document.querySelector('#seleccionPersonaje');
const personaje = document.getElementsByName('personaje')[0]
let personajeSeleccionado = "personaje azul";
let colorPersonaje = "azul"

let clasePersonaje = "personaje azul";
let color = "azul";


let bloquesMinados = 0;

//EventListener
document.addEventListener('keydown', controles)
seleccionPersonaje, addEventListener('click', cambiarPersonaje);


mejorPuntaje.textContent = JSON.parse(localStorage.getItem("mejorPunto"));

//Funcion para iniciar el juego
function cargarJuego() {
    console.log(JSON.parse(localStorage.getItem("mejorPunto")))

    mejorPuntaje.textContent = JSON.parse(localStorage.getItem("mejorPunto"));


    personajeSeleccionado = clasePersonaje;
    colorPersonaje = color;

    cantidadManzanas = 1;
    bloquesMinados = 0;
    puntos = 0;
    salto = 1;
    puntosActuales.textContent = puntos;


    agregarCasillas();
    caminoCasillas = [];
    arrayCasillas.forEach(casilla => {
        caminoCasillas = [...caminoCasillas, casilla] //si es vacion lo guarda en el array ya creado
    });

    for (let i = 0; i < cantidadManzanas; i++) {
        cargarManzana();
    }

    ubicacion = 41

    caminoCasillas[ubicacion].classList = personajeSeleccionado
    caminoCasillas[ubicacion].setAttribute('name', "personaje")


}

//funcion para cambiar de personaje
function cambiarPersonaje(e) {
    const { classList } = e.target;
    const nombre = e.target.getAttribute('name');

    if (nombre == "color") {
        clasePersonaje = classList
        color = classList[1]
    }
}



//demuestra si el salto esta actvo o nop
function cambiarTexto() {
    if (salto < 0) {
        saltoActivado.textContent = "Salto: Activado"
    } else {
        saltoActivado.textContent = "Salto: Desactivado"
    }
}

//funcion para determinar para donde te vas a mover
function controles({ code }) {

    if (code === "KeyA" || code == "ArrowLeft") {
        mecanica(-1)
    }



    if (code === "KeyD" || code == "ArrowRight") {
        mecanica(1)
    }

    if (code === "KeyW" || code == "ArrowUp") {
        mecanica(-12)
    }


    if (code === "KeyS" || code == "ArrowDown") {
        mecanica(12)
    }

    if (code === "Enter") {
        cargarJuego()
    }

    if (code === "Space") {
        mecanicaPersonaje()
        salto = salto * -1;
        cambiarTexto()
    }
}

