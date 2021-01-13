import Box from './Box';

const Table = () => {

    let boxArray = [];
    for (let i = 0; i < 100; i++) {
        const newBox = <Box i={i} boxId={i}/>
        // console.log(i);
        boxArray.push(newBox);
    }

    return (
        <div className='table'>
            {boxArray}
        </div>
    )
}

export default Table;