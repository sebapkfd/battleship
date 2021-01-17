import React, {useState} from 'react';
import Table from './Table';
import Game from '../factories/Game';

const Board = () => {
    const [newGame, setNewGame] = useState(Game());
    const [started, setStarted] = useState(false);
    const [resetKey, setResetKey] = useState(0);
    const [shipSize, setShipSize] = useState(5);
    const [direction, setDirection] = useState('horizontal');
    const [winner, setWinner] = useState(null);
    const user = newGame.Player1;
    const pc = newGame.Player2;

    const restartGame = () => {
        setNewGame(Game());
        setStarted(false);
        setResetKey(resetKey + 1)
        setShipSize(5);
        setWinner(null);
    }

    const changeDirection = () => {
        if(direction === 'horizontal') {
            setDirection('vertical')
        }
        else {
            setDirection('horizontal')
        }
    }

    const updateShips = () => {
        if(shipSize > 1) {
            setShipSize(shipSize - 1);
        }
    }

    const pcTurn = () => {
        let result = pc.randomAttack(user.board);
        if(result.isHit === null){
        }
        let boxAttacked = document.getElementById(`User${result.mov}`);
        if (result.isHit) {
            boxAttacked.className = 'hit-box';
        }else {
            boxAttacked.className = 'no-hit-box';
        }
    }

    const turns = (pos) => {
        if(newGame.isFinished() || !started){
            return null;
        }
        const attackHit = user.attack(pc.board, pos);
        if (attackHit === null){
            return null
        }
        pcTurn();
        displayWinner();
        return attackHit;
    }

    const displayShips = (size, id, dir) => {
       let boxAttacked;
       if(dir === 'horizontal') {
           const lastPos = parseInt(id) + size - 1;
           for(let i = id; i <= lastPos; i++) {
               boxAttacked = document.getElementById(`User${i}`);
               if (boxAttacked.className !== 'box-selected') {
                   boxAttacked.className = 'box-selected';
                }
            }
       }
       else if(dir ==='vertical') {
           const lastPos = id + (size-1)*10;
           for(let i = id; i <= lastPos; i+= 10) {
               boxAttacked = document.getElementById(`User${i}`);
               if (boxAttacked.className !== 'box-selected') {
                   boxAttacked.className = 'box-selected';
                }
            }
        }
    }

    const placeFleets = (id) => {
        if(!started) {
            const userResult = user.board.placeShip(shipSize, id, direction);
            if(userResult) {
                displayShips(shipSize, id, direction);
                pc.randomPlace(shipSize);
                updateShips();
                if(shipSize === 2) {
                    setStarted(true);
                    console.log('Game Starts');
                }
            }
        }
    }

    const displayWinner = () => {
        if(newGame.isFinished() && started) {
            if(user.board.allSunk()) {
                setWinner('Pc')
            }
            else if(pc.board.allSunk()) {
                setWinner('User');
            }
            return true
        }
        return false;
    }

    let userTable = <Table key={`A${resetKey}`} selectMove={turns} selectPos={placeFleets} tableName='User'/>;
    let pcTable = <Table key={`B${resetKey}`} selectMove={turns} selectPos={placeFleets} tableName='Pc'/>;
    let sizeButton = (shipSize > 1) ? <button>Ship size: {shipSize}</button>: null;
    let directionButton = (started) ? null : <button onClick={changeDirection}>{direction}</button>;
    let winnerMsg = (winner) ? <h3> {winner} wins!</h3> : null;

    return (
        <div className='board'>
            <button onClick={restartGame}>Clean</button>
            {directionButton}
            {sizeButton}
            {winnerMsg}
            <div className='tables-display'>
                {userTable}
                {pcTable}
            </div>
        </div>
    )
}

export default Board;