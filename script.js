import { board } from './boardSchema.js';
import { draw, update, newBoard, oneDimBoard } from './draw.js';

const gameBoard = document.getElementById('game-board');
const resetButton = document.getElementsByClassName('reset-button')[0];
const startButton = document.getElementsByClassName('start-button')[0];
const selectLevel = document.getElementById('slct');
const timer = document.getElementsByClassName('timer')[0];
const gameBoardItem = document.getElementsByClassName('grid-item');
const gameItem = document.getElementsByClassName('game-item');
export const score = document.getElementsByClassName('score')[0];
export let timeLeft;
let level = 4;
timer.innerHTML = `04:00`;

resetButton.addEventListener('click', () => {
    resetTheGame();
});

startButton.addEventListener('click', () => {
    console.log('start button click');
    gameOn();
});

selectLevel.addEventListener('change', () => {
    console.log(selectLevel.options[selectLevel.selectedIndex].value);
    level = selectLevel.options[selectLevel.selectedIndex].value;

    if (level == 3) {
        timer.innerHTML = `03:00`;
    } else if (level == 4) {
        timer.innerHTML = `04:00`;
    } else {
        timer.innerHTML = `01:00`;
    }

});


if(localStorage.getItem('highScore')){
    score.innerText = `score: ${localStorage.getItem('score')}         highscore:${localStorage.getItem('highscore')}`;
}else{
    localStorage.setItem('highScore',0);
    localStorage.setItem('score', 0)
    score.innerText = `score: 0         highscore:0`
}

export const resetTheGame = () => {
    location.reload();
}

gameBoard.innerHTML = '';
for (let i = 0; i < 81; i++) {
    let gridItem = document.createElement('div');
    gridItem.className = `grid-item`
    gridItem.innerHTML = `<div type="number" class="game-item" name="${i}" id="${i}"></div>`;
    
    gameBoard.appendChild(gridItem);
    gridItem.children[0].addEventListener('click',function increm(){
        
        let previousValue = parseInt(gridItem.children[0].innerText)||0;
        if(previousValue < 9){
            previousValue++;
            gridItem.children[0].innerText = previousValue;
            if(newBoard[i] == 0){
                newBoard[i] = previousValue;
            }
            
        }else{
            gridItem.children[0].innerText = previousValue;
            if(newBoard[i] == 0){
                newBoard[i] = previousValue;
            }
        }
    })
}

function millisToMinutesAndSeconds(millis) {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    //return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
    return (seconds == 60 ? (minutes + 1) + ":00" : minutes + ":" + (seconds < 10 ? "0" : "") + seconds);
}


let gameOn = () => {
    startButton.disabled = true;
    selectLevel.disabled = true;
    draw(board, level, gameBoardItem);
    timeLeft = (level || 1) * 60000;
    let displayTime = setInterval(() => {
        if (timeLeft == 0) {
            clearInterval(displayTime);
            gameBoard.innerHTML = `<h1 class="thank-you">Thank you For Playing Please Try Again</h1>`
            setTimeout(() => {
                resetTheGame();
            }, 3000)
            return;
        }
        timeLeft -= 1000;
        // console.log(millisToMinutesAndSeconds(timeLeft));
        timer.innerHTML = millisToMinutesAndSeconds(timeLeft);
    }, 1000)

    window.requestAnimationFrame(update);
}



console.log(board);

