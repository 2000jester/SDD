// contains alphabetically arranged keycode for letters and numbers
var char_keys = [48,49,50,51,52,53,54,55,56,57,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90]
// choose between a letter or a number key
var assigned_key = char_keys[random(0, char_keys.length-1)], // stores the randomly generated key from the array above
    reaction_time, // stores the reaction time of the player
    key_match = false, // bool switch to see if the player pressed the right key
    timer = Date.now() + 3000, //set timer to 3 secs
    timer_limit = 1,
    prev_time = Date.now(), // stores previous time frame
    curr_time = Date.now(), // stores current time frame
    bestReaction_time=0; //store the players best reaction time

var reflex_key = document.getElementById('reflex-single'), // get the div element called "reflex-single"
    reflex_reaction_time = document.getElementById('reflex-stats-last'), // get the div element called "reflex-stats-last"
    reflex_timer = document.getElementById('reflex-single'), //get the div element called "reflex-single"
    reflex_best_reaction_time = document.getElementById('reflex-stats-best'); // get the div element called "reflex-stats-best"

    // if timer is activated once allow the key listener to perform actions
var isTimerRunning = false, isTimerActivated = false; // timer booleans
    // if timer is NOT running allow key listener to perform actions

// listen for keyDown event
window.addEventListener('keydown', onKeyDown, false);
function onKeyDown(evt) // contains the actions to perform if the keyDown event happens
{

    if(evt.keyCode == assigned_key && isTimerActivated && !isTimerRunning) // is the KEY PRESSED correct?
    {
        curr_time = Date.now(); // set the time this date 
        //(which is used to find the different between the previous time and the current time)
        key_match = true; // if the key PRESSED matches the correct key then log this entry
        console.log("correct key"); // log this message to suggest that the user is correct

        assigned_key = char_keys[random(0, char_keys.length-1)]; // choose random character from the array
        document.getElementById("reflex-single").style.marginRight = "17%";//re aligns the text
        document.getElementById("reflex-single").style.marginRight = "0px";//re aligns the text
        reflex_key.innerHTML = "Press Enter To Start"; // display the assigned key to the screen
        console.log(String.fromCharCode(assigned_key)); // log the entries

        reaction_time = (curr_time-prev_time)/1000; // calc reaction time after the correct key is pressed
        if(bestReaction_time == 0){
            bestReaction_time = reaction_time;
        } else if(reaction_time < bestReaction_time){
            bestReaction_time = reaction_time;
        }
        reflex_reaction_time.innerHTML = "Last : "+reaction_time + " ms" //display the reaction time of the user
        reflex_best_reaction_time.innerHTML = "Best : "+bestReaction_time+ " ms" //display the reaction time of the user
        console.log(reaction_time); // log the entries

        prev_time = curr_time; // set previous time to the current time so that it calculates the current creation time
        isTimerActivated = false;
        isTimerRunning = false;
    }

    if(evt.keyCode == 13 && !isTimerRunning) // IF user presses ENTER KEY
    {

        isTimerRunning = true; // TIMER IS RUNNING
        startTimer(3, reflex_timer); // set time to 3 secs and put it in the reflex_timer div
        key_match = false; // reset keymatch variable
    }
    console.log(timer);
    console.log("key match: " + key_match)
}

function random(min, max) // generates a random integer WITHIN A CERTAIN RANGE of values
{
    return Math.round(Math.random() * (max-min) + min); // algorithm that generates a random integer and returns it the system
}

function startTimer(duration, display)
{
    var time_limit = duration, minutes, seconds; //duration is seconds, create vars mins and secs 

    var count_time = setInterval(function ()
    {
        seconds = parseInt(time_limit % 60, 10); // modulo so that we get zero if the seconds is 60
        seconds = seconds < 10 ? "0" + seconds : seconds; // pad a zero if the seconds is 1 to 9 else output the number

        var tempSecondsSplit = seconds.split("");//splits seconds so that a one digit value can be displayed
        display.textContent = tempSecondsSplit[1];//sets the elements text to equal the temp value
        switch(tempSecondsSplit[1]){//switch statement that selects the text color based on what number it is
            case "3":
                document.getElementById("reflex-single").style.color = "red";
                break;
            case "2":
                document.getElementById("reflex-single").style.color = "orange";
                break;
            case "1":
                document.getElementById("reflex-single").style.color = "limegreen";
                break;
        }
        document.getElementById("reflex-single").style.marginRight = "230px";//re aligns the text
        
        time_limit--;
        if (time_limit < 0) // decrement the timer in the if statement (VERY DODGEY)
        { // but the reason for this is for the timer to stop if the timer reaches -1 so that the user see 00:00 not 00:01 at the end
            clearInterval(count_time); // stop the timer if time limit reaches -1
            timer_limit = 0; // set time_limit to zero
            isTimerRunning = false; // flip timer is running true
            isTimerActivated = true; // flip this switch true
            reflex_timer.innerHTML = "" // reset the reflex_timer div
            document.getElementById("reflex-single").style.color = "white";//resets the color to white
            reflex_key.innerHTML = String.fromCharCode(assigned_key); // puts the ASSIGNED KEY to a div element in the html page
            prev_time = Date.now(); // set date to now 
             // message to the user
        }
    }, 1000) // run at 1000 ms/s
}

