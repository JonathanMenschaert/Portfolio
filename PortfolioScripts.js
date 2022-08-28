function switchNavBar()
{
    var x = document.getElementById("NavBar");
    if (x.className == "navbar") {
        x.className += " expand";
    }
    else {
        x.className = "navbar";
    }
}

var counter = 1;
function adjustCounter(newCounter) {
    if (newCounter > 4) {
        newCounter = 1;
    }
    document.getElementById("radionav" + counter).className = "manual-btn";    
    counter = newCounter;
    document.getElementById("radionav" + counter).className = "manual-btn manual-btn-selected";
    document.getElementById("radio" + counter).checked = "checked";
}

setInterval(function(){
    adjustCounter(counter + 1);
}, 5000);