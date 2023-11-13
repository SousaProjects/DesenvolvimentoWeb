/*Função que para adicionar dados na tela pop-up alterar senha*/

function mostrarPopUp(event) {

    /*Impedir que a página seja recarregada quando a função for chamada*/

    event.preventDefault();

    /*Criação dos componentes necessários para inserir componentes na tela*/
    const popup = document.createElement("div");
    popup.classList.add("alterar-senha-completo");

    popup.innerHTML = `
        <div class="alterar-senha-cabecalho">
            <ion-icon name="key-outline"></ion-icon><p>Alterando sua senha</p><button type="button" id="fechar-popup">X</button>
        </div>
        <div class="alterar-senha-conteudo">
            <form>
                <input type="password" placeholder="Senha Atual">
                <input type="password" placeholder="Senha Nova">
                <input type="password" placeholder="Confirme Nova Senha">
                <button type="submit" id="bt-fechar">Alterar Senha</button>
            </form>
        </div>
    `;
    /*Adicionando registro filho no body do html*/
    document.body.appendChild(popup);

    /*Removendo registro filho no body do html*/
    const fecharPopup = document.getElementById("fechar-popup");
    fecharPopup.addEventListener("click", () => {
        document.body.removeChild(popup);
    });

    /*Alterar senha ainda está em implementação, precisaremos articular com BD*/
    const alterarS = document.querySelector("#bt-fechar")
    alterarS.addEventListener('click', () => {
        alert('Senha Alterada!')
        document.getElementById("fechar-popup").click()
    });
}

/*Função que para adicionar dados uma nova linha na tabela*/
function adicionarTarefa(event) {

    /*Impedir que a página seja recarregada quando a função for chamada*/
    event.preventDefault();

    /*Captura dos dados inseridos na input e remoção dos espaços duplos*/
    const tarefaInput = document.querySelector(".input-tarefa");
    const tarefa = tarefaInput.value.trim();

    if (tarefa == "") {
        alert("Insira o nome da tarefa.");
    } else {

        /*Criação dos componentes necessários para inserir uma nova linha*/
        const tabelaTarefas = document.querySelector("table tbody");
        const novaLinha = tabelaTarefas.insertRow();

        const dataAtual = new Date().toLocaleDateString();
        const novaLinhaHtml = `
            <td>${dataAtual}</td>
            <td>${tarefa}</td>
            <td><input type="date" class="ent-data"></td>
            <td>
                <select>
                    <option value="pendente">Pendente</option>
                    <option value="em andamento">Em Andamento</option>
                    <option value="concluida">Concluída</option>
                </select>
            </td>
            <td>
                <button type="button" class="bt-opcoes" onclick="editarTarefa(this)"><ion-icon name="create-outline"></ion-icon></button>
                <button type="button" class="bt-opcoes" onclick="excluirTarefa(this)"><ion-icon name="trash-outline"></ion-icon></button>
            </td>
        `;

        novaLinha.innerHTML = novaLinhaHtml;

        /* Reset do campo de input*/

        tarefaInput.value = '';
        alert("Tarefa adicionada com sucesso!");
    }
}

/*Função que para editar os dados da linha*/
function editarTarefa(botao) {

    /*selecionando a coluna 2 da tabela(Tarefa)*/
    const linha = botao.parentElement.parentElement;
    const colunaTarefa = linha.querySelector("td:nth-child(2)");

    /* Verifica se a célula está editável*/
    if (colunaTarefa.classList.contains("editavel")) {
        colunaTarefa.contentEditable = false;
        colunaTarefa.classList.remove("editavel");
    } else {
        colunaTarefa.contentEditable = true;
        colunaTarefa.classList.add("editavel");
        colunaTarefa.focus();

        /* Ao pressionar a Tecla enter é desabilitada a opção de edição*/

        colunaTarefa.addEventListener("keypress", function (e) {
            if (e.key === "Enter") {
                e.preventDefault();
                colunaTarefa.contentEditable = false;
                colunaTarefa.classList.remove("editavel");
            }
        });
    }
}

/* Função para remover a linha que está sendo focada*/
function excluirTarefa(botao) {
    const linha = botao.parentElement.parentElement;
    linha.remove();
}

/* Função para desconectar o usuário, ainda precisamos implementar o encerramento de sessão*/
function notificacao(){
    alert('O usuário foi desconectado!');
}

/* Espera o carregamento completo da página antes de executar o código */
document.addEventListener("DOMContentLoaded", function () {

    /* Seleciona o elemento HTML com a classe "alterar-senha" */
    const alterarSenha = document.querySelector(".alterar-senha");
    
    /* Adiciona um evento de clique ao elemento selecionado, chamando a função mostrarPopUp */
    alterarSenha.addEventListener("click", mostrarPopUp);

    /* Seleciona o botão dentro do elemento com a classe "add-tarefas" */
    const add = document.querySelector(".add-tarefas button");
    
    /* Adiciona um evento de clique ao botão selecionado, chamando a função adicionarTarefa */
    add.addEventListener("click", adicionarTarefa);

    /* Seleciona o elemento tbody dentro da tabela (se existir) */
    const tabela = document.querySelector("table tbody");

    /* Verifica se a tabela foi encontrada */
    if (tabela) {
        /* Adiciona um evento de clique ao tbody da tabela */
        tabela.addEventListener("click", function (event) {
            /* Verifica se o elemento clicado é um botão */
            if (event.target.tagName === "BUTTON") {
                /* Chama a função editarTarefa, passando o botão clicado como argumento */
                editarTarefa(event.target);
            }
        });
    } else {
        /* Se a tabela não foi encontrada, exibe uma mensagem no console */
        console.log("A tabela não foi encontrada.");
    }
});
