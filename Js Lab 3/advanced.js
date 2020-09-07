// Array that contains the images to switch
var images = ["gray.png" , "red.png" , "orange.png" , "green.png" , "orange-juice.png" , "Lemon-juice.png"] ; 
// index to determine the start and end of array
var index = 0;
// Null interval to remove or add 
var myInterval;
// *********************************************************
// Add Events to images
// *********************************************************
document.getElementById("lift").addEventListener("click",displayNextImage);
document.getElementById("right").addEventListener("click",displayPreviousImage);
document.getElementById("play").addEventListener("click",Play);
document.getElementById("stop").addEventListener("click",Stop);
// *********************************************************
// Function to display next image
// *********************************************************
function displayNextImage() {
    Stop();
    if(index == images.length-1){
        index = 0;
    }
    else{
        index = index+1;
    }
    document.getElementById("image").src = images[index];
}
// *********************************************************
// Function to display previous image
// *********************************************************
function displayPreviousImage() {
    Stop();
    if(index == 0){
        index = images.length-1;
      }
      else{
        index = index-1;
      }
    document.getElementById("image").src = images[index];
}
// *********************************************************
// Function to change images continously
// *********************************************************
function Play() {
    myInterval = setInterval(function(){
    if(index == images.length-1){
        index = 0;
    }
    else{
        index = index+1;
    }
    document.getElementById("image").src = images[index];
  }, 1000);
}
// *********************************************************
// Function to Stop changing pictures
// *********************************************************
function Stop() {
    if(myInterval != null){
        clearInterval(myInterval);
     }
}

