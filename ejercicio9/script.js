//Ejercicio 9
document.getElementById('miBoton').addEventListener('click', function(){

    let cadena = "Hola mundo";
    console.log("Cadena normal: " + cadena);

    function cadenaInvertida(cadena) {

        let cadenaReves = cadena.split("").reverse().join("");
        console.log("Cadena Invertida: " + cadenaReves);
        return cadenaReves;

    }
    cadenaInvertida(cadena);
})