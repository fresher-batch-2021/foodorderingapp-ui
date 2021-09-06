 function myOrder() {
    let email = JSON.parse(localStorage.getItem("LOGGED_IN_USER")).email;
    console.log(email);
    let content = "";
    foodservice.orderAllFood().then(res => {
        let orders = res.data.rows.map(obj => obj.doc);
        console.table(orders);
        let productList = orders.filter(obj => obj.email == email);
        let i = 0;
        for (let productobj of productList) {
            console.table(productobj);
            i = i + 1;
            let itemList = "<ul>";
            for (let item of productobj.productDetails) {
                itemList += `<li>${item.foodname} - ${item.price} Qty - Rs. ${item.Quantity}</li>`
            }

            itemList += '</ul>'

            content = content + `<tr>
           
            <td>   ${productobj.name} </td>
            <td>   ${productobj.phonenumber} </td> 
            <td>   ${itemList} </td> 
            
            <td>   ${productobj.address} </td>
            <td>   ${productobj.status} </td> 
            <td>   ${productobj.totalAmount} </td> 
            <td>   ${productobj.Payment} </td>
          </tr>`;
            document.querySelector("#myOrderContainer").innerHTML = content;
        }
    }).catch(err => {
        console.log(err);
    });

}
myOrder();
function cancelOrdered(id)
{
    foodservice.getProduct(id).then(res=>
        {
            let productObj=res.data;
            productObj.status="CANCELLED";
            foodservice.cancelOrder(id,orderObj)
            .then(res=>
                {
                    alert("hema");
                    window.location.reload();
                }).catch(err=>
                    {
                        alert("order can't not be cancelled")
                        console.log(err);
                    });
        });
}