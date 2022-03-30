'use strict';

if (4 == 9){
   console.log('ok');
}

if (4 == 4){
    console.log('ok');
}

//Все просто

if (4 == 9){
    console.log('ok');
} else {
    console.log('error');
}
//второе условие, если первое не соответсвует условие после if
//получается, что условия преобразовывают ответ в булиновое значение

const num = 50;

if (num < 49){
    console.log("ok");
} else if(num > 100) {
    console.log('not ok');
} else {
    console.log(num);
}

// Альтернатива

(num == 50) ? console.log('ok!') : console.log('error');

//Первое - условие. Второе - если условие верно. Третье - если не верно

//Для того, чтобы избежать больших ответлений
// Switch - это модификация if, которая поддерживает сразу несколько проверок

const num2 = 100;

switch (num) {
    case 49:
        console.log("false");
        break;
    case 50:
        console.log('false');
        break;
    case 100:
        console.log('ok');
        break;
    default:
        console.log('Not today');
        break;    
}

//В условие ставим то, что будем проверять
//В проверке идет строгое сравнение
//break означает, что если какое-то условия верно, то дальше код не будет проверять

//Зачем нужны условия?
//В какой формат данные преобразуют словия?
//Зачем нужен switch?
//Какая альтернатива есть у условий?