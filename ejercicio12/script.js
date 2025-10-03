//Ejercicio 12
document.getElementById('miBoton').addEventListener('click', function(){

    function filtrarPares(a){
        return a.filter(num => num % 2 === 0);
    }

    const numeros = [1, 2, 3, 4, 5];
    const pares = filtrarPares(numeros);
    console.log(pares);
})