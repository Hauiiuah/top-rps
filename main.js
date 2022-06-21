
const selections=['rock','paper','scissors']

const computerPlay =() => {
    const computerSelection = Math.floor(Math.random()*3)
    return selections[computerSelection]

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


const game=() =>{
    let score=0
    for(let i=0;i<5;i++)
    {
        const playerSelection = playerPlay()
        const computerSelection = computerPlay()
        score += playRound(computerSelection,playerSelection)
    }

    if(score<0)
    {
        console.log('Computer wins!')
    
    }
    else if(score>0){
        console.log('Player wins!')
    }
    else{
        console.log('Draw!')
    }
    
}

game()