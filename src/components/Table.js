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