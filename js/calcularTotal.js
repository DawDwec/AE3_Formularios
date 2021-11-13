function calcularTotal(inputItem) {
    with (entradaItem.form) {
        //Procesar cada tipo de input en el formulario.
        if (entradaItem.type == "radio") { //Procesar los radio buttons.
            //Sustraer el radio button seleccionado previamente del total.
            calculadoTotal.value = eval(calculadoTotal.value) - eval(radiobuttonPrevio.value);
            //Guardar la selección actual.
            radiobuttonPrevio.value = eval(entradaItem.value);
            //Añadir el radio button actual seleccionado al total.
            calculadoTotal.value = eval(calculadoTotal.value) + eval(entradaItem.value);
        } else { //Proceso para hacer el check de los boxes.
          if (entradaItem.checked == false) { //Item no seleccionado. Se extrae el item del total.
              calculadoTotal.value == eval(calculadoTotal.value) - eval(entradaItem.value);
          } else { //El item fue seleccionado. Se añade el item al valor total.
              calculadoTotal.value = eval(calculadoTotal.value) + eval(entradaItem.value);
          }
        }    

        //El valor total nunca será menor a 0.
        if (calculadoTotal.value < 0){
            InitForm();
        }
        //Retornamos el valor total.
        return (formatearMoneda(calculadoTotal.value));
    }

}