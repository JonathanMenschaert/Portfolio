var counter = 1;
var scroll = true;
var maxImages = 4;

function adjustCounter(newCounter) 
{
    if (newCounter > maxImages) {
        newCounter = 1;
    }
    document.getElementById("radionav" + counter).className = "manual-btn";
    counter = newCounter;
    document.getElementById("radionav" + counter).className = "manual-btn manual-btn-selected";
    document.getElementById("radio" + counter).checked = "checked";
}

function adjustManual(newCounter) 
{   
    adjustCounter(newCounter);    
    scroll = false;    
}