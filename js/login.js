
 
function login()
{
    event.preventDefault();
    const email=document.getElementById("email").value;
    const password=document.getElementById("password").value;
console.log(email + "+" + password);
  
const userObj={
  "email" : email,
   "password": password
};
console.log(userObj);
        if(password  == "" )
        {
         alert("password cannot be blank")
        }
    
         else if (password.length < 8)
        {
         alert("password must be 8 characters");

        }

        else
        {
     
      userservice.login(email,password) .then(res=>
     {
         let data=res.data;
         localStorage.setItem("LOGGED_IN_USER",JSON.stringify(res.data));
         alert("login successfull");
         window.location.href = "index.html";
       
      }) .catch(err =>{
         console.log(err.response.data);
         alert("unable to login");

      });
}
    }

  

