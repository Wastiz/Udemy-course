"use strict"

//setTimeout и setInterval

//Основные синтаксисы

// const timer = setTimeout(() => {
//     console.log("hello");
// }, 2000);

// const timer = setTimeout((text) => {
//     console.log(text);
// }, 2000, "hello");

const timer = setTimeout(logger, 2000);
function logger (){
    console.log('hello');
}

// Как сбросить таймер

clearTimeout(timer);

//Practise

const btn = document.quer