//DESESTRUCTURACIÓN DE OBJETOS. 
//Me permite extraer propiedades de un objeto y asignarlas a variables individuales. 
//Me ayuda en 3 cositas: 
//1) No modificar el objeto original al trabajar con esos datos. 
//2) Facilita el trabajo con objetos grandes o anidados. 
//3) Hacer más legible el código. 


const auto = {
    marca: "Ford",
    modelo: "Fiesta",
    anio: 2019, 
    color: "azul"
};

let {marca, modelo, anio, color} = auto;

marca = "Renault";
console.log(marca);
console.log(auto.marca);

const alumno = {
    nombre: "Juan",
    edad: 23,
    curso : "JS",
    direccion: {
        calle: "San Remo",
        numero: 507,
        ciudad: "Santa Clara del Mar"
    }
}

let {trabajo = true,  curso:carrera, direccion: {calle, numero, ciudad}} = alumno;

console.log(numero);
console.log(carrera);
//console.log(curso);
console.log(trabajo);

/* DESESTRUCTURACIÓN EN PARÁMETROS */

function mostrarDatos( {nombre, curso} ) {
    console.log(`Hola, mi nombre es ${nombre} y estudio ${curso}`)
}

mostrarDatos(alumno);

/** DESESTRUCTURACIÓN DE ARRAYS **/

const numeros = [10, 20, 30, 40, 50];

let [,, tercero, cuarto, quinto ] = numeros;

console.log(tercero);

//Si me quiero saltear un numerito tengo que dejar el espacio en blanco. 

/* OPERADOR SPREAD */
//Operador de propagación. Me permite propagar los elementos de un array o un objeto en otro lugar (como una función o un nuevo array)

//Lo que hace el operador spread es enviar cada uno de sus elementos como parámetros individuales. 

const nombres  = ["Juan", "Pedro", "Maria", "Jose", "Estringuifai"];
console.log(nombres);

//Ahora si yo utilizo el operador spread: (...)

console.log(...nombres);

//Esto es equivalente a : 

console.log(nombres[0], nombres[1], nombres[2], nombres[3], nombres[4]);


//COPIAR OBJETOS: 

const yerba = {
    nombre: "Yerba", 
    precio:250
};

const nuevaYerba = yerba;
//Estamos copiando las referencias. 

console.log(yerba);
console.log(nuevaYerba);

//¿Que pasa si modifico una propiedad de alguno de estos objetos? 

nuevaYerba.nombre = "Yerba Nueva";

console.log(nuevaYerba);
console.log(yerba);


//¿Cómo copiamos objetos de forma correcta en JS? 
//Si quiero copiar un objeto y agregarle una propiedad, puedo hacerlo de esta forma. 

const nuevaYerba2 = {...nuevaYerba, marca:"Marolio"};
console.log(nuevaYerba2);


//Copiamos Arrays: 

const a = ["a", "b", "c"];
const b = [1,2,3];

const arrayCombinado = [...a, ...b];
console.log(arrayCombinado);

// REST PARAMETERS: 
//También podemos utilizar el operador spread para recibir un número indefinido de parámetros en una función. 

function mostrarDatos(...numeros) {
    console.log(numeros)
}

mostrarDatos(1,2,3);
mostrarDatos(1,2,3,4,5,6,7,8,9,10);

