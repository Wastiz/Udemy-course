'use strict';

// let object = {
//     auto: false,
//     uplayCode: 3245,
//     Name: "Ronix",
// };
// console.log (object.Name);

// let OBject = ["Ronix", 23453, false, "orange.png"];
// console.log (OBject[3]);

// const answer = +prompt("Do you have 18?","18");
// console.log(answer + 10);

// let answers = [];
// answers[1] = prompt("How are you?", "");
// answers[2] = prompt("How old are you?", "");
// document.write(answers);
// console.log(answers[0]);
// let user = "valera";
// alert(`Hello, ${user}`);


// console.log (121 === "60");

// // Условия

// let decl = 11;
// let incr = 9;
// console.log(++incr);
// console.log(--decl);
// let js = +prompt("write number 50", "");
// if(js == 50){
//     console.log("ok!");
// } else if (js > 50){
//     console.log("not ok!");
// } else {
//     console.log("not ok!");
// }

// switch (js) {
//     case 49:
//     console.log("not ok");
//     break;
//     case 51:
//      console.log("not ok");
//      break;
//      case 50:
//          console.log("ok");
// }
// for (let i = 1; js < 55; i++) {
//     console.log(js);
//     js++;
//     if (js == 55){
//         console.log("ok");
//     }
// } 

// //Функции
// let personalMovieDB = {
//     count: 22,
// };
// function calc(va, ga) {
//     return (va + ga);
// }
// console.log(calc(personalMovieDB.count, " movies have been watched"));
// console.log(calc(5, 6));

// function showSmt(a) {
//     console.log(a);
// }

// showSmt("haha");
// showSmt("hoho");
// showSmt(9+9);

// let fun = (a, b) => a + b;

// console.log(fun(1,2));

// const logg = "Hello World!";
// console.log(logg.slice(6, 11));

// let object = {
//     name: "Valery",
//     width: 1000,
//     privat: true,
//     colors: {
//         bg: "red",
//         text: "blue",
//     }
// };
// for (var key in object) {
//     // этот код будет вызван для каждого свойства объекта
//     // ..и выведет имя свойства и его значение
//   if(typeof (object[key]) === `object`) {
//       for(let i in object[key])
//   }
//     console.log( "Ключ: " + key + " значение: " + object[key] );
//   }
// const {bg, text} = object.colors;
// console.log("Цвет заднего фона", bg);


// let arr = [1, 2, 3, "lockdown"];

// arr.forEach(function(elem, index, arr){
//     console.log(`${elem} имеет значение ${index} и находится в ${arr}`);
// });
// arr.push("lockdown");
// console.log(arr);

// let goods = prompt("Напишите сюда товары", "");
// let products = goods.split(", ");
// console.log(products);

// const objec = {
//     a: 1,
//     b: 23,
//     c: 38
// };

// function copying(mainObj) {
//     let newObj = {};

//     let key;
//     for(key in mainObj){
//         newObj[key] = mainObj[key];
//     }
//     return newObj;
// }

// let newObjec = copying(objec);
// newObjec.c = 44;
// console.log(objec);
// console.log(newObjec);

// function slova(main, second){
//     for(let i = 1; i <= 3; i++){
//         console.log(main + second);
//     }
//     return(main + second);
// }

// slova("Valera", "Nossov");

//  let soldier = {
//    health: 100,
//    armor: 150,
//    damage: 30,
//    activity: function regen(){
//        for(let health = 1; health <= 100; health++){
//        if (health < 100) {
//           setTimeout(console.log("Hp regened"),);
//        }
//     }
//    }
// };
// soldier.health = 50;
// soldier.activity();


// let soldier = {
//     health: 100,
//     armor: 150,
//     damage: 30,
//     SayEmotion: function emotion() {
//         console.log("Let's roll!");
//     }
// };
// let soldier1 = {
//     health: 50,
// }; 

// Object.setPrototypeOf(soldier1, soldier);
// console.log(soldier1.armor);
// soldier1.SayEmotion();

// let soldier2 = Object.create(soldier);
// soldier2.SayEmotion();



// //Передача типов
// // To string
// // 1)
// console.log(typeof(String(56)));
// //2)
// console.log(typeof(5 + '6'));
// // To Number
// //1)
// console.log(typeof(Number("sdsd")));
// //2)
// console.log(typeof(+"6"));
// //3)
// console.log(typeof (parseInt(5 + "6")));
// // To boolean
// //1)
// // 0, null, NaN, undefined, "", = false
// console.log(typeof (Boolean(0)));
// console.log(typeof (!!0));



