//Ejercicio16
document.getElementById('miBoton').addEventListener('click', function(){

    function toFarenheit(celsius){

        let Farenheit = (celsius*(9/5)+32)

        return Farenheit;
    }

    const cels = prompt('Introduce un numero:')

    let far = toFarenheit(cels);

    console.log(`De ${cels}ºC a ${far}ºF`);

})