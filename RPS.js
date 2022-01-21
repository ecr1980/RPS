function computerSelection() //This gets the random number for the computer.
{
    let compChoice = Math.floor(Math.random()*3);
    return compChoice;
}

//This assigns the labal to the random number.
function pickEquals(pick)
{
    let choice;
    if (pick == 0)
    {
        choice = "Rock";
    }
    else if (pick == 1)
    {
        choice = "Paper";
    }
    else
    {
        choice = "Scissors";
    }
    return choice;
}

//This is the computer's turn.
function computerPlay()
{
    let compPlay = pickEquals(computerSelection());
    return compPlay; 
}

// non strict comparisons do not negate capitalizations. In other words......
//  rock == Rock will be false.

//This is for the player to choose.

/*function playerSelection(){
    const playerChoice1 = document.getElementById('button1');
    const playerChoice2 = document.getElementById('button2');
    const playerChoice3 = document.getElementById('button3');
    const playerChoice ='Rock';
    playerChoice1.addEventListener('click', pickEquals0);
    function pickEquals0(){
        alert('0!')
    }
    playerChoice2.addEventListener('click', pickEquals1);
    function pickEquals1(){
        alert('1!')
    }
    playerChoice3.addEventListener('click', pickEquals2);
    function pickEquals2(){
        alert('2!')
    }
    console.log(playerChoice1);
    return playerChoice;
} */

function playRound(pPick)
{
    let compPick;
    let roundWinner = '';

      compPick = computerPlay();

    if (pPick == compPick)
    {
        console.log('You both picked ' + compPick + '.');
        
    }
    else if((pPick == 'Rock' && compPick == 'Paper') || (pPick == 'Paper' && compPick == 'Scissors') || (pPick == 'Scissors' && compPick == 'Rock'))
    {
        console.log('You lose. ' + compPick + ' beats ' + pPick + '.');
        roundWinner = 'comp';
    }
    else{
        console.log('You win! ' + pPick + ' beats ' + compPick +'!');
        roundWinner = 'player';
    }
    return roundWinner;
}

function game()
{
    let score = [0,0];
    let tempScore = [0,0];
    let roundWinnerMain = '';
    const playerChoice1 = document.getElementById('button1');
    const playerChoice2 = document.getElementById('button2');
    const playerChoice3 = document.getElementById('button3');
    playerChoice1.addEventListener('click', pickEquals1);
    function pickEquals1(){
        roundWinnerMain = playRound('Rock');
        tempScore = scoreAdd(roundWinnerMain);
        score[0] += tempScore[0];
        score[1] += tempScore[1];
        console.log(score);
           
    }
    playerChoice2.addEventListener('click', pickEquals2);
    function pickEquals2(){
        roundWinnerMain = playRound('Paper');
        tempScore = scoreAdd(roundWinnerMain);
        score[0] += tempScore[0];
        score[1] += tempScore[1];
        console.log(score);
    }
    playerChoice3.addEventListener('click', pickEquals3);
    function pickEquals3(){
        roundWinnerMain = playRound('Scissors');
        tempScore = scoreAdd(roundWinnerMain);
        score[0] += tempScore[0];
        score[1] += tempScore[1];
        console.log(score);
    }
    console.log(playerChoice1);
    //const scoreDisplay = document.querySelector('.scoreDisplay');
    //scoreDisplay.textContent = `Current score is: Player ${playerScore} Computer ${compScore}.`;


}   
    function scoreAdd(roundWinner)
    {
        let returnScore = [0,0];
        //const scoreDisplay = document.querySelector('.scoreDisplay');
        if(roundWinner == 'player')
        {
            returnScore[0] = 1;
        }
        else if(roundWinner == 'comp')
        {
            returnScore[1] = 1;
        }
        

        return returnScore;
    
    }

game();