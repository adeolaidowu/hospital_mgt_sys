// form validation
$(document).ready(function(){
   
    //function to validate form input
    $('.submit').click(function(f){
        let userName = $('#username').val().toLowerCase();
        let password = $('#password').val();
        if(password == "" || userName == "") {
            $('#error-msg').html('You must fill out all fields*');
            f.preventDefault();
        }else if(userName != "admin" || password != "dilligrout") {
            $('#error-msg').html('Invalid username or password');
            f.preventDefault();
        }else{
            window.location = "admindash.html";
        }
    });

    //check if patient exists before creating new
    $('.create').click(function(f){
        let name = $('#patientname').val();
        let age = $('#patientage').val();
        let email = $('#patientemail').val();
        let phone = $('#patientphone').val();
        let ailments = $('#ailment').val();
        f.preventDefault();
        // create patient for validation
        if(name == '' || age == '' || email == '' || phone == '' || ailments == ''){
            $('#err').html("<p class='text text-danger'>All fields need to be filled to check in a new patient</p>")
            return
        }
        $.ajax({
            url: "http://localhost:3000/patients",
            method: "get"
        }).done(function(patients){
            for(let patient of patients){
                if(patient.email === email && patient.name === name){
                     $('#msg').append(`<p class="alert alert-danger">This patient already exists</p>`);
                    return
                }
            }
            $.ajax({
                url: "http://localhost:3000/patients",
                method: "post",
                data: {
                    name,
                    email,
                    age,
                    phone,
                    ailments
                }
            }).done(function(){
                // $('#msg').append(`<p class="alert alert-success">A new patient has been checked in</p>`);
                // // setTimeout(() => {
                // //     window.location = "admindash.html"
                // // }, 9000) 
                window.location = "http://localhost:3000/admindash.html";
               
                
            })

        })

       
        
    })
    
})