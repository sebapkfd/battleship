import React, {useState} from 'react';
import Table from './Table';
import Game from '../factories/Game';
import Buttons from './Buttons';

const Board = () => {
    const [newGame, setNewGame] = useState(Game());
    const [started, setStarted] = useState(false);
    const [resetKey, setResetKey] = useState(0);
    const [shipSize, setShipSize] = useState(5);
    const [direction, setDirection] = useState('horizontal');
    const [winner, setWinner] = useState(null);
    const user = newGame.Player1;
    const pc = newGame.Player2;
    const [userAlive, setUserAlive] = useState(4);
    const [pcAlive, setPcAlive] = useState(4);

    const restartGame = () => {
        setNewGame(Game());
        setStarted(false);
        setResetKey(resetKey + 1)
        setShipSize(5);
        setWinner(null);
        setUserAlive(4);
        setPcAlive(4);
    }

    const changeDirection = () => {
        if(direction === 'horizontal') {
            setDirection('vertical')
        }
        else {
            setDirection('horizontal')
        }
    }

    const updateShipsAlive = () => {
        if(shipSize > 1) {
            setShipSize(shipSize - 1);
        }
    }

    const updateAlive = (boardToUpdate) => {
        if(boardToUpdate === 'Pc') {
            let shipsAlive = pc.board.availableShips();
            setPcAlive(shipsAlive);
        }
        else if(boardToUpdate === 'User') {
            let shipsAlive = user.board.availableShips();
            setUserAlive(shipsAlive);
        }
    }

    const pcTurn = (mode, prevAttack) => {
        let result;
        if (mode === 'combo') {
            result = pc.combo(prevAttack, user.board);
        }else {
            result = pc.randomAttack(user.board);
        }

        if(result.isHit === null){
        }
        let boxAttacked = document.getElementById(`User${result.mov}`);
        if (result.isHit) {
            boxAttacked.className = 'hit-box';
            pcTurn('combo', result.mov);
        }else {
            boxAttacked.className = 'no-hit-box';
        }
    }

    const turns = (pos) => {
        if(newGame.isFinished() || !started){
            return null;
        }
        const attackHit = user.attack(pc.board, pos);
        updateAlive('Pc')
        if (attackHit === null){
            return null
        }
        else if(!attackHit) {
            pcTurn(null);
        }
        updateAlive('User')
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
                updateShipsAlive();
                if(shipSize === 2) {
                    setStarted(true);
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

    let userTable = <Table
                        key={`A${resetKey}`} 
                        selectMove={turns} 
                        selectPos={placeFleets} 
                        tableName='User'
                        status={userAlive}
                        display={started}
                        />;
                            
    let pcTable = <Table
                    key={`B${resetKey}`}
                    selectMove={turns}
                    selectPos={placeFleets} 
                    tableName='Pc'
                    status={pcAlive}
                    display={started}
                    />;
    
    let instruction = (started) ? <h3>Attack the enemy</h3>: <h3> Place your ships on the User Board</h3> 
    let winnerMsg = (winner) ? <h3> {winner} wins!</h3> : null;

    return (
        <div className='board'>
            <div className = 'buttons-ins'>{/* Maybe buttons on new Component */}
                <Buttons
                    shipSize={shipSize}
                    started={started}
                    direction={direction}
                    changeDirection={changeDirection}
                    restartGame={restartGame}
                />
                {instruction}
                {winnerMsg}
            </div>
            <div className='tables-display'>
                {userTable}
                {pcTable}
            </div>
        </div>
    )
}

export default Board;