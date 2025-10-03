const scaner = require('readline');

const lector = scaner.createInterface({
    input: process.stdin,
    output: process.stdout
})

function esPrimo(entero){
    if (entero < 2) return false; // 0 y 1, no son primos

    // Un primo debe ser divisible por si mismo y la unidad, por lo tanto
    // si num tiene un factor mas grande que su raiz cuadrada, su otro factor debe ser menor que esta
    for (let i = 2; i <= Math.sqrt(entero); i++){ //Agiliza el conteo de numeros primos, el factor maximo de num, debe ser si mismo
        if (entero % i === 0) return false;
    }
    return true;
}

lector.question('Introduce un numero: ', function(num){
    let entero = parseInt(num);

    if(esPrimo(entero)){
        console.log(`El numero ${entero} es primo`)
    } else {
        console.log(`El numero ${entero} NO es primo`)
    }

    lector.close();
})