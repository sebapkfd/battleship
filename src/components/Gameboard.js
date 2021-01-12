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

        return true;
    }

    const receiveAttack = (cord) => {
        if(!positions[cord].occupied) {
            return false
        }
        else if (positions[cord].occupied) {
            positions[cord].isHit = true;
            positions[cord].ship.hit(positions[cord].shipPos)
            return true
        }
    }
    
    const board = {
        positions,
        placeShip,
        receiveAttack
    };

    return board;
}

export default Gameboard;