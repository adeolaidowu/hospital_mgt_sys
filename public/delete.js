$(document).ready(function(){
let msg = "You have successfully deleted a patient";
let urlParams = new URLSearchParams(window.location.search);
let patientId = urlParams.get('patientid');
$.ajax({
    url: `http://localhost:3000/patients/${patientId}`,
    method: "get"
}).done(function(patient){
    let patientName = patient.name;
    $('.dlt').html(`<p>Are you sure you want to delete ${patientName}?</p><button class='btn btn-danger yes'>Yes</button> <button class='btn btn-outline-primary no'>No</button>`)
    $('.yes').click(function(){
        $.ajax({
            url: `http://localhost:3000/patients/${patientId}`,
            method: "delete"
        }).done(() => {
            window.location = `admindash.html?successmsg=${msg}`;
        })
        
    })
    $('.no').click(function(){
        window.location = "admindash.html"
    })
})
    
})