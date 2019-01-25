
var name = prompt("Как тебя зовут ? ");
var year = +prompt("Какого ты года рождения? ");
var current_year = new Date().getFullYear();


console.log(year, current_year - year);
alert("Задание 2");
alert("Првиет, " + name + " "+ (current_year - year));