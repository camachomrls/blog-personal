function abriracercademi(){
    document.getElementById("ventanacamacho").style.display="block";
    document.getElementById("camacho").style.display="none";
    document.getElementById("portafolio").style.display="none";
    document.getElementById("contacto").style.display="none";
}
function cerraracercademi(){
    document.getElementById("ventanacamacho").style.display="none";
    document.getElementById("camacho").style.display="block";
    document.getElementById("portafolio").style.display="block";
    document.getElementById("contacto").style.display="block";
}
function abrirportafolio(){
    document.getElementById("ventanaportafolio").style.display="block";
    document.getElementById("camacho").style.display="none";
    document.getElementById("portafolio").style.display="none";
    document.getElementById("contacto").style.display="none";
}
function cerrarportafolio(){
    document.getElementById("ventanaportafolio").style.display="none";
    document.getElementById("camacho").style.display="block";
    document.getElementById("portafolio").style.display="block";
    document.getElementById("contacto").style.display="block";
}
function abrircontacto(){
    document.getElementById("datos").style.display="block";
}function cerrarcontacto(){
    document.getElementById("datos").style.display="none";
}