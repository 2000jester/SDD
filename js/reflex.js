// contains alphabetically arranged keycode for letters
var char_keys = [48,49,50,51,52,53,54,55,56,57,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90]
// choose between a letter or a number key
var assigned_key = char_keys[random(0, char_keys.length-1)], // stores the randomly generated key from the array above
    reaction_time, // stores the reaction time of the player
    key_match = false, // bool switch to see if the player pressed the right key
    timer = Date.now() + 3000, //set timer to 3 secs
    prev_time = Date.now(), // stores previous time frame
    curr_time = Date.now(); // stores current time frame

var reflex_key = document.getElementById('reflex-key'), // get the div element called "display-key"
    reflex_reaction_time = document.getElementById('reflex-reaction-time'), // get the div element called "display-reaction-time"
    reflex_timer = document.getElementById('reflex-timer');
    reflex_key.innerHTML = String.fromCharCode(assigned_key); // puts the ASSIGNED KEY to a div element in the html page
    reflex_reaction_time.innerHTML = 0 + "ms"; // puts the REACTION TIME data on a div element in html page
    isTimerRunning = false;
// listen for keyDown event
window.addEventListener('keydown', onKeyDown, false);
function onKeyDown(evt) // contains the actions to perform if the keyDown event happens
{

    if(evt.keyCode == assigned_key && reflex_timer.innerHTML == 0) // is the KEY PRESSED correct?
    {
        curr_time = Date.now(); // set the time this date 
        //(which is used to find the different between the previous time and the current time)
        key_match = true; // if the key PRESSED matches the correct key then log this entry
        console.log("correct key"); // log this message to suggest that the user is correct

        assigned_key = char_keys[random(0, char_keys.length-1)]; // choose random character from the array
        reflex_key.innerHTML = String.fromCharCode(assigned_key); // display the assigned key to the screen
        console.log(String.fromCharCode(assigned_key)); // log the entries

        reaction_time = (curr_time-prev_time)/1000; // calc reaction time after the correct key is pressed
        reflex_reaction_time.innerHTML = reaction_time + "ms" //display the reaction time of the user
        console.log(reaction_time); // log the entries

        prev_time = curr_time; // set previous time to the current time so that it calculates the current creation time
    }
        //FIXME: prevent the timer from resetting when you press the right key
        //startTimer(3, reflex_timer);
        // start the timer with 3 seconds on clock in the div element called display-timer
    if(reflex_timer.innerHTML == 0)
    {
        prev_time = Date.now();
        isTimerRunning = false;
    }

    if(evt.keyCode == 13 && !isTimerRunning) // IF user presses ENTER KEY
    {
        isTimerRunning = true;
        startTimer(3, reflex_timer);
    }
    console.log(timer);
    console.log("key match: " + key_match)
}

window.addEventListener('keydown', onKeyDown, false);

function random(min, max) // generates a random integer WITHIN A CERTAIN RANGE of values
{
    return Math.round(Math.random() * (max-min) + min); // algorithm that generates a random integer and returns it the system
}

function startTimer(duration, display)
{
    var time_limit = duration, minutes, seconds; //duration is seconds, create vars mins and secs 

    var count_time = setInterval(function ()
    {
        minutes = parseInt(time_limit / 60, 10); // divide Date.now() + 3000 to secs
        seconds = parseInt(time_limit % 60, 10); // modulo so that we get zero if the seconds is 60

        minutes = minutes < 10 ? "0" + minutes : minutes; // pad a zero if the minutes is 1 to 9 else output the number
        seconds = seconds < 10 ? "0" + seconds : seconds; // pad a zero if the seconds is 1 to 9 else output the number

        display.textContent = minutes + ":" + seconds;
        
        time_limit--;
        if (time_limit < 0) // decrement the timer in the if statement (VERY DODGEY)
        { // but the reason for this is for the timer to stop if the timer reaches -1 so that the user see 00:00 not 00:01 at the end
            clearInterval(count_time); // stop the timer if time limit reaches -1
            reflex_timer.innerHTML = 0
            prev_time = Date.now();
             // message to the user
        }
    }, 1000) // run at 1000 ms/s
}

