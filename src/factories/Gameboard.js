import Ship from './Ship';

const Gameboard = () => {
    
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
        const lastPos = cord + ship.size - 1;
        if(Math.floor(cord/10) !== Math.floor(lastPos/10)) {
            return false
        }

        for(let i = cord; i <= lastPos; i++) {
            if(positions[i].occupied){
                return false
            }
        }

        for(let i = cord; i <= lastPos; i++) {
            positions[i].ship = ship;
            positions[i].occupied = true;
            positions[i].shipPos = i - cord;
        }
        ships.push(ship);
        return true;
    }

    const placeShip = (size, cord, dir) => {
        let newShip = Ship(size);
        if(dir === 'horizontal'){
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

    const availableShips = () => {
        let count = 0;
        ships.forEach(ship => {
            if(ship.isSunk() === false){
                count++;
            }
        })
        return count;
    }

    const board = {
        positions,
        placeShip,
        receiveAttack,
        allSunk,
        availableShips
    };

    return board;
}

export default Gameboard;