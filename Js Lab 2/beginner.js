var sel = parseFloat(prompt("Enter the Number : "));
Selector(sel);
// *************************************************************
function Selector(num){
   if(num != null && !isNaN(num)){
    if(num == 1){
        document.getElementById("first_img").src = "red.png";
        document.getElementsByClassName("message")[0].innerHTML = "Ready";
        document.getElementsByClassName("message")[0].style.color = "red";
    }
    else if(num == 2){
        document.getElementById("sec_img").src = "orange.png";
        document.getElementsByClassName("message")[0].innerHTML = "Steady";
        document.getElementsByClassName("message")[0].style.color = "orange";
    }
    else if(num == 3){
        document.getElementById("third_img").src = "green.png";
        document.getElementsByClassName("message")[0].innerHTML = "Go";
        document.getElementsByClassName("message")[0].style.color = "green";
    }
    else{
        alert("Please Enter number from 1-3 !!");
        var chk = parseFloat(prompt("Enter the Number : "));
        Selector(chk);
    }
   }
   else{
       alert("Please Enter a valid integer number (1-3)");
       var chk = parseFloat(prompt("Enter the Number : "));
       Selector(chk);
   }
}