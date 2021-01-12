import Gameboard from './Gameboard'

const Player = () => {

    const board = Gameboard();
    const posHit = [];

    const randomAttack = (enemyBoard) => {
        if(posHit.length === 100) {
            return false
        }
        let mov;
        while (true) {
            mov = Math.floor(Math.random() * 100); 
            if(!posHit.includes(mov)){
                break;
            }
        }
        enemyBoard.receiveAttack(mov);
        posHit.push(mov);
        return true;
    }

    const randomPlace = (size) => {
        let pos;
        while (true) {
            pos = Math.floor(Math.random() * 100);
            if(board.placeShip(size, pos)){
                break
            }
        }
        return pos
    }

    const attack = (enemyBoard, pos = 10) => {
        if(posHit.length === 100 || posHit.includes(pos)) {
            return false
        }
        enemyBoard.receiveAttack(pos);
        posHit.push(pos);
        return true;
    }

    const User = {
        board,
        randomAttack,
        randomPlace,
        attack
    }

    return User;
}

export default Player;