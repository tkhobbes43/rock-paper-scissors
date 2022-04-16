// this is initial prompt to play the game //
// put all the variables at the top //
var userChoice = prompt("Let's play Rock, Paper, Scissors. Please enter R, P, S.");

var computerChoice = alert()
// telling you what you entered //
console.log(userChoice);

// this is for computer to randomly generate his choice for the game //
function getRandomInt() {
    var gameChoices = ["R", "P", "S"];
    var computerChoice = Math.floor(Math.random(3));
    console.log(computerChoice);
    console.log(gameChoices[computerChoice]);
}

getRandomInt();