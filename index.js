const guessInput = document.querySelector('.guess-input');
const checkBtn = document.querySelector('.check-btn');
const message = document.querySelector('.message');
const resetBtn = document.querySelector('.reset-btn');
const questionMark = document.querySelector('.questionmark');
const body = document.body;

let secretNumber;
let gameActive;

function initGame() {
  secretNumber = Math.floor(Math.random() * 20) + 1;
  gameActive = true;
  message.textContent = 'Start guessing...';
  questionMark.textContent = '?';
  guessInput.value = '';
  guessInput.disabled = false;
  checkBtn.disabled = false;
  body.style.backgroundColor = 'black';
}

function checkGuess() {
  if (!gameActive) return;

  const guess = Number(guessInput.value);

  if (!guess || guess < 1 || guess > 20 || Number.isNaN(guess)) {
    message.textContent = '❌ Enter a number between 1 and 20!';
    return;
  }

  if (guess === secretNumber) {
    body.style.backgroundColor = 'green';
    message.textContent = '🎉 Correct Number!';
    questionMark.textContent = secretNumber;
    gameActive = false;
    guessInput.disabled = true;
    checkBtn.disabled = true;
  } else {
    message.textContent = guess > secretNumber ? '📈 Too high!' : '📉 Too low!';
  }
}

checkBtn.addEventListener('click', checkGuess);
resetBtn.addEventListener('click', initGame);
guessInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') checkGuess();
});

initGame();
