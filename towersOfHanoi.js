class Game {
  constructor () {
    this.towers = [[3,2,1], [], []]
  }

  printBoard () {
    console.log(JSON.stringify(this.towers));
  }

  promptMove (reader, callback) {
    this.printBoard();

    reader.question("Choose a starting tower: ", start => {
      let startTower = parseInt(start);
      reader.question("Choose an ending tower: ", end => {
        let endTower = parseInt(end);
        callback(startTower, endTower);
      });
    });
    
  }

  validMove (startTower, endTower) {
    let startDisc = this.towers[startTower]
    let endDisc = this.towers[endTower]
    if ((startDisc[startDisc.length - 1] > endDisc[endDisc.length - 1]) || startDisc.length === 0) {
      return false;
    } else {
      return true;
    }
  }

  move (startTower, endTower) {
    if(this.validMove(startTower, endTower)) {
      this.towers[endTower].push(this.towers[startTower].pop());
      return true;
    } else {
      return false;
    }
  }

  isWon () {
    if (this.towers[1].length === 3 || this.towers[2].length === 3) {
      console.log("You win!")
      return true;
    } else {
      return false;
    }
  }

  run (reader, completionCallback) {
    this.promptMove(reader, (startTower, endTower) => {
      if (!this.move(startTower, endTower)) {
        console.log("Invalid move!")
      }
    if (!this.isWon()) {
      this.run(reader, completionCallback);
    } else {
      this.printBoard();
      console.log("You win!")
      completionCallback();
    }
  });
}
}
module.exports = Game;