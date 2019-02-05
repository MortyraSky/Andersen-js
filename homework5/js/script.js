// написать программу, которая:
// - запросит количество элементов у пользователя
// - запросит ввод всех элементов 
// - выведет минимальное, максимальное значение и сумму элементов
// вычисление организовать в виде функций 
alert("Задание 5")

var a;
var size;
function readSize(){
    size = +prompt("Введите размерность массива");
}

function createArray(size){
    a = new Array(size);
    console.log(a.length);

}

function addElement(){
    createArray(size);
    for(var i = 0; i < a.length; i++){
        a[i] = +prompt("Введите " + i  + " элемент: ");
    }

}

function showMin(){
    var min = a[0];
    for(var i = 0; i < a.length; i++){
        if(min > a[i]){
            min = a[i];
        }
    }
    alert("Минимальный элемент: " + min);
}

function showMax(){
    var max = a[0];
    for(var i = 0; i < a.length; i++){
        if(max < a[i]){
            max = a[i];
        }
    }
    alert("Максимальный элемент: " + max);

}

function sum(){
    var result = 0;
    
    for(var i = 0; i < a.length; i++){
        result += a[i];
    }

    alert("Сумма элементов массива: " + result);

}


readSize();
addElement();
showMin();
showMax();
sum();

console.log(arr);

