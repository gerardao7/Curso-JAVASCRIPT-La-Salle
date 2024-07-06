console.log("Metodos arrays i strings");

let text = " Esta es una string que ha escrito Omar para hacer el ejercicio de metodos";

console.log(text.trim());


// Metodos de string

// 1. `trim()` -- Elimina los espacios en blanco de ambos extremos de una cadena

text = "     Hola Mundo       ";
console.log(text.trim()); // "Hola Mundo"

// 2. `padStart(targetLength, padString)` -- Rellena la cadena original con una cadena de relleno (padString) al principio hasta alcanzar una longitud objetivo (targetLength)

text = "5";
console.log(text.padStart(3, "0"));  // "005"

// 3. `padEnd(targetLength, padString)` -- Rellena la cadena original con una cadena de relleno (padString) al final hasta alcanzar una longitud objetivo (targetLength)

text = "5";
console.log(text.padEnd(3, "0"));  // "500"

// 4. `replace(searchValue, newValue)` -- Reemplaza la primera coincidencia de `searchValue` con `newValue` en una cadena.

text = "Hola Mundo";
console.log(text.replace("Mundo", "Amigo")); // "Hola Amigo"

// 5. `replaceAll(searchValue, newValue)` -- Reemplaza todas las coincidencias de `searchValue` con `newValue` en una cadena.

text = "Hola Mundo. Mundo bonito.";
console.log(text.replaceAll("Mundo", "Amigo")); // "Hola Amigo. Amigo bonito"

// 6. `split(separator)` -- Divide una cadena en un array de subcadenas usando un separador específico.

text = "Hola, Mundo, Bonito";
let words = text.split(",");
console.log(words); // ["Hola", " Mundo", " Bonito"]

// 7. `toUpperCase()` -- Convierte una cadena a mayúsculas

text = "Hola Mundo";
console.log(text.toUpperCase()); // "HOLA MUNDO"

// 8. `toLowerCase()` -- Convierte una cadena a minúsculas

text = "Hola Mundo";
console.log(text.toLowerCase()); // "hola mundo"

// TODO: Censurar el nombre de Omar en esta string:

text = "Este es una string que ha escrito Omar";

let censoredName = "Omar".slice(0, 0).padEnd(4, "*");
let censoredText = text.replace("Omar", censoredName);

console.log(censoredText); // "Este es una string que ha escrito ****"
