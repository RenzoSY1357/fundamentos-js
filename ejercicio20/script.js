//Ejercicio20
document.getElementById('miBoton').addEventListener('click', function(){

    let texto = prompt('Ingresa el texto:')
    const minuscula = texto.toLowerCase()
    const mayuscula = texto.toUpperCase()

    console.log("Mayuscula:", mayuscula)
    console.log("Minuscula:", minuscula)
})
