class Game {
  constructor () {
    this.towers = [[3,2,1], [], []]
  }

  printBoard () {
    this.towers.forEach(el => {
      console.log(JSON.stringify(el));
    });
  }

  promptMove (...input) {
    this.printBoard();
    let [towers] = [input]
    let getInput = () => {
      this.move(towers[0], towers[1])
    }
    getInput();
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
      let startDisc = this.towers[startTower].pop();
      this.towers[endTower].push(startDisc);
      return true;
    } else {
      console.log("Invalid move")
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

  run (completionCallback) {
    this.promptMove(0,1);
    if (this.isWon()) {
      completionCallback();
    } else {
      this.run();
    }
  }
}