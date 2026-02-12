document.addEventListener("DOMContentLoaded", function () {

    // BOTÃO SEGREDO
    const botao = document.querySelector(".segredo");
    const mensagem = document.getElementById("mensagemSecreta");

    if (botao && mensagem) {
        botao.addEventListener("click", function () {
            mensagem.classList.toggle("ativa");

            if (mensagem.classList.contains("ativa")) {
                mensagem.scrollIntoView({ behavior: "smooth" });
            }
        });
    }

    const dataInicio = new Date("2026-01-09T00:00:00");

function atualizarContador() {
    const agora = new Date();
    const diferenca = agora - dataInicio;

    if (diferenca < 0) return;

    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferenca / (1000 * 60 * 60)) % 24);
    const minutos = Math.floor((diferenca / (1000 * 60)) % 60);
    const segundos = Math.floor((diferenca / 1000) % 60);

    document.getElementById("dias").textContent = String(dias).padStart(2, "0");
    document.getElementById("horas").textContent = String(horas).padStart(2, "0");
    document.getElementById("minutos").textContent = String(minutos).padStart(2, "0");
    document.getElementById("segundos").textContent = String(segundos).padStart(2, "0");
}

setInterval(atualizarContador, 1000);
atualizarContador();


});
const slidesVideos = document.querySelector(".slides-videos");
const videos = document.querySelectorAll(".slides-videos video");

let indexVideo = 0;

function mostrarVideo(i) {
    if (i >= videos.length) indexVideo = 0;
    else if (i < 0) indexVideo = videos.length - 1;
    else indexVideo = i;

    slidesVideos.style.transform = 
        "translateX(" + (-indexVideo * 100) + "%)";
}

nextVideo.addEventListener("click", () => {
    mostrarVideo(indexVideo + 1);
});

prevVideo.addEventListener("click", () => {
    mostrarVideo(indexVideo - 1);
});
const raspadinhas = document.querySelectorAll(".raspadinha");

raspadinhas.forEach(r => {
    r.addEventListener("click", () => {
        r.textContent = r.dataset.valor;
        r.classList.add("revelada");
    });
});
