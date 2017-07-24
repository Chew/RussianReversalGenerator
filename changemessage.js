function changeMessage(){
    for(var i=0; i<4; i++){
            document.getElementById(i+"line").innerHTML=lines3[i][(Math.floor(Math.random()*lines3[i].length))];
    }
    document.getElementById("startBttn").textContent = "Again?";
}
