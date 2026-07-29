// Seleciona os elementos do botão e conteúdo do Inglês
const btnIngles = document.getElementById('btn-ingles');
const conteudoIngles = document.getElementById('conteudo-ingles');

// Seleciona os elementos do botão e conteúdo do ENEM
const btnEnem = document.getElementById('btn-enem');
const conteudoEnem = document.getElementById('conteudo-enem');

// Seleciona os elementos do botão e conteúdo do Vestibular
const btnVestibular = document.getElementById('btn-vestibular');
const conteudoVestibular = document.getElementById('conteudo-vestibular');

// Clique no botão Inglês
btnIngles.addEventListener('click', function() {
    conteudoIngles.classList.toggle('ativo');
});

// Clique no botão ENEM
btnEnem.addEventListener('click', function() {
    conteudoEnem.classList.toggle('ativo');
});

// Clique no botão Vestibular
btnVestibular.addEventListener('click', function() {
    conteudoVestibular.classList.toggle('ativo');
});
