const button = document.getElementById('menu');
const nav = document.querySelector('.nav');
const mobileList = document.querySelector('.mobile__menu');
const icon = document.querySelector('.menu__icon');

let optMenu = true;

const openCloseMenu = () => {

    if (optMenu) {
        icon.classList.remove('bi-list');
        icon.classList.add('bi-x-lg');
        optMenu = false;
    } else {
        icon.classList.remove('bi-x-lg');
        icon.classList.add('bi-list');
        optMenu = true;
    }

    nav.classList.toggle('active');
    mobileList.classList.toggle('active');
};

button.addEventListener('click', openCloseMenu); //