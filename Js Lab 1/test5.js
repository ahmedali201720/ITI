generateMarioPyramid();
function generateMarioPyramid() {
    var totalNumberofRows = parseInt(prompt("Enter Total number ot rows : " , "5"));
    if(totalNumberofRows != null && !isNaN(totalNumberofRows)){
        for(var i = 1; i<=totalNumberofRows;i++){
            for(var j = 1; j<=i ; j++){
                document.write("*");
                if(j == i){
                   document.write("<br />");
             }
        }
    }
    }
    else{
        alert("You have entered an invalid input.");
        generateMarioPyramid();
    }
}