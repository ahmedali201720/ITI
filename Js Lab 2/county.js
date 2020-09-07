function county(tag , obJ){
    var TagName = document.getElementsByTagName(tag);
    var fl = false
    var ClassCount = 0;
    var NameCount = 0 ;
    for (i=0 ; i< TagName.length ;i++)
    {
        if(TagName[i].classname == obJ['Class'])
        {
            ClassCount++ ;
        }
        if(TagName[i].id == obJ['Id'])
        {
            fl= true ;
        }
        if(TagName[i].getAttribute('name') == obJ['Name'])
        {
            NameCount++ ;
        }
    }
    return { 'all': TagName.length , 'Class': ClassCount , 'Id': fl , 'Name':NameCount }
}