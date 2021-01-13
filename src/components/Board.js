import Table from './Table';
import Game from '../factories/Game';

const Board = () => {

    const newGame = Game();
    newGame.defaultPos();
    const user = newGame.Player1;
    const pc = newGame.Player2;

    const turns = (pos) => {
        if(newGame.isFinished()){
            return null;
        }
        const attackHit = user.attack(pc.board, pos);
        if (attackHit === null){
            console.log('Move not valid, already attacked');
            return null
        }
        else if(attackHit){
            pc.randomAttack(user.board);
            return true    
        }
        else if (!attackHit){
            console.log('Hit empty position');
            return false
        }
    }

    return (
        <div className='board'>
            <Table/>
            <Table selectMove={turns}/>
        </div>
    )
}

export default Board ;