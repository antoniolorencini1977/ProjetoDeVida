// Seleciona TODOS os elementos de botões e de conteúdos de uma só vez
const botoes = document.querySelectorAll('.botao');
const conteudos = document.querySelectorAll('.aba-conteudo');

// Função que esconde TODAS as abas e remove destaque dos botões
function esconderTodasAsAbas() {
    conteudos.forEach(function(conteudo) {
        conteudo.classList.remove('ativo');
    });
    botoes.forEach(function(botao) {
        botao.classList.remove('ativo');
    });
}

// Configuração individual para cada botão
const btnIngles = document.getElementById('btn-ingles');
const conteudoIngles = document.getElementById('conteudo-ingles');

const btnEnem = document.getElementById('btn-enem');
const conteudoEnem = document.getElementById('conteudo-enem');

const btnVestibular = document.getElementById('btn-vestibular');
const conteudoVestibular = document.getElementById('conteudo-vestibular');

const btnCurriculo = document.getElementById('btn-curriculo');
const conteudoCurriculo = document.getElementById('conteudo-curriculo');

// Clique Inglês
btnIngles.addEventListener('click', function() {
    const jaEstavaAberto = conteudoIngles.classList.contains('ativo');
    esconderTodasAsAbas();
    if (!jaEstavaAberto) {
        conteudoIngles.classList.add('ativo');
        btnIngles.classList.add('ativo');
    }
});

// Clique ENEM
btnEnem.addEventListener('click', function() {
    const jaEstavaAberto = conteudoEnem.classList.contains('ativo');
    esconderTodasAsAbas();
    if (!jaEstavaAberto) {
        conteudoEnem.classList.add('ativo');
        btnEnem.classList.add('ativo');
    }
});

// Clique Vestibular
btnVestibular.addEventListener('click', function() {
    const jaEstavaAberto = conteudoVestibular.classList.contains('ativo');
    esconderTodasAsAbas();
    if (!jaEstavaAberto) {
        conteudoVestibular.classList.add('ativo');
        btnVestibular.classList.add('ativo');
    }
});

// Clique Currículo
btnCurriculo.addEventListener('click', function() {
    const jaEstavaAberto = conteudoCurriculo.classList.contains('ativo');
    esconderTodasAsAbas();
    if (!jaEstavaAberto) {
        conteudoCurriculo.classList.add('ativo');
        btnCurriculo.classList.add('ativo');
    }
});