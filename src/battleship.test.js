import { Battelship, Battleboard,Player } from './battleship';

describe('Battleship', () => {
  const bs = new Battelship(3);

  test('first hit', () => {
    expect(bs.hit()).toBe('HIT!');
  });
  test('second hit', () => {
    expect(bs.hit()).toBe('HIT!');
  });
  test('third hit', () => {
    expect(bs.hit()).toBe('SUNK!');
  });
  test('invalid hit', () => {
    expect(bs.hit()).toBe('SUNK!');
  });
});

describe('Battleboard', () => {
  const p1 = new Player('player 1')
  // const bb = new Battleboard();
  const bs2p1 = new Battelship(2);
  const bs3p1 = new Battelship(3);
  const bs4p1 = new Battelship(4);
  const bs5p1 = new Battelship(5);
  // const bs2p2 = new Battelship(2);
  // const bs3p2 = new Battelship(3);
  // const bs4p2 = new Battelship(4);
  // const bs5p2 = new Battelship(5);

  test('validate ship length 3', () => {
    expect(p1.board.validateLocation(3, [0, 0], 'H')).toBe(true);
    expect(p1.board.validateLocation(3, [0, 9], 'H')).toBe(false);
    expect(p1.board.validateLocation(3, [9, 0], 'V')).toBe(false);
    expect(p1.board.validateLocation(3, [0, 9], 'V')).toBe(true);
  });
  test('validate ship length 5', () => {
    expect(p1.board.validateLocation(5, [0, 5], 'H')).toBe(true);
    expect(p1.board.validateLocation(5, [0, 6], 'H')).toBe(false);
    expect(p1.board.validateLocation(5, [5, 5], 'V')).toBe(true);
    expect(p1.board.validateLocation(5, [6, 5], 'V')).toBe(false);
  });
  test('add ship length 3 location 0,0H player 1', () => {
    expect(p1.board.addShipToBoard(bs3p1, [0, 0], 'H', 1)).toStrictEqual(
      // {
      // player: 1,
      // player_ships: [bs3p1],
      // player_board:
       [[bs3p1, bs3p1, bs3p1, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
      ],
    // }
  );
  });
  test('add ship length 5 location 7,2V player 1 invalid location', () => {
    expect(p1.board.addShipToBoard(bs5p1, [7, 2], 'V')).toEqual(
      // {
      // player: 2,
      // player_ships: [bs3p2],
      // player_board: 
      [[bs3p1, bs3p1, bs3p1, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
    ],
    // }
  );
  });
  test('add ship length 5 location 5,5V player 1', () => {
    expect(p1.board.addShipToBoard(bs5p1, [5, 5], 'V')).toEqual(
      // {
      // player: 1,
      // player_ships: [bs3p1,bs5p1],
      // player_board: 
      [
        [bs3p1, bs3p1, bs3p1, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, bs5p1, null, null, null, null],
        [null, null, null, null, null, bs5p1, null, null, null, null],
        [null, null, null, null, null, bs5p1, null, null, null, null],
        [null, null, null, null, null, bs5p1, null, null, null, null],
        [null, null, null, null, null, bs5p1, null, null, null, null],
      ],
    // }
  );
  });
  // test('add ship length 3 location 1,4H player 2', () => {
  //   expect(bb.addShipToBoard(bs3p2, [1, 4], 'H', 2)).toEqual({
  //     player: 2,
  //     player_ships: [bs3p2],
  //     player_board: [
  //       [null, null, null, null, null, null, null, null, null, null],
  //       [null, null, null, null, bs3p2, bs3p2, bs3p2, null, null, null],
  //       [null, null, null, null, null, null, null, null, null, null],
  //       [null, null, null, null, null, null, null, null, null, null],
  //       [null, null, null, null, null, null, null, null, null, null],
  //       [null, null, null, null, null, null, null, null, null, null],
  //       [null, null, null, null, null, null, null, null, null, null],
  //       [null, null, null, null, null, null, null, null, null, null],
  //       [null, null, null, null, null, null, null, null, null, null],
  //       [null, null, null, null, null, null, null, null, null, null],
  //     ],
  //   });
  // });

  // test('add ship length 5 location 5,2V player 2', () => {
  //   expect(bb.addShipToBoard(bs5p2, [5, 2], 'V', 2)).toEqual({
  //     player: 2,
  //     player_ships: [bs3p2,bs5p2],
  //     player_board: [
  //       [null, null, null, null, null, null, null, null, null, null],
  //       [null, null, null, null, bs3p2, bs3p2, bs3p2, null, null, null],
  //       [null, null, null, null, null, null, null, null, null, null],
  //       [null, null, null, null, null, null, null, null, null, null],
  //       [null, null, null, null, null, null, null, null, null, null],
  //       [null, null, bs5p2, null, null, null, null, null, null, null],
  //       [null, null, bs5p2, null, null, null, null, null, null, null],
  //       [null, null, bs5p2, null, null, null, null, null, null, null],
  //       [null, null, bs5p2, null, null, null, null, null, null, null],
  //       [null, null, bs5p2, null, null, null, null, null, null, null],
  //     ],
  //   });
  // });

  test('add the rest of ships',()=>{
    p1.board.addShipToBoard(bs2p1, [6, 1], 'V')
    p1.board.addShipToBoard(bs4p1, [2, 4], 'H')
    // bb.addShipToBoard(bs2p2, [0, 0], 'V', 2)
    // bb.addShipToBoard(bs4p2, [3, 2], 'H', 2)
  })

  // test('start game',()=>{
  //   expect(bb.startGame()).toBe('Game Started')
  // })

  test('get player 1 board', () => {
    expect(p1.board.getBattleboard()).toEqual(
       [
        [bs3p1, bs3p1, bs3p1, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, bs4p1, bs4p1, bs4p1, bs4p1, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, bs5p1, null, null, null, null],
        [null, bs2p1, null, null, null, bs5p1, null, null, null, null],
        [null, bs2p1, null, null, null, bs5p1, null, null, null, null],
        [null, null, null, null, null, bs5p1, null, null, null, null],
        [null, null, null, null, null, bs5p1, null, null, null, null],
      ],
    );
  });

  // test('get player 2 board', () => {
  //   expect(bb.getBattleboard(2)).toEqual(
  //      [
  //       [bs2p2, null, null, null, null, null, null, null, null, null],
  //       [bs2p2, null, null, null, bs3p2, bs3p2, bs3p2, null, null, null],
  //       [null, null, null, null, null, null, null, null, null, null],
  //       [null, null, bs4p2, bs4p2, bs4p2, bs4p2, null, null, null, null],
  //       [null, null, null, null, null, null, null, null, null, null],
  //       [null, null, bs5p2, null, null, null, null, null, null, null],
  //       [null, null, bs5p2, null, null, null, null, null, null, null],
  //       [null, null, bs5p2, null, null, null, null, null, null, null],
  //       [null, null, bs5p2, null, null, null, null, null, null, null],
  //       [null, null, bs5p2, null, null, null, null, null, null, null],
  //     ],
  //   );
  // });



  test('receive attack player 1 location 0,1', () => {
    expect(p1.board.receiveAttack([0, 1])).toEqual(
      // {
      // player: 1,
      // player_ships: [bs2p1,bs3p1,bs4p1,bs5p1],
      // player_board: 
      [
        [bs3p1, 'H', bs3p1, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, bs4p1, bs4p1, bs4p1, bs4p1, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, bs5p1, null, null, null, null],
        [null, bs2p1, null, null, null, bs5p1, null, null, null, null],
        [null, bs2p1, null, null, null, bs5p1, null, null, null, null],
        [null, null, null, null, null, bs5p1, null, null, null, null],
        [null, null, null, null, null, bs5p1, null, null, null, null],
      ],
    // }
  );
  });
  test('receive attack player 1 location 1,1', () => {
    expect(p1.board.receiveAttack([1, 1])).toEqual(
      // {
      // player: 1,
      // player_ships: [bs2p1,bs3p1,bs4p1,bs5p1],
      // player_board:
       [
        [bs3p1, 'H', bs3p1, null, null, null, null, null, null, null],
        [null, 'M', null, null, null, null, null, null, null, null],
        [null, null, null, null, bs4p1, bs4p1, bs4p1, bs4p1, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, bs5p1, null, null, null, null],
        [null, bs2p1, null, null, null, bs5p1, null, null, null, null],
        [null, bs2p1, null, null, null, bs5p1, null, null, null, null],
        [null, null, null, null, null, bs5p1, null, null, null, null],
        [null, null, null, null, null, bs5p1, null, null, null, null],
      ],
    // }
  );
  });

  test('receive attack player 1 location 1,1 on location already hit', () => {
    expect(p1.board.receiveAttack( [1, 1])).toEqual('Location Already Hit');
  });
  test('sink player 1 ships',()=>{
    p1.board.receiveAttack([0,0])
    p1.board.receiveAttack([0,2])
    p1.board.receiveAttack([2,4])
    p1.board.receiveAttack([2,5])
    p1.board.receiveAttack([2,6])
    p1.board.receiveAttack([2,7])
    p1.board.receiveAttack([2,4])
    p1.board.receiveAttack([2,5])
    p1.board.receiveAttack([6,1])
    p1.board.receiveAttack([7,1])
    p1.board.receiveAttack([5,5])
    p1.board.receiveAttack([6,5])
    p1.board.receiveAttack([7,5])
    p1.board.receiveAttack([8,5])
    p1.board.receiveAttack([9,5])
  })

  test('get player 1 board after sinking', () => {
    expect(p1.board.getBattleboard()).toEqual(
       [
        ['H', 'H', 'H', null, null, null, null, null, null, null],
        [null, 'M', null, null, null, null, null, null, null, null],
        [null, null, null, null, 'H', 'H', 'H', 'H', null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, 'H', null, null, null, null],
        [null, 'H', null, null, null, 'H', null, null, null, null],
        [null, 'H', null, null, null, 'H', null, null, null, null],
        [null, null, null, null, null, 'H', null, null, null, null],
        [null, null, null, null, null, 'H', null, null, null, null],
      ],
    );
  });

  test("all player 1 ships sunk",()=>{
    expect(p1.allShipsSunk()).toBe(true)
  })

  // test('check player 2 winning',()=>{
  //   expect(bb.checkWinner()).toBe('Player 2 Wins')
  // })
});
