import Gameboard from '../components/Gameboard';
import Ship from '../components/Ship';

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
    const firstShip = Ship(1);
    const secondShip = Ship(4);
    expect(testBoard.placeShip(firstShip, 0)).toBe(true);
    expect(testBoard.placeShip(secondShip, 99)).toBe(false);
    expect(testBoard.placeShip(secondShip, 49)).toBe(false);
    expect(testBoard.placeShip(secondShip, 0)).toBe(false);
    expect(testBoard.placeShip(secondShip, 83)).toBe(true);
})

test('receiving attacks', () => {
    const testBoard = Gameboard();
    const firstShip = Ship(1);
    const secondShip = Ship(4);
    testBoard.placeShip(firstShip, 0)
    testBoard.placeShip(secondShip, 15, secondShip)
    expect(testBoard.receiveAttack(30)).toBe(false);
    expect(testBoard.receiveAttack(0)).toBe(true);
    expect(testBoard.receiveAttack(15)).toBe(true);
    expect(testBoard.positions[15].ship.status[0]).toBe(true);
    expect(testBoard.positions[18].ship.status[0]).toBe(true);
    
})