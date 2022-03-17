'use strict';

console.log(document.body);

//Это просто получаем теги

console.log(document.documentElement);

//Это мы получаем тег html

//Также можем получить родительский тег, в котором содержится другой элемент

console.log(document.body.childNodes);

//Это способ получения дочерних элементов
//Здесь мы получаем вот такой псевдомассив
// NodeList(6) [text, button, text, div.wrapper, text, script]
// text это перенос строки ну или просто текст

console.log(document.body.firstChild);
console.log(document.body.lastChild);

//Тут все понятно. Мы просто получаем первый и последний элемент

console.log(document.querySelector('button').parentNode);
console.log(document.querySelector('button').parentElement);

//таким образом мы можем получить родителя элемент, в котором он находится. такую команду можно дублировать

console.log(document.querySelector('[data-current="3"]').nextSibling);
console.log(document.querySelector('[data-current="3"]').previousSibling);

//Таким образом мы получаем следующий или предыдущий элемент html по атрибуту элемента

console.log(document.querySelector('[data-current="3"]').nextElementSibling);
console.log(document.querySelector('[data-current="3"]').previousElementSibling);

//Это чтобы не попастся на узлы структуры вроде text


for (node of document.body.childNodes){
    if (node.nodeName == "#text"){
        continue;
    }
    console.log(node);
}

//Так как forEach в некоторых случиях может не работать, то можно применять конструкцию for of







