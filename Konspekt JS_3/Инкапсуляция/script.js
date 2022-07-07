'use strict';

//Объясняя простым языком, инкапсуляция - это скрытие кода и данных для пользователя, чтобы он не смог его сломать

function User(name, age, password) {
    this.name = name;
    this.age = age;
    this.password = password;
    this.say = function(){
        console.log(`username: ${this.name}, age is: ${this.age}, password is: ${this.password}`);
    };
}

const ivan = new User('Ivan', 12, 13);
console.log(ivan.name);
console.log(ivan.age);

ivan.age = 30;
ivan.name = 'John';

ivan.say();

//Тут все просто. Но как мы видим можно спокойно изменять значения
//И чтобы просто так нельзя было вмешиваться в наш код, нужна инкапсуляция

function User2(name, age, password) {
    this.name = name;
    let userAge = age;
    this.password = password;
    this.say = function(){
        console.log(`username: ${this.name}, age is: ${userAge}, password is: ${this.password}`);
    };

    this.getAge = function(){
        return userAge;
    };

    this.setAge = function(age){
        if(age === Number && age > 0 && age < 110 ){
            userAge = age;
        } else {
            console.log('something went wrong');
        }
    };
}

const vanja = new User2('Ivan', 12, 13);
console.log(vanja.name);
console.log(vanja.userAge);

vanja.setAge(22);
vanja.setAge(111);
vanja.name = 'John';

vanja.say();

//Но всего лишь добавив переменную вместо контекста, мы зачали инкапсуляцию в наш код
//когда мы захотели поменять userAge, консоль нам выдала undefined, так как это не свойство объекта
//Теперь мы можем устанавливать новые значения только с гетерами и сетерами, которые в свою очередь могут проходить какую-то проверку.

class User3 {
    constructor(name, age) {
        this.name = name;
        this._age = age;
    }

    

    say() {
        console.log(`username: ${this.name}, age is: ${this._age}, password is: ${this.password}`);
    }

    get age(){
        return this._age;
    }

    set age(age){
        if(age === Number && age > 0 && age < 110 ){
            this._age = age;
        } else {
            console.log('something went wrong');
        }
    }
}

const john = new User3('Ivan', 12, 13);
console.log(john.name);
console.log(john._age);

john.age(22);
john.age(111);
john.name = 'John';

john.say();
