const scaner = require('readline')

const lector = scaner.createInterface({
    input: process.stdin,
    output: process.stdout
})

function PalabraLarga(palabras){
    let masLarga = "";
    for (let i = 0; i < palabras.length; i++){
        if(palabras[i].length > masLarga.length){
            masLarga = palabras[i]
        }
    }
    return masLarga;
}

lector.question('Ingresa la frase: ', function(frase){
    const palabras = frase.trim().split(/\s+/);
    console.log("Palabra mas larga:", PalabraLarga(palabras))
    lector.close()
})