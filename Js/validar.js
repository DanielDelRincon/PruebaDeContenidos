window.onload = iniciar;

function iniciar(){
    document.getElementById("edad").addEventListener("change", visualizarEdad);

    document.getElementById("comentario").addEventListener("keypress",mostrarCaracteres);
}
function visualizarEdad(){
    let laEdad = 0;
    laEdad = document.getElementById("edad").value;
    document.getElementById("verEdad").innerHTML = "La edad insertada es:" + laEdad;
}



function mostrarCaracteres(){
    var caracteres;
    caracteres = document.getElementById("comentario").value.length;
    document.getElementById("insertados").innerHTML=caracteres + " /500";
    
}
