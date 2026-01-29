function getComputerChoice(){
    randInt = Math.floor(Math.random() * 3);
    let computerChoice = "";

    if (randInt === 0){
        computerChoice = "rock";
    }

    else if (randInt === 1){
        computerChoice = "paper";
    }

    else if (randInt === 2){
        computerChoice = "scissors";
    }

    else{
        console.log("getComputerChoice conditional logic error");
    }
    console.log('Computer Choice is', computerChoice);
    return computerChoice;
}

// getComputerChoice() debugging

function getHumanChoice(){
    let humanChoice = prompt("Input 'rock', 'paper', or 'scissors'");
    console.log('Human Choice is', humanChoice);
    return humanChoice;

}

// getHumanChoice() debugging

let humanScore = 0;
let computerScore = 0;


function playRound(humanChoice, computerChoice){
    let   humanSelection = getHumanChoice().toLowerCase();
    let   computerSelection = getComputerChoice();

    // tie logic block
    if (humanSelection == computerSelection){ 
        console.log("It's a tie! " + humanSelection + " and " + computerSelection + " are the same!");
    }

    // rock and paper logic block
    if (humanSelection == "rock" && computerSelection == "paper"){
        computerScore += 1;
        console.log("You lose! " + computerSelection + " beats " + humanSelection);
    } else if (humanSelection == "paper" && computerSelection == "rock"){
        humanScore += 1;
        console.log("You Win! " + humanSelection + " beats " + computerSelection);
    }

    // rock and scissors logic block
    if (humanSelection == "scissors" && computerSelection == "rock"){
        computerScore += 1;
        console.log("You lose! " + computerSelection + " beats " + humanSelection);
    } else if (humanSelection == "rock" && computerSelection == "scissors"){
        humanScore += 1;
        console.log("You Win! " + humanSelection + " beats " + computerSelection);
    }
        
    // paper and scissors logic block
    if (humanSelection == "paper" && computerSelection == "scissors"){
        computerScore += 1;
        console.log("You lose! " + computerSelection + " beats " + humanSelection);
    } else if (humanSelection == "scissors" && computerSelection == "paper"){
        humanScore += 1;
        console.log("You Win! " + humanSelection + " beats " + computerSelection);
    }
}



// playRound(humanSelection, computerSelection); debugging


function playGame(){
//     for (let i = 0; i < 5; i++) {
//     playRound();
//  }
    if(humanScore > computerScore){
        console.log('The human WINS! With ' + humanScore + ' points ' + "Final Score:" + humanScore + '-' + computerScore);
    } else if(computerScore > humanScore){
        console.log('The computer WINS! With ' + computerScore + ' points ' + "Final Score:" + computerScore + '-' + humanScore);
    } else if(computerScore === humanScore){
        console.log("It's a tie! " + "Final Score:" + computerScore + '-' + humanScore);
    } else{
        console.log("Scoring Error")
    }
}

playGame()