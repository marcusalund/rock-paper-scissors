let playerScore = 0;
let computerScore = 0;
let roundWinner = "";
let gameWinner = "";

if (roundWinner === "player"){
    alert("Player Won");
    restartGame();
} else if (roundWinner === "computer"){
    alert("Computer Won");
    restartGame();
}

function computerPlay (){
    let randomNumber = Math.floor(Math.random()*3);

    if (randomNumber === 0) {
        return "Rock";
    } else if (randomNumber === 1) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

function playSingleRound(playerSelection, computerSelection){

    if (playerSelection === "Rock" && computerSelection === "Scissors"){
        roundWinner = "player";
        playerScore++;
    } else if (playerSelection === "Paper" && computerSelection === "Rock"){
        roundWinner = "player";
        playerScore++;
    } else if (playerSelection === "Scissors" && computerSelection === "Paper"){
        roundWinner = "player";
        playerScore++;
    } else if (playerSelection === "Rock" && computerSelection === "Paper"){
        roundWinner = "computer";
        computerScore++;
    } else if (playerSelection === "Scissors" && computerSelection === "Rock"){
        roundWinner = "computer";
        computerScore++;
    } else if (playerSelection === "Paper" && computerSelection === "Scissors"){
        roundWinner = "computer";
        computerScore++;
    } else {
        roundWinner = "tie";
    }

    updateScore();
    if (playerScore>=5){
        alert("Player Won");
        restartGame();
    } else if (computerScore>=5){
        alert("Computer Won");
        restartGame();
    }

}

function updateScore() {
    if (roundWinner === "player"){
        playerScoreUI.textContent = `Player: ${playerScore}`;
    } else if (roundWinner === "computer"){
        computerScoreUI.textContent = `Computer: ${computerScore}`;
    } else {
        return;
    }
}

function restartGame() {
    playerScore = 0;
    computerScore = 0;
    roundWinner = "";
    gameWinner = "";
    playerScoreUI.textContent = `Player: ${playerScore}`;
    computerScoreUI.textContent = `Computer: ${computerScore}`;
}

const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');
const playerScoreUI = document.getElementById('player-score');
const computerScoreUI = document.getElementById('computer-score');

rockButton.addEventListener('click', () => playSingleRound("Rock", computerPlay()));
paperButton.addEventListener('click', () => playSingleRound("Paper", computerPlay()));
scissorsButton.addEventListener('click', () => playSingleRound("Scissors", computerPlay()));




// function game(){
//     let playerWins = 0;
//     let computerWins = 0;
//     for (let i = 1; i < 6; i++){
//         let computerSelection = computerPlay();
//         let playerSelection = prompt("Rock, Paper, or Scissors...which do you choose?").toLowerCase();
        
//         let outcome = playSingleRound(playerSelection, computerSelection);
//         console.log("Game " + i + ": " + outcome);

//         if (outcome.includes("won")){
//             playerWins++;
//         } else if (outcome.includes("lost")){
//             computerWins++;;
//         }
//     }

//     if (playerWins > computerWins) {
//         console.log("You won " + playerWins + " games to " + computerWins);
//     } else if (playerWins < computerWins){
//         console.log("You lost " + playerWins + " games to " + computerWins);
//     } else {
//         console.log("You tied " + playerWins + " games to " + computerWins);
//     }
// }
