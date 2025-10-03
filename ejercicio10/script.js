//Ejercicio 10
document.getElementById('miBoton').addEventListener('click', function(){

    let array = [1, 2, 3, 4, 5, 10, 20, 3, 4, 5];
    console.log("Array: " + array);

    function numeroMayor(array) {

        let mayor = Math.max(...array);
        console.log("El número mayor del array es: " + mayor);
        return mayor;

    }

    numeroMayor(array);
})
