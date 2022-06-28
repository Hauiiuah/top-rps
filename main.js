
let playerScore=0
let computerScore=0

const buttons = document.querySelectorAll('.buttonRow button')
const resetButton = document.getElementById('resetButton')
const resultContainer = document.getElementById('results')
const scoreBoard = document.getElementById('scores')

const computerPlay =() => {
    const SELECTIONS=['rock','paper','scissors']
    const computerSelection = Math.floor(Math.random()*3)
    return SELECTIONS[computerSelection]

}

const playRound=(computerSelection, playerSelection) => {
    if(computerSelection== playerSelection)
    {
        return {draw: true}
    }
    
    if((computerSelection==='rock' && playerSelection==='paper') ||
    (computerSelection==='paper' && playerSelection==='scissors')||
    (computerSelection==='scissors'&& playerSelection==='rock'))
    {
        return {winner: 'Player',winnerSelection: playerSelection, looserSelection: computerSelection}
    }
    return {winner: 'Computer',winnerSelection:computerSelection,looserSelection: playerSelection}

}

const playerPlay=(e)=> {
    
    const playerSelection = e.target.innerText.toLowerCase()
    const result = playRound(computerPlay(),playerSelection)
    updateScore(result)
    printResult(result)
}

const printResult = (result) => {

    const message = document.createElement('p')
    if(result.draw)
    {
        message.innerText="DRAW"
        message.classList.add('draw')
    }
    else
    {
        message.innerText=`${result.winner} won with ${result.winnerSelection} against ${result.looserSelection}`
        result.winner==='Player' ? message.classList.add('win') : message.classList.add('loose')

    }
    resultContainer.appendChild(message)
}

const updateScore= (result) => {

    scoreBoard.innerHTML=""
    const scores = document.createElement('p')
    if(result.winner==='Computer')
    {
        computerScore++
    }
    else if(result.winner==='Player')
    {
        playerScore++
    }
    scores.innerText=`Player: ${playerScore} :: Computer: ${computerScore}`
    if(playerScore===5)
    {
        scores.innerText='Player won!'
        scores.classList.add('win')
        hideButtons(true)
    }
    if(computerScore===5)
    {
        scores.innerText='Computer won!'
        scores.classList.add('loose')
        hideButtons(true)
    }
   
    scoreBoard.appendChild(scores)
}

const hideButtons=(hide) => {
    hide? buttons.forEach(button => button.classList.add('hidden')): buttons.forEach(button => button.classList.remove('hidden'))
}
const resetGame = ()=> {
    playerScore=0
    computerScore=0
    resultContainer.innerHTML=''
    hideButtons(false)
    updateScore({})
}



buttons.forEach(button => button.addEventListener('click',playerPlay))
resetButton.addEventListener('click',resetGame)
updateScore({})