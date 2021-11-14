function Initform() {
    document.selectionForm.total.value='€0';
    document.selectionForm.calculadoTotal.value=0;
    document.selectionForm.radioButtonseleccionado.value=0;

    for (i=0; i<document.selectionForm.elements.length; i++) {
        if (document.selectionForm.elements[i].type == 'checkbox' | document.selectionForm.elements[i].type == 'radio'){
            document.selectionForm.elements[i].checked = false;
        }
    }
}