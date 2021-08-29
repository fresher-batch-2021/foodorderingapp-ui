$("#header").load("_header.html");

function addFood() {
    event.preventDefault();
    const catg = document.querySelector("#catg").value;
    const name = document.querySelector("#name").value;
    const imageurl = document.querySelector("#imageurl").value;
    const price = document.querySelector("#price").value;
    const qty = document.querySelector("#qty").value;

    console.log(catg + "+" + name + "+" + imageurl + price + "+" + qty);

    let formValues = {
        "catg": catg,
        "name": name,
        "imageurl": imageurl,
        "price": price,
        "qty": qty
    };
    console.log(formValues);



    try {


        foodservice.addfood(formValues).then(res => {
            let food_list = res.data;
            alert("Food Added successful");
            window.location.href = "food_list_a.html";
        }).catch(err => {
            console.log(err.response.data);
            alert("Failed to add Food");
        });

    } catch (err) {
        console.error(err.message);
        alert("Error: " + err.message);
    }



}