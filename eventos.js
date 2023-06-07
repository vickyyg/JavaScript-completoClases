/*** EVENTOS ***/

//Los eventos son la manera que tenemos en JS de controlar las acciones de los usuarios, y definir un comportamiento cuando se produzcan. 

//¿Cómo funcionan? Utilizamos una herramienta que se llama "Manejador de Eventos". 

/* HAY VARIAS FORMAS DE HACER ESTO:*/

const btnPrimerForma = document.getElementById("btn");

//1) Forma utilizando el método AddEventListener

btnPrimerForma.addEventListener("click", () => {
    // console.log("Hola, me hiciste click");
    alert("Hola, soy un click!!")
})

//El evento "click" se dispara cuando cliqueamos el mouse sobre un elemento determinado. 
//Usamos una función flecha para asociar un comportamiento a ese evento. 

//2) Forma: utilizando propiedades del nodo. 

const btnDos = document.getElementById("btnDos");

btnDos.onclick = () => {
    alert("Segunda Formaaaaaaa");
}

//3) Forma: Escribiendo la función en el HTML: 

function jsEnHTML() {
    console.log("Estoy llamando a la función desde el HTML");
}

//EVENTOS MÁS COMUNES: 

//1) Eventos con el mouse: se producen con la interacción del usuario con el micky mouse. 

const divCaja = document.getElementById("caja");

//mouseover / mouseout : el puntero del mouse se mueve sobre / sale del elemento. 

divCaja.onmouseout = () => {
    console.log("Ingresó / salió el puntero del elemento!!!!");
}

//mousemove: el movimiento del  mouse sobre el elemento. 

divCaja.onmousemove = () => {
    console.log("Pasaste el mouse por la caja!!!!!!");
}

//mousedown / mouseup : se oprime/ suelta el botón del RATÓN sobre un elemento. 

//Eventos con el teclado: se producen con la interacción del usuario con el teclado. 

const campoTexto = document.getElementById("campoTexto");


//keydown: cuando se presiona una tecla. 
//keyup: cuando se suelta una tecla. 

campoTexto.onkeydown = () => {
    console.log("Presionaste una tecla (keydown) ");
}

campoTexto.onkeyup = () => {
    console.log("Soltaste una tecla (keyup)");
}

//EVENTO CHANGE: se activa cuando cambia el valor de un elemento. 

const texto = document.getElementById("texto");

texto.addEventListener("change", () => {
    console.log("Ingresaste texto!");
})


//EVENTO INPUT: ejecuto una función y puedo obtener el valor de un campo de texto. 

texto.addEventListener("input", () => {
    console.log(texto.value)
})

//La propiedad value me permite acceder al texto ingresado por el usuario. 

//EVENTO SUBMIT: se activa cuando un formulario es enviado. 

class Cliente {
    constructor(nombre, apellido) {
        this.nombre = nombre; 
        this.apellido = apellido;
    }
}

const arrayClientes = [];

const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", (e) => {

    //Evito el comportamiento por default del formulario: 
    e.preventDefault();

    const nombre = document.getElementById("nombre");
    const apellido = document.getElementById("apellido");

    //Creamos un objeto del CLiente: 

    const cliente = new Cliente(nombre.value, apellido.value);

    //Lo agregamos al Array de Clientes. 

    arrayClientes.push(cliente);

    //Verificamos por consola: 
    console.log(arrayClientes);

    //Reseteamos el formulario: 
    formulario.reset();


})

