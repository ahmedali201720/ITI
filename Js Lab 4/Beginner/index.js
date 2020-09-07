/* eslint-disable */
// **************************************************************************
var nameFlag = false;
var mailFlag = false;
var phoneFlag = false;
// *************************************************************************
var Name = "";
var Email = "";
var Phone = "";
var counter = 1;
// **************************************************************************
document.getElementById("submit").addEventListener("click",AddContact);
// **************************************************************************
var contact = { 
    oname:"" ,
    omail:"" ,
    ophone:""
};
Object.defineProperty(contact,"id",{
    get : function(){return counter++}
});
// **************************************************************************
function CheckData(){
    if(!checkName(Name)){
        document.getElementById("name-error").style.display = "initial"; 
        nameFlag = false;
    }
    else{
        document.getElementById("name-error").style.display = "none";
        nameFlag = true;
    }
    if(!checkEmail(Email)){
       document.getElementById("mail-error").style.display = "initial"; 
       mailFlag = false;
    }
    else{
        document.getElementById("mail-error").style.display = "none"; 
        mailFlag = true;
    }
    if(!checkPhone(Phone)){
        document.getElementById("phone-error").style.display = "initial"; 
        phoneFlag = false;
    }
    else{
        document.getElementById("phone-error").style.display = "none"; 
        phoneFlag = true;
    }
}
// **********************************************************************************************************
function AddContact()
{
    Name = HandleName(document.getElementById("name").value);
    Email = document.getElementById("email").value;
    Phone = document.getElementById("phone").value;
    contact.oname = Name;
    contact.omail = Email;
    contact.ophone = Phone;
    CheckData();
    if(!(nameFlag & mailFlag & phoneFlag))
       alert("Invalid contact data , please check your inputs");
    else
        alert("id = " + contact["id"] + " name : " + contact['oname'] + " , phone is : " + contact["ophone"] + " , submiit again to auto increment id");
        // Intermediate Solution in next assignment
}
// **********************************************************************************************************
function checkName(name)
{
    if(name.length >= 2){
       return true;
    }
    else{
        return false;
    }
}
function checkEmail(mail){
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail) && mail.length > 5)
         return (true);
    else
        return false;
}
function checkPhone(ph)
{
    if(ph.length == 11){
       return true;
    }
    else{
        return false;
    }
}
function IsNumeric(numberstring){
    var flag = true;
    for(var c = 0 ; c<numberstring.length ; c++){
        if(!isNaN(parseInt(numberstring[c])))
            continue;
        else{
            flag = false;
            break;
        }
    }
    return flag;
}
function HandleName(Name)
{
    if(Name.includes(" ")){
           var spaceIndex = Name.indexOf(" ");
           return (Name[0] + "." + Name.substring(spaceIndex , (Name.length+1))); 
       }
    else
        return Name;
}
