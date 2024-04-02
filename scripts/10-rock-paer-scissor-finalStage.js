

let score = JSON.parse(localStorage.getItem('score'))
|| {
win: 0,
lose: 0,
tie: 0
};

updateScoreElement();

document.querySelector('.js-result').innerHTML = `You pickeed ${playerMove}. Computer pick ${computerMove}`;
document.querySelector('.js-move').innerHTML = `${result}`;

function playGame(playerMove) {

const computerMove = pickComputerMove();

let result = '';
if (playerMove === 'Scissors') {
    if (computerMove === 'rock') {
        result = 'You lose';
    }
    else if (computerMove === 'Paper') {
        result = 'You win';
    }
    else if (computerMove === 'Scissors') {
        result = 'Tie';
    }

} else if (playerMove === 'Paper') {
    if (computerMove === 'rock') {
        result = 'You win';
    }
    else if (computerMove === 'Paper') {
        result = 'Tie';
    }
    else if (computerMove === 'Scissors') {
        result = 'You lose';
    }

} else if (playerMove === 'rock') {
    if (computerMove === 'rock') {
        result = 'Tie';
    }
    else if (computerMove === 'Paper') {
        result = 'You lose';
    }
    else if (computerMove === 'Scissors') {
        result = 'You win';
    }
}

if (result === 'You win') {
    score.win += 1;
} else if (result === 'You lose') {
    score.lose += 1;
} else if (result === 'Tie') {
    score.tie += 1;
}

localStorage.setItem('score', JSON.stringify(score));

// console.log(score.tie);
// local storage 
// localStorage.setItem('message', 'Hello');

updateScoreElement();
document.querySelector('.js-result').innerHTML = result;

document.querySelector('.js-move').innerHTML =
    `You 
    <img src="../img/${playerMove}-emoji.png" alt="" class="move-icon">
    <img src="../img/${computerMove}-emoji.png" alt="" class="move-icon">
    computer`;




//             alert(`You pickeed ${playerMove}. Computer pick ${computerMove}. ${result} 
// Wins: ${score.win} , lose: ${score.lose}, ties: ${score.tie}`);
}

function updateScoreElement() {
document.querySelector('.js-score').innerHTML = `Wins: ${score.win} , lose: ${score.lose}, ties: ${score.tie}`;

}

function pickComputerMove() {
let computerMove = '';
const randomNumber = Math.random();

if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = 'rock';
}
else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = 'Paper';
}
else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = 'Scissors';
}

return computerMove;
}