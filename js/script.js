"use strict";

let input = prompt('Number'); // 0 .. 999 245
console.log(getObject(input));

function checkType(str) {
  if (Boolean(Number(str))) {
    return Number(str);
  } else {
    alert("Вы ввели не число");
  }
}

function checkValue(num) {
  if (checkType(num)) {
    if ((num >= 0) && (num < 1000)) {
      return num;
    } else {
      alert("Неверное число");
    }
  }
}

function getObject(num) {
  let objectNum = {};
  let rem, div, count = 1;
  div = checkValue(num);
  if (div) {
    while (div != 0) {
      rem = div % 10;
      if (count === 1) {
        objectNum["единиц"] = rem;
      } else if (count === 2) {
        objectNum["десятков"] = rem;
      } else {
        objectNum["сотен"] = rem;
      }
      div = Math.trunc(div / 10);
      count++;
    } 
    return objectNum;
  }
}
