


const computerPlay =() => {
    const SELECTIONS=['rock','paper','scissors']
    const computerSelection = Math.floor(Math.random()*3)
    return SELECTIONS[computerSelection]

}

const playRound=(computerSelection, playerSelection) => {
    console.log('Computer selection :',computerSelection)
    console.log('Player selection: ',playerSelection)
    if(computerSelection== playerSelection)
    {
        return 0
    }
    
    if((computerSelection==='rock' && playerSelection==='paper') ||
    (computerSelection==='paper' && playerSelection==='scissors')||
    (computerSelection==='scissors'&& playerSelection==='rock'))
    {
        return 1
    }
    return -1

}

const playerPlay=()=> {
    const input =prompt('Please enter "Rock", "Paper" or "Scissors" ')
    const playerSelection=input.toLowerCase()
    return playerSelection
}



const evaluateWinner = (score) => {
    return score < 0 ? 'Computer wins' : score > 0 ? 'Player wins' : 'Draw'
}

const game=() =>{
    let score=0
    for(let i=0;i<5;i++)
    {
        const playerSelection = playerPlay()
        const computerSelection = computerPlay()
        score += playRound(computerSelection,playerSelection)
    }

    console.log(evaluateWinner(score))
 
}

game()