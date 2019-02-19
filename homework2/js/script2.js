alert("Задание 3.1");

var year = +prompt("Сколько лет ? ");
var is_smocker = confirm("Куришь ?");

if ((year < 18) && (is_smocker == false)){
    alert("Так держать!");
}
else if((year < 18) && (is_smocker == true)){
    alert("Маме расскажу!");
}
else if((year >= 18) && (is_smocker == false)){
    alert( "Молодец, и не надо" );
}
else{
    alert("Ну и зря");
}

alert("Задание 3.2");
var name = prompt("Как тебя зовут ?");
var year = +prompt("Сколько лет ? ");
var is_smocker = confirm("Куришь ?");
var year_on_display;

if((year > 4 && year < 20) || ((year % 10 >= 5) || (year % 10 === 0))) {
    year_on_display = " " + year + "лет";
}
else if ((year === 1) || (year % 10 === 1)){
    // +god
    year_on_display = " " + year + " год";
}
else{
    year_on_display = " " + year + "года";
}

if ((year < 18) && (is_smocker == false)){
    
        alert(name + ", " + year_on_display + " так держать! " );
    
}
else if((year < 18) && (is_smocker == true)){
    alert(name + ", " + year_on_display + " маме расскажу!");
}
else if((year >= 18) && (is_smocker == false)){
    alert(name + ", " + year_on_display + " молодец, и не надо" );
}
else{
    alert(name + ", " + year_on_display + " ну и зря");
}


alert("Задание 3.3");

var a = prompt("Введите число ");
var result = a.split("").reverse().join("");

alert(result);
