import React, {useState} from 'react';

const Box = (props) => {
    const {id, attack, tableName, place} = props;
    let [boxType, setBoxType] = useState('box');

    const handleClick = () => {
        if(tableName === 'pc'){
            const attackResult = attack(id);
            if (attackResult === null) {
                console.log('move not valid');
            }
            else if(attackResult){
                console.log('should be red');
                setBoxType('hit-box');
            }else if(!attackResult){
                console.log('should be blue');
                setBoxType('no-hit-box');
            }
        }
        else if (tableName === 'user') {
            return place(id);
        }
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