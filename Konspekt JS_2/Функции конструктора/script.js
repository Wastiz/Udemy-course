'use strict';
// Конструкторы нужны для создания новых однотипных объектов.
// В основном это используется как товары или юзеры на сайтах

const num = new Number(3);
console.log(num);

function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function(){
        console.log(`${this.name} said hi`);
    };
}
// Также можно использовать такой метод если нет доступа к основной функции
User.prototype.exit = function(){
    console.log(`User ${this.name} has exited`);
};

//Сейчас мы создали функцию конструктор. То есть теперь мы можем создавать новых пользователей

const ivan = new User ('Ivan', 12);
const alex = new User ('Alex', 20);
console.log(ivan);
console.log(alex);
ivan.hello();
alex.exit();
// Был создан новый юзер с именем и ид
// В консоли нам выдали объект

