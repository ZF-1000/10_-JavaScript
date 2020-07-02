"use strict";

/*
Задание №1.1.
Сделайте в стиле es5, а затем в стиле es6 (по аналогии из урока), конструктор Product, который принимает параметры name и price, сохраните их как свойства объекта. Также объекты типа Product должны иметь метод make25PercentDiscount, который будет уменьшать цену в объекте на 25%.
*/


// -----------------В СТИЛЕ ES6-----------------


class Post {
    constructor(author, text, date) {
        this.author = author;
        this.text = text;
        this.date = date;
    }
    // edit - это НЕ метод самого объекта, это метод прототипа
    edit(text) {
        this.text = text;
    }
}


// AttachedPost наследуется от Post
class AttachedPost extends Post {
    constructor(author, text, date) {
        super(author, text, date);
        this.highlighted = false;
    }

    makeTextHighlighted () {
        this.highlighted = true;
    }
}


const post1 = new Post('Alex', 'post text', 2019);
console.log(post1); // {author: "Alex", text: "post text", date: 2019}
post1.edit('text from edit');
console.log(post1); // {author: "Alex", text: "text from edit", date: 2019}


const attachedPost1 = new AttachedPost('attached autor', 'attached text', 2020);
console.log(attachedPost1); 
// {author: "attached autor", text: "attached text", date: 2020, highlighted: false}
attachedPost1.makeTextHighlighted();
attachedPost1.edit('attached text from edit');
console.log(attachedPost1);
// {author: "attached autor", text: "attached text from edit", date: 2020, highlighted: true}
