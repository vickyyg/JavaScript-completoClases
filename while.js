/* CICLOS - BUCLES - ITERACIONES  */

/* console.log(1)
console.log(2)
console.log(3)
console.log(4)
console.log(5)
console.log(6)
console.log(7)
console.log(8)
console.log(9)
console.log(10) */

//Los ciclos son herramientas que nos permiten repetir un bloque de instrucciones cierta cantidad de veces. 

/*¿Qué tipos de Ciclos tenemos en JS?*/ 

//1) Ciclos por conteo: for.
//2) Ciclos condicionales. While y Do While. 

//Las condicionales en programas son grupos de sentencias o sentencias individuales que te permiten condicionar la decisión entre la elección de una opción y otra

/*CICLO FOR*/
//Generalmente lo voy a usar cuando se la cantidad de repeticiones que debe tener mi código. 

//SINTAXIS: 

/*
for(desde; hasta; actualizacion) {
    el código que queremos que se repita. 
    consolo.log("hola mundo");
}
*/

//Ejemplo A. Quiero mostrar "Hola Mundo" 10 veces por consola. 

console.log("Ejemplo A");

for(let i = 0; i < 10; i = i + 1 ) {
    console.log("Hola Mundo");
}


//Ejemplo B. Si quiero que comience a contar desde 1 y que incluya al 10. 

console.log("Ejemplo B:");

for(let i = 1; i <= 10; i = i + 1) {
    console.log(i);
}

//Ejemplo C. Si quiero que cuente desde 10 hasta 0. 

 console.log("Ejemplo C:");

 for(let i = 10; i >= 0; i = i - 1) {
    console.log(i);
 }


 //Ejemplo D. Si quiero mostrar por consola los números pares entre 0 y 10. 

 console.log("Ejemplo D: ");

 for(let i = 0; i <= 10; i = i + 2) {
    console.log(i);
 }

 //Ejemplo E. Pido una contraseña al usuario hasta que la ingrese correctamente.

console.log("Ejemplo E");

const passwordAutorizado = 1234;

//Colocar i = i + 1 es lo mismo que poner i++;

/* for(let i = 0; i < 2 ; i++) {
    let passwordUsuario = parseInt(prompt("Ingrese su contraseña:"));

    if(passwordUsuario === passwordAutorizado) {
        console.log("Contraseña correcta, muy bien amiguito!!!");
        break;
    }else {
        passwordUsuario = parseInt(prompt("Contraseña incorrecta, vuelva a intentar, ladrón!!!!!"));
    }
} */

//A veces, cuando escribimos una estructura for, necesitamos que bajo cierta condición el ciclo se interrumpa. Para eso se utiliza la sentencia break;

//Sentencia "continue";

//Ejemplo F: muestro los números de 0 al 6 pero saltando los números pares: 

console.log("Ejemplo F:");

for(let i = 0; i <= 6; i++) {
    if( i % 2 == 0) {
        continue;
    }
    console.log(i);
}

// % nos retorna el resto de una división. 
// Si el resto es 0, es par. 
// Si el resto es 1, es impar. 

//Si queremos saltear una repetición y que siga con la próxima. Utilizamos la sentencia continue. 

/*CICLO WHILE*/
//El ciclo while es un ciclo que se ejecuta mientras la condición evaluada sea verdadera. 

/* alert("Ejemplo G:");

let nombre = prompt("Ingrese su nombre: (Para salir ingrese: salir)");

while(nombre != "salir") {
    console.log(nombre);
    nombre = prompt("Ingrese su nombre: (Para salir ingrese:salir)");
} */

//Cuidado con los ciclos infinitos. No se los manden a sus tutores para corregir. 

/*CICLO DO WHILE */

//La diferencia es que en Do While se ejecuta al menos una vez el código. 

// alert("Ejemplo H: ");

// const passAutorizado = 1234;
// let passwordUsuario; 

// do {
//     passwordUsuario = prompt("Ingrese su contraseña:");
// }while(passwordUsuario != passAutorizado);

/** ESTRUCTURA SWITCH **/

//Esta especialmente diseñada para manejar de forma sencilla multiples condiciones sobre la misma variables. 


let clima = prompt("Ingrese el clima de su ciudad");

switch(clima) {
    case "lluvia":
        console.log("Mira netflix tranquilo en tu casa");
        break;
    case "nublado":
        console.log("hermoso dia para un asado");
        break;
    case "soleado":
        console.log("Nos vamos a la playa!");
        break;
    case "frio":
        console.log("a mimir");
        break;
    default:
        console.log("Que pusiste??? Escribi bien, anda palla bobo!");
        break;
}



let peso = parseInt(prompt('Ingrese su peso en kilogramos: '));

let altura = parseInt(prompt('Ingrese su altura en centimetros: '));

let imc = (peso / (altura * altura)) * 10000; 

// Calculadora actualizada con lo aprendido hoy (condicionales)

let teFaltaGuiso = (imc < 18.5)

let estasJamon = (imc >= 18.5 && imc < 24.9)

let tenesDeDondeAgarrar = (imc >= 24.9 && imc < 29.9)

// let tusHuesosSonGrandes = (imc >= 29.9) esta la podemos suplantar por el 'else'

if (teFaltaGuiso) {

    console.log('Tu IMC es ' + imc + '. Te falta Guiso.');

} else if (estasJamon) {

    console.log('Tu IMC es ' + imc + '. Estas Jamon.');

} else if (tenesDeDondeAgarrar) {

    console.log('Tu IMC es ' + imc + '. Pa que tengas de donde agarrar.');

} else {

    console.log('Tu IMC es ' + imc + '. NO ESTAS GORDO, TENES HUESOS GRANDES.');

} 