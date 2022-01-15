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
    console.log(compPlay); 
}

