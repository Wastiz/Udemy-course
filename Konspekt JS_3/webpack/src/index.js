'use strict';

function myModule () {
    this.hello = function(){
        console.log('hello');
    };

    this.goodbye = function() {
        console.log('goodbye');
    };
}

module.exports = myModule; //Таким образом мы сохранили модуль с кодом и теперь можем использовать в других js файлах

//Это пример сохранения модуля с commonJS