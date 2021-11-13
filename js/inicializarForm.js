//Función para inicializar todos los elementos del formularios a los valores por defecto.

function inicializarForm(){
    //Se resetean los valores en el formulario.
    document.selectionForm.calculadoTotal.value=0;
    document.selectionForm.previouslySelectedRadioButton.value=0;

//Todos los radio buttons y checkbox deseleccionados por defecto.

    for (i=0; i < document.selectionForm.elements.length; i++){
        if (document.selectionForm.elements[i].type == 'checkbox' | document.selectionForm.elements[i].type == 'radio') {
            document.selectionForm.elements[i].checked = false;
        }      
    }
}