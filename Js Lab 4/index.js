/* eslint-disable */
// **************************************************************************
var nameFlag = false;
var mailFlag = false;
var phoneFlag = false;
// *************************************************************************
var OperationFlag = 0 ; //0 : Add , 1 : Edit
var EditID = "";
//**************************************************************************
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
    get : function(){return counter}
});
// ****************************************************************************************
// Function that check input data
// ****************************************************************************************
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
// ****************************************************************************************
// Function that force operation as edit contact
// ****************************************************************************************
function SelectEditOperation(){
    OperationFlag = 1;
    var tble = document.getElementById("my-table");
    EditID = parseInt(event.target.id.substring(1,event.target.id.length));
    alert("You are in edit mode , Enter the new contact data");
    document.getElementById("name").focus();
    for (var i = 2, row; row = tble.rows[i]; i++){
        if(row.cells[0].innerHTML == EditID){
            row.style.backgroundColor = "coral";
        }
    }
}
// ****************************************************************************************
// Function that invoked on Adding or Editing a contact according to operation index
// ****************************************************************************************
function AddContact()
{
    Name = HandleName(document.getElementById("name").value);
    Email = document.getElementById("email").value;
    Phone = document.getElementById("phone").value;
    contact.oname = Name;
    contact.omail = Email;
    contact.ophone = Phone;
    CheckData();
    if(OperationFlag == 0)
    {
       if(!(nameFlag && mailFlag && phoneFlag))
          alert("Invalid contact data , please check your inputs");
       else
          {
             // Intermediate Solution in next assignment
             var obj = new objectList();
             obj.addContact(contact);
           }
    }
   else if(OperationFlag == 1)
   {
       if(!(nameFlag && mailFlag && phoneFlag))
           alert("Invalid contact data , please check your inputs");
       else
           {
              var obj = new objectList();
              obj.editContact(EditID,contact);
           }
   }
   OperationFlag = 0;
}
// ****************************************************************************************
// Function that invoked on deletting a specific contact
// ****************************************************************************************
function RemmoveContact()
{
    var res = confirm("Are you sure about deletting this contact ?");
    if(res)
    {
        var obj = new objectList();
        var id = parseInt(event.target.id.substring(1,event.target.id.length));
        document.getElementById(event.target.id).removeEventListener("click",RemmoveContact);
        obj.removeContact(id);
    }
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
// ****************************************************************************************
// Function to validate email in required format
// ****************************************************************************************
function checkEmail(mail){
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail) && mail.length > 5)
         return (true);
    else
        return false;
}
// ****************************************************************************************
// Function to check phone in required format
// ****************************************************************************************
function checkPhone(ph)
{
    if(ph.length == 11){
       return true;
    }
    else{
        return false;
    }
}
// ****************************************************************************************
// Function to handle name in required format
// ****************************************************************************************
function HandleName(Name)
{
    if(Name.includes(" ")){
           var spaceIndex = Name.indexOf(" ");
           return (Name[0] + "." + Name.substring(spaceIndex , (Name.length+1))); 
       }
    else
        return Name;
}
// ****************************************************************************************
// Object that contains properties and methods to manipulate contacts
// ****************************************************************************************
function objectList()
{
    this.names =[] ;
    this.contacts = [];
    // ****************************************************************************************
    // Method to add a contacts in table 
    // ****************************************************************************************
    this.addContact = function(contct){
        var table = document.getElementById("my-table");
        var row = table.insertRow(document.getElementById("my-table").rows.length);
        var cellID = row.insertCell(0);
        var cellName = row.insertCell(1);
        var cellEmail = row.insertCell(2);
        var cellPhone = row.insertCell(3);
        var cellEdit = row.insertCell(4);
        var cellDelete = row.insertCell(5);
        var imgEdit = document.createElement('img');
        var imgDelt = document.createElement('img');
        imgEdit.src = "edit.png";
        imgEdit.id = "e".concat(contact["id"].toString());
        imgEdit.className = "action";
        imgDelt.src = "delete.png";
        imgDelt.id = "d".concat(contact["id"].toString());
        imgEdit.addEventListener("click",SelectEditOperation);
        imgDelt.addEventListener("click",RemmoveContact);
        imgDelt.className = "action";
        cellID.innerHTML = contct["id"];
        cellName.innerHTML = contct["oname"];
        cellEmail.innerHTML = contct["omail"];
        cellPhone.innerHTML = contct["ophone"];
        counter++;
        cellEdit.appendChild(imgEdit);
        cellDelete.appendChild(imgDelt);
    };
    // ****************************************************************************************
    // Method to remove a contact using id 
    // ****************************************************************************************
    this.removeContact= function(id){
        var tble = document.getElementById("my-table");
        for (var i = 2, row; row = tble.rows[i]; i++){
            if(row.cells[0].innerHTML == id){
                document.getElementById("my-table").deleteRow(i);
            }
        }
        if(tble.rows.length ==2){
           counter = 1;
        }
    };
    // ****************************************************************************************
    // Method to update a contact in table  using id and new contact object
    // ****************************************************************************************
    this.editContact= function(id,newObj){
        var tble = document.getElementById("my-table");
        for (var i = 2, row; row = tble.rows[i]; i++){
            if(row.cells[0].innerHTML == id){
                row.cells[1].innerHTML = newObj["oname"];
                row.cells[2].innerHTML = newObj["omail"];
                row.cells[3].innerHTML = newObj["ophone"];
            }
        }
        for (var i = 2, row; row = tble.rows[i]; i++){
            if(row.cells[0].innerHTML == EditID){
                row.style.backgroundColor = "white";
            }
        }
    };
    // ****************************************************************************************
    // Method to get a specific contact in table 
    // ****************************************************************************************
    this.getContact= function(id){
        var tble = document.getElementById("my-table");
        for (var i = 2, row; row = tble.rows[i]; i++){
            if(row.cells[0].innerHTML == id){
                contact.oname = row.cells[1].innerHTML;
                contact.omail = row.cells[2].innerHTML;
                contact.ophone = row.cells[3].innerHTML;
            }
        }
        for(var key in contact) { 
            console.log(key + " : " + contact[key]);
        } 
    };
    // ****************************************************************************************
    // Method to get All contacts in table 
    // ****************************************************************************************
    this.getAllContacts= function(){
        var tble = document.getElementById("my-table");
        for(var i = 0 ; i < tble.rows.length ; i++)
        {
            for (var i = 2, row; row = tble.rows[i]; i++)
            {
                contact.oname = row.cells[1].innerHTML;
                contact.omail = row.cells[2].innerHTML;
                contact.ophone = row.cells[3].innerHTML;
            }
            this.contacts.push(contact);
        }
    };
}