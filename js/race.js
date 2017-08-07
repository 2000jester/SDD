window.addEventListener('keydown', onKeyDown, false);
function onKeyDown(evt){
    if(evt.which == 13){
        if(isRunning === false){
            randomTemp = random(0,words.length-1);
            var split = words[randomTemp].split("");
            for(var i = 0; i<split.length;i++){
                split[i]="<span id="+split[i]+">"+split[i]+"</span>";
            }
            console.log(split);
            document.getElementById("race-content-word").innerHTML = "";
            for(var i = 0;i<split.length;i++){
                document.getElementById("race-content-word").innerHTML = document.getElementById("race-content-word").innerHTML + split[i]
            }
            isRunning = true;
        }
    }
}

var isRunning = false;

function random(min, max){
  var temp = Math.floor(Math.random() * (max - min + 1)) + min
  return temp
}