document.addEventListener("DOMContentLoaded", function () {
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
});
