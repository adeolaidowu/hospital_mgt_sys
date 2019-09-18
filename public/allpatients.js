$(document).ready(function(){
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
                    <td><a href='#' class= 'badge badge-primary'>Edit</a></td>
                    <td><a href='#' class='badge badge-danger'>Delete</a></td>
                </tr>
                `
            )
        }
        //console.log(patients);
    })
})