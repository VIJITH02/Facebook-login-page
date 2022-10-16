$(document).ready(function(){
    $("#signup-form").validate({
        rules:{
            uname:{
                required:true,
                minlength:4
                
            },
            pword:{
                required:true,
                minlength:4
            }
        },
        messages:{
            uname:{
                required:"Enter username",
               // minlength:"Enter atlesat 4 characters"
            }
        }
    })
})