
const scaner = require('readline')

const lector = scaner.createInterface({
    input: process.stdin,
    output: process.stdout
})

const numeros = []

let i = 1;

function Ordenado() {

    if(i <= 5){
        lector.question(`(${i}) Introduce un numero: `, function(num){
            numeros.push(num)
            i++
            Ordenado()
        })
    }
    else {
        numeros.sort(function(a, b) {
            return a - b
        })

        console.log("Array ordenado de menor a mayor: ", numeros)
        lector.close()
    }
}

Ordenado()

