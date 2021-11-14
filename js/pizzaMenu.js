$(document).ready(function(){
    $(".tablehead").click(function(){
        $(this).next("div").slideToggle("slow");
    });
});

function invoice() {

//Configurando el tamaño y el tamaño de la pizza en función de la selección del usuario.

var tamano = document.querySelector('input[name="tamano"]:checked').value; console.log("tamano="+tamano);
var tamanoPrecio = 0;
if (tamano === "Pequena") {
        tamanoPrecio = 5;
};
if (tamano === "Mediana") {
        tamanoPrecio = 10;
};
if (tamano === "Grande") {
        tamanoPrecio = 15;
}; console.log("tamanoPrecio="+tamanoPrecio);

//Configurando la seleccion del ingrediente basado en los múltiples checkbox seleccionados. También creando el ingredienteDisplay para convertir el array en String.

var ingredientePrecio = 0;
var ingrediente = document.getElementsByName("ingrediente");
var ingredienteSelect = [];
var ingredienteDisplay = "";
for (var i = 0; i < ingrediente.length; i++) {
    if (ingrediente[i].checked){
        ingredienteSelect.push(ingrediente[i].value);
    };
}; console.log("ingredienteSelect="+ingredienteSelect);
if (ingredienteSelect.length === 1) {
    ingredienteDisplay = ingredienteSelect[0];
} else if (ingredienteSelect.length > 1) {
    for (i=0; i < ingredienteSelect.length; i++){
        ingredienteDisplay += ingredienteSelect[i];
        if (i < (ingrediente.length-1)) {
            ingredienteDisplay += ", ";
        };
    };
};
ingredientePrecio = ingredienteSelect.length; console.log("ingredientePrecio="+ingredientePrecio);
if (ingredienteSelect.length === 0) {
    ingredienteDisplay = "Sin ingredientes";
}

//Calculando el precio total

var precioTotal = (ingredientePrecio + tamanoPrecio); console.log("precioTotal="+precioTotal);

//Se incluyen los valores en una tabla, una vez se han rellenado todos los campos necesarios y se pulsa el botón "Realizar pedido".

$("#tamano").html("Pizza "+tamano);
$("#tamanoPrecio").html(tamanoPrecio+".00 €");
$("#ingrediente").html(ingredienteDisplay);
$("#ingredientePrecio").html("+"+ingredientePrecio+".00 €");~
$("#precioTotal").html(precioTotal+".00 €");

}