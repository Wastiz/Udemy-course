'use strict';

const data = [
    {
        id: 'box',
        tag: 'div'
    },
    {
        id: '',
        tag: 'nav'
    },
    {
        id: 'circle',
        tag: 'span'
    }
]

data.forEach(blockObj => {
    const block = document.createElement(blockObj.tag);

    if (!blockObj.id) throw new Error(`В данных под номером ${i + 1} нет id`);
    // В общем смысл этого всего, чтобы видеть будет ли ошибка 
    block.setAttribute('id', blockObj.id);
    document.body.append(block);
});

//Также можем создать переменную с ошибкой, чтобы потом использовать многократно