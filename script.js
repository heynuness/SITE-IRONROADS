
document.addEventListener("DOMContentLoaded", function () {

    // LISTA DE PÁGINAS DOS CARROS
    const carros = [
        { nome: "BMW M3", pagina: "bmw.html" },
        { nome: "Audi RS7", pagina: "audi.html" },
        { nome: "Mercedes AMG GT", pagina: "mercedes.html" },
        { nome: "Koenigsegg Jesko", pagina: "jesko.html" },
        { nome: "Bugatti Chiron", pagina: "bugattichiron.html" },
        { nome: "Bugatti Divo", pagina: "bugattidivo.html" },
        { nome: "Lamborghini Revuelto", pagina: "revuelto.html" },
        { nome: "Ferrari 488 Pista", pagina: "ferrari.html" },
        { nome: "Dodge Charger SRT", pagina: "dodge.html" },
        { nome: "Porsche GT3 RS", pagina: "porsche.html" }
    ];

    // MENU DE NAVEGAÇÃO
    const nav = document.querySelector("nav");

    if (nav) {
        nav.innerHTML = `
            <a href="index.html">INÍCIO</a>
            <a href="#" id="btn-carros">CARROS</a>
            <a href="galeria.html">GALERIA</a>
            <a href="contatenos.html">CONTATE-NOS</a>
        `;

        const menuCarros = document.createElement("div");
        menuCarros.className = "menu-carros";

        carros.forEach(function (carro) {
            menuCarros.innerHTML += `
                <a href="${carro.pagina}">
                    ${carro.nome}
                </a>
            `;
        });

        nav.appendChild(menuCarros);

        const btnCarros = document.getElementById("btn-carros");

        btnCarros.addEventListener("click", function (event) {
            event.preventDefault();
            menuCarros.classList.toggle("ativo");
        });
    }

   
    // GALERIA COM IMAGEM AMPLIADA
    const imagensGaleria = document.querySelectorAll(".galeria img");

    imagensGaleria.forEach(function (imagem) {
        imagem.addEventListener("click", function () {
            const lightbox = document.createElement("div");
            lightbox.className = "lightbox";

            lightbox.innerHTML = `
                <button class="fechar-lightbox">×</button>
                <img src="${imagem.src}" alt="Imagem ampliada">
            `;

            document.body.appendChild(lightbox);

            lightbox.querySelector(".fechar-lightbox").addEventListener("click", function () {
                lightbox.remove();
            });

            lightbox.addEventListener("click", function (event) {
                if (event.target === lightbox) {
                    lightbox.remove();
                }
            });
        });
    });

    // MENU LATERAL
    const itensMenu = document.querySelectorAll("aside li");
    const descricao = document.querySelector(".descricao");

    if (itensMenu.length > 0 && descricao) {
        const titulo = descricao.querySelector("h2");
        const texto = descricao.querySelector("p");
        const categoria = descricao.querySelector("span");

        itensMenu.forEach(function (item) {
            item.addEventListener("click", function () {

                itensMenu.forEach(function (i) {
                    i.classList.remove("ativo");
                });

                item.classList.add("ativo");

                const opcao = item.textContent.trim();

                categoria.textContent = opcao.toUpperCase();

                if (opcao === "Visão Geral") {
                    titulo.textContent = "O ÍCONE RENOVADO";
                    texto.textContent = "Um esportivo com visual marcante, alta performance e presença única nas ruas.";
                }

                if (opcao === "Desempenho") {
                    titulo.textContent = "POTÊNCIA COM CONTROLE";
                    texto.textContent = "Motor forte, aceleração rápida e comportamento esportivo para quem busca emoção.";
                }

                if (opcao === "Design") {
                    titulo.textContent = "DESIGN AGRESSIVO";
                    texto.textContent = "Linhas esportivas, detalhes aerodinâmicos e acabamento premium.";
                }

                if (opcao === "Interior") {
                    titulo.textContent = "INTERIOR ESPORTIVO";
                    texto.textContent = "Bancos esportivos, painel moderno e acabamento voltado para o motorista.";
                }

                if (opcao === "Tecnologia") {
                    titulo.textContent = "TECNOLOGIA AVANÇADA";
                    texto.textContent = "Painel digital, multimídia e recursos modernos para uma condução completa.";
                }

                if (opcao === "Segurança") {
                    titulo.textContent = "SEGURANÇA E ESTABILIDADE";
                    texto.textContent = "Sistemas de controle, freios de alto desempenho e estabilidade em altas velocidades.";
                }

                if (opcao === "Concorrentes") {
                    titulo.textContent = "RIVAIS DE PESO";
                    texto.textContent = "Esse modelo compete com alguns dos carros esportivos mais desejados do mundo.";
                }
            });
        });
    }

    // BOTÃO ESPECIFICAÇÕES COMPLETAS
    const botaoSpecs = document.querySelector(".descricao button");

    if (botaoSpecs) {
        botaoSpecs.addEventListener("click", function () {
            const estatisticas = document.querySelector(".estatisticas");

            if (estatisticas) {
                estatisticas.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    }

});
document.addEventListener("DOMContentLoaded", function () {

    const cards = document.querySelectorAll(".card-carro");

    cards.forEach(function (card) {

        card.addEventListener("click", function () {

            const link = card.getAttribute("data-link");

            if (link) {
                window.location.href = link;
            }

        });

    });

});
        // GALERIA DE IMAGENS COM ANIMAÇÃO DE SLIDE

        document.addEventListener("DOMContentLoaded", function () {

            const imagemPrincipal = document.getElementById("imagemPrincipal");
            const tituloImagem = document.getElementById("tituloImagem");
            const categoriaImagem = document.getElementById("categoriaImagem");

            const btnVoltar = document.getElementById("btnVoltar");
            const btnProximo = document.getElementById("btnProximo");

            const miniaturas = document.querySelectorAll(".miniatura");

            let indiceAtual = 0;

            function trocarImagem(novoIndice, direcao) {

                if (novoIndice < 0) {
                    novoIndice = miniaturas.length - 1;
                }

                if (novoIndice >= miniaturas.length) {
                    novoIndice = 0;
                }

                const miniaturaAtual = miniaturas[novoIndice];

                const novaImagem = miniaturaAtual.getAttribute("data-img");
                const novoTitulo = miniaturaAtual.getAttribute("data-titulo");
                const novaCategoria = miniaturaAtual.getAttribute("data-categoria");

                miniaturas.forEach(function (miniatura) {
                    miniatura.classList.remove("ativa");
                });

                miniaturaAtual.classList.add("ativa");

                imagemPrincipal.classList.remove("slide-direita");
                imagemPrincipal.classList.remove("slide-esquerda");

                void imagemPrincipal.offsetWidth;

                if (direcao === "direita") {
                    imagemPrincipal.classList.add("slide-direita");
                } else {
                    imagemPrincipal.classList.add("slide-esquerda");
                }

                imagemPrincipal.src = novaImagem;
                tituloImagem.textContent = novoTitulo;
                categoriaImagem.textContent = novaCategoria;

                indiceAtual = novoIndice;
            }

            btnProximo.addEventListener("click", function () {
                trocarImagem(indiceAtual + 1, "direita");
            });

            btnVoltar.addEventListener("click", function () {
                trocarImagem(indiceAtual - 1, "esquerda");
            });

            miniaturas.forEach(function (miniatura, indice) {

                miniatura.addEventListener("click", function () {

                    let direcao = "direita";

                    if (indice < indiceAtual) {
                        direcao = "esquerda";
                    }

                    trocarImagem(indice, direcao);

                });

            });

        });
        

document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("formContato");

    if (!form) return;

    const nome = document.getElementById("nome");
    const email = document.getElementById("email");
    const telefone = document.getElementById("telefone");
    const assunto = document.getElementById("assunto");
    const mensagem = document.getElementById("mensagem");
    const mensagemSucesso = document.getElementById("mensagemSucesso");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        let formularioValido = true;

        limparMensagens();

        if (nome.value.trim() === "") {
            mostrarErro(nome, "Digite seu nome completo.");
            formularioValido = false;
        } else if (nome.value.trim().length < 3) {
            mostrarErro(nome, "O nome precisa ter pelo menos 3 caracteres.");
            formularioValido = false;
        } else {
            mostrarSucesso(nome);
        }

        if (email.value.trim() === "") {
            mostrarErro(email, "Digite seu e-mail.");
            formularioValido = false;
        } else if (!validarEmail(email.value.trim())) {
            mostrarErro(email, "Digite um e-mail válido.");
            formularioValido = false;
        } else {
            mostrarSucesso(email);
        }

        if (telefone.value.trim() === "") {
            mostrarErro(telefone, "Digite seu telefone.");
            formularioValido = false;
        } else if (!validarTelefone(telefone.value.trim())) {
            mostrarErro(telefone, "Digite um telefone válido. Ex: (87) 99999-9999");
            formularioValido = false;
        } else {
            mostrarSucesso(telefone);
        }

        if (assunto.value === "") {
            mostrarErro(assunto, "Selecione um assunto.");
            formularioValido = false;
        } else {
            mostrarSucesso(assunto);
        }

        if (mensagem.value.trim() === "") {
            mostrarErro(mensagem, "Digite sua mensagem.");
            formularioValido = false;
        } else if (mensagem.value.trim().length < 10) {
            mostrarErro(mensagem, "A mensagem precisa ter pelo menos 10 caracteres.");
            formularioValido = false;
        } else {
            mostrarSucesso(mensagem);
        }

        if (formularioValido) {
            mensagemSucesso.textContent = "Enviando mensagem para a IRONROADS...";

            setTimeout(function () {
                form.submit();
            }, 800);
        }
    });

    function mostrarErro(input, texto) {
        const campo = input.parentElement;
        const mensagemErro = campo.querySelector(".mensagem-erro");

        campo.classList.add("erro");
        campo.classList.remove("sucesso");

        mensagemErro.textContent = texto;
    }

    function mostrarSucesso(input) {
        const campo = input.parentElement;
        const mensagemErro = campo.querySelector(".mensagem-erro");

        campo.classList.add("sucesso");
        campo.classList.remove("erro");

        mensagemErro.textContent = "";
    }

    function limparMensagens() {
        const campos = document.querySelectorAll(".campo");

        campos.forEach(function (campo) {
            campo.classList.remove("erro");
            campo.classList.remove("sucesso");

            const erro = campo.querySelector(".mensagem-erro");

            if (erro) {
                erro.textContent = "";
            }
        });
    }

    function validarEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    function validarTelefone(telefone) {
        const regex = /^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/;
        return regex.test(telefone);
    }

});