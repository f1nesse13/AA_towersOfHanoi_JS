const Game = require('./towersOfHanoi.js')
const readline = require('readline');
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let newGame = new Game();

newGame.run(reader, completionCallback)
  
function completionCallback() {
  reader.question("Would you like to play again? Y/N ", (playAgain) => {
    if (playAgain.toUpperCase() === "Y") {
      run(reader, completionCallback)
    } else {
      reader.close();
    }
  });
}
