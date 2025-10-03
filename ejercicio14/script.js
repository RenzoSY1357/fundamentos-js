function palindromo(palabra){
    const inicio = palabra.toLowerCase();
    // split: divide la palabra en caracteres, reverse: los inverte, join: los junta de nuevo
    const inversion = inicio.split('').reverse().join('');
    return inicio === inversion;
}

const scaner = require('readline');

const lector = scaner.createInterface({
    input: process.stdin,
    output: process.stdout
})


lector.question('Ingresa la frase: ', function(palabra) {
    const resultado = palindromo(palabra);
 
    if(resultado){
        console.log("se lee igual")
    } else {
        console.log("no se lee igual")
    }

    lector.close();
});
