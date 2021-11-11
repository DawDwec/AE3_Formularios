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
    
  if(!form_data.has("langs[]"))
    {
      document.getElementById("chk_option_error").style.visibility = "visible";
      return false;
    }
  else
    {
      document.getElementById("chk_option_error").style.visibility = "hidden";
      return true;
    }
}

formulario.onsubmit = validacion;