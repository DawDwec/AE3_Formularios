function calcularTotal(inputItem) {

    with (inputItem.form) {

        if (inputItem.type == "radio") {

            calculadoTotal.value = eval(calculadoTotal.value) - eval (radioButtonSeleccionado.value);

            radioButtonSeleccionado.value = eval (inputItem.value);

            calculadoTotal.value = eval (calculadoTotal.value) + eval(inputItem.value);

        } else {

            if (inputItem.checked == false) {
                calculadoTotal.value = eval(calculadoTotal.value) - eval(inputItem.value);            
            } else {
                calculadoTotal.value = eval(calculadoTotal.value) + eval(inputItem.value);
            }
        }

        if (calculadoTotal.value < 0) {
            InitForm();
        }

        return(formatoMoneda(calculadoTotal.value));
    }
}

