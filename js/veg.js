function vegList()
{
    let content = "";
    var count = 0;
    
      const dbUsername="apikey-v2-1zxymrqa2rwcwp3esoqslwcsrnsvh2ggpy6jmusqnlz9";
      const dbPassword="8db4bc5abe318da5e50e638f8cb126b5";
      const basicAuth="Basic " + btoa(dbUsername + ':' + dbPassword);
      const url = "https://e212ecf3-82ab-4f31-b454-c3866556584d-bluemix.cloudantnosqldb.appdomain.cloud/foodorder_veglist/_all_docs?include_docs=true";
      axios.get(url, { headers: { Authorization: basicAuth } }).then(res => {
          let data = res.data.rows;
          let images = data.map(obj => obj.doc);
          console.log(images);
      
          for (let img of images) {
      
      
        content = content +
       `<div class="product-box">
        <div class="vegdiv">      
        <a href="addcart.html?foodname=${img.name}&price=${img.price}" ><img class = "vegimg" src="images/${img.imageUrl}" alt="veg-biryani"></a><br>
        <p>${img.name}</p>
        <p>${img.price}</p>
        </div>
        </div>`;
        count = count + 1;
        if (count == 2) 
        {
            content = content + `<br>`;
            count = 0;
        }
    }
      
    document.querySelector("#vegcontainer").innerHTML = content;
      })
    .catch((err) => {
      console.log(err.response.data);
      alert("Register failed");
  
  });
  
}
vegList();





