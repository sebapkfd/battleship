import Player from '../factories/Player';

test('Player has a Gameboard', () => {
    const testPlayer = Player();
    expect(testPlayer.board).toBeDefined();
})

test('Player places random ship', () => {
    const firstPlayer = Player();
    expect(firstPlayer.randomPlace(1)).toBeGreaterThanOrEqual(0);
    expect(firstPlayer.randomPlace(5)).toBeGreaterThanOrEqual(0);
})

test('Player makes a random attack', () => {
    const firstPlayer = Player();
    const secondPlayer = Player();
    expect(secondPlayer.randomAttack(firstPlayer.board)).toBe(true)
    
})

test('Player makes 1 valid attack and repeat it', () => {
    const firstPlayer = Player();
    const secondPlayer = Player();
    expect(firstPlayer.attack(secondPlayer.board, 0)).toBeTruthy();
    expect(firstPlayer.attack(secondPlayer.board, 0)).toBeFalsy();   
})