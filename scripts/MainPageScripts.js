var counter = 0;
var scroll = true;
var maxImages = 4;

function adjustCounter(newCounter) 
{
    counter = counter % maxImages;
    document.getElementById("radionav" + (counter + 1)).className = "manual-btn";
    counter = newCounter % maxImages;
    document.getElementById("radionav" + (counter + 1)).className = "manual-btn manual-btn-selected";
    document.getElementById("radio" + (counter + 1)).checked = "checked";
}

function adjustManual(newCounter) 
{   
    adjustCounter(newCounter);    
    scroll = false;    
}

function increaseCounter()
{   
    adjustCounter(counter + 1);    
}

function decreaseCounter()
{    
    adjustCounter(counter + maxImages - 1);    
}