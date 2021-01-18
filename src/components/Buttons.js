import React from 'react';

const Buttons = (props) => {

    const {shipSize, started, direction, changeDirection, restartGame} = props;

    let sizeButton = (shipSize > 1) ? <button>Ship size: {shipSize}</button>: null;
    let directionButton = (started) ? null : <button onClick={changeDirection}>{direction}</button>;
    let restartButton = <button onClick={restartGame}>Restart</button>

    return (
        <div className = 'buttons'>
            {restartButton}
            {directionButton}
            {sizeButton}
        </div>
    )
}

export default Buttons;