const btn = document.querySelector("button");



const timer = setTimeout(function(){
    console.log('hello');
}, 2000);
// Самый базовый синтаксис этой функции
const time = setTimeout(function(text){
    console.log(text);
}, 2000, "Hello");
// Тоже самое только с переменной внутри функции

//const timerId = setTimeout(logger, 2000);
let i = 0;
let timerId;
function logger (){
    console.log("text");
    i++;
    if(i === 3){
        clearInterval(timerId);
    }

}

// Можно передавать готовые функции
// SetTimeOut создается в функции, чтобы потом мы могли ее вызвать, но можно и без переменной
// clearInterval(timerId);
// С этой функцией таймер не будет работать, а значит и функция. для этого как раз нужно знать переменную

btn.addEventListener('click', () => {
    //const timerId = setTimeout(logger, 2000);
    timerId = setInterval(logger, 2000);
});
clearInterval(timerId);

// С такой командой при нажатии на кнопку будет вызываться функция каждые две секунды
// Но с clearInterval Она не будет работать


let id = setTimeout(function log() {
    console.log('hello');
    id = setTimeout(log, 500);
}, 500);

function myAnimation (){
    const elem = document.querySelector('.box-header');
    let pos = 0;
    const id = setTimeout(frame, 1);
    function frame (){
        if(pos == 500){
            clearInterval(id);
        } else {
            pos++;
            elem.style.top = pos + 'px';
            elem.style.left = pos + 'px';
            console.log('1');
        }
    }
}

btn.addEventListener('click', myAnimation);