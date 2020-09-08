const encuesta = new Option();

function eventListener() {
    document.getElementById('favor').addEventListener('click', sumaFavor);
    document.getElementById('contra').addEventListener('click', sumaContra);
    document.getElementById('abste').addEventListener('click', sumaAbstencion);

    document.getElementById('btnParar').addEventListener('click', ImprimirAlerta);
}

eventListener();

function sumaFavor() {
    encuesta.favor++;
    console.log(encuesta.favor);
}

function sumaContra() {
    encuesta.contra++;
    console.log(encuesta.contra);
}

function sumaAbstencion() {
    encuesta.abste++;
    console.log(encuesta.abste);
}

function ImprimirAlerta() {
    var mensaje = "Votos a favor " + encuesta.favor + " Votos en contra " + encuesta.contra + " Abstenciones " + encuesta.abste
    window.alert(mensaje)
}