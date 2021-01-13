import React from 'react';
import Box from './Box';

const Table = (props) => {
    
    const {selectMove} = props;

    const handleSelect = (pos) => {
        selectMove(pos);
    }

    let boxArray = [];
    for (let i = 0; i < 100; i++) {
        const newBox = <Box 
                        id={i}
                        attack={handleSelect}
                        />
        boxArray.push(newBox);
    }

    return (
        <div className='table'>
            {boxArray}
        </div>
    )
}

export default Table;