"use strict";

/* function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Родители разрешили?');
  }
} */

let age = +prompt("age?");

function checkAge(age) {
  return age > 18 ? true : confirm('Родители разрешили?');
}

checkAge(age);