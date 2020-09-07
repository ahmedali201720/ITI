// Check id div exists or not 
var DivExistence = false;
// represents my added div
var target_div;
// ************************************************************************
// Add events to submit and reset
// ****************************************************************************
document.getElementById("saveForm").addEventListener("click", CheckData);
document.getElementById("resetForm").addEventListener("click", DivRemove);
// ************************************************************************
function CheckData()
{
    target_div = document.getElementById("my_div_id");
    if(target_div != null){ 
       DivRemove();
   }
   // ********************************************
   if(!checkName()){
    if(DivExistence == false){
        DivAdd();
    }
    ParaAdd("* Please Enter a valid Name","my-name");
    DivExistence = true;
   }
   if(!checkEmail()){
    if(DivExistence == false){
        DivAdd();
    }
    ParaAdd("* Please Enter a valid Email","my-mail");
    DivExistence = true;
   }
   if(!checkPassword()){
    if(DivExistence == false){
        DivAdd();
    }
    ParaAdd("* Password must be at least 8 characters","my-pass");
    DivExistence = true;
   }
   if(!checkGender()){
    if(DivExistence == false){
        DivAdd();
    }
    ParaAdd("* please select your gender","my-gender");
    DivExistence = true;
   }
   if(!checkSport()){
    if(DivExistence == false){
        DivAdd();
    }
    ParaAdd("* Please Select 2 sports at least","my-sport");
    DivExistence = true;
   }
   if(!checkCountry()){
    if(DivExistence == false){
        DivAdd();
    }
    ParaAdd("* Please select your country","my-country");
    DivExistence = true;
   }
   if(checkCountry()&checkSport()&checkGender()&checkName()&checkEmail()&checkPassword()){
     alert("* Data Submitted Successfully .");
     DivExistence = false;
   }
}
// ************************************************************************
// Add div when data is not valid
// ****************************************************************************
function DivAdd()
{
    var refNode = document.getElementsByTagName("ul")[0]; // reference node
    var node = document.getElementsByClassName("buttons")[0];
    var div = document.createElement("div");
    div.id = "my_div_id";
    div.className = 'my-div_class';
    div.style.backgroundColor = "red"
    div.style.padding = "10px"
    refNode.insertBefore(div, node);
}
// *************************************************************************
// Remove div
// ****************************************************************************
function DivRemove(){
    var parent = document.getElementsByTagName("ul")[0];
    var child = document.getElementById("my_div_id");
    if(child != null){
       parent.removeChild(child);
       DivExistence = false;
    }
}
// *************************************************************************
// Add paragraph to div
// ****************************************************************************
function ParaAdd(txt,id){
    var parent = document.getElementById("my_div_id");
    var para = document.createElement("p");
    para.id = id;
    para.innerHTML = txt;
    parent.appendChild(para);
}
// *************************************************************************
// Remove paragraph from div
// ****************************************************************************
function ParaRemove(cid){
    var child = document.getElementById(cid);
    document.removeChild(child);
}
// *************************************************************************
// Check name validity
// ****************************************************************************
function checkName(){
    var name = document.getElementById("element_1").value;
    if(name.length >= 2){
       return true;
    }
    else{
        return false;
    }
}
// **************************************************************************
// Check mail validity with regular expression
// ****************************************************************************
function checkEmail(){
    var mail = document.getElementById("element_2").value;
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail) && mail.length > 5)
      {
         return (true);
      }
      else{
         return false;
      }
}
// **************************************************************************
// Check password if valid or not
// ****************************************************************************
function checkPassword(){
    var pass = document.getElementById("element_3").value;
    if(pass.length >= 8){
        return true;
     }
     else{
         return false;
     }
}
// **************************************************************************
// Check Gender function
// ****************************************************************************
function checkGender(){
    var male = document.getElementById("element_4_1").checked;
    var female = document.getElementById("element_4_2").checked;
    if(male | female){
        return true;
     }
     else{
         return false;
     }
}
// **************************************************************************
function checkSport(){
    var counter = 0; // Count selected sports
    // *************************************************************
    var tennis = document.getElementById("element_5_1").checked;
    var squash = document.getElementById("element_5_2").checked;
    var football = document.getElementById("element_5_3").checked;
    var basket = document.getElementById("element_5_4").checked;
    var swimm = document.getElementById("element_5_5").checked;
    // *************************************************************
    if(tennis){
       counter += 1 ;
     }
     if(squash){
        counter += 1 ;
      }
      if(football){
        counter += 1 ;
      }
      if(basket){
        counter += 1 ;
      }
      if(swimm){
        counter += 1 ;
      }
      if(counter >= 2){
        return true;
      }
      if (counter < 2){
          return false;
      }
}
// **********************************************************************************
// Function to check if country is selected or it's empty
// ****************************************************************************
function checkCountry(){
    var country = document.getElementById("element_6").value;
    if(country){
        return true;
     }
     else{
         return false;
     }
}