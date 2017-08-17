var letters = [];//Array to hold letters of current word, used for logic checks because it wont have span tags
var lettersColor = [];//Array to hold letters with span tags with a color attribute
var letterCount = 0;//Count for amount of characters typed score
var currentLetter = 0;//Count for which letter the user is currently required to type relative to the current word
var wpm = 0;//Count for WPM score
var wordsCount = 0;//Count for amount of words typed score
var isRunning = false;//Boolean to check if the user is currently "racing"
function span(){//called when the user types the required letter correctly
    lettersColor[currentLetter]="<span style='color:limegreen'>"+lettersColor[currentLetter]+"</span>";//adds span tags with green color
    document.getElementById("race-content-word").innerHTML = "";//resets what was currently stored in the elements innerHTML
    for(var i = 0;i<lettersColor.length;i++){//for loop that loops through the length of lettersColor
        document.getElementById("race-content-word").innerHTML = document.getElementById("race-content-word").innerHTML + lettersColor[i]//concatenates all letters from the lettersColor array to the text element
    }
    currentLetter = currentLetter + 1//increments the current letter count by one
}
function newWord(){//called when the user completes typing a word
    randomTemp = random(0,words.length-1);//temporary random value with a min of 0 and a max of the length of the words array stored in "./words.js"
    lettersColor = words[randomTemp].split("");//sets lettersColor array equal to the word located at the random value index for span purposes
    letters = words[randomTemp].split("");//sets lettersColor array equal to the word located at the random value index for logic check purposes
    document.getElementById("race-content-word").innerHTML = "";//resets what was currently stored in the elements innerHTML
    for(var i = 0;i<lettersColor.length;i++){//for loop that loops through the length of lettersColor
        document.getElementById("race-content-word").innerHTML = document.getElementById("race-content-word").innerHTML + lettersColor[i]//concatenates all letters from the lettersColor array to the text element
    }
}
window.addEventListener('keydown', onKeyDown, false);//adds an event listener to the html body 
function onKeyDown(evt){//function that is called when the keyDown event listener is triggered
    if(evt.keyCode == keys.enter){//checks if the key pressed was enter
        if(isRunning === false){//checks if the race game is currently running
            newWord();//calls new word function
            isRunning = true;//sets the boolean to equal true
            startTimer(59, timerElement);//starts timer countdown
            letterCount = 0;//resets letter count to zero
            wpm = 0;//resets wpm to zero
            wordsCount = 0;//resets word count to zero
        }
    }
    if(String.fromCharCode(evt.keyCode).toLowerCase() == letters[currentLetter]){
        if(isRunning === true){
            span();
            letterCount = letterCount + 1;
            document.getElementById("race-content-count").innerHTML ="Characters : "+letterCount;
        }
    }
    if(isRunning==true){
        if(currentLetter == letters.length){
            newWord();
            currentLetter = 0;
            wordsCount = wordsCount + 1;
            document.getElementById("race-content-words").innerHTML ="Words : "+wordsCount;
        }
    }
}

var keys={
    enter: 13,
    space: 32,
    a: 65,
    b: 66,
    c: 67,
    d: 68,
    e: 69,
    f: 70,
    g: 71,
    h: 72,
    i: 73,
    j: 74,
    k: 75,
    l: 76,
    m: 77, 
    n: 78,
    o: 79,
    p: 80,
    q: 81,
    r: 82,
    s: 83,
    t: 84,
    u: 85,
    v: 86,
    w: 87,
    x: 88,
    y: 89,
    z: 90,
}
function random(min, max){
  var temp = Math.floor(Math.random() * (max - min + 1)) + min
  return temp;
}
var timerElement = document.getElementById("race-content-timer");
console.log(timerElement)
function startTimer(duration, display){
    var timer = duration, minutes, seconds;

    var interval = setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes; // single digit
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = "Timer : "+minutes + ":" + seconds;
        document.getElementById("race-content-wpm").innerHTML ="Wpm : "+wpm;
        //secondsInvert = 60 - seconds
        wpm = letterCount/5

        if (timer-- <= 0) {
            timer = duration;
            isRunning = false;
            clearInterval(interval);
            display.textContent = "01:00";
            document.getElementById("race-content-word").innerHTML = "Press Enter To Start"
        }
    }, 1000);
}