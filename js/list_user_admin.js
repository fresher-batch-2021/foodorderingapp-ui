$("#header").load("header.html");

function listData() {

    let content = "";

    userservice.getUsers().then(res => {
        let data = res.data.rows;
        let users = data.map(obj => obj.doc);


        console.log(users);

        let i = 0;
        for (let listUser of users) {
            i = i + 1;



            content = content + "<tr><td>" + i + "</td>" + "<td>" + listUser.email + "</td>" + "<td>" + listUser.name + "</td>" + "<td>"  + listUser.mobileNo + "</td></tr>";


            document.querySelector("#listUserDataAdm").innerHTML = content;
        }
        // window.location.href="list.html";
    }).catch(err => {
        console.log(err.response.data);
        alert("Register failed");
    });

}
listData();