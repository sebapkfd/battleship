import Gameboard from './Gameboard'

const Player = () => {

    const board = Gameboard();
    const posHit = [];

    const randomAttack = (enemyBoard) => {
        if(posHit.length === 100) {
            return {isHit: null, mov: -1}
        }
        let mov;
        while (true) {
            mov = Math.floor(Math.random() * 100); 
            if(!posHit.includes(mov)){
                break;
            }
        }
        const isHit = enemyBoard.receiveAttack(mov);
        posHit.push(mov);
        return {isHit, mov};
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

    const attack = (enemyBoard, pos) => {
        if(posHit.length === 100 || posHit.includes(pos)) {
            return null
        }
        const isHit = enemyBoard.receiveAttack(pos);
        posHit.push(pos);
        return isHit;
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