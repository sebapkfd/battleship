import React, {useState} from 'react';

const Box = (props) => {
    const {id, attack} = props;
    let [boxType, setBoxType] = useState('box');

    const handleClick = () => {
        const attackResult = attack(id);
        console.log(attackResult);
        if(attackResult && boxType === 'box'){
            console.log('should be red');
            setBoxType('hit-box');
        }else if(!attackResult && boxType === 'box'){
            console.log('should be blue');
            setBoxType('no-hit-box');
        }
    }

    return (
        <div 
            className={boxType}
            id={id}
            onClick={handleClick}
        >
        </div>
    )
}

export default Box;