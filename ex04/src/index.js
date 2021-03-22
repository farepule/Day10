// Only change code below this line
var players = {
    7: "Muhamed Besic",
    10: "Miralem Pjanic",
    11: "Edin Dzeko"
};
function myFunction(myObj){
    playerNumber1 = players[7];
    playerNumber2 = players[10];
    playerNumber3 = players[11];
    return {playerNumber1, 
            playerNumber2, 
            playerNumber3
        };
}
// Only change code above this line
console.log(myFunction(7, 10 ,11));
module.exports = {players, myFunction};
