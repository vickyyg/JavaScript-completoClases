/** ARRAYS / ARREGLOS **/

//¿Que es un Array?
//Un array es un tipo de dato que sirve para almacenar valores en forma de lista. 
//Seria una colección de variables. 

/*SINTAXIS */

let array = [1, 2, 3];
console.log(array);

let arrayVacio = [];
console.log("Array Vacio");
console.log(arrayVacio);

//Puedo ir agregando valores a un array después de declararlo. 
arrayVacio = [25, 36, 99];
console.log("Agrego elementos al array vacio:");
console.log(arrayVacio);

//¿Los arrays siempre son number? No, se puede almacenar cualquier valor y modificarlos en cualquier momento. 

let arrayCombinado = ["Hola", 99, true];
console.log("Muestro el array combinado:");
console.log(arrayCombinado);

//Para poder organizarse mejor, los elementos de un array tienen un índice que los identifica. Comienza en el num 0, hasta el último elemento del array. 

const arrayLetras = ["A", "B", "C", "D"];
console.log("Array de Letras: ");
console.log(arrayLetras);

//¿Puedo mostrar un elemento específico del Array?
//Si, para eso utilizo el índice. 

console.log(arrayLetras[2]);
console.log(arrayLetras[3]);


//¿Puedo modificar un elemento? 

arrayLetras[2] = 100;
console.log(arrayLetras);

//¿Puedo recorrer un Array?
// Si queremos recorrer un array y acceder a cada elemento de forma individual, usamos un bucle/ ciclo. 
/* 
for(let i = 0; i < arrayLetras.length; i++) {
    alert(arrayLetras[i]);
} */

let string = "Hola";
console.log("Propiedad length String: " + string.length);

/** MÉTODOS MÁS COMUNES **/

//1) Método PUSH - El método push me permite agregar elementos por el final del array. 

let familia = ["Samuel", "Daniela", "Santiago", "Victoria"]; 
console.log("Array mi familia:");
console.log(familia);

familia.push("Pulga");
console.log(familia);

//Si quiero agregar al comienzo del array utilizo unshift();

familia.unshift("Firulais");
console.log(familia);

//2) Método POP - Me permite eliminar el último elemento de un array. 

let eliminado = familia.pop();
console.log(familia);
console.log("Eliminamos a " + eliminado );
/* familia.pop();
console.log(familia); */

//Si quiero eliminar el primer elemento utilizo el método shift()

let eliminadoShift = familia.shift();
console.log(familia);
console.log("Eliminamos el primer elemento: " + eliminadoShift);

//3) Método splice - Me permite eliminar uno o varios elementos de un array. 
//Funciona con dos parámetros: el primero es el indice y el segunda es la cantidad de veces que tiene que eliminar. 

//SAMUEL - DANIELA - SANTIAGO - VICTORIA

let integrantesEliminados = familia.splice(2,2);
console.log(familia);
console.log(integrantesEliminados);

//4) Método JOIN - Me permite generar un nuevo string con todos los elementos del array. 
//El valor que pasamos por parámetro es el que separa a los elementos. 

let stringFamilia = familia.join(" -Icardi- ");
console.log(stringFamilia, typeof stringFamilia);

//5) Método concat() - Me permite unir dos arrays, retornando uno nuevo. 

let familiaUnidaOtraVez =  familia.concat(integrantesEliminados);
console.log("Método CONCAT");
console.log(familiaUnidaOtraVez);

//6) Método Slice - Me retorna una copia del array. Yo puedo especificar que indice debe copiar. 
//Le paso por parámetro un valor de inicio y uno de fin (el final no se incluye)

// SAMUEL - DANIELA - SANTIAGO - VICTORIA 

let slice = familiaUnidaOtraVez.slice(0, 2)
console.log(slice);

//7) Método IndexOf() - Me retorna el índice de un elemento. 

let indiceSamuel = familiaUnidaOtraVez.indexOf("Samuel");
console.log("Indice de Samuel: " + indiceSamuel);

//Si no lo encuentra me retorna -1
//Si tengo varios elementos iguales iguales me retorna el primero que encuentra. 

//8) Método Includes() - Similar al anterior, solo que retorna un booleano si lo encuentra. 

let booleanoSamuel = familiaUnidaOtraVez.includes("Samuel");
console.log(("Booleano si encuentra a Samuel: " + booleanoSamuel));

//9) Método reverse() - Invierte los elementos de un array (Método destructivo!!);

//Modifica el array original. 

console.log("Método en Reversa: ");
console.log(familiaUnidaOtraVez);
familiaUnidaOtraVez.reverse()
console.log(familiaUnidaOtraVez);


