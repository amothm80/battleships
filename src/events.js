import { renderGameBoards } from '.';
function attack(e, game) {
  if (game.gameStatus()) {
    let cell = e.target.id.split('-');
    let hitLocation = [cell[1], cell[2]];
    if (cell[0] == 'p1' && game.getTurn() == 2) {
      game.player1.board.receiveAttack(hitLocation);
      game.changeTurn();
    }
    if (cell[0] == 'p2' && game.getTurn() == 1) {
      game.player2.board.receiveAttack(hitLocation);
      game.changeTurn();
    }
  } else {
    alert('game not started');
  }
  // console.log(cell)
  renderGameBoards(game);
  const winner = game.checkWinner()
  if (winner != '' && winner != undefined){
    alert(winner)
  }
}

function buttons(e, game) {
  if (e.target.id == 'start') {
    if (!game.gameStatus()) {
      alert(game.startGame());
    } else {
      alert('game already started');
    }
  }
  if (e.target.id == 'end') {
    if (game.gameStatus()) {
      game.endGame();
    } else {
      alert('game not started');
    }
  }
}

export function addEvents(game) {
  document.querySelector('#gameboards').addEventListener('click', (e) => {
    attack(e, game);
  });

  document.querySelector('#controls').addEventListener('click', (e) => {
    buttons(e, game);
  });
}
