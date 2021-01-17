import React, {useState} from 'react';

const Box = (props) => {
    const {id, attack, tableName} = props;
    const [boxType, setBoxType] = useState('box');

    const pcFunction = () => {
        const attackResult = attack(id);
            if (attackResult === null) {
                console.log('move not valid');
            }
            else if(attackResult){
                setBoxType('hit-box');
            }else if(!attackResult){
                setBoxType('no-hit-box');
            }
    }

    const userFunction = () => {
        const attackResult = attack(id);
            if (attackResult === null) {
                setBoxType('box-selected'); //this change color only when game started
                console.log(`Working on: user${id}`, boxType)
            }
        // setBoxType('box-selected'); //this change color only when game started
        // console.log(`Working on: user${id}`, boxType)
    }

    const handleClick = () => {
        if(tableName === 'pc'){
            return pcFunction();
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