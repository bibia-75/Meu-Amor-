document.addEventListener("DOMContentLoaded", function () {

    /* ============================= */
    /*          BOTÃO SEGREDO        */
    /* ============================= */

    const botaoSegredo = document.querySelector(".segredo");
    const mensagemSecreta = document.getElementById("mensagemSecreta");

    if (botaoSegredo && mensagemSecreta) {
        botaoSegredo.addEventListener("click", function () {
            mensagemSecreta.classList.toggle("ativa");

            if (mensagemSecreta.classList.contains("ativa")) {
                mensagemSecreta.scrollIntoView({ behavior: "smooth" });
            }
        });
    }


    /* ============================= */
    /*            CONTADOR           */
    /* ============================= */

    const dataInicio = new Date(2026, 0, 9, 0, 0, 0);
 // coloque a data oficial aqui

    const diasEl = document.getElementById("dias");
    const horasEl = document.getElementById("horas");
    const minutosEl = document.getElementById("minutos");
    const segundosEl = document.getElementById("segundos");

    function atualizarContador() {

        if (!diasEl || !horasEl || !minutosEl || !segundosEl) return;

        const agora = new Date();
        const diferenca = agora - dataInicio;

        if (diferenca < 0) {
            diasEl.textContent = "00";
            horasEl.textContent = "00";
            minutosEl.textContent = "00";
            segundosEl.textContent = "00";
            return;
        }

        const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
        const horas = Math.floor((diferenca / (1000 * 60 * 60)) % 24);
        const minutos = Math.floor((diferenca / (1000 * 60)) % 60);
        const segundos = Math.floor((diferenca / 1000) % 60);

        diasEl.textContent = String(dias).padStart(2, "0");
        horasEl.textContent = String(horas).padStart(2, "0");
        minutosEl.textContent = String(minutos).padStart(2, "0");
        segundosEl.textContent = String(segundos).padStart(2, "0");
    }

    atualizarContador();
    setInterval(atualizarContador, 1000);


    /* ============================= */
    /*          RASPADINHAS          */
    /* ============================= */

    const raspadinhas = document.querySelectorAll(".raspadinha");

    raspadinhas.forEach(r => {
        r.addEventListener("click", function () {
            r.textContent = r.dataset.valor;
            r.classList.add("revelada");
        });
    });

});
