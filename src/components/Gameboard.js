// maybe saving the fleets on an object
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

    const placeShip = (ship, cord) => {
        if(cord%10 === 9 && ship.size > 1) {
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