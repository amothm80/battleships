function getRandomIntInclusive(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
}

export class Battleship {
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
        for (let i = 0; i < length; i++) {
          if (this.board[location[0]][location[1] + i] != null) {
            return false;
          }
        }
        return true;
      }
    } else if (orientation == 'V') {
      if (location[0] + length - 1 > 9) {
        return false;
      } else {
        for (let i = 0; i < length; i++) {
          if (this.board[location[0] + i][location[1]] != null) {
            return false;
          }
        }
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
    }else{
      return false
    }
    return this.getBattleboard();
    // return this.getBattleboard(player)
  }

  addShipsToBoardRand() {
    let shiplist = [
      new Battleship(2),
      new Battleship(3),
      new Battleship(4),
      new Battleship(5),
    ];

    let orientationlist = ['H', 'V'];

    shiplist.forEach((ship) => {
      // while (
      //   this.ships.length != shiplist.length
      // ) {
      while(!this.addShipToBoard(
        ship,
        [getRandomIntInclusive(0, 9), getRandomIntInclusive(0, 9)],
        orientationlist[getRandomIntInclusive(0, 1)]
      )){}
      // }
    });
  }

  getBattleboard() {
    return this.board;
  }
  getShips() {
    return this.ships;
  }

  allShipsSunk() {
    return (
      this.getShips().filter((ship) => !ship.isSunk()).length == 0
    );
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

  // getPlayerName(){
  //   return this.name
  // }

  // getPlayerBoard() {
  //   return this.board;
  // }
}
