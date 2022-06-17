console.log("Hello World");


//A function selects a random element from an array of three strings (Rock, Paper and Scissors).
//The random string is stored into a variable.

//The user enters a string (Rock, paper or scissors), must be case insensitive.
//The string is stored in a variable.

//A function compares the computer and player's selection.
//Is the selection different?
//No: "Tie" Repeat until Yes.
//Yes: If 

// Rock>Scissors, Scissors>Paper, Paper>Rock.
// If the string is the same, the function continues until it is different.
// Winner takes one point

//Repeat until reaching 5 rounds and announce a winner.

function computerPlay() {
    const weapon = ["Rock", "Paper", "Scissors"];

    const random = Math.floor(Math.random() * weapon.length);
    console.log(weapon[random]);
}

const playerWeapon = prompt("Select: Rock, Paper or Scissors");
const playerSelection = playerWeapon.toLowerCase;
console.log(playerSelection);

function playRound(playerSelection, computerSelection) {
    // your code here!
  }

  
