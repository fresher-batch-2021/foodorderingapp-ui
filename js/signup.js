
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
     "name"    : name,
     "email"   : email,
     "mobileNo": mobileNo,
     "password": password
         };
     console.log(userobj);
     const dbUsername="apikey-v2-1zxymrqa2rwcwp3esoqslwcsrnsvh2ggpy6jmusqnlz9";
     const  dbPassword="8db4bc5abe318da5e50e638f8cb126b5";
     const basicAuth="Basic " + btoa(dbUsername + ':' + dbPassword);
     const url="https://e212ecf3-82ab-4f31-b454-c3866556584d-bluemix.cloudantnosqldb.appdomain.cloud/foodorder_users";

     axios.post(url,userobj,{ headers :{ 'Authorization':basicAuth }}).then(res=>
     {
         let data=res.data;
         console.log(data);
         alert("successfully register");
         window.location.href="login.html";
        
     }) .catch(err=>
     {
         console.log(err.response.data);
         alert("Unable to register");
     });
     

    }
     
 }

