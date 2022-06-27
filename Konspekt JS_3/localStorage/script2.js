'use strict';

//Сейчас будем рассматривать технологию localstorage. То есть сохранение данных без бд
//Локал стораге это скорее просто свойство объекта window
//В консоли разработчика мы можем перейти в пункт application и там рассмотреть всею
//Если что в эту базу данных помещается всего 5 мб данных
console.log(window.localStorage);
//Чтобы обращаться к localStorage прописываем след команды

localStorage.setItem('null', '0');//первый атрибут - название ключа, второй - значение ключа
//Все теперь в локал стораге записан элемент
const number = localStorage.getItem('null');
console.log('number');
localStorage.removeItem('null');
localStorage.clear();

//Тут все понятно. Но что ели мы хотим поместить туда объект?
//Для этого нам надо этот объект стерелизовать. То есть в json перевести


const obj = {
    email: 'valnos04@gmail.com',
    password: '12345'
};

const jsonInfo = JSON.stringify(obj);
localStorage.setItem(obj.email, jsonInfo);

console.log(JSON.parse(localStorage.getItem(obj.email)));