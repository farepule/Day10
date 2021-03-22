// Only change code below this line
lion.roar = "roar-roar";
var lion = {
    name: "Simba",
    legs: 4,
    tails: 1,
    
};
function myFunction(propName, propValue){
    
    lion[propName] = propValue;
    return lion;
}

// Only change code above this line
console.log(myFunction("roar", "roar-roar"));
module.exports = myFunction;
