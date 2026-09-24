/* =========================================================
   ONG ESPERANÇA
   SINGLE PAGE APPLICATION
========================================================= */


/* =========================================================
   ELEMENTO PRINCIPAL
========================================================= */

const conteudo = document.querySelector("#conteudo");


/* =========================================================
   CONTEÚDO DAS PÁGINAS
========================================================= */

const paginas = {


    /* =====================================================
       PÁGINA INICIAL
    ===================================================== */

    inicio: `

        <section class="hero">

            <div class="container hero-conteudo">

                <div class="hero-texto">

                    <span class="destaque">
                        Juntos podemos transformar vidas
                    </span>

                    <h1>
                        ONG Esperança
                    </h1>

                    <p>
                        Somos uma organização sem fins lucrativos
                        que trabalha para promover ações sociais
                        e melhorar a qualidade de vida de pessoas
                        e comunidades em situação de vulnerabilidade.
                    </p>

                    <a
                        class="botao"
                        href="#projetos"
                        data-pagina="projetos"
                    >
                        Conheça nossos projetos
                    </a>

                </div>


                <div class="hero-imagem">

                    <img
                        src="../img/ong.jpg"
                        alt="Voluntários da ONG Esperança participando de uma ação solidária"
                    >

                </div>

            </div>

        </section>


        <section class="sobre">

            <div class="container">

                <h2>
                    Sobre a nossa ONG
                </h2>

                <p>
                    A ONG Esperança nasceu com o objetivo de unir
                    pessoas dispostas a ajudar e comunidades que
                    precisam de apoio.
                </p>

                <p>
                    Acreditamos que pequenas atitudes podem gerar
                    grandes transformações.
                </p>

                <p>
                    Desenvolvemos campanhas de arrecadação,
                    ações comunitárias e programas de voluntariado
                    para contribuir com diferentes necessidades
                    sociais.
                </p>

            </div>

        </section>


        <section class="valores">

            <div class="container">

                <h2>
                    Nossos valores
                </h2>

                <div class="cards">

                    <article class="card">

                        <h3>
                            Solidariedade
                        </h3>

                        <p>
                            Incentivamos a colaboração e o cuidado
                            com o próximo.
                        </p>

                    </article>


                    <article class="card">

                        <h3>
                            Respeito
                        </h3>

                        <p>
                            Valorizamos todas as pessoas e suas
                            diferentes histórias.
                        </p>

                    </article>


                    <article class="card">

                        <h3>
                            Transparência
                        </h3>

                        <p>
                            Buscamos realizar nossas ações de
                            maneira ética e responsável.
                        </p>

                    </article>

                </div>

            </div>

        </section>


        <section class="contato">

            <div class="container">

                <h2>
                    Entre em contato
                </h2>

                <address>

                    <p>

                        <strong>
                            E-mail:
                        </strong>

                        <a href="mailto:contato@ongesperanca.org">
                            contato@ongesperanca.org
                        </a>

                    </p>


                    <p>

                        <strong>
                            Telefone:
                        </strong>

                        <a href="tel:+5591999999999">
                            (91) 99999-9999
                        </a>

                    </p>


                    <p>

                        <strong>
                            Endereço:
                        </strong>

                        Rua da Solidariedade, 100 -
                        Belém/PA

                    </p>

                </address>

            </div>

        </section>

    `,


    /* =====================================================
       PÁGINA DE PROJETOS
    ===================================================== */

    projetos: `

        <section class="pagina-introducao">

            <div class="container">

                <span class="destaque">
                    Nossas iniciativas
                </span>

                <h1>
                    Projetos
                </h1>

                <p>
                    Conheça algumas das ações realizadas
                    pela ONG Esperança para ajudar pessoas
                    e comunidades.
                </p>

            </div>

        </section>


        <section class="projetos">

            <div class="container">

                <h2>
                    Nossos projetos sociais
                </h2>

                <div class="cards">

                    <article class="card projeto-card">

                        <span class="numero-projeto">
                            PROJETO 01
                        </span>

                        <img
                            src="../img/doacao.jpg"
                            alt="Pessoas participando de uma campanha de doação"
                        >

                        <h3>
                            Campanha de Doação
                        </h3>

                        <p>
                            Arrecadamos recursos e materiais
                            para pessoas em situação de
                            vulnerabilidade.
                        </p>

                    </article>


                    <article class="card projeto-card">

                        <span class="numero-projeto">
                            PROJETO 02
                        </span>

                        <img
                            src="../img/voluntarios.jpg"
                            alt="Voluntários participando de uma ação social"
                        >

                        <h3>
                            Programa de Voluntariado
                        </h3>

                        <p>
                            Reunimos voluntários para participar
                            das ações sociais realizadas pela
                            organização.
                        </p>

                    </article>


                    <article class="card projeto-card">

                        <span class="numero-projeto">
                            PROJETO 03
                        </span>

                        <img
                            src="../img/alimentos.jpg"
                            alt="Alimentos arrecadados para uma campanha solidária"
                        >

                        <h3>
                            Campanha de Alimentos
                        </h3>

                        <p>
                            Organizamos arrecadações de alimentos
                            para famílias que precisam de apoio.
                        </p>

                    </article>

                </div>

            </div>

        </section>


        <section class="doacoes">

            <div class="container">

                <h2>
                    Como ajudar
                </h2>

                <p>
                    Você pode contribuir com nossas ações
                    através de doações ou participando como
                    voluntário.
                </p>

                <div class="chamada">

                    <h3>
                        Quer fazer parte?
                    </h3>

                    <p>
                        Cadastre-se como voluntário e participe
                        das próximas ações da ONG Esperança.
                    </p>

                    <a
                        class="botao"
                        href="#cadastro"
                        data-pagina="cadastro"
                    >
                        Seja Voluntário
                    </a>

                </div>

            </div>

        </section>

    `,


    /* =====================================================
       PÁGINA DE CADASTRO
    ===================================================== */

    cadastro: `

        <section class="pagina-introducao">

            <div class="container">

                <span class="destaque">
                    Faça parte
                </span>

                <h1>
                    Seja Voluntário
                </h1>

                <p>
                    Preencha o formulário para demonstrar
                    seu interesse em participar das ações
                    da ONG Esperança.
                </p>

            </div>

        </section>


        <section class="formulario-section">

            <div class="container formulario-container">

                <form id="formulario" novalidate>


                    <fieldset>

                        <legend>
                            Dados pessoais
                        </legend>


                        <div class="campo">

                            <label for="nome">
                                Nome completo
                            </label>

                            <input
                                type="text"
                                id="nome"
                                name="nome"
                                placeholder="Digite seu nome completo"
                                required
                                minlength="3"
                            >

                        </div>


                        <div class="campo">

                            <label for="email">
                                E-mail
                            </label>

                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="exemplo@email.com"
                                required
                            >

                        </div>


                        <div class="campo-duplo">

                            <div class="campo">

                                <label for="cpf">
                                    CPF
                                </label>

                                <input
                                    type="text"
                                    id="cpf"
                                    name="cpf"
                                    placeholder="000.000.000-00"
                                    maxlength="14"
                                    inputmode="numeric"
                                    autocomplete="off"
                                    required
                                >

                            </div>


                            <div class="campo">

                                <label for="telefone">
                                    Telefone
                                </label>

                                <input
                                    type="tel"
                                    id="telefone"
                                    name="telefone"
                                    placeholder="(00) 00000-0000"
                                    maxlength="15"
                                    inputmode="numeric"
                                    required
                                >

                            </div>

                        </div>


                        <div class="campo">

                            <label for="nascimento">
                                Data de nascimento
                            </label>

                            <input
                                type="date"
                                id="nascimento"
                                name="nascimento"
                                required
                            >

                        </div>

                    </fieldset>


                    <fieldset>

                        <legend>
                            Endereço
                        </legend>


                        <div class="campo-duplo">

                            <div class="campo">

                                <label for="cep">
                                    CEP
                                </label>

                                <input
                                    type="text"
                                    id="cep"
                                    name="cep"
                                    placeholder="00000-000"
                                    maxlength="9"
                                    inputmode="numeric"
                                    required
                                >

                            </div>


                            <div class="campo">

                                <label for="numero">
                                    Número
                                </label>

                                <input
                                    type="text"
                                    id="numero"
                                    name="numero"
                                    placeholder="Ex.: 100"
                                    required
                                >

                            </div>

                        </div>


                        <div class="campo">

                            <label for="endereco">
                                Endereço
                            </label>

                            <input
                                type="text"
                                id="endereco"
                                name="endereco"
                                placeholder="Digite seu endereço"
                                required
                            >

                        </div>


                        <div class="campo">

                            <label for="complemento">
                                Complemento
                            </label>

                            <input
                                type="text"
                                id="complemento"
                                name="complemento"
                                placeholder="Apartamento, bloco, etc."
                            >

                        </div>


                        <div class="campo-duplo">

                            <div class="campo">

                                <label for="cidade">
                                    Cidade
                                </label>

                                <input
                                    type="text"
                                    id="cidade"
                                    name="cidade"
                                    required
                                >

                            </div>


                            <div class="campo">

                                <label for="estado">
                                    Estado
                                </label>

                                <select
                                    id="estado"
                                    name="estado"
                                    required
                                >

                                    <option value="">
                                        Selecione
                                    </option>

                                    <option value="AC">Acre</option>
                                    <option value="AL">Alagoas</option>
                                    <option value="AP">Amapá</option>
                                    <option value="AM">Amazonas</option>
                                    <option value="BA">Bahia</option>
                                    <option value="CE">Ceará</option>
                                    <option value="DF">Distrito Federal</option>
                                    <option value="ES">Espírito Santo</option>
                                    <option value="GO">Goiás</option>
                                    <option value="MA">Maranhão</option>
                                    <option value="MT">Mato Grosso</option>
                                    <option value="MS">Mato Grosso do Sul</option>
                                    <option value="MG">Minas Gerais</option>
                                    <option value="PA">Pará</option>
                                    <option value="PB">Paraíba</option>
                                    <option value="PR">Paraná</option>
                                    <option value="PE">Pernambuco</option>
                                    <option value="PI">Piauí</option>
                                    <option value="RJ">Rio de Janeiro</option>
                                    <option value="RN">Rio Grande do Norte</option>
                                    <option value="RS">Rio Grande do Sul</option>
                                    <option value="RO">Rondônia</option>
                                    <option value="RR">Roraima</option>
                                    <option value="SC">Santa Catarina</option>
                                    <option value="SP">São Paulo</option>
                                    <option value="SE">Sergipe</option>
                                    <option value="TO">Tocantins</option>

                                </select>

                            </div>

                        </div>

                    </fieldset>


                    <fieldset>

                        <legend>
                            Interesse em voluntariado
                        </legend>


                        <div class="campo">

                            <label for="area">
                                Área de interesse
                            </label>

                            <select
                                id="area"
                                name="area"
                                required
                            >

                                <option value="">
                                    Selecione uma área
                                </option>

                                <option value="eventos">
                                    Eventos
                                </option>

                                <option value="doacoes">
                                    Doações
                                </option>

                                <option value="comunicacao">
                                    Comunicação
                                </option>

                                <option value="arrecadacao">
                                    Arrecadação
                                </option>

                            </select>

                        </div>


                        <div class="campo">

                            <label for="disponibilidade">
                                Disponibilidade
                            </label>

                            <select
                                id="disponibilidade"
                                name="disponibilidade"
                                required
                            >

                                <option value="">
                                    Selecione
                                </option>

                                <option value="manha">
                                    Manhã
                                </option>

                                <option value="tarde">
                                    Tarde
                                </option>

                                <option value="noite">
                                    Noite
                                </option>

                                <option value="fins-de-semana">
                                    Finais de semana
                                </option>

                            </select>

                        </div>


                        <div class="campo">

                            <label for="mensagem">
                                Por que deseja ser voluntário?
                            </label>

                            <textarea
                                id="mensagem"
                                name="mensagem"
                                minlength="10"
                                required
                                placeholder="Conte um pouco sobre seu interesse..."
                            ></textarea>

                        </div>


                        <div class="checkbox">

                            <input
                                type="checkbox"
                                id="termos"
                                name="termos"
                                required
                            >

                            <label for="termos">
                                Concordo em participar das ações
                                da ONG Esperança e autorizo o contato
                                para informações sobre voluntariado.
                            </label>

                        </div>

                    </fieldset>


                    <p
                        id="mensagem-formulario"
                        class="mensagem-formulario"
                        aria-live="polite"
                    ></p>


                    <button
                        type="submit"
                        class="botao botao-formulario"
                    >
                        Enviar cadastro
                    </button>

                </form>

            </div>

        </section>

    `

};


