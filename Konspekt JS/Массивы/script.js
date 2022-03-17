'use strict';

const arr = [1, 2, 4, 5, 3];
arr[99] = 20;
console.log(arr.length);
console.log(arr);

arr.pop();

//Удаляет последний элемент из массива

arr.push(10);

//Добавляет любой элементв конец массива
for (let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}

//Таким методом перебираем все элементы массива

for (let key of arr){
   console.log(key);
}

const arr2 = [1, 2, 4, 5, 3];
arr2.forEach(function(item, i, arr){
    console.log(`${i}: ${item} inside massive ${arr}`);
});

//forEach это callback метод, который перебирает элементы.
//callback значит, что сначала выполняесят перебирание, а потом уже функция
//Первый аргумент функции - значение элемента массива. Второй - номер элемента. Третье - это сам массив

//Все чем отличается цикл от forEach так это то, что в циклах можно использовать break, continue

const str = prompt("", "");

const products = str.split(", ");
products.sort(compareNum);
console.log(products.join('; '));

function compareNum (a, b){
    return a - b;
}

//Этими методами мы можем разделять строку и наоборот соединять значения массивов в строку
//Также сортировать по алфавиту
//Но метод sort() сортирует нормально только строки


//Когда мы будем работать с элементами со страницы мы будем получать псевдомассивы
//Структура у псевдомассивов такая же, но у нее нету методов
