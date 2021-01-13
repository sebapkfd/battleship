import Player from './Player';

const Game = () => {
    const Player1 = Player();
    const Player2 = Player();

    const defaultPos = () => {
        for(let i = 0; i < 3; i++){
            Player1.board.placeShip(1, i*10);
            Player2.board.placeShip(1, i*10);
        }
        return true
    }

    const isFinished = () => {
        if(Player1.board.allSunk() || Player2.board.allSunk()){
            console.log('Game Over');
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