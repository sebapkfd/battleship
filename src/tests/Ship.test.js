import Ship from '../components/Ship';

test('creating a Ship of a certain size', () => {
    const status = [false, false, false, false]
    expect(Ship(4).size).toEqual(4)
    expect(Ship(4).status).toEqual(status)
})

test('test if ships has functions', () => {
    expect(Ship(1).hit).toBeDefined();
    expect(Ship(1).isSunk).toBeDefined();
})