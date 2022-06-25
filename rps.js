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



//A function selects a random element from an array of three strings (Rock, Paper and Scissors).
//The random string is stored into a variable.
function computerPlay() {
    const computerWeapon = ["Rock", "Paper", "Scissors"];
    const random = Math.floor(Math.random() * computerWeapon.length);
    const randomWeapon = computerWeapon[random];
    console.log(randomWeapon);
}


function playRound(playerSelection, computerSelection) {
    // your code here!
    if (playerSelection === computerSelection){
        roundResult = "Draw";
        console.log("Draw");
    } else if (playerSelection == "Rock" && computerSelection == "Scissors"){
        roundResult = "Player Wins";
        console.log("Player Wins");
    } else if (playerSelection === "Rock" && computerSelection === "Paper") {
        roundResult = "Computer Wins";
        console.log("Computer Wins");
    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        roundResult = "Player Wins";
        console.log("Player Wins");
    } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        roundResult = "Computer Wins";
        console.log("Computer Wins");
    } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        roundResult = "Computer Wins";
        console.log("Computer Wins");
    } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        roundResult = "Player Wins";
        console.log("Player Wins");
    }
}

    //The user enters a string (Rock, paper or scissors), must be case insensitive.
    //The string is stored in a variable.
  const playerSelection = prompt("Select: Rock, Paper or Scissors");
  console.log(playerSelection);

  const computerSelection = computerPlay();

  playRound("Rock","Paper");