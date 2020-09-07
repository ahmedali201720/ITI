var contact = { };
var counter = 1;
Object.defineProperty(contact,"id",{
    get : function(){return counter++}
});
function Print(){
    console.log(contact["id"]);
}