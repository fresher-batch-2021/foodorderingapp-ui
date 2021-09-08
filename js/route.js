const routes = [
    { path: "signup.html" },
    { path: "login.html" },
    { path: "index.html" },
    { path: "veg.html"},
    { path: "nonveg.html" },
    { path: "addcart.html", roles: ["USER"] },
    { path: "order.html", roles: ["USER"] },
    { path: "addFood_admin.html" ,roles: ["ADMIN"]},
    { path: "food_list_admin.html" ,roles: ["ADMIN"]},
    { path: "list_user_admin.html",roles: ["ADMIN"]} 
];

 function logout() {
     localstorage.clear();
     window.Location.href = "login.html";
 }
function checkAccess(pageName, role) {
    console.log(pageName)
    console.log(role)
    let allowed = false;
    for (let route of routes) 
    {
        if (route.path == pageName)
         {
            if ((!route.roles)||route.roles.includes(role)) 
            {
                allowed = true;
                break;
            }
           
        }
    }
    return allowed;
}
(function () {
    console.log("Routes initializing")
    let user = JSON.parse(localStorage.getItem("LOGGED_IN_USER"));
    console.log("LoggedIn User", user);
    let role = user != null ? user.role : null;
    let pathName = window.location.pathname.substr(1);
    let allowedAccess = checkAccess(pathName, role);



    if (!allowedAccess) {
        alert("You are not authorized to access this page,Redirecting to login page");
        window.location.href = "login.html";
    }
})();

