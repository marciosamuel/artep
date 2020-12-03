let items = document.getElementById('menu-itens');
let botao = document.getElementById('icone-menu');

function toggleMenu() {
    items.classList.toggle('disabled');
    botao.classList.toggle('botao-ativo');
}