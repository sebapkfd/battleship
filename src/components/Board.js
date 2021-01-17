import React, {useState} from 'react';
import Table from './Table';
import Game from '../factories/Game';

const Board = () => {
    const [newGame, setNewGame] = useState(Game());
    const [started, setStarted] = useState(false);
    const [resetKey, setResetKey] = useState(0);
    const [count, setCount] = useState(0);
    const user = newGame.Player1;
    const pc = newGame.Player2;

    const restartGame = () => { //giving problems
        setNewGame(Game());
        setStarted(false);
        setCount(0);
        setResetKey(resetKey + 1)
    }

    const pcTurn = () => {
        let result = pc.randomAttack(user.board);
        if(result.isHit === null){
            console.log('random attack not valid');
        }
        let boxAttacked = document.getElementById(`user${result.mov}`);
        if (result.isHit) {
            boxAttacked.className = 'hit-box';
        }else {
            boxAttacked.className = 'no-hit-box';
        }
    }

    const turns = (pos) => {
        if(newGame.isFinished()){
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

    const placeFleets = (id) => {
        if(!started) {
            user.board.placeShip(1, id)
            pc.randomPlace(1)
            const boxAttacked = document.getElementById(`user${id}`);
            if (boxAttacked.className !== 'box-selected') {
                boxAttacked.className = 'box-selected';
            }
            setCount(count + 1);
            if(count === 3) {
                setStarted(true);
                console.log('Game Starts');
            }
        }
    }

    let userTable = <Table key={`A${resetKey}`} selectMove={turns} selectPos={placeFleets} tableName='user'/>;
    let pcTable = <Table key={`B${resetKey}`} selectMove={turns} selectPos={placeFleets} tableName='pc'/>;

    return (
        <div className='board'>
            <button onClick={restartGame}>Clean</button>
            <div className='tables-display'>
                {userTable}
                {pcTable}
            </div>
        </div>
    )
}

export default Board ;