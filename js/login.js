
 
 
function login()
{
    event.preventDefault();
    const email=document.getElementById("email").value;
    const password=document.getElementById("password").value;

        if(password  =="")
        {
         alert("password cannot be blank")
        }
    
         else if (password.length < 8)
        {
            alert("password must be 8 characters");

        }

        else
        {
              const userobj={
             "email" : email,
              "password": password
         };
     console.log(userobj);
     const url="https://product-mock-api.herokuapp.com/foodapp/api/v1/auth/login";
     axios.post(url,userobj).then(res=>
     {
         let data=res.data;
         localStorage.setItem("LOGGED_IN_USER",JSON.stringify(res.data));
        alert("login successfull");
        if(user.role == "ADMIN"){
        window.location.href="";
        }
        else{
          window.location.href="";
        }
      }).catch(err =>{
        console.log(err);
        alert("unable to login");

      });
         
     
        }
     
 }
