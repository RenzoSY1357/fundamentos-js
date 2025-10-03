
const scaner = require('readline');

const lector = scaner.createInterface({
    input: process.stdin,
    output: process.stdout
})

function toFarenheit(celsius){

    let Farenheit = (celsius*(9/5)+32)

    return Farenheit;
}

lector.question('Introduce un numero en celsius: ', function(cels){

    let far = toFarenheit(cels);

    console.log(`De ${cels}ºC a ${far}ºF`);

    lector.close()
})