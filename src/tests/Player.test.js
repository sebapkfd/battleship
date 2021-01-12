import Player from '../factories/Player';

test('Player has a Gameboard', () => {
    const testPlayer = Player();
    expect(testPlayer.board).toBeDefined();
})

test('Player make a random movement', () => {
    const firstPlayer = Player();
    const secondPlayer = Player();
    expect(secondPlayer.randomPlay(firstPlayer.board)).toBe(true)
    
})

test('Player make 1 valid attack and repeat it', () => {
    const firstPlayer = Player();
    const secondPlayer = Player();
    expect(firstPlayer.attack(secondPlayer.board, 0)).toBeTruthy();
    expect(firstPlayer.attack(secondPlayer.board, 0)).toBeFalsy();
    
})