/* =========================================================
   MOSTRAR UMA PÁGINA
========================================================= */

function mostrarPagina(pagina) {

    if (!paginas[pagina]) {
        pagina = "inicio";
    }


    conteudo.innerHTML = paginas[pagina];


    const titulos = {

        inicio: "ONG Esperança - Início",

        projetos: "ONG Esperança - Projetos",

        cadastro: "ONG Esperança - Seja Voluntário"

    };


    document.title = titulos[pagina];


    if (window.location.hash !== `#${pagina}`) {

        history.pushState(
            { pagina: pagina },
            "",
            `#${pagina}`
        );

    }


    if (pagina === "cadastro") {

        configurarFormulario();

    }

}


/* =========================================================
   NAVEGAÇÃO DA SPA
========================================================= */

document.addEventListener("click", function (event) {

    const link =
        event.target.closest("[data-pagina]");


    if (!link) {
        return;
    }


    event.preventDefault();


    const pagina =
        link.dataset.pagina;


    mostrarPagina(pagina);

});


/* =========================================================
   BOTÃO VOLTAR / AVANÇAR DO NAVEGADOR
========================================================= */

window.addEventListener("popstate", function (event) {


    if (event.state && event.state.pagina) {

        mostrarPaginaSemHistorico(
            event.state.pagina
        );

        return;
    }


    const pagina =
        window.location.hash.replace("#", "") || "inicio";


    mostrarPaginaSemHistorico(pagina);

});


