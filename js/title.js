document.getElementById("title-name-input").value = "";
document.getElementById("title-name-prompt").style.fontSize = "17px";
document.getElementById("title-name-prompt").style.color = "white";
function proceedCheck(){
    if(document.getElementById("title-name-input").value != ""){
        username = document.getElementById("title-name-input").value;
        window.location.href='html/menu.html';
    } else {
        document.getElementById("title-name-prompt").style.fontSize = "20px";
        document.getElementById("title-name-prompt").style.color = "#ff1a1a";
    }
}