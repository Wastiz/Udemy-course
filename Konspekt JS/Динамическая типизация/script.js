'use strict';

//Динамическая типизация - это когда один тип данных превращается в другой

//to String

console.log(typeof(String(null)));
console.log(typeof(String(4)));

//Конкатенация (когда мы скvладываем со строкой)

console.log(typeof(5 + 'v'));

const num = 5;
console.log('https://vk.com/' + num);

const fontSize = 26 + 'px';

//To Number

console.log(typeof(Number('4')));

console.log(typeof(+'4'));

console.log(typeof(parseInt('15px', 10)));

console.log(parseInt('15px', 10));

//Парсинт переделывает строку в число. Второе значение это система чисел

let answer = +prompt("hello", "");

//To boolean

//false всегда будут: 0, '', null, undefined, NaN;
//Все остальное всегда true

let switcher = null;

if (switcher){
    console.log("working...");
}

//Так как условие преобразует ответы в булиновое значение, то при flase условие не будет работать

function todo () {
    switcher = "1";
}
todo();

if(switcher){
    console.log("Working...");
}


console.log(typeof(Boolean('4')));
console.log(typeof(Boolean(NaN)));

console.log(!!"1312412");


let x = 5;
alert(x++);

let z = 6;
z++;
alert(z);

// [] + flase - null + true
console.log([] + false); //"false"
console.log("false" - null);//Получаем NaN из-за нематематического вычисления

//последовательное присваивание
let y = 2;
let c = y = 2;
console.log(c);

console.log(2 && 3 && 0);
console.log(2 && 1 && null && undefined);

//Этот амперсант тоже переделывает значение в булиновые и если он получает false, то он прекращает работу и вадает последнее значение
//Если все true, то он выдает последнее значение
//|| запинается на правде

