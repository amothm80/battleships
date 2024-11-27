export class Battelship {
  #length = 0;
  #hits = 0;
  #isSunk = false;
  constructor(hits) {
    this.#hits = hits;
    this.#length = hits;
    this.#isSunk = false;
  }

  isSunk() {
    return this.#isSunk;
  }
  getlength() {
    return this.#length;
  }
  hit() {
    if (!this.isSunk() && this.#hits > 1) {
      this.#hits -= 1;
      return 'HIT!';
    } else if (!this.isSunk() && this.#hits == 1) {
      this.#hits -= 1;
      this.#isSunk = true;
      return 'SUNK!';
    } else if (this.isSunk()) {
      return 'SUNK!';
    }
  }
}

export class Battleboard {
  constructor() {
    // this.boardP1 = [];
    this.ships = [];
    this.board = this.createBoard();
    // this.boardP2 = [];
  }

  createBoard() {
    const array = [];
    for (let i = 0; i < 10; i++) {
      array[i] = [];
      for (let j = 0; j < 10; j++) {
        array[i][j] = null;
      }
    }
    return array;
  }

  validateLocation(length, location, orientation) {
    if (orientation == 'H') {
      if (location[1] + length - 1 > 9) {
        return false;
      } else {
        return true;
      }
    } else if (orientation == 'V') {
      if (location[0] + length - 1 > 9) {
        return false;
      } else {
        return true;
      }
    }
  }

  receiveAttack(location) {
    const playerBoard = this.getBattleboard();
    const boardCell = playerBoard[location[0]][location[1]];
    if (boardCell != null) {
      if (
        playerBoard[location[0]][location[1]] == 'M' ||
        playerBoard[location[0]][location[1]] == 'H'
      ) {
        return 'Location Already Hit';
      }
      playerBoard[location[0]][location[1]].hit();
      playerBoard[location[0]][location[1]] = 'H';
    } else {
      playerBoard[location[0]][location[1]] = 'M';
    }
    return this.getBattleboard();
  }

  addShipToList(ship) {
    this.ships.push(ship);
  }

  addShipToBoard(ship, location, orientation) {
    if (this.validateLocation(ship.getlength(), location, orientation)) {
      for (let i = 0; i < ship.getlength(); i++) {
        if (orientation == 'H') {
          this.board[location[0]][location[1] + i] = ship;
        } else if (orientation == 'V') {
          this.board[location[0] + i][location[1]] = ship;
        }
      }
      this.addShipToList(ship);
    }
    return this.getBattleboard();
    // return this.getBattleboard(player)
  }

  getBattleboard() {
    return this.board;
  }
  getShips() {
    return this.ships;
  }
}

export class Player {
  constructor(name) {
    this.name = name;
    this.board = new Battleboard();
  }

  getPlayerDetails() {
    return {
      player_name: this.name,
      player_ships: this.board.getShips(),
      player_board: this.board.getBattleboard(),
    };
  }

  getPlayerBoard() {
    return this.board;
  }

  allShipsSunk() {
    return (
      this.board.getShips().filter((ship) => {
        !ship.isSunk();
      }).length == 0
    );
  }
}

const game = () => {
  // startGame() {
  //   if (this.shipsP1.length == 4 && this.shipsP2.length == 4) {
  //     this.gameOn = true;
  //     return 'Game Started';
  //   }else{
  //     return "4 ships for each player has to be on board."
  //   }
  // }
  // getGameStatus(){
  //   return this.gameOn;
  // }
  // checkWinner() {
  //   if (this.gameOn) {
  //     const shipsP1sunk = this.getShips(1).filter((ship) => {
  //       !ship.isSunk();
  //     });
  //     const shipsP2sunk = this.getShips(2).filter((ship) => {
  //       !ship.isSunk();
  //     });
  //     if (shipsP1sunk.length == 0) {
  //       this.gameOn = false;
  //       return 'Player 2 Wins';
  //     }
  //     if (shipsP2sunk.length == 0) {
  //       this.gameOn = false;
  //       return 'Player 1 Wins';
  //     }
  //   } else {
  //     return 'Game Not Running';
  //   }
  // }
};
