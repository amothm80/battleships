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
    this.shipsP1 = []
    this.boardP1 = this.createBoard();
    // this.boardP2 = [];
    this.shipsP2 = []
    this.boardP2 = this.createBoard();
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

  receiveAttack(player, location) {
    const playerBoard = this.getBattleboard(player);
    if (playerBoard[location[0]][location[1]] != null) {
      playerBoard[location[0]][location[1]].hit();
      playerBoard[location[0]][location[1]] = 'H';
    } else {
      playerBoard[location[0]][location[1]] = 'M';
    }
    return this.getPlayerDetails(player)
  }

  addShipToPlayer(ship, player) {
    if (player == 1) {
      this.shipsP1.push(ship);
      return this.shipsP1;
    } else if (player == 2) {
      this.shipsP2.push(ship);
      return this.shipsP2;
    }
  }

  addShipToBoard(ship, location, orientation, player) {
    const playerBoard = player == 1 ? this.boardP1 : this.boardP2;
    if (this.validateLocation(ship.getlength(), location, orientation)) {
      for (let i = 0; i < ship.getlength(); i++) {
        if (orientation == 'H') {
          playerBoard[location[0]][location[1] + i] = ship;
        } else if (orientation == 'V') {
          playerBoard[location[0] + i][location[1]] = ship;
        }
      }
      this.addShipToPlayer(ship, player)
    }
    return this.getPlayerDetails(player)
    // return this.getBattleboard(player)
  }

  getBattleboard(player) {
    if (player == 1) {
      return this.boardP1;
    } else if (player == 2) {
      return this.boardP2;
    }
  }
  getShips(player){
    if (player == 1) {
      return this.shipsP1;
    } else if (player == 2) {
      return this.shipsP2;
    }
  }
  getPlayerDetails(player){
    return {player:player,
      player_ships: this.getShips(player),
      player_board: this.getBattleboard(player),
    }
  }
}
