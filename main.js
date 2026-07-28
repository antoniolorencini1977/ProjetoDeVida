// Seleciona os botões
const btnIngles = document.getElementById('btn-ingles');
const btnEnem = document.getElementById('btn-enem');

// Seleciona os blocos de conteúdo
const conteudoIngles = document.getElementById('conteudo-ingles');
const conteudoEnem = document.getElementById('conteudo-enem');

// Função para esconder todos os conteúdos e desativar botões
function esconderTodos() {
    conteudoIngles.classList.remove('ativo');
    conteudoEnem.classList.remove('ativo');
    
    btnIngles.classList.remove('ativo');
    btnEnem.classList.remove('ativo');
}

// Clique no botão Inglês
btnIngles.addEventListener('click', function() {
    const estaAtivo = conteudoIngles.classList.contains('ativo');
    esconderTodos();
    if (!estaAtivo) {
        conteudoIngles.classList.add('ativo');
        btnIngles.classList.add('ativo');
    }
});

// Clique no botão ENEM
btnEnem.addEventListener('click', function() {
    const estaAtivo = conteudoEnem.classList.contains('ativo');
    esconderTodos();
    if (!estaAtivo) {
        conteudoEnem.classList.add('ativo');
        btnEnem.classList.add('ativo');
    }
});