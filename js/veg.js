function vegItems()
{
let content = "";
let count = 0;

foodservice.veglist().then(res => {
        let data = res.data.rows;
        let images = data.map(obj => obj.doc);

        console.log(images);

        for (let img of images) {


            content = content + `
            <div class="card">
            <img class="veg-div" src="images/${img.imageUrl}"
            alt="chicken">
            <div class="product-detail-container">
            <h4><b>${img.name}</b></h4>
        
            <p>MRP:₹${img.price}.00</p>
            <button><a href="addcart.html?foodname=${img.name}&price=${img.price}" class="add-cart-Button">Add to Cart</a></button>


            </div>
            </div>`;
            count = count + 1;
            if (count == 5) {
                content = content + `<br>`;
                count = 0;
            }
        }

        document.querySelector("#vegcontainer").innerHTML = content;
    })
    .catch((err) => {
        console.log(err.response.data);
        alert("Register failed");

    })

}
vegItems();