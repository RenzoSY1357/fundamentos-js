//Ejercicio 6
document.getElementById('miBoton').addEventListener('click', function(){

    function verificarParImpar() {

        const input = document.getElementById("numeroInput").value;

        const numero = Number(input);

        const resultado = document.getElementById("resultado");

        if (numero % 2 === 0){
        console.log("El número que ha introducido es par");
        }
        else{
        console.log("El número que ha introducido es impar");
        }

    }
})