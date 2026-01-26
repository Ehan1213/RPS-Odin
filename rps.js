function getComputerChoice(){
    randInt = Math.floor(Math.random() * 3);
    let computerChoice = "";
    if (randInt === 0){
        computerChoice = "rock";
        console.log("rock");


    }
    else if (randInt === 1){
        computerChoice = "paper";
        console.log("paper");


    }
    else if (randInt === 2){
        computerChoice = "scissors";
        console.log("scissors");


    }
    else{
        console.log("getComputerChoice conditional logic error");
    }
    console.log('Computer Choice is', computerChoice);
    return computerChoice;
}

// getComputerChoice()

function getHumanChoice(){
    let humanChoice = prompt("Input 'rock', 'paper', or 'scissors'");
    console.log('Human Choice is', humanChoice);
    return humanChoice;

}

// getHumanChoice()

let humanScore = 0;
let computerScore = 0;


function playRound(humanChoice, computerChoice){
    // tie logic block
    if (humanChoice == computerChoice){ 
        console.log("It's a tie! " + humanSelection + " and " + computerSelection + " are the same!");
    }

    // rock and paper logic block
    if (humanChoice == "rock" && computerChoice == "paper"){
        computerScore += 1;
        console.log("You lose! " + computerSelection + " beats " + humanSelection);
    } else if (humanChoice == "paper" && computerChoice == "rock"){
        humanScore += 1;
        console.log("You Win! " + humanSelection + " beats " + computerSelection);
    }

    // rock and scissors logic block
    if (humanChoice == "scissors" && computerChoice == "rock"){
        computerScore += 1;
        console.log("You lose! " + computerSelection + " beats " + humanSelection);
    } else if (humanChoice == "rock" && computerChoice == "scissors"){
        humanScore += 1;
        console.log("You Win! " + humanSelection + " beats " + computerSelection);
    }
        
    // paper and scissors logic block
    if (humanChoice == "paper" && computerChoice == "scissors"){
        computerScore += 1;
        console.log("You lose! " + computerSelection + " beats " + humanSelection);
    } else if (humanChoice == "scissors" && computerChoice == "paper"){
        humanScore += 1;
        console.log("You Win! " + humanSelection + " beats " + computerSelection);
    }
}

const   humanSelection = getHumanChoice().toLowerCase();
const   computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);


function playGame(){
    for (let i = 0; i < 5; i++) {
    playRound();
}

}