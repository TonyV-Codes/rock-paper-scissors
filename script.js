console.log('you\'re JS file is connected')

function getComputerchoice() {
   let sum = (Math.random() * 100) + 1
   if (sum <= 30) { return "rock" }
   else if (sum >= 31 && sum <= 65) { return 'paper' }
   else { return 'scissors' }

}


function getHumanChoice() {
   let choice = prompt('Rock, Paper or Scissors')
   choice = choice.trim().toLowerCase()
   if (choice == 'rock' || choice == 'paper' || choice == 'scissors') { return choice }
   else { return 'invalid input' }
}




let humanScore = 0
let computerScore = 0
let whoWonRound = ''

function playRound(humanChoice, computerChoice) {
      // Handle invalid human input
    if (humanChoice === 'invalid input') {
        console.log("Invalid input! Please choose rock, paper, or scissors.");
        return;
    }

   if (humanChoice === computerChoice) { whoWonRound = 'Its a tie!'}
   else if (
      humanChoice === 'rock' && computerChoice === 'scissors' ||
      humanChoice === 'paper' && computerChoice === 'rock' ||
      humanChoice === 'scissors' && computerChoice === 'paper'
   ) {
      humanScore++
      whoWonRound ='You win!'
   }
   else if (
      computerChoice === 'scissors' && humanChoice === 'paper'||
      computerChoice === 'paper' && humanChoice === 'rock' ||
      computerChoice === 'rock' && humanChoice === 'scissors'
   ) {
      computerScore++
      whoWonRound = 'Computer win!'
   }
   else {
        console.log('We can play later')
   }
}

// const humanSelection = getHumanChoice()
const computerSelection= getComputerchoice()
// console.log('You chose:', humanSelection);
console.log('Computer chose:', computerSelection);



// console.log(computerScore)
// console.log(humanScore)

// function playGame() {
//    const humanSelection = getHumanChoice();
//    const computerSelection = getComputerchoice();
//    playRound(humanSelection, computerSelection);
//       console.log('You chose:', humanSelection);
//       console.log('Computer chose:', computerSelection);
//       console.log('Computer Score:' ,computerScore)
//       console.log('Your Score: ', humanScore)
//    if(computerScore === 5) { return ('Game Over,You Lose!')}
//    else if (humanScore=== 5 ) { return ('Winner Winner Chicken Dinner, You Win')}
//    else { 
//       return playGame() ;}
// }

// console.log(playGame())

function resetScore () {
   computerScore = 0
   humanScore = 0
}

function renderScoreBoard() {
  humanPoints.textContent = `Human Score: ${humanScore}`
  computerPoints.textContent = `Computer Score: ${computerScore}`
  whoWon.textContent = whoWonRound
  if(computerScore === 5) { 
    whoWon.textContent = 'Game Over,You Lose!'
    resetScore()
   }
    else if (humanScore=== 5 ) {
       whoWon.textContent = 'Winner Winner Chicken Dinner, You Win'
       resetScore()
      }


}


function playARound (e)  {
   let personChoice = e.target.textContent
   let computerChoose = getComputerchoice()
   playRound(personChoice, computerChoose)
   renderScoreBoard()
}

const rockBtn = document.createElement('button')
rockBtn.textContent = 'rock'
rockBtn.addEventListener('click' , playARound)
const paperBtn = document.createElement('button')
paperBtn.textContent = 'paper'
paperBtn.addEventListener('click' , playARound)
const scissorsBtn = document.createElement('button')
scissorsBtn.textContent = 'scissors'
scissorsBtn.addEventListener('click' , playARound)

const btnContainer = document.createElement('div')
document.body.appendChild(btnContainer)

btnContainer.appendChild(rockBtn)
btnContainer.appendChild(paperBtn)
btnContainer.appendChild(scissorsBtn)


const scoreBoard = document.createElement('div')
document.body.appendChild(scoreBoard)

const humanPoints = document.createElement('p')
humanPoints.textContent= `Human Score : ${humanScore}`
const computerPoints = document.createElement('p')
computerPoints.textContent = `Computer Score ${computerScore}`


scoreBoard.appendChild(humanPoints)
scoreBoard.appendChild(computerPoints)

//we need to display who won the round
const whoWon = document.createElement('p')
scoreBoard.appendChild(whoWon)


//we need to display who wins the game once 5 points are reached 