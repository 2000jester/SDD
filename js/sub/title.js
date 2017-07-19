canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var cw = canvas.width;
var ch = canvas.height;
//create proceed button object
var tempWidth = 250;
var tempHeight = 125;
var proceed = {
  x:(canvas.width/2)-tempWidth/2,
  y:(canvas.height/2)-(tempHeight/2-150),
  width: tempWidth,
  height: tempHeight,
  colors: ["#9CE164", "#FFC070", "black"],
}

function runTitle(){
  //background fill
  context.fillStyle = "grey";
  context.fillRect(0,0,cw,ch);
  //creates logo and assigns a resource to it
  var logo = document.createElement("img");
  logo.src = "././Resources/logo.png";
  //draws logo on screen
  //var,x,y,w,h
  context.drawImage(logo,(cw/2)-(1033/2),(ch/2)-(400),1033,382)
  //draw proceed button
  context.fillStyle = proceed.colors[0]
  context.fillRect(proceed.x,proceed.y,proceed.width,proceed.height)
}