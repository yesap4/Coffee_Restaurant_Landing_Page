// script.js
document.addEventListener('DOMContentLoaded', () => {
    const menuOpen = document.getElementById('menu-open-button');
    const menuClose = document.getElementById('menu-close-button');
    const navMenu = document.querySelector('.nav-menu');

    menuOpen.addEventListener('click', () => {
        navMenu.classList.add('active');
    });

    menuClose.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});