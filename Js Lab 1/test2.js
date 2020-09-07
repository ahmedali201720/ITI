var MyData = ["Amira", "Ahmed", "Amir" , "Fatma" , "Mariam" , "Mohamed"];
// *******************************************************************************
Selector(MyData)
// *******************************************************************************
function Selector(names){
   var name1 = names[Math.floor(Math.random() * names.length)];
   var name2 = names[Math.floor(Math.random() * names.length)];
   if(name1 == name2){
      Selector(names);
   }
   // *******************************************************************************
   document.write(name1+" "+"," + " ");
   document.write(name2);
}
