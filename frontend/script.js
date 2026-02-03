// Elementos principales para controlar el estado del menú
const navbar = document.querySelector('.navbar');
const hero = document.querySelector('.hero');

// Activa el modo "sticky" cuando el scroll supera la altura del hero
const updateNavbarState = () => {
    if (!navbar || !hero) return;

    const heroBottom = hero.offsetTop + hero.offsetHeight;
    const scrollTop = window.scrollY || document.documentElement.scrollTop;

    if (scrollTop >= heroBottom - navbar.offsetHeight) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
};

// Escucha cambios de scroll y resize para recalcular
window.addEventListener('scroll', updateNavbarState);
window.addEventListener('resize', updateNavbarState);
updateNavbarState();
