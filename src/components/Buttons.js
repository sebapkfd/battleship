import React from 'react';

const Buttons = ({ values: {shipSize, started, direction, changeDirection, restartGame} }) => {
    const sizeButton = (shipSize > 1) ? <button>Ship size: {shipSize}</button>: null;
    const directionButton = (started) ? null : <button onClick={changeDirection}>{direction}</button>;
    const restartButton = <button onClick={() => restartGame()}>Restart</button>

    return (
        <div className='buttons'>
            {restartButton}
            {directionButton}
            {sizeButton}
        </div>
    )
}

export default Buttons;