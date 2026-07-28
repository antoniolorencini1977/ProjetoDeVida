// Seleciona o botão e a caixa de texto do Inglês
const btnIngles = document.getElementById('btn-ingles');
const conteudoIngles = document.getElementById('conteudo-ingles');

// Clique do botão Inglês: Abre/Fecha a caixa logo abaixo dele
btnIngles.addEventListener('click', function() {
    conteudoIngles.classList.toggle('ativo');
});

// Seleciona o botão e a caixa de texto do ENEM
const btnEnem = document.getElementById('btn-enem');
const conteudoEnem = document.getElementById('conteudo-enem');

// Clique do botão ENEM: Abre/Fecha a caixa logo abaixo dele
btnEnem.addEventListener('click', function() {
    conteudoEnem.classList.toggle('ativo');
});