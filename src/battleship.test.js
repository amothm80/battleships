import { Battelship,Battleboard } from './battleship';

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

describe('Battleboard',()=>{
  const bb = new Battleboard();
  const bs5 = new Battelship(5);

  test('validate ship length 3', ()=>{
    expect(bb.validateLocation(3,[0,0],'H')).toBe(true)
    expect(bb.validateLocation(3,[9,0],'H')).toBe(false)
    expect(bb.validateLocation(3,[9,0],'V')).toBe(true)
    expect(bb.validateLocation(3,[0,9],'V')).toBe(false)

  })
  test('validate ship length 5', ()=>{
    expect(bb.validateLocation(5,[5,0],'H')).toBe(true)
    expect(bb.validateLocation(5,[6,0],'H')).toBe(false)
    expect(bb.validateLocation(5,[5,5],'V')).toBe(true)
    expect(bb.validateLocation(5,[5,6],'V')).toBe(false)
  })
  test('add ship length 5 location 0,0 player 1', ()=>{
    expect(bb.addShip(bs5,[0,0],'H',1)).toEqual([
      [bs5,bs5,bs5,bs5,bs5,null,null,null,null,null],
      [null,null,null,null,null,null,null,null,null,null],
      [null,null,null,null,null,null,null,null,null,null],
      [null,null,null,null,null,null,null,null,null,null],
      [null,null,null,null,null,null,null,null,null,null],
      [null,null,null,null,null,null,null,null,null,null],
      [null,null,null,null,null,null,null,null,null,null],
      [null,null,null,null,null,null,null,null,null,null],
      [null,null,null,null,null,null,null,null,null,null],
      [null,null,null,null,null,null,null,null,null,null]])
  })
  test('add ship length 5 location 5,5, player 1', ()=>{
    expect(bb.addShip(bs5,[5,5],'V',1)).toEqual([
      [bs5,bs5,bs5,bs5,bs5,null,null,null,null,null],
      [null,null,null,null,null,null,null,null,null,null],
      [null,null,null,null,null,null,null,null,null,null],
      [null,null,null,null,null,null,null,null,null,null],
      [null,null,null,null,null,null,null,null,null,null],
      [null,null,null,null,null,bs5,null,null,null,null],
      [null,null,null,null,null,bs5,null,null,null,null],
      [null,null,null,null,null,bs5,null,null,null,null],
      [null,null,null,null,null,bs5,null,null,null,null],
      [null,null,null,null,null,bs5,null,null,null,null]
    ])
  })
})