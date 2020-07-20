"use strict";

/*
Задание №4.
Реализовать основные 4 арифметические операции (+, -, /, *) в виде функций с двумя параметрами. Т.е. например, функция для сложения должна принимать два числа, складывать их и возвращать результат.
Обязательно использовать оператор return.
*/

/**
 * Функция складывает параметр "x" с параметром "y"
 * @param {number} x
 * @param {number} y
 * @returns {number}
 */
function add_numbers(x, y) {
    return console.log(`${x} + ${y} = ${x + y}`);
}

/**
 * Функция из параметра "x" вычитает параметр "y"
 * @param {number} x
 * @param {number} y
 * @returns {number}
 */
function subtract_numbers(x, y) {
    return console.log(`${x} - ${y} = ${x - y}`);
}

/**
 * Функция делит параметр "x" на параметр "y"
 * @param {number} x
 * @param {number} y
 * @returns {number}
 */
function divide_numbers(x, y) {
    return console.log(`${x} / ${y} = ${x / y}`);
}

/**
 * Функция умножает параметр "x" на параметр "y"
 * @param {number} x
 * @param {number} y
 * @returns {number}
 */
function multiply_numbers(x, y) {
    return console.log(`${x} * ${y} = ${x * y}`);
}

let a = parseInt(prompt("Введите a:"));
let b = parseInt(prompt("Введите b:"));

add_numbers(a, b);
subtract_numbers(a, b);
divide_numbers(a, b);
multiply_numbers(a, b);
