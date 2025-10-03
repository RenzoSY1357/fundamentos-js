//Ejercicio19
document.getElementById('miBoton').addEventListener('click', function(){

    const numeros = []

    let i = 1;

    function Promedio() {

        if(i <= 5){

            let num = prompt(`(${i}) Introduce un numero:`)
            numeros.push(Number(num))
            i++
            Promedio()

        } else {

            let promedio = 0
            let suma = 0

            for(let i = 0; i< numeros.length; i++){
                suma += numeros[i]
            }

            promedio = (suma/numeros.length)
            console.log("Promedio de los numeros:", promedio)
        }
    }

    Promedio()
})