/*Função para trocar os dados da tela de DEVS, definido na ação de onmouseover
que chama a função trocarImagem() e seta novos paramêtros de Imagem e Nome*/

function trocarImagem(id,imagem, idprinome, prinome) {

    document.getElementById(id).src = imagem;
    document.getElementById(idprinome).textContent = prinome;
    
}
