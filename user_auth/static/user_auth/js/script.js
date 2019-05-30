// onload: Set all input's class to inputField for css 
function setInputClass() {
    let input = document.getElementsByTagName("input");
    for (let i = 0; i < input.length - 1; i++) {
        const element = input[i];
        element.className = "inputField";
    }
}

// onmouseover: Change logo text to the respective option
function logoChangeText(i) {
    let textLogo = document.getElementById("logo");
    switch (i) {
        case 0:
            textLogo.innerHTML = "<a style='color:#ff5c5c'>Logout</a>";
            break;
        case 1:
            textLogo.innerHTML = "<a style='color:#ffbd4c'>Profile</a>";
            break;
        case 2:
            textLogo.innerHTML = "<a style='color:#00ca56'>Login</a>";
            break;
    }
}

//  onmouseout: Return logo text to default 
function logoText() {
    let textLogo = document.getElementById("logo");
    textLogo.innerHTML = "<a>Django Web Dev</a>";
}

// Logout redirect to home page 
function redirectIndex() {
    let counter = document.getElementById("counterText");
    let x = 0;
    setInterval(function () {
        let dots = "";
        x++;
        for (let y = 0; y < x % 4; y++) {
            dots += ".";
        }
        counter.innerText = dots;
        if (x % 4 == 0) {
            let href = window.location.href; 
            window.location.href = href.substring(0, href.length - 15);
        }
    }, 1000);

};

