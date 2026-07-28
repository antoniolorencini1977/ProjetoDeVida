// Seleciona os elementos do Inglês
const btnIngles = document.getElementById('btn-ingles');
const conteudoIngles = document.getElementById('conteudo-ingles');

// Seleciona os elementos do ENEM
const btnEnem = document.getElementById('btn-enem');
const conteudoEnem = document.getElementById('conteudo-enem');

// Seleciona os elementos do Vestibular
const btnVestibular = document.getElementById('btn-vestibular');
const conteudoVestibular = document.getElementById('conteudo-vestibular');

// Evento de clique para o Inglês
btnIngles.addEventListener('click', function() {
    conteudoIngles.classList.toggle('ativo');
});

// Evento de clique para o ENEM
btnEnem.addEventListener('click', function() {
    conteudoEnem.classList.toggle('ativo');
});

// Evento de clique para o Vestibular
btnVestibular.addEventListener('click', function() {
    conteudoVestibular.classList.toggle('ativo');
});