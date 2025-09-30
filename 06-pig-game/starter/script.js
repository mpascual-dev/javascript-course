'use strict';
console.log('Welcome to the Pig Game 🐷');
//game state variables
let scores, currentScore, activePlayer, playing;
//select player 0 (player1)
const player0El = document.querySelector('.player--0')
//select player 1 (player2)
const player1El = document.querySelector('.player--1');
//select score element for player 0
const score0El = document.querySelector('#score--0');
//select score element for player 1
const score1El = document.querySelector('#score--1');

const current0El = document.getElementSelector('#current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');

const btnNew = document.querySelector('.btn--new');

const btnRoll = document.querySelector('.btn--roll');

//game intialization function
const init = function () {
    //start with both scores at 0
    scores = [0, 0];
    //set current score to 0
    currentScore = 0;
    //set active player to player 0
    activePlayer = 0;
    playing = true;
//reset all the display
    score0El.textContent = 0;
    score1El.textContent = 0;
    current0El.textContent = 0;
    current1El.textContent = 0;
    diceEl.classList.add('hidden');
};


init();

btnRollE1.addEventListener('click', function () {
    if (playing) {
        //add dice logic
    }
});
//add dice logic
const dice = Math.trunc(Math.random() * 6) + 1;
diceEl.classList.remove('hidden');
diceEl.src = `dice-${dice}.png`;
if (dice !== 1) {
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent = currentScore;
} else {
    //handle rolling
    currentScore = 0;
    document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    //switch player logic can be added here if needed
}