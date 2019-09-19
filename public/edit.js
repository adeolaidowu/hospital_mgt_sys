let urlParams = new URLSearchParams(window.location.search);
let patientId = urlParams.get('patientid');
let msg = "Patient has been successfully updated";
$.ajax({
    url: `http://localhost:3000/patients/${patientId}`,
    method: 'get'
}).done((patient) => {
    $('#patientname').val(patient.name);
    $('#patientemail').val(patient.email);
    $('#patientphone').val(patient.phone);
    $('#patientage').val(patient.age);
    $('#ailment').val(patient.ailments);
})

$('.update').click(function(){
    let name, age, email, phone, ailments;
    name = $('#patientname').val();
    age = $('#patientage').val();
    email =  $('#patientemail').val();
    phone = $('#patientphone').val();
    ailments = $('#ailment').val()
    $.ajax({
        url: `http://localhost:3000/patients/${patientId}`,
        method: 'put',
        data: {
            name,
            age,
            email,
            phone,
            ailments
        }
    }).done(function(){
        window.location = `allpatients.html?msg=${msg}`
    })
})