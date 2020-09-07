function MakeStyle(tag , obJ){
    var TagName = document.getElementsByTagName(tag);
    for (i=0 ; i< TagName.length ;i++){
        for (n in obJ){
            TagName[i].style[n]=obJ[n] ;
        }
    }
}
