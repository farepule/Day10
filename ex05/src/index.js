// Only change code below this line
var school = {
    name: "Arena",
    location: "Sarajevo",
    established: 2020
};
function myFunction(name){
    school.name = name;
    return school;
}
// Only change code above this line
console.log(myFunction("Paragon"));
module.exports = { school, myFunction };
