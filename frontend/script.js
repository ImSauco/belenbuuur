const navbar = document.querySelector('.navbar');
const hero = document.querySelector('.hero');

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

window.addEventListener('scroll', updateNavbarState);
window.addEventListener('resize', updateNavbarState);
updateNavbarState();
