'use strict';

function hello(){
    console.log("hello");
}
hello();

function repeat (a, b){
    console.log(a);
    console.log(b);
}

const list = ["Valery", "valera", "someone"];

repeat(list[0], list[1]);

const arr = [1, 14, 33, 1203, 321],
      sorted = arr.sort(compareNum);
console.log(sorted);

function compareNum (a, b){ 
    return a - b;
}


//Это простой код для теста дебаггера. Дебаггер находится в браузере
//Он помогает понять как работает наш код, тем самым отловив ошибки 
//Короче, маст хев штука