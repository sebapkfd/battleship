import Table from './Table';
import Game from '../factories/Game';

const Board = () => {

    const newGame = Game();
    newGame.defaultPos();
    const user = newGame.Player1;
    const pc = newGame.Player2;

    const isFinished = () => { 
        //need to add a condition if it is finished cant play anymore
        // this should be in Game.js
        if(user.board.allSunk() || pc.board.allSunk()){
            console.log('Game Over');
            return true
        }
        return false
    }

    const turns = (pos) => { //maybe this goes in Game.js
        if(!user.attack(pc.board, pos)){
            console.log('Move not valid, already attacked');
            return 
        }
        pc.randomAttack(user.board);
        if(isFinished()){
            return
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