/** STORAGE **/

//Nos permite guardar datos de manera local en el navegador. 

//El navegador nos ofrece dos formas de guardar datos en el Storage: 

//LocalStorage: almacena datos de forma indefinida, hasta que el usuario los borre de forma manual. 

//SessionStorage: almacena datos hasta que el usuario cierra el navegador. 

//1) Trabajamos con el LocalStorage:

//Para guardar datos en el localStorage usamos un método que se llama setItem(). 

//Y Esto lo tenemos que hacer llamando a un objeto global llamado localStorage. 

//localStorage.setItem();

//Este método recibe dos parámetros: el nombre de la clave y el valor a guardar. 

//A. Almacenar un saludo. 

localStorage.setItem("saludo", "Hola Mundo");

//B. Almacenamos un number. 

localStorage.setItem("numero", 1234);

//C. Almacenamos un booleano 

localStorage.setItem("booleano", true);

//¿Cómo recupero los datos? 
//Para recuperar los datos almacenados, utilizamos el método getItem();

let saludo = localStorage.getItem("saludo");
console.log(saludo);

//Recuperamos el number: 

let numero = localStorage.getItem("numero");
console.log(numero, typeof numero);


//2) Trabajamos con el sessionStorage: 
//El funcionamiento es similar al localStorage. 

//Almacenamos con setItem(). 

sessionStorage.setItem("SaludoNuevo", "Hola Mundo otra vez");

//Recupero el dato del sessionStorage: 

let saludoDos = sessionStorage.getItem("SaludoNuevo");
console.log(saludoDos);

sessionStorage.setItem("numero", 123456);
sessionStorage.setItem("booleano", false);

//Si quieremos eliminar un dato del localStorage: 

//localStorage.removeItem("saludo");

//También puedo eliminar toda la información del localStorage con el método clear(). 

//localStorage.clear();

//Recorremos con un bucle el localStorage.
//Utilizamos el método key() que nos devuelve un array con las claves del Storage. 

console.log("Recorremos el localStorage: ");

for(let i = 0; i < localStorage.length; i++) {
    let clave = localStorage.key(i);
    let valor = localStorage.getItem(clave);
    console.log(clave, valor);
}


/*** ALMACENAR OBJETOS EN EL STORAGE ***/

//Tenemos que tener en cuenta que todo lo que se almacena en el Storage esta en formato String. 
//Por lo tanto, si queremos almacenar un objeto, tenemos que convertirlo en String. 

//JSON: Javascript Object Notation. Es un formato de texto ligero para el intercambio de datos. 

//JSON es un string con formato especial: 

//¿Cómo convertimos un objeto a JSON?

const samuel = {
    nombre: "Samuel",
    apellido: "Tocaimaza",
    edad: 18, 
    casado: false
};

//Utilizamos el método JSON.stringify()

const samuelJSON = JSON.stringify(samuel);

console.log(samuelJSON, typeof samuelJSON);

//Lo almaceno en el localStorage

localStorage.setItem("samuel", samuelJSON);

//Ahora si quiero recuperar un JSON del localStorage y convertirlo en un objeto tengo que utilizar el método JSON.parse()

const personaJSON = localStorage.getItem("samuel");

console.log(personaJSON);

const persona = JSON.parse(personaJSON);

console.log(persona);

//EJEMPLO UTILIZANDO EL LOCALSTORAGE PARA CAMBIAR EL MODO DARK O CLARO

//1) Crear un botón que cambie el modo de la página
//2) Almacenamos el modo en el localStorage
//3) Al recargar la página, recuperamos ese modo que esta guardado en el localStorage. 
//4) Cambiar el modo de la página.

const boton = document.getElementById("botonFondo");

boton.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    if(document.body.classList.contains("dark")){
        localStorage.setItem("modo", "dark");
    } else {
        localStorage.setItem("modo", "light");
    }
})

const modo = localStorage.getItem("modo");

if(modo === "dark") {
    document.body.classList.add("dark");
} else {
    document.body.classList.remove("dark");
}

//Recordemos: 
//Document es el objeto que representa al documento HTML. 
//Body es el elemento que representa al body del documento HTML. 
//classList es una propiedad que nos devuelve una lista de las clases del elemento. 
//Toggle es un método que nos permite agregar o eliminar una clase del elemento. 

//Ejemplo: Almacenamos un carrito de compras en el localStorage y lo recuperamos. 

class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre; 
        this.precio = precio;
    }
}

const producto1 = new Producto("Camisa", 500);
const producto2 = new Producto("Pantalon", 1000);

const carrito = [];

carrito.push(producto1);
carrito.push(producto2);

//Convertimos el carrito a JSON: 

const carritoJSON = JSON.stringify(carrito);

//Almacenamos el carrillo en el localStorage

localStorage.setItem("carrito", carritoJSON);

//Recuperamos el carrito del localStorage: 

const carritoRecuperado = localStorage.getItem("carrito");

//Convertimos el JSON a objeto: 

const carritoObjeto = JSON.parse(carritoRecuperado);

//Imprimimos el carrillo de compras modificando el DOM. 

const contenedor = document.getElementById("contenedorCarrito");

carritoObjeto.forEach( producto => {
    contenedor.innerHTML += ` <p> ${producto.nombre} - ${producto.precio} </p>`
});
