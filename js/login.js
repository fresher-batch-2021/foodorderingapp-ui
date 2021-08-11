
 $("#header").load("header.html") 
 
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
         console.log(data);
         alert("successfully login");
         window.location.href="index.html";
     }) .catch(err=>
     {
         console.error("err");
         alert("Incorrect Password");
     });
     
        }
     
 }
