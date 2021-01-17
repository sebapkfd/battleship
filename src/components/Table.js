import React from 'react';
import Box from './Box';

const Table = (props) => {
    
    const {selectMove, tableName, selectPos, status, display} = props;

    const handleSelect = (pos) => {
        if(tableName === 'Pc'){
            return selectMove(pos);   
        }
        return selectPos(pos);
    }

    const boxArray = [];
    for (let i = 0; i < 100; i++) {
        const newBox = <Box 
                        key={i}
                        id={i}
                        tableName={tableName}
                        attack={handleSelect}
                        />
        boxArray.push(newBox);
    }

    let tableStatus = (display) ? <h2>{status} Ships Available {display}</h2>: null;

    return (
        <div>
            <div className='table-name'>
                <h2>{tableName} Board</h2>
            </div>
            <div className='table-status'>
                {tableStatus}
            </div>
            <div className='table'>
                {boxArray}
            </div>
        </div>
    )
}

export default Table;