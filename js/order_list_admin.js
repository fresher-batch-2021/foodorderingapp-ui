orderList();

function displayOrderItems() {
    let orderItem = JSON.parse(localStorage.getItem("orderElements"));
    console.log(orderItem);
    let content = `<table>
    <thead>
  <tr>
  <th id="s.no">S.NO</th>
  <th id="Name">Name</th>
  <th id="phonenumber">phonenumber</th>
  <th id="date">Date</th>
  <th id="time">Time</th>
  <th id="products">products</th>
  <th id="address">address</th>    
  </tr>
  </thead><tbody>`;
    let end = ` </tbody></table>`;
    alert("hari");
    console.log(displayOrderItems);
    let count = 1;
    let sum = 0;
    let total = 0;
    for (let item of orderItem) {
        

        total = item.Quantity * item.price;
        content = content + `
                    <tr>
                    <td>${count}</td>
                       
                       <td>${item.name}</td>
                       <td>${item.phonenumber}</td>
                       <td>${item.date}</td>
                       <td>${item.time}</td>
                       <td>${item.products}</td>
                       <td>${item.address}</td>
   

                       <td><a onclick="deleteCartData(${count-1})">delete</a></td>
                       
                     </tr>
                     `;

        sum = sum + total;

        count++;
    }


    content += end;

    document.querySelector("#orderList").innerHTML = content;



}
displayOrderItems();

function orderList() {
    foodservice.orderAllFood().then(res => {
        let data = res.data.rows;
        let productData = data.map(obj => obj.doc);
        console.log(productData);

    });
}