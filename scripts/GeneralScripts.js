function activateNavBar(activate) 
{
    let x = document.getElementById("NavBar");
    if (activate) {
        x.className += " expand";
    }
    else {
        x.className = "navbar";
    }
}