const scaner = require('readline')

const lector = scaner.createInterface({
    input: process.stdin,
    output: process.stdout
})


lector.question('Ingresa el texto: ', function(texto){
    const mayuscula = texto.toUpperCase()
    const minuscula = texto.toLowerCase()

    console.log("Mayuscula:", mayuscula)
    console.log("Minuscula:", minuscula)
    lector.close()
})

