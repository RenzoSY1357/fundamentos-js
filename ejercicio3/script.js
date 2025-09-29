//Ejercicio 3
let telefono;

const persona = {
    
    dni: Symbol('id'),
    nombre: "Fabricio",
    edad: 18,
    mayorDeEdad: true,
    direccion: null,
    telefono,
    clavedni: 342378482348723847327429837492n,
    amigos: ["Nuria", "Renzo", "Loredana", "Marggio"],
    pais: {
        nacimiento: "Peru",
        residencia: "Espana"
    }

};

console.log("Contenido del objeto persona con console.log");
console.log(persona);

console.log("Contenido del objeto persona con console.table");
console.table(persona);