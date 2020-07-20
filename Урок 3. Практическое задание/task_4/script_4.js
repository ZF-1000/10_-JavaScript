"use strict";

/*
Задание №4.
Перед вами находится массив с продуктами, сегодня распродажа и вам нужно на каждый товар применить скидку 15%, можете использовать метод forEach
*/

const products = [{
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
];


console.log("Цены до использования 15% скидки");
products.forEach(elem => {
    console.log(elem.price)
});

console.log("\n<< С К И Д К А !!! >>");
console.log("Цены после использования 15% скидки");
products.forEach(elem => {
    console.log(elem.price * 0.85)
});