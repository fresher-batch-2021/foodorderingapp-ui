$("#header").load("header.html");

function listData() {
    let content = "";

    const dbUsername = "apikey-v2-1zxymrqa2rwcwp3esoqslwcsrnsvh2ggpy6jmusqnlz9";
    const dbPassword = "8db4bc5abe318da5e50e638f8cb126b5";
    const basicAuth = "Basic " + btoa(dbUsername + ':' + dbPassword);
    const url = "https://e212ecf3-82ab-4f31-b454-c3866556584d-bluemix.cloudantnosqldb.appdomain.cloud/foodorder_list/_all_docs?include_docs=true";
     axios.get(url, { headers: { Authorization: basicAuth } }).then(res => {
        let data = res.data.rows;
        let food_list = data.map(obj => obj.doc);
        console.log(food_list);
        let count = 0;
        for (let foodList of food_list) {
            // total = item.Quantity * item.price;
            count = count + 1;



            content = content + `<tr>
            <td>   ${count} </td> 
            <td>   ${foodList.catg} </td>
            <td>   ${foodList.name} </td> 
            <td>   <img src="images/${foodList.imageUrl}" alt="food image"  >  </td> 
            <td>   ${foodList.price }</td> 
            <td>   ${foodList.qty }</td><td><input type="button" id="deleteButton" value="Delete" onclick="deleteRow('${foodList._id}', '${foodList._rev}')" />&ensp;<button><a href='update-food-admin.html?id=${food_list._id}' style="text-decoration:none;">Edit</a></button></td>
            
            </tr>`;


        }
        document.querySelector("#listFoodDataAdm").innerHTML = content;

        // return content;

        // window.location.href="list.html";
    }).catch(err => {
        console.log(err.response.data);
        alert("List failed");
    });

}
listData();


function deleteRow(id, rev) {
    alert(id);
    alert("Do you want to delete this data?");
    const dbUsername = "apikey-v2-1zxymrqa2rwcwp3esoqslwcsrnsvh2ggpy6jmusqnlz9";
    const dbPassword = "8db4bc5abe318da5e50e638f8cb126b5";
    const basicAuth = "Basic " + btoa(dbUsername + ":" + dbPassword);

    const url = "https://e212ecf3-82ab-4f31-b454-c3866556584d-bluemix.cloudantnosqldb.appdomain.cloud/foodorder_list/" + id + "?rev=" + rev;

    console.log(url);
    axios.delete(url, { headers: { 'Authorization': basicAuth } }).then(res => {
        alert("deleted succesfully");
        window.location.href = "food_list_Admin.html";
    }).catch(err => {
        alert("error in deleting");
    });

}