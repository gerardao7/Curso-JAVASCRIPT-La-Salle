// Math
console.log(Math.PI);
console.log(Math.SQRT2);

console.log(Math.random());

function dado(n) {
    return Math.random()+n
}



// TODO: función que devuelva un entero random entre a i b - aleatorio(a, b) -> [a, b]

function aleatorio(a, b) {
    return Math.floor(Math.random() * (b - a + 1)) + a;
}

// Ejemplo de uso
let numeroRandom = aleatorio(1, 10);
console.log(numeroRandom); // Esto imprimirá un número entre 1 y 10, inclusive.


// Fechas

// Temporizadores

// Errores, try...catch