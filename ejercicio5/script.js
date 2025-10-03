//Ejercicio 5
document.getElementById('miBoton').addEventListener('click', function(){

    let num = prompt("Ingresa un número");

    num = Number(num);

    if (num % 2 === 0){
    console.log("El número que ha introducido es par");
    }
    else{
    console.log("El número que ha introducido es impar");
    }
})