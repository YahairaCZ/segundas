var pedidoEditando = null;

function agregarPedido() {
    var id = document.getElementById("id").value;
    var producto = document.getElementById("producto").value;
    var cliente = document.getElementById("cliente").value;
    var correo = document.getElementById("correo").value;
    var fecha_entrega = document.getElementById("fecha_entrega").value;

    if (id && producto && cliente && correo && fecha_entrega) {
        var tabla = document.getElementById("tablaPedidos");
        var newRow = tabla.insertRow(-1);
        var newCell1 = newRow.insertCell(0);
        var newCell2 = newRow.insertCell(1);
        var newCell3 = newRow.insertCell(2);
        var newCell4 = newRow.insertCell(3);
        var newCell5 = newRow.insertCell(4);
        var newCell6 = newRow.insertCell(5);

        newCell1.innerHTML = id;
        newCell2.innerHTML = producto;
        newCell3.innerHTML = cliente;
        newCell4.innerHTML = correo;
        newCell5.innerHTML = fecha_entrega;
        newCell6.innerHTML = '<button onclick="editarPedido(this)">Editar</button> <button onclick="eliminarPedido(this)">Eliminar</button>';

        document.getElementById("id").value = "";
        document.getElementById("producto").value = "";
        document.getElementById("cliente").value = "";
        document.getElementById("correo").value = "";
        document.getElementById("fecha_entrega").value = "";
    } else {
        alert('Por favor complete todos los campos.');
    }
}

function editarPedido(button) {
    var row = button.parentNode.parentNode;
    pedidoEditando = row;
    var id = row.cells[0].innerHTML;
    var producto = row.cells[1].innerHTML;
    var cliente = row.cells[2].innerHTML;
    var correo = row.cells[3].innerHTML;
    var fecha_entrega = row.cells[4].innerHTML;

    document.getElementById("id").value = id;
    document.getElementById("producto").value = producto;
    document.getElementById("cliente").value = cliente;
    document.getElementById("correo").value = correo;
    document.getElementById("fecha_entrega").value = fecha_entrega;

    document.getElementById("agregar").style.display = "none";
    document.getElementById("editar").style.display = "inline";
}

function eliminarPedido(button) {
    var row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}

function guardarCambios() {
    var nuevoID = document.getElementById("id").value;
    var nuevoProducto = document.getElementById("producto").value;
    var nuevoCliente = document.getElementById("cliente").value;
    var nuevoCorreo = document.getElementById("correo").value;
    var nuevaFechaEntrega = document.getElementById("fecha_entrega").value;

    if (nuevoID && nuevoProducto && nuevoCliente && nuevoCorreo && nuevaFechaEntrega) {
        pedidoEditando.cells[0].innerHTML = nuevoID;
        pedidoEditando.cells[1].innerHTML = nuevoProducto;
        pedidoEditando.cells[2].innerHTML = nuevoCliente;
        pedidoEditando.cells[3].innerHTML = nuevoCorreo;
        pedidoEditando.cells[4].innerHTML = nuevaFechaEntrega;

        document.getElementById("id").value = "";
        document.getElementById("producto").value = "";
        document.getElementById("cliente").value = "";
        document.getElementById("correo").value = "";
        document.getElementById("fecha_entrega").value = "";

        document.getElementById("agregar").style.display = "inline";
        document.getElementById("editar").style.display = "none";

        pedidoEditando = null;
    } else {
        alert('Por favor complete todos los campos.');
    }
}
