const dbUsername="apikey-v2-1zxymrqa2rwcwp3esoqslwcsrnsvh2ggpy6jmusqnlz9";
const  dbPassword="8db4bc5abe318da5e50e638f8cb126b5";
const basicAuth="Basic " + btoa(dbUsername + ':' + dbPassword);
const url="https://e212ecf3-82ab-4f31-b454-c3866556584d-bluemix.cloudantnosqldb.appdomain.cloud/foodorder_users/_find";
class userservice{
    static login(email,password){

                 const requestData ={
                 selector:{
                 email: email,
                 password: password
  },
                 fields:["_id","name","email"],   
};
                return axios.post(url, requestData,{ headers: { Authorization: basicAuth } })
}

  static register(userobj)
  {
       
     const url="https://e212ecf3-82ab-4f31-b454-c3866556584d-bluemix.cloudantnosqldb.appdomain.cloud/foodorder_users";
     return axios.post(url,userobj,{ headers :{ 'Authorization':basicAuth }});
  }
}