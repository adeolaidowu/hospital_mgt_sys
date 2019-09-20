$(document).ready(function(){
let urlParams = new URLSearchParams(window.location.search);
let msg = urlParams.get('msg');
let successmg = urlParams.get('successmsg');
if(msg !== null){
    $('.showmsg').html(`<p class='alert alert-success'>${msg}</p>`).fadeOut(10000)
}

     //get all patients
     $.ajax({
        url: "http://localhost:3000/patients",
        method: "get"
    }).done(function(patients){
        for(let patient of patients){
            $('#tbody').append(
                `<tr>
                    <td>${patient.name}</td>
                    <td>${patient.email}</td>
                    <td>${patient.phone}</td>
                    <td>${patient.age}</td>
                    <td>${patient.ailments}</td>
                    <td><a href='edit.html?patientid=${patient.id}' class= 'badge badge-primary'>Edit</a></td>
                    <td><a href='delete.html?patientid=${patient.id}'' class='badge badge-danger'>Delete</a></td>
                </tr>
                `
            )
        }
        //console.log(patients);
    })
})