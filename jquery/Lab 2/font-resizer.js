var originalSize = $(".content").css('font-size');
var maximumSize = 82.5564;
//*******************************************************
$("#increase").click(function(){         
    let currentSize = $(".content").css('font-size');
    if(parseInt(currentSize) == parseInt(maximumSize)){
        $(".error").text("You have reached the maximum value.");
        return;
    }
    else{
    $(".error").text("");             
    let newSize = parseFloat(currentSize)*1.2;          
    $(".content").css('font-size', newSize);
    console.log(newSize);
    }                    
});

$("#decrease").click(function(){        
    let currentSize = $(".content").css('font-size');
    if(currentSize == originalSize){
        $(".error").text("You have reached the minimum value.");
        return;
    }
    else{
    $(".error").text("");         
    let newSize = parseFloat(currentSize)/1.2;        
    $(".content").css('font-size', newSize);
    }       
}); 