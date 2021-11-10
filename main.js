function calcular() {
    const distancia = document.getElementById("distancia");
    const capacidad = document.getElementById("capacidad");
    const consumo = document.getElementById("consumo");
    if (validar([distancia, capacidad, consumo])) {
        document.getElementById("resultado").innerHTML = `Se requieren ${Math.ceil(distancia.value / (capacidad.value * consumo.value))} tanques para completar el viaje`;
    }
}

function cancelar() {
    document.getElementById("distancia").value = '';
    document.getElementById("capacidad").value = '';
    document.getElementById("consumo").value = '';
    document.getElementById("resultado").innerHTML = '';
}

function validar(campos) {
    let valid = true;
    campos.forEach((campo) => {
        if (isNaN(campo.value) || campo.value < 1) {
            document.getElementById(campo.id + 'alerta').classList.remove('d-none');
            valid = false;
        } else {
            document.getElementById(campo.id + 'alerta').classList.add('d-none');
        }
    });
    return valid;
}