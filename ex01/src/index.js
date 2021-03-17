var myPet = {
    species: "cat",
    name: "cicko",
    legs: 4,
    frends:["micko", "ticko"],
}
function myFunction (myObj){
    return myObj;
}
console.log(myFunction(myPet));
module.exports = { myPet, myFunction };