function register() {
    event.preventDefault();
     const role = "USER";
    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    const mobileNo = document.querySelector("#mobileNo").value;
    const password = document.querySelector("#password").value;
    const confirmpassword = document.querySelector("#confirmpassword").value;
    if (password.length < 8) {
        alert("password must be greater than 8 characters");
    } else if (password != confirmpassword) {
        alert("confirmpassword must be equal to password");
    } else {
        const userobj = {
            "name": name,
            "email": email,
            "mobileNo": mobileNo,
            "password": password,
            "role": role
        };
        console.log(userobj);

        userservice.signUp(userobj).then(res => {
            let data = res.data;
            console.log(data);
            alert("successfully register");
            window.location.href = "login.html";

        }).catch(err => {
            console.log(err.response.data);
            //  console.log(err.response.data);
            alert("Unable to register" + err.message);
        });


    }

}