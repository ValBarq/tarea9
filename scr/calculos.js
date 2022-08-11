var descuento = 0;
var cotizacion;
var arreglo = new Array();
function calcularDias(fechaRetiro, fechaDevolucion) {

    var fecha1 = fechaRetiro.getTime(),
        fecha2 = fechaDevolucion.getTime(),
        dif = fecha2 - fecha1,
        dias = Math.floor(dif / (1000 * 60 * 60 * 24));
    return dias;
}

function tarifaDiaria(TDV, TDS, dias) {
    let TD = Number.parseFloat(TDV) + Number.parseFloat(TDS);
    if (dias >= 30 && dias <= 120) {
        TD -= TD - 0.15;
    } else {
        TD -= TD - 0.25;
    }

    return TD;
}

function totalPagar(TD, CD, Desc) {
    return TD * CD - ((TD * CD) * Desc);
}

function porcentajeDescuento(codigoPais) {
    $.ajax({
        type: 'GET',
        url: `https://restcountries.com/v3.1/alpha?codes=${codigoPais}`,
        dataType: 'json'
    }).done((datos) => {
        if (datos[0].region === "Americas" && datos[0].region === "Europe") {
            descuento = 0.1;
        } else if (datos[0].region === "Africa") {
            descuento = 0.05;
        }
    }).fail((jqXHR) => {
        alert('Error: ' + jqXHR.responseText);
    });
}

$("#btnCalcular").click(() => {
    let fechaRetiro = new Date($("#fechaRetiro").val()), fechaDevolucion = new Date($("#fechadevolucion").val()),
        nacionalidad = document.getElementById("nacionalidad").options[document.getElementById("nacionalidad").selectedIndex].value,
        tipoVehiculo = document.getElementById("tipoVehiculo").options[document.getElementById("tipoVehiculo").selectedIndex].value,
        seguro = document.getElementById("seguro").options[document.getElementById("seguro").selectedIndex].value, dias, tarifa, total;
    dias = calcularDias(fechaRetiro, fechaDevolucion);
    porcentajeDescuento(nacionalidad);
    if (dias < 3 || dias > 365) {
        alert("Error: La cantidad de dias no es correcta, esta debe estar entre 3 y 365");
        return;
    }
    tarifa = tarifaDiaria(tipoVehiculo, seguro, dias);
    total = totalPagar(tarifa, dias, descuento);

    $("#dias").val(dias);
    $("#td").val(tarifa);
    $("#totalPagar").val(total);

    cotizacion = {
        FechaRetiro: fechaRetiro,
        FechaDevolucion: fechaDevolucion,
        Nacionalidad: document.getElementById("nacionalidad").options[document.getElementById("nacionalidad").selectedIndex].innerHtml,
        TipoVehiculo: document.getElementById("tipoVehiculo").options[document.getElementById("tipoVehiculo").selectedIndex].innerHtml,
        Seguro: document.getElementById("seguro").options[document.getElementById("seguro").selectedIndex].innerHtml,
        Dias: dias,
        TarifaDiaria: tarifa,
        TotalPagar: total
    }
});

function regMemoriaLocal(dato) {
    if (typeof (Storage) !== "undefined") {
        var memRegistro = JSON.parse(localStorage.getItem("memRegistro"));

        if (memRegistro == null) {
            arreglo[0] = dato;
        } else {
            arreglo = memRegistro;
            arreglo[arreglo.length] = dato;
        }
        localStorage.setItem("memRegistro", JSON.stringify(arreglo));
    }
}


$("#btnGuardar").click(() => {
    regMemoriaLocal(cotizacion);
});

$(window).load(() => {
    
});