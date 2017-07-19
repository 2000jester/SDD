function runTitle(){
  //background fill
  context.fillStyle = "grey";
  context.fillRect(0,0,cw,ch);
  //creates logo and assigns a resource to it
  var logo = document.createElement("img");
  logo.src = "././Resources/logo.png";
  //draws logo on screen
  context.drawImage(logo,(cw/2)-(1033/2),(ch/2)-(382/2),1033,382)
}
