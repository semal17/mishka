var  navMenu = document.querySelector('.menu');
var  navOpen = document.querySelector('.menu__open');

navOpen.addEventListener('click', function() {
    if (navMenu.classList.contains('menu--closed')) {
        navMenu.classList.remove('menu--closed');
        navMenu.classList.add('menu--opened');
    } else {
        navMenu.classList.add('menu--closed');
        navMenu.classList.remove('menu--opened');
    }
});