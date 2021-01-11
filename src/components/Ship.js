const Ship = (size) => {
    
    let newArray = Array(4);
    newArray.length = size;
    newArray.fill(false);

    const hit = (position) => {
        return 'xd'
    }

    const isSunk = (position) => {
        return 'xd'
    }

    const newShip = {
        size,
        status: newArray,
        hit: hit,
        isSunk: isSunk
    }
    
    return newShip;
}

export default Ship;