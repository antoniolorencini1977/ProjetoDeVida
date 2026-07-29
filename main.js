// Seleciona os elementos dos botões e conteúdos
const btnIngles = document.getElementById('btn-ingles');
const conteudoIngles = document.getElementById('conteudo-ingles');

const btnEnem = document.getElementById('btn-enem');
const conteudoEnem = document.getElementById('conteudo-enem');

const btnVestibular = document.getElementById('btn-vestibular');
const conteudoVestibular = document.getElementById('conteudo-vestibular');

// Função para fechar todas as caixas de texto ativas
function fecharTodasAsAbas() {
    conteudoIngles.classList.remove('ativo');
    conteudoEnem.classList.remove('ativo');
    conteudoVestibular.classList.remove('ativo');
}

// Clique no botão Inglês
btnIngles.addEventListener('click', function() {
    const jaEstaAberto = conteudoIngles.classList.contains('ativo');
    fecharTodasAsAbas();
    if (!jaEstaAberto) {
        conteudoIngles.classList.add('ativo');
    }
});

// Clique no botão ENEM
btnEnem.addEventListener('click', function() {
    const jaEstaAberto = conteudoEnem.classList.contains('ativo');
    fecharTodasAsAbas();
    if (!jaEstaAberto) {
        conteudoEnem.classList.add('ativo');
    }
});

// Clique no botão Vestibular
btnVestibular.addEventListener('click', function() {
    const jaEstaAberto = conteudoVestibular.classList.contains('ativo');
    fecharTodasAsAbas();
    if (!jaEstaAberto) {
        conteudoVestibular.classList.add('ativo');
    }
});