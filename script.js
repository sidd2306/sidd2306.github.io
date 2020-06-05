function changeColor(color) { 
                document.body.style.background = color; 
            } 
function dark() { 
                changeColor('black'); 
                document.getElementById("darkm").innerHTML = "Double Click to set Light Theme!";
}
function light() { 
                changeColor('white'); 
}