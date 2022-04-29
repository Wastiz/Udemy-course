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
});