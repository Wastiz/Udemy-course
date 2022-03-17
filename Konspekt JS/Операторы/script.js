'use strict';

//Конкатенация

console.log('arr' + ' - object');
console.log(4 + ' - object');

//Плюс может быть как символом сложения, так и оператором динамической типизации(изменяет тип данных)

let inc = 10,
    decr = 10;

inc++;
console.log(inc);
decr--;

//Оператор инкримента b ltrhbvtynf (то есть прибавляет +1 или -1)

++inc;
--decr;

console.log(inc + decr);

//Можно так и так. Но!!!

console.log(++inc);
console.log(--decr);

//Сразу же будут работать только префиксные. То есть если мы сразу хоти вывести измененное число, то надо префиксы

console.log(5%2);

//Деление с остатком

let inc = 10,
    decr = 10;

console.log(inc == decr);
console.log(8 == "8");

//Оператор равенства. Сравнивает только значение

console.log(8 === "8");
console.log("9" === "8");

//Оператор строгого равенства. Сравнивает не только значение

//&& //оператор и. Выдает true когда все значения верны
//|| //оператор или. Выдает true если хотя бы один аргумент правда

const isChecked = true,
      isClose = true,
      isOpened = false;
console.log(isChecked && isClose);
console.log(isChecked && isClose && isOpened);

console.log(isChecked && !isClose);
console.log(isChecked || !isClose);

//Оператор отрицания ! превращает значение наоборот.

console.log(2 + 2 * 2 != 8);
console.log(2 + 2 * 2 !== 8); //Тоже самое, только со строгой типизацией


