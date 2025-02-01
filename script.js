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