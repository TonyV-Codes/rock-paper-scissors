console.log('hello world')

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

function playRound(humanChoice, computerChoice) {
      // Handle invalid human input
    if (humanChoice === 'invalid input') {
        console.log("Invalid input! Please choose rock, paper, or scissors.");
        return; // stop the round
    }

   if (humanChoice === computerChoice) {console.log('Its a tie!')}
   else if (
      humanChoice === 'rock' && computerChoice === 'scissors' ||
      humanChoice === 'paper' && computerChoice === 'rock' ||
      humanChoice === 'scissors' && computerChoice === 'paper'
   ) {
      humanScore++
      console.log('You win!')
   }
   else if (
      computerChoice === 'scissors' && humanChoice === 'paper'||
      computerChoice === 'paper' && humanChoice === 'rock' ||
      computerChoice === 'rock' && humanChoice === 'scissors'
   ) {
      computerScore++
      console.log('Computer win!')
   }
   else {
        console.log('We can play later')
   }
}

const humanSelection = getHumanChoice()
const computerSelection= getComputerchoice()
console.log('You chose:', humanSelection);
console.log('Computer chose:', computerSelection);

playRound(humanSelection, computerSelection)

console.log(computerScore)
console.log(humanScore)


