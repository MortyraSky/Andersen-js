
// норм варик
alert("Задание 7.2");
var tags = new Array();
var countTags = {};

function findTagsAndCountIt(){

var elems = document.body.getElementsByTagName("*");
elems = Array.prototype.slice.call(elems);


elems.forEach(function(elem) {
    
    addTags(elem.tagName);         
    
  });
  showCountTags();
} 


function addTags(elem){
      if(tags.indexOf(elem) == -1){
          tags.push(elem);
          countTags[elem] = 1;
      }
      else{
          countTags[elem]++;          

      }      

  }

function showCountTags(){
    for(var key in countTags){
        console.log("Ключ: " + key + " значение: " + countTags[key]);
    }
}

findTagsAndCountIt();

  