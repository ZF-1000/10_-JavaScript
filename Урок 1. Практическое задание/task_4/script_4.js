"use strict";

/* имя переменной должно начинаться с буквы, подчёркивания или знака $.
Потом может следовать любое количество букв, цифр, подчеркиваний и знаков $.
*/

let mode = "normal";
console.log(typeof(mode));
// корректное имя переменной. Тип string

let my_valu3 = 102;
console.log(typeof(my_valu3));
// корректное имя переменной. Тип number

let 3my_valu3 = "102";
console.log(typeof(3my_valu3));
// некорректное имя переменной (начинается с цифры)

let __hello__ = "world";
console.log(typeof(__hello__));
// корректное имя переменной. Тип string

let $$$ = "money";
console.log(typeof($$$));
// корректное, но неинформативное имя переменной. Тип string

let !0_world = true;
console.log(typeof(!0_world));
// некорректное имя переменной (начинается со спецсимвола)