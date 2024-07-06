console.log("Metodes arrays i strings")

text = " Esta es una string que ha escrito Omar para hacer el ejercicio de metodos"

console.log(text.trim)





// Metodos de string

// 1. `trim()`-- Elimina los espacios en blanco de ambos extremos de una cadena

let text = "     Hola Mundo       ";
console log(text.trim()); // "Hola Mundo"

// 2. `padStart(targetLenght, padString)^; -- Rellena la cadena original con una cadena de relleno (padString) al principio hasta alcanzar una longitud objetivo (targetLenght)

let text = "5";
console.log(text.padStart(3,0));  // "005"

// 3. padEnd` ....


// 4. replace(searchValue, newValue)`; -- Reemplaza la primera coincidencia de `searchvalue`con `newValue` en una cadena.

let text = "Hola Mundo"
console.log(text.replace("Mundo", "Amigo")); //"Hola Amigo"


// 5. `replaceAll(searchValue, newValue)` -- Reemplaza todas las copincidencias de "search value" con "newValue" en una cadena.

let text = "Hola Mundo. Mundo bonito.";
console.log(text.replaceAll("Mundo", "Amigo")); // "Hola Amigo. Amigo bonito"


// 6. `split(separador) -- Divide una cadena array de subcadenas usando un separador especifico.

let text = "Hola, Mundo, Bonito";
let words = text.split(",");
console.log(words); // ["Hola", "Mundo", "Bonito"]

// 7. `toUpperCase()` -- Convierte una cadena a mayúsculas

let text = "Hola Mundo";
console.log(text.toUpperCse)()); // "HOLA MUNDO"

// 8. `toLowerCase()`-- Convierte una cadena a minuculas

let text = "Hola Mundo";
console.log(text.toLowerCase()); // "hola mundo"




// TODO: Censurar el nombre de Omar en esta string:

let text = "Este es una string que ha escrito Omar";

let censoredName = "Omar".slice(0,0).padEnd(4, "*");
let censoredText = text.replace("Omar", censoredname);

console.log(censoredText); // "Este es una string que ha escrito ****"