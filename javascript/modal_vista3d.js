let proyectos = document.querySelectorAll(".imagen_proyecto");
let modal = document.getElementById("modal_proyecto");

let modalMedia = modal.querySelector(".modal_multimedia");
let modalTitulo = modal.querySelector(".modal_titulo");
let modalDesc = modal.querySelector(".modal_desc");

proyectos.forEach(proyecto => {

    proyecto.addEventListener("click", function () {

        let titulo = proyecto.querySelector(".titulo").textContent;

        let descripcion = proyecto.querySelector(".oculto p").textContent;

        let modelo = proyecto.querySelector("model-viewer");
        let video = proyecto.querySelector("video");

        modalTitulo.textContent = titulo;
        modalDesc.textContent = descripcion;

        modalMedia.innerHTML = "";

        if (modelo) {

            let nuevoModelo = modelo.cloneNode(true);
            modalMedia.appendChild(nuevoModelo);
        }

        else if (video) {

            let nuevoVideo = video.cloneNode(true);

            nuevoVideo.controls = true;

            modalMedia.appendChild(nuevoVideo);
        }

        modal.showModal();

        document.body.classList.add("no-scroll");
    });
});

modal.querySelector(".cerrar").addEventListener("click", () => {

    modal.close();

    document.body.classList.remove("no-scroll");

    modalMedia.innerHTML = "";
});