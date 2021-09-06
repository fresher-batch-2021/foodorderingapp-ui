 function searchFood() {
    event.preventDefault();
    console.log("search Food");
    let productName = document.querySelector("#search").value;
    console.log(productName);
    foodservice.getFood().then(res => {
        const data = res.data.rows;
        const productData = data.map(obj => obj.doc);
        console.table(productData);
        let filteredProducts = productData;
        if (productName != "") {
            filteredProducts = productData.filter(obj => obj.name.toLowerCase().indexOf(productName.toLowerCase()) != -1);
        }
        console.table(filteredProducts);
        let productContent = "";
        for (let productobj of filteredProducts) {
            productContent = productContent + `<div class="card">
            <img src="images/${productobj.imageUrl}" alt="vegimg">
            <div class="product-detail-container">
                <h4><b>${productobj.name}</b></h4>
                <p>MRP:Rs.${productobj.price}</p>
                <button> <a class="add-cart-Button" onclick="checkLoginForMyOrder();" href="addcart.html?productName=${productobj.name}&price=${productobj.price}"> ADD TO CART</a></button>
            </div>
        </div>`
          
        }
        console.log(productContent);

        document.querySelector("#vegcontainer").innerHTML=productContent;
        

    });

}

 


