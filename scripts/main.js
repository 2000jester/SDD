var canvas = document.getElementById("canvas"),
    context = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    cw = canvas.width;
    ch = canvas.height;
    document.body.style.overflow = 'hidden';
    document.body.style.margin = '0';
//-------------------- CANVAS --------------------//
//allows different states to be selected
var state = "title";
//sets resources to invisible by default
document.getElementById("vid1").style.visibility = "hidden"
// run function
function run() // gets called 60FPS
{
    switch(state){
      case "title":
      runTitle()
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
