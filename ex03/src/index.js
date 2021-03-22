// Only change code below this line
var myFood = {
    vegetable: "carrot",
    fruit: "orange",
    drink: "water"

};
function myFunction (myObj){

    var vegetableValue = myObj[vegetable];
    var fruitValue = myObj[fruit];
    var drinkVaue = myObj[drink];
    return {vegetableValue, fruitValue, drinkVaue};
}
// Only change code above this line
console.log(myFunction(myObj));
module.exports = myFunction(myFood);
