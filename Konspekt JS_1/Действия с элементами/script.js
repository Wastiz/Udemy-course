'use strict';

const box = document.querySelectorAll('.box'),
      btns = document.getElementsByTagName('button'),
      circles = document.getElementsByClassName('circle'),
      wrapper = document.querySelector('.wrapper'),
      hearts = document.querySelectorAll('.heart'),
      oneHeart = wrapper.querySelector('.heart');

//Мы можем получать элементы ТОЛЬКО из определенного родителя, которого объявили до


box[0].style.backgroundColor = 'blue';
box[0].style.width = '500px';

// К элементам можно добавлять или изменять стили
// Когда мы приписываем какой-то стиль, то мы должны это делать по синтаксису css

function forEac (item, key){
    for (key of item){
        item[key] = key.style.borderRadius = '40px';
    }
    return key;
}
forEac(btns);

//Не забываем указывать элемент или применять ко всему псевдомассиву
let num = 500;
box[0].style.cssText = `background-color: blue; width: ${num}px`;

//Таким методом изменяем стиль элемента в виде цсс текста

// for (let i = 0; i < hearts.length; i++){
//     hearts[i].style.backgroundColor = "blue";
// }

hearts.forEach(item => {
    item.style.backgroundColor = "blue";
});

// Как мы помним первый аргумент это каждый элемент массива
// Второй это номер по порядку, а третий это ссылка на массив

const div = document.createElement('div');
const text = document.createTextNode('Here I am');
// Создаем новые элементы. Но они пока не появляются на странице

div.classList.add('black'); //Добавляем класс прямо в тег
//Определяем куда поместить его:
document.body.append(div); //В самый конец body
wrapper.append(div); //В самый конец родителя. Только его нужно объявить в переменной
document.querySelector('.wrapper').append(div); //Ну или так
wrapper.prepend(div); //В самое начало родителя
hearts[0].before(div); //До назначенного элемента
hearts[0].after(div); // После назначенного элемента
circles[1].remove(); //Удаляем элемент
hearts[0].replaceWith(circles[0]); //Заменяем элемент. Прописываем элемент, который хотим заменить другим. Первый исчезает


div.innerHTML = "<h1>Hello world</h1> <p>hahahaha</p> <button>Here</button>";
//Этим методом можно вставлять целые хтмл структуры
div.textContent = "text content";
// Это просто текстовый контент
// Его мы используем когда хотим получить данные от пользователя и применить их потом


//Вставляем ХТМЛ код:
div.insertAdjacentHTML('beforebegin', '<h2>Hello</h2>'); // До прописанного элемента
div.insertAdjacentHTML('afterbegin', '<h2>Hello</h2>'); // В начало прописанного элемента
div.insertAdjacentHTML('beforeend', '<h2>Hello</h2>'); // В конец прописанного элемента
div.insertAdjacentHTML('afterend', '<h2>Hello</h2>'); // После прописанного элемента

