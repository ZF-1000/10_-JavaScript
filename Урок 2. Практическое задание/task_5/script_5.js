"use strict";

/*
Задание №5.
Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation),
где arg1, arg2 – значения аргументов, operation – строка с названием операции. В зависимости от
переданного значения операции (использовать switch) выполнить одну из арифметических операций
(использовать функции из задания 4) и вернуть полученное значение.
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


/**
 * Функция получает три параметра
 * @param {number} arg1 первое число
 * @param {number} arg2 второе число
 * @param {string} operation математическое действие ("+", "-", "/", "*")
 * @throws {Error} в случае непредусмотренной операции, будет выведено сообщение об ошибке
 * @returns {number}
 */
function math_operation(arg1, arg2, operation) {
    switch (operation) {
        case "+":
            return add_numbers(arg1, arg2);
        case "-":
            return subtract_numbers(arg1, arg2);
        case "/":
            return divide_numbers(arg1, arg2);
        case "*":
            return multiply_numbers(arg1, arg2);
        default:
            throw new Error("Операция " + operation + " не предусмотрена");
    }
}

let a = parseInt(prompt("Введите a:"));
let b = parseInt(prompt("Введите b:"));
let math_act = (prompt("Введите математическое действие ('+',   '-',   '/',  '*')"));

math_operation(a, b, math_act);
