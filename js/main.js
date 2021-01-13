const botaoMenu = document.querySelector(".icone-menu");

botaoMenu.addEventListener("click", () => {
  document.querySelector("nav").classList.toggle("menu-ativo");
  botaoMenu.classList.toggle("botao-ativo");
});
