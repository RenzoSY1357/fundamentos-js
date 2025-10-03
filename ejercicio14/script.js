//Ejercicio14
document.getElementById('miBoton').addEventListener('click', function(){
    
    function palindromo(palabra){
        const inicio = palabra.toLowerCase();
        // split: divide la palabra en caracteres, reverse: los inverte, join: los junta de nuevo
        const inversion = inicio.split('').reverse().join('');
        return inicio === inversion;
    }

    const palabra = prompt('Ingresa la palabra o frase:');
    if (!palabra) return;

    if(palindromo(palabra)){
        console.log("se lee igual")
    } else {
        console.log("no se lee igual")
    }

})
