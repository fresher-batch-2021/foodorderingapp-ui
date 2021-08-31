let content = "";
var count = 0;

const dbUsername = "apikey-v2-1zxymrqa2rwcwp3esoqslwcsrnsvh2ggpy6jmusqnlz9";
const dbPassword = "8db4bc5abe318da5e50e638f8cb126b5";
const basicAuth = "Basic " + btoa(dbUsername + ':' + dbPassword);
const url = "https://e212ecf3-82ab-4f31-b454-c3866556584d-bluemix.cloudantnosqldb.appdomain.cloud/nonveglist/_all_docs?include_docs=true";
axios.get(url, { headers: { Authorization: basicAuth } }).then(res => {
        let data = res.data.rows;
        let images = data.map(obj => obj.doc);


        console.log(images);

        for (let img of images) {

            content = content + `
          <div class="card">
          <img class = "veg-div2" src="images/${img.imageUrl}" alt="veg-biryani">
             <div class="product-detail-container">
                  <h4><b>${img.name}</b></h4>
                  <p>₹${img.price}.00</p>
                  <button><a href="addcart.html?foodname=${img.name}&price=${img.price}" class="add-cart-Button">Add to Cart</a></button>
              </div>
          </div> `


            count = count + 1;
            if (count == 2) {
                content = content + `<br>`;
                count = 0;
            }
        }

        document.querySelector("#nonvegcontainer").innerHTML = content;
    })
    .catch((err) => {
        console.log(err.response.data);
        alert("Register failed");

    });