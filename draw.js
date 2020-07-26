import {gen_Random} from './util.js'
import {timeLeft, resetTheGame, score, gameBoard} from './script.js'

export let oneDimBoard = [];
export let newBoard = [];
export const draw = (boards, level, element) => {
    // console.log(boards, level, element);
    let boardNum = Math.floor(Math.random() * 3);
    
    let selectedBoard = boards[boardNum];
    for (let row of selectedBoard) {
        oneDimBoard = oneDimBoard.concat(row);
    }
    let oneDBoard = oneDimBoard.slice(0);
    if (level == 4) {
        let arr = gen_Random(40)
         arr.forEach(el=> oneDBoard[el] = 0);
        
    } else if (level == 3) {
        let arr = gen_Random(20)
        arr.forEach(el=> oneDBoard[el] = 0);
    } else {
        let arr = gen_Random(10)
        arr.forEach(el=> oneDBoard[el] = 0);
    }
    // console.log(oneDBoard);
    // console.log(element);
    newBoard = oneDBoard.slice(0);
    
    for(let i = 0; i < element.length; i++){
        element[i].children[0].innerText= newBoard[i] != 0?newBoard[i]:'';
        // if(element[i].children[0].innerText==''){
        //     element[i].removeEventListener('click',increm());
        // }
        // console.log(element[i].children[0].innerText= newBoard[i] != 0?newBoard[i]:'');
    }
}

export const update = () => {
    // console.log('hello world');
    // console.log(newBoard);
    if(localStorage.getItem('highScore')){
        score.innerText = `score: ${localStorage.getItem('score')}         highscore:${localStorage.getItem('highScore')}`;
    }
    console.log(timeLeft);
    if(oneDimBoard.toString() == newBoard.toString()){
        let scored = Math.floor((4*60000-timeLeft)/(4*60000) * 100);
        if(scored > localStorage.getItem('highScore')){
            alert('Congratulations!!! You have aquired the highest score');
            localStorage.setItem('highScore',scored);
            localStorage.setItem('score', scored);
        }else{
            localStorage.setItem('score', scored);
        }       
        
        gameBoard.innerHTML = `<h1 class="thank-you">You have won! Thank you For Playing</h1>`
        setTimeout(() => {
            resetTheGame();    
        }, 5000);
        
    }
    setTimeout(()=>{
        window.requestAnimationFrame(update);
    },2000)


    
}