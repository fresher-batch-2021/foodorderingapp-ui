
 $("#header").load("header.html")
alert("welcome");
function forgotpassword()
{   
    event.preventDefault();
    const password=document.getElementById("password").value;
    const confirmpassword=document.getElementById("confirmpassword").value;
    

        if(confirmpassword  == "")
        {
         alert("confirmpassword cannot be blank");
        }
    
         else
        {
              const userobj={
             "password" :password,
              "confirmpassword": confirmpassword
                              
                }
                alert("Successfully created");

                window.location.href = "index.html";
        }
}



 
