'use strict';

let a = 5,
    b = a;

b = b + 5;
console.log(b);
console.log(a);

//Все отработало как надо

const obj = {
    a: 5,
    b: 1,
};

const copy = obj; //Ссылка
copy.a = 10;

console.log(obj);
console.log(copy);

//Но здесь мы получаем два одинаковых объекта, потому что мы изменяли начальный объект
//Когда мы работаем с примитивными данными (переменные), то просто меняется значение вместо переменной
//Но с более сложными данными такое не работает. Здесь происходит передача по ссылке

function copi (mainObj){
    let copyObj = {};
    for(let key in mainObj){
        copyObj[key] = mainObj[key];
    }
    return copyObj;
}
 const numbers = {
     a: 5,
     b: 2,
     c: {
         z: 3,
         x: 4,
     }
 };

 const copyNumbers = copi(numbers);

 console.log(copyNumbers);

 //Таким образом можно копировать объекты. То есть мы просто перебираем простые данные

 copyNumbers.c.z = 10;
 console.log(numbers);
 console.log(copyNumbers);

 //Но существует поверхностное и глубинное копирование. Глибинное копирование не дает просто так изменять значения
 const main = {
     a: 30,
     v: 33,
 };
 const add = {
     d: 17,
     g: 20,
 };

 console.log(Object.assign(main, add));

 //Таким методом можно соединять объекты

 const addMain = Object.assign({}, add);
 addMain.d = 40;
 console.log(add);
 console.log(addMain);

 //Так как мы изменяем простые данные/объекты, то у нас получаются две разные копии

 const oldArray = ["Alex", 5, 20, 40];
 const newArray = oldArray.slice();
 newArray[2] = 33;

 console.log(oldArray);
 console.log(newArray);
 //Таким способом можно копировать и изменять массивы без изменений предыдущего


//Spead operator - оператор разворота

const video = ['youtube', 'vimeo'],
      blogs = ['instagramm', 'tiktok'],
      internet = [...video, ...blogs, "vk", 'facebook'];

console.log(internet);

//Этот оператор разворачивает все данные из массива и вставляет в нужный массив. Работает и с объектами в ES8

function log (a, b ,c){
    console.log(a);
    console.log(b);
    console.log(c);
}

const link = ["link", 'preview', 'link to channel'];
log(...link);

//Это примерно как работает оператор

const someObj = {
    s: 1,
    h: 2
};

const someNewObj = {...someObj};
console.log(someNewObj);





