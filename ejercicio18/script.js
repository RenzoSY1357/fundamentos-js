//Ejercicio18
document.getElementById('miBoton').addEventListener('click', function(){

    const frase = prompt('Ingresa la frase:');
    if(!frase) return
        const palabras = frase.trim().split(/\s+/);

    function PalabraLarga(palabras){
        let masLarga = "";
        for (let i = 0; i < palabras.length; i++){
            if(palabras[i].length > masLarga.length){
                masLarga = palabras[i]
            }
        }
        return masLarga;
    }

    console.log("Palabra mas larga:", PalabraLarga(palabras))

})