//РАБОТА С ЭЛЕМЕНТАМИ СО СТРАНИЦЫ

//const btn = document.querySelectorAll("button"); //Выбирает все то, что указываешь
const btns = document.querySelector(".button");
const wrapper = document.querySelectorAll(".wrapper");
const circle = document.querySelectorAll(".circle");
const text = document.querySelector("p"); //Выбирает первый элемент 
const h1 = document.getElementById("h1"); //Ну тут и так все понятно
const shape = document.getElementById("shape");
const btns1 = document.getElementsByTagName("button"); //Выбирает все элементы тега
const hearts = document.getElementsByClassName("heart"); //Выбирает все элементы этого класса(они переходят в массив)


//изменение css значений


// btns[0].style.color = "green";
// btns[0].style.width = "300px";
// btns[0].style.height = "150px";

// shape.style.width = "300px";
// shape.style.backgroundColor = "red";
// btns[0].style.cssText = 'color: violet; width: 300px';

//Это для одного элемента. Его нужно выбирать. Чтобы одно и то же свойство указать нескольким элементам надо:

// for(let i = 0; i < btns.length; i++) {
//     btns[i].style.cssText = "color: black; width: 100px";
// }

// btns.forEach(elem => {
//     elem.style.cssText = "color: black; width: 100px";
// });  //Это чтобы изменения применялись ко всем элементам

//Создание новых элементов

//const textNode = document.createTextNode("Something");

const div = document.createElement("div");
div.classList.add("black");
// document.body.append(div); //Элемент появляется в конце body
// wrapper.apend(div); //Элемент появляется после прописанного элемента
// wrapper.prepend(div); //Элемент появляется до прописанного элемента
//hearts[0].before(div); //Элемент вставляется перед прописанным в начале элементом
//hearts[0].after(div); //Элемент вставляется после прописанного в начале элемента
//circle[0].remove(); //тут все ясно
//circle[0].replaceWith(hearts[0]); //Вставляет начальный элемент вместо элемента в конце

// wrapper.insertBefore(div, hearts[0]); //Старый метод before
// wrapper.insertAfter(div, hearts[0]); //Старый метод after

// div.innerHTML = "<h1>Hello World</h1>"; //Маст хэв команда добавляет в Элемент любую html структуру
// div.textContent = "hello"; //Добавляет в элемент только текст. Нужен для безопасности
// div.insertAdjacentHTML("beforebegin", "<h2>hello</h2>"); //вставляет html код прямо перед элементом
// div.insertAdjacentHTML("afterbegin", "<h2>hello</h2>"); //вставляет html код в начало элемента
// div.insertAdjacentHTML("beforeend", "<h2>hello</h2>"); //вставляет html код в конец элемента
// div.insertAdjacentHTML("afterend", "<h2>hello</h2>"); //вставляет html код прямо после элемента


//События (очень важно)

//Обычный клик

// btns.onclick = function() {
//     alert("click");
// };

// лучше не использовать

// btns.addEventListener("click", () => {
//     btns.style.color = "yellow";
// });

// btns.addEventListener("mouseenter", (e)=> {
//      e.target.remove();
// });

//target - элемент, на котором происходят все события

//также можно создавать функции, а потом их задавать слушателю

let i = 0;
const deleteElement = (e) => {
     console.log(e.target);
     i++;
     if (i == 1) {
          btns.removeEventListener('click, deleteElement');
     }
};

btns.addEventListener('click', deleteElement);

//Чтобы браузер не использовал стандартные поведения

const link = document.querySelector('a');

link.addEventListener('click', function(e){
     e.preventDefault();
     console.log(e.target);
});


//Для того, чтобы навесить слушателя на много элементов надо:

// wrapper.forEach(item => {
//      item.addEventListener('click', function(){
//           console.log("I love you");
//      });
// });

function love() {
     console.log("I love you");
}

wrapper.forEach(item => {
     item.addEventListener('click', love, {once: true});
});

// Навигация по DOM
console.log(document.head);
console.log(document.documentElement);

//события на мобилках
//addEventListener(//"touchstart" выполняется действия при касании
                 //'touchmove' выполняется дествие при нажатии и дальнейшем ведении
                 //'touchend' как только оторвался от экрана, выполяется дествие
                 //'touchenter' как только палец зашел за пределы элемента
                 //'touchleave' как только палец вышел за элемент
                 //'touchcancel' когда не регается касание

document.addEventListener("DOMContentLoaded", function(){

});

//Динамические скрипты

const script = document.createElement("script");
script.src = "dynamicScript.js";
document.body.append(script);
