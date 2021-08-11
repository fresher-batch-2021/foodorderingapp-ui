$("#header").load("header.html") 
 
      function displayitems() {
        let cartItems= [
          {SNo: 1,FoodName:"veg-briyani", Price:120},
           {SNo:2,FoodName:"Veg noodles",Price:80},
          {SNo:3,FoodName:"Dosa",Price:27},
          {SNo:4,FoodName:"Vegburger",Price:187}
        ];

        let content = "";
        for (let cart of cartItems) {
           let deletebutton=`<a href="addcart.html" onClick="deleteitem()" > Delete </a>`
          content =
            content +
            "<tr><td>" + cart.SNo + "</td><td>" + cart.FoodName + "</td><td>" + cart.Price + "</td><td>"+ deletebutton;
        }
        console.log(content);

        var total=0;
        for (let i = 0; i < cartItems.length; i++)
         {
            total += cartItems[i].Price;
         }
         content+="<tr><td colspan='2'>Total </td><td>Rs." + total + "</td></tr>";
        console.log(total);
        document.querySelector("#cart-table").innerHTML = content;
      }
      displayitems();
      function deleteitem()
      {
        let del=confirm("Do You want remove this item from cart");
        if(del)
        {
          alert("Successfully Deleted");
          window.location.href="task";
        }
        
      }
        
                    