// Definición de variables
let username = "Gerardo";
let userSurname = "Alvarez";
let userTitle = "Diseñador";

console.log("username");
console.log("userSurname");
console.log("userTitle");

console.log(username + userTitle + userSurname);
console.log(username + " " + userTitle + " " + userSurname);
console.log(username + " " + userTitle + " " + userSurname);

console.log(`¿Qué tal estás, ${username}?`);

let userAge = 33; // Number
let userHasHair = false; // Boolean

let a = 1;
let b = 2;

console.log(a, b); // 1, 2

let c = a;
a = b;
b = c;

console.log(a, b); // 2, 1

// -------------------------------

// Transformación de tipos de variables

const PI = "3.1415";
let radi = 4;

console.log("El área del círculo es: " + parseFloat(PI) * radi ** 2 + " metros cuadrados");

let cercle = {
    radi: "4 metros",
    area: parseFloat(PI) * parseFloat(radi) ** 2 + " metros cuadrados"
};

console.log(cercle);

let data = {
    data0: PI,
    data1: parseFloat(PI),
    data2: parseInt(PI),
    data3: radi,
    data4: radi.toString()
};

console.log(data.data0, typeof data.data0); // "3.1415" string
console.log(data.data1, typeof data.data1); // 3.1415 number
console.log(data.data2, typeof data.data2); // 3 number
console.log(data.data3, typeof data.data3); // 4 number
console.log(data.data4, typeof data.data4); // "4" string
