// 'use strict';

// alert('hi');
// //Просто окно с текстом

// const result = confirm('Are you here?');
// console.log(result);
// //Окно с ок или отмена. Дает булиновое значение

// const question = prompt('What is your age?', '');
// console.log(question);
// console.log(typeof(question));
//Окно с вводом. Туда можно записать что угодно, но оно будет в стринговом значении
//Вторые кавычки это плейсхолдер
//ВСЯ ИНФА ОТ ПОЛЬЗОВАТЕЛЯ ПРИХОДИТ В ВИДЕ СТРОК

const answers = [];

answers[0] = prompt('Как ваше имя', '');
answers[1] = prompt('Как ваша фамилия', '');
answers[2] = prompt('Какой ваш возраст', '');

document.write(answers);

//Зачем нужны вторые кавычки для промпт
//Как можно добавлять объекты в пустой массив
//В каком виде приходит информация от пользователя


//ИНТЕРПОЛЯЦИЯ
//- ЭТО КОГДА МОЖНО В СТРОКУ ВСТАВИТЬ ЗНАЧЕНИЕ ПЕРЕМЕННОЙ

const category = "toys";
console.log('https://someurl.com/${category}/5');

const userName = "Ivan";
alert("Hello, ${userName}");
