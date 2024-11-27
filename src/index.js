import { Battleship, Battleboard, Player } from './battleship';

function printBattleBoard(bb) {
  let returnStrings = [];
  let bboard = bb.getBattleboard();
  for (let i = 0; i <= 9; i++) {
    for (let j = 0; j <= 9; j++) {
        if (bboard[i][j] == null){
            bboard[i][j] = 'w'
        }else{
            bboard[i][j] = 'S'
        }
    }
  }
  for (let i = 0; i <= 9; i++) {
    // for (let j = 0; j<=9 ;j++){
    returnStrings.push(bboard[i].join(','));
    // }
  }
  return returnStrings;
}

let bb = new Battleboard();
bb.addShipsToBoardRand();
bb.getBattleboard();

let strings = printBattleBoard(bb);

for (let i = 0; i <= 9; i++) {
  console.log(strings[i]);
}
