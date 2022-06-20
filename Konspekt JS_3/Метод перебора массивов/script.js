'use strict';

// Метод filter

const names = ['Ivan', 'alex', 'valera'];

//Самое главное отличие от forEach, это то что новые методы, которые мы щас изучаем возвращают новый массив
//Тем временем forEach никак не изменяет и возвращает старый массив

const shortNames = names.filter(function(name){ //Атрибут у колбек функции это единица массива
    return name.length < 5; //Сейчас мы прописали функциию, чтобы в новый массив возвращадись имена, у которых значение меньше 5 символов
    // Понятное дело, что здесь может быть любое условие
});

console.log(shortNames);

// map

//Метод map берет какой-то массив изменяет его и возвращает. То есть исходный массив будет изменен, но можно и создать новый массив с измененными данными

// const answers = ['IvaN', 'ANNA', 'Hello'];

// const result = answers.map(item => {
//     return item.toLowerCase();
// });

// console.log(result);

let answers = ['IvaN', 'ANNA', 'Hello'];

answers = answers.map(item => {
    return item.toLowerCase();
});

console.log(answers);

//every/some

//Метод some перебирает массивы и если хотя бы один элемент из этого массива совпадает, то он будет выдавать true

const some = [4, 'str', 'hello', 'world'];

console.log(some.some(item => typeof(item) === 'number'));

console.log(some.every(item => typeof(item) === 'number'));

//Метод every же выдает true  если каждый элемент соответствует условию

//reduce

//Служит этот метод, чтобы схлопывать массив в единое целое

// const arr = [4, 6, 7, 8, 9, 10, 11, 12, 13, 14];

// const result = arr.reduce((sum, current) => sum + current);
// //Когда мы запаускаем этот метод, у него автоматом созщдаются два аргумента
// //Первый аргумент это сумма массива. Но изначальна она равно нулю
// //А второй же аргумент это элементы, которые приходят из массива
// // Таким обраом массив перебирается. С каждым элементом происходит какое-то действие и вконце получаем результат

// console.log(result);

//Тоже самое можно делать и со строками, чтобы например, на странице вывести список

const arr = ['apple', 'banana', 'orange'];

const result = arr.reduce((sum, current) => `${sum}, ${current}`); //с помощью интерполяции сдалали красивую строчку
//Когда мы запаускаем этот метод, у него автоматом созщдаются два аргумента
//Первый аргумент это сумма массива. Но изначальна она равно нулю
//А второй же аргумент это элементы, которые приходят из массива
// Таким обраом массив перебирается. С каждым элементом происходит какое-то действие и вконце получаем результат

console.log(result);

//Ебат матрица нахуй

const obj = {
    ivan: 'person',
    ann: 'person',
    dog: 'animal',
    cat: 'animal'
};

// const newArr = Object.entries(obj);

// console.log(array);

//Щас мы получили массивы в массивах. А так как это массивы, то мы можем использовать filter

const array = Object.entries(obj).filter(function (item) {
    return item[1] === 'person';
}).map(function (item) {
    return item[0];
});

console.log(array);

//Ура. Используя chaining и матрицу мы получили имена со значением person

//А это задачка. Смысл в том , чтобы она перебирала массивы и выдавала нужные данные  

const films = [
    {
        name: 'Titanic',
        rating: 9
    },
    {
        name: 'Die hard 5',
        rating: 5
    },
    {
        name: 'Matrix',
        rating: 8
    },
    {
        name: 'Some bad film',
        rating: 4
    }
];

function showGoodFilms(arr) {
    return arr.filter(film => film.rating >= 8);
}

function showListOfFilms(arr) {
    return arr.reduce((acc, curr) =>`${typeof(acc) === 'object' ? acc.name : acc}, ${curr.name}`);
}

showListOfFilms(films);

function setFilmsIds(arr) {
    return arr.map((film, i) => {
        film.id = i;
        return film;
    });
}

const tranformedArray = setFilmsIds(films);

// При срабатывании every на первом фильме он натыкается на id = 0;
// 0 - это неправда в логическом ключе, поэтому и весь метод возвращает false
// Учитывайте этот момент
function checkFilms(arr) {
    return arr.every(film => film.id || film.id === 0 ? true : false)
}

// Еще короче, так как условие все равне вернет true или false:
// function checkFilms(arr) {
//     return arr.every(film => film.id || film.id === 0)
// }

// Максимально коротко, но еще читаемо:
// const checkFilms = (arr) => arr.every(film => film.id || film.id === 0)

checkFilms(tranformedArray);


const funds = [
    {amount: -1400},
    {amount: 2400},
    {amount: -1000},
    {amount: 500},
    {amount: 10400},
    {amount: -11400}
];

const getPositiveIncomeAmount = (data) => {
    return data.filter(item => item.amount > 0).reduce((acc, curr) => acc + curr.amount, 0);
};



const getTotalIncomeAmount = (data) => {
    return data.some(item => item.amount < 0) ? data.reduce((acc, curr) => acc + curr.amount, 0) : getPositiveIncomeAmount(data);
};

getPositiveIncomeAmount(funds);
console.log(getTotalIncomeAmount(funds));

//Оператор ?
//Иногда нам нужно определить переменную в зависимости от условия.
//let result = условие ? значение1 : значение2;
//Такой вот синтакисис
//Сначала вычисляется условие: если оно истинно, тогда возвращается значение1, в противном случае – значение2.
//Простыми словами можно задать переменную условием для дальнейшего использования. Если if else просто выполняются булиновыми значениями,
// то с этим оператором обрабатываемые данные сохраняются в переменную