/* =========================================================
   MOSTRAR PÁGINA SEM CRIAR NOVO HISTÓRICO
========================================================= */

function mostrarPaginaSemHistorico(pagina) {

    if (!paginas[pagina]) {
        pagina = "inicio";
    }


    conteudo.innerHTML = paginas[pagina];


    const titulos = {

        inicio: "ONG Esperança - Início",

        projetos: "ONG Esperança - Projetos",

        cadastro: "ONG Esperança - Seja Voluntário"

    };


    document.title = titulos[pagina];


    if (pagina === "cadastro") {

        configurarFormulario();

    }

}


/* =========================================================
   MÁSCARA DE CPF
========================================================= */

function configurarMascaraCPF() {

    const cpf =
        document.querySelector("#cpf");


    if (!cpf) {
        return;
    }


    cpf.addEventListener("input", function () {

        let valor =
            cpf.value
                .replace(/\D/g, "")
                .slice(0, 11);


        valor = valor.replace(
            /(\d{3})(\d)/,
            "$1.$2"
        );


        valor = valor.replace(
            /(\d{3})(\d)/,
            "$1.$2"
        );


        valor = valor.replace(
            /(\d{3})(\d{1,2})$/,
            "$1-$2"
        );


        cpf.value = valor;

    });

}


/* =========================================================
   MÁSCARA DE TELEFONE
========================================================= */

