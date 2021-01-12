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

    const placeShip = (size, cord) => {
        let newShip = Ship(size);
        if(cord%10 === 9 && newShip.size > 1) {
            return false
        }

        for(let i = cord; i < cord + newShip.size; i++) {
            if(positions[i].occupied){
                return false
            }
        }

        for(let i = cord; i < cord + newShip.size; i++) {
            positions[i].ship = newShip;
            positions[i].occupied = true;
            positions[i].shipPos = i - cord;
        }
        ships.push(newShip);
        return true;
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