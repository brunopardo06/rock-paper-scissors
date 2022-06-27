//This function selects a random element from an array of three strings (Rock, Paper and Scissors).
// The selection is returned.
function computerPlay() {
    const computerWeapon = ["Rock", "Paper", "Scissors"];
    const random = Math.floor(Math.random() * computerWeapon.length);
    return computerWeapon[random];
}

//This function requests the user to choose a weapon between "Rock", "Paper" or "Scissors" (case insensitive).
//If the selection is valid, the function returns the selection as a string.
//If the selection is invalid, a loop is started where the user must type a selection until its valid.
function playerPlay(){

    let input;
    let weaponInput  = prompt("Select: Rock, Paper or Scissors");
    let playerWeapon = weaponInput.charAt(0).toUpperCase() + weaponInput.slice(1).toLowerCase();

    if (playerWeapon === "Rock" || playerWeapon === "Paper" || playerWeapon === "Scissors"){
        return playerWeapon;
    
    } else {
        input = false;
        while (input===false){
            alert("Invalid input, please enter \"Rock\", \"Paper\" or \"Scissors\".")
            let weaponInput2  = prompt("Select: Rock, Paper or Scissors");
            let playerWeapon2 = weaponInput2.charAt(0).toUpperCase() + weaponInput2.slice(1).toLowerCase();

            if (playerWeapon2 == "Rock" || playerWeapon2 == "Paper" || playerWeapon2 == "Scissors"){
                return playerWeapon2;
            }
        }
    }
}

//This function plays a round of RPS, where it compares the player's selection against the computer's selection.
//If the selection is the same, the result is a tie. 
//If else, the function compares the selection and alerts the winner of the round.
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection){
        roundResult = "Draw";
        alert("Draw");
    } else if (playerSelection == "Rock" && computerSelection == "Scissors"){
        roundResult = "Player Wins";
        alert("Player Wins");
    } else if (playerSelection === "Rock" && computerSelection === "Paper") {
        roundResult = "Computer Wins";
        alert("Computer Wins");
    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        roundResult = "Player Wins";
        alert("Player Wins");
    } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        roundResult = "Computer Wins";
        alert("Computer Wins");
    } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        roundResult = "Computer Wins";
        alert("Computer Wins");
    } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        roundResult = "Player Wins";
        alert("Player Wins");
    } else {
        roundResult = "Invalid ";
        alert("No winner");
    }
}

//This function keeps track of the score of each round. Giving one point to the winner of each.
let playerScore = 0;
let computerScore = 0;

function scoreCount (){

        if (roundResult === "Player Wins"){
            playerScore++;
        } else if (roundResult === "Computer Wins"){
            computerScore++;
        }
        alert(`Player: ${playerScore} | Computer: ${computerScore}`);
    }

//This function uses a loop to repeat itself five times, calling each time the playRound function.
function game (playerScore, computerScore){
    for (let i = 0; i < 5; i++) {

        const playerSelection = playerPlay();
        const computerSelection = computerPlay();

        alert(`Round ${i+1}: ${playerSelection} vs ${computerSelection}`);

        //This function is called to play a round of RPS.
        playRound(playerSelection,computerSelection);

        scoreCount();
    }
}

game();

if (playerScore === computerScore){
    alert("Result of the game: Tie");
} else if (playerScore<computerScore){
    alert("Result of the game: Computer Wins");
} else if (playerScore>computerScore){
    alert("Result of the game: Player Wins");
}