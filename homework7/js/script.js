alert("Задание 7.1");
function delay(f, ms) {

    return function() {
      var savedThis = this;
      var savedArgs = arguments;
  
      setTimeout(function() {
        f.apply(savedThis, savedArgs);
      }, ms);
    };
  
  }
  
  function mymessage(msg) {
    console.log("Message: " + msg);
  }
  
  var superfunc = delay(mymessage, 3000);
  
  superfunc("кукукук")
