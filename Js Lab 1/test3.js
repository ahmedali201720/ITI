var Sentence =  prompt("Please enter your Sentense", "Hello World");
var character = prompt("Please enter your character", "i");
// ****************************************************************************************
if(Sentence != null && character != null){
  Processor(Sentence,character);
}
// ****************************************************************************************
function Processor(sentence,ch){
    var indexstring = "";
    for (var i = 0; i < sentence.length; i++) {
        if(ch == sentence[i]){
            indexstring += i.toString();
        }
    }
      if(indexstring.length > 0){
        document.write("Letter " + ch + " " + "exists in location : \n");
        for (var i = 0; i < indexstring.length; i++) {
            document.write(indexstring[i] + " " + "," + " ");
          }
      }
      else{
        alert("The letter you have entered not exists in the string .");
      }
}