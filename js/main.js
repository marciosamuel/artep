let botao_menu = document.querySelector('#icone-menu');
botao_menu.addEventListener("click", () => {
    document.querySelector('#menu-itens').classList.toggle('disabled')
    botao_menu.classList.toggle('botao-ativo')
})

let link_menu = document.querySelector('#menu-itens')
link_menu.addEventListener("click", () => {
    botao_menu.classList.toggle('botao-ativo')
    document.querySelector('#menu-itens').classList.toggle('disabled')
})

let cards = document.querySelectorAll('.card')

cards.forEach((card) => {
    card.addEventListener("click", () => {
        card.querySelector('.frente').classList.toggle('disabled')
        card.querySelector('.verso').classList.toggle('disabled')
    })
})

