
function logIn() {
    let login = JSON.parse(localStorage.getItem("logIn"));
    if (login == null || login == undefined) { login = false; }
    let content = "";
    if (login) {
        content = `<a class="navlink " onclick="logout()"> logout</a>`;
    } else {
        content = `<a class="navlink" href="login.html"> Login</a>`;
    }
    document.querySelector("#navlinks").innerHTML = content;
}

function checkLogin() {
    let userStr = localStorage.getItem("LOGGED_IN_USER");
    let user = userStr != null ? JSON.parse(userStr) : null;
    let login = JSON.parse(localStorage.getItem("logIn"));
    if (login = true) {
        document.querySelector("#loggedIn").innerHTML = "welcome" + user.email + "</a>";
    }
}

function logout() {
    localStorage.setItem("logIn", JSON.stringify(false));
    localStorage.removeItem("PRODUCTS");
    localStorage.removeItem("cartCount");
    window.location.href = "index.html";
}
logIn();