'use strict';

const myModule = require('./index'); //Все просто. мы получили модуль из предыдущего js файла. В скобках путь к файлу

const myModuleInstance = new myModule();//Тут мы создаем новую переменную с данными этого модуля

myModuleInstance.hello();
myModuleInstance.goodbye();

//НО...  Браузер не умеет собирать все эти файлы. Ему до лампочки, что за require и тому подобное.
//Поэтому нужно использовать сборщик. Самым популярным является webpack