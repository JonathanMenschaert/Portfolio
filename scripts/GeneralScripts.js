function activateNavbar(activate) 
{
    let x = document.getElementById("NavBar");
    if (activate) {
        x.className = "navbar expand";
    }
    else {
        x.className = "navbar collapse";
    }
}

function resetNavbar()
{
    let x = document.getElementById("NavBar");
    x.className = "navbar";
}