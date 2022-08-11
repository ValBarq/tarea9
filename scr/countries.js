let paises = {};
$(document).ready(() => {
    $.ajax({
        type: 'GET',
        url: `https://restcountries.com/v3.1/all`,
        dataType: 'json'
    }).done((datos) => {
        paises = datos;
        for (let i = 0; i < datos.length; i++) {
            $("#nacionalidad").append(`<option value=${datos[i].cca3}>${datos[i].name.common}</option>`);
        }
    }).fail((jqXHR) => {
        alert('Error: ' + jqXHR.responseText);
    })

});

function regMemoriaLocal(dato) {
    if (typeof (Storage) !== "undefined") {
        var memRegistro = JSON.parse(localStorage.getItem("memRegistro"));
        var arreglo = new Array();
        if (memRegistro == null) {
            arreglo[0] = dato;
        } else {
            arreglo = memRegistro;
            arreglo[arreglo.length] = dato;
        }
        localStorage.setItem("memRegistro", JSON.stringify(arreglo));
    }
}

function buscaPais(codigo) {

    for (let i = 0; i < paises.length; i++) {
        if (paises[i].cca3 === codigo) {
            return paises[i].name.common;
        }
    }
}

$("#nacionalidad").change(() => {
    regMemoriaLocal($("#nacionalidad").val());
});

function MensajeTipoSeguro() {
    let id = document.getElementById("seguro").options[document.getElementById("seguro").selectedIndex].id,
        label = document.getElementById("lblSeguro"),
        mensaje = new String();
    switch (id) {
        case "PBO":
            mensaje = "Protección Básica Obligatoria (PBO) Cubre daños al vehículo rentado y daños a vehículos terceros involucrados en un accidente de tránsito. Costo de alquiler diario: $ 5.45 por día."
            break;
        case "PED":
            mensaje = "Protección Extendida de Daños(PED) Cubre la Protección Básica Obligatoria (PBO) más daños a propiedades de terceros, incendio e inundaciones. Costo de alquiler diario: $ 9.50 por día."
            break;
        case "PGM":
            mensaje = "Protección Gasto Médicos(PGM) Cubre la Protección Extendida de Daños(PED) más gastos médicos para los ocupantes del vehículo. Costo de alquiler diario: $ 11.25 por día.";
            break;
    }
    alert(label.innerHTML + " " + mensaje);
}