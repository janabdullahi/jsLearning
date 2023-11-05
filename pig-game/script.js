' use strict '

const score0El = document.getElementById('score--0').textContent = 0;
const score1El = document.getElementById('score--1').textContent = 0;
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');
const btnRoll = document.querySelector('.btn--roll');

const current0El = document.getElementById('current--0')
const current1El = document.getElementById('current--1')

diceEl.classList.add('hidden');
let currentScore = 0;

btnRoll.addEventListener('click', function(){
    const dice = Math.trunc(Math.random() * 6) + 1;

    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    if(dice !==1){
        currentScore += dice;
        current0El.textContent = currentScore
    }else{

    }
    
})
