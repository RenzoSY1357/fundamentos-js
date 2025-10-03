//Ejercicio 8
document.getElementById('miBoton').addEventListener('click', function(){

    let numeroRandom = Math.floor(Math.random() * 300) + 1;

    function generaNumero(numeroRandom) {

    if(numeroRandom >= 2 && numeroRandom <= 99) {    
        console.log("El número random generado es: " + numeroRandom);
        }
        else{
            console.log("El número generado no está entre 1 y 100");
        }
    }

    generaNumero(numeroRandom);
})