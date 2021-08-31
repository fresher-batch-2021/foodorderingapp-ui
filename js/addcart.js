$("#header").load("header.html");
let products = {}; //inistialize json array

function getAllProducts() {
    let products = JSON.parse(localStorage.getItem("PRODUCTS")) || [];
    // alert(products);
    return products;

}

function addProducts(product) {
    let products = this.getAllProducts();
    products.push(product);
    localStorage.setItem("PRODUCTS", JSON.stringify(products));
}

function addProductToLs() {
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

        // addProducts(product);

        toCart(product);
    }
}
addProductToLs();

function toCart(product) {

    let cartItemsStr = localStorage.getItem("PRODUCTS");
    let cartItems = cartItemsStr != null ? JSON.parse(cartItemsStr) : [];
    console.log(cartItems);
    // If item already exist, update the quantity
    let index = cartItems.findIndex(cartItems => cartItems.foodname == product.foodname);
    // alert(index);
    console.log(index);
    if (index != -1) {
        let cartObj = cartItems[index];
        console.log("before ", cartObj);
        // localStorage.setItem("PRODUCTS",JSON.stringify(cartItems));
        // console.log(cartObj[2].Quantity);
        // if(cartObj.Quantity === 0)
        // {
        //   cartObj.Quantity=1;
        //   console.log(cartObj.Quantity);
        // }
        // else
        // {
        cartObj.Quantity++;
        cartItems[index] = cartObj;
        console.log("After", cartObj);
        localStorage.setItem("PRODUCTS", JSON.stringify(cartItems));

    } else {
        addProducts(product);
    }
    // let products = this.getAllProducts();
    // products.push(product);
    // localStorage.setItem("PRODUCTS",JSON.stringify(cartItems));
}
let productList = getAllProducts();
addtocart();

function addtocart() {
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
            "<tr><td>" + count + "</td><td>" + list.foodname + "</td><td>" + list.price + "</td><td>" + list.Quantity + "</td><td>" + total + "</td><td>" + `<button type="button" onclick="deleteCartData(${count - 1})"> delete </button>` + "</td>";
        count++;
        sum = sum + total;
        console.log(sum);
    }
    let end = `<tr><td></td><td rowspan="5" class="totalRow" >total</td><td rowspan="5">${sum}</td></tr></table>
  `;
    localStorage.setItem("totalAmount", sum);
    content = itemList + end;
    // var sumValue = parseFloat(sum);
    // console.log(sumValue);

    document.querySelector("#cart-table").innerHTML = content;

    localStorage.setItem("productList", JSON.stringify(productList));


}

function deleteCartData(index) {
    var arr = JSON.parse(localStorage.getItem("productList"));

    if (arr[index].Quantity > 1) {

        arr[index].Quantity--;
    } else {
        arr.splice(index, 1);
    }
    console.log(arr[index]);
    localStorage.setItem("PRODUCTS", JSON.stringify(arr));
    window.location.href = "addcart.html";
    alert("Do You want to remove this item from cart");
    // addtocart();
}

function cartCheck() {
    let cartItem = JSON.parse(localStorage.getItem("PRODUCTS"));
    if (cartItem == null || cartItem == "") {
        alert("cant order when cart is empty ");
        window.location.href = "veg.html";
    } else {
        window.location.href = "order.html";
    }
}