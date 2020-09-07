// **************************** ( 1 ) ********************************************************************************

$(".container1").find("div").each(function(index){
  $(this).css("background-color",$(this).attr('class'));
});

$(".container1").find("p").each(function(index){
  $(this).css("color",$(this).attr('class'));
});

// ***************************** ( 2 ) *******************************************************************************

$(".container2").find("a").each(function(index){
  if($(this).attr('href').indexOf("google") >= 0){
    $(this).text("Google");
  }
});

$(".container2").find("a").each(function(index){
  if($(this).attr('href').endsWith("org")){
    $(this).text("IEEE");
  }
});

$(".container2").find("a").each(function(index){
  if($(this).attr('href').startsWith("https")){
    $(this).text("Facebook");
  }
});

$(".container2").find("a").each(function(index){
  if($(this).attr('href').startsWith("https")){
    $(this).text($(this).text() + " Official Website" );
  }
});

//*******************************************( 3 )****************************************************************************

// in two steps :
$(".container3>figure:eq(2)").find("img").attr("src","img/orange.png");
$(".container3>figure:eq(2)").find("figcaption").text("fig.3 - Orange juice");
// in one step (bonus) :
$(".container3>figure:eq(2)").find("img").attr("src","img/orange.png").end().find("figcaption").text("fig.3 - Orange juice");

// *******************************************( 4 )****************************************************************************

$(".container4").find("td").each(function(){
  if($(this).attr("class") === "my-name"){
     $(this).css("color","blue");
  }
});

$(".container4").find("tr").each(function()
{
   var parent = $(this);
   parent.find("td").each(function()
   {
      if(parent.index($(this)) % 2 === 1)
       {
         $(this).css("background-color","pink");
       }
   }
   );
});

var element1 = $(".container4>table:first tr:last").find("td");
element1.each(function(){
  if(element1.index($(this)) === 1){
     $(this).css("font-weight","bold");
  }
});

// *******************************************( 5 )*****************************************************************************

var elem = $(".container5>ul").find("li");
elem.each(function(){
  if(elem.index($(this)) === 1){
     $(this).css("font-style","italic");
  }
});

var element2 = $(".container5").find("ol").find("li");
element2.each(function(){
  if(element2.index($(this)) === 2){
     $(this).css("color","red");
  }
});