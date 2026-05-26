function actualizarReloj() {
    const ahora = new Date();
    let horas = ahora.getHours();
    const minutos = ahora.getMinutes().toString().padStart(2, '0');
    const ampm = horas >= 12 ? 'p.m.' : 'a.m.';
    horas = horas % 12 || 12;
    const dia = ahora.getDate().toString().padStart(2, '0');
    const mes = (ahora.getMonth() + 1).toString().padStart(2, '0');
    const anio = ahora.getFullYear();

    const reloj = document.getElementById('reloj-barra');
    if (reloj) {
        reloj.innerHTML = `${horas}:${minutos} ${ampm}<br>${dia}/${mes}/${anio}`;
    }
}
setInterval(actualizarReloj, 1000);
actualizarReloj();