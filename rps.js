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
    return computerWeapon[random];
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
    } else {
        roundResult = "Invalid ";
        console.log("No winner");
    }
}

//The user enters a string (Rock, paper or scissors), must be case insensitive.
//The string is stored in a variable.
    function playerPlay(){

        let input;
        let weaponInput  = prompt("Select: Rock, Paper or Scissors");
        let playerWeapon = weaponInput.charAt(0).toUpperCase() + weaponInput.slice(1);

        if (playerWeapon === "Rock" || playerWeapon === "Paper" || playerWeapon === "Scissors"){
            return playerWeapon;
        
        } else {
            input = false;
            while (input===false){
                alert("Invalid input, please enter \"Rock\", \"Paper\" or \"Scissors\".")
                let weaponInput2  = prompt("Select: Rock, Paper or Scissors");
                let playerWeapon2 = weaponInput2.charAt(0).toUpperCase() + weaponInput2.slice(1);

                if (playerWeapon2 == "Rock" || playerWeapon2 == "Paper" || playerWeapon2 == "Scissors"){
                    return playerWeapon2;
                }
            }
        }
    }

    const playerSelection = playerPlay();
    const computerSelection = computerPlay();
    console.log(`Player selection: ${playerSelection}`);
    console.log(`Computer selection: ${computerSelection}`);

    playRound(playerSelection,computerSelection);

    function game (){
        for (let i = 0; i < 5; i++) {
            // your code here!
        }
    }
