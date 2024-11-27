import { Game } from "./game";

describe('Game Test', () => {
    const game = Game('Ahmed')
    test('Player Names',()=>{
        expect(game.player1.name).toBe('Ahmed')
        expect(game.player2.name).toBe('Computer')
    })

    test('starting game with no ships',()=>{
        expect(game.startGame()).toBe('Ship Deployment Not Complete')
    })

    test('starting game with ships deployed',()=>{
        game.player1.board.addShipsToBoardRand()
        game.player2.board.addShipsToBoardRand()
        expect(game.startGame()).toBe('Game Started')
    })

})
