function editFood() {
    
    event.preventDefault();
    const catg = document.querySelector("#catg").value;
    const name = document.querySelector("#name").value;
    const imageurl = document.querySelector("#imageurl").value;
    const price = document.querySelector("#price").value;
    const qty = document.querySelector("#qty").value;

    console.log(catg + "+" + name + "+" + imageurl + price + "+" + qty);

    let foodObj = {
        "catg": catg,
        "name": name,
        "imageurl": imageurl,
        "price": price,
        "qty": qty
    };
    
    
    Product() 
    {
        foodService.getProduct(id).then(res => {
          
          
         let product = res;
         foodObj. patchValue(product);
          
          console.log(res);
        });
      }
      try
      {
foodservice.updateProduct(orderObj).then(res=>
   
   {
       let data=res.data.doc;
       console.log(data);
       
   } ).catch (res=>
    {
        console.error(err);
    });
      }
      catch(err)
      {
console.error(err);
      }
    
}
