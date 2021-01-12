import Gameboard from '../factories/Gameboard';

test('Board size', () => {
    expect(Gameboard().positions.length).toBe(100)
})


test('first test', () => {
    const testCord = {
        occupied: false,
        ship: null,
        shipPos: null,
        isHit: false
    }
    const testBoard = Gameboard();
    expect(testBoard.positions[50]).toEqual(testCord)
})

test('test placing Ships', () => {
    const testBoard = Gameboard();
    expect(testBoard.placeShip(1, 0)).toBe(true);
    expect(testBoard.placeShip(4, 99)).toBe(false);
    expect(testBoard.placeShip(4, 49)).toBe(false);
    expect(testBoard.placeShip(4, 0)).toBe(false);
    expect(testBoard.placeShip(4, 83)).toBe(true);
})

test('receiving attacks', () => {
    const testBoard = Gameboard();
    testBoard.placeShip(1, 0)
    testBoard.placeShip(4, 15)
    expect(testBoard.receiveAttack(30)).toBe(false);
    expect(testBoard.receiveAttack(0)).toBe(true);
    expect(testBoard.receiveAttack(15)).toBe(true);
    expect(testBoard.positions[15].ship.status[0]).toBe(true);
    expect(testBoard.positions[18].ship.status[0]).toBe(true);
})

test('All ships are sunk', () => {
    const testBoard = Gameboard();
    testBoard.placeShip(1, 0);
    testBoard.placeShip(1, 15);
    testBoard.placeShip(2, 50);
    testBoard.receiveAttack(0);
    testBoard.receiveAttack(50);
    expect(testBoard.allSunk()).toBe(false);
    testBoard.receiveAttack(15);
    testBoard.receiveAttack(51);
    expect(testBoard.allSunk()).toBe(true);
})