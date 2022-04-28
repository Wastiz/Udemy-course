'use strict';

//Классы грубо говоря это красивые функции конструкторы

class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;

    }
    calcArea() {
        return this.height * this.width;
    }
}
// Вот такой вот синтаксис. Обязательно название класса с большой буквы и точки с запятыми не ставим
const square = new Rectangle(10, 10);
console.log(square.calcArea());
// Все также работает. В класс мы передаем какие-то свойства.
// А когда создаем объект, он принимает эти свойства и иожет принять методы

class ColoredRectangle extends Rectangle{
    constructor(height, width, text, color){
        super(height, width);
        this.text = text;
        this.color = color;
    }
    showMyProps(){
        console.log(`text ${this.text} and color ${this.color}`);
    }
}
const anotherSquare = new ColoredRectangle(20, 30, 'Some text', 'black');
anotherSquare.calcArea();
anotherSquare.showMyProps();