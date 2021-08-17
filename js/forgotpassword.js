
 $("#header").load("header.html")

function forgotpassword()
{   
    event.preventDefault();
    const password=document.getElementById("password").value;
    const resetpassword=document.getElementById("resetpassword").value;
    

        if(resetpassword  == "")
        {
         alert("resetpassword cannot be blank");
        }
    
         else
        {
               const userobj={
               "password" :password,
               "resetpassword": resetpassword
                              
        }
                alert("Successfully created");

                window.location.href = "index.html";
        }
}



 
