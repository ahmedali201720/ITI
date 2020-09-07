var obj = {
    line:"hidden",
    rect:"hidden",
    circle:"hidden"
}
$("#line").click(function()
{
    if(obj.line === "hidden")
    {
       $("line").css("display","block");
       obj.line = "visible";
    }
    else{
       $("line").css("display","none");
       obj.line = "hidden";
    }
});
$("#circle").click(function(){
    if(obj.circle === "hidden")
    {
       $("circle").css("display","block");
       obj.circle = "visible";
    }
    else{
       $("circle").css("display","none");
       obj.circle = "hidden";
    }
});
$("#rect").click(function(){
    if(obj.rect === "hidden")
    {
       $("rect").css("display","block");
       obj.rect = "visible";
    }
    else{
       $("rect").css("display","none");
       obj.rect = "hidden";
    }
});