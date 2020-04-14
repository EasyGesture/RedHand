function myMove() {
  var elem = document.getElementById("animate");   
  var x = 0;
  var y = 0;
  var id = setInterval(frame, 600);
  function frame() {
    if ( x<0 && y <0) {
      clearInterval(id);
    } 
    else {
      x = Math.floor(Math.random() * (500 - 0 + 1) ) + 0;
      y = Math.floor(Math.random() * (800 - 0 + 1) ) + 0;
      elem.style.top = x + "px"; 
      elem.style.left = y + "px"; 
    }
  }
}
