// Set up!
var a_canvas = document.getElementById("canvas");
var context = a_canvas.getContext("2d");
var position;
context.strokeRect(10,10,50,20);
canvas.addEventListener("mousemove", getPosition, false);
canvas.addEventListener("mousedown", getPosition, false);

var move=true;
function getPosition(event)
 {
   var x = event.x;
   var y = event.y;
   context.clearRect ( 0 , 0 , 2000, 2000 );
    context.strokeRect(x,y,50,20);
 }  
 




var info = document.getElementById('info'),
    data = [],
    i, len;
var finger, hand;


Leap.loop(function(frame){
  
  for(i=0, len=frame.pointables.length; i < len; i++){
    hand = frame.hands[0];
    finger=hand.fingers[0];
    if(finger.type===0)
    {
    context.clearRect(0,0,2000,2000);
    context.strokeRect(frame.pointables[i].tipPosition[0]+500,frame.pointables[i].tipPosition[1],50,20);


    }
   // alert(finger.type);
   
  }

 
});
