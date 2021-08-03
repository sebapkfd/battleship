import React, {useState} from 'react';
import Game from '../factories/Game';
import BoardInfo from './BoardInfo';
import Tables from './Tables';

const Board = () => {
    const [newGame, setNewGame] = useState(Game());
    const { user, pc } = newGame;
    const [started, setStarted] = useState(false);
    const [resetKey, setResetKey] = useState(0);
    const [shipSize, setShipSize] = useState(6);
    const [direction, setDirection] = useState('horizontal');
    const [winner, setWinner] = useState(null);
    const [userAlive, setUserAlive] = useState(5);
    const [pcAlive, setPcAlive] = useState(5);

    const restartGame = () => {
        setNewGame(Game());
        setStarted(false);
        setResetKey(resetKey + 1);
        setShipSize(6);
        setWinner(null);
        setUserAlive(5);
        setPcAlive(5);
    }

    const changeDirection = () => {
        (direction === 'horizontal') ? setDirection('vertical') : setDirection('horizontal');
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

    const turns = (pos) => {
        if(newGame.isFinished() || !started) {
            return null;
        }
        const attackHit = user.attack(pc.board, pos);
        updateAlive('Pc');
        if(attackHit === null) {
            return null;
        }
        else if(!attackHit) {
            pc.turn('random', user.board)
        }
        updateAlive('User');
        displayWinner();
        return attackHit;
    }

    const displayShips = (size, id, dir) => {
        //move to another modules
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
                setWinner('Pc');
            }
            else if(pc.board.allSunk()) {
                setWinner('User');
            }
            return true;
        }
        return false;
    }
    
    const buttonValues = {shipSize, started, direction, changeDirection, restartGame};
    const tableValues = {turns, placeFleets, started};
    const userValues = {tableName: 'User', status: userAlive};
    const pcValues = {tableName: 'Pc', status: pcAlive};
    const gameValues = {started, resetKey, tableValues, pcValues, userValues};

    return (
        <div className='board'>
            <BoardInfo values={{started, buttonValues, winner}} />
            <Tables values={gameValues} />
        </div>
    )
}

export default Board;