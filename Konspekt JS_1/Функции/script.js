'use strcit';

function showFirstMessage () {
    console.log('hello');
}

showFirstMessage();

//Обязательно вызывать функцию
//Существуют еще и анонимные функции, которые выполняются один раз, так как мы потом не можем их вызывать


function showFirstMessage (text, a, b,) {
    console.log(text);
    console.log(a);
    console.log(a + b);
    return a + b;
}

showFirstMessage("hello", 9, 10);


//Аргументы - это те значения, которые функция будет использовать внутри себя. Их может быть сколько угодно
//Также, переменные, которые создаются в функции могут использоваться только там
//Получается, что функции созданные вне какого-либо блока - глобальные, а которые внутри блока - локальные
let num = 50;

function showFirstMessage (text, a) {
    console.log(text);
    console.log(a);
    num = 20;
    console.log(num);
}

showFirstMessage("hello", 9);

//Но мы можем использовать локальные переменные с тем же именем, просто если захотим объявить переменную вне блока, то 
//будет использоваться глобальная

function calc (a, c) {
    return a + c;
}

console.log(calc(4, 3));
console.log(calc(10, 3));
console.log(calc(4, 10));

//return позволяет нам код вынести за блок
//Также код, который написан после return недосягаемый. То есть на ретурн функция заканчивется

function ret () {
    let num1 = 50;
    return num1;
}
const another = ret();
console.log(another);

//Но напрямую не получится вывести значение. Надо создать переменную с функцией

//КЛАССИФИКАЦИИ ФУНКЦИЙ

//1) Declaration
//Это то, что сейчас писал. Они существуют до того как можем объявить
//2) Expression

const logger = function(){
    console.log('hi');
};

logger();

//Тоже самое только создается когда до нее доходит очередь

//3) Стрелочные
const calcu = (a, b) => {
    return a + b;
};
console.log(calcu(9, 10));

//Тоже самое только не имеет контекст this (это this потом)
//Также можно опустить фигурные скобки, если ко в одну строчку
