/** PLANTILLAS LITERALES **/
//Hasta el momento si queriamos concatenar datos haciamos esto: 

let cliente = "Ricky Ford";
let montoCompra = 1000000000;

let mensaje = cliente + " realizó una compra por $ " + montoCompra;
console.log(mensaje);

//`` alt + 96 

let mensajePlantillaLiteral = `El cliente ${cliente} realizó una compra por $ ${montoCompra}`;

console.log(mensajePlantillaLiteral);

//DOM = Document Object Model = Modelos de Objetos del Documento. 

//El DOM es una estructura de objetos generada por el navegador, la cual representa la página HTML actual. 

//Con JS vamos a poder acceder a esa estructura y modificarla de forma dinámica. 

//¿Cómo funciona?
//En el DOM, cada etiqueta representa un objeto llamado nodo. 

//TODOS ESTOS NODOS SON ACCESIBLES PRA JS A TRAVES DEL OBJETO GLOBAL "DOCUMENT" (RAFA)

//Accedemos al DOM (5 formas de hacerlo):

//A) ID: getElementById

const titulo = document.getElementById("tituloPrincipal");
console.log(titulo);

//B) Clases: getElementsByClassName

const nombres = document.getElementsByClassName("nombres");
console.log(nombres);

//C) Nombre de la etiqueta: getElementsByTagName

const meses = document.getElementsByTagName("li");
console.log(meses);

//El HTMLcollection lo puedo trabajar como un array

for (let mes of meses ) {
    console.log(mes);
}

//D) querySelector: este método nos permite seleccionar nodos con la misma sintaxis que usamos en CSS. 

const queryNombres = document.querySelector(".nombres");
console.log(queryNombres);

//Me trae el primer elemento que coincida. 

//E)querySelectorAll: 

const queryNombresAll = document.querySelectorAll(".nombres");
console.log(queryNombresAll);


////////////////////////////////

/** MODIFICAR NODOS **/

//innerText = me permite acceder al contenido textual de algún elemento del DOM. 

titulo.innerText = "Modificamos el título con JS";

//innerHTML = me permite agregar código HTML en el interior de una etiqueta/nodo. 

const divContenedor = document.getElementById("divContenedor");

divContenedor.innerHTML = `<div>
                                <p>Nombre</p>
                                <p>Precio</p>
                                <button>Agregar al carrito</button>                            
                            </div>
                            `


//ClassName: me permite agregar un nombre de clase. 

titulo.className = "titulo";

//Agregamos nodos: 

const contenedor = document.getElementById("contenedor");

const parrafo = document.createElement("p");
parrafo.innerText = "Este es un párrafo agregado desde JS";
parrafo.className = "titulo";

contenedor.appendChild(parrafo);
//No te olvides de adjuntar al hijito!! Si no colocas appendChild el nodo recién creado no sabe donde ubicarse y no se muestra. 

//ELIMINAMOS NODOS: 

//remove() = elimina el nodo seleccionado. 

parrafo.remove();

//CREAMOS OBJETOS DE FORMA DINÁMICA

class Producto {
    constructor(nombre, precio, url) {
        this.nombre = nombre;
        this.precio = precio; 
        this.url = url;
    }
}

const yerba = new Producto("Yerba", 500, "img/yerba.jpg");
const tomate = new Producto("Tomate", 200, "img/tomate.jpg");
const aceite = new Producto("Aceite", 450, "img/aceite.jpg");

const arrayProductos = [yerba, tomate, aceite];

const contenedorProductos = document.getElementById("contenedorProductos");

arrayProductos.forEach( producto => {
    const div = document.createElement("div");
    div.className = "caja";
    div.innerHTML = `<p class ="titulo">Nombre: ${producto.nombre} </p>
                     <p>Precio: ${producto.precio} </p>
                     <img class = "marolio" src ="${producto.url}">
                     <button>Agregar al Carrito</button>`;
    
                     contenedorProductos.appendChild(div);
})





