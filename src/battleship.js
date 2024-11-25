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
    this.boardP1 = this.createBoard();
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
      if (location[0] + length - 1 > 9) {
        return false;
      } else {
        return true;
      }
    } else if (orientation == 'V') {
      if (location[1] + length - 1 > 9) {
        return false;
      } else {
        return true;
      }
    }
  }

  addShip(ship, location, orientation, player) {
    if (this.validateLocation(ship.getlength(), location, orientation)) {
      for (let i = 0; i < ship.getlength(); i++) {
        if (orientation == 'H') {
          if ((player = 1)) {
            this.boardP1[location[0]][location[1] + i] = ship;
          } else if ((player = 2)) {
            this.boardP2[location[0]][location[1] + i] = ship;
          }
        } else if (orientation == 'V') {
          if ((player = 1)) {
            this.boardP1[location[0] + i][location[1]] = ship;
          } else if ((player = 2)) {
            this.boardP2[location[0] + i][location[1]] = ship;
          }
        }
      }
    }
    if ((player = 1)) {
        return this.boardP1;
    } else if ((player = 2)) {
        return this.boardP2;
    }

  }
}
