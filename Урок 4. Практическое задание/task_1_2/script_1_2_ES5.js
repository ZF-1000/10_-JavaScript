"use strict";

/*
Задание №1.1.
Сделайте в стиле es5, а затем в стиле es6 (по аналогии из урока), конструктор Product, который принимает параметры name и price, сохраните их как свойства объекта. Также объекты типа Product должны иметь метод make25PercentDiscount, который будет уменьшать цену в объекте на 25%.
*/


// -----------------В СТИЛЕ ES5-----------------

// базовый конструктор
function Post(author, text, date) {
    this.author = author;
    this.text = text;
    this.date = date;
}

// метод конструктора-прототипа
Post.prototype.edit = function (text) {
    this.text = text;
}

// наследственный конструктор
function AttachedPost(author, text, date) {
    Post.call(this, author, text, date);
    this.highlighted = false;
}



AttachedPost.prototype = Object.create(Post.prototype);
// осуществляем независимое наследование (связи между объектами нет)
// в Post.prototype лежит метод edit и мы хотим им пользоваться в объектах типа AttachedPost
AttachedPost.prototype.constructor = AttachedPost;
// явно говорим, что объекты AttachedPost.prototype будут создаваться с помощью: AttachedPost

// метод наследственного конструктора
AttachedPost.prototype.makeTextHighlighted = function() {
    this.highlighted = true;
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