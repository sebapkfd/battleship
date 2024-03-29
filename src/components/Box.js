import React, {useState} from 'react';

const Box = ({ values: {id, attack, tableName} }) => {
    const [boxType, setBoxType] = useState('box');

    const handleClick = () => {
        if(tableName === 'Pc'){
            const attackResult = attack(id);
            if (attackResult !== null) {
                (attackResult) ? setBoxType('hit-box') : setBoxType('no-hit-box');
            }
            return
        }
        return attack(id);
    }

    return (
        <div 
            className={boxType}
            id={`${tableName}${id}`}
            onClick={handleClick}
        >
        </div>
    )
}

export default Box;