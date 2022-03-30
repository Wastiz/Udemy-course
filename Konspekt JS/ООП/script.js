'use strict';

let str = 'some';
let strObj = new String(str);
console.log(typeof(strObj));
console.log(typeof(str));

//Этой командой мы обернули строку в объект. Эт для примера. Никто не пользуется им

console.dir([1,2,3,]);

const soldier = {
    health: 400,
    armor: 100,
    sayHello: function(){
        console.log('hello');
    }
};

//Это пример как работают объекты.
//Сейчас солдат выступает в роли общего объекта. То есть свойства его есть у всех

const john = {
    health: 100,
};

//Конкретно у этого солдата свои атрибуты, но у он умеет делать то, что и все солдаты
john__proto__ = soldier;
Object.setPrototypeOf(john, soldier);


//Это устаревший метод, но он отображает, что теперь джон умеет делать то, что и другие солдаты
//То же самое с объектами. Каждый объект разный, но он умеет делать то, что и все объекты

console.log(john);
console.log(john.armor);
john.sayHello();


//Как мы видим у джона теперь есть свойства солдата.
//Таким образом мы доказываем, что js это прототипно ориентированный язык.
//У всех объектов в прототипе есть функции
//ПРЕДСТАВЛЯЕМ СИТУАЦИЮ С МАШИНАМИ

const maksim = Object.create(soldier);
maksim.sayHello();
maksim.sayHello();
