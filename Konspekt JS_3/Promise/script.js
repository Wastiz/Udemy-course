'use strict';

console.log('requesting data');

setTimeout(() => {
    console.log('loading...');
    const good = {
        name: 'TV',
        price: '200 bucks'
    };
    setTimeout(() => {
        good.status = 'ordered';
        console.log(good);
    }, 2000);
}, 2000);

//Это обычные колбек функции, которые выполняются друг за другом. Но они могут разростаться пиздец как
//Поэтому придумали promise чтобы упростить понимание написанного

const req = new Promise(function(resolve, reject){ //resolve это когда что-то выполнилось правильно. Reject значчит, что нашеобещание не выполнилось
    setTimeout(() => {
        console.log('loading...');
        const good = {
            name: 'TV',
            price: '200 bucks'
        };
        resolve(good);
    }, 2000);
});
req.then((good)=> {
     const req2 = new Promise(function(resolve, reject){
        setTimeout(() => {
            good.status = 'ordered';
            console.log('ordering...');
            resolve(good);
        }, 2000);
     });
     req2.then((good)=> {
        console.log(good);
     });
});