document.documentElement.style.setProperty('--animate-duration', '2s');

function play(userChoice) {
    const computerChoice = getComputerChoice();
    const result = getResult(userChoice, computerChoice);
    displayResult(result, computerChoice);
  }
  
  function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
  }
  
  function getResult(user, computer) {
    if (user === computer) {
      return 'tie';
    } else if (user === 'rock' && computer === 'scissors' ||
        user === 'paper' && computer === 'rock' ||
        user === 'scissors' && computer === 'paper') {
      return 'win';
    } else {
      return 'lose';
    }
  }
  
  function displayResult(result, computerChoice) {
    const resultEl = document.getElementById('result');
    resultEl.innerHTML = `You ${result}! Computer chose ${computerChoice}.`;
  }
//   This is a simple example, you can enhance this game by adding a score board, or adding more interactions.
  
//   Please keep in mind that this is just a basic example, and there are many ways to improve and expand upon the game.
function displayResult(result, computerChoice) {
  const resultEl = document.getElementById('result');
  resultEl.innerHTML = `You ${result}! Computer chose ${computerChoice}.`;
  resultEl.classList.add('animated');
}
let userScore = 0;
let computerScore = 0;
  
function displayResult(result, computerChoice) {
  if (result === 'win') {
    userScore++;
  } else if (result === 'lose') {
    computerScore++;
  }
  // display the scores
  const resultEl = document.getElementById('result');
  resultEl.innerHTML = `You ${result}! Computer chose ${computerChoice}. Your score: ${userScore} Computer score: ${computerScore}`;
}
function play(userChoice) {
  const computerChoice = getComputerChoice();
  const result = getResult(userChoice, computerChoice);
  displayResult(result, computerChoice);
  if (userScore === 2 || computerScore === 2) {
    if (userScore > computerScore) {
      alert('You won the game');
    } else {
      alert('Computer won the game');
    }
    userScore = 0;
    computerScore = 0;
  }
}






  
  