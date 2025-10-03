const scaner = require('readline'); // importa al lector, que lee entradas de la terminal

const lector = scaner.createInterface({
    input: process.stdin, // la entrada va desde la terminal
    output: process.stdout // la salida va hacia la terminal
})

lector.question('Ingresa la frase: ', function(frase){
    const palabras = frase.trim().split(/\s+/); //quitamos los espacios de inicio y final, y dividimos la frase en un array de palabras
    console.log(`La frase tiene ${palabras.length} palabras.`);
    lector.close();
})

