//Ejercicio 1

document.getElementById('miBoton').addEventListener('click', function(){

  let nombre = "Pepito";
  console.log("El tipo de variable del nombre es " + typeof nombre);
  console.error("Error! El tipo de variable del nombre es " + typeof nombre);
  console.info("Ojo! El tipo de variable del nombre es " + typeof nombre);
  console.debug("El tipo de variable del nombre es " + typeof nombre);

  console.log("");

  let edad = 40;
  console.log("El tipo de variable de la edad es " + typeof edad);
  console.error("Error! El tipo de variable de la edad es " + typeof edad);
  console.info("Ojo! El tipo de variable de la edad es " + typeof edad);
  console.debug("El tipo de variable de la edad es " + typeof edad);

  console.log("");

  let tieneTrabajo = true;
  console.log("El tipo de variable de tieneTrabajo es " + typeof tieneTrabajo);
  console.error(
    "Error! El tipo de variable de tieneTrabajo es " + typeof tieneTrabajo
  );
  console.info(
    "Ojo! El tipo de variable de tieneTrabajo es " + typeof tieneTrabajo
  );
  console.debug("El tipo de variable de tieneTrabajo es " + typeof tieneTrabajo);

  console.log("");

  let puestoDeTrabajo;
  console.log(
    "El tipo de variable de puestoDeTrabajo es " + typeof puestoDeTrabajo
  );
  console.error(
    "Error! El tipo de variable de puestoDeTrabajo es " + typeof puestoDeTrabajo
  );
  console.info(
    "Ojo! El tipo de variable de puestoDeTrabajo es " + typeof puestoDeTrabajo
  );
  console.debug(
    "El tipo de variable de puestoDeTrabajo es " + typeof puestoDeTrabajo
  );
})