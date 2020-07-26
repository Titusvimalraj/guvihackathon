import { board } from './boardSchema.js';
import { draw, update, newBoard, oneDimBoard } from './draw.js';

document.body.innerHTML = `  <main>
<section>
    <div class="heading-score">
        <h1>
            Sudoku   
       </h1>
       &emsp14;&emsp14;&emsp14;&emsp14;&emsp14;
       <h2 class="score">
           Score: 0
       </h2>     
    </div>
   
    <div id="display-content">
        <div id="controls">
            <div class="control-buttons">
                <button class="start-button">
                    Start
                </button>
                <button class="reset-button">
                    Reset
                </button>

            </div>
                                   
            <div class="select">
                <select disabled name="slct" id="slct">
                  <option  value="1">
                    Easy
                </option>
                <option value="3">
                    Medium
                </option>
                <option selected value="4">
                    Hard
                </option>
                </select>
              </div>
           

            <div class="timer">
                
            </div>
        </div>
        <div id="game-board">
            
        </div>

    </div>                
</section>
</main>`;

export const gameBoard = document.getElementById('game-board');
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
        //console.log('start button click');
        gameOn();
    });
    
    selectLevel.addEventListener('change', () => {
        //console.log(selectLevel.options[selectLevel.selectedIndex].value);
        level = selectLevel.options[selectLevel.selectedIndex].value;
    
        if (level == 3) {
            timer.innerHTML = `03:00`;
        } else if (level == 4) {
            timer.innerHTML = `04:00`;
        } else {
            timer.innerHTML = `01:00`;
        }
    
    });
    

if (localStorage.getItem('highScore')) {
    score.innerText = `score: ${localStorage.getItem('score')}         highscore:${localStorage.getItem('highScore')}`;
} else {
    localStorage.setItem('highScore', 0);
    localStorage.setItem('score', 0)
    score.innerText = `score: 0         highscore:0`
}
gameBoard.innerHTML = '';

for (let i = 0; i < 81; i++) {
    let gridItem = document.createElement('div');
    gridItem.className = `grid-item`
    gridItem.innerHTML = `<div type="number" class="game-item" name="${i}" id="${i}"></div>`;

    gameBoard.appendChild(gridItem);
    gridItem.children[0].addEventListener('click', function increm() {
        //console.log(oneDimBoard);
        //console.log(newBoard);

        //console.log(oneDimBoard.toString() == newBoard.toString());
        let previousValue = parseInt(gridItem.children[0].innerText) || 0;
        if (previousValue < 9) {
            previousValue++;
            gridItem.children[0].innerText = previousValue;

            newBoard[i] = previousValue;


        } else {
            previousValue = 1;
            gridItem.children[0].innerText = previousValue;

            newBoard[i] = previousValue;

        }
    })
}







export const resetTheGame = () => {
    location.reload();
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



// console.log(board);

