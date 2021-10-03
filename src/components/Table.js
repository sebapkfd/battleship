import React from 'react';
import Box from './Box';
import TableInfo from './TableInfo'

const Table = ({ values: {turns, placeFleets, started, tableName, status} }) => {
    
    const attack = (pos) => {
        return (tableName === 'Pc') ? turns(pos) : placeFleets(pos);
    }

    const boxArray = [...Array(100)].map((item, i) => {
        return <Box key={i} values={{attack, tableName, id: i}}/>
    })

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