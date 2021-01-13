import React from 'react';

const Box = (props) => {
    const {id, attack} = props;

    const handleClick = () => {
        attack(id);
    }

    return (
        <div 
            className='box' 
            id={id}
            onClick={handleClick}
        >
        </div>
    )
}

export default Box;