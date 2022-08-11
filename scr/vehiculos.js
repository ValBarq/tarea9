var indiceTipoV=0;

function mostrarTodo(){
    indiceTipoV = tipoVehiculo.selectedIndex;

    switch(indiceTipoV){
        case 0:
            imgVista.src = "images/Compacto1.png";
            img1.src = "images/Compacto1.png";
            img2.src = "images/Compacto2.png";
            img3.src = "images/Compacto3.png";
            document.getElementById("infTCar").innerText = "KIA PICANTO \n Año 2016";
            break;
        case 1:
            imgVista.src = "images/Mediano1.png";
            img1.src = "images/Mediano1.png";
            img2.src = "images/Mediano2.png";
            img3.src = "images/Mediano3.png";
            document.getElementById("infTCar").innerText = "HONDA CITY CAR \n Año 2017";
            break;
        case 2:
            imgVista.src = "images/TodoTerreno1.png";
            img1.src = "images/TodoTerreno1.png";
            img2.src = "images/TodoTerreno2.png";
            img3.src = "images/TodoTerreno3.png";
            document.getElementById("infTCar").innerText = "TOYOTA FJ CRUISER \n Año 2016";
            break;
        case 3:
            imgVista.src = "images/Familiar1.png";
            img1.src = "images/Familiar1.png";
            img2.src = "images/Familiar2.png";
            img3.src = "images/Familiar3.png";
            document.getElementById("infTCar").innerText = "TOYOTA SIENNA \n Año 2018";
            break;
    }
}

function mostrarImagen(indice){
    switch(indiceTipoV){
        case 0:
            mostrarCompacto(indice);
            break;
        case 1:
            mostrarMediano(indice);
            break;
        case 2:
            mostrarTerreno(indice);
            break;
        case 3:
            mostrarFamiliar(indice);
            break;
    }
}

function mostrarCompacto(indice){
    if(indice==1){
        imgVista.src = "images/Compacto1.png";
        document.getElementById("infTCar").innerText = "KIA PICANTO \n Año 2016";
    }
    else{
        if (indice==2) {
            imgVista.src = "images/Compacto2.png";
            document.getElementById("infTCar").innerText = "FORD FIESTA ST \n Año 2015";
        } else {
            imgVista.src = "images/Compacto3.png";
            document.getElementById("infTCar").innerText = "PEUGEOT 308 \n Año 2018";
        }
    }
}

function mostrarMediano(indice){
    if(indice==1){
        imgVista.src = "images/Mediano1.png";
        document.getElementById("infTCar").innerText = "HONDA CITY CAR \n Año 2017";
    }
    else{
        if (indice==2) {
            imgVista.src = "images/Mediano2.png";
            document.getElementById("infTCar").innerText = "MERCEDES SLS \n Año 2015";
        } else {
            imgVista.src = "images/Mediano3.png";
            document.getElementById("infTCar").innerText = "FORD FIESTA ST \n Año 2016";
        }
    }
}

function mostrarTerreno(indice){
    if(indice==1){
        imgVista.src = "images/TodoTerreno1.png";
        document.getElementById("infTCar").innerText = "TOYOTA FJ CRUISER \n Año 2016";
    }
    else{
        if (indice==2) {
            imgVista.src = "images/TodoTerreno2.png";
            document.getElementById("infTCar").innerText = "TOYOTA Prado \n Año 2018";
        } else {
            imgVista.src = "images/TodoTerreno3.png";
            document.getElementById("infTCar").innerText = "NISSAN JUKE \n Año 2017";
        }
    }
}

function mostrarFamiliar(indice){
    if(indice==1){
        imgVista.src = "images/Familiar1.png";
        document.getElementById("infTCar").innerText = "TOYOTA SIENNA \n Año 2018";
    }
    else{
        if (indice==2) {
            imgVista.src = "images/Familiar2.png";
            document.getElementById("infTCar").innerText = "DODGE GRAND CARAVANE \n Año 2015";
        } else {
            imgVista.src = "images/Familiar3.png";
            document.getElementById("infTCar").innerText = " HYUNDAI ELANTRA \n Año 2016";
        }
    }
}