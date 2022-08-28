function switchNavBar() {
    var x = document.getElementById("NavBar");
    if (x.className == "navbar") {
        x.className += " expand";
    }
    else {
        x.className = "navbar";
    }
}

var counter = 1;
var scroll = true;
function adjustCounter(newCounter, shouldScroll = true) {

    if (newCounter > 4) {
        newCounter = 1;
    }
    document.getElementById("radionav" + counter).className = "manual-btn";
    counter = newCounter;
    document.getElementById("radionav" + counter).className = "manual-btn manual-btn-selected";
    document.getElementById("radio" + counter).checked = "checked";

    if (!shouldScroll) {
        scroll = false;
    }
}

setInterval(function () {
    if (scroll) {
        if (counter >= 4) {
            counter = 1;
        }
        else {
            counter++;
        }
        document.getElementById("radionav" + counter).className = "manual-btn";
        counter = newCounter;
        document.getElementById("radionav" + counter).className = "manual-btn manual-btn-selected";
        document.getElementById("radio" + counter).checked = "checked";
    }
}, 7000);