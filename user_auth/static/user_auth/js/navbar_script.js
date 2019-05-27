
//  Index Page
// Exibe texto da barra de navegação (onmouseover)
function optionText(i) {
    let textLogo = document.getElementById("logo");
    switch (i) {
        case 0:
            textLogo.innerHTML = "<a style='color:#00ca56'>Login</a>";
            break;
        case 1:
            textLogo.innerHTML = "<a style='color:#ffbd4c'>Profile</a>";
            break;
        case 2:
            textLogo.innerHTML = "<a style='color:#ff5c5c'>Logout</a>";
            break;
    }
}

// Retorna texto original da logo (onmouseout)
function logoText() {
    let textLogo = document.getElementById("logo");
    textLogo.innerHTML = "<a>Django Web Dev</a>"
}

