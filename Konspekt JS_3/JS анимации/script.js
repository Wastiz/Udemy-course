'use strict';

//Вообще большинство анимаций можно сделать в CSS3, но в js тоже есть свой функционал для анимаций элементов
//Он более свободный, но при этом более сложный
const btn = document.querySelector("button");
const elem = document.querySelector('.box-header');
let pos = 0;




function myAnimation (){
    pos++;
    elem.style.top = pos + 'px';
    elem.style.left = pos + 'px';
    
    if(pos < 300) {
        requestAnimationFrame(myAnimation); //Вот и все. Здесь происходит тот же интервал, что и был раньше, только подстраивается под пк
    }
}

btn.addEventListener('click', () => requestAnimationFrame(myAnimation));

//Также очень недавно появился web animation api, что может заменить css3 анимации

//Вот так вот создается новая анимация. Первый аргумент - keyframe, Второй - время, за которое происходит анимация

const phoneAnimation = images[0].animate([ //Собственно здесь выбрали объект, который будет анимироваться
    {transform: 'translateY(0)'}, //Здесь прописываем keyframes, то есть что будет изменяться
    {transform: 'translateY(100px)'},
    {transform: 'translateY(-100px)'},
    {transform: 'translateY(0)'},
    
], {
    duration: 3000, //Время полной анимации
    iterations: Infinity, //Сколько раз анимация будет воспроизводиться
});

//В общем, функционал огромный, даже помощнее чем у css. Нужно смотреть документацию по animate()