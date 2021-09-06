// function editFood() {
    
//     event.preventDefault();
//     const catg = document.querySelector("#catg").value;
//     const name = document.querySelector("#name").value;
//     const imageurl = document.querySelector("#imageurl").value;
//     const price = document.querySelector("#price").value;
//     const qty = document.querySelector("#qty").value;

//     console.log(catg + "+" + name + "+" + imageurl + price + "+" + qty);

//     let foodObj = {
//         "catg": catg,
//         "name": name,
//         "imageurl": imageurl,
//         "price": price,
//         "qty": qty
//     };
    
    
//     Product() 
//     {
//         foodService.getProduct(id).then(res => {
          
          
//          let product = res;
//          foodObj. patchValue(product);
          
//           console.log(res);
//         });
//       }
//       try
//       {
// foodservice.updateProduct(orderObj).then(res=>
   
//    {
//        let data=res.data.doc;
//        console.log(data);
       
//    } ).catch (res=>
//     {
//         console.error(err);
//     });
//       }
//       catch(err)
//       {
// console.error(err);
//       }
    
// }





const queryString = window.location.search;
console.log(queryString);
const urlParams = new URLSearchParams(queryString);
console.log(urlParams)
const id = urlParams.get('id');
console.log(id);
function editDetails(id) {
    console.log(id);
    const dbUsername = "apikey-v2-1zxymrqa2rwcwp3esoqslwcsrnsvh2ggpy6jmusqnlz9";
    const dbPassword = "8db4bc5abe318da5e50e638f8cb126b5";
    const basicAuth = 'Basic ' + btoa(dbUsername + ':' + dbPassword);
    const url = `https://e212ecf3-82ab-4f31-b454-c3866556584d-bluemix.cloudantnosqldb.appdomain.cloud/foodorder_list/${id}`;
    axios.get(url, { headers: { Authorization: basicAuth } }).then(res => {
            console.log(res.data);
            const foodList= res.data;
            console.log(foodList);
            document.querySelector("#id").value=foodList._id;
            console.log( foodList._id);
            document.querySelector("#rev").value = foodList._rev;
            document.querySelector("#catg").value = foodList.catg;
            document.querySelector("#name").value = foodList.name;
            document.querySelector("#imageUrl").value;
            document.querySelector("#price").value = foodList.price;

        })
        // .catch(err => console.error(err));
}

editDetails(id);

function modifyDetails() {
    let id = document.querySelector("#id").value;
    let rev = document.querySelector("#rev").value;
    const catg = document.querySelector("#catg").value;
    const productName = document.querySelector("#name").value;
    const imageUrl = document.querySelector("#imageUrl").value;
    const price = document.querySelector("#price").value;
    const productImage = imageUrl.substr(imageUrl.lastIndexOf("\\") + 1);
    console.log(productName)
    console.log(productImage)
    console.log(price)
    let productValues = {
        "_id": id,
        "_rev": rev,
        catg:catg,
        productName: productName,
        productImage: "images/" + productImage,
        price: price
    };
    console.log("details", productValues);
    const dbUsername = "apikey-v2-1zxymrqa2rwcwp3esoqslwcsrnsvh2ggpy6jmusqnlz9";
    const dbPassword = "8db4bc5abe318da5e50e638f8cb126b5";
    const basicAuth = 'Basic ' + btoa(dbUsername + ':' + dbPassword);

    const url = `https://e212ecf3-82ab-4f31-b454-c3866556584d-bluemix.cloudantnosqldb.appdomain.cloud /foodorder_list/${id}`;

    axios.put(url, productValues, { headers: { Authorization: basicAuth } }).then(res => {
        console.log(productValues)
        alert("successfull");
        window.location.href = "food_list_admin.html";
    }).catch(err => alert("error "))

}

