/** FUNCIONES **/

//¿Qué son las funciones y para que las utilizamos?

//Son un conjunto de instrucciones que se agrupan para realizar una tarea concreta. 
//(No se olviden del ejemplo del Profe del Profe)

//Se entienden como "pequeños programas" dentro de un programa mayor. 

//COMO TRABAJO CON FUNCIONES: 

//1) Declaramos funciones: 
/* holaMundo(); */

function holaMundo() {
    //Instrucciones
    alert("Hola Mundo");
}

//2) Llamar a la función (INVOCAR!!)

//Tenemos funciones que ejecutan una acción. 
//Y funciones que además de ejecutar una acción me retornan un dato. 

function retornarElNum3() {
    return 3;
}

let numTres = retornarElNum3();
console.log(numTres);

//Ejemplo de la suma. 

function sumaTradicional(numerito, valorDos) {
   /*  let resultado = numerito + valorDos; */
    return numerito + valorDos;
}

/* let valorUno = parseInt(prompt("Ingrese un num:"));
let valorDos = parseInt(prompt("Ingrese un num:"));

let resultadoSuma = sumaTradicional(valorUno, valorDos);
console.log(resultadoSuma); */


//otro ejemplo con prompt:

/* let nombreAlumno = prompt("Ingrese el nombre del alumno: ");

function saludarAlumno(nombre) {
    alert("Hola Alumno " + nombre);
}

saludarAlumno(nombreAlumno); */

//SCOPE O ALCANCE DE LAS VARIABLES //

//El scope o ambito de una variable es la zona del programa en la cual se define el contexto al que pertenece la misma dentro del algoritmo. 

//JS define dos ambitos para las variables: global y local

//Ejemplo variable global

let global = 10; 

function ejemploA() {
    console.log(global);
}

ejemploA();

//Ejemplo de variable local

function ejemploB() {
    let resultadoEjemploB = 10 + 10;
}
ejemploB();

/* console.log(resultadoEjemploB); */ 



/** FUNCIÓN ANÓNIMA  **/

//Una función anónima es una función que se define sin nombre y se utiliza para ser pasada por parámetro o asignada a una variable. 

let sumaAnonima = function (a,b) {
    return a + b;
}

console.log(sumaAnonima(1000,1000));

let restaAnonima = function (a,b) { return a - b};

console.log(restaAnonima(10000, sumaAnonima(1000,1000)));

/** FUNCIONES FLECHA **/

//Identificamos a las funciones flecha como funciones anónimas de sintaxis simplificada. 


let division = (a,b) => {
    return a / b;
}

console.log("División con función flecha");
console.log(division(100,10));


console.log("Multiplicación con función flecha: ");
let multi = (a,b) => a * b;

//Le saco el return y le saco las llaves. 

console.log(multi(50,50));

//Otro ejemplo de función flechiña

let nombre = a => console.log("Hola " + a);

nombre("Firulais");