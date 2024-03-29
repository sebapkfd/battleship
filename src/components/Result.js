import React from 'react';

const Result = ({ winner }) => {
    const message = (winner) ? <h3>{winner} Wins!</h3>: null;

    return (
        <div className='message'>
            {message}
        </div>
    );
}

export default Result;