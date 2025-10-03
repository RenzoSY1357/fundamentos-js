//Ejercicio17
document.getElementById('miBoton').addEventListener('click', function(){


    const numeros = []

    let i = 1;

    function Ordenado() {

        for (let i=1; i <= 5; i++){
            let num = prompt(`(${i}) Introduce un numero:`)
            numeros.push(Number(num))
        }
        
        numeros.sort(function(a, b) {
            return a - b
        })

        console.log("Array ordenado de menor a mayor: ", numeros)
    }

    Ordenado()
})
