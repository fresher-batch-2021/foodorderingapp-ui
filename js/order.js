
function orderNow() {
    event.preventDefault();
    let total = localStorage.getItem("totalAmount");
    const name = document.querySelector("#name").value;
    const phonenumber = document.querySelector("#phonenumber").value;
    const DeliveryDate = document.querySelector("#date").value;
    const DeliveryTime = document.querySelector("#DeliveryTime").value;
    const address = document.querySelector("#address").value;
    const totalAmount = document.querySelector("#totalAmount").value;    
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
            date: date,
            address: address,
            status: "ORDERED",
            totalAmount: totalAmount,
            Payment: "Cash On Delivery",
            productDetails: product,
            email: loggedInEmail
        };
        console.log(orderNow);
        // move();

        
        foodservice.orderFood(orderNow).then(res => {

            toastr.success("your order successfully placed");
            setTimeout(function() {
                window.location.href = "index.html"
            }, 1000);
            localStorage.removeItem("PRODUCTS");
            localStorage.removeItem("cartCount");
        }).catch(err => {
            toastr.error("order failed");
        });
    } } catch (err) {
        console.log(err.message);
        alert(err.message);
    }

};



// window.addEventListener('DOMContentLoaded', (event) => {


//     //set total amount in textbox value
//     document.querySelector("#totalAmount").value=BillCalculator.getTotalAmount();
//


var i = 0;
function move() {
    // event.preventDefault();
    var progress = document.getElementById("myProgress");
     progress.style.display="block";
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar");
    var width = 10;
    var id = setInterval(frame, 50);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
        elem.innerHTML = width  + "%";
      }
    }
  }
}
move();
