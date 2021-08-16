
 
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
      const dbUsername="apikey-v2-1zxymrqa2rwcwp3esoqslwcsrnsvh2ggpy6jmusqnlz9";
     const  dbPassword="8db4bc5abe318da5e50e638f8cb126b5";
     const basicAuth="Basic " + btoa(dbUsername + ':' + dbPassword);
    
     const url="https://e212ecf3-82ab-4f31-b454-c3866556584d-bluemix.cloudantnosqldb.appdomain.cloud/foodorder_users/_find";
     const requestData ={
       selector:{
         email: email,
         password: password
       },
       fields:["_id","name","email"],   
     };
     axios
     .post(url, requestData,{ headers: { Authorization: basicAuth } })

     .then(res=>
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

  //  
//  $("#header").load("header.html")  ;
// function  login()
// {
//     event.preventDefault();
//     const email=document.querySelector("#email").value;
//     const password=document.querySelector("#password").value;
//         if (password.length < 8)
//         {
            
//           alert("password must be greater than 8 characters");
//         }
//         else
//         { 
//          const userobj={
  
//         "email":email,
//         "password":password
//        };
//           console.log(userobj);
//            const url="https://product-mock-api.herokuapp.com/medicalapp/api/v1/auth/login";
//            axios.post(url,userobj).then(res=>
//            {
//                let data=res.data;
//                localStorage.setItem("LOGGED_IN_USER",JSON.stringify(res.data));
//                console.log(data);
//                alert("successfully logged in");
//                window.location.href="index.html";
//            }) .catch(err=>
//            {
//              console.error("err");
//                alert("Incorrect Password");
//            });
          
          
//         }

  
// }

