var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var cw = canvas.width;
var ch = canvas.height;
document.body.style.overflow = 'hidden';
document.body.style.margin = '0';
//sets resources to invisible by default
document.getElementById("vid1").style.visibility = "hidden"
//-------------------- CANVAS --------------------//

//VARIABLES

//allows different states to be selected
var state = "title";

//EVENT LISTENERS

window.addEventListener("mousedown", function(evt){
	if(state === "title"){ //if the current state is equal to "title"
        if((evt.x > proceed.x && evt.x < proceed.x + proceed.width) && (evt.y > proceed.y && evt.y < proceed.y + proceed.height))
        { //if the mouse click was within the boundaries of the proceed button
           // state = "menu" //changes the current state to menu
           state = "menu";
           console.log("mouse is inside")
        }
    }
});

//RUN
function run() // gets called 60FPS
{
    switch(state){
      case "title":
      runTitle()
      break;
      case "help":
      runHelp()
      break;
      case "instruct":
      runInstruct()
      break;
      case "menu":
      runMenu()
      break;
      case "race":
      runRace()
      break;
      case "relfex":
      runReflex()
      break;
    }
}

// animation loop
(function ()
{
    var onEachFrame;
    if(window.requestAnimationFrame)
    {
        // make onEacFrame a callback function with parameter to call back to
        onEachFrame = function(callback)
        {
            // make a another function that will call the call back parameter
            var _callback = function()
            {
                callback(); // call paramter callback
                window.requestAnimationFrame(_callback); // use the built in javascript animation to call the callback caller
            }
            _callback(); // call the callback caller
        }
    } else if(window.mozRequestAnimationFrame) {
        // make onEacFrame a callback function with parameter to call back to
        onEachFrame = function(callback)
        {
            // make a anothe function that will call the call back parameter
            var _callback = function()
            {
                callback(); // call paramter callback
                window.mozRequestAnimationFrame(_callback); // use the built in javascript animation to call the callback caller
            }
            _callback(); // call the callback caller
        }
    } else {
        onEachFrame = function(callback)
        {
            window.setInterval(callback, 1000/60) // call in intervals of 13 FPS
        }
    }
window.onEachFrame = onEachFrame;
})();
window.onEachFrame(run);
