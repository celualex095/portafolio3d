function abrirModal(id) {
  const modal = document.getElementById(id);
  modal.style.display = "flex";
  document.body.style.overflow = "hidden";
}

function cerrarModal(id) {
  const modal = document.getElementById(id);
  modal.style.display = "none";

  // Verifica si aún hay algún modal abierto
  const algunModalAbierto = Array.from(document.querySelectorAll('.modal'))
    .some(m => m.style.display === "flex");

  if (!algunModalAbierto) {
    document.body.style.overflow = "auto";
  }
}