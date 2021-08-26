
$("#header").load("header.html");
function orderplaced() {
  event.preventDefault();
const name = document.querySelector("#name").value;
const phonenumber = document.querySelector("#phonenumber").value;
const DeliveryDate = document.querySelector("#DeliveryDate").value;
const DeliveryTime = document.querySelector("#DeliveryTime").value;
const address = document.querySelector("#address").value;

       
if (name == "" || name == null || name.trim() == "")
{
 alert("Name cannot be blank");
}
else if (phonenumber == "" || phonenumber == null || phonenumber.trim() == "")
{
 alert("Phone number cannot be blank");
}
else if (DeliveryDate == "" || DeliveryDate == null || DeliveryDate.trim() == "")
{
 alert("date cannot be blank");
}
else  if (DeliveryTime == "" || DeliveryTime ==null || DeliveryTime.trim() =="")
{
 alert("Time cannot be blank");
}

else if (address === "" || address === null || address.trim() == "") 
{
  alert("Address cannot be blank");
}
else
              {
                let product=JSON.parse(localStorage.getItem("PRODUCTS"));
                const regobj = {
                "Name":name,
                "phonenumber":phonenumber,
                "date":date,
                 "time":time,
                "address":address,
                products:product,
                status:"intial"
            
              };
              

                     alert("Successfully ordered");
                     window.location.href = "index.html";
       
              }
          }
