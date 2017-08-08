var letters = [];
var split = [];
var count = 0;
var currentLetter = 0;
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
    if(evt.which == keys.enter){
        if(isRunning === false){
            newWord();
            isRunning = true;
        }
    }
    if(String.fromCharCode(evt.which).toLowerCase() == letters[currentLetter]){
        span()
    }
    if(currentLetter == letters.length){
        newWord();
        currentLetter = 0;
        count = count + 1
        document.getElementById("race-content-count").innerHTML = count + " words"

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
  return temp
}