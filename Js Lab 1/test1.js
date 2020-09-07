var num = parseInt(prompt("Please enter your number", "15"));
if(num != null && isNaN(num) == false && num != 0){
  if(CheckFizz(num) && !CheckBuzz(num))
  {
      alert("Fizz");
  }
  else if(!CheckFizz(num) && CheckBuzz(num))
  {
      alert("Buzz");
  }
  else if(CheckFizz(num) && CheckBuzz(num))
  {
      alert("Fizz Buzz");
  }
  else
  {
      alert("None");
  }
}
else{
    alert("Make sure u have entered valid input and non zero");
}
function CheckFizz(num) {
    if(num % 3 == 0){
        return true;}
    else {
        return false;
    }
    
}
function CheckBuzz(num) {
    if(num % 5 == 0){
        return true;}
    else {
        return false;
    }
    
}