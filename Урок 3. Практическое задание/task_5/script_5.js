"use strict";

/*
Задание №5.
Перед вами находится массив с продуктами в интернет-магазине. Вам нужно:
1. Получить все товары, у которых есть фотографии, можете использовать метод filter https://mzl.la/2qROQkT
2. Отсортируйте товары по цене (от низкой цены к высокой), можете использовать метод sort
https://mzl.la/2Y79hbZ , как устроен sort можно посмотреть например здесь https://youtu.be/O2pusOp0gC0
*/

const products = [{
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",
        ]
    },
    {
        id: 5,
        price: 499,
        photos: []
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg"
        ]
    },
    {
        id: 8,
        price: 78,
    },
];


console.log("id товаров с найденными фотографиями:");

// проверяем есть ли сам ключ "photo" && есть ли фото внутри
let exist_photo_products = products.filter(function (elem) {
    return elem.photos != undefined && elem.photos[0] != undefined
});

exist_photo_products.forEach(element => console.log(`id = ${element.id}`));
console.log(exist_photo_products);

console.log("Товары отсортированные по цене:");
console.log(products.sort((a, b) => a.price > b.price ? 1 : -1));
// console.log(products.sort()); // так тоже работает