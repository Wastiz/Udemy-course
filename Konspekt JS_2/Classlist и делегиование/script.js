const btns = document.querySelectorAll("button");
const wrapper = document.querySelector('.wrapper');

console.log(btns[0].classList.length);
console.log(btns[0].classList.item(1));
// item() - это метод, который позволяет выбрать класс из элемента
console.log(btns[0].classList.remove("blue"));
console.log(btns[1].classList.add("blue"));
// remove() - убирает класс у элемента. В скобках писать соответствующий класс
// add() - добавляет класс к элементу. В скобках писать соответствующий класс
console.log(btns[2].classList.toggle('some'));
// toggle() - добавляет или убирает соответствующий класс
// Кстати, ко всем методам можно добавлять или убирать несколько классов

if (btns[0].classList.contains('red')) {
    console.log('red');
}

btns.forEach(item =>{
    item.addEventListener('click', function(event){
        if(event.target.classList.contains('red')){
            event.target.classList.remove('red');
        } else {
            event.target.classList.add('red');
        }
    });
});

//делегирование - это когда что то навешивается на все элементы, даже днамически созданные
// Это можно делать разными способами, внизу показан метод через родителя элементов

wrapper.addEventListener('click', function(event){
    console.dir(event.target);
    if (event.target && event.target.tagName == "BUTTON") {
        console.log('hello');
    } else {
        console.log('not a button');
    }
})

const btn = document.createElement('button');
btn.classList.add('somne');
wrapper.append(btn);

// Делегирование работает
// Еще один способ

wrapper.addEventListener('click', function(event){
    console.dir(event.target);
    if (event.target && event.target.matches('button.red')) {
        console.log('hello');
    } else {
        console.log('not a button');
    }
})

