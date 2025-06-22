const rpsButtons = document.querySelectorAll('.rpsButton');
const playerScore= document.getElementById('#player-score');
const hands= document.getElementById('#hands');
const result= document.getElementById('#result');
const endGameButton = document.getElementById('#endGameButton');

let attenderscore= 0;

const getComputerChoice = () => {
  const choices = ['Rock', 'Paper', 'Scissors'];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
};

const getResult = (playerChoice, computerChoice) => {
  if (playerChoice === computerChoice) return 0;
  if (
    (playerChoice === 'Rock' && computerChoice === 'Scissors') ||
    (playerChoice === 'Scissors' && computerChoice === 'Paper') ||
    (playerChoice === 'Paper' && computerChoice === 'Rock')
  ) {
    return 1;
  }
  return -1;
};

const showResult = (score, playerChoice, computerChoice) => {
  if (score === 1) {
    result.innerText = 'You Win!';
    attenderscore++;
  } else if (score === -1) {
    result.innerText = 'You Lose!';
  } else {
    result.innerText = "It's a Draw!";
  }

  hands.innerText = `👱 ${playerChoice} vs 🤖 ${computerChoice}`;
  playerScore.innerText = "Score:" `${attenderscore}`;
};

const onClickRPS = (playerChoice) => {
  const computerChoice = getComputerChoice();
  const score = getResult(playerChoice, computerChoice);
  showResult(score, playerChoice, computerChoice);
};

rpsButtons.forEach(button => {
  button.onclick = () => onClickRPS(button.value);
});

endGameButton.onclick = () => {
  attenderscore= 0;
  playerScore.innerText = '';
  hands.innerText = '';
  result.innerText = '';
};