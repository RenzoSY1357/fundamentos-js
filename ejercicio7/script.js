//Ejercicio 7

let palabra = prompt("Ingrese una palabra");

function contarVocales(palabra) {

let contador = 0;
let vocales = "aeiouAEIOU";

    for (let i = 0; i < palabra.length; i++) {
        if (vocales.includes(palabra[i])) {
            contador++;
        }
    }

    console.log("La palabra contiene " + contador + " vocales");
}

contarVocales(palabra);