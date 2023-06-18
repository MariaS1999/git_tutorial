"use strict";

let number1 = +prompt("number 1?");
let number2 = +prompt("number 2?");

function min(number1, number2) {
  return number1 > number2 ? number2 : number1;
}

alert(min(number1, number2));