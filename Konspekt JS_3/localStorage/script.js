'use strict';

const checkbox = document.querySelector('#checkbox');
const form = document.querySelector('form');
const change = document.querySelector('#color');
const body = document.querySelector('body');

checkbox.addEventListener('change', function (e) {
    localStorage.setItem('isChecked', true);
});

if (localStorage.getItem('isChecked') === true) {
    checkbox.checked = true;
}

if (localStorage.getItem('bg') === 'changed') {
    body.style.backgroundColor = 'black';
}

change.addEventListener('click', () => {
    if (localStorage.getItem('bg') === 'changed') {
        localStorage.removeItem('bg');
        body.style.backgroundColor = 'white';
    } else {
        localStorage.setItem('bg', 'changed');
        body.style.backgroundColor = "black";
    }
})