const dbUsername="apikey-v2-1zxymrqa2rwcwp3esoqslwcsrnsvh2ggpy6jmusqnlz9";
const  dbPassword="8db4bc5abe318da5e50e638f8cb126b5";
const basicAuth="Basic " + btoa(dbUsername + ':' + dbPassword);

        
class foodservice{
    

    static getfood()
    {
        
        const url="https://e212ecf3-82ab-4f31-b454-c3866556584d-bluemix.cloudantnosqldb.appdomain.cloud/foodorder_list/_all_docs?include_docs=true";
        return axios.post(url,{headers:{'Authorization':basicAuth}});
    }
  
    
}

    

