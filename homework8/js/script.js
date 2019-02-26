// 1 на старте body содержит тока ui элементы 
// 2 добавить программно один блок div 100*100 с back-ground color
// ui содержит
// input + button(установить фон)
// влево, вправо, вверх, вниз по нажатию по кнопкам двигает элемент 


document.addEventListener('DOMContentLoaded', init);

function init(){
    document.getElementById("ins-div").innerHTML+='<div class="inserted-div"></div>';

    var add_block_btn = document.getElementById("add-button");
    add_block_btn.addEventListener('click', addBlocks);
    
    var up_block_btn = document.getElementById("up-button");
    up_block_btn.addEventListener('click', upBlocks);

    var down_block_btn = document.getElementById("down-button");
    down_block_btn.addEventListener('click', downBlocks);

    var left_block_btn = document.getElementById('left-button');
    left_block_btn.addEventListener('click', leftBlocks);

    var right_block_btn = document.getElementById('right-button');
    right_block_btn.addEventListener('click', rightBlocks);

    var change_color_btn = document.getElementById('submit-color');
    change_color_btn.addEventListener('click', changeColor);

}

function addBlocks(e){
    document.getElementById("ins-div").innerHTML+='<div class="inserted-div"></div>';

}

function upBlocks(e){
    var a = document.getElementsByClassName('inserted-div');
        for(var i = 0; i < a.length; i++){
            
            if(a[i].style.marginTop === ""){
                a[i].style.marginTop = "10px";
            }
            else{
                var lala = parseInt(a[i].style.marginTop);
                a[i].style.marginTop = (lala - 10) + "px";
            }                                  
            
            
        }

}

function downBlocks(e){
    var a = document.getElementsByClassName('inserted-div');
        for(var i = 0; i < a.length; i++){
            
            if(a[i].style.marginTop === ""){
                a[i].style.marginTop = "30px";
            }
            else{
                var lala = parseInt(a[i].style.marginTop);
                a[i].style.marginTop = (lala + 10) + "px";
            }                 
            
            
        }

}

function leftBlocks(e){
    var a = document.getElementsByClassName('inserted-div');
        for(var i = 0; i < a.length; i++){
            
            if(a[i].style.marginLeft === ""){
                a[i].style.marginLeft = "10px";
            }
            else{
                var lala = parseInt(a[i].style.marginLeft);
                a[i].style.marginLeft = (lala - 10) + "px";
            }                 
            
            
        }

}

function rightBlocks(e){
    var a = document.getElementsByClassName('inserted-div');
        for(var i = 0; i < a.length; i++){
            
            if(a[i].style.marginLeft === ""){
                a[i].style.marginLeft = "30px";
            }
            else{
                var lala = parseInt(a[i].style.marginLeft);
                a[i].style.marginLeft = (lala + 10) + "px";
            }                 
            
            
        }

}

function changeColor(e){
    var textInput = document.getElementById("color-box").value;
    var a = document.getElementsByClassName('inserted-div');
    
    if(isNumeric(textInput)){
        alert("Введите цвет текстом");
    }
    else{
        
        for(var i = 0; i < a.length; i++){ 
            
            a[i].style.background = textInput;            
        }
    }
       
    document.getElementById("color-box").value = "";

}

function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  }

