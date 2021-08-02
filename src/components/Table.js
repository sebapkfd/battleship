import React from 'react';
import Box from './Box';
import TableInfo from './TableInfo'

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

    return (
        <div>
            <TableInfo info={{tableName, started, status}}/>
            <div className='table'>
                {boxArray}
            </div>
        </div>
    )
}

export default Table;