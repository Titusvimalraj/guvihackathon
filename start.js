(() => {
    
    document.body.innerHTML = `<main>
    <section class="instructions-section">
        <div class="heading-score">
            <h1>
                Sudoku   
           </h1>
           </div>

           <div class="first-instructions">
                <h2>
                Instructions                
                </h2>
                <br><br>
                <p>
                    The sudoku is a mathematics puzzle game were 9 X 9 matrix grid holds numbers from 1-9. Grids are further split to 3 X 3, wherein Each 3 X 3 matrix holds unique digits from 1-9. The rows and columns with digits comprising of 1-9 also need to be maintained unique. <br><br>
                    The game has a timer and it starts once the Start button is clicked. The grid is tappable and clickable for each subsequent click you the digit in the cell will be incremented by a value of one. 1 .. 2 .. 3 so on till 9 and back to 1. <br> <br>
                    The reset button resets the game for new game. The timer is for 4 minutes and the score is time based the more quicker you finish the more score you get.
                    You can click the button below to begin!.
                </p>
                <br>
                <a id="beginButton" href="game.html">Begin</a>
           </div>
           </section>
           </main>`;

        //    setTimeout(() => {
        //        const beginButton = document.getElementById('beginButton');
        //     beginButton.addEventListener('click', function (){
        //         document.body.innerHTML = '';
        //         loadGame();
        //        })    
        //    }, 200);
           
           
})();
