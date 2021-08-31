$("#header").load("header.html");

function orderplaced() {

    event.preventDefault();
    const name = document.querySelector("#name").value;
    const phonenumber = document.querySelector("#phonenumber").value;
    const DeliveryDate = document.querySelector("#DeliveryDate").value;
    const DeliveryTime = document.querySelector("#DeliveryTime").value;
    const address = document.querySelector("#address").value;


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
        let product = JSON.parse(localStorage.getItem("PRODUCTS"));
        const regobj = {
            "Name": name,
            "phonenumber": phonenumber,
            "date": DeliveryDate,
            "time": DeliveryTime,
            "address": address,
            "products": product,


        };

        localStorage.setItem("Delivery_Details", JSON.stringify(regobj));
        alert("Successfully ordered");
        window.location.href = "index.html";

    }
}
$(function () {
    var dtToday = new Date();

    var month = dtToday.getMonth() + 1;
    var day = dtToday.getDate();
    var year = dtToday.getFullYear();
    if (month < 10)
        month = '0' + month.toString();
    if (day < 10)
        day = '0' + day.toString();

    var minDate = year + '-' + month + '-' + day;

    $('#date').attr('min', minDate);
});
