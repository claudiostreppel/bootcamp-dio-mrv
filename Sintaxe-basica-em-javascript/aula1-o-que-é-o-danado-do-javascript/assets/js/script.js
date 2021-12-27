const para = document.querySelector('p')
let nome=''

para.addEventListener('click', atualizarNome)

function atualizarNome() {
    nome = prompt('Digite seu nome: ')
    para.textContent = 'Jogador 1..: ' + nome
}