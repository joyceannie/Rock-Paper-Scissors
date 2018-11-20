let rockButton = document.getElementById('rock');
let paperButton = document.getElementById('paper');
let scissorsButton = document.getElementById('scissors');
let currentResult = document.getElementById('round-result');
let currentScore = document.getElementById('scores');
let finalWinner = document.getElementById('final-winner');
let newGameButton = document.getElementById('new-game-button');
function computerPlay() {
    randomNumber = Math.floor(Math.random() * 3);
    let values = ['Rock', 'Paper', 'Scissors'];
    return values[randomNumber];
}

let computerSelection;
let playerSelection;

let computerScore = 0;
let playerScore = 0;

let resultMsg;


function playerSelectedRock() {
    playerSelection = 'Rock';
    computerSelection = computerPlay();
    resultMsg = `You chose ${playerSelection}. Computer chose ${computerSelection}`;
    currentResult.innerHTML = resultMsg;
    if (computerSelection === 'Paper') {
        playerScore ++;
        console.log('You win!');
        
    }
    else if (computerSelection === 'Scissors'){
        computerScore++;
        console.log('Better luck next time.');
    }
    currentScore.textContent = `Player score: ${playerScore} | Computer score: ${computerScore}`;
    findWinner();
}

function playerSelectedPaper() {
    playerSelection = 'Paper';
    computerSelection = computerPlay();
    resultMsg = `You chose ${playerSelection}. Computer chose ${computerSelection}`;
    currentResult.innerHTML = resultMsg;
    if (computerSelection === 'Rock') {
        playerScore ++;
        console.log('You win!');
    }
    else if (computerSelection === 'Scissors'){
        computerScore++;
        console.log('Better luck next time.');
    }
    currentScore.textContent = `Player score: ${playerScore} | Computer score: ${computerScore}`;
    findWinner();
}

function playerSelectedScissors() {
    playerSelection = 'Scissors';
    computerSelection = computerPlay();
    resultMsg = `You chose ${playerSelection}. Computer chose ${computerSelection}`;
    currentResult.innerHTML = resultMsg;
    if (computerSelection === 'Paper') {
        playerScore ++;
        console.log('You win!');
    }
    else if (computerSelection === 'Rock'){
        computerScore++;
        console.log('Better luck next time.');
    }  
    currentScore.textContent = `Player score: ${playerScore} | Computer score: ${computerScore}`; 
    findWinner();
}

function findWinner() {
    if (computerScore>=5) {
        finalWinner.innerHTML = 'GAME OVER!!!';
        startNewGame();
    }
    else if (playerScore>=5) {
        finalWinner.innerHTML='Congrats!';
        
        startNewGame();
    }
}

function startNewGame() {
    playerScore = 0;
    computerScore = 0;
    newGameButton.style.visibility = inherit;
    rockButton.disabled= !rockButton.disabled; 
    paperButton.disabled = !paperButton.disabled ;
    scissorsButton.disabled = !scissorsButton.disabled;    
}



