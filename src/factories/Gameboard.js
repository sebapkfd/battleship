import Ship from './Ship';

const Gameboard = () => { //Only adding horizontally
    
    let positions = Array(100);
    for (let i = 0; i < positions.length; i++) {
        positions[i] = {
            occupied: false,
            ship: null,
            shipPos: null,
            isHit: false
        }
    }
    let ships = [];

    const placeVertically = (ship, cord) => {
        const lastPos = cord + (ship.size-1)*10;
        if(lastPos > 99) {
            return false
        }

        for(let i = cord; i <= lastPos; i+= 10) {
            if(positions[i].occupied) {
                return false;
            }
        }

        for(let i = cord; i <= lastPos; i+= 10) {
            positions[i].ship = ship;
            positions[i].occupied = true;
            positions[i].shipPos = (i - cord)/10;
        }
        ships.push(ship);
        return true;
    }

    const placeHorizontally = (ship, cord) => {
        if(cord%10 === 9 && ship.size > 1) { //wrong
            return false
        }

        for(let i = cord; i < cord + ship.size; i++) {
            if(positions[i].occupied){
                return false
            }
        }

        for(let i = cord; i < cord + ship.size; i++) {
            positions[i].ship = ship;
            positions[i].occupied = true;
            positions[i].shipPos = i - cord;
        }
        ships.push(ship);
        return true;
    }

    const placeShip = (size, cord, dir = 'hor') => {
        let newShip = Ship(size);
        if(dir === 'hor'){
            return placeHorizontally(newShip, cord);
        }
       return placeVertically(newShip, cord);
    }

    const receiveAttack = (cord) => {
        if(!positions[cord].occupied) {
            positions[cord].isHit = true;
            return false
        }
        else if (positions[cord].occupied) {
            positions[cord].isHit = true;
            positions[cord].ship.hit(positions[cord].shipPos)
            return true
        }
    }
    
    const allSunk = () => {
        let aux = true;
        ships.forEach(ship => {
            if(ship.isSunk() === false){
                aux = false;
            }
        })
        return aux;
    }

    const board = {
        positions,
        placeShip,
        receiveAttack,
        allSunk
    };

    return board;
}

export default Gameboard;