import Player from './Player';

const Game = () => {
    const user = Player();
    const pc = Player();

    const defaultPos = () => {
        for(let i = 0; i < 1; i++){
            user.board.placeShip(3, 0);
            pc.board.placeShip(3, 0);
        }
        return true
    }

    const isFinished = () => {
        return (user.board.allSunk() || pc.board.allSunk()) ? true : false;
    }

    return {
        user,
        pc,
        defaultPos,
        isFinished
    }
}

export default Game;