const scaner = require('readline')

const lector = scaner.createInterface({
    input: process.stdin,
    output: process.stdout
})

const numeros = []

let i = 1;
let valor = 0;

function Mayor(){

    if(i <= 5){
        
        lector.question(`(${i}) Introduce un numero: `, function(num){
            numeros.push(num)
            i++
            Mayor()
        })

    } else if( i === 6 ) {
        
        lector.question(`(${i}) Introduce un valor: `, function(valor){
            
            const mayores = numeros.filter(function(numero){
                return numero > valor;
            })
        
            console.log(`Numeros mayores que ${valor}:`, mayores)
            lector.close()

        })

    }
}

Mayor()
