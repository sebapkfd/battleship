import Table from './Table';
import Game from '../factories/Game';

const Board = () => {

    const newGame = Game();
    newGame.defaultPos();
    const user = newGame.Player1;
    const pc = newGame.Player2;

    const turns = (pos) => {
        if(newGame.isFinished()){
            return false
        }
        if(!user.attack(pc.board, pos)){
            console.log('Move not valid, already attacked');
            return false
        }
        pc.randomAttack(user.board);
        return true
    }

    return (
        <div className='board'>
            <Table/>
            <Table selectMove={turns}/>
        </div>
    )
}

export default Board ;