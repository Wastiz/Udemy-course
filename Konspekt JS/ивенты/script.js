'use strict';

// https://oddler.ru/blog/i63
//справочник по событиям

//Первый вариант навешывания события это в html
//Таким образом обычно навешывают функции
//Вообще такую структуру лучше не использовать
//почему не стоит такой вариант использовать

const btn = document.querySelector('button');
const btnTwo = document.querySelectorAll('button')[1];
const overlay = document.querySelector(".overlay");

btn.onclick = function() {
    alert('click');
};

//Такие структуры лучше не использовать, потому что если мы еще хотим сдлеать событие на элементе, то такие методы не будут работать

btn.addEventListener('click', function(){
    alert('clock');
});

//Все просто. Первый аргумент слушателя это событие, второе функция

btn.addEventListener('click', function(){
    console.log("hahaha");
});

//И как мы видим два события с одним элементом прекрасно работают

// 'mouseenter' - когда пользователь наводит курсор на элемент

//Первым аргументом в функции слушаетля это объект события. Если нужны другие аргументы, то ставьте их вторыми

btn.addEventListener('mouseenter', function(e){
    console.log(e.target);
});

//target - это элемент, с которым происходит событие

btn.addEventListener('mouseenter', function(e){
    console.log(e.target);
    e.target.remove();
});

//Так как мы можем получить элемент, то мы можем с ним делать все что угодно

const deleteElem = function(e){
    console.log(e.target);
    i++;
    if (i == 3){
        btn.removeEventListener('click', deleteElem);
    }
};
let i = 0;
btn.addEventListener('click', deleteElem);

//Можно и так
//Можно удалить слушатель, если он больше не нужен

const doSom = function(e){
    console.log(e.currentTarget);
};

btnTwo.addEventListener('click', doSom);
overlay.addEventListener('click', doSom);

//Так как мы можем одну функцию на несколько слушателей навесить, нам может пригодится узнать на каких элементах это происходит
//Для этого используем currentTarget

const link = document.querySelector('a');
link.addEventListener('click', function(e){
    e.preventDefault();
    console.log(e.target);
});

//Отменение стандартного поведения браузера
//То есть это выделение текста, переход по ссылке и тд

const btns = document.querySelectorAll('button');

btns.forEach(function(item){
    item.addEventListener('click', function(e){
        console.log(e.target);
    });
});

//Также третьим аргументом слушателя можно передать опцию
// https://developer.mozilla.org/ru/docs/Web/API/EventTarget/addEventListener
// Здесь все опции

btnTwo.addEventListener('click', doSom, {once: true});

//Вот к примеру