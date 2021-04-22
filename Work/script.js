'use strict';
// let object = {
//     auto: false,
//     uplayCode: 3245,
//     Name: "Ronix",
// };
// console.log (object.Name);

// let OBject = ["Ronix", 23453, false, "orange.png"]
// console.log (OBject[3])

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

// let personalMovieDB = {
//     count: 22,
// };
// function calc(va, ga) {
//     return (va + ga);
// }
// console.log(calc(personalMovieDB.count, " movies have been watched"));
// console.log(calc(5, 6));

// function showSmt(a) {
//     console.log(a)
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


let arr = [1, 2, 3, "lockdown"];

arr.forEach(function(elem, index, arr){
    console.log(`${elem} имеет значение ${index} и находится в ${arr}`);
});
arr.push("lockdown");
console.log(arr);

// let goods = prompt("Напишите сюда товары", "");
// let products = goods.split(", ");
// console.log(products);

const objec = {
    a: 1,
    b: 23,
    c: 38
};

function copying(mainObj) {
    let newObj = {};

    let key;
    for(key in mainObj){
        newObj[key] = mainObj[key];
    }
    return newObj;
}

let newObjec = copying(objec);
newObjec.c = 44;
console.log(objec);
console.log(newObjec);

function slova(main, second){
    for(let i = 1; i <= 3; i++){
        console.log(main + second);
    }
    return(main + second);
}

slova("Valera", "Nossov");

// let soldier = {
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


let soldier = {
    health: 100,
    armor: 150,
    damage: 30,
    SayEmotion: function emotion() {
        console.log("Let's roll!");
    }
};
let soldier1 = {
    health: 50,
}; 

Object.setPrototypeOf(soldier1, soldier);
console.log(soldier1.armor);
soldier1.SayEmotion();

let soldier2 = Object.create(soldier);
soldier2.SayEmotion();

// To string
// 1)
console.log(typeof(String(56)));
//2)
console.log(typeof(5 + '6'));
// To Number
//1)
console.log(typeof(Number("sdsd")));
//2)
console.log(typeof(+"6"));
//3)
console.log(typeof(parseInt(5 + "6")));
// To boolean
//1)
// 0, null, NaN, undefined, "", = false
console.log(typeof(Boolean(0)));
console.log(typeof(!!0));