import Gameboard from './Gameboard'
import Ship from './Ship';

const Player = () => {

    const board = Gameboard();
    const posHit = [];

    const randomPlay = (enemyBoard) => {
        if(posHit.length === 100) {
            return false
        }
        let mov;
        enemyBoard.placeShip(Ship(1), 0)
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
        randomPlay,
        attack
    }

    return User;
}

export default Player;