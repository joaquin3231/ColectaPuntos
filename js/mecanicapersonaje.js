//azul amarillo rojo negro
function mecanicaPersonaje() {

    switch (colorPersonaje) {
        case "azul":
            accion = "salto";
            break;
        case "amarillo":
            if(accion != "minar"){
                accion = "minar"
            } else {
                accion = ""
            }
            break;
        case "rojo":
            // desactivarSalto()
            break;
        case "negro":
            // desactivarSalto()
            break;
        default:
            break;
    }
}

//funcion para configurar el miviento
function mecanica(numero) {

    if(colorPersonaje == "rojo" || colorPersonaje == "negro"){
        desactivarSalto()
        desactivarMovimientos()
    } else {
        activarMovimientos()
    }

    if (salto < 0 && accion == "salto") {
        numero += numero * 1
        salto = salto * -1;
        cambiarTexto()
    }

    if(colorPersonaje == "amarillo"){
        romperBloque(numero, accion) 
    }
    movimientoPersonaje(numero)

}



function movimientoPersonaje(numero){
    if (caminoCasillas[ubicacion + numero].classList != "paredes") {
        if (movimiento) {
            caminoCasillas[ubicacion].classList = "vacio"
            caminoCasillas[ubicacion].setAttribute('name', "")
            caminoCasillas[ubicacion + numero].classList = personajeSeleccionado
            caminoCasillas[ubicacion + numero].setAttribute('name', "personaje")

            ubicacion += numero

            if (caminoCasillas[ubicacion].textContent == "🍎") {
                quitarManzana(caminoCasillas[ubicacion])
            }
        }
    } else {
        if(movimiento){
            caminoCasillas[ubicacion - numero].classLists = "vacio"
            ubicacion = 999 * 999;
            if(puntos > parseInt(mejorPuntaje.textContent)){
                alert(`Perdiste. Puntaje Actual: ${puntos}: fue el mejor`)
                localStorage.setItem("mejorPunto", JSON.stringify(puntos))

            } else {
                alert(`Perdiste. Puntaje Actual: ${puntos}`)
                if(JSON.parse(localStorage.getItem("mejorPunto")) < puntos){
                    localStorage.setItem("mejorPunto", puntos);
                }
            }
        }
    }
}

function romperBloque(numero, action = accion) {
    desactivarSalto()


    if(action == "minar"){
        desactivarMovimientos()

        if (!movimiento && caminoCasillas[ubicacion + numero].classList == "paredes" && caminoCasillas[ubicacion + numero].getAttribute('name') !== "paredesExtremas") {
            caminoCasillas[ubicacion + numero].classList = "vacio"
            caminoCasillas[ubicacion + numero].setAttribute('name', "")
            bloquesMinados ++;
        }
        cargarArray()



        if(bloquesMinados % 2 == 0 && bloquesMinados != 0){
            puntos --;
            puntosActuales.textContent = puntos;

        }
    } else {
        activarMovimientos()
    }




}
function desactivarSalto() {
    accion = "";
}

function activarMovimientos() {
    movimiento = true
}
function desactivarMovimientos() {
    movimiento = false
}