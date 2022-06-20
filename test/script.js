'use strict';

const something = document.querySelector('div');
let left = 360;
function frame(i) {
    if (left > 80) {
        left--;
    } else {
        clearInterval();
        console.log('left done');
    }
}
something.addEventListener('mouseenter', function(e){
    if(e.target == something){
        something.style.border = '1px solid yellow';
        setInterval(frame, 1);
    }
});
something.addEventListener('mouseleave', function(e){
    if(e.target == something){
        something.style.border = '1px solid blue';
        clearInterval();
    }
});