// Seleciona o botão e a caixa de conteúdo do inglês
const btnIngles = document.getElementById('btn-ingles');
const conteudoIngles = document.getElementById('conteudo-ingles');

// Evento de clique para abrir/fechar a aba com os 3 parágrafos
btnIngles.addEventListener('click', function() {
    conteudoIngles.classList.toggle('ativo');
});