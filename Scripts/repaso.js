// TODO: mostra les taules de multiplicar del 1 al 9 per la consola

// Función para mostrar las tablas de multiplicar del 1 al 9
function mostrarTablasMultiplicar() {
    for (let i = 1; i <= 9; i++) {
        console.log(`Tabla del ${i}:`);
        for (let j = 1; j <= 10; j++) {
            console.log(`${i} x ${j} = ${i * j}`);
        }
        console.log(''); // línea en blanco para separar las tablas
    }
}

// Llamamos a la función para mostrar las tablas
mostrarTablasMultiplicar();



// TODO: recrea la funció parseFloat() de manera que agafi els números encara que hi hagi lletres abans i accepti com a separador decimal els símbols ",", "." i "'". P.e: "hola89'234" ha de tornar "89.234", "43'35adeu" ha de tornar "43.35", "amor45.9odi" ha de tornar "45.9", "234.1234.25.5" ha de tornar "234.1234"

function customParseFloat(input) {
    // Expresión regular para encontrar el primer número con separador decimal
    const regex = /[-+]?\d*[\.,']?\d+/;
    const match = input.match(regex);
    
    if (match) {
        // Reemplaza cualquier coma o apóstrofe por un punto
        let numberString = match[0].replace(/[',]/g, '.');
        // Intenta convertir el resultado en un número de punto flotante
        let result = parseFloat(numberString);
        return isNaN(result) ? NaN : result;
    }
    
    // Si no se encuentra ningún número, devuelve NaN
    return NaN;
}

// Ejemplos de uso:
console.log(customParseFloat("hola89'234"));       // 89.234
console.log(customParseFloat("43'35adeu"));        // 43.35
console.log(customParseFloat("amor45.9odi"));      // 45.9
console.log(customParseFloat("234.1234.25.5"));    // 234.1234



// TODO: crea una funció que agafi un string i que torni una lletra aleatoria (sense contar espais i signes de puntuació)

function getRandomLetter(str) {
    // Eliminar espais i signes de puntuació
    let cleanedStr = str.replace(/[^a-zA-Z]/g, '');

    // Si la cadena està buida després de netejar-la, retornar null
    if (cleanedStr.length === 0) {
        return null;
    }

    // Generar un índex aleatori
    let randomIndex = Math.floor(Math.random() * cleanedStr.length);

    // Retornar la lletra en la posició aleatòria
    return cleanedStr[randomIndex];
}

// Exemple d'ús
let exampleString = "Hola, món!";
let randomLetter = getRandomLetter(exampleString);
console.log(randomLetter);



// TODO: crea una funció que agafi un text i li'n separi les paraules (sense signes de puntuació) i les torni en un nou string separades per espais (sense usar arrays)

// TODO: crea una funció que agafi un string i que torni una paraula aleatòria continguda en ella (sense usar arrays)

// TODO: paradoxa de l'aniversari. Genera N dates d'aniversari aleatòries (1-365) en un array i comprova si hi ha alguna repetida. Fes això per N = 5, 10, 15, 20, 25, 30, 35, 40, 45, 50 i mostra a la consola per quins hi ha hagut coincidències d'aniversari

// TODO: dues funcions que gestionin les dades rebudes en un array d'strings o en una string amb totes juntes
// data0 = "NOM Omar"
// data1 = "COG Olmedo"   -> [data0, data1, data2, ...]
// data2 = "AGE 33"

// data = "NOM Omar COG Olmedo AGE 33"

// La funció ha de retornar un objecte així:

// {
//     nom: "Omar",
//     cognom: "Olmedo",
//     edat: 33
// }

// TODO: gestionar un CSV. El programa ha d'agafar un string en format CSV i ficar tota la informació dins un array d'objectes amb els noms de les columnes com a propietats
// PISTA: necessitareu ajuda. Demaneu-la
// PISTA 2: encara que no hi hagi \n per marcar els salts de línia, els detexta igual perquè uso cometes ``

var csv = `Year,Make,Model,Description,Price
1997,Ford,E350,ac abs moon,3000.00
1999,Chevy,Venture "Extended Edition",,4900.00
1999,Chevy,Venture "Extended Edition XL",,5000.00
1996,Jeep,Grand Cherokee,MUST SELL! air moon-roof loaded,4799.00`

// var cotxes = [ { Year = 1997,
//                  Make = "Ford",
//                  Model = "E350",
//                  Description = "ac, abs, moon",
//                  Price = 3000.00
//                 },    
//                { Year = 1997,
//                  Make = "Ford",
//                  Model = "E350",
//                  Description = "",
//                  Price = 3000.00
//                 } ];