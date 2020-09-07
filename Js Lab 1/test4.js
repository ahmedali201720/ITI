var d = 0 , q = 0  , dm = 0 , nc = 0 , cnt = 0 ;
// ****************************************************************************
var curr = parseFloat(prompt("Please enter your amount of money : ", "15.92"));
// *****************************************************************************
DollarConverter(curr);
alert("You have" + " " + d + " " + "dollars" + " " + "," + " " + q + " " + "Quarters" + " " + "," + " " + dm + " " + "dimes" + " " + "," + " " + nc + " "+ "nickles" + " " + "," + " " + cnt + " "+ "cents");
// *****************************************************************************
function DollarConverter(num){
    if(!isNaN(num) && num != null && num != 0){
       var dol = parseInt(num);
       d = dol;
       var restNum = num - parseFloat(dol) ; 
       QuarterConverter(restNum.toFixed(2));
    }
    else{
        alert("Please Enter a number in correct format or non zero");
        var secNum = parseFloat(prompt("Please enter your amount of money : ", "15.92"));
        DollarConverter(secNum);
    }
    // *********************************************************************************************
    function QuarterConverter(num){
           var restNum1;
           if((num / 0.25) >= 1){
              quart = parseInt(num / 0.25);
              q = quart;
              restNum1 = parseFloat(num % 0.25);
              DimeConverter(restNum1);
              }
              else{
                  q = 0 ;
                  DimeConverter(num);
              }  
           }
    function DimeConverter(num){
        var restNum1;
        if((num / 0.1) >= 1){
            dim_cent = parseInt(num / 0.1);
            dm = dim_cent;
            restNum1 = parseFloat(num % 0.1);
            NickleConverter(restNum1);
        }
        else{
                dm = 0 ;
                NickleConverter(num);
            }  
        }
    function NickleConverter(num){
        var restNum1;
        if((num / 0.05) >= 1){
            var nckle = parseInt(num / 0.05);
            nc = nckle;
            restNum1 = parseFloat(num % 0.05);
            CentConverter(restNum1);
        }
        else{
                nc = 0 ;
                CentConverter(num);
            }  
        }
    function CentConverter(num){
        if((num / 0.01) >= 1){
            var cents = parseInt(Math.round(num / 0.01));
            cnt = cents;
        }
        else{
            cnt = 0 ;
            }  
        }    
    }