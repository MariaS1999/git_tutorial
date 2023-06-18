"use strict";

let number1 = +prompt("number 1?");
let number2 = +prompt("number 2?");

function pow(number1, number2) {
  let result = 1;
  for(let i = 1; i <= number2; i++) {
    result = result * number1;
  }
  return result;  
}

alert(pow(number1, number2));