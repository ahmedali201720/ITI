$("#sal").text($("#myRange").val());
$("#submit").click(function (e) 
{
    var nameValue = $("#fname").val();
    var emailValue = $("#email").val();
    var passValue = $("#pass").val();
    var ageValue = $("#age").val();
    if(!validateName(nameValue))
    {
        alert("Check if name field is empty or all data in a correct format.");
        return;
    } 
    else if(!validateEmail(emailValue))
    {
        alert("Check if email is in a correct format.");
        return;
    } 
    else if(!validatePassword(passValue))
    {
        alert("Check if password is in a correct format.");
        return;
    } 
    else if(!validateAge(ageValue))
    {
        alert("Check if age is greater than 21 or it is in a correct format.");
        return;
    }
    alert("Data Submitted Successfully."); 
});

function validateName(name){
    if(name.length <= 1)
       return false;
    else
       return true;
}
function validateEmail(mail){
    let mailregex = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i
    if(!mail.match(mailregex)) 
    {
        return false;
    }
    else {
        return true;
    }
}
function validatePassword(passwd){
    if(passwd.length <= 8) 
    {
        return false;
    }
    else{
        return true;
    }
}
function validateAge(age){
    let ageregex = /^[0-9]+$/;
    if(!(parseInt(age) > 21) || (!age.match(ageregex)) ) 
    {
        return false;
    }
    else{
        return true;
    }
}

function myFunction() {
    $("#sal").text($("#myRange").val());
  }