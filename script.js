function changeColor(color) { 
                document.body.style.background = color;
            } 
function dark() { 
                changeColor('black'); 
                document.getElementById("darkm").innerHTML = "Double Click to set Light Theme!";
                document.getElementById("desc").style.color = "white"
}
function light() { 
                changeColor('white'); 
                document.getElementById("desc").style.color = "black"
}