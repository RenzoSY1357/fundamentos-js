const scaner = require('readline')

const lector = scaner.createInterface({
    input: process.stdin,
    output: process.stdout
})

const numeros = []

let i = 1;

function Promedio() {

    if(i <= 5){

        lector.question(`(${i}) Introduce un numero:`, function(num){
            numeros.push(Number(num))
            i++
            Promedio()
        })

    } else {

        let promedio = 0
        let suma = 0

        for(let i = 0; i< numeros.length; i++){
            suma += numeros[i]
        }

        promedio = (suma/numeros.length)
        console.log("Promedio de los numeros:", promedio)
        lector.close()
    }
}

Promedio()