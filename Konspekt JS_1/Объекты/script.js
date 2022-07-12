'use strict';
const options = {
    name: "test",
    width: 24000,
    height: 2300,
    colors: {
        border: 'black',
        bg: "yellow"
    },
    makeTest: function (){
        console.log("test");
    }
};

console.log(options.makeTest());

console.log(Object.keys(options));
//Этой командой можно просмотреть все ключи объекта, но не значение
console.log(Object.keys(options).length);
//Также можем посмотреть кол-во этих ключей

console.log(options.name);

delete options.name;

console.log(options.name);
//Можно удалять объекты даже в константе

let counter = 0;
for (let a in options) {
    if (typeof (options.a) === 'object') {
        for (let i in options[a]) {
            console.log(`Property ${i} have value ${options[a][i]}`);
            counter++;
        }
    } else {
        console.log(`Property ${a} have value ${options[a]}`);
        counter++;
    }
}
console.log(counter);
//Это синтаксис для перебирания объектов. Обычно вместо а используют key
//Вот так вот можно получить все значения объекта, даже объекта в объекте.
//Также у объекта нету прямого метода length, поэтому нужно применять статегию со счетчиком

console.log(options["colors"]["border"]);
//Мы можем получить значение ключа таким способом, но лучше использовать деструктуризаци. объекта

const {border, bg} = options.colors;
console.log(border);

//Сейчас мы высунули из объекта кусочки, создав переменную


