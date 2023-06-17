"use strict";

let userName = prompt("Введите имя");
let password;

if (userName === "Админ") { 
    password = prompt("Пароль");
    password === "Я Главный" ?
        alert("Здравствуйте") :
        password === null ?
            alert("Отменено") :
            alert("Неверный пароль") 
} else if (userName === null) {
    alert("Отменено")
} else {
    alert("Я вас не знаю")
}
