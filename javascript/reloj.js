function actualizarHora() {
    const ahora = new Date();

    let horas = ahora.getHours();
    let minutos = ahora.getMinutes();

    horas = horas < 10 ? "0" + horas : horas;
    minutos = minutos < 10 ? "0" + minutos : minutos;

    document.getElementById("hora_phone").textContent = `${horas}:${minutos}`;
}

setInterval(actualizarHora, 1000);
actualizarHora();