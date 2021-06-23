/*===== MENU SHOW Y HIDDEN =====*/
const navMenu = document.getElementById('nav-menu');
const toggleMenu = document.getElementById('nav-toggle');
const closeMenu = document.getElementById('nav-close');

// SHOW
toggleMenu.addEventListener('click', () => {
    navMenu.classList.add('show');
})

// HIDDEN
closeMenu.addEventListener('click', () => {
    navMenu.classList.remove('show');
})

/*===== REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav__link');

function linkAction(){
    navMenu.classList.remove('show');
}
navLink.forEach(link => link.addEventListener('click', linkAction));

let slideUp = {
    distance: '200%',
    duration: 800,
    origin: 'bottom',
    opacity: null,
    interval: 3,
};
let options = {
    duration: 800,
};
ScrollReveal().reveal('.home__img', options);
ScrollReveal().reveal('.skills__img', slideUp);
ScrollReveal().reveal('.education__container', options);
ScrollReveal().reveal('.services__content', slideUp);
// ScrollReveal().reveal('.works__img', slideUp);

