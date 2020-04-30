document.body.onload = myMove;
    let height = window.innerHeight;
    let width = window.innerWidth;
    document.querySelector('#container').style.cssText = 'width:'+String(width )+'px' + ';' + 'height:'+String(height)+'px' + ';'; 
    var timeLevel = 1000;
    function myMove() {
    var levelup = 0;
    var interval;
    var elem = document.getElementById("animate"); 
    elem.style.top = String(height/2.3)+'px';
    elem.style.left = String(width/2 - 20)+'px';
    elem.addEventListener('click',start);
    function start() {
      document.querySelector('#rules').style.display = 'none';
      clearInterval(interval);
      document.querySelector('#level #levelup').innerHTML = levelup;
      document.querySelector('#audio1').play();
      timeLevel -= 5;
      levelup++;
      console.log('clicked');
      setTimeout(gameRun,0.000001);
      interval= setInterval(gameRun, timeLevel);
        function gameRun() {
          pos1 = Math.floor(Math.random()*(height-50));
          pos2 = Math.floor(Math.random()*(width-50));
          elem.style.top = pos1 + "px"; 
          elem.style.left = pos2 + "px"; 
        }
      }
    }