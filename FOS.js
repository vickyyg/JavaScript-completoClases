/** OBJETO MATH **/

//El objeto Math contiene una serie de métodos que me permiten realizar operaciones matemáticas. 

//Propiedades: 

//Valor PI: 

let pi = Math.PI;
console.log(pi.toFixed(4));

//Constante EULER.

let euler = Math.E;
console.log(euler);

//Min y Max 

let numerosArray = [25, 63, 78];

let minimo = Math.min(76, 23, 87, 1);
console.log("Minimo: " + minimo);

let maximo = Math.max( 96, 23, 87, 1);
console.log("Maximo " + maximo);

//CEIL, FLOOR; ROUND = sirve para redondear valores. 

//1) CEIL: devuelve el entero mayor o igual más próximo. 

console.log(Math.ceil(1.5)) // 2

//2) FLOOR: devuelve el entero pero redondenando para abajo. 

console.log(Math.floor(1.5)); // 1

//3) ROUND: redondea al entero más cercano. 

console.log(Math.round(1.7)) //Si es .5 va pa arriba!

//También podemos calcular la raíz cuadrada de un número: 

//Square root: 

console.log(Math.sqrt(9)) // 3

//Random: me genera un num de forma aleatoria. 


//Entre 0 y 1: 

console.log(Math.random());

//Entre 0 y 10: 

console.log(Math.random() * 10);

//Entre 0 y 50

console.log(Math.random() * 50);

//Entre 10 y 50: 

console.log(Math.random() * 40 + 10);

//Le digo el rango de número y a partir de donde empieza a calcular. 

//Para redondear puedo combinar métodos: 

console.log(Math.round(Math.random() * 50 + 50));

/** CLASE DATE() **/

//Me permite trabajar con fechas. 

let fechaActual = new Date();
console.log(fechaActual);

//Le puedo pasar parámetros para configurar una fecha diferente. 

//Año, mes, día. 

//Atentos: porque enero es el mes 0 y diciembre el mes 11.

let fechaConFormato = new Date(2022, 11, 18);
console.log(fechaConFormato);

let fechaConString = new Date("December 18, 2022 12:00");
console.log(fechaConString);

//Si coloco un formato diferente me retorna la frase "fecha invalida".

let fecha = new Date();

console.log(fecha.getDay());

//1: para el lunes y el 7 el domingo. 

//Tenemos diferentes formatos para mostrar las fechas: 

console.log(fecha.toDateString());
console.log(fecha.toLocaleString());
console.log(fecha.toLocaleDateString());
console.log(fecha.toTimeString());


/** BLOCKBUSTER **/

//1) Creando clases 

class Cliente {
    constructor(nombre, edad, membresia) {
        this.nombre = nombre; 
        this.edad = edad; 
        this.membresia = membresia;
    }
}

class Pelicula {
    constructor(nombre, genero) {
        this.nombre = nombre; 
        this.genero = genero;
    }
}

class Alquiler {
    constructor(pelicula, cliente, costo, fecha) {
        this.pelicula = pelicula;
        this.cliente = cliente;
        this.costo = Math.round(costo);
        this.fecha = fecha || new Date();
    }
}

//Si el cliente tiene membresía GOLD puede demorar 3 días en devolver la película. 

//Si el cliente tiene membresía NORMAL puede demorar 2 días en devolver la película. 

const clienteUno = new Cliente("Juan", 30, "Gold");
const clienteDos = new Cliente("Pedro", 20, "Normal");

const arrayClientes = [clienteUno, clienteDos];


///////////////////////////////////////////////


const peliculaUno = new Pelicula("El Señor de los Anillos", "Fantasia");
const peliculaDos = new Pelicula("El Padrino", "Drama");

const arrayPeliculas = [ peliculaUno, peliculaDos];

/////////////////////////////////////////////////

const alquilerUno = new Alquiler(peliculaUno, clienteUno, 3.80);
const alquilerDos = new Alquiler(peliculaDos, clienteDos, 3.28, new Date("February 1, 2023 10:00"));

const arrayAlquileres = [alquilerUno, alquilerDos];


//////////////////////////////////////////////////////


//Función para saber si hay peliculas que deben devolverse hoy: 

function diasAlquilerSegunMembresia(cliente) {
    if(cliente.membresia == "Gold") {
        return 3;
    } else {
        return 2;
    }
}

function peliculasDevolverHoy (alquiler){
    let fechaAlquiler = alquiler.fecha;
    let fechaActual = new Date();
    let diasAlquiler = diasAlquilerSegunMembresia(alquiler.cliente);
    fechaAlquiler.setDate(fechaAlquiler.getDate() + diasAlquiler);

    if(fechaAlquiler < fechaActual) {
        return `La Pelicula ${alquiler.pelicula.nombre} debe devolverse hoy, su costo es de ${alquiler.costo}`;
    } else {
        return `La Pelicula ${alquiler.pelicula.nombre} no debe devolverse hoy, su costo es de: $ ${alquiler.costo}`;
    }
}

console.log(peliculasDevolverHoy(alquilerUno));
console.log(peliculasDevolverHoy(alquilerDos));