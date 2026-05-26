// Actualizar reloj
function actualizarReloj() {
    const ahora = new Date();
    const h = ahora.getHours().toString().padStart(2, '0');
    const m = ahora.getMinutes().toString().padStart(2, '0');
    document.getElementById('reloj').textContent = `${h}:${m}`;
}

// Lógica de desbloqueo
function iniciarDesbloqueo() {
    const marco = document.querySelector('.marco-externo');
    
    
    // Animación 
    marco.style.transition = "transform 0.6s ease, opacity 0.6s ease";
    marco.style.transform = "scale(1.1)";
    marco.style.opacity = "0";

    setTimeout(() => {
        window.location.href = './principal.html';
    }, 500);
}

// Asignar el clic al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('pantalla-clic').addEventListener('click', iniciarDesbloqueo);
    setInterval(actualizarReloj, 1000);
    actualizarReloj();
});