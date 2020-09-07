var puzzleName = "Ahmed";
var puzzleLength = puzzleName.length;
var counter = 0;
//**********************************************
$("#my-name").on("input", function(e)
{
    var txtLength = $("#my-name").val().length;
    var currentString = puzzleName.substr(0,txtLength);
    if(currentString == $("#my-name").val()){
       counter++;
       $(".counter").text(counter.toString());
       $(".my-name").text(currentString);
       if(txtLength === puzzleLength){
         $(".result").text("Good job , you did it in "+counter+" times");
         counter = 0;
         $(".counter").text(counter.toString());
         $("#my-name").val("");
       }
    }
    else{
        counter++;
        $(".counter").text(counter.toString());
    }
});
$("#my-name").on('keydown', function() {
    var key = event.keyCode || event.charCode;
    if( key == 8 || key == 46 )
        counter--;
        $(".counter").text(counter.toString());
  });