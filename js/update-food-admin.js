let params = new URLSearchParams(window.location.search.substr(1));

let _id = params.get("id");
TaskService.getTasks(_id).then(res => {
    let update = res.data;
    console.log(update);


    document.querySelector("#attendanceDate").value = update.attendanceDate;

    document.querySelector("#taskName").value = update.name;


    document.querySelector("#timeIn").value = update.inTime;

    document.querySelector("#timeOut").value = update.outTime;

    document.querySelector("#comments").value = update.comments;


    document.querySelector("#_id").value = update._id;
    document.querySelector("#_rev").value = update._rev;

});

function updateTask() {
    alert("hai");
    console.log("hai");
    event.preventDefault();
    const attendanceDate = document.querySelector("#attendanceDate").value;
    const taskName = document.querySelector("#taskName").value;


    const timeIn = document.querySelector("#timeIn").value;

    const timeOut = document.querySelector("#timeOut").value;

    const totalHours = SumHours();

    const comments = document.querySelector("#comments").value;

    const id = document.querySelector("#_id").value;
    const rev = document.querySelector("#_rev").value;



    let formValues = {
        "_id": id,
        "_rev": rev,
        "attendanceDate": attendanceDate,
        "timeIn": timeIn,
        "timeOut": timeOut,
        "comments": comments,
        "totalHours": totalHours,
    };

    console.log(formValues);



    TaskService.updateTask(formValues).then(res => {
        let users = res.data;
        // localStorage.setItem("register_in_users",JSON.stringify(users));
        alert("Update successful");
        window.location.href = "timesheet_record.html";
    }).catch(err => {
        console.log(err.response.data);
        alert("update failed");
    });






}