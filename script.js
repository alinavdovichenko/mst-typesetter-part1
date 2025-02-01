// script.js

// Получаем элементы
const header = document.querySelector('.header');
const sticky = header.offsetTop;

// Функция, которая будет добавлять класс к header при прокрутке
const handleScroll = () => {
    if (window.pageYOffset > sticky) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
};

// Добавление обработчика события прокрутки
window.onscroll = () => {
    handleScroll();
};

/*Nav Toggle on mobile
=================================================*/

document.addEventListener('DOMContentLoaded', function() {
    let navToggle = document.getElementById('navToggle');
    let nav = document.getElementById('nav');

    navToggle.addEventListener('click', function(event) {
        event.preventDefault();

        this.classList.toggle('active');
        nav.classList.toggle('show');
    });

    window.addEventListener('resize', function() {
        navToggle.classList.remove('active');
        nav.classList.remove('show');
    });
});