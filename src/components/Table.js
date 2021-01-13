import React from 'react';
import Box from './Box';

const Table = (props) => {
    
    const {selectMove, tableName} = props;

    const handleSelect = (pos) => {
        return selectMove(pos);
    }

    let boxArray = [];
    for (let i = 0; i < 100; i++) {
        const newBox = <Box 
                        key={i}
                        id={i}
                        tableName={tableName}
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