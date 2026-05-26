let proyectos = document.querySelectorAll(".imagen_proyecto");
let modal = document.getElementById("modal_proyecto");

let modalImg = modal.querySelector(".modal_img");
let modalTitulo = modal.querySelector(".modal_titulo");
let modalDesc = modal.querySelector(".modal_desc");

// abrir modal
proyectos.forEach(proyecto => {
    proyecto.addEventListener("click", function() {
        let img = proyecto.querySelector("img");
        let titulo = proyecto.querySelector(".titulo").textContent;
        let oculto = proyecto.querySelector(".oculto").textContent;

        modalImg.src = img.src;
        modalTitulo.textContent = titulo;
        modalDesc.textContent = oculto;

        modal.showModal();
        document.body.classList.add("no-scroll");
    });
});

// cerrar modal
modal.querySelector(".cerrar").addEventListener("click", () => {
    modal.close();
    document.body.classList.remove("no-scroll");
});