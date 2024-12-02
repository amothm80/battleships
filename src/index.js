import { Game } from './game';
import { addEvents } from './events';
import './styles.css';

export function renderGameBoards(game) {
  // for (let j = 1; j <= sideSquares; j++) {
  // for (let i = 1; i <= sideSquares; i++) {
  //   let griddiv = document.createElement("div");
  //   let divid = "grid" + i + j;
  //   let divclass = "flexgrid";
  //   griddiv.setAttribute("id", divid);
  //   griddiv.setAttribute("class", divclass);
  //   griddiv.style.height = squareSize + "px";
  //   griddiv.style.width = squareSize + "px";
  //   griddiv.addEventListener("mouseover", () => {
  const p1boardEl = document.querySelector('#gameboard-1');
  p1boardEl.innerHTML = '';
  let p1board = game.player1.board.getBattleboard();
  for (let i = 0; i <= 9; i++) {
    for (let j = 0; j <= 9; j++) {
      const griddiv = document.createElement('div');
      griddiv.id = 'p1' + '-' + i + '-' + j;
      griddiv.className =
        'gameboard-cells outline outline-1 outline-slate-200 bg-slate-300 opacity-50 rounded-sm hover:opacity-100 hover:-translate-x-0.5 hover:-translate-y-0.5 transition';
      griddiv.style.height = '20px';
      griddiv.style.width = '20px';
      if (p1board[i][j] != null) {
        switch (p1board[i][j]) {
          case 'H':
            griddiv.innerHTML = 'H';
            break;
          case 'M':
            griddiv.innerHTML = 'M';
            break;
          default:
            griddiv.innerHTML = 'S';
        }
      }
      p1boardEl.appendChild(griddiv);
    }
  }

  const p2boardEl = document.querySelector('#gameboard-2');
  p2boardEl.innerHTML = '';
  let p2board = game.player2.board.getBattleboard();
  for (let i = 0; i <= 9; i++) {
    for (let j = 0; j <= 9; j++) {
      const griddiv = document.createElement('div');
      griddiv.id = 'p2' + '-' + i + '-' + j;
      griddiv.className =
        'gameboard-cells outline outline-1 outline-slate-200 bg-slate-300 opacity-50 rounded-sm hover:opacity-100 hover:-translate-x-0.5 hover:-translate-y-0.5 transition';
      griddiv.style.height = '20px';
      griddiv.style.width = '20px';
      if (p2board[i][j] != null) {
        switch (p2board[i][j]) {
          case 'H':
            griddiv.innerHTML = 'H';
            break;
          case 'M':
            griddiv.innerHTML = 'M';
            break;
          default:
            griddiv.innerHTML = 'S';
        }
      }
      p2boardEl.appendChild(griddiv);
    }
  }
}

(() => {
  const game = Game('Player 1');
  game.player1.board.addShipsToBoardRand();
  game.player2.board.addShipsToBoardRand();
  addEvents(game);
  renderGameBoards(game);
})();
