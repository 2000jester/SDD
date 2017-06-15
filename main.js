var canvas = document.getElementById("canvas"),
    context = canvas.getContext("2d");
//-------------------- CANVAS --------------------//

// run function
function run() // gets called 60FPS
{
    console.log("I work")
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
            // make a anothe function that will call the call back parameter
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
