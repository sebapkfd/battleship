import Game from '../factories/Game';

test('Game is defined', () => {
    expect(Game()).toBeDefined();
})

test('Game has Players and Gameboards', () => {
    const testGame = Game();
    expect(Game.Player1).toBeDefined()
    expect(Game.Player2).toBeDefined()
    expect(Game.Player1.board).toBeDefined()
    expect(Game.Player1.board).toBeDefined()
})