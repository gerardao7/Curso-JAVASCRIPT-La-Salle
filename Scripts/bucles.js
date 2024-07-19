console.log("%cBucles", "font-weight: bold");

for (let i = 0; i < 10; i++) {  // inicialización del contador, comprobación para seguir, incremento
    console.log("Hola " + i);
}

console.log("----------------------");

for (let i = 9; i >= 0; i--) {
    console.log("Hola " + i);
}

console.log("----------------------");

alumnos = ["Gonzalo", "Carlos", "Ella", "Arnau", "Mary", "Marc", "Xavi"]

for (let i = 0; i < alumnos.length; i++) {  // ejecuta el bucle tantas veces como elementos tiene el array
    console.log("Hola, " + alumnos[i]);
}

console.log("----------------------");

for (const alumno of alumnos) {     // recorrer un array sin indice
    console.log("Hola, " + alumno);
    // ! alumnos[alumnos.indexOf(alumno)] = "Omar"         MALA IDEA
}

for (let i = 0; i < alumnos.length; i++) {  // recorrer un array con indice
    // const alumno = alumnos[i];
    // console.log("Hola, " + alumno);
    alumnos[i] = alumnos[i].toUpperCase()  // modifica los elementos del array
}

console.log("----------------------");

professor = {
    nom: "Omar",
    cognoms: "Olmedo Ferrer",
    edat: 33,
    localitat: "Piera"
}

for (const propietat in professor) {
    if (Object.hasOwnProperty.call(professor, propietat)) {
        const element = professor[propietat];
        console.log(`La propietat ${propietat} del professor té un valor de ${element}`);
    }
}

console.log("----------------------");

let i = 0;
while (i < 10) {
    console.log("Hola " + i);
    i++;
}

console.log("----------------------");

alumnos.forEach(alumno => {
    console.log("Hola, " + alumno);
});


// TODO: escribe un bucle que muestre 10 veces un mensaje por la consola con el text en color rojo y azul alternativamente

for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
        console.log('%cMensaje en rojo', 'color: red');
    } else {
        console.log('%cMensaje en azul', 'color: blue');
    }
}


// TODO: escribe un bucle que muestre los números del 0 al 20 y muestre a su lado "hola" si es multiple de 2, "adeu" si es multiple de 3 i "què tal?" si es múltiple de 5


for (let i = 0; i <= 20; i++) {
    let message = '';

    if (i % 2 === 0) {
        message += ' hola';
    }
    if (i % 3 === 0) {
        message += ' adeu';
    }
    if (i % 5 === 0) {
        message += ' què tal?';
    }

    console.log(i + message);
}

// TODO: fes un contador que mostri a la consola els números de l'1 al número que introdueixis com a paràmentre (fins a 1000 com a màxim)

// Solicitar al usuario que introduzca un número
let maxNumber = prompt("Introduce un número (máximo 1000):");

// Convertir el valor ingresado a número entero
maxNumber = parseInt(maxNumber, 10);

// Verificar si el valor ingresado es un número válido y está dentro del rango permitido
if (!isNaN(maxNumber) && maxNumber > 0 && maxNumber <= 1000) {
    // Bucle para mostrar los números del 1 al número introducido
    for (let i = 1; i <= maxNumber; i++) {
        console.log(i);
    }
} else {
    console.log("Por favor, introduce un número válido entre 1 y 1000.");
}


// TODO: fes un contador que només mostri els números que tinguin un dígit contingut a la string definida per l'usuari (amb prompt) fins a 100


// Pedir al usuario que introduzca una cadena de dígitos
let digits = prompt("Introduce una cadena de dígitos:");

// Función para comprobar si un número contiene al menos un dígito de la cadena
function containsAnyDigit(number, digits) {
    for (let digit of digits) {
        if (number.toString().includes(digit)) {
            return true;
        }
    }
    return false;
}

// Bucle para mostrar los números del 0 al 100 que contienen al menos un dígito de la cadena
for (let i = 0; i <= 100; i++) {
    if (containsAnyDigit(i, digits)) {
        console.log(i);
    }
}


// TODO: llista de la compra. Fes que un prompt es repeteixi fins que l'usuari introdueixi una paraula clau (useu BREAK); fins llavors, cada paraula introduida serà un item de la llista de la compra, que s'escriurà després de que l'usuari l'aturi amb el format:       
//                       Llista de la compra:
//                       - Pa
//                       - Mantega
//                       - Aigua

// Definir la palabra clave para detener la entrada
const stopWord = "fi";

// Inicializar un array para almacenar los ítems de la lista de la compra
let shoppingList = [];

// Bucle para solicitar ítems hasta que se introduzca la palabra clave
while (true) {
    // Solicitar al usuario que introduzca un ítem de la lista de la compra
    let item = prompt("Introduce un ítem de la lista de la compra (escribe 'fi' para terminar):");

    // Comprobar si el usuario ha introducido la palabra clave
    if (item.toLowerCase() === stopWord) {
        break;
    }

    // Añadir el ítem a la lista de la compra
    shoppingList.push(item);
}

// Mostrar la lista de la compra en el formato especificado
console.log("Llista de la compra:");
shoppingList.forEach(function(item) {
    console.log("- " + item);
});
