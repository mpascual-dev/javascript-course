'use strict';
// constancs
const MAX_NUMBER = 20;
const MIN_NUMBER = 1;
const START_SCORE = 20;

// Cached Selectors
const bodyEl = document.querySelector('body');
const messageEl = document.querySelector('.message');
const scoreEl = document.querySelector('.score');
const numberEl = document.querySelector('.number');
const highscoreEl = document.querySelector('.highscore');
const guessInputEl = document.querySelector('.guess');
const checkBtnEl = document.querySelector('.check');
const againBtnEl = document.querySelector('.again');

// ui helper

function setMessage(text) {
  messageEl.textContent = text;
}
function setNumber(value) {
  numberEl.textContent = value;
}
function setScore(value) {
  scoreEl.textContent = value;
}
function setHighscore(value) {
  highscoreEl.textContent = value;
}
function setBackgroundColor(color) {
  bodyEl.style.backgroundColor = color;
}
function disabledPlay(disabled) {
  guessInputEl.disabled = disabled;
  checkBtnEl.disabled = disabled;
}
function clearInput() {
  guessInputEl.value = '';
}

// Game state variables
let secretNumber = Math.trunc(Math.random() * MAX_NUMBER + MIN_NUMBER);
console.log('Your Secret Number is ', secretNumber);
let score = START_SCORE;
let highscore = 0;

function resetGameState() {
  score = START_SCORE;
  secretNumber = Math.trunc(Math.random() * MAX_NUMBER + MIN_NUMBER);
}
function renderInitialUI() {
  setMessage('Start guessing...');
  setNumber('?');
  setScore(score);
  clearInput();
  disabledPlay(false);
  setBackgroundColor('');
}
renderInitialUI();
/////////////////////
//basicgame logic
checkBtnEl.addEventListener('click', function () {
  const guess = Number(guessInputEl.value);
  console.log('Player Guessed:', guess);
  //when there is no input
  if (!guess) return setMessage('Please Input a Number !');
  //input validation
  if (guess < MIN_NUMBER || guess > MAX_NUMBER) {
    return setMessage(
      `Number must be between ${MIN_NUMBER} and ${MAX_NUMBER} !`
    );
  }

  if (guess === secretNumber) {
    setMessage('🎉 You Have Won!')
    setMessage('🎉 You Have One');
  setNumber(secretNumber);
  setBackgroundColor('green');
  if (score > highscore) {
    highscore = score;
    setHighscore(highscore);
  }
  disabledPlay(true);
  clearInput('');
  return;
}

// 🔥 WRONG GUESS SECTION (outside the if)
setMessage(guess > secretNumber ? '📈 Too High!' : '📉 Too Low!');
score--;
setScore(score);

if (score <= 1) {
  setMessage('Game Over Please Try Again !');
  setNumber(secretNumber);
  setBackgroundColor('red');
  disabledPlay(true);
  clearInput('');
}
});

/////////////////////
againBtnEl.addEventListener('click', function () {
  resetGameState();
  renderInitialUI();
  console.log('Your Secret Number is ', secretNumber);
});
window.addEventListener('keydown', function (e) {
  if (e.key === 'Enter' && !checkBtnEl.disabled) {
    checkBtnEl.click();
  }
});

// Focus input on restart
againBtnEl.addEventListener('click', function () {
  guessInputEl.focus();
});
