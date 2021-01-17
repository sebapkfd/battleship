import React, {useState} from 'react';
import Table from './Table';
import Game from '../factories/Game';

const Board = () => {
    const [newGame, setNewGame] = useState(Game());
    const [started, setStarted] = useState(false);
    const [resetKey, setResetKey] = useState(0);
    const [count, setCount] = useState(0);
    const [direction, setDirection] = useState('horizontal');
    const user = newGame.Player1;
    const pc = newGame.Player2;

    const restartGame = () => {
        setNewGame(Game());
        setStarted(false);
        setCount(0);
        setResetKey(resetKey + 1)
    }

    const changeDirection = () => {
        if(direction === 'horizontal') {
            setDirection('vertical')
        }
        else {
            setDirection('horizontal')
        }
    }

    const pcTurn = () => {
        let result = pc.randomAttack(user.board);
        if(result.isHit === null){
        }
        let boxAttacked = document.getElementById(`user${result.mov}`);
        if (result.isHit) {
            boxAttacked.className = 'hit-box';
        }else {
            boxAttacked.className = 'no-hit-box';
        }
    }

    const turns = (pos) => {// add started validation
        if(newGame.isFinished() || !started){
            return null;
        }
        const attackHit = user.attack(pc.board, pos);
        if (attackHit === null){
            return null
        }
        else if(attackHit){
            pcTurn();
            return true    
        }
        else if (!attackHit){
            pcTurn();
            return false
        }
    }

    const displayShips = (size, id, dir) => {
       let boxAttacked;
       if(dir === 'horizontal') {
           const lastPos = parseInt(id) + size - 1;
           for(let i = id; i <= lastPos; i++) {
               boxAttacked = document.getElementById(`user${i}`);
               if (boxAttacked.className !== 'box-selected') {
                   boxAttacked.className = 'box-selected';
                }
            }
       }
       else if(dir ==='vertical') {
           const lastPos = id + (size-1)*10;
           for(let i = id; i <= lastPos; i+= 10) {
               boxAttacked = document.getElementById(`user${i}`);
               if (boxAttacked.className !== 'box-selected') {
                   boxAttacked.className = 'box-selected';
                }
            }
        }
    }

    const placeFleets = (id) => {
        if(!started) {
            let sizeShip = 4;
            const userResult = user.board.placeShip(sizeShip, id, direction);
            if(userResult) {
                displayShips(sizeShip, id, direction);
                const pcResult = pc.randomPlace(sizeShip);
                setCount(count + 1);
                if(count === 3) {
                    setStarted(true);
                    console.log('Game Starts');
                }
            }
        }
    }

    let userTable = <Table key={`A${resetKey}`} selectMove={turns} selectPos={placeFleets} tableName='user'/>;
    let pcTable = <Table key={`B${resetKey}`} selectMove={turns} selectPos={placeFleets} tableName='pc'/>;

    return (
        <div className='board'>
            <button onClick={restartGame}>Clean</button>
            <button onClick={changeDirection}>{direction}</button>
            <div className='tables-display'>
                {userTable}
                {pcTable}
            </div>
        </div>
    )
}

export default Board ;