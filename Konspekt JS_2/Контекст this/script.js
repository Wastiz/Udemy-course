'use strict';

// Короче, по простому объясняя, этот контекст используется как адресация к определенному элементу
// Например, человек без места жительства принадлежит ко всему миру, но если поместить в общагу, то
// теперь можем адресовываться только к общаге, чтобы его получить
// То есть this это объект, а все что после точки прописываем зависит к чему щас привязан этот контекст 

//Функция может вызываться 4 способами

function showThis(a, b) {
    console.log(this);

    function sum() {
        console.log(this);
        return a + b;
    }
    console.log(sum());
}
showThis(4, 5);

const obj = {
    a: 20,
    b: 30,
    sum: function () {
        console.log(this);
    }
};
obj.sum();

function User(id, name) {
    this.name = name;
    this.id = id;
    this.human = true;
}
let ivan = new User('ivan', '23');

function sayName(surname) {
    console.log(this);
    console.log(this.name + ' ' + surname);
}
const user = {
    name: 'John',
};
sayName.call(user, 'smith'); //Здесь мы вручную говорим, что обычнвя функция ссылалась на объект user.
//Короче говоря, чтобы this подразумевался как user
sayName.apply(user, ['Smith']);
//Короче, с помощью методов call и apply мы говорим функции. чтобы она ссылалась на определенный объект. То есть делаем это вручную.
//Разница этих метолов только в синтаксисе. Ну и в дальнейшем использовании

function count(num) {
    return this * num;
}
const double = count.bind(20);
console.log(double(3));

//1. Обычная функция: this = window, Но если стоит use strict, то undefined
//2. Если мы используем контекст внутри объекта, то он будет ссылаться на этот объект
//3. this в конструкторах и классах - это новый экземпляр
//4. ручная привязка this: call, apply, bind

const btn = document.querySelector('button');
btn.addEventListener('click', function () {
    console.log(this);
});
btn.addEventListener('click', function () {
    this.style.backgroundColor = "black";
});
// С такой конструкцией мы получаем саму кнопку, то есть элемент с документа
// Получается что в данном случае контекст работает как e.target

const object = {
    num: 5,
    sayNumber: function () {
        const say = () => {
            console.log(this);
        };
        say();
    }
};
object.sayNumber();
//Вспоминаем, что у стрелочной функции нет своего контекста this, поэтому она обращается к родителю
//В консоли мы получили объект


const calc = a => a * 2;
//Вспоминаем, что если действие выполняется в одну строчку, то можно и без фигурных скобок