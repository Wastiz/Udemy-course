'use strict';

const person = {
    name: 'John',
    telephone: '1231312321',
    parents: {
        mother: "Jelena",
        dad: "Andruhan"
    }
};
console.log(JSON.stringify(person));
//JSON это формат передачи данных на сервер и с сервера.
//Прикод в том, что все данные приходят в виде строки
//Сейчас мы форматировали объект в JSON
console.log(JSON.parse(JSON.stringify(person)));
//А сейчас мы отформатировали строчку из JSON в наш привычный JS
const clone = JSON.parse(JSON.stringify(person));
clone.parent.mother = "Jelen4ik";
console.log(person);
console.log(clone);