/* Função para validar o que foi digitado na tela de cadastro*/

    function validarCadastro() {

        /* Capturar os campos de nome, email, senha e confirmação de senha*/
        var nome = document.getElementById('nome').value;
        var email = document.getElementById('email').value;
        var senha = document.getElementById('senha').value;
        var confirm = document.getElementById('confirm_senha').value;

        /* Verifica se os dados preenchidos estão em branco, utilizei o trim para que não fosse possível
        inserir somente espaços em branco*/

        if (nome.trim() == '' || email.trim() == '' || senha.trim() == '' || confirm.trim() == '') {
            alert('Por favor, preencha todos os campos.');
        } else if (senha != confirm) {
            alert('Senhas diferentes');
            document.getElementById('senha').value = '';
            document.getElementById('confirm_senha').value = '';
        } else {
            alert('Usuário Cadastrado!');
            location.href = 'index.html';
        }
    }
