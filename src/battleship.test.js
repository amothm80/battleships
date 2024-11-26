import { Battelship, Battleboard } from './battleship';

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
  const bb = new Battleboard();
  const bs3p1 = new Battelship(3);
  const bs5p1 = new Battelship(5);
  const bs3p2 = new Battelship(3);
  const bs5p2 = new Battelship(5);

  test('validate ship length 3', () => {
    expect(bb.validateLocation(3, [0, 0], 'H')).toBe(true);
    expect(bb.validateLocation(3, [0, 9], 'H')).toBe(false);
    expect(bb.validateLocation(3, [9, 0], 'V')).toBe(false);
    expect(bb.validateLocation(3, [0, 9], 'V')).toBe(true);
  });
  test('validate ship length 5', () => {
    expect(bb.validateLocation(5, [0, 5], 'H')).toBe(true);
    expect(bb.validateLocation(5, [0, 6], 'H')).toBe(false);
    expect(bb.validateLocation(5, [5, 5], 'V')).toBe(true);
    expect(bb.validateLocation(5, [6, 5], 'V')).toBe(false);
  });
  test('add ship length 3 location 0,0H player 1', () => {
    expect(bb.addShipToBoard(bs3p1, [0, 0], 'H', 1)).toStrictEqual({
      player: 1,
      player_ships: [bs3p1],
      player_board: [
        [bs3p1, bs3p1, bs3p1, null, null, null, null, null, null, null],
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
    });
  });
  test('add ship length 5 location 5,5V player 1', () => {
    expect(bb.addShipToBoard(bs5p1, [5, 5], 'V', 1)).toEqual({
      player: 1,
      player_ships: [bs3p1,bs5p1],
      player_board: [
        [bs3p1, bs3p1, bs3p1, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, bs5p1, null, null, null, null],
        [null, null, null, null, null, bs5p1, null, null, null, null],
        [null, null, null, null, null, bs5p1, null, null, null, null],
        [null, null, null, null, null, bs5p1, null, null, null, null],
        [null, null, null, null, null, bs3p1, null, null, null, null],
      ],
    });
  });
  test('add ship length 3 location 1,4H player 2', () => {
    expect(bb.addShipToBoard(bs3p2, [1, 4], 'H', 2)).toEqual({
      player: 2,
      player_ships: [bs3p2],
      player_board: [
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, bs3p2, bs3p2, bs3p2, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
      ],
    });
  });
  test('add ship length 5 location 7,2V player 2 invalid location', () => {
    expect(bb.addShipToBoard(bs5p2, [7, 2], 'V', 2)).toEqual({
      player: 2,
      player_ships: [bs3p2],
      player_board: [
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, bs3p2, bs3p2, bs3p2, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
      ],
    });
  });
  test('add ship length 5 location 5,2V player 2', () => {
    expect(bb.addShipToBoard(bs5p2, [5, 2], 'V', 2)).toEqual({
      player: 2,
      player_ships: [bs3p2,bs5p2],
      player_board: [
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, bs3p2, bs3p2, bs3p2, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, bs5p2, null, null, null, null, null, null, null],
        [null, null, bs5p2, null, null, null, null, null, null, null],
        [null, null, bs5p2, null, null, null, null, null, null, null],
        [null, null, bs5p2, null, null, null, null, null, null, null],
        [null, null, bs5p2, null, null, null, null, null, null, null],
      ],
    });
  });

  test('get player 1 board', () => {
    expect(bb.getBattleboard(1)).toEqual(
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
        [null, null, null, null, null, bs3p1, null, null, null, null],
      ],
    );
  });

  test('get player 2 board', () => {
    expect(bb.getBattleboard(2)).toEqual(
       [
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, bs3p2, bs3p2, bs3p2, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, bs5p2, null, null, null, null, null, null, null],
        [null, null, bs5p2, null, null, null, null, null, null, null],
        [null, null, bs5p2, null, null, null, null, null, null, null],
        [null, null, bs5p2, null, null, null, null, null, null, null],
        [null, null, bs5p2, null, null, null, null, null, null, null],
      ],
    );
  });

  test('receive attack player 1 location 0,1', () => {
    expect(bb.receiveAttack(1, [0, 1])).toEqual({
      player: 1,
      player_ships: [bs3p1,bs5p1],
      player_board: [
        [bs3p1, 'H', bs3p1, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, bs5p1, null, null, null, null],
        [null, null, null, null, null, bs5p1, null, null, null, null],
        [null, null, null, null, null, bs5p1, null, null, null, null],
        [null, null, null, null, null, bs5p1, null, null, null, null],
        [null, null, null, null, null, bs3p1, null, null, null, null],
      ],
    });
  });
  test('receive attack player 1 location 1,1', () => {
    expect(bb.receiveAttack(1, [1, 1])).toEqual({
      player: 1,
      player_ships: [bs3p1,bs5p1],
      player_board: [
        [bs3p1, 'H', bs3p1, null, null, null, null, null, null, null],
        [null, 'M', null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, bs5p1, null, null, null, null],
        [null, null, null, null, null, bs5p1, null, null, null, null],
        [null, null, null, null, null, bs5p1, null, null, null, null],
        [null, null, null, null, null, bs5p1, null, null, null, null],
        [null, null, null, null, null, bs3p1, null, null, null, null],
      ],
    });
  });
});
