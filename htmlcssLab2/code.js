
var state = false;
var audio = $("#audio1");
var repeat = true;
var songs = ["canon.mp3","hero.mp3","dream.mp3","mombasa.mp3","swan-lake.mp3"];
var index = 0;
$("#play").click(function(e)
{
    if(!audio.paused)
    {
       audio.attr("src", songs[index]);
       audio.get(0).play();
    }
});

$("#repeat").click(function(){
    repeat = true;
    $(this).css("background-color","red");
    $("#shuffle").css("background-color","green");
    alert("Repeat mode is on , song will be repeated");
});

$("#shuffle").click(function(){
    repeat = false;
    $("#repeat").css("background-color","green");
    $(this).css("background-color","red");
    alert("Shuffle mode is on , songs will be shffled");
});

audio.on('ended', function() {
    if(!repeat)
    {
        if(index == 4){
            index = 0;
        }
        else{
            index++;
        }
        audio.attr("src", songs[index]);
        audio.get(0).play();
    }
    else{
        audio.get(0).play();
    }
 });