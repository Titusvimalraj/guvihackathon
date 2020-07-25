const gameBoard = document.getElementById('game-board');
const resetButton = document.getElementsByClassName('reset-button')[0];
const startButton = document.getElementsByClassName('start-button')[0];
const selectLevel = document.getElementById('slct');
const timer = document.getElementsByClassName('timer')[0];

let level = 1;
timer.innerHTML = `01:00`;

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
    
       if(level == 2){
        timer.innerHTML = `03:00`;
       }else if(level == 3){
        timer.innerHTML = `04:00`;
       }else{
        timer.innerHTML = `01:00`;
       }
    
});





let resetTheGame = () => {
    location.reload();
}

gameBoard.innerHTML = '';
for (let i = 0; i < 81; i++) {
    let gridItem = document.createElement('div');
    gridItem.className = `grid-item`
    gridItem.innerHTML = `<div type="number" name="${i}" id="${i}"></div>`;
    gameBoard.appendChild(gridItem);
}

function millisToMinutesAndSeconds(millis) {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    //return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
    return (seconds == 60 ? (minutes + 1) + ":00" : minutes + ":" + (seconds < 10 ? "0" : "") + seconds);
}


let gameOn = () => {
    let timeLeft = (level || 1) * 60000;
    let displayTime = setInterval(() => {
        if (timeLeft == 0) {
            clearInterval(displayTime);
            alert('time over');
            setTimeout(() => {
                resetTheGame();
            })
            return;
        }
        timeLeft -= 1000;
        console.log(millisToMinutesAndSeconds(timeLeft));
        timer.innerHTML = millisToMinutesAndSeconds(timeLeft);
    }, 1000)


}




