import React, {useState} from 'react';
import Table from './Table';
import Game from '../factories/Game';

const Board = () => {
    const [newGame, setNewGame] = useState(Game());
    newGame.defaultPos();
    const user = newGame.Player1;
    const pc = newGame.Player2;

    const restartGame = () => {
        setNewGame(Game());
    }

    const pcTurn = () => {
        let result = pc.randomAttack(user.board);
        if(result.isHit === null){
            console.log('random attack not valid');
        }
        let boxAttacked = document.getElementById(`pc${result.mov}`);
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

    return (
        <div className='board'>
            <button onClick={restartGame}>Clean</button>
            <div className='tables-display'>
                <Table key={`A${new Date().getTime()}`} player='pc'/>
                <Table key={`B${new Date().getTime()}`} selectMove={turns} player='user'/>
            </div>
        </div>
    )
}

export default Board ;