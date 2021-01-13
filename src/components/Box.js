import React from 'react';

const Box = (props) => {
    const {boxId} = props;
    return (
        <div className='box' id={boxId}> </div>
    )
}

export default Box;