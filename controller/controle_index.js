/* Função para validar o que foi digitado na tela de login*/
    function validarLogin(){

        /* Captura dos dados de login e senha*/
        const login = document.getElementById('email').value;
        const senha = document.getElementById('senha').value;

        /* Verifica se os dados digitados são iguais ao usuário válido, aqui iremos
        substituir pelos usuários cadastrados no BD*/

        if(login == "admin@admin.com.br" && senha == "admin"){
            location.href = "tela_tarefas.html";
        }
        else{
            alert('Usuário ou senha incorretos!');

        /*O campo de email e senha é zerado se os dados forem incorretos*/
        
            document.getElementById('email').value = '';
            document.getElementById('senha').value = '';
        }
    }