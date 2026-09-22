// ============================================
// DATA DO ANIVERSÁRIO
// ============================================

const dataAniversario =
    new Date("2026-09-23T00:00:00");


// ============================================
// DATA DO INÍCIO DO NAMORO
// ============================================

const dataNameNamoro =
    new Date("2025-09-28T00:00:00");


// ============================================
// CONTROLE
// ============================================

let aniversarioMostrado = false;


// ============================================
// CONTADOR DO ANIVERSÁRIO
// ============================================

function atualizarContador() {

    const agora = new Date();

    const diferenca =
        dataAniversario - agora;


    if (diferenca <= 0) {

        mostrarAniversario();

        return;

    }


    const dias =
        Math.floor(
            diferenca /
            (1000 * 60 * 60 * 24)
        );


    const horas =
        Math.floor(
            (diferenca /
                (1000 * 60 * 60)) % 24
        );


    const minutos =
        Math.floor(
            (diferenca /
                (1000 * 60)) % 60
        );


    const segundos =
        Math.floor(
            (diferenca / 1000) % 60
        );


    document.getElementById("dias")
        .textContent =
        String(dias).padStart(2, "0");


    document.getElementById("horas")
        .textContent =
        String(horas).padStart(2, "0");


    document.getElementById("minutos")
        .textContent =
        String(minutos).padStart(2, "0");


    document.getElementById("segundos")
        .textContent =
        String(segundos).padStart(2, "0");

}


// ============================================
// MOSTRAR ANIVERSÁRIO
// ============================================

function mostrarAniversario() {

    if (aniversarioMostrado) {
        return;
    }

    aniversarioMostrado = true;


    document.getElementById(
        "telaInicial"
    ).style.display = "none";


    document.getElementById(
        "telaAniversario"
    ).style.display = "block";


    tocarMusica();

    construirBolo();

    criarConfete();

}


// ============================================
// MÚSICA
// ============================================

function tocarMusica() {

    const audio =
        document.getElementById(
            "musicaFNAF"
        );


    if (!audio) {
        return;
    }


    audio.volume = 0.5;

    audio.loop = true;


    audio.play()
        .then(function () {

            console.log(
                "Música iniciada."
            );

        })
        .catch(function (erro) {

            console.log(
                "O navegador bloqueou o autoplay:",
                erro
            );

        });

}


// ============================================
// CONSTRUIR BOLO
// ============================================

function construirBolo() {

    const camadas =
        document.querySelectorAll(
            ".camada"
        );


    const vela =
        document.querySelector(
            ".vela"
        );


    const mensagem =
        document.querySelector(
            ".mensagem-bolo"
        );


    camadas.forEach(
        function (camada, index) {

            setTimeout(
                function () {

                    camada.classList.add(
                        "construindo"
                    );

                },

                index * 800
            );

        }
    );


    setTimeout(
        function () {

            if (vela) {

                vela.classList.add(
                    "construindo"
                );

            }


            setTimeout(
                function () {

                    if (mensagem) {

                        mensagem.textContent =
                            "Ainda não acabou... tem mais! 💕";

                        mensagem.classList.add(
                            "piscando"
                        );

                    }


                    setTimeout(
                        function () {

                            const botao =
                                document.getElementById(
                                    "botaoSurpresa"
                                );


                            if (botao) {

                                botao.style.opacity =
                                    "1";

                                botao.style.pointerEvents =
                                    "auto";

                            }

                        },

                        1500
                    );

                },

                2500
            );

        },

        camadas.length * 800
    );

}


// ============================================
// CONFETE
// ============================================

function criarConfete() {

    const container =
        document.querySelector(
            ".container-confete"
        );


    if (!container) {
        return;
    }


    const emojis = [
        "🎉",
        "🎊",
        "❤️",
        "✨",
        "🎈",
        "🎁"
    ];


    for (let i = 0; i < 50; i++) {

        const confete =
            document.createElement(
                "div"
            );


        confete.className =
            "confete-item";


        confete.textContent =
            emojis[
                Math.floor(
                    Math.random() *
                    emojis.length
                )
            ];


        confete.style.left =
            Math.random() * 100 + "%";


        confete.style.animationDelay =
            Math.random() * 2 + "s";


        container.appendChild(
            confete
        );

    }

}


// ============================================
// CONTADOR DO NAMORO
// ============================================

function atualizarContadorNameNamoro() {

    const agora =
        new Date();


    let diferenca =
        agora - dataNameNamoro;


    if (diferenca < 0) {

        diferenca = 0;

    }


    const dias =
        Math.floor(
            diferenca /
            (1000 * 60 * 60 * 24)
        );


    const horas =
        Math.floor(
            (diferenca /
                (1000 * 60 * 60)) % 24
        );


    const minutos =
        Math.floor(
            (diferenca /
                (1000 * 60)) % 60
        );


    const segundos =
        Math.floor(
            (diferenca / 1000) % 60
        );


    document.getElementById(
        "diasNameNamoro"
    ).textContent =
        String(dias).padStart(2, "0");


    document.getElementById(
        "horasNameNamoro"
    ).textContent =
        String(horas).padStart(2, "0");


    document.getElementById(
        "minutosNameNamoro"
    ).textContent =
        String(minutos).padStart(2, "0");


    document.getElementById(
        "segundosNameNamoro"
    ).textContent =
        String(segundos).padStart(2, "0");

}


// ============================================
// BOTÃO "AINDA TEM MAIS"
// ============================================

document.addEventListener(
    "DOMContentLoaded",
    function () {

        const botao =
            document.getElementById(
                "botaoSurpresa"
            );


        if (!botao) {
            return;
        }


        botao.addEventListener(
            "click",
            function () {

                const mensagem =
                    document.getElementById(
                        "mensagemEspecial"
                    );


                mensagem.classList.add(
                    "ativa"
                );


                setTimeout(
                    function () {

                        document.getElementById(
                            "telaAniversario"
                        ).style.display =
                            "none";


                        document.getElementById(
                            "telaNameNamoro"
                        ).style.display =
                            "block";


                        atualizarContadorNameNamoro();


                        window.scrollTo(
                            0,
                            0
                        );

                    },

                    3500
                );

            }
        );

    }
);


// ============================================
// INICIALIZAÇÃO
// ============================================

atualizarContador();


atualizarContadorNameNamoro();


setInterval(
    atualizarContador,
    1000
);


setInterval(
    atualizarContadorNameNamoro,
    1000
);