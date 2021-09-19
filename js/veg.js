function vegItems()
{
let content = "";
let count = 0;

foodservice.veglist().then(res => {
        let data = res.data.rows;
        if(res)
        {
            hideLoader();
        let images = data.map(obj => obj.doc);

        console.log(images);

        for (let img of images) {


            content = content + `
            <div class="card">
            <figure>
            <img class="veg-div" src="images/${img.imageUrl}"
            alt="chicken">
            
            <div class="product-detail-container">
            <figcaption><b>${img.name}</b></figcaption>
        
     <figcaption><p>MRP:₹${img.price}.00</p></figcaption>
            </figure>
            <button><a href="addcart.html?foodname=${img.name}&price=${img.price}" class="add-cart-button">Add to Cart</a></button>


            </div>
            </div>`;
            count = count + 1;
            if (count == 5) {
                content = content + `<br>`;
                count = 0;
            }
        }
    

        document.querySelector("#vegcontainer").innerHTML = content;
    }
    })
    .catch((err) => {
        console.log(err.response.data);
        alert("Register failed");

    })

}
vegItems();
function hideLoader()
{
    document.querySelector(".loader").style.display="none";
}



