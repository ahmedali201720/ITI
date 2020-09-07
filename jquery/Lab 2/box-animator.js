
$(document).ready(function()
{
    /*setTimeout(() => {
        $(".box").animate({left: '600px',
        height: '+=100px',
        width: '+=100px',
    } , function(){
        $(".box").css("background-color" , "blue");
    });
    }, 2000);
    setTimeout(() => {
        $(".box").animate({
        bottom:'5px',
        height: '-=100px',
        width: '-=100px'} , function(){
            $(".box").css("background-color" , "yellow");
        });
    }, 4000);
    setTimeout(() => {
        $(".box").animate({
        left : '0px',    
        bottom:'5px',
        height: '+=100px',
        width: '+=100px'}, function(){
            $(".box").css("background-color" , "green");
        });
    }, 6000);
    setTimeout(() => {
        $(".box").animate({
        left : '0px',    
        top:'0px',
        height: '-=100px',
        width: '-=100px'} , function(){
            $(".box").css("background-color" , "red");
        });
    }, 8000); */

    $(".box").animate(
        {left: '600px',height: '+=100px',width: '+=100px',} , 
        3000 , 
        function(){
        $(".box").css("background-color" , "blue");
    });
    $(".box").animate(
        {bottom: '10px',height: '-=100px',width: '-=100px',} , 
        3000 , 
        function(){
        $(".box").css("background-color" , "yellow");
    });
    $(".box").animate(
        {left: '10px',height: '+=100px',width: '+=100px',} , 
        3000 , 
        function(){
        $(".box").css("background-color" , "green");
    });
    $(".box").animate(
        {top: '10px',height: '-=100px',width: '-=100px',} , 
        3000 , 
        function(){
        $(".box").css("background-color" , "red");
    });
});