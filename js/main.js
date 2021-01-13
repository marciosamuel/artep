<<<<<<< HEAD
const botaoMenu = document.querySelector(".icone-menu");

botaoMenu.addEventListener("click", () => {
  document.querySelector("nav").classList.toggle("menu-ativo");
  botaoMenu.classList.toggle("botao-ativo");
});

const cards = document.querySelectorAll('.card')

cards.forEach((card) => {
  card.addEventListener("click", () => {
    card.querySelector('.frente').classList.toggle('disabled')
    card.querySelector('.verso').classList.toggle('disabled')
  })
})

$(document).ready(function () {
  //Smooth scrolling when click to nav
  $('.itens-menu a').click(function (e) {
    e.preventDefault();
    var curLink = $(this);
    var scrollPoint = $(curLink.attr('href')).position().top + 1;
    $('body,html').animate({
      scrollTop: scrollPoint
    }, 300);
  })

  $(window).scroll(function () {
    onScrollHandle();
  });

  function onScrollHandle() {

    //Get current scroll position
    var currentScrollPos = $(document).scrollTop();

    //Iterate through all node
    $('.itens-menu a').each(function () {
      var curLink = $(this);
      var refElem = $(curLink.attr('href'));
      //Compare the value of current position and the every section position in each scroll
      if (refElem.position().top <= currentScrollPos && refElem.position().top + refElem.height() > currentScrollPos) {
        //Remove class link-ativo in all nav
        $('.navegacao').removeClass("link-ativo");
        $('nav').removeClass("menu-ativo");
        $('.icone-menu').removeClass('botao-ativo');
        //Add class link-ativo
        curLink.addClass("link-ativo");
      }
      else {
        curLink.parent().removeClass("link-ativo");
      }
    });
  }
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


=======
$(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    responsive: {
        0: {
            items: 1,
        },
        768: {
            items: 3,
        },
    },
    autoplay: true,
});

let $doc = $('html, body');
$('.navegacao').click(function () {
    $doc.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
    return false;
});

let botao_menu = document.querySelector('#icone-menu');
botao_menu.addEventListener("click", () => {
    document.querySelector('#menu-itens').classList.toggle('disabled')
    botao_menu.classList.toggle('botao-ativo')
})

let links = document.querySelectorAll('.navegacao')

links.forEach((link) => {
    link.addEventListener("click", () => {
        botao_menu.classList.toggle('botao-ativo')
        document.querySelector('#menu-itens').classList.toggle('disabled')
    })
})

let cards = document.querySelectorAll('.card')

cards.forEach((card) => {
    card.addEventListener("click", () => {
        card.querySelector('.frente').classList.toggle('disabled')
        card.querySelector('.verso').classList.toggle('disabled')
    })
})
>>>>>>> a8a94483a9c05d5c612a0c2be536623c1a146fc9
