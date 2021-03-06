import Player from './Player';

const Game = () => {
    const Player1 = Player();
    const Player2 = Player();

    const defaultPos = () => {
        for(let i = 0; i < 1; i++){
            Player1.board.placeShip(3, 0);
            Player2.board.placeShip(3, 0);
        }
        return true
    }

    const isFinished = () => {
        if(Player1.board.allSunk() || Player2.board.allSunk()){
            return true
        }
        return false
    }

    return {
        Player1,
        Player2,
        defaultPos,
        isFinished
    }
}

export default Game;