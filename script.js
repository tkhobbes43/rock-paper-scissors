// results //
var wins = 0;
var ties = 0;
var losses = 0;

// array of options for computer to pick from //
var options = ["R", "P", "S"];

// fucntion for the whole game starting here //
var playGame = function () {
    // ask user for their choice //
    var userChoice = window.prompt("Enter R, P, or S:");

    // if user pressed Cancel, immediately end function //
    if (!userChoice) {
        return;
    }
    
    // convert to uppercase to make comparisons easier //
    userChoice = userChoice.toUpperCase();
    console.log(userChoice)

    //get random index from array of options //
    


}
