'use strict';

const box = document.getElementById("box");

console.log(box);

//Получаем элемент по id

const btns = document.getElementsByTagName('button');

const btnOne = document.getElementsByTagName('button')[1]; //Таким образом получаем один элемент без массива
console.log(btns);

console.log(btns[1]);

console.log(btnOne);

//Получаем элемент по тэгу
//Так как одинаковых тегов на странице много, то мы получаем псевдомассив из этих элементов
//Если элемент на странице один, то мы все равно получаем псевдомассив

const circles = document.getElementsByClassName("circle");
//Получаем элементы с одним классом. Точку не ставим перед названием

// https://learn.javascript.ru/css-selectors
// Это про селекторы

const hearts = document.querySelectorAll(".heart");
console.log(hearts);

hearts.forEach(item => {
    console.log("hello");
});

//Тоже самое, что и прошлое только он умеет выбирать любой элемент и имеет функцию forEach

const heart = document.querySelector('.heart');
console.log(heart);

//Тоже самое только получаем первый элемент исходя из написанного селектора


