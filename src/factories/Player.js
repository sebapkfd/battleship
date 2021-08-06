import Gameboard from './Gameboard'

const Player = () => {
    const board = Gameboard();
    const posHit = [];
    let possibleAttacks = [];

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

    const setPossibleAttacks = (pos) => {
        if(pos + 10 < 99 && !posHit.includes(pos + 10) && !possibleAttacks.includes(pos + 10)) {
            possibleAttacks.push(pos + 10);
        }
        if(pos - 10 > 0 && !posHit.includes(pos - 10) && !possibleAttacks.includes(pos - 10)) {
            possibleAttacks.push(pos - 10);
        }
        if( !(pos%10 === 0 && (pos - 1)%10 === 9) && !posHit.includes(pos - 1) && (pos - 1 >= 0) && !possibleAttacks.includes(pos - 1)) {
            possibleAttacks.push(pos - 1)
        }
        if( !(pos%10 === 9 && (pos + 1)%10 === 0) && !posHit.includes(pos + 1) && (pos + 1 <= 99) && !possibleAttacks.includes(pos + 1)) {
            possibleAttacks.push(pos + 1)
        }
    }

    const combo = (enemyBoard) => {
        if (possibleAttacks.length === 0) {
            return randomAttack(enemyBoard);
        }
        else {
            let indexToAttack = Math.floor(Math.random() * possibleAttacks.length);
            let mov = possibleAttacks[indexToAttack];
            possibleAttacks.splice(indexToAttack, 1)
            const isHit = enemyBoard.receiveAttack(mov);
            posHit.push(mov);
            return {isHit, mov};
        }
    }

    const randomPlace = (size) => {
        let pos;
        let dirOpt = ['horizontal', 'vertical'];
        let dir = dirOpt[Math.floor(Math.random() * 2)];
        while (true) {
            pos = Math.floor(Math.random() * 100);
            if(board.placeShip(size, pos, dir)){
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

    const turn = (mode, userBoard) => {
        let result = (mode === 'combo' || possibleAttacks.length > 0) ? (
            combo(userBoard)
        ) : (
            randomAttack(userBoard)
        )

        if(result.isHit !== null){
            let boxAttacked = document.getElementById(`User${result.mov}`);
            if (result.isHit) {
                boxAttacked.className = 'hit-box';
                setPossibleAttacks(result.mov);
            }
            else {
                boxAttacked.className = 'no-hit-box';
            }
        }
    }

    const User = {
        board,
        possibleAttacks,
        randomAttack,
        randomPlace,
        attack,
        combo,
        setPossibleAttacks,
        turn
    }

    return User;
}

export default Player;