import React, {useState} from 'react';

const Box = (props) => {
    const {id, attack, playerId} = props;
    let [boxType, setBoxType] = useState('box');

    const handleClick = () => {
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

    return (
        <div 
            className={boxType}
            id={`${playerId}${id}`}
            onClick={handleClick}
        >
        </div>
    )
}

export default Box;