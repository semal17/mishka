let navMenu = document.querySelector('.menu');
let navOpen = document.querySelector('.menu__open');

navOpen.addEventListener('click', function () {
  if (navMenu.classList.contains('menu--closed')) {
    navMenu.classList.remove('menu--closed');
    navMenu.classList.add('menu--opened');
  } else {
    navMenu.classList.add('menu--closed');
    navMenu.classList.remove('menu--opened');
  }
});



let offer = document.querySelector(".modal-offer");
let modal = document.querySelector(".modal");
let addSize = document.querySelector('.modal-offer__submit');

addSize.addEventListener("click", function () {
  if (modal.classList.contains("modal--show")) {
    modal.classList.remove("modal--show");
  }
  if (offer.classList.contains("modal-offer--show")) {
    offer.classList.remove("modal-offer--show");
  }
});

if (document.querySelector(".featured__btn")) {
  let button = document.querySelector(".featured__btn");
  button.addEventListener("click", function (event) {
    event.preventDefault();
    modal.classList.add("modal--show");
    offer.classList.add("modal-offer--show");
  });
}


modal.addEventListener("click", function (event) {
  let target = event.target
  event.preventDefault();
  if (target.classList.contains("modal")) {
    if (modal.classList.contains("modal--show")) {
      modal.classList.remove("modal--show");
    }
  }
});

window.addEventListener("keydown", function (event) {
  if (event.keyCode === 27) {
    if (modal.classList.contains("modal--show")) {
      modal.classList.remove("modal--show");
    }
    if (offer.classList.contains("modal-offer--show")) {
      offer.classList.remove("modal-offer--show");
    }
  }
});

new Swiper('.swiper', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },  
 
});