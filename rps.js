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

const score = document.querySelector(".score");
const results = document.querySelector(".roundResults");
const scoreBox = document.querySelector("score");
const playerScore = document.querySelector(".playerScore");
const computerScore = document.querySelector(".computerScore");


const rockButton = document.querySelector("#rockButton")
rockButton.addEventListener("click", () => {
    const humanChoice = "rock";
    playRound(humanChoice)
});

const paperButton = document.querySelector("#paperButton")
paperButton.addEventListener("click", () => {
    const humanChoice = "paper";
    playRound(humanChoice);
});

const scissorsButton = document.querySelector("#scissorsButton")
scissorsButton.addEventListener("click", () => {
    const humanChoice = "scissors";
    playRound(humanChoice);
});



let playerTotal = 0;
let computerTotal = 0;
playerScore.textContent += `Player: ${playerTotal}`
computerScore.textContent += `Computer: ${computerTotal}`



function playRound(humanChoice){
    let computerSelection = getComputerChoice();
    let humanSelection = humanChoice;

    // tie logic block
    if (humanSelection == computerSelection){
        const resultItem = document.createElement("li");

        // debugging
        // console.log(`It's a tie! ${humanSelection} and ${computerSelection} are the same!`)

        resultItem.textContent = `It's a Tie! ${humanSelection} and ${computerSelection} are the same!`;
        results.appendChild(resultItem);
    }

    // rock and paper logic block
    if (humanSelection == "rock" && computerSelection == "paper"){
        computerTotal += 1;
        computerScore.textContent = `Computer: ${computerTotal}`

        // debugging
        // console.log(`You lost! ${humanSelection} lost to ${computerSelection}`)

        const resultItem = document.createElement("li");
        resultItem.textContent = `You lost! ${humanSelection} lost to ${computerSelection}`;
        results.appendChild(resultItem);

    } else if (humanSelection == "paper" && computerSelection == "rock"){
        playerTotal += 1;
        playerScore.textContent = `Player: ${playerTotal}`

        // debugging
        // console.log("You Win! " + humanSelection + " beats " + computerSelection);


        const resultItem = document.createElement("li");
        resultItem.textContent = `You Win! ${humanSelection} beats ${computerSelection}`;
        results.appendChild(resultItem);
    }

    // rock and scissors logic block
    if (humanSelection == "scissors" && computerSelection == "rock"){
        computerTotal += 1;
        computerScore.textContent = `Computer: ${computerTotal}`

        // debugging
        // console.log(`You lost! ${humanSelection} lost to ${computerSelection}`)

        const resultItem = document.createElement("li");
        resultItem.textContent = `You lost! ${humanSelection} lost to ${computerSelection}`;
        results.appendChild(resultItem);
        
    } else if (humanSelection == "rock" && computerSelection == "scissors"){
        playerTotal += 1;
        playerScore.textContent = `Player: ${playerTotal}`

        // debugging
        // console.log("You Win! " + humanSelection + " beats " + computerSelection);

        const resultItem = document.createElement("li");
        resultItem.textContent = `You Win! ${humanSelection} beats ${computerSelection}`;
        results.appendChild(resultItem);
    }
        
    // paper and scissors logic block
    if (humanSelection == "paper" && computerSelection == "scissors"){
        computerTotal += 1;
        computerScore.textContent = `Computer: ${computerTotal}`


        // debugging
        // console.log(`You lost! ${humanSelection} lost to ${computerSelection}`)

        const resultItem = document.createElement("li");
        resultItem.textContent = `You lost! ${humanSelection} lost to ${computerSelection}`;
        results.appendChild(resultItem);

    } else if (humanSelection == "scissors" && computerSelection == "paper"){
        playerTotal += 1;
        playerScore.textContent = `Player: ${playerTotal}`


        // debugging
        // console.log("You Win! " + humanSelection + " beats " + computerSelection);

        const resultItem = document.createElement("li");
        resultItem.textContent = `You Win! ${humanSelection} beats ${computerSelection}`;
        results.appendChild(resultItem);
    }

    checkWinCon()
}


function checkWinCon(){
    if (playerTotal === 5){
        alert(`You were first to reach 5 points! Comp only had ${computerTotal}`);
    } else if (computerTotal === 5){
        alert(`The Computer was first to reach 5 points! You only had ${playerTotal}`)
    }

}