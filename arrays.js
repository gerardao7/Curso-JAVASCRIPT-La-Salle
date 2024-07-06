console.log("Este es el JS de los arrays");

let data = ["dog", "😻", 23, true];

console.log(data);

let dog = "🐶";
let cat = "😻";
let raccoon = "🦝";
let pig = "🐷";
let koala = "🐨";

let animals = [dog, cat, raccoon, pig, koala, koala, koala];

console.log(animals);

console.log(data[1]);

console.log(`El array tiene ${data.length} elementos`); // Uso de template literals para insertar variables en la cadena

// -----------------------------------------------------------

let alumno = {
    nombre: "Gonzalo",
    apellido: "Pino",
    edad: 41,
    hobbie: "🎮",
    animales: [koala, animals[1]] // Correctamente asignar un array en lugar de una cadena
};

console.log(alumno);

alumno.edad = 46; // Escritura de una propiedad de un objeto
let edadGonzalo = alumno.edad; // Lectura de una propiedad de un objeto

console.log(`El ${alumno.nombre} tiene ${alumno.edad} años y le gusta ${alumno.hobbie}`); // Uso de template literals

let profe = { mochila: "🟠", barba: true };

console.log(profe);

profe.nombre = "Omar";
profe.edad = 33;

console.log(profe);

// -------------------------------

console.log("Ejercicios y arrays");

// TODO: crear un array con 5 objetos dentro que tengan las mismas 4 propiedades

let coches = [
    {
        marca: "Jaguar",
        modelo: "XSLTProcessor",
        año: 2021,
        color: "verde"
    },
    {
        marca: "Seat",
        modelo: "Panda",
        año: 2018,
        color: "rojo"
    },
    {
        marca: "Land Rober",
        modelo: "PI",
        año: 2024,
        color: "gris"
    },
    {
        marca: "Renault",
        modelo: "Nevada",
        año: 1976,
        color: "metalico"
    },
    {
        marca: "Mercedes",
        modelo: "C1",
        año: 2000,
        color: "amarillo"
    }
];

console.log(coches);

// TODO: crear un array que contenga una lista de una de las propiedades de los objetos
let listaDeMarcas = coches.map(coche => coche.marca);

console.log(listaDeMarcas);

// TODO: crear un array que contenga la suma de una propiedad (que sea numerica)
let sumaDeAños = coches.reduce((total, coche) => total + coche.año, 0);
let arraySumaDeAños = [sumaDeAños];

console.log(arraySumaDeAños);

// TODO: mostrar por consola todo lo anterior

console.log(listaDeMarcas);
console.log(arraySumaDeAños);

// TODO: mostrar por consola una frase que resuma las propiedades de cada objeto
coches.forEach(coche => {
    console.log(`El coche de la marca ${coche.marca} y modelo ${coche.modelo} del año ${coche.año} es de color ${coche.color}`);
});

// TODO: buscar una manera de mostrar todos los objetos en forma de tabla
console.table(coches);
