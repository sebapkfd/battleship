import Buttons from "./Buttons";
import Result from "./Result";

const BoardInfo = ({ values: {started, buttonValues, winner} }) => {
    const instruction = (started) ? <h3>Attack the enemy</h3>: <h3> Place your ships on the Board</h3>;

    return (
        <div className = 'buttons-ins'>
            {instruction}
            <Buttons values={buttonValues} />
            <Result winner={winner} />
        </div>
    )

}

export default BoardInfo;