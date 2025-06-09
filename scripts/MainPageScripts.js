var counter = 0;
var scroll = true;
var maxImages = 4;

function adjustCounter(newCounter) 
{
    counter = counter % maxImages;
    idCounter = counter + 1;
    document.getElementById("radionav" + idCounter).className = "manual-btn";
    document.getElementById("highlight" + idCounter).className = "";
    
    counter = newCounter % maxImages;
    idCounter = counter + 1;
    document.getElementById("highlight" + idCounter ).className = "title-pop-in";
    document.getElementById("radionav" + idCounter ).className = "manual-btn manual-btn-selected";
    document.getElementById("radio" + idCounter ).checked = "checked";
}

function adjustManual(newCounter) 
{   
    adjustCounter(newCounter);    
}

function increaseCounter()
{   
    adjustCounter(counter + 1);    
}

function decreaseCounter()
{    
    adjustCounter(counter + maxImages - 1);    
}