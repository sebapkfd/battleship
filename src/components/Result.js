import React from 'react';

const Result = (props) => {
    const {winner} = props;
    
    const message = (winner) ? <h3>{winner} Wins!</h3>: null;

    return (
        <div className='message'>
            {message}
        </div>
    );
}

export default Result;