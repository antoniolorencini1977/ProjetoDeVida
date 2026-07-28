// Seleciona os elementos do botão e conteúdo do Inglês
const btnIngles = document.getElementById('btn-ingles');
const conteudoIngles = document.getElementById('conteudo-ingles');

// Seleciona os elementos do botão e conteúdo do ENEM
const btnEnem = document.getElementById('btn-enem');
const conteudoEnem = document.getElementById('conteudo-enem');

// Evento de clique para o Inglês
btnIngles.addEventListener('click', function() {
    conteudoIngles.classList.toggle('ativo');
});

// Evento de clique para o ENEM
btnEnem.addEventListener('click', function() {
    conteudoEnem.classList.toggle('ativo');
});