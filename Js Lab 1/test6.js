document.write("Who I'm ????");
CheckFly();
// ******************************************
function CheckFly(){
    if(confirm("Do you fly ? ") == true){
       CheckFlyWilds();
    }
    else{
        CheckSeaAnimal();
    }
}
function CheckFlyWilds(){
    if(confirm("Are you wild ? ") == true){
       alert("You are Eagle !!");
    }
    else{
        alert("You are parrot");
    }
}
function CheckSeaAnimal(){
    if(confirm("Do you live under sea ? ") == true){
       CheckWildSea();
    }
    else{
        CheckNonWildSea();
    }
}
function CheckWildSea(){
    if(confirm("Are you wild ? ") == true){
       alert("You are a shark !!");
    }
    else{
        alert("You are a Dolphin !!");
    }
}
function CheckNonWildSea(){
    if(confirm("Are you wild ? ") == true){
       alert("You are a Lion !!");
    }
    else{
        alert("You are a Cat !!");
    }
}