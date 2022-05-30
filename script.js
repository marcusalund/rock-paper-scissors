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
        return "You win! Rock beats Scissors!";
    } else if (playerSelection === "Paper" && computerSelection === "Rock"){
        return "You win! Paper beats Rock!";
    } else if (playerSelection === "Scissors" && computerSelection === "Paper"){
        return "You win! Scissors beats Paper!";
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

