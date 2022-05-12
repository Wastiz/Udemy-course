//API - application programming interface
//Апи это готовое решение/программа/данные, которое мы можем использовать.
//например, до этого мы использовали DOM api. мы обращались к документу, у которого по умолчанию были какие параметры
//Fetch api это очень удобный метод получения этих апи, которое тоже втроено в браузере
//Снйчас мы будем использовать один ресурс. Называется он JSONplaceholder. Это сайт, на котром мы можем протестить код. Он просто будет показывать что код у нас работает
//Возьмем от туда конструкцию


fetch('https://jsonplaceholder.typicode.com/todos/1') //В скобках прописывается юрл, с которым будеи работать   
  .then(response => response.json()) //тут у нас промис синтаксис, в котором мы получаем респонс в JSON формате и в этой же строке форматируем в js объект
  .then(json => console.log(json));

//Сейчас мы произвели обычный гет запрос

fetch('https://jsonplaceholder.typicode.com/posts', { // Обратите внимание, что здесь я выбрал адрес с постами
    method: 'POST',
    body: JSON.stringify({
      name: 'alex'
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  }) //Для того, что использовать другие методы нам нужно поднастроить fetch. На самом деле тут может быть больше параметров, но основные это вот эти два
  .then(response => response.json())
  .then(json => console.log(json));

//Сейчас будет прописываться код для cookle. если что этот формат можно перенести в проект и все будет работать как надо

fetch('server.php', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: formData
}).then(data => {
  console.log(data);
  showThanksModal(message.success);
  statusMessage.remove();
}).catch(() => {
  showThanksModal(message.failure);
}).finally(() => {
  form.reset();
});