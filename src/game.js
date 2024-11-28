import { Battleship, Battleboard, Player } from './battleship';

export function Game(name) {
  let player1 = new Player(name);
  let player2 = new Player('Computer');
  let gameOn = false;
  let gameTurn = 1;

  function endGame() {
    gameOn = false;
    return 'Game Ended';
  }

  function gameStatus() {
    return gameOn;
  }

  function getTurn() {
    return gameTurn;
  }

  function changeTurn() {
    gameTurn = gameTurn == 1 ? 2 : 1;
  }

  function checkPlayerShipDeck() {
    let p1 = player1.board.ships.length == 4;
    let p2 = player2.board.ships.length == 4;
    return { player1: p1, player2: p2 };
  }

  function startGame() {
    let players = checkPlayerShipDeck();
    if (players.player1 == true && players.player2 == true) {
      gameOn = true;
      gameTurn = 1;
      return 'Game Started';
    }
    return 'Ship Deployment Not Complete';
  }

  function checkWinner() {
    if (player1.board.allShipsSunk()) {
      endGame();
      return 'Player 2 Wins';
    }
    if (player2.board.allShipsSunk()) {
      endGame();
      return 'Player 1 Wins';
    }
  }

  return {
    player1,
    player2,
    startGame,
    endGame,
    checkWinner,
    gameStatus,
    getTurn,
    changeTurn,
  };
}
