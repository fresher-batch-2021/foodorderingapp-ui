
function register()
{
    event.preventDefault();
    const name=document.querySelector("#name").value;
    
    const email=document.querySelector("#email").value;
    const mobileNo=document.querySelector("#mobileNo").value;
    
    const password=document.querySelector("#password").value;
    const confirmpassword=document.querySelector("#confirmpassword").value;

    if(password.length < 8)
    {
            alert("password must be greater than 8 characters");
    }
    else if(password!=confirmpassword)
    {
            alert("confirmpassword must be equal to password");
    }
    else 
    {
      const userobj={
     "name" : name,
     "email" : email,
     "mobileNo":mobileNo,
     "password": password
         };
     console.log(userobj);
     const url="https://product-mock-api.herokuapp.com/foodapp/api/v1/auth/register";
     axios.post(url,userobj).then(res=>
     {
         let data=res.data;
         console.log(data);
         alert("successfully register");
        
     }) .catch(err=>
     {
         console.error("err");
         alert("error");
     });
     

    }
     
 }

