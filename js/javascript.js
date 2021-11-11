function validacion() {

  //Comprobamos si se rellenan los campos con los datos del cliente
  if (nombre.value.trim() == "") {
    alert ('¡¡¡ERROR!!! Debe de escribir el nombre del cliente.')
    return false;
  }

  if (direccion.value.trim() == "") {
    alert ('¡¡¡ERROR!!! Debe de escribir la direccion del cliente.')
    return false;
  }

  if (telefono.value.trim() == "") {
    alert ('¡¡¡ERROR!!! Debe de escribir el telefono del cliente.')
    return false;
  }

  if (email.value.trim() == "") {
    alert ('¡¡¡ERROR!!! Debe de escribir el correo electronico del cliente.')
    return false;
  }

  //Expresiones para validar los campos del formulario
  reNombre = /^[A-Z][A-z]+$/
  if(!nombre.value.match(reNombre)) {
    alert ('¡¡¡ERROR!!! Formato del nombre incorrecto.')
    return false;
  }

  reTelefono = /^\d{9}$/
  if (!telefono.value.match(reTelefono)) {
    alert ('¡¡¡ERROR!!! Formato del telefono incorrecto.')
    return false;
  }

  reEmail = /^(.+\@.+\..+)$/
  if (!email.value.match(reEmail)) {
    alert ('¡¡¡ERROR!!! Formato del correo electronico incorrecto.')
    return false;
  }

  //Comprobamos si se selecciona el tamaño de la pizza
  pregunta = document.getElementsByName("tamano");
  var seleccionado = false;
  for (var i=0; i < pregunta.length; i++) {
    if (pregunta[i].checked) {
      seleccionado = true;
      break;
    }
  }

  if(!seleccionado) {
    alert ('¡¡¡ERROR!!! Debe de seleccionar el tamaño de la pizza.')
  }

  //Comprobamos si se selecciona al menos un ingrediente
  var form_data = new FormData(document.querySelector("form"));
    
  if(!form_data.has("langs[]")) {
      document.getElementById("chk_option_error").style.visibility = "visible";
      return false;
    } else {
      document.getElementById("chk_option_error").style.visibility = "hidden";
      return true;
    }
}

//Definimos la funcion sumar
function sumar(a, b, c, d, e, f, g) {
  var resultado = a + b + c + d + e + f + g;
  return resultado;
}

//Asignamos los precios a nuestras variables
pequena.value = 5;
mediana.value = 10;
grande.value = 15;
ingr1.value = 1;
ingr2.value = 1;
ingr3.value = 1;
ingr4.value = 1;

//Aplicamos la funciona "sumar" a nuestro formulario
botonProcesar.onclick = function() {
  let valor1 = parseInt(pequena.value)
  let valor2 = parseInt(mediana.value)
  let valor3 = parseInt(grande.value)
  let valor4 = parseInt(ingr1.value)
  let valor5 = parseInt(ingr2.value)
  let valor6 = parseInt(ingr3.value)
  let valor7 = parseInt(ingr4.value)

  let precioTotal = sumar(valor1, valor2, valor3, valor4, valor5, valor6, valor7)

  resultado.value=precioTotal

}

formulario.onsubmit = validacion;