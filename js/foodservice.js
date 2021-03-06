const dbUsername = "apikey-v2-1zxymrqa2rwcwp3esoqslwcsrnsvh2ggpy6jmusqnlz9";
const dbPassword = "8db4bc5abe318da5e50e638f8cb126b5";
const basicAuth = "Basic " + btoa(dbUsername + ':' + dbPassword);
class foodservice {
    static addfood(formValues)//add food
     {


        const url = "https://e212ecf3-82ab-4f31-b454-c3866556584d-bluemix.cloudantnosqldb.appdomain.cloud/foodorder_list";

        return axios.post(url, formValues, { headers: { 'Authorization': basicAuth } });
    }

    static getFood() //search
    {

        const url = "https://e212ecf3-82ab-4f31-b454-c3866556584d-bluemix.cloudantnosqldb.appdomain.cloud/foodorder_list/_all_docs?include_docs=true";
        return axios.get(url, { headers: { 'Authorization': basicAuth } });
    }

    static orderAllFood() //my order //orderlist
    {
        const url = "https://e212ecf3-82ab-4f31-b454-c3866556584d-bluemix.cloudantnosqldb.appdomain.cloud/foodorder_order/_all_docs?include_docs=true";
        return axios.get(url, { headers: { 'Authorization': basicAuth } });
    }
    static veglist()//veg image
    
    {
        const url = "https://e212ecf3-82ab-4f31-b454-c3866556584d-bluemix.cloudantnosqldb.appdomain.cloud/foodorder_veglist/_all_docs?include_docs=true";
        return axios.get(url, { headers: { 'Authorization': basicAuth } });
    }
    static nonveglist()//nonveg image 
    {
        const url = "https://e212ecf3-82ab-4f31-b454-c3866556584d-bluemix.cloudantnosqldb.appdomain.cloud/nonveglist/_all_docs?include_docs=true";
        return axios.get(url, { headers: { 'Authorization': basicAuth } });
    
    }

    static orderFood(orderNow)//order page
     {
        const url = "https://e212ecf3-82ab-4f31-b454-c3866556584d-bluemix.cloudantnosqldb.appdomain.cloud/foodorder_order/";
        return axios.post(url, orderNow,{ headers: { 'Authorization': basicAuth } });
    }

    static getProduct(id) {
        const url = `https://e212ecf3-82ab-4f31-b454-c3866556584d-bluemix.cloudantnosqldb.appdomain.cloud/foodorder_order/${id}`;
        return axios.get(url, id,{ headers: { 'Authorization': basicAuth } });
    }
    static updateProduct(orderObj)//update food
     {
        const url = `https://e212ecf3-82ab-4f31-b454-c3866556584d-bluemix.cloudantnosqldb.appdomain.cloud/foodorder_order/${orderObj
        .id}`;
        return axios.get(url, orderObj,{ headers: { 'Authorization': basicAuth } });
    }
    
    static updateProduct(orderObj) 
    {
        const url = `https://e212ecf3-82ab-4f31-b454-c3866556584d-bluemix.cloudantnosqldb.appdomain.cloud/foodorder_list/${orderObj
        .id}`;
        return axios.put(url, orderObj,{ headers: { 'Authorization': basicAuth } });
    }
    
    static getProduct(productObj) //myorder 
    {
        const url = `https://e212ecf3-82ab-4f31-b454-c3866556584d-bluemix.cloudantnosqldb.appdomain.cloud/foodorder_list/${id}`;
        return axios.get(url, productObj,{ headers: { 'Authorization': basicAuth } });
    }
    static cancelOrder(id,orderObj) //myorder 
    {
        const url = `https://e212ecf3-82ab-4f31-b454-c3866556584d-bluemix.cloudantnosqldb.appdomain.cloud/foodorder_list/${id}`;
        return axios.put(url, orderObj,{ headers: { 'Authorization': basicAuth } });
    }
    

    

}

