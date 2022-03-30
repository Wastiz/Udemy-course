'use strict';

const p = document.querySelectorAll('p');
console.log(p);

// defer дает продолжать странице загружаться
// несмотря на то, что тег помещен раньше. Скрипт обрабатывается в фоновом режиме
// и когда страница загрузится, только тогда пойдет скрипт
//И даже если подключены несколько скриптов разных размеров. defer будет запускать их поочередно


// Также есть async
// Он ни от кого не зависит. Как загрузился, так и запустился. Его можно использовать, если он не зависит от дом дерева

const script = document.createElement('script');
script.src = 'test.js';
document.body.append(script);

// Можно динамически вставлять скрипты но они по умолчанию async

script.async = false;

//Но можно вот так это избежать
function loadScript (src){
    const script = document.createElement('script');
    script.src = src;
    script.async = false;
    document.body.append(script); 
}

loadScript('test.js');