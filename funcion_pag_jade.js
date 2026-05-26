document.getElementById("btnAtras").addEventListener("click", function() {
    history.back();
});l

let correo = document.getElementById("correo");
let correo_flotante = document.getElementById("correo_flotante");
let salida = document.getElementById("salida") ;
let pagina_completa = document.getElementById("pagina_completa");

function entrar (){

    correo_flotante.classList.remove("oculto");
    pagina_completa.classList.add("oculto");
}

function salir (){
    correo_flotante.classList.add("oculto");
    pagina_completa.classList.remove("oculto");
}

correo.addEventListener("click", entrar);
salida.addEventListener("click", salir);
