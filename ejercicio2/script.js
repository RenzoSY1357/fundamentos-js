//Ejercicio 2
document.getElementById('miBoton').addEventListener('click', function(){

    const array = [];

    for(let i=0; i<100; i++){

        let random = Math.random();
        let round = Math.round(random*100);

        array.push(round);

    }

    console.log("Números randoms del array")
    console.table(array);
    console.log("Números del 1 al 10 del array");

    //Filtrado de datos
    let array1Al10 = array.filter(num => num >= 1 && num <= 10);
    console.table(array1Al10); 

    console.log("Números del 10 al 50 del array")
    let array10Al50 = array.filter(num => num >= 10 && num <= 50);
    console.table(array10Al50);

})