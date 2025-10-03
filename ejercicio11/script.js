//Ejercicio 11
document.getElementById('miBoton').addEventListener('click', function(){

    function cienNumeros() {
        let numeros = [];
        for (let i = 0; i < 100; i++) {
            let num = Math.floor(Math.random() * 20) + 1;
            numeros.push(num);
        }

        console.log("Números generados:", numeros.join(", "));

        let distintos = new Set(numeros);
        console.log("Cantidad de números distintos que han aparecido al menos una vez:", distintos.size);
    }

    cienNumeros();
})
