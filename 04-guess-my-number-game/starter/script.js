'use strict';
// DOM Elements Selection
const messageEl = document.querySelector('.message');
console.log(messageEl.textContent);

//messageEl.textContent = 'Hello From JavaScript';  

const scoreEl = document.querySelector('.score');
//scoreEl.textContent = 15;

const numberEl = document.querySelector('.number');
//numberEl.textContent = 10;

const highscoreEl = document.querySelector('.highscore');
//highscoreEl.textContent = 28;
 
const guessInputEl = document.querySelector('.guess');
//guessInputEl.value = 6;


// Game state variables
let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log('Your Secret Number is ', secretNumber);
let score = 20;
let highscore = 0;

document.querySelector('.score').textContent = score;
document.querySelector('.highscore').textContent = highscore;

/////////////////////
document.querySelector('.check').addEventListener('click', function() {
//code block
console.log('Checked button clicked');
const guess = Number (document.querySelector('.guess').value);
console.log('Player Guessed:',guess);

if (guess === secretNumber) {
    // When player wins
    console.log('Correct Guess!!!');
    document.querySelector('.number').textContent = secretNumber;
    if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
    }
    document.querySelector('.guess').disabled = true; 
    document.querySelector('.check').disabled = true;
    document.querySelector('.message').textContent = '🎉 You Won!!';

} else if (guess > secretNumber) {
    // When guess is too high
    console.log('Too High!!!');
    document.querySelector('.message').textContent = 'Too High!!';
    score--;
    document.querySelector('.score').textContent = score;
    if (score < 1) {
        document.querySelector('.message').textContent = '💥 You Lost The Game!!!';
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('.guess').disabled = true; 
        document.querySelector('.check').disabled = true;
    }
} else if (guess < secretNumber) {
    // When guess is too low
    console.log('Too Low!!!');
    document.querySelector('.message').textContent = '💥 Too Low!!!';
    score--;
    document.querySelector('.score').textContent = score;
    if (score < 1) {
        document.querySelector('.message').textContent = '💥 You Lost The Game!!!';
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('.guess').disabled = true; 
        document.querySelector('.check').disabled = true;
    }
}})

/////////////////////
document.querySelector('.again').addEventListener('click', function() {
//code block
score = 20;
secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.message').textContent = 'Start guessing...';
//restart secret number display
document.querySelector('.number').textContent = '?';
//restart the score
document.querySelector('.score').textContent = score;
//empty the guess input field
document.querySelector('.guess').value = '';
//enable the guess input field and check button
document.querySelector('.guess').disabled = false; 
document.querySelector('.check').disabled = false;
});