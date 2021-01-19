import React from 'react';
import Box from './Box';

const Table = (props) => {
    const {turns, placeFleets, started, tableName, status} = props.values;

    const attack = (pos) => {
        if(tableName === 'Pc'){
            return turns(pos);   
        }
        return placeFleets(pos);
    }

    const boxArray = [];
    const boxValues = {attack, tableName}
    for (let i = 0; i < 100; i++) {
        let newBox = <Box key={i} values={{...boxValues, id: i}}/>
        boxArray.push(newBox);
    }

    const tableStatus = (started) ? <h2>{status} Ships Available {started}</h2>: null;

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