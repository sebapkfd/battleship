const Ship = (size) => {

    const status = Array(size).fill(false)

    const hit = (position) => {
        if(!status[position]) {
            status[position] = true;
        }
    }

    const isSunk = () => {
        return !status.includes(false)
    }

    const newShip = {
        size,
        status,
        hit,
        isSunk
    }
    
    return newShip;
}

export default Ship;