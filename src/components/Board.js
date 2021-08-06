import React, {useState} from 'react';
import Game from '../factories/Game';
import BoardInfo from './BoardInfo';
import Tables from './Tables';
import displayShips from './displayShips';

const Board = () => {
    const [gamePlay, setGamePlay] = useState(Game());
    const { user, pc, started, winner } = gamePlay;
    const [resetKey, setResetKey] = useState(0);
    const [shipSize, setShipSize] = useState(6);
    const [direction, setDirection] = useState('horizontal');
    const [userAlive, setUserAlive] = useState(5);
    const [pcAlive, setPcAlive] = useState(5);

    const restartGame = () => {
        setGamePlay(Game());
        setResetKey(resetKey + 1);
        setShipSize(6);
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
        if(gamePlay.isFinished() || !started) {
            return null;
        }
        const attackHit = user.attack(pc.board, pos);
        updateAlive('Pc');
        if(attackHit === null) {
            return null;
        }
        pc.turn('random', user.board)
        updateAlive('User');
        displayWinner();
        return attackHit;
    }

    const placeFleets = (id) => {
        if(!started) {
            const userResult = user.board.placeShip(shipSize, id, direction);
            if(userResult) {
                displayShips(shipSize, id, direction);
                pc.randomPlace(shipSize);
                updateShipsAlive();
                if(shipSize === 2) {
                    setGamePlay({...gamePlay, started: true});
                }
            }
        }
    }

    const displayWinner = () => {
        if(gamePlay.isFinished() && started) {
            if(user.board.allSunk()) {
                setGamePlay({...gamePlay, winner: 'Pc'});
            }
            else if(pc.board.allSunk()) {
                setGamePlay({...gamePlay, winner: 'User'});
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