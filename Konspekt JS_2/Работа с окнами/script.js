'use strict';

const box = document.querySelector('.box');
const btn = document.querySelector('button');
// const width = box.clientWidth;
// const height = box.clientHeight;
// const width = box.offsetWidth;
// const height = box.offsetHeight;
const width = box.scrollWidth;
const height = box.scrollHeight;
console.log(width, height);
// Мы получаем ширину и высоту в пикселях
// Причем с клиент width мы получем значение без полосы прокрутки
// А с offset мы получаем значение с полосой прокрутки
// А со scroll  мы получаем значение полностью прокрученного элемента 

btn.addEventListener('click', function() {
    if(box.style.height === '350px'){
        box.style.height = box.scrollHeight + 'px';
    } else {
        box.style.height = '350px';
    }
});

//scrollTop отвечает за количество проркученных пикселей
console.log(box.getBoundingClientRect());
// Здесь мы получаем массив из данных элемента (а имеено ширина, высота, позициия и тд)
console.log(box.getBoundingClientRect().top);

const style = window.getComputedStyle(box);
console.log(style);
// Этим методом мы получаем огромный массив сос тилями примененными к этому элементу
// Чтобы получить количество прокрученных пикселей на всей странице, то есть на документе, то используем эту команду
console.log(document.documentElement.scrollTop);
// Ставя это на 0 страничка оказывается вверху :)