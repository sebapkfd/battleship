import Ship from '../factories/Ship';

test('creating a Ship of a certain size', () => {
    const status = [false, false, false, false];
    expect(Ship(4).size).toEqual(4);
    expect(Ship(4).status).toEqual(status);
})

test('test if ships has functions', () => {
    expect(Ship(1).hit).toBeDefined();
    expect(Ship(1).isSunk).toBeDefined();
})

test('test hit function', () => {
    const testShip = Ship(5);
    testShip.hit(0);
    testShip.hit(4);
    const expected = [true, false, false, false, true];
    expect(testShip.status).toEqual(expected);
})

test('test isSunk function', () => {
    const sunkShip = Ship(4);
    sunkShip.hit(0);
    sunkShip.hit(0);
    expect(sunkShip.isSunk()).toBe(false);
    sunkShip.hit(1);
    sunkShip.hit(2);
    sunkShip.hit(1);
    expect(sunkShip.isSunk()).toBe(false);
    sunkShip.hit(3);
    expect(sunkShip.isSunk()).toBe(true);
})