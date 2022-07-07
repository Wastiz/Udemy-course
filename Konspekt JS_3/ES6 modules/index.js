'use strict';
//Продолжаем изучать модули и сейчас рассматриваем модули, которые добавилил в ES6 стандарте
//Виды экспорта:

export let one = 1;

let two = 2;

export {
    two
};

export function sayHi() {
    console.log('hello');
}