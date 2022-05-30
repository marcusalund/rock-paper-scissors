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
    playerSelection = playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase();
    
    if (playerSelection !== "Rock" && playerSelection !== "Paper" && playerSelection !== "Scissors"){
        return "You lost! Please enter a valid response next time!!";
    }

    if (playerSelection === "Rock" && computerSelection === "Scissors"){
        return "You won! Rock beats Scissors!";
    } else if (playerSelection === "Paper" && computerSelection === "Rock"){
        return "You won! Paper beats Rock!";
    } else if (playerSelection === "Scissors" && computerSelection === "Paper"){
        return "You won! Scissors beats Paper!";
    } else if (playerSelection === "Rock" && computerSelection === "Paper"){
        return "You lost! Paper beats Rock!";
    } else if (playerSelection === "Scissors" && computerSelection === "Rock"){
        return "You lost! Rock beats Scissors!";
    } else if (playerSelection === "Paper" && computerSelection === "Scissors"){
        return "You lost! Scissors beats Paper!";
    } else {
        return "It's a tie!! " + playerSelection + " and " + computerSelection;
    }
}

function game(){
    let playerWins = 0;
    let computerWins = 0;
    for (let i = 1; i < 6; i++){
        let computerSelection = computerPlay();
        let playerSelection = prompt("Rock, Paper, or Scissors...which do you choose?").toLowerCase();
        
        let outcome = playSingleRound(playerSelection, computerSelection);
        console.log("Game " + i + ": " + outcome);

        if (outcome.includes("won")){
            playerWins++;
        } else if (outcome.includes("lost")){
            computerWins++;;
        }
    }

    if (playerWins > computerWins) {
        console.log("You won " + playerWins + " games to " + computerWins);
    } else if (playerWins < computerWins){
        console.log("You lost " + playerWins + " games to " + computerWins);
    } else {
        console.log("You tied " + playerWins + " games to " + computerWins);
    }
}