function configurarMascaraTelefone() {

    const telefone =
        document.querySelector("#telefone");


    if (!telefone) {
        return;
    }


    telefone.addEventListener("input", function () {

        let valor =
            telefone.value
                .replace(/\D/g, "")
                .slice(0, 11);


        if (valor.length <= 10) {

            valor = valor.replace(
                /(\d{2})(\d)/,
                "($1) $2"
            );


            valor = valor.replace(
                /(\d{4})(\d)/,
                "$1-$2"
            );

        } else {

            valor = valor.replace(
                /(\d{2})(\d)/,
                "($1) $2"
            );


            valor = valor.replace(
                /(\d{5})(\d)/,
                "$1-$2"
            );

        }


        telefone.value = valor;

    });

}


/* =========================================================
   MÁSCARA DE CEP
========================================================= */

function configurarMascaraCEP() {

    const cep =
        document.querySelector("#cep");


    if (!cep) {
        return;
    }


    cep.addEventListener("input", function () {

        let valor =
            cep.value
                .replace(/\D/g, "")
                .slice(0, 8);


        valor = valor.replace(
            /(\d{5})(\d)/,
            "$1-$2"
        );


        cep.value = valor;

    });

}


/* =========================================================
   VALIDAÇÃO DO CPF
========================================================= */

function validarCPF(cpf) {

    cpf =
        cpf.replace(/\D/g, "");


    if (cpf.length !== 11) {
        return false;
    }


    if (/^(\d)\1+$/.test(cpf)) {
        return false;
    }


    let soma = 0;


    for (let i = 0; i < 9; i++) {

        soma +=
            Number(cpf.charAt(i)) *
            (10 - i);

    }


    let resto =
        (soma * 10) % 11;


    if (resto === 10) {
        resto = 0;
    }


    if (resto !== Number(cpf.charAt(9))) {
        return false;
    }


    soma = 0;


    for (let i = 0; i < 10; i++) {

        soma +=
            Number(cpf.charAt(i)) *
            (11 - i);

    }


    resto =
        (soma * 10) % 11;


    if (resto === 10) {
        resto = 0;
    }


    return resto ===
        Number(cpf.charAt(10));

}


