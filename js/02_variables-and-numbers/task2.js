//Площадь прямоугольника

let x1 = 8;
let y1 = 1;
let x2 = 5;
let y2 = 1;

let x = x2 - x1;
let y = y2 - y1;

console.log(Math.abs(x) * Math.abs(y));


//Научиться округлять и надёжно сравнивать дробные части чисел с помощью console.log

let a = 13.890123;
let b = 2.891564;
let c = 3;

//Выводим дробные части чисел

let number1 = Math.floor(a % 1 * Math.pow(10, c));
let number2 = Math.floor(b % 1 * Math.pow(10, c));
console.log (number1);
console.log (number2);

console.log (number1 === number2);
console.log (number1 != number2);
console.log (number1 >= number2);
console.log (number1 <= number2);
console.log (number1 > number2);
console.log (number1 < number2);

//Написать генератор нечётных случайных чисел в диапазоне между n и m включительно.

let f = -3;
let m = -10;

let min = Math.min (f, m);

let range = Math.abs(Math.min (f, m) - Math.max (f, m));
let numberInRange = (Math.round(Math.random( ) * (range - 2))) + min;
let result = numberInRange + (numberInRange % 2) + 1;

console.log(result)
