// Selectores
const contenedorJuego = document.querySelector('.contenedorJuego'); //div para la carga de casillas
const arrayCasillas = document.querySelector('.contenedorJuego').childNodes;//todos los hijos del div anterior
const casillasTotal = 12**2-1 //cantidad de casillas totales si quiere cambiar solo editar el primer numero
//si se edita por favor acomodar los estilos para que se vea bonito


//se llama a la funcion para cargar las casillas
agregarCasillas();

//limpia el html para evitar divs o imagenes repetidas
function limpiarHTML() {
    while (contenedorJuego.firstChild) {
        contenedorJuego.removeChild(contenedorJuego.firstChild);
    }
}


//funcion para agregar las casillas
function agregarCasillas() {
    limpiarHTML()

    //for para crear una a una cada casillas que es un div
    for (let i = 0; i <= casillasTotal; i++) {
        //creando divs
        const casilla = document.createElement('div');

        //verificacion para la correcion de la clase
        if(i<=11 || i >= casillasTotal-11 || i % 12 == 0 || i % 12 == 11){
            //si esta a los costados se le pone esta clase
            casilla.classList = "paredes"
            casilla.setAttribute('name', "paredesExtremas")

        }else{
            //si esta en el centro esta
            casilla.classList = "vacio"
            casilla.setAttribute('name', "")

        }


        
        //se le agrega el id correspondiente
        casilla.id = i;

        //y se agrega al html
        contenedorJuego.appendChild(casilla)
    }
}

