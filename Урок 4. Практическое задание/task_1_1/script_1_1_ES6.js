"use strict";

/*
Задание №1.1.
Сделайте в стиле es5, а затем в стиле es6 (по аналогии из урока), конструктор Product, который принимает параметры name и price, сохраните их как свойства объекта. Также объекты типа Product должны иметь метод make25PercentDiscount, который будет уменьшать цену в объекте на 25%.
*/


// -----------------В СТИЛЕ ES6-----------------

// В JS классов не существует!!! Это всего лишь синтаксический сахар.

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    // make25PercentDiscount - это НЕ метод самого объекта, это метод прототипа
    make25PercentDiscount(discount) {
        this.price = this.price - (this.price / 100 * discount);
    }
}

const products = [
    new Product('товар1', 300), 
    new Product('товар2', 500),
    new Product('товар3', 200)
];

for (let product of products) {
    product.make25PercentDiscount(25);
}

console.log(products);

/*
0: Product {name: "товар1", price: 225}
1: Product {name: "товар2", price: 375}
2: Product {name: "товар3", price: 150}
*/