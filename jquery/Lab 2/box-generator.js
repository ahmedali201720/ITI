$("body").on({
   click : function (e) { 
       $(this).after("<div class='blue'></div>");       
   },
   mouseover : function (e) { 
    $(this).css("background-color","blue");       
   },
    mouseleave : function (e) { 
        $(this).css("background-color","red");   
   }
},".red");

$("body").on({
    click : function (e) { 
        $(this).after("<div class='green'></div>");       
    },
    mouseover : function (e) { 
     $(this).css("background-color","green");       
    },
     mouseleave : function (e) { 
         $(this).css("background-color","blue");   
    }
 },".blue");

 $("body").on({
    click : function (e) { 
        $(this).after("<div class='orange'></div>");       
    },
    mouseover : function (e) { 
     $(this).css("background-color","orange");       
    },
     mouseleave : function (e) { 
         $(this).css("background-color","green");   
    }
 },".green");