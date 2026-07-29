// Seleciona todos os botões e conteúdos das abas
const botoes = document.querySelectorAll('.botao');
const conteudos = document.querySelectorAll('.aba-conteudo');

// Seleção dos botões individuais
const btnIngles = document.getElementById('btn-ingles');
const btnEnem = document.getElementById('btn-enem');
const btnVestibular = document.getElementById('btn-vestibular');
const btnCurriculo = document.getElementById('btn-curriculo');

// Seleção dos blocos de conteúdo individuais
const conteudoIngles = document.getElementById('conteudo-ingles');
const conteudoEnem = document.getElementById('conteudo-enem');
const conteudoVestibular = document.getElementById('conteudo-vestibular');
const conteudoCurriculo = document.getElementById('conteudo-curriculo');

// Função para fechar/esconder todas as abas ativas
function fecharTodasAsAbas() {
    conteudos.forEach(function(conteudo) {
        conteudo.classList.remove('ativo');
    });
    botoes.forEach(function(botao) {
        botao.classList.remove('ativo');
    });
}

// Botão 1: Fazer Inglês
btnIngles.addEventListener('click', function() {
    const estaAberto = conteudoIngles.classList.contains('ativo');
    fecharTodasAsAbas();
    if (!estaAberto) {
        conteudoIngles.classList.add('ativo');
        btnIngles.classList.add('ativo');
    }
});

// Botão 2: Tirar boa nota ENEM
btnEnem.addEventListener('click', function() {
    const estaAberto = conteudoEnem.classList.contains('ativo');
    fecharTodasAsAbas();
    if (!estaAberto) {
        conteudoEnem.classList.add('ativo');
        btnEnem.classList.add('ativo');
    }
});

// Botão 3: Passar no Vestibular
btnVestibular.addEventListener('click', function() {
    const estaAberto = conteudoVestibular.classList.contains('ativo');
    fecharTodasAsAbas();
    if (!estaAberto) {
        conteudoVestibular.classList.add('ativo');
        btnVestibular.classList.add('ativo');
    }
});

// Botão 4: Criar meu currículo (Google Docs)
btnCurriculo.addEventListener('click', function() {
    const estaAberto = conteudoCurriculo.classList.contains('ativo');
    fecharTodasAsAbas();
    if (!estaAberto) {
        conteudoCurriculo.classList.add('ativo');
        btnCurriculo.classList.add('ativo');
    }
});