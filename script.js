console.log('hello world')

function getComputerchoice() {
 let sum = (Math.random() * 100) + 1
 if ( sum <= 30 ) {return "rock"}
 else if (sum >= 31 && sum <= 65) {return 'paper'}
 else {return 'scissors'}
  
}

console.log(getComputerchoice())