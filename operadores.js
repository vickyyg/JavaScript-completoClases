/** SUGAR SINTAX **/
//La utilización de OPERADORES AVANZADOS para simplificar el código. 

//1) Operador ++

let i = 1; 
i = i + 1;
i++;
console.log(i);

let aux = 0; 

while(aux < 5) {
    console.log(aux);
    aux++;
}


//2) Operador Ternario: es una simplificación del condicional if.. else

//Sintaxis: 3 partes ( si o si )
//- La condición
//- Código que se ejecuta cuando la condición es verdadera. 
//- else, el código qeu se ejecuta cuando la condición es falsa. 

let edadCliente = 8;

if(edadCliente >= 18) {
    console.log("Es mayor, puede ingresar.");
} else {
    console.log("Es menor, no puede ingresar rata!");
}

//Con el operador ternario: 
edadCliente >= 18 ? console.log("Es mayor!!!") : console.log("Es menor, anda pa alla bobo");

//El operador ternario ya tiene un return implícito, es decir que me resulta muy útil para retornar datos de forma condicional. 

let tienePermiso = edadCliente >= 18 ? true : false;
console.log(tienePermiso);

/** OPERADOR LÓGICO AND &&**/
//Es una simplificación del condicional IF en una sola línea de código: 

let nombreCliente = "Samuel"; 

nombreCliente === "Samuelito" && alert("Bienvenido Samuel");

if(nombreCliente === "Samuel") console.log("Si es verdad, funciona igual");

//Otro ejemplo: 

let nuevoCarrito = [];
nuevoCarrito.length === 0 && console.log("El carrillo esta vacio!!!!");

//También me retorna valores

let vacio = nuevoCarrito.length === 0 && "el carrito esta vacio";
console.log(vacio);

//OPERADOR LÓGICO OR ||: 
//Primero tenemos que saber lo que es un valor "falsy" en JS.
//Valores falsy: false, 0, "", null, undefined, NaN. 

console.log("Operador Lógico OR:");
console.log(0 || "Cualquier cosa");
console.log(null || "miau");
console.log(100 || "La mejor comisión del condado");


//Ejemplo: 

/* let nombre = prompt("Ingrese su nombre: ");
console.log(nombre || "Usuario Invitado"); */

//OPERADOR NULLISH COALESCING 
//Es una simplificación del operador OR. 
//Trabaja igual al OR, pero solo admite como valores "nullish" a null y undefined. 

console.log("Operador Nullish Coalescing");
console.log( null ?? "nullish");

//ACCESO CONDICIONAL A UN OBJETO: 

const cliente = null; 

console.log(cliente?.nombre || "El cliente no existe");

//¿Qué me retorna si el objeto es null? 

/**** DESESTRUCTURACIÓN DE OBJETOS ****/

const alumno = {
    nombre: "Juan", 
    apellido: "Perez", 
    edad: 25,
    curso: "JavaScript"
};

let nombreAlumno = alumno.nombre;
console.log(nombreAlumno);

//Sintaxis: 

let {nombre, apellido, edad, curso:carrera} = alumno;

console.log(nombre);
console.log(edad);

nombre = "Firulais";
console.log(alumno.nombre);
console.log(nombre);

console.log(carrera);

//Puedo declarar con const o let. Adentro de las llaves puedo poner el nombre de las propiedades que quiero extraer. Y en memoria se crean esas variables a las cuales puedo acceder de forma independiente después. 

//Que pasa si una de las propiedades del objeto es otro objeto: 

const gato = {
    dueño: "Juan", 
    raza: "Persa",
    edad: 5, 
    direccion : {
        calle: "Av. Siempre Viva",
        numero: 123, 
        ciudad: "Sprinfield"
    }
}

let {dueño, raza, edad:edadGato, direccion:{calle, numero, ciudad}} = gato;

console.log(calle);
//console.log(direccion);


