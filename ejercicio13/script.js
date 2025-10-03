//Ejercicio13
document.getElementById('miBoton').addEventListener('click', function(){

    const frase = prompt('Ingresa la frase:')
    if (!frase) return

    const palabras = frase.trim().split(/\s+/); //quitamos los espacios de inicio y final, y dividimos la frase en un array de palabras
    console.log(`La frase tiene ${palabras.length} palabras.`);
})
