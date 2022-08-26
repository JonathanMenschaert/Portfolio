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