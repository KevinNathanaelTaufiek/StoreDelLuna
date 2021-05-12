function validasi() {
    let formx = document.forms["registrasi"]["username"].value
    if(formx == ""){
        alert("Please fill your username!")
        return false
    }
    else if(formx.length < 5 || formx.length >15){
        alert("Username length must be between 5 and 15!")
        return false
    }
    else if ( !isNaN(formx)) {
        alert("Username value must not just numbers!")
        return false
    }


    formx = document.forms["registrasi"]["password"].value
    if (formx == "") {
        alert("Please fill your password!")
        return false
    }
    else if (formx.length < 8) {
        alert("Password length must be more than 8 characters!")
        return false
    }


    let tempx = formx
    formx = document.forms["registrasi"]["ConfirmPassword"].value

    if(tempx!=formx){
        alert("Your password and confirm password are different!")
        return false
    }


    formx = document.forms["registrasi"]["FullName"].value
    if (formx == "") {
        alert("Please fill your Full Name!")
        return false
    }


    formx = document.getElementsByName("Gender")
    var flag = false
    for(let i=0;i<formx.length;i++){
        if(formx[i].checked){
            flag=true
        }
    }
    if(!flag){
        alert("Please choose your gender!")
        return false
    }


    formx = document.forms["registrasi"]["Email"].value
    if(formx==""){
        alert("Please fill your Email!")
        return false
    }


    formx = document.forms["registrasi"]["Age"].value
    if (formx == "") {
        alert("Please fill your age!")
        return false
    }
    else if (formx < 17) {
        alert("You must be older than 17y.o. to sign up!")
        return false
    }

    formx = document.getElementById("Agree")
    if (formx.checked == false) {
        alert("Please check the Agreement!")
        return false
    }
}




$(document).ready(function(){
    $('.gambar').first().addClass('tampil');
    $('.gambar').hide();
    $('.tampil').show();
    $('#setelah').on('click', lanjut);
    $('#sebelum').on('click', balik);
    setInterval(lanjut, 8000);

    function lanjut() {
        $('.tampil').removeClass('tampil').addClass('x');
        if ($('.x').is(':last-child')) {
            $('.gambar').first().addClass('tampil');
        } else {
            $('.x').next().addClass('tampil');
        }
        $('.x').removeClass('x');
        $('.gambar').fadeOut(800);
        $('.tampil').fadeIn(800);
    }
    function balik() {
        $('.tampil').removeClass('tampil').addClass('x');
        if ($('.x').is(':first-child')) {
            $('.gambar').last().addClass('tampil');
        } else {
            $('.x').prev().addClass('tampil');
        }
        $('.x').removeClass('x');
        $('.gambar').fadeOut(800);
        $('.tampil').fadeIn(800);
    }
});

$('.tampil').show();
$('#setelah').on('click', lanjut);
$('#sebelum').on('click', balik);
setInterval(lanjut, 8000);