/* =========================================================
   CONFIGURAÇÃO DO FORMULÁRIO
========================================================= */

function configurarFormulario() {


    configurarMascaraCPF();

    configurarMascaraTelefone();

    configurarMascaraCEP();


    const form =
        document.querySelector("#formulario");


    if (!form) {
        return;
    }


    /* =====================================================
       RECUPERAR DADOS DO LOCALSTORAGE
    ===================================================== */

    const dadosSalvos =
        localStorage.getItem("dadosCadastro");


    if (dadosSalvos) {

        const dados =
            JSON.parse(dadosSalvos);


        document.querySelector("#nome").value =
            dados.nome || "";


        document.querySelector("#email").value =
            dados.email || "";


        document.querySelector("#cpf").value =
            dados.cpf || "";


        document.querySelector("#telefone").value =
            dados.telefone || "";


        document.querySelector("#nascimento").value =
            dados.nascimento || "";


        document.querySelector("#cep").value =
            dados.cep || "";


        document.querySelector("#numero").value =
            dados.numero || "";


        document.querySelector("#endereco").value =
            dados.endereco || "";


        document.querySelector("#complemento").value =
            dados.complemento || "";


        document.querySelector("#cidade").value =
            dados.cidade || "";


        document.querySelector("#estado").value =
            dados.estado || "";


        document.querySelector("#area").value =
            dados.area || "";


        document.querySelector("#disponibilidade").value =
            dados.disponibilidade || "";


        document.querySelector("#mensagem").value =
            dados.mensagem || "";

    }


    /* =====================================================
       ENVIO DO FORMULÁRIO
    ===================================================== */

    form.addEventListener(
        "submit",
        function (event) {


            /*
                Impede o envio tradicional do formulário.
            */

            event.preventDefault();


            const mensagem =
                document.querySelector(
                    "#mensagem-formulario"
                );


            /* =================================================
               VALIDAÇÃO DO FORMULÁRIO
            ================================================= */

            if (!form.checkValidity()) {

                form.reportValidity();

                return;

            }


            /* =================================================
               VALIDAÇÃO DO CPF
            ================================================= */

            const cpf =
                document.querySelector("#cpf");


            if (!validarCPF(cpf.value)) {

                mensagem.textContent =
                    "Digite um CPF válido.";


                mensagem.className =
                    "mensagem-formulario mensagem-erro";


                cpf.focus();

                return;

            }


            /* =================================================
               COLETAR DADOS
            ================================================= */

            const dadosCadastro = {

                nome:
                    document.querySelector("#nome").value,

                email:
                    document.querySelector("#email").value,

                cpf:
                    document.querySelector("#cpf").value,

                telefone:
                    document.querySelector("#telefone").value,

                nascimento:
                    document.querySelector("#nascimento").value,

                cep:
                    document.querySelector("#cep").value,

                numero:
                    document.querySelector("#numero").value,

                endereco:
                    document.querySelector("#endereco").value,

                complemento:
                    document.querySelector("#complemento").value,

                cidade:
                    document.querySelector("#cidade").value,

                estado:
                    document.querySelector("#estado").value,

                area:
                    document.querySelector("#area").value,

                disponibilidade:
                    document.querySelector(
                        "#disponibilidade"
                    ).value,

                mensagem:
                    document.querySelector("#mensagem").value

            };


            /* =================================================
               SALVAR NO LOCALSTORAGE
            ================================================= */

            localStorage.setItem(
                "dadosCadastro",
                JSON.stringify(dadosCadastro)
            );


            /* =================================================
               MENSAGEM DE SUCESSO
            ================================================= */

            mensagem.textContent =
                "Cadastro enviado com sucesso! Obrigado por querer fazer parte da ONG Esperança.";


            mensagem.className =
                "mensagem-formulario mensagem-sucesso";


            /* =================================================
               LIMPAR FORMULÁRIO
            ================================================= */

            form.reset();

        }
    );

}


/* =========================================================
   INICIALIZAÇÃO
========================================================= */

const paginaInicial =
    window.location.hash.replace("#", "") || "inicio";


mostrarPaginaSemHistorico(paginaInicial);