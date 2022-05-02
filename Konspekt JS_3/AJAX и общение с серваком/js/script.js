'use strict';

const inputRub = document.querySelector('#rub');
const inputUsd = document.querySelector('#usd');

inputRub.addEventListener('input', ()=>{
    const request = new XMLHttpRequest(); //Это запрос на сервер. Пользуемся пока XMLHttpRequest, так как он втроен в браузер.
    //У него есть свойства, события, методы и тд
    //request.open(method, URL, async, login, password); Это собственно один из методов 
    //Задача этого метода собрать настройки для запроса
    //Первый аргумент метод ('GET', 'POST')
    //Второй аргумент это путь к нашему серверу
    //Третий метод отвечает за асихронность (true, false)
    //Последние аргументы это логин и пароль, то есть некоторые запросы мы можем делать толко с ними
    request.open('GET', 'js/current.json');
    request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
    request.send(); //Здесь нам надо вписать данные, которые приодят или уходят на сервер
    // Итак, мы отправили запрос. Теперь нам надо с ним что-то делать
    //status для проверки нашего запроса. Статус нам будет показываться в виде цифр. гуглим какое чило что значит
    //statusText тоже самое только в словах
    //response ответ, который мы должны использовать
    //readyState - текущее состояние нашего запроса. Ответ получаем в цифрах или словах. Опять же гуглим
    request.addEventListener('readystatechange', ()=>{
        if(request.readyState === 4 && request.status === 200){
            console.log(request.responseText);
            const data = JSON.parse(request.responseText);
            inputUsd.value = +inputRub.value / data.current.usd;
        }  else {
            inputUsd.value = "error";
        } 
    });
    //Итак, загуглив цифорки, мы создали условие, при котором когда все ок нам будет отсылаться неотформатированный json файл
    //Осталось только отформатировать в js, чтобы могли с ним работать

});