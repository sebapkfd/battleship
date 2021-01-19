import React from 'react';
import Box from './Box';

const Table = (props) => {
    
    const {turns, placeFleets, started, tableName, status} = props.values;

    const handleSelect = (pos) => {
        if(tableName === 'Pc'){
            return turns(pos);   
        }
        return placeFleets(pos);
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

    let tableStatus = (started) ? <h2>{status} Ships Available {started}</h2>: null;

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