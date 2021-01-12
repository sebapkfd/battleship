import Game from '../factories/Game';

test('Game is defined', () => {
    expect(Game()).toBeDefined();
})

test('Game has Players and Gameboards', () => {
    const testGame = Game();
    expect(testGame.Player1).toBeDefined()
    expect(testGame.Player2).toBeDefined()
    expect(testGame.Player1.board).toBeDefined()
    expect(testGame.Player1.board).toBeDefined()
})

test('Game can set default positions', () => {
    const testGame = Game();
    expect(testGame.defaultPos()).toBe(true);
    const firstPlayer = testGame.Player1;
    const secondPlayer = testGame.Player2;
    expect(firstPlayer.board.positions[0].occupied).toBe(true);
    expect(firstPlayer.board.positions[10].occupied).toBe(true);
    expect(secondPlayer.board.positions[0].occupied).toBe(true);
    expect(secondPlayer.board.positions[10].occupied).toBe(true);  
})

