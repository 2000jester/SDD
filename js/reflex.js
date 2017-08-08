// contains alphabetically arranged keycode for letters
var char_keys = [48,49,50,51,52,53,54,55,56,57,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90]
// choose between a letter or a number key
var assigned_key = char_keys[random(0, char_keys.length-1)], // stores the randomly generated key from the array above
    reaction_time, // stores the reaction time of the player
    key_match = false, // bool switch to see if the player pressed the right key
    timer = Date.now() + 3000, //set timer to 3 secs
    prev_time = Date.now(), // stores previous time frame
    curr_time = Date.now(); // stores current time frame

var display_key = document.getElementById('display-key'), // get the div element called "display-key"
    display_reaction_time = document.getElementById('display-reaction-time'), // get the div element called "display-reaction-time"
    display_timer = document.getElementById('display-timer');
    display_key.innerHTML = String.fromCharCode(assigned_key); // puts the ASSIGNED KEY to a div element in the html page
    display_timer.innerHTML = timer;
    display_reaction_time.innerHTML = 0 + "ms"; // puts the REACTION TIME data on a div element in html page
// listen for keyDown event
window.addEventListener('keydown', onKeyDown, false);
function onKeyDown(evt) // contains the actions to perform if the keyDown event happens
{

    if(evt.keyCode == assigned_key) // is the KEY PRESSED correct?
    {
        curr_time = Date.now(); // set the time this date 
        //(which is used to find the different between the previous time and the current time)

        key_match = true; // if the key PRESSED matches the correct key then log this entry
        console.log("correct key"); // log this message to suggest that the user is correct

        assigned_key = char_keys[random(0, char_keys.length-1)]; // choose random character from the array
        display_key.innerHTML = String.fromCharCode(assigned_key); // display the assigned key to the screen
        console.log(String.fromCharCode(assigned_key)); // log the entries

        reaction_time = (curr_time-prev_time)/1000; // calc reaction time after the correct key is pressed
        display_reaction_time.innerHTML = reaction_time + "ms" //display the reaction time of the user
        console.log(reaction_time); // log the entries

        prev_time = curr_time; // set previous time to the current time so that it calculates the current creation time
    }
}

function random(min, max) // generates a random integer WITHIN A CERTAIN RANGE of values
{
    return Math.round(Math.random() * (max-min) + min); // algorithm that generates a random integer and returns it the system
}


function startTimer(duration, display) {
    var timer = duration, minutes, seconds;

    setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes; // single digit
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display_timer.textContent = minutes + ":" + seconds;

        if (timer-- < 0) {
            timer = duration;
        }
    }, 1000);
}
startTimer(3 * 60, display_timer);
