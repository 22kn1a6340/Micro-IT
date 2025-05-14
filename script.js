let playerScore = 0;
let computerScore = 0;

const playerScoreElement = document.getElementById('player-score');
const computerScoreElement = document.getElementById('computer-score');
const resultElement = document.getElementById('result');

const choices = document.querySelectorAll('.choice');

choices.forEach(choice => {
  choice.addEventListener('click', (e) => {
    const playerChoice = e.target.id;
    const computerChoice = getComputerChoice();

    const result = determineWinner(playerChoice, computerChoice);
    updateScore(result);
    displayResult(result, playerChoice, computerChoice);
  });
});

function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomChoice = Math.floor(Math.random() * 3);
  return choices[randomChoice];
}

function determineWinner(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return 'draw';
  }

  if (
    (playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'paper' && computerChoice === 'rock') ||
    (playerChoice === 'scissors' && computerChoice === 'paper')
  ) {
    return 'player';
  } else {
    return 'computer';
  }
}

function updateScore(result) {
  if (result === 'player') {
    playerScore++;
  } else if (result === 'computer') {
    computerScore++;
  }

  playerScoreElement.textContent = playerScore;
  computerScoreElement.textContent = computerScore;
}

function displayResult(result, playerChoice, computerChoice) {
  if (result === 'draw') {
    resultElement.textContent = `It's a draw! You both chose ${playerChoice}.`;
  } else if (result === 'player') {
    resultElement.textContent = `You win! ${playerChoice} beats ${computerChoice}.`;
  } else {
    resultElement.textContent = `You lose! ${computerChoice} beats ${playerChoice}.`;
  }
}
