const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');
const gameResult = document.getElementById('result');


function getComputerspick() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function findingWinner(playersPick, computersPick) {
    if (playersPick === computersPick) {
        return "its a draw";
    } else if (
        (playersPick === 'rock' && computersPick === 'scissors') ||
        (playersPick === 'paper' && computersPick === 'rock') ||
        (playersPick === 'scissors' && computersPick === 'paper')
    ) {
        return "You Win";

    } else {
        return "You lose";
    }
}
function playersPickHandler(playersPick) {
    const computersPick = getComputerspick();
    const result = findingWinner(playersPick, computersPick);
    gameResult.textContent = `You chose ${playersPick}.  Computer chose ${computersPick}. ${result}`;
}

rockButton.addEventListener('click', () => playersPickHandler('rock'));
paperButton.addEventListener('click', () => playersPickHandler('paper'));
scissorsButton.addEventListener('click', () => playersPickHandler('scissors'));




