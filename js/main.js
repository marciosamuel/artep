const botaoMenu = document.querySelector(".icone-menu");

botaoMenu.addEventListener("click", () => {
  document.querySelector("nav").classList.toggle("menu-ativo");
  botaoMenu.classList.toggle("botao-ativo");
});

const glide = new Glide(".glide", {
  type: "carousel",
  autoplay: 5000,
  perView: 1,
  focusAt: 'center',
  gap: 25,
  hoverpause: true,
  animationDuration: 600,
  animationTimingFunc: "linear",
}).mount();

