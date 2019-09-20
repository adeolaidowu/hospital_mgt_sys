$(document).ready(function(){
    
let urlParams = new URLSearchParams(window.location.search);
let msg = urlParams.get('msg');
let successmsg = urlParams.get('successmsg');
if(msg !== null){
    $('#success-msg').html(`<p class='alert alert-success'>${msg}</p>`).fadeOut(5000);
}
if(successmsg !== null){
    $('#success-msg').html(`<p class='alert alert-success'>${successmsg}</p>`).fadeOut(5000);
}
    $('.fetchpatient').click(function(f){
        f.preventDefault();
        let fullname = $('#searchname').val();
       if(fullname == ""){
        $('.show-single').html("<p class='text text-danger'>Please type a name</p>")
        return
       }

        $.ajax({
            url: 'http://localhost:3000/patients',
            method: 'get'
        }).done((patients) => {
            for(let patient of patients){
                if(patient.name.toLowerCase() === fullname.toLowerCase()){
                    $('.show-single').html(`
                    <table class= 'table table-dark table-bordered table-striped'>
                    <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Age</th>
                    <th>Phone</th>
                    <th>Ailments</th>
                    </tr>
                    <tr>
                    <td>${patient.name}</td>
                    <td>${patient.email}</td>
                    <td>${patient.age}</td>
                    <td>${patient.phone}</td>
                    <td>${patient.ailments}</td>
                    <td><a href='edit.html?patientid=${patient.id}' class= 'badge badge-primary'>Edit</a></td>
                    <td><a href='delete.html?patientid=${patient.id}' class='badge badge-danger'>Delete</a></td>
                    </tr>
                    </table>
                    ` 
                    )
                    return
                }
            }
            $('.show-single').html('<p class="alert alert-danger">No such patient</p>')
            return
        })
    })
    $('.signout').click(function(e){
        e.preventDefault();
        // localStorage.clear();
        delete localStorage.admin
        window.location = "index.html";
        
       
        
    })
    if(!localStorage.admin){
        window.location = "signin.html";
    }
})