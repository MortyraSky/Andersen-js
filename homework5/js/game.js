alert("Задание 5.1")

window.onload = function(){ // отрисовка блоков
    for(var i=0; i < 9; i++){
        document.getElementById("game").innerHTML+='<div class="block"></div>';
    }
    var hod = 0;

    document.getElementById('game').onclick = function(event){ // обработка клика по блоку 
        console.log(event);
        if(event.target.className == 'block'){
            if(hod % 2 == 0){
                alert("Ходят крестики");
                event.target.innerHTML = "x";
            }
            else{
                alert("Ходят нолики");
                event.target.innerHTML = "0";
            }

            if(hod >= 4){
                hod++;
                check_Winner();
            }
            else{
                hod++;
            }          

        }
        

    }
    
    var win_state = [
        "123",
        "456",
        "789",
        "147",
        "258",
        "369",
        "159",
        "357"
    ];
    

    function check_Winner(){
        
        var allblock = document.getElementsByClassName('block'); //
       // получаем ходы игроков 
       var steps_user_one = "";
       var steps_user_two = "";
       for(var i = 0; i < allblock.length; i++){
            if(allblock[i].innerHTML == 'x'){
                steps_user_one+= (i+1);
            }
            else if (allblock[i].innerHTML == '0'){
                steps_user_two+= (i+1);
            }

        }
        check_result(steps_user_one, steps_user_two);        

    }

    function check_result(steps_user_one, steps_user_two){
        
        for(var i = 0; i < win_state.length; i++){
            if(steps_user_one.indexOf(win_state[i]) != -1){
                alert("Победа крестиков");
                break;

            }
            else if(steps_user_two.indexOf(win_state[i]) != -1){
                alert("Победа ноликов");
                break;
            }
            else{
                if(hod == 9){
                    alert("Ничья");
                    break;
                }
            }            
        }
        
    }

    
}
