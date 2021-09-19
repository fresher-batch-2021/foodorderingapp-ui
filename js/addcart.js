
let products = {}; //inistialize json array

function getAllProducts() 
{
    let products = JSON.parse(localStorage.getItem("PRODUCTS")) || [];
    return products;
}

function addProducts(product) 
{
    let products = this.getAllProducts();
    products.push(product);
    localStorage.setItem("PRODUCTS", JSON.stringify(products));
}

function addProductToLs() 
{
    console.log(window.location.search.substr(1));
    const params = new URLSearchParams(window.location.search.substr(1));
    if (params.has("foodname")) {
        let pro = params.get("foodname");
        let price = params.get("price");
        let product = {
            "foodname": pro,
            "price": price,
            "Quantity": 1
        };

        console.log("product", pro);
        console.log("price", price);
        toCart(product);
    }
}
addProductToLs();

function toCart(product) 
{

    let cartItemsStr = localStorage.getItem("PRODUCTS");
    let cartItems = cartItemsStr != null ? JSON.parse(cartItemsStr) : [];
    console.log(cartItems);
    let index = cartItems.findIndex(cartItems => cartItems.foodname == product.foodname);
    console.log(index);

    if (index != -1) {
        let cartObj = cartItems[index];
        console.log("before ", cartObj);
        cartObj.Quantity++;
        cartItems[index] = cartObj;
        console.log("After", cartObj);
        localStorage.setItem("PRODUCTS", JSON.stringify(cartItems));

    } 
    else
    {
        addProducts(product);
    }

}
let productList = getAllProducts();
addtocart();

function addtocart()
 {
    let itemList = "";
    let total = 0;
    let count = 1;
    let Quantity = 0;
    let sum = 0;
    console.log(sum);
    for (let list of productList) {
        console.log("foodname", list.foodname);
        console.log("price", list.price);
        let priceValue = parseFloat(list.price);
        total = priceValue * list.Quantity;
        console.log(total);
        itemList =
            itemList +
            "<tr><td>" + count + "</td><td>" + list.foodname + "</td><td>" + list.price + "</td><td>" + list.Quantity + "</td><td>" + total + "</td><td>" + `<button type="button" onclick="deleteCartData(${count - 1})"> <i class="material-icons">delete</i></button>` + "</td>";
        count++;
        sum = sum + total;
        console.log(sum);
    }
    let end = `<tr class="totalRow"><td colspan="4" class="net-amount" >Net Amount :</td><td colspan="2">${sum}</td></tr></table>
  `;
    localStorage.setItem("totalAmount", sum);
    content = itemList + end;
    

    document.querySelector("#cart-table").innerHTML = content;

    localStorage.setItem("productList", JSON.stringify(productList));


}

function deleteCartData(index) 
{
    let cfm = confirm("Do you want to cancel your Order ?");
        if (cfm) {


    let arr = JSON.parse(localStorage.getItem("productList"));

    if (arr[index].Quantity > 1) {

        arr[index].Quantity--;
    } else {
        arr.splice(index, 1);
    }
    console.log(arr[index]);
    localStorage.setItem("PRODUCTS", JSON.stringify(arr));
    window.location.href = "addcart.html";
    
    // addtocart();
}
}

function cartCheck() 
{
    let cartItem = JSON.parse(localStorage.getItem("PRODUCTS"));
    if (cartItem == null || cartItem == "") {
        alert("cant order when cart is empty ");
        window.location.href = "veg.html";
    } else {
        window.location.href = "order.html";
    }
}