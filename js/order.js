$("#header").load("header.html");





function orderNow() {
    event.preventDefault();
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();
    today = dd + '-' + mm + '-' + yyyy;
    console.log(today);
    let total = localStorage.getItem("totalAmount");
    const name = document.querySelector("#name").value;
    const phonenumber = document.querySelector("#phonenumber").value;
    const DeliveryDate = document.querySelector("#DeliveryDate").value;
    const DeliveryTime = document.querySelector("#DeliveryTime").value;
    const address = document.querySelector("#address").value;
    let product = JSON.parse(localStorage.getItem("PRODUCTS"));
    let user = JSON.parse(localStorage.getItem("LOGGED_IN_USER"));
    let loggedInEmail = user != null ? user.email : null;
    try {
        
        if (name == "" || name == null || name.trim() == "") {
            alert("Name cannot be blank");
        } else if (phonenumber == "" || phonenumber == null || phonenumber.trim() == "") {
            alert("Phone number cannot be blank");
        } else if (DeliveryDate == "" || DeliveryDate == null || DeliveryDate.trim() == "") {
            alert("date cannot be blank");
        } else if (DeliveryTime == "" || DeliveryTime == null || DeliveryTime.trim() == "") {
            alert("Time cannot be blank");
        } else if (address === "" || address === null || address.trim() == "") {
            alert("Address cannot be blank");
        } else {

        let orderNow = {
            name: name,
            phonenumber: phonenumber,
            TodayDate: today,
            date: date,
            address: address,
            status: "ORDERED",
            totalAmount: total,
            Payment: "Cash On Delivery",
            productDetails: product,
            email: loggedInEmail
        };
        console.log(orderNow);
        foodservice.orderFood(orderNow).then(res => {
            toastr.success("your order successfully placed");
            setTimeout(function() {
                window.location.href = "index.html"
            }, 3000);
            localStorage.removeItem("PRODUCTS");
            localStorage.removeItem("cartCount");
        }).catch(err => {
            toastr.error("order failed");
        });
    } } catch (err) {
        console.log(err.message);
        alert(err.message);
    }
}