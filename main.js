// Seleciona o botão e a área de conteúdo do inglês
const btnIngles = document.getElementById('btn-ingles');
const conteudoIngles = document.getElementById('conteudo-ingles');

// Evento para mostrar/ocultar a caixa de texto ao clicar
btnIngles.addEventListener('click', function() {
    conteudoIngles.classList.toggle('ativo');
});