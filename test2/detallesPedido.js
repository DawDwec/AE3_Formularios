var row = 1;

var entry = document.getElementById("entry");
entry.addEventListener("click", displayDetails);

function displayDetails() {
    var total = document.getElementById("total").value;

    var display = document.getElementById("display");

    var newRow = mostrar.insertRow(row);

    var cell1 = newRow.insertCell(0);

    cell1.innerHTML = total;

    row++;

}