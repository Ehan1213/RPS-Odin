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
    return computerChoice;
}


const score = document.querySelector("score");
const results = document.querySelector("roundResults");
const playerScore = document.querySelector("playerScore");
const computerScore = document.querySelector("computerScore");


const rockButton = document.querySelector("#rockButton")
rockButton.addEventListener("click", () => {
    const humanChoice = "rock";
    alert('You pushed rock');
    return humanChoice;
});

const paperButton = document.querySelector("#paperButton")
paperButton.addEventListener("click", () => {
    const humanChoice = "paper";
    alert('You pushed paper');
    return humanChoice;
});

const scissorsButton = document.querySelector("#scissorsButton")
scissorsButton.addEventListener("click", () => {
    const humanChoice = "scissors";
    alert('You pushed scissors');
    return humanChoice;
});





let playerTotal = 0;
let computerTotal = 0;


function playRound(humanChoice){
    let   humanSelection = humanChoice;
    let   computerSelection = getComputerChoice();

    // tie logic block
    if (humanSelection == computerSelection){ 

        console.log("It's a tie! " + humanSelection + " and " + computerSelection + " are the same!");
    }

    // rock and paper logic block
    if (humanSelection == "rock" && computerSelection == "paper"){
        computerTotal += 1;
        console.log("You lose! " + computerSelection + " beats " + humanSelection);
    } else if (humanSelection == "paper" && computerSelection == "rock"){
        playerTotal += 1;
        console.log("You Win! " + humanSelection + " beats " + computerSelection);
    }

    // rock and scissors logic block
    if (humanSelection == "scissors" && computerSelection == "rock"){
        computerTotal += 1;
        console.log("You lose! " + computerSelection + " beats " + humanSelection);
    } else if (humanSelection == "rock" && computerSelection == "scissors"){
        playerTotal += 1;
        console.log("You Win! " + humanSelection + " beats " + computerSelection);
    }
        
    // paper and scissors logic block
    if (humanSelection == "paper" && computerSelection == "scissors"){
        computerTotal += 1;
        console.log("You lose! " + computerSelection + " beats " + humanSelection);
    } else if (humanSelection == "scissors" && computerSelection == "paper"){
        playerTotal += 1;
        console.log("You Win! " + humanSelection + " beats " + computerSelection);
    }
}



// playRound(humanSelection, computerSelection); debugging


function playGame(){
//     for (let i = 0; i < 5; i++) {
//     playRound();
//  }
    if(playerTotal > computerTotal){
        console.log('The human WINS! With ' + playerTotal + ' points ' + "Final Score:" + playerTotal + '-' + computerTotal);
    } else if(computerTotal > playerTotal){
        console.log('The computer WINS! With ' + computerTotal + ' points ' + "Final Score:" + computerTotal + '-' + playerTotal);
    } else if(computerTotal === playerTotal){
        console.log("It's a tie! " + "Final Score:" + computerTotal + '-' + playerTotal);
    } else{
        console.log("Scoring Error")
    }
}

playGame()