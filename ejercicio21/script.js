//Ejercicio21
document.getElementById('miBoton').addEventListener('click', function(){


    const numeros = []

    let i = 1;
    let valor = 0;

    function Mayor(){

        if(i <= 5){
            
            let num = prompt(`(${i}) Introduce un numero: `)
            numeros.push(num)
            i++
            Mayor()

        } else {
            
            let valor = prompt(`(${i}) Introduce un valor: `)
                
            const mayores = numeros.filter(function(numero){
                return numero > valor;
            })
            
            console.log(`Numeros mayores que ${valor}:`, mayores)

        }
    }

    Mayor()
})
