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

function playerSelection(){
    let playerChoice = prompt("Please choose. Rock, Paper, or Scissors.");
    let playerChoice2 = playerChoice.toLowerCase();
    playerChoice = playerChoice2[0].toUpperCase() + playerChoice2.substring(1);
    return playerChoice;
}

function playRound()
{
    let playerPick;
    let compPick;
    let score = [0,0];

    while (playerPick != 'Rock' && playerPick != 'Paper' && playerPick != "Scissors")
    {
        playerPick = playerSelection();
    }

    compPick = computerPlay();

    if (playerPick == compPick)
    {
        console.log('You both picked ' + compPick + '.');
        
    }
    else if((playerPick == 'Rock' && compPick == 'Paper') || (playerPick == 'Paper' && compPick == 'Scissors') || (playerPick == 'Scissors' && compPick == 'Rock'))
    {
        console.log('You lose. ' + compPick + ' beats ' + playerPick + '.');
        score[1] = 1;
    }
    else{
        console.log('You win! ' + playerPick + ' beats ' + compPick +'!');
        score[0] = 1;
    }

    return score;
}

function game()
{
    let playerScore = 0;
    let compScore = 0;
    let combinedScore = [0,0];

    for(let i = 0; i<5; i++)
    {
        console.log('Round ' + (+i+1) +'!');
        console.log('Current score is Player ' + playerScore + ' and Computer ' + compScore +'.');
        combinedScore = playRound();
        playerScore += combinedScore[0];
        compScore += combinedScore[1];
    }

    if(playerScore > compScore)
    {
        console.log('You Win!');
    }
    else if(compScore > playerScore)
    {
        console.log('Computer Wins!');
    }
    else{
        console.log('Tie game.');
    }

    console.log('Final Score, Player ' + playerScore + '. Computer ' + compScore + '.');
}