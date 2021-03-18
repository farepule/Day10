// Only change code below this line
var myClotes = {
    hat: "Fedora",
    shirt: "Nike",
    shoe: "Converse",
}
function myFunction(myObj){
    var hatValue = myObj.hat;
    var shirtValue = myObj.shirt;
    var shoeValue = myObj.shoe;
    return {hatValue, shirtValue, shoeValue};

}   
myFunction(); 
// Only change code above this line
console.log(myFunction(myObj));
module.exports = myFunction(myClotes);