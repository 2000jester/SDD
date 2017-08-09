var letters = [];
var split = [];
var count = 0;
var currentLetter = 0;
var wpm = 0;
var wordsCount = 0;
var secondsInvert = 0;
function span(){
    split[currentLetter]="<span style='color:limegreen'>"+split[currentLetter]+"</span>";
    document.getElementById("race-content-word").innerHTML = "";
    for(var i = 0;i<split.length;i++){
        document.getElementById("race-content-word").innerHTML = document.getElementById("race-content-word").innerHTML + split[i]
    }
    currentLetter = currentLetter + 1
}
function newWord(){
    randomTemp = random(0,words.length-1);
    split = words[randomTemp].split("");
    letters = words[randomTemp].split("");
    for(var i = 0; i<split.length;i++){
        split[i]="<span>"+split[i]+"</span>";
    }
    document.getElementById("race-content-word").innerHTML = "";
    for(var i = 0;i<split.length;i++){
        document.getElementById("race-content-word").innerHTML = document.getElementById("race-content-word").innerHTML + split[i]
    }
}
window.addEventListener('keydown', onKeyDown, false);
function onKeyDown(evt){
    if(evt.keyCode == keys.enter){
        if(isRunning === false){
            newWord();
            isRunning = true;
            startTimer(59, timerElement);
            count = 0;
            wpm = 0;
            wordsCount = 0;
            secondsInvert = 0;
        }
    }
    if(String.fromCharCode(evt.keyCode).toLowerCase() == letters[currentLetter]){
        span();
        count = count + 1;
        document.getElementById("race-content-count").innerHTML = count + " characters";
    }
    if(isRunning==true){
        if(currentLetter == letters.length){
            newWord();
            currentLetter = 0;
            wordsCount = wordsCount + 1;
            document.getElementById("race-content-words").innerHTML = wordsCount + " words";
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
var isRunning = false;

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

        display.textContent = minutes + ":" + seconds;
        document.getElementById("race-content-wpm").innerHTML = wpm + " wpm";
        secondsInvert = 60 - seconds
        wpm = count/5

        if (timer-- <= 0) {
            timer = duration;
            isRunning = false;
            clearInterval(interval);
            display.textContent = "01:00";
            document.getElementById("race-content-word").innerHTML = "Press Enter To Start"
        }
    }, 1000);
}