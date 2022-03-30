'use strict';

const str = "test";
const arr = [1, 2, 3];
console.log(str.length);
console.log(arr.length);
//Количество символов в объекте
console.log(str[3]);
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str);
//Методы не изменяют переменную

let fruit = "Some fruit";

console.log(fruit.indexOf('fruit'));
//Этот метод показывает сколько символом до интересующего значения
const arr2 = [1, 2, 3];
console.log(arr2.indexOf(3));


const logg = "Hello world";
console.log(logg.slice(6, 11));
//Этот метод позволяет вырезать нужное кол-во символов из текста.
//Первый аргумент с какого символа начать. Второй до какого символа. Если вводим один аргумент, то он обрежет только начало
//также метод поддерживает и отрицательные значения

console.log(logg.substring(6, 11));

//Тоже самое

console.log(logg.substr(6, 5));

//Тоже самое только второй аргумент это кол-во символов, которое мы хотим вырезать

const num = 12.2;
console.log(Math.round(num));

const num2 = "12.3px";
console.log(parseInt(num2));
console.log(parseFloat(num2));
console.log(typeof(parseInt(num2)));    

// Этот метод переводит текст в тип цифра

let i = 4.0;
let z = 4.0;
z = z + i;
console.log(parseFloat(4.0 + 4.0));