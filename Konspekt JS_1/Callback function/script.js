'use strict';

function doSomt (){
    setTimeout(function(){
        console.log('hello');
     }, 500);
}

function second (){
    console.log('2');
}

doSomt();
second();

//Как мы видим вторая функция сработала раньше
//Callback это метод, который позволяет не дать функции выполнятся, пока предыдущая еще не сработала

function learnJS(lang, сallback){
    console.log('hello');
    setTimeout(function(){
        сallback();
     }, 2000);
}

function done(){
    console.log('I have learned js');
}

learnJS('JS', done);

function learnJS(lang, сallback){
    setTimeout(function(){
        console.log('hello');
        сallback();
     }, 2000);
}

function done(){
    console.log('I have learned js');
}

learnJS('JS', done);

//Как мы видим, теперь все делается по порядку
//Callback используется как аргумент в функции и вызывается 
//Также когда мы вызываем функции вместо аргумента call back можно использовать другую функцию

function learnJava (lang, callback){
    console.log(`I learn ${lang}`);
    callback(function(){
        console.log('hahaha');
    });
}
learnJava('JS', function(){
    console.log('hahaha');
});
//Также когда мы вызываем функцию можно вместо аргумента для колбэк записать анонимную функцию






