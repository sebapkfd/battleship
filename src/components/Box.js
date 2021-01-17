import React, {useState} from 'react';

const Box = (props) => {
    const {id, attack, tableName} = props;
    const [boxType, setBoxType] = useState('box');

    const handleClick = () => {
        if(tableName === 'Pc'){
            const attackResult = attack(id);
            if (attackResult === null) {
            }
            else if(attackResult){
                setBoxType('hit-box');
            }else if(!attackResult){
                setBoxType('no-hit-box